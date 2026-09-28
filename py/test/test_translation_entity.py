# Translation entity test

import json
import os
import time

import pytest

from novu_sdk.utility.voxgig_struct import voxgig_struct as vs
from novu_sdk import NovuSDK
from novu_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTranslationEntity:

    def test_should_create_instance(self):
        testsdk = NovuSDK.test(None, None)
        ent = testsdk.Translation(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _translation_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "translation." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NOVU_TEST_TRANSLATION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        translation_ref01_ent = client.Translation(None)
        translation_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.translation"), "translation_ref01"))
        translation_ref01_data["resource_id"] = setup["idmap"]["resource01"]
        translation_ref01_data["resource_type"] = setup["idmap"]["resource_type01"]

        translation_ref01_data = helpers.to_map(runner.entity_data(translation_ref01_ent.create(translation_ref01_data, None)))
        assert translation_ref01_data is not None
        assert translation_ref01_data["id"] is not None

        # LOAD
        translation_ref01_match_dt0 = {
            "id": translation_ref01_data["id"],
        }
        translation_ref01_data_dt0_loaded = translation_ref01_ent.load(translation_ref01_match_dt0, None)
        translation_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(translation_ref01_data_dt0_loaded))
        assert translation_ref01_data_dt0_load_result is not None
        assert translation_ref01_data_dt0_load_result["id"] == translation_ref01_data["id"]

        # REMOVE
        translation_ref01_match_rm0 = {
            "id": translation_ref01_data["id"],
        }
        translation_ref01_ent.remove(translation_ref01_match_rm0, None)



def _translation_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/translation/TranslationTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NovuSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["translation01", "translation02", "translation03", "resource01", "resource_type01"],
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
        "NOVU_TEST_TRANSLATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NOVU_TEST_TRANSLATION_ENTID": idmap,
        "NOVU_TEST_LIVE": "FALSE",
        "NOVU_TEST_EXPLAIN": "FALSE",
        "NOVU_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NOVU_TEST_TRANSLATION_ENTID"))
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
