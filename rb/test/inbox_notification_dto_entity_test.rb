# InboxNotificationDto entity test

require "minitest/autorun"
require "json"
require_relative "../Novu_sdk"
require_relative "runner"

class InboxNotificationDtoEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NovuSDK.test(nil, nil)
    ent = testsdk.InboxNotificationDto(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = inbox_notification_dto_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "inbox_notification_dto." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    inbox_notification_dto_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.inbox_notification_dto")))
    inbox_notification_dto_ref01_data = nil
    if inbox_notification_dto_ref01_data_raw.length > 0
      inbox_notification_dto_ref01_data = Helpers.to_map(inbox_notification_dto_ref01_data_raw[0][1])
    end

    # UPDATE
    inbox_notification_dto_ref01_ent = client.InboxNotificationDto(nil)
    inbox_notification_dto_ref01_data_up0_up = {
      "id" => inbox_notification_dto_ref01_data["id"],
      "subscriber_id" => setup[:idmap]["subscriber_id"],
    }

    inbox_notification_dto_ref01_markdef_up0_name = "archivedAt"
    inbox_notification_dto_ref01_markdef_up0_value = "Mark01-inbox_notification_dto_ref01_#{setup[:now]}"
    inbox_notification_dto_ref01_data_up0_up[inbox_notification_dto_ref01_markdef_up0_name] = inbox_notification_dto_ref01_markdef_up0_value

    inbox_notification_dto_ref01_resdata_up0_result = inbox_notification_dto_ref01_ent.update(inbox_notification_dto_ref01_data_up0_up, nil)
    inbox_notification_dto_ref01_resdata_up0 = Helpers.to_map(inbox_notification_dto_ref01_resdata_up0_result.respond_to?(:data_get) ? inbox_notification_dto_ref01_resdata_up0_result.data_get : inbox_notification_dto_ref01_resdata_up0_result)
    assert !inbox_notification_dto_ref01_resdata_up0.nil?
    assert_equal inbox_notification_dto_ref01_resdata_up0["id"], inbox_notification_dto_ref01_data_up0_up["id"]
    assert_equal inbox_notification_dto_ref01_resdata_up0[inbox_notification_dto_ref01_markdef_up0_name], inbox_notification_dto_ref01_markdef_up0_value

  end
end

def inbox_notification_dto_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "inbox_notification_dto", "InboxNotificationDtoTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NovuSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["inbox_notification_dto01", "inbox_notification_dto02", "inbox_notification_dto03", "subscriber01", "subscriber02", "subscriber03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID" => idmap,
    "NOVU_TEST_LIVE" => "FALSE",
    "NOVU_TEST_EXPLAIN" => "FALSE",
    "NOVU_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["subscriber_id"].nil?
    idmap_resolved["subscriber_id"] = idmap_resolved["subscriber01"]
  end

  if env["NOVU_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["NOVU_APIKEY"],
      },
      extra || {},
    ])
    client = NovuSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["NOVU_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["NOVU_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
