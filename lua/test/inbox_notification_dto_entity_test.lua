-- InboxNotificationDto entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("novu_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("InboxNotificationDtoEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:InboxNotificationDto(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = inbox_notification_dto_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "inbox_notification_dto." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local inbox_notification_dto_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.inbox_notification_dto")))
    local inbox_notification_dto_ref01_data = nil
    if #inbox_notification_dto_ref01_data_raw > 0 then
      inbox_notification_dto_ref01_data = helpers.to_map(inbox_notification_dto_ref01_data_raw[1][2])
    end

    -- UPDATE
    local inbox_notification_dto_ref01_ent = client:InboxNotificationDto(nil)
    local inbox_notification_dto_ref01_data_up0_up = {
      id = inbox_notification_dto_ref01_data["id"],
      ["subscriber_id"] = setup.idmap["subscriber_id"],
    }

    local inbox_notification_dto_ref01_markdef_up0_name = "archivedAt"
    local inbox_notification_dto_ref01_markdef_up0_value = "Mark01-inbox_notification_dto_ref01_" .. tostring(setup.now)
    inbox_notification_dto_ref01_data_up0_up[inbox_notification_dto_ref01_markdef_up0_name] = inbox_notification_dto_ref01_markdef_up0_value

    local inbox_notification_dto_ref01_resdata_up0_result, err = inbox_notification_dto_ref01_ent:update(inbox_notification_dto_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local inbox_notification_dto_ref01_resdata_up0 = helpers.to_map(type(inbox_notification_dto_ref01_resdata_up0_result) == 'table' and inbox_notification_dto_ref01_resdata_up0_result.data_get and inbox_notification_dto_ref01_resdata_up0_result:data_get() or inbox_notification_dto_ref01_resdata_up0_result)
    assert.is_not_nil(inbox_notification_dto_ref01_resdata_up0)
    assert.are.equal(inbox_notification_dto_ref01_resdata_up0["id"], inbox_notification_dto_ref01_data_up0_up["id"])
    assert.are.equal(inbox_notification_dto_ref01_resdata_up0[inbox_notification_dto_ref01_markdef_up0_name], inbox_notification_dto_ref01_markdef_up0_value)

  end)
end)

function inbox_notification_dto_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/inbox_notification_dto/InboxNotificationDtoTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read inbox_notification_dto test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "inbox_notification_dto01", "inbox_notification_dto02", "inbox_notification_dto03", "subscriber01", "subscriber02", "subscriber03" },
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
  local entid_env_raw = os.getenv("NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID"] = idmap,
    ["NOVU_TEST_LIVE"] = "FALSE",
    ["NOVU_TEST_EXPLAIN"] = "FALSE",
    ["NOVU_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["subscriber_id"] == nil then
    idmap_resolved["subscriber_id"] = idmap_resolved["subscriber01"]
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
