# Topic entity test

import json
import os
import time

import pytest

from novu_sdk.utility.voxgig_struct import voxgig_struct as vs
from novu_sdk import NovuSDK
from novu_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTopicEntity:

    def test_should_create_instance(self):
        testsdk = NovuSDK.test(None, None)
        ent = testsdk.Topic(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _topic_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "topic." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NOVU_TEST_TOPIC_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        topic_ref01_ent = client.Topic(None)
        topic_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.topic"), "topic_ref01"))

        topic_ref01_data = helpers.to_map(runner.entity_data(topic_ref01_ent.create(topic_ref01_data, None)))
        assert topic_ref01_data is not None
        assert topic_ref01_data["id"] is not None

        # UPDATE
        topic_ref01_data_up0_up = {
            "id": topic_ref01_data["id"],
        }

        topic_ref01_markdef_up0_name = "key"
        topic_ref01_markdef_up0_value = "Mark01-topic_ref01_" + str(setup["now"])
        topic_ref01_data_up0_up[topic_ref01_markdef_up0_name] = topic_ref01_markdef_up0_value

        topic_ref01_resdata_up0 = helpers.to_map(runner.entity_data(topic_ref01_ent.update(topic_ref01_data_up0_up, None)))
        assert topic_ref01_resdata_up0 is not None
        assert topic_ref01_resdata_up0["id"] == topic_ref01_data_up0_up["id"]
        assert topic_ref01_resdata_up0[topic_ref01_markdef_up0_name] == topic_ref01_markdef_up0_value

        # LOAD
        topic_ref01_match_dt0 = {
            "id": topic_ref01_data["id"],
        }
        topic_ref01_data_dt0_loaded = topic_ref01_ent.load(topic_ref01_match_dt0, None)
        topic_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(topic_ref01_data_dt0_loaded))
        assert topic_ref01_data_dt0_load_result is not None
        assert topic_ref01_data_dt0_load_result["id"] == topic_ref01_data["id"]

        # REMOVE
        topic_ref01_match_rm0 = {
            "id": topic_ref01_data["id"],
        }
        topic_ref01_ent.remove(topic_ref01_match_rm0, None)



def _topic_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/topic/TopicTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NovuSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["topic01", "topic02", "topic03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "NOVU_TEST_TOPIC_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NOVU_TEST_TOPIC_ENTID": idmap,
        "NOVU_TEST_LIVE": "FALSE",
        "NOVU_TEST_EXPLAIN": "FALSE",
        "NOVU_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NOVU_TEST_TOPIC_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("NOVU_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("NOVU_APIKEY"),
            },
            extra or {},
        ])
        client = NovuSDK(helpers.to_map(merged_opts))

    _live = env.get("NOVU_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("NOVU_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
