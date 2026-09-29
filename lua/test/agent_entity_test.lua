-- Agent entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("novu_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AgentEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Agent(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["agent"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Agent(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Agent(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = agent_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "agent." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NOVU_TEST_AGENT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local agent_ref01_ent = client:Agent(nil)
    local agent_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.agent"), "agent_ref01"))
    agent_ref01_data["agent_id"] = setup.idmap["agent01"]

    local agent_ref01_data_result, err = agent_ref01_ent:create(agent_ref01_data, nil)
    assert.is_nil(err)
    agent_ref01_data = helpers.to_map(type(agent_ref01_data_result) == 'table' and agent_ref01_data_result.data_get and agent_ref01_data_result:data_get() or agent_ref01_data_result)
    assert.is_not_nil(agent_ref01_data)
    assert.is_not_nil(agent_ref01_data["id"])

    -- LIST
    local agent_ref01_match = {}

    local agent_ref01_list_result, err = agent_ref01_ent:list(agent_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(agent_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(agent_ref01_list_result),
      { id = agent_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local agent_ref01_data_up0_up = {
      id = agent_ref01_data["id"],
    }

    local agent_ref01_markdef_up0_name = "bridgeUrl"
    local agent_ref01_markdef_up0_value = "Mark01-agent_ref01_" .. tostring(setup.now)
    agent_ref01_data_up0_up[agent_ref01_markdef_up0_name] = agent_ref01_markdef_up0_value

    local agent_ref01_resdata_up0_result, err = agent_ref01_ent:update(agent_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local agent_ref01_resdata_up0 = helpers.to_map(type(agent_ref01_resdata_up0_result) == 'table' and agent_ref01_resdata_up0_result.data_get and agent_ref01_resdata_up0_result:data_get() or agent_ref01_resdata_up0_result)
    assert.is_not_nil(agent_ref01_resdata_up0)
    assert.are.equal(agent_ref01_resdata_up0["id"], agent_ref01_data_up0_up["id"])
    assert.are.equal(agent_ref01_resdata_up0[agent_ref01_markdef_up0_name], agent_ref01_markdef_up0_value)

    -- LOAD
    local agent_ref01_match_dt0 = {
      id = agent_ref01_data["id"],
    }
    local agent_ref01_data_dt0_loaded, err = agent_ref01_ent:load(agent_ref01_match_dt0, nil)
    assert.is_nil(err)
    local agent_ref01_data_dt0_load_result = helpers.to_map(type(agent_ref01_data_dt0_loaded) == 'table' and agent_ref01_data_dt0_loaded.data_get and agent_ref01_data_dt0_loaded:data_get() or agent_ref01_data_dt0_loaded)
    assert.is_not_nil(agent_ref01_data_dt0_load_result)
    assert.are.equal(agent_ref01_data_dt0_load_result["id"], agent_ref01_data["id"])

    -- REMOVE
    local agent_ref01_match_rm0 = {
      id = agent_ref01_data["id"],
    }
    local _, err = agent_ref01_ent:remove(agent_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local agent_ref01_match_rt0 = {}

    local agent_ref01_list_rt0_result, err = agent_ref01_ent:list(agent_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(agent_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(agent_ref01_list_rt0_result),
      { id = agent_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function agent_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/agent/AgentTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read agent test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "agent01", "agent02", "agent03", "integration01", "integration02", "integration03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("NOVU_TEST_AGENT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NOVU_TEST_AGENT_ENTID"] = idmap,
    ["NOVU_TEST_LIVE"] = "FALSE",
    ["NOVU_TEST_EXPLAIN"] = "FALSE",
    ["NOVU_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NOVU_TEST_AGENT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["NOVU_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["NOVU_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["NOVU_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["NOVU_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
