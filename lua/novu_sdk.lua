-- Novu SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("novu_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local NovuSDK = {}
NovuSDK.__index = NovuSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

NovuSDK._make_feature = _make_feature


function NovuSDK.new(options)
  local self = setmetatable({}, NovuSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function NovuSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function NovuSDK:get_utility()
  return Utility.copy(self._utility)
end


function NovuSDK:get_root_ctx()
  return self._rootctx
end


function NovuSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function NovuSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function NovuSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function NovuSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "NovuSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function NovuSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function NovuSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "NovuSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:ActivityNotificationResponseDto():list() / client:ActivityNotificationResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ActivityNotificationResponseDto(data)
  local EntityMod = require("entity.activity_notification_response_dto_entity")
  if data == nil then
    if self._activity_notification_response_dto == nil then
      self._activity_notification_response_dto = EntityMod.new(self, nil)
    end
    return self._activity_notification_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Agent():list() / client:Agent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Agent(data)
  local EntityMod = require("entity.agent_entity")
  if data == nil then
    if self._agent == nil then
      self._agent = EntityMod.new(self, nil)
    end
    return self._agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentIntegrationResponseDto():list() / client:AgentIntegrationResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:AgentIntegrationResponseDto(data)
  local EntityMod = require("entity.agent_integration_response_dto_entity")
  if data == nil then
    if self._agent_integration_response_dto == nil then
      self._agent_integration_response_dto = EntityMod.new(self, nil)
    end
    return self._agent_integration_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentResponseDto():list() / client:AgentResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:AgentResponseDto(data)
  local EntityMod = require("entity.agent_response_dto_entity")
  if data == nil then
    if self._agent_response_dto == nil then
      self._agent_response_dto = EntityMod.new(self, nil)
    end
    return self._agent_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Bulk():list() / client:Bulk():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Bulk(data)
  local EntityMod = require("entity.bulk_entity")
  if data == nil then
    if self._bulk == nil then
      self._bulk = EntityMod.new(self, nil)
    end
    return self._bulk
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChannelConnection():list() / client:ChannelConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ChannelConnection(data)
  local EntityMod = require("entity.channel_connection_entity")
  if data == nil then
    if self._channel_connection == nil then
      self._channel_connection = EntityMod.new(self, nil)
    end
    return self._channel_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChannelEndpoint():list() / client:ChannelEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ChannelEndpoint(data)
  local EntityMod = require("entity.channel_endpoint_entity")
  if data == nil then
    if self._channel_endpoint == nil then
      self._channel_endpoint = EntityMod.new(self, nil)
    end
    return self._channel_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Configure():list() / client:Configure():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Configure(data)
  local EntityMod = require("entity.configure_entity")
  if data == nil then
    if self._configure == nil then
      self._configure = EntityMod.new(self, nil)
    end
    return self._configure
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Context():list() / client:Context():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Context(data)
  local EntityMod = require("entity.context_entity")
  if data == nil then
    if self._context == nil then
      self._context = EntityMod.new(self, nil)
    end
    return self._context
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateSubscriptionsResponseDto():list() / client:CreateSubscriptionsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:CreateSubscriptionsResponseDto(data)
  local EntityMod = require("entity.create_subscriptions_response_dto_entity")
  if data == nil then
    if self._create_subscriptions_response_dto == nil then
      self._create_subscriptions_response_dto = EntityMod.new(self, nil)
    end
    return self._create_subscriptions_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Diff():list() / client:Diff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Diff(data)
  local EntityMod = require("entity.diff_entity")
  if data == nil then
    if self._diff == nil then
      self._diff = EntityMod.new(self, nil)
    end
    return self._diff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Domain():list() / client:Domain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Domain(data)
  local EntityMod = require("entity.domain_entity")
  if data == nil then
    if self._domain == nil then
      self._domain = EntityMod.new(self, nil)
    end
    return self._domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainConnectApplyUrlResponseDto():list() / client:DomainConnectApplyUrlResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:DomainConnectApplyUrlResponseDto(data)
  local EntityMod = require("entity.domain_connect_apply_url_response_dto_entity")
  if data == nil then
    if self._domain_connect_apply_url_response_dto == nil then
      self._domain_connect_apply_url_response_dto = EntityMod.new(self, nil)
    end
    return self._domain_connect_apply_url_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainConnectStatusResponseDto():list() / client:DomainConnectStatusResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:DomainConnectStatusResponseDto(data)
  local EntityMod = require("entity.domain_connect_status_response_dto_entity")
  if data == nil then
    if self._domain_connect_status_response_dto == nil then
      self._domain_connect_status_response_dto = EntityMod.new(self, nil)
    end
    return self._domain_connect_status_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainResponseDto():list() / client:DomainResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:DomainResponseDto(data)
  local EntityMod = require("entity.domain_response_dto_entity")
  if data == nil then
    if self._domain_response_dto == nil then
      self._domain_response_dto = EntityMod.new(self, nil)
    end
    return self._domain_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainRouteResponseDto():list() / client:DomainRouteResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:DomainRouteResponseDto(data)
  local EntityMod = require("entity.domain_route_response_dto_entity")
  if data == nil then
    if self._domain_route_response_dto == nil then
      self._domain_route_response_dto = EntityMod.new(self, nil)
    end
    return self._domain_route_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Environment():list() / client:Environment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Environment(data)
  local EntityMod = require("entity.environment_entity")
  if data == nil then
    if self._environment == nil then
      self._environment = EntityMod.new(self, nil)
    end
    return self._environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnvironmentTagsDto():list() / client:EnvironmentTagsDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:EnvironmentTagsDto(data)
  local EntityMod = require("entity.environment_tags_dto_entity")
  if data == nil then
    if self._environment_tags_dto == nil then
      self._environment_tags_dto = EntityMod.new(self, nil)
    end
    return self._environment_tags_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnvironmentVariable():list() / client:EnvironmentVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:EnvironmentVariable(data)
  local EntityMod = require("entity.environment_variable_entity")
  if data == nil then
    if self._environment_variable == nil then
      self._environment_variable = EntityMod.new(self, nil)
    end
    return self._environment_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnvironmentVariableWorkflowInfoDto():list() / client:EnvironmentVariableWorkflowInfoDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:EnvironmentVariableWorkflowInfoDto(data)
  local EntityMod = require("entity.environment_variable_workflow_info_dto_entity")
  if data == nil then
    if self._environment_variable_workflow_info_dto == nil then
      self._environment_variable_workflow_info_dto = EntityMod.new(self, nil)
    end
    return self._environment_variable_workflow_info_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateChatOAuthUrlResponseDto():list() / client:GenerateChatOAuthUrlResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:GenerateChatOAuthUrlResponseDto(data)
  local EntityMod = require("entity.generate_chat_o_auth_url_response_dto_entity")
  if data == nil then
    if self._generate_chat_o_auth_url_response_dto == nil then
      self._generate_chat_o_auth_url_response_dto = EntityMod.new(self, nil)
    end
    return self._generate_chat_o_auth_url_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GeneratePreviewResponseDto():list() / client:GeneratePreviewResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:GeneratePreviewResponseDto(data)
  local EntityMod = require("entity.generate_preview_response_dto_entity")
  if data == nil then
    if self._generate_preview_response_dto == nil then
      self._generate_preview_response_dto = EntityMod.new(self, nil)
    end
    return self._generate_preview_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImportMasterJsonResponseDto():list() / client:ImportMasterJsonResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ImportMasterJsonResponseDto(data)
  local EntityMod = require("entity.import_master_json_response_dto_entity")
  if data == nil then
    if self._import_master_json_response_dto == nil then
      self._import_master_json_response_dto = EntityMod.new(self, nil)
    end
    return self._import_master_json_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InboxNotificationDto():list() / client:InboxNotificationDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:InboxNotificationDto(data)
  local EntityMod = require("entity.inbox_notification_dto_entity")
  if data == nil then
    if self._inbox_notification_dto == nil then
      self._inbox_notification_dto = EntityMod.new(self, nil)
    end
    return self._inbox_notification_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IntegrationResponseDto():list() / client:IntegrationResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:IntegrationResponseDto(data)
  local EntityMod = require("entity.integration_response_dto_entity")
  if data == nil then
    if self._integration_response_dto == nil then
      self._integration_response_dto = EntityMod.new(self, nil)
    end
    return self._integration_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Layout():list() / client:Layout():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Layout(data)
  local EntityMod = require("entity.layout_entity")
  if data == nil then
    if self._layout == nil then
      self._layout = EntityMod.new(self, nil)
    end
    return self._layout
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LayoutResponseDto():list() / client:LayoutResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:LayoutResponseDto(data)
  local EntityMod = require("entity.layout_response_dto_entity")
  if data == nil then
    if self._layout_response_dto == nil then
      self._layout_response_dto = EntityMod.new(self, nil)
    end
    return self._layout_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Link():list() / client:Link():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Link(data)
  local EntityMod = require("entity.link_entity")
  if data == nil then
    if self._link == nil then
      self._link = EntityMod.new(self, nil)
    end
    return self._link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListAgentIntegrationsResponseDto():list() / client:ListAgentIntegrationsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListAgentIntegrationsResponseDto(data)
  local EntityMod = require("entity.list_agent_integrations_response_dto_entity")
  if data == nil then
    if self._list_agent_integrations_response_dto == nil then
      self._list_agent_integrations_response_dto = EntityMod.new(self, nil)
    end
    return self._list_agent_integrations_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListAgentsResponseDto():list() / client:ListAgentsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListAgentsResponseDto(data)
  local EntityMod = require("entity.list_agents_response_dto_entity")
  if data == nil then
    if self._list_agents_response_dto == nil then
      self._list_agents_response_dto = EntityMod.new(self, nil)
    end
    return self._list_agents_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListChannelConnectionsResponseDto():list() / client:ListChannelConnectionsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListChannelConnectionsResponseDto(data)
  local EntityMod = require("entity.list_channel_connections_response_dto_entity")
  if data == nil then
    if self._list_channel_connections_response_dto == nil then
      self._list_channel_connections_response_dto = EntityMod.new(self, nil)
    end
    return self._list_channel_connections_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListChannelEndpointsResponseDto():list() / client:ListChannelEndpointsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListChannelEndpointsResponseDto(data)
  local EntityMod = require("entity.list_channel_endpoints_response_dto_entity")
  if data == nil then
    if self._list_channel_endpoints_response_dto == nil then
      self._list_channel_endpoints_response_dto = EntityMod.new(self, nil)
    end
    return self._list_channel_endpoints_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListContextsResponseDto():list() / client:ListContextsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListContextsResponseDto(data)
  local EntityMod = require("entity.list_contexts_response_dto_entity")
  if data == nil then
    if self._list_contexts_response_dto == nil then
      self._list_contexts_response_dto = EntityMod.new(self, nil)
    end
    return self._list_contexts_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDomainRoutesResponseDto():list() / client:ListDomainRoutesResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListDomainRoutesResponseDto(data)
  local EntityMod = require("entity.list_domain_routes_response_dto_entity")
  if data == nil then
    if self._list_domain_routes_response_dto == nil then
      self._list_domain_routes_response_dto = EntityMod.new(self, nil)
    end
    return self._list_domain_routes_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDomainsResponseDto():list() / client:ListDomainsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListDomainsResponseDto(data)
  local EntityMod = require("entity.list_domains_response_dto_entity")
  if data == nil then
    if self._list_domains_response_dto == nil then
      self._list_domains_response_dto = EntityMod.new(self, nil)
    end
    return self._list_domains_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSubscribersResponseDto():list() / client:ListSubscribersResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListSubscribersResponseDto(data)
  local EntityMod = require("entity.list_subscribers_response_dto_entity")
  if data == nil then
    if self._list_subscribers_response_dto == nil then
      self._list_subscribers_response_dto = EntityMod.new(self, nil)
    end
    return self._list_subscribers_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListTopicSubscriptionsResponseDto():list() / client:ListTopicSubscriptionsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListTopicSubscriptionsResponseDto(data)
  local EntityMod = require("entity.list_topic_subscriptions_response_dto_entity")
  if data == nil then
    if self._list_topic_subscriptions_response_dto == nil then
      self._list_topic_subscriptions_response_dto = EntityMod.new(self, nil)
    end
    return self._list_topic_subscriptions_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListTopicsResponseDto():list() / client:ListTopicsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:ListTopicsResponseDto(data)
  local EntityMod = require("entity.list_topics_response_dto_entity")
  if data == nil then
    if self._list_topics_response_dto == nil then
      self._list_topics_response_dto = EntityMod.new(self, nil)
    end
    return self._list_topics_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MasterJson():list() / client:MasterJson():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:MasterJson(data)
  local EntityMod = require("entity.master_json_entity")
  if data == nil then
    if self._master_json == nil then
      self._master_json = EntityMod.new(self, nil)
    end
    return self._master_json
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Message():list() / client:Message():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Message(data)
  local EntityMod = require("entity.message_entity")
  if data == nil then
    if self._message == nil then
      self._message = EntityMod.new(self, nil)
    end
    return self._message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MessageResponseDto():list() / client:MessageResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:MessageResponseDto(data)
  local EntityMod = require("entity.message_response_dto_entity")
  if data == nil then
    if self._message_response_dto == nil then
      self._message_response_dto = EntityMod.new(self, nil)
    end
    return self._message_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationFeedItemDto():list() / client:NotificationFeedItemDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:NotificationFeedItemDto(data)
  local EntityMod = require("entity.notification_feed_item_dto_entity")
  if data == nil then
    if self._notification_feed_item_dto == nil then
      self._notification_feed_item_dto = EntityMod.new(self, nil)
    end
    return self._notification_feed_item_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PreferencesResponseDto():list() / client:PreferencesResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:PreferencesResponseDto(data)
  local EntityMod = require("entity.preferences_response_dto_entity")
  if data == nil then
    if self._preferences_response_dto == nil then
      self._preferences_response_dto = EntityMod.new(self, nil)
    end
    return self._preferences_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Publish():list() / client:Publish():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Publish(data)
  local EntityMod = require("entity.publish_entity")
  if data == nil then
    if self._publish == nil then
      self._publish = EntityMod.new(self, nil)
    end
    return self._publish
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RemoveSubscriberResponseDto():list() / client:RemoveSubscriberResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:RemoveSubscriberResponseDto(data)
  local EntityMod = require("entity.remove_subscriber_response_dto_entity")
  if data == nil then
    if self._remove_subscriber_response_dto == nil then
      self._remove_subscriber_response_dto = EntityMod.new(self, nil)
    end
    return self._remove_subscriber_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Step():list() / client:Step():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Step(data)
  local EntityMod = require("entity.step_entity")
  if data == nil then
    if self._step == nil then
      self._step = EntityMod.new(self, nil)
    end
    return self._step
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscriber():list() / client:Subscriber():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Subscriber(data)
  local EntityMod = require("entity.subscriber_entity")
  if data == nil then
    if self._subscriber == nil then
      self._subscriber = EntityMod.new(self, nil)
    end
    return self._subscriber
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriberNotificationsCountResponseDto():list() / client:SubscriberNotificationsCountResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:SubscriberNotificationsCountResponseDto(data)
  local EntityMod = require("entity.subscriber_notifications_count_response_dto_entity")
  if data == nil then
    if self._subscriber_notifications_count_response_dto == nil then
      self._subscriber_notifications_count_response_dto = EntityMod.new(self, nil)
    end
    return self._subscriber_notifications_count_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriberNotificationsResponseDto():list() / client:SubscriberNotificationsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:SubscriberNotificationsResponseDto(data)
  local EntityMod = require("entity.subscriber_notifications_response_dto_entity")
  if data == nil then
    if self._subscriber_notifications_response_dto == nil then
      self._subscriber_notifications_response_dto = EntityMod.new(self, nil)
    end
    return self._subscriber_notifications_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriberPreferencesDto():list() / client:SubscriberPreferencesDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:SubscriberPreferencesDto(data)
  local EntityMod = require("entity.subscriber_preferences_dto_entity")
  if data == nil then
    if self._subscriber_preferences_dto == nil then
      self._subscriber_preferences_dto = EntityMod.new(self, nil)
    end
    return self._subscriber_preferences_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriberResponseDto():list() / client:SubscriberResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:SubscriberResponseDto(data)
  local EntityMod = require("entity.subscriber_response_dto_entity")
  if data == nil then
    if self._subscriber_response_dto == nil then
      self._subscriber_response_dto = EntityMod.new(self, nil)
    end
    return self._subscriber_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscription():list() / client:Subscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Subscription(data)
  local EntityMod = require("entity.subscription_entity")
  if data == nil then
    if self._subscription == nil then
      self._subscription = EntityMod.new(self, nil)
    end
    return self._subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Topic():list() / client:Topic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Topic(data)
  local EntityMod = require("entity.topic_entity")
  if data == nil then
    if self._topic == nil then
      self._topic = EntityMod.new(self, nil)
    end
    return self._topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TopicSubscriberDto():list() / client:TopicSubscriberDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:TopicSubscriberDto(data)
  local EntityMod = require("entity.topic_subscriber_dto_entity")
  if data == nil then
    if self._topic_subscriber_dto == nil then
      self._topic_subscriber_dto = EntityMod.new(self, nil)
    end
    return self._topic_subscriber_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TopicSubscriptionsResponseDto():list() / client:TopicSubscriptionsResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:TopicSubscriptionsResponseDto(data)
  local EntityMod = require("entity.topic_subscriptions_response_dto_entity")
  if data == nil then
    if self._topic_subscriptions_response_dto == nil then
      self._topic_subscriptions_response_dto = EntityMod.new(self, nil)
    end
    return self._topic_subscriptions_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Translation():list() / client:Translation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Translation(data)
  local EntityMod = require("entity.translation_entity")
  if data == nil then
    if self._translation == nil then
      self._translation = EntityMod.new(self, nil)
    end
    return self._translation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TranslationGroupDto():list() / client:TranslationGroupDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:TranslationGroupDto(data)
  local EntityMod = require("entity.translation_group_dto_entity")
  if data == nil then
    if self._translation_group_dto == nil then
      self._translation_group_dto = EntityMod.new(self, nil)
    end
    return self._translation_group_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Trigger():list() / client:Trigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Trigger(data)
  local EntityMod = require("entity.trigger_entity")
  if data == nil then
    if self._trigger == nil then
      self._trigger = EntityMod.new(self, nil)
    end
    return self._trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TriggerEventResponseDto():list() / client:TriggerEventResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:TriggerEventResponseDto(data)
  local EntityMod = require("entity.trigger_event_response_dto_entity")
  if data == nil then
    if self._trigger_event_response_dto == nil then
      self._trigger_event_response_dto = EntityMod.new(self, nil)
    end
    return self._trigger_event_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Unseen():list() / client:Unseen():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Unseen(data)
  local EntityMod = require("entity.unseen_entity")
  if data == nil then
    if self._unseen == nil then
      self._unseen = EntityMod.new(self, nil)
    end
    return self._unseen
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Upload():list() / client:Upload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Upload(data)
  local EntityMod = require("entity.upload_entity")
  if data == nil then
    if self._upload == nil then
      self._upload = EntityMod.new(self, nil)
    end
    return self._upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookResultDto():list() / client:WebhookResultDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:WebhookResultDto(data)
  local EntityMod = require("entity.webhook_result_dto_entity")
  if data == nil then
    if self._webhook_result_dto == nil then
      self._webhook_result_dto = EntityMod.new(self, nil)
    end
    return self._webhook_result_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowInfoDto():list() / client:WorkflowInfoDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:WorkflowInfoDto(data)
  local EntityMod = require("entity.workflow_info_dto_entity")
  if data == nil then
    if self._workflow_info_dto == nil then
      self._workflow_info_dto = EntityMod.new(self, nil)
    end
    return self._workflow_info_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowResponseDto():list() / client:WorkflowResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NovuSDK:WorkflowResponseDto(data)
  local EntityMod = require("entity.workflow_response_dto_entity")
  if data == nil then
    if self._workflow_response_dto == nil then
      self._workflow_response_dto = EntityMod.new(self, nil)
    end
    return self._workflow_response_dto
  end
  return EntityMod.new(self, data)
end




function NovuSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = NovuSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return NovuSDK
