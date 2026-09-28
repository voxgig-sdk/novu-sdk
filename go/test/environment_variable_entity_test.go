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

func TestEnvironmentVariableEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EnvironmentVariable(nil)
		if ent == nil {
			t.Fatal("expected non-nil EnvironmentVariableEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"environment_variable": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.EnvironmentVariable(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.EnvironmentVariable(nil).Stream("list", nil, nil) {
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
		setup := environment_variableBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "environment_variable." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		environmentVariableRef01Ent := client.EnvironmentVariable(nil)
		environmentVariableRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "environment_variable"}), "environment_variable_ref01"))

		environmentVariableRef01DataResult, err := environmentVariableRef01Ent.Create(environmentVariableRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		environmentVariableRef01Data = core.ToMapAny(entityData(environmentVariableRef01DataResult))
		if environmentVariableRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if environmentVariableRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		environmentVariableRef01Match := map[string]any{}

		environmentVariableRef01ListResult, err := environmentVariableRef01Ent.List(environmentVariableRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		environmentVariableRef01List, environmentVariableRef01ListOk := environmentVariableRef01ListResult.([]any)
		if !environmentVariableRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", environmentVariableRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(environmentVariableRef01List), map[string]any{"id": environmentVariableRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		environmentVariableRef01DataUp0Up := map[string]any{
			"id": environmentVariableRef01Data["id"],
		}

		environmentVariableRef01MarkdefUp0Name := "createdAt"
		environmentVariableRef01MarkdefUp0Value := fmt.Sprintf("Mark01-environment_variable_ref01_%d", setup.now)
		environmentVariableRef01DataUp0Up[environmentVariableRef01MarkdefUp0Name] = environmentVariableRef01MarkdefUp0Value

		environmentVariableRef01ResdataUp0Result, err := environmentVariableRef01Ent.Update(environmentVariableRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		environmentVariableRef01ResdataUp0 := core.ToMapAny(entityData(environmentVariableRef01ResdataUp0Result))
		if environmentVariableRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if environmentVariableRef01ResdataUp0["id"] != environmentVariableRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if environmentVariableRef01ResdataUp0[environmentVariableRef01MarkdefUp0Name] != environmentVariableRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", environmentVariableRef01MarkdefUp0Name, environmentVariableRef01ResdataUp0[environmentVariableRef01MarkdefUp0Name])
		}

		// LOAD
		environmentVariableRef01MatchDt0 := map[string]any{
			"id": environmentVariableRef01Data["id"],
		}
		environmentVariableRef01DataDt0Loaded, err := environmentVariableRef01Ent.Load(environmentVariableRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		environmentVariableRef01DataDt0LoadResult := core.ToMapAny(entityData(environmentVariableRef01DataDt0Loaded))
		if environmentVariableRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if environmentVariableRef01DataDt0LoadResult["id"] != environmentVariableRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		environmentVariableRef01MatchRm0 := map[string]any{
			"id": environmentVariableRef01Data["id"],
		}
		_, err = environmentVariableRef01Ent.Remove(environmentVariableRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		environmentVariableRef01MatchRt0 := map[string]any{}

		environmentVariableRef01ListRt0Result, err := environmentVariableRef01Ent.List(environmentVariableRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		environmentVariableRef01ListRt0, environmentVariableRef01ListRt0Ok := environmentVariableRef01ListRt0Result.([]any)
		if !environmentVariableRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", environmentVariableRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(environmentVariableRef01ListRt0), map[string]any{"id": environmentVariableRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func environment_variableBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "environment_variable", "EnvironmentVariableTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read environment_variable test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse environment_variable test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"environment_variable01", "environment_variable02", "environment_variable03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID"])
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
