# Context entity test

require "minitest/autorun"
require "json"
require_relative "../Novu_sdk"
require_relative "runner"

class ContextEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NovuSDK.test(nil, nil)
    ent = testsdk.Context(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = context_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "context." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NOVU_TEST_CONTEXT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    context_ref01_ent = client.Context(nil)
    context_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.context"), "context_ref01"))
    context_ref01_data["type"] = setup[:idmap]["type01"]

    context_ref01_data_result = context_ref01_ent.create(context_ref01_data, nil)
    context_ref01_data = Helpers.to_map(context_ref01_data_result.respond_to?(:data_get) ? context_ref01_data_result.data_get : context_ref01_data_result)
    assert !context_ref01_data.nil?
    assert !context_ref01_data["id"].nil?

    # UPDATE
    context_ref01_data_up0_up = {
      "id" => context_ref01_data["id"],
      "type" => setup[:idmap]["type"],
    }

    context_ref01_markdef_up0_name = "bridgeUrl"
    context_ref01_markdef_up0_value = "Mark01-context_ref01_#{setup[:now]}"
    context_ref01_data_up0_up[context_ref01_markdef_up0_name] = context_ref01_markdef_up0_value

    context_ref01_resdata_up0_result = context_ref01_ent.update(context_ref01_data_up0_up, nil)
    context_ref01_resdata_up0 = Helpers.to_map(context_ref01_resdata_up0_result.respond_to?(:data_get) ? context_ref01_resdata_up0_result.data_get : context_ref01_resdata_up0_result)
    assert !context_ref01_resdata_up0.nil?
    assert_equal context_ref01_resdata_up0["id"], context_ref01_data_up0_up["id"]
    assert_equal context_ref01_resdata_up0[context_ref01_markdef_up0_name], context_ref01_markdef_up0_value

    # LOAD
    context_ref01_match_dt0 = {
      "id" => context_ref01_data["id"],
    }
    context_ref01_data_dt0_loaded = context_ref01_ent.load(context_ref01_match_dt0, nil)
    context_ref01_data_dt0_load_result = Helpers.to_map(context_ref01_data_dt0_loaded.respond_to?(:data_get) ? context_ref01_data_dt0_loaded.data_get : context_ref01_data_dt0_loaded)
    assert !context_ref01_data_dt0_load_result.nil?
    assert_equal context_ref01_data_dt0_load_result["id"], context_ref01_data["id"]

    # REMOVE
    context_ref01_match_rm0 = {
      "id" => context_ref01_data["id"],
    }
    context_ref01_ent.remove(context_ref01_match_rm0, nil)

  end
end

def context_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "context", "ContextTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NovuSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["context01", "context02", "context03", "type01"],
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
  entid_env_raw = ENV["NOVU_TEST_CONTEXT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NOVU_TEST_CONTEXT_ENTID" => idmap,
    "NOVU_TEST_LIVE" => "FALSE",
    "NOVU_TEST_EXPLAIN" => "FALSE",
    "NOVU_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NOVU_TEST_CONTEXT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["type"].nil?
    idmap_resolved["type"] = idmap_resolved["type01"]
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
