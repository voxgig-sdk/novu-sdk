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

func TestTopicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Topic(nil)
		if ent == nil {
			t.Fatal("expected non-nil TopicEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"topic": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Topic(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Topic(nil).Stream("list", nil, nil) {
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
		setup := topicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "topic." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_TOPIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		topicRef01Ent := client.Topic(nil)
		topicRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "topic"}), "topic_ref01"))

		topicRef01DataResult, err := topicRef01Ent.Create(topicRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		topicRef01Data = core.ToMapAny(entityData(topicRef01DataResult))
		if topicRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if topicRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		topicRef01Match := map[string]any{}

		topicRef01ListResult, err := topicRef01Ent.List(topicRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		topicRef01List, topicRef01ListOk := topicRef01ListResult.([]any)
		if !topicRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", topicRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(topicRef01List), map[string]any{"id": topicRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		topicRef01DataUp0Up := map[string]any{
			"id": topicRef01Data["id"],
		}

		topicRef01MarkdefUp0Name := "createdAt"
		topicRef01MarkdefUp0Value := fmt.Sprintf("Mark01-topic_ref01_%d", setup.now)
		topicRef01DataUp0Up[topicRef01MarkdefUp0Name] = topicRef01MarkdefUp0Value

		topicRef01ResdataUp0Result, err := topicRef01Ent.Update(topicRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		topicRef01ResdataUp0 := core.ToMapAny(entityData(topicRef01ResdataUp0Result))
		if topicRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if topicRef01ResdataUp0["id"] != topicRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if topicRef01ResdataUp0[topicRef01MarkdefUp0Name] != topicRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", topicRef01MarkdefUp0Name, topicRef01ResdataUp0[topicRef01MarkdefUp0Name])
		}

		// LOAD
		topicRef01MatchDt0 := map[string]any{
			"id": topicRef01Data["id"],
		}
		topicRef01DataDt0Loaded, err := topicRef01Ent.Load(topicRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		topicRef01DataDt0LoadResult := core.ToMapAny(entityData(topicRef01DataDt0Loaded))
		if topicRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if topicRef01DataDt0LoadResult["id"] != topicRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		topicRef01MatchRm0 := map[string]any{
			"id": topicRef01Data["id"],
		}
		_, err = topicRef01Ent.Remove(topicRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		topicRef01MatchRt0 := map[string]any{}

		topicRef01ListRt0Result, err := topicRef01Ent.List(topicRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		topicRef01ListRt0, topicRef01ListRt0Ok := topicRef01ListRt0Result.([]any)
		if !topicRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", topicRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(topicRef01ListRt0), map[string]any{"id": topicRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func topicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "topic", "TopicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read topic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse topic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"topic01", "topic02", "topic03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_TOPIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_TOPIC_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_TOPIC_ENTID"])
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
