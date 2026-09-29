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

func TestChannelConnectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ChannelConnection(nil)
		if ent == nil {
			t.Fatal("expected non-nil ChannelConnectionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"channel_connection": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ChannelConnection(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ChannelConnection(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := channel_connectionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "channel_connection." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_CHANNEL_CONNECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		channelConnectionRef01Ent := client.ChannelConnection(nil)
		channelConnectionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "channel_connection"}), "channel_connection_ref01"))

		channelConnectionRef01DataResult, err := channelConnectionRef01Ent.Create(channelConnectionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		channelConnectionRef01Data = core.ToMapAny(entityData(channelConnectionRef01DataResult))
		if channelConnectionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if channelConnectionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		channelConnectionRef01Match := map[string]any{}

		channelConnectionRef01ListResult, err := channelConnectionRef01Ent.List(channelConnectionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		channelConnectionRef01List, channelConnectionRef01ListOk := channelConnectionRef01ListResult.([]any)
		if !channelConnectionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", channelConnectionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(channelConnectionRef01List), map[string]any{"id": channelConnectionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		channelConnectionRef01DataUp0Up := map[string]any{
			"id": channelConnectionRef01Data["id"],
		}

		channelConnectionRef01MarkdefUp0Name := "channel"
		channelConnectionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-channel_connection_ref01_%d", setup.now)
		channelConnectionRef01DataUp0Up[channelConnectionRef01MarkdefUp0Name] = channelConnectionRef01MarkdefUp0Value

		channelConnectionRef01ResdataUp0Result, err := channelConnectionRef01Ent.Update(channelConnectionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		channelConnectionRef01ResdataUp0 := core.ToMapAny(entityData(channelConnectionRef01ResdataUp0Result))
		if channelConnectionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if channelConnectionRef01ResdataUp0["id"] != channelConnectionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if channelConnectionRef01ResdataUp0[channelConnectionRef01MarkdefUp0Name] != channelConnectionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", channelConnectionRef01MarkdefUp0Name, channelConnectionRef01ResdataUp0[channelConnectionRef01MarkdefUp0Name])
		}

		// LOAD
		channelConnectionRef01MatchDt0 := map[string]any{
			"id": channelConnectionRef01Data["id"],
		}
		channelConnectionRef01DataDt0Loaded, err := channelConnectionRef01Ent.Load(channelConnectionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		channelConnectionRef01DataDt0LoadResult := core.ToMapAny(entityData(channelConnectionRef01DataDt0Loaded))
		if channelConnectionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if channelConnectionRef01DataDt0LoadResult["id"] != channelConnectionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		channelConnectionRef01MatchRm0 := map[string]any{
			"id": channelConnectionRef01Data["id"],
		}
		_, err = channelConnectionRef01Ent.Remove(channelConnectionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		channelConnectionRef01MatchRt0 := map[string]any{}

		channelConnectionRef01ListRt0Result, err := channelConnectionRef01Ent.List(channelConnectionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		channelConnectionRef01ListRt0, channelConnectionRef01ListRt0Ok := channelConnectionRef01ListRt0Result.([]any)
		if !channelConnectionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", channelConnectionRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(channelConnectionRef01ListRt0), map[string]any{"id": channelConnectionRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func channel_connectionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "channel_connection", "ChannelConnectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read channel_connection test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse channel_connection test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"channel_connection01", "channel_connection02", "channel_connection03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_CHANNEL_CONNECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_CHANNEL_CONNECTION_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_CHANNEL_CONNECTION_ENTID"])
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
