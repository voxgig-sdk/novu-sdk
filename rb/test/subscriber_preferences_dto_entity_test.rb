# SubscriberPreferencesDto entity test

require "minitest/autorun"
require "json"
require_relative "../Novu_sdk"
require_relative "runner"

class SubscriberPreferencesDtoEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NovuSDK.test(nil, nil)
    ent = testsdk.SubscriberPreferencesDto(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "subscriber_preferences_dto" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = NovuSDK.test(seed, nil)
    seen = base.SubscriberPreferencesDto(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = NovuConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = NovuSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.SubscriberPreferencesDto(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = subscriber_preferences_dto_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "subscriber_preferences_dto." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    subscriber_preferences_dto_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.subscriber_preferences_dto")))
    subscriber_preferences_dto_ref01_data = nil
    if subscriber_preferences_dto_ref01_data_raw.length > 0
      subscriber_preferences_dto_ref01_data = Helpers.to_map(subscriber_preferences_dto_ref01_data_raw[0][1])
    end

    # LIST
    subscriber_preferences_dto_ref01_ent = client.SubscriberPreferencesDto(nil)
    subscriber_preferences_dto_ref01_match = {
      "subscriber_id" => setup[:idmap]["subscriber01"],
    }

    subscriber_preferences_dto_ref01_list_result = subscriber_preferences_dto_ref01_ent.list(subscriber_preferences_dto_ref01_match, nil)
    assert subscriber_preferences_dto_ref01_list_result.is_a?(Array)

    # UPDATE
    subscriber_preferences_dto_ref01_data_up0_up = {
      "id" => subscriber_preferences_dto_ref01_data["id"],
    }

    subscriber_preferences_dto_ref01_resdata_up0_result = subscriber_preferences_dto_ref01_ent.update(subscriber_preferences_dto_ref01_data_up0_up, nil)
    subscriber_preferences_dto_ref01_resdata_up0 = Helpers.to_map(subscriber_preferences_dto_ref01_resdata_up0_result.respond_to?(:data_get) ? subscriber_preferences_dto_ref01_resdata_up0_result.data_get : subscriber_preferences_dto_ref01_resdata_up0_result)
    assert !subscriber_preferences_dto_ref01_resdata_up0.nil?
    assert_equal subscriber_preferences_dto_ref01_resdata_up0["id"], subscriber_preferences_dto_ref01_data_up0_up["id"]

  end
end

def subscriber_preferences_dto_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "subscriber_preferences_dto", "SubscriberPreferencesDtoTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NovuSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["subscriber_preferences_dto01", "subscriber_preferences_dto02", "subscriber_preferences_dto03", "subscriber01"],
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
  entid_env_raw = ENV["NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID" => idmap,
    "NOVU_TEST_LIVE" => "FALSE",
    "NOVU_TEST_EXPLAIN" => "FALSE",
    "NOVU_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
