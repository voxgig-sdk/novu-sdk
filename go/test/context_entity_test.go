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

func TestContextEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Context(nil)
		if ent == nil {
			t.Fatal("expected non-nil ContextEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"context": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Context(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Context(nil).Stream("list", nil, nil) {
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
		setup := contextBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "context." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_CONTEXT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		contextRef01Ent := client.Context(nil)
		contextRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "context"}), "context_ref01"))
		contextRef01Data["type"] = setup.idmap["type01"]

		contextRef01DataResult, err := contextRef01Ent.Create(contextRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		contextRef01Data = core.ToMapAny(entityData(contextRef01DataResult))
		if contextRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if contextRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		contextRef01Match := map[string]any{}

		contextRef01ListResult, err := contextRef01Ent.List(contextRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		contextRef01List, contextRef01ListOk := contextRef01ListResult.([]any)
		if !contextRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", contextRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(contextRef01List), map[string]any{"id": contextRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		contextRef01DataUp0Up := map[string]any{
			"id": contextRef01Data["id"],
			"type": setup.idmap["type"],
		}

		contextRef01MarkdefUp0Name := "bridgeUrl"
		contextRef01MarkdefUp0Value := fmt.Sprintf("Mark01-context_ref01_%d", setup.now)
		contextRef01DataUp0Up[contextRef01MarkdefUp0Name] = contextRef01MarkdefUp0Value

		contextRef01ResdataUp0Result, err := contextRef01Ent.Update(contextRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		contextRef01ResdataUp0 := core.ToMapAny(entityData(contextRef01ResdataUp0Result))
		if contextRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if contextRef01ResdataUp0["id"] != contextRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if contextRef01ResdataUp0[contextRef01MarkdefUp0Name] != contextRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", contextRef01MarkdefUp0Name, contextRef01ResdataUp0[contextRef01MarkdefUp0Name])
		}

		// LOAD
		contextRef01MatchDt0 := map[string]any{
			"id": contextRef01Data["id"],
		}
		contextRef01DataDt0Loaded, err := contextRef01Ent.Load(contextRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		contextRef01DataDt0LoadResult := core.ToMapAny(entityData(contextRef01DataDt0Loaded))
		if contextRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if contextRef01DataDt0LoadResult["id"] != contextRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		contextRef01MatchRm0 := map[string]any{
			"id": contextRef01Data["id"],
		}
		_, err = contextRef01Ent.Remove(contextRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		contextRef01MatchRt0 := map[string]any{}

		contextRef01ListRt0Result, err := contextRef01Ent.List(contextRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		contextRef01ListRt0, contextRef01ListRt0Ok := contextRef01ListRt0Result.([]any)
		if !contextRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", contextRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(contextRef01ListRt0), map[string]any{"id": contextRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func contextBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "context", "ContextTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read context test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse context test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"context01", "context02", "context03", "type01"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_CONTEXT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_CONTEXT_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_CONTEXT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add type alias for update test.
	if idmapResolved["type"] == nil {
		idmapResolved["type"] = idmapResolved["type01"]
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
