# CreateSubscriptionsResponseDto entity test

require "minitest/autorun"
require "json"
require_relative "../Novu_sdk"
require_relative "runner"

class CreateSubscriptionsResponseDtoEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NovuSDK.test(nil, nil)
    ent = testsdk.CreateSubscriptionsResponseDto(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = create_subscriptions_response_dto_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "create_subscriptions_response_dto." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    create_subscriptions_response_dto_ref01_ent = client.CreateSubscriptionsResponseDto(nil)
    create_subscriptions_response_dto_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.create_subscriptions_response_dto"), "create_subscriptions_response_dto_ref01"))
    create_subscriptions_response_dto_ref01_data["topic_key"] = setup[:idmap]["topic_key01"]

    create_subscriptions_response_dto_ref01_data_result = create_subscriptions_response_dto_ref01_ent.create(create_subscriptions_response_dto_ref01_data, nil)
    create_subscriptions_response_dto_ref01_data = Helpers.to_map(create_subscriptions_response_dto_ref01_data_result.respond_to?(:data_get) ? create_subscriptions_response_dto_ref01_data_result.data_get : create_subscriptions_response_dto_ref01_data_result)
    assert !create_subscriptions_response_dto_ref01_data.nil?

  end
end

def create_subscriptions_response_dto_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "create_subscriptions_response_dto", "CreateSubscriptionsResponseDtoTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NovuSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["create_subscriptions_response_dto01", "create_subscriptions_response_dto02", "create_subscriptions_response_dto03", "topic01", "topic02", "topic03", "topic_key01"],
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
  entid_env_raw = ENV["NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID" => idmap,
    "NOVU_TEST_LIVE" => "FALSE",
    "NOVU_TEST_EXPLAIN" => "FALSE",
    "NOVU_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID"])
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
