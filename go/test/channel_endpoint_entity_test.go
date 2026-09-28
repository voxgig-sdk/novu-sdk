package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/novu-sdk/go"
	"github.com/voxgig-sdk/novu-sdk/go/core"

	vs "github.com/voxgig-sdk/novu-sdk/go/utility/struct"
)

func TestChannelEndpointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ChannelEndpoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil ChannelEndpointEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := channel_endpointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "channel_endpoint." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_CHANNEL_ENDPOINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		channelEndpointRef01Ent := client.ChannelEndpoint(nil)
		channelEndpointRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "channel_endpoint"}), "channel_endpoint_ref01"))

		channelEndpointRef01DataResult, err := channelEndpointRef01Ent.Create(channelEndpointRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		channelEndpointRef01Data = core.ToMapAny(entityData(channelEndpointRef01DataResult))
		if channelEndpointRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if channelEndpointRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		channelEndpointRef01DataUp0Up := map[string]any{
			"id": channelEndpointRef01Data["id"],
		}

		channelEndpointRef01MarkdefUp0Name := "channel"
		channelEndpointRef01MarkdefUp0Value := fmt.Sprintf("Mark01-channel_endpoint_ref01_%d", setup.now)
		channelEndpointRef01DataUp0Up[channelEndpointRef01MarkdefUp0Name] = channelEndpointRef01MarkdefUp0Value

		channelEndpointRef01ResdataUp0Result, err := channelEndpointRef01Ent.Update(channelEndpointRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		channelEndpointRef01ResdataUp0 := core.ToMapAny(entityData(channelEndpointRef01ResdataUp0Result))
		if channelEndpointRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if channelEndpointRef01ResdataUp0["id"] != channelEndpointRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if channelEndpointRef01ResdataUp0[channelEndpointRef01MarkdefUp0Name] != channelEndpointRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", channelEndpointRef01MarkdefUp0Name, channelEndpointRef01ResdataUp0[channelEndpointRef01MarkdefUp0Name])
		}

		// LOAD
		channelEndpointRef01MatchDt0 := map[string]any{
			"id": channelEndpointRef01Data["id"],
		}
		channelEndpointRef01DataDt0Loaded, err := channelEndpointRef01Ent.Load(channelEndpointRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		channelEndpointRef01DataDt0LoadResult := core.ToMapAny(entityData(channelEndpointRef01DataDt0Loaded))
		if channelEndpointRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if channelEndpointRef01DataDt0LoadResult["id"] != channelEndpointRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		channelEndpointRef01MatchRm0 := map[string]any{
			"id": channelEndpointRef01Data["id"],
		}
		_, err = channelEndpointRef01Ent.Remove(channelEndpointRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func channel_endpointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "channel_endpoint", "ChannelEndpointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read channel_endpoint test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse channel_endpoint test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"channel_endpoint01", "channel_endpoint02", "channel_endpoint03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NOVU_TEST_CHANNEL_ENDPOINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_CHANNEL_ENDPOINT_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_CHANNEL_ENDPOINT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NOVU_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["NOVU_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewNovuSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NOVU_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NOVU_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
