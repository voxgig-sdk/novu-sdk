-- Translation entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("novu_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("TranslationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Translation(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = translation_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "translation." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NOVU_TEST_TRANSLATION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local translation_ref01_ent = client:Translation(nil)
    local translation_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.translation"), "translation_ref01"))
    translation_ref01_data["resource_id"] = setup.idmap["resource01"]
    translation_ref01_data["resource_type"] = setup.idmap["resource_type01"]

    local translation_ref01_data_result, err = translation_ref01_ent:create(translation_ref01_data, nil)
    assert.is_nil(err)
    translation_ref01_data = helpers.to_map(type(translation_ref01_data_result) == 'table' and translation_ref01_data_result.data_get and translation_ref01_data_result:data_get() or translation_ref01_data_result)
    assert.is_not_nil(translation_ref01_data)
    assert.is_not_nil(translation_ref01_data["id"])

    -- LOAD
    local translation_ref01_match_dt0 = {
      id = translation_ref01_data["id"],
    }
    local translation_ref01_data_dt0_loaded, err = translation_ref01_ent:load(translation_ref01_match_dt0, nil)
    assert.is_nil(err)
    local translation_ref01_data_dt0_load_result = helpers.to_map(type(translation_ref01_data_dt0_loaded) == 'table' and translation_ref01_data_dt0_loaded.data_get and translation_ref01_data_dt0_loaded:data_get() or translation_ref01_data_dt0_loaded)
    assert.is_not_nil(translation_ref01_data_dt0_load_result)
    assert.are.equal(translation_ref01_data_dt0_load_result["id"], translation_ref01_data["id"])

    -- REMOVE
    local translation_ref01_match_rm0 = {
      id = translation_ref01_data["id"],
    }
    local _, err = translation_ref01_ent:remove(translation_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function translation_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/translation/TranslationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read translation test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "translation01", "translation02", "translation03", "resource01", "resource_type01" },
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
  local entid_env_raw = os.getenv("NOVU_TEST_TRANSLATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NOVU_TEST_TRANSLATION_ENTID"] = idmap,
    ["NOVU_TEST_LIVE"] = "FALSE",
    ["NOVU_TEST_EXPLAIN"] = "FALSE",
    ["NOVU_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NOVU_TEST_TRANSLATION_ENTID"])
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
