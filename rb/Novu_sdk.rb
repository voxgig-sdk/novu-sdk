# Novu SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Novu_types'


class NovuSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = NovuUtility.new
    @_utility = utility

    config = NovuConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = NovuHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = NovuHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, NovuFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    NovuUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = NovuHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = NovuHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = NovuHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = NovuSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => NovuError.new(
        "#{op}_allow",
        "NovuSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue NovuError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = NovuHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = NovuHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = NovuError.new(
        "graphql_error", "NovuSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.ActivityNotificationResponseDto.list / client.ActivityNotificationResponseDto.load({ "id" => ... })
  def ActivityNotificationResponseDto(data = nil)
    require_relative 'entity/activity_notification_response_dto_entity'
    ActivityNotificationResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Agent.list / client.Agent.load({ "id" => ... })
  def Agent(data = nil)
    require_relative 'entity/agent_entity'
    AgentEntity.new(self, data)
  end


  # Canonical facade: client.AgentIntegrationResponseDto.list / client.AgentIntegrationResponseDto.load({ "id" => ... })
  def AgentIntegrationResponseDto(data = nil)
    require_relative 'entity/agent_integration_response_dto_entity'
    AgentIntegrationResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.AgentResponseDto.list / client.AgentResponseDto.load({ "id" => ... })
  def AgentResponseDto(data = nil)
    require_relative 'entity/agent_response_dto_entity'
    AgentResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Bulk.list / client.Bulk.load({ "id" => ... })
  def Bulk(data = nil)
    require_relative 'entity/bulk_entity'
    BulkEntity.new(self, data)
  end


  # Canonical facade: client.ChannelConnection.list / client.ChannelConnection.load({ "id" => ... })
  def ChannelConnection(data = nil)
    require_relative 'entity/channel_connection_entity'
    ChannelConnectionEntity.new(self, data)
  end


  # Canonical facade: client.ChannelEndpoint.list / client.ChannelEndpoint.load({ "id" => ... })
  def ChannelEndpoint(data = nil)
    require_relative 'entity/channel_endpoint_entity'
    ChannelEndpointEntity.new(self, data)
  end


  # Canonical facade: client.Configure.list / client.Configure.load({ "id" => ... })
  def Configure(data = nil)
    require_relative 'entity/configure_entity'
    ConfigureEntity.new(self, data)
  end


  # Canonical facade: client.Context.list / client.Context.load({ "id" => ... })
  def Context(data = nil)
    require_relative 'entity/context_entity'
    ContextEntity.new(self, data)
  end


  # Canonical facade: client.CreateSubscriptionsResponseDto.list / client.CreateSubscriptionsResponseDto.load({ "id" => ... })
  def CreateSubscriptionsResponseDto(data = nil)
    require_relative 'entity/create_subscriptions_response_dto_entity'
    CreateSubscriptionsResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Diff.list / client.Diff.load({ "id" => ... })
  def Diff(data = nil)
    require_relative 'entity/diff_entity'
    DiffEntity.new(self, data)
  end


  # Canonical facade: client.Domain.list / client.Domain.load({ "id" => ... })
  def Domain(data = nil)
    require_relative 'entity/domain_entity'
    DomainEntity.new(self, data)
  end


  # Canonical facade: client.DomainConnectApplyUrlResponseDto.list / client.DomainConnectApplyUrlResponseDto.load({ "id" => ... })
  def DomainConnectApplyUrlResponseDto(data = nil)
    require_relative 'entity/domain_connect_apply_url_response_dto_entity'
    DomainConnectApplyUrlResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.DomainConnectStatusResponseDto.list / client.DomainConnectStatusResponseDto.load({ "id" => ... })
  def DomainConnectStatusResponseDto(data = nil)
    require_relative 'entity/domain_connect_status_response_dto_entity'
    DomainConnectStatusResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.DomainResponseDto.list / client.DomainResponseDto.load({ "id" => ... })
  def DomainResponseDto(data = nil)
    require_relative 'entity/domain_response_dto_entity'
    DomainResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.DomainRouteResponseDto.list / client.DomainRouteResponseDto.load({ "id" => ... })
  def DomainRouteResponseDto(data = nil)
    require_relative 'entity/domain_route_response_dto_entity'
    DomainRouteResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Environment.list / client.Environment.load({ "id" => ... })
  def Environment(data = nil)
    require_relative 'entity/environment_entity'
    EnvironmentEntity.new(self, data)
  end


  # Canonical facade: client.EnvironmentTagsDto.list / client.EnvironmentTagsDto.load({ "id" => ... })
  def EnvironmentTagsDto(data = nil)
    require_relative 'entity/environment_tags_dto_entity'
    EnvironmentTagsDtoEntity.new(self, data)
  end


  # Canonical facade: client.EnvironmentVariable.list / client.EnvironmentVariable.load({ "id" => ... })
  def EnvironmentVariable(data = nil)
    require_relative 'entity/environment_variable_entity'
    EnvironmentVariableEntity.new(self, data)
  end


  # Canonical facade: client.EnvironmentVariableWorkflowInfoDto.list / client.EnvironmentVariableWorkflowInfoDto.load({ "id" => ... })
  def EnvironmentVariableWorkflowInfoDto(data = nil)
    require_relative 'entity/environment_variable_workflow_info_dto_entity'
    EnvironmentVariableWorkflowInfoDtoEntity.new(self, data)
  end


  # Canonical facade: client.Event.list / client.Event.load({ "id" => ... })
  def Event(data = nil)
    require_relative 'entity/event_entity'
    EventEntity.new(self, data)
  end


  # Canonical facade: client.GenerateChatOAuthUrlResponseDto.list / client.GenerateChatOAuthUrlResponseDto.load({ "id" => ... })
  def GenerateChatOAuthUrlResponseDto(data = nil)
    require_relative 'entity/generate_chat_o_auth_url_response_dto_entity'
    GenerateChatOAuthUrlResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.GeneratePreviewResponseDto.list / client.GeneratePreviewResponseDto.load({ "id" => ... })
  def GeneratePreviewResponseDto(data = nil)
    require_relative 'entity/generate_preview_response_dto_entity'
    GeneratePreviewResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.ImportMasterJsonResponseDto.list / client.ImportMasterJsonResponseDto.load({ "id" => ... })
  def ImportMasterJsonResponseDto(data = nil)
    require_relative 'entity/import_master_json_response_dto_entity'
    ImportMasterJsonResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.InboxNotificationDto.list / client.InboxNotificationDto.load({ "id" => ... })
  def InboxNotificationDto(data = nil)
    require_relative 'entity/inbox_notification_dto_entity'
    InboxNotificationDtoEntity.new(self, data)
  end


  # Canonical facade: client.Integration.list / client.Integration.load({ "id" => ... })
  def Integration(data = nil)
    require_relative 'entity/integration_entity'
    IntegrationEntity.new(self, data)
  end


  # Canonical facade: client.IntegrationResponseDto.list / client.IntegrationResponseDto.load({ "id" => ... })
  def IntegrationResponseDto(data = nil)
    require_relative 'entity/integration_response_dto_entity'
    IntegrationResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Layout.list / client.Layout.load({ "id" => ... })
  def Layout(data = nil)
    require_relative 'entity/layout_entity'
    LayoutEntity.new(self, data)
  end


  # Canonical facade: client.LayoutResponseDto.list / client.LayoutResponseDto.load({ "id" => ... })
  def LayoutResponseDto(data = nil)
    require_relative 'entity/layout_response_dto_entity'
    LayoutResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Link.list / client.Link.load({ "id" => ... })
  def Link(data = nil)
    require_relative 'entity/link_entity'
    LinkEntity.new(self, data)
  end


  # Canonical facade: client.ListAgentIntegrationsResponseDto.list / client.ListAgentIntegrationsResponseDto.load({ "id" => ... })
  def ListAgentIntegrationsResponseDto(data = nil)
    require_relative 'entity/list_agent_integrations_response_dto_entity'
    ListAgentIntegrationsResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.ListDomainRoutesResponseDto.list / client.ListDomainRoutesResponseDto.load({ "id" => ... })
  def ListDomainRoutesResponseDto(data = nil)
    require_relative 'entity/list_domain_routes_response_dto_entity'
    ListDomainRoutesResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.ListTopicSubscriptionsResponseDto.list / client.ListTopicSubscriptionsResponseDto.load({ "id" => ... })
  def ListTopicSubscriptionsResponseDto(data = nil)
    require_relative 'entity/list_topic_subscriptions_response_dto_entity'
    ListTopicSubscriptionsResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.MasterJson.list / client.MasterJson.load({ "id" => ... })
  def MasterJson(data = nil)
    require_relative 'entity/master_json_entity'
    MasterJsonEntity.new(self, data)
  end


  # Canonical facade: client.Message.list / client.Message.load({ "id" => ... })
  def Message(data = nil)
    require_relative 'entity/message_entity'
    MessageEntity.new(self, data)
  end


  # Canonical facade: client.MessageResponseDto.list / client.MessageResponseDto.load({ "id" => ... })
  def MessageResponseDto(data = nil)
    require_relative 'entity/message_response_dto_entity'
    MessageResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.NotificationFeedItemDto.list / client.NotificationFeedItemDto.load({ "id" => ... })
  def NotificationFeedItemDto(data = nil)
    require_relative 'entity/notification_feed_item_dto_entity'
    NotificationFeedItemDtoEntity.new(self, data)
  end


  # Canonical facade: client.PreferencesResponseDto.list / client.PreferencesResponseDto.load({ "id" => ... })
  def PreferencesResponseDto(data = nil)
    require_relative 'entity/preferences_response_dto_entity'
    PreferencesResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Publish.list / client.Publish.load({ "id" => ... })
  def Publish(data = nil)
    require_relative 'entity/publish_entity'
    PublishEntity.new(self, data)
  end


  # Canonical facade: client.RemoveSubscriberResponseDto.list / client.RemoveSubscriberResponseDto.load({ "id" => ... })
  def RemoveSubscriberResponseDto(data = nil)
    require_relative 'entity/remove_subscriber_response_dto_entity'
    RemoveSubscriberResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Step.list / client.Step.load({ "id" => ... })
  def Step(data = nil)
    require_relative 'entity/step_entity'
    StepEntity.new(self, data)
  end


  # Canonical facade: client.Subscriber.list / client.Subscriber.load({ "id" => ... })
  def Subscriber(data = nil)
    require_relative 'entity/subscriber_entity'
    SubscriberEntity.new(self, data)
  end


  # Canonical facade: client.SubscriberNotificationsCountResponseDto.list / client.SubscriberNotificationsCountResponseDto.load({ "id" => ... })
  def SubscriberNotificationsCountResponseDto(data = nil)
    require_relative 'entity/subscriber_notifications_count_response_dto_entity'
    SubscriberNotificationsCountResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.SubscriberNotificationsResponseDto.list / client.SubscriberNotificationsResponseDto.load({ "id" => ... })
  def SubscriberNotificationsResponseDto(data = nil)
    require_relative 'entity/subscriber_notifications_response_dto_entity'
    SubscriberNotificationsResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.SubscriberPreferencesDto.list / client.SubscriberPreferencesDto.load({ "id" => ... })
  def SubscriberPreferencesDto(data = nil)
    require_relative 'entity/subscriber_preferences_dto_entity'
    SubscriberPreferencesDtoEntity.new(self, data)
  end


  # Canonical facade: client.SubscriberResponseDto.list / client.SubscriberResponseDto.load({ "id" => ... })
  def SubscriberResponseDto(data = nil)
    require_relative 'entity/subscriber_response_dto_entity'
    SubscriberResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Subscription.list / client.Subscription.load({ "id" => ... })
  def Subscription(data = nil)
    require_relative 'entity/subscription_entity'
    SubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.Topic.list / client.Topic.load({ "id" => ... })
  def Topic(data = nil)
    require_relative 'entity/topic_entity'
    TopicEntity.new(self, data)
  end


  # Canonical facade: client.TopicSubscriberDto.list / client.TopicSubscriberDto.load({ "id" => ... })
  def TopicSubscriberDto(data = nil)
    require_relative 'entity/topic_subscriber_dto_entity'
    TopicSubscriberDtoEntity.new(self, data)
  end


  # Canonical facade: client.TopicSubscriptionsResponseDto.list / client.TopicSubscriptionsResponseDto.load({ "id" => ... })
  def TopicSubscriptionsResponseDto(data = nil)
    require_relative 'entity/topic_subscriptions_response_dto_entity'
    TopicSubscriptionsResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Translation.list / client.Translation.load({ "id" => ... })
  def Translation(data = nil)
    require_relative 'entity/translation_entity'
    TranslationEntity.new(self, data)
  end


  # Canonical facade: client.TranslationGroupDto.list / client.TranslationGroupDto.load({ "id" => ... })
  def TranslationGroupDto(data = nil)
    require_relative 'entity/translation_group_dto_entity'
    TranslationGroupDtoEntity.new(self, data)
  end


  # Canonical facade: client.TriggerEventResponseDto.list / client.TriggerEventResponseDto.load({ "id" => ... })
  def TriggerEventResponseDto(data = nil)
    require_relative 'entity/trigger_event_response_dto_entity'
    TriggerEventResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.Unseen.list / client.Unseen.load({ "id" => ... })
  def Unseen(data = nil)
    require_relative 'entity/unseen_entity'
    UnseenEntity.new(self, data)
  end


  # Canonical facade: client.Upload.list / client.Upload.load({ "id" => ... })
  def Upload(data = nil)
    require_relative 'entity/upload_entity'
    UploadEntity.new(self, data)
  end


  # Canonical facade: client.WebhookResultDto.list / client.WebhookResultDto.load({ "id" => ... })
  def WebhookResultDto(data = nil)
    require_relative 'entity/webhook_result_dto_entity'
    WebhookResultDtoEntity.new(self, data)
  end


  # Canonical facade: client.Workflow.list / client.Workflow.load({ "id" => ... })
  def Workflow(data = nil)
    require_relative 'entity/workflow_entity'
    WorkflowEntity.new(self, data)
  end


  # Canonical facade: client.WorkflowInfoDto.list / client.WorkflowInfoDto.load({ "id" => ... })
  def WorkflowInfoDto(data = nil)
    require_relative 'entity/workflow_info_dto_entity'
    WorkflowInfoDtoEntity.new(self, data)
  end


  # Canonical facade: client.WorkflowResponseDto.list / client.WorkflowResponseDto.load({ "id" => ... })
  def WorkflowResponseDto(data = nil)
    require_relative 'entity/workflow_response_dto_entity'
    WorkflowResponseDtoEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = NovuSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
