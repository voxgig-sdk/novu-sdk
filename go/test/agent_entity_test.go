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

func TestAgentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Agent(nil)
		if ent == nil {
			t.Fatal("expected non-nil AgentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := agentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "agent." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_AGENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		agentRef01Ent := client.Agent(nil)
		agentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "agent"}), "agent_ref01"))
		agentRef01Data["agent_id"] = setup.idmap["agent01"]

		agentRef01DataResult, err := agentRef01Ent.Create(agentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		agentRef01Data = core.ToMapAny(entityData(agentRef01DataResult))
		if agentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if agentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		agentRef01DataUp0Up := map[string]any{
			"id": agentRef01Data["id"],
		}

		agentRef01MarkdefUp0Name := "bridgeUrl"
		agentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-agent_ref01_%d", setup.now)
		agentRef01DataUp0Up[agentRef01MarkdefUp0Name] = agentRef01MarkdefUp0Value

		agentRef01ResdataUp0Result, err := agentRef01Ent.Update(agentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		agentRef01ResdataUp0 := core.ToMapAny(entityData(agentRef01ResdataUp0Result))
		if agentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if agentRef01ResdataUp0["id"] != agentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if agentRef01ResdataUp0[agentRef01MarkdefUp0Name] != agentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", agentRef01MarkdefUp0Name, agentRef01ResdataUp0[agentRef01MarkdefUp0Name])
		}

		// LOAD
		agentRef01MatchDt0 := map[string]any{
			"id": agentRef01Data["id"],
		}
		agentRef01DataDt0Loaded, err := agentRef01Ent.Load(agentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		agentRef01DataDt0LoadResult := core.ToMapAny(entityData(agentRef01DataDt0Loaded))
		if agentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if agentRef01DataDt0LoadResult["id"] != agentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		agentRef01MatchRm0 := map[string]any{
			"id": agentRef01Data["id"],
		}
		_, err = agentRef01Ent.Remove(agentRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func agentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "agent", "AgentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read agent test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse agent test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"agent01", "agent02", "agent03", "integration01", "integration02", "integration03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_AGENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_AGENT_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_AGENT_ENTID"])
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
