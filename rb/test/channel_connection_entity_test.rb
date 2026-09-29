# ChannelConnection entity test

require "minitest/autorun"
require "json"
require_relative "../Novu_sdk"
require_relative "runner"

class ChannelConnectionEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NovuSDK.test(nil, nil)
    ent = testsdk.ChannelConnection(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "channel_connection" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = NovuSDK.test(seed, nil)
    seen = base.ChannelConnection(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = NovuConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = NovuSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.ChannelConnection(nil).stream("list", nil, nil).each do |item|
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
    setup = channel_connection_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "channel_connection." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NOVU_TEST_CHANNEL_CONNECTION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    channel_connection_ref01_ent = client.ChannelConnection(nil)
    channel_connection_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.channel_connection"), "channel_connection_ref01"))

    channel_connection_ref01_data_result = channel_connection_ref01_ent.create(channel_connection_ref01_data, nil)
    channel_connection_ref01_data = Helpers.to_map(channel_connection_ref01_data_result.respond_to?(:data_get) ? channel_connection_ref01_data_result.data_get : channel_connection_ref01_data_result)
    assert !channel_connection_ref01_data.nil?
    assert !channel_connection_ref01_data["id"].nil?

    # LIST
    channel_connection_ref01_match = {}

    channel_connection_ref01_list_result = channel_connection_ref01_ent.list(channel_connection_ref01_match, nil)
    assert channel_connection_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(channel_connection_ref01_list_result),
      { "id" => channel_connection_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    channel_connection_ref01_data_up0_up = {
      "id" => channel_connection_ref01_data["id"],
    }

    channel_connection_ref01_markdef_up0_name = "channel"
    channel_connection_ref01_markdef_up0_value = "Mark01-channel_connection_ref01_#{setup[:now]}"
    channel_connection_ref01_data_up0_up[channel_connection_ref01_markdef_up0_name] = channel_connection_ref01_markdef_up0_value

    channel_connection_ref01_resdata_up0_result = channel_connection_ref01_ent.update(channel_connection_ref01_data_up0_up, nil)
    channel_connection_ref01_resdata_up0 = Helpers.to_map(channel_connection_ref01_resdata_up0_result.respond_to?(:data_get) ? channel_connection_ref01_resdata_up0_result.data_get : channel_connection_ref01_resdata_up0_result)
    assert !channel_connection_ref01_resdata_up0.nil?
    assert_equal channel_connection_ref01_resdata_up0["id"], channel_connection_ref01_data_up0_up["id"]
    assert_equal channel_connection_ref01_resdata_up0[channel_connection_ref01_markdef_up0_name], channel_connection_ref01_markdef_up0_value

    # LOAD
    channel_connection_ref01_match_dt0 = {
      "id" => channel_connection_ref01_data["id"],
    }
    channel_connection_ref01_data_dt0_loaded = channel_connection_ref01_ent.load(channel_connection_ref01_match_dt0, nil)
    channel_connection_ref01_data_dt0_load_result = Helpers.to_map(channel_connection_ref01_data_dt0_loaded.respond_to?(:data_get) ? channel_connection_ref01_data_dt0_loaded.data_get : channel_connection_ref01_data_dt0_loaded)
    assert !channel_connection_ref01_data_dt0_load_result.nil?
    assert_equal channel_connection_ref01_data_dt0_load_result["id"], channel_connection_ref01_data["id"]

    # REMOVE
    channel_connection_ref01_match_rm0 = {
      "id" => channel_connection_ref01_data["id"],
    }
    channel_connection_ref01_ent.remove(channel_connection_ref01_match_rm0, nil)

    # LIST
    channel_connection_ref01_match_rt0 = {}

    channel_connection_ref01_list_rt0_result = channel_connection_ref01_ent.list(channel_connection_ref01_match_rt0, nil)
    assert channel_connection_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(channel_connection_ref01_list_rt0_result),
      { "id" => channel_connection_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def channel_connection_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "channel_connection", "ChannelConnectionTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NovuSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["channel_connection01", "channel_connection02", "channel_connection03"],
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
  entid_env_raw = ENV["NOVU_TEST_CHANNEL_CONNECTION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NOVU_TEST_CHANNEL_CONNECTION_ENTID" => idmap,
    "NOVU_TEST_LIVE" => "FALSE",
    "NOVU_TEST_EXPLAIN" => "FALSE",
    "NOVU_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NOVU_TEST_CHANNEL_CONNECTION_ENTID"])
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
