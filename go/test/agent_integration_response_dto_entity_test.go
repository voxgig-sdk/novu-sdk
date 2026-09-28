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

func TestAgentIntegrationResponseDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AgentIntegrationResponseDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil AgentIntegrationResponseDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := agent_integration_response_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "agent_integration_response_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		agentIntegrationResponseDtoRef01Ent := client.AgentIntegrationResponseDto(nil)
		agentIntegrationResponseDtoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "agent_integration_response_dto"}), "agent_integration_response_dto_ref01"))
		agentIntegrationResponseDtoRef01Data["agent_id"] = setup.idmap["agent01"]
		agentIntegrationResponseDtoRef01Data["identifier"] = setup.idmap["identifier01"]

		agentIntegrationResponseDtoRef01DataResult, err := agentIntegrationResponseDtoRef01Ent.Create(agentIntegrationResponseDtoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		agentIntegrationResponseDtoRef01Data = core.ToMapAny(entityData(agentIntegrationResponseDtoRef01DataResult))
		if agentIntegrationResponseDtoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if agentIntegrationResponseDtoRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		agentIntegrationResponseDtoRef01DataUp0Up := map[string]any{
			"id": agentIntegrationResponseDtoRef01Data["id"],
			"agent_id": setup.idmap["agent_id"],
		}

		agentIntegrationResponseDtoRef01MarkdefUp0Name := "agentId"
		agentIntegrationResponseDtoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-agent_integration_response_dto_ref01_%d", setup.now)
		agentIntegrationResponseDtoRef01DataUp0Up[agentIntegrationResponseDtoRef01MarkdefUp0Name] = agentIntegrationResponseDtoRef01MarkdefUp0Value

		agentIntegrationResponseDtoRef01ResdataUp0Result, err := agentIntegrationResponseDtoRef01Ent.Update(agentIntegrationResponseDtoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		agentIntegrationResponseDtoRef01ResdataUp0 := core.ToMapAny(entityData(agentIntegrationResponseDtoRef01ResdataUp0Result))
		if agentIntegrationResponseDtoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if agentIntegrationResponseDtoRef01ResdataUp0["id"] != agentIntegrationResponseDtoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if agentIntegrationResponseDtoRef01ResdataUp0[agentIntegrationResponseDtoRef01MarkdefUp0Name] != agentIntegrationResponseDtoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", agentIntegrationResponseDtoRef01MarkdefUp0Name, agentIntegrationResponseDtoRef01ResdataUp0[agentIntegrationResponseDtoRef01MarkdefUp0Name])
		}

	})
}

func agent_integration_response_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "agent_integration_response_dto", "AgentIntegrationResponseDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read agent_integration_response_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse agent_integration_response_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"agent_integration_response_dto01", "agent_integration_response_dto02", "agent_integration_response_dto03", "agent01", "agent02", "agent03", "integration01", "integration02", "integration03", "identifier01"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add agent_id alias for update test.
	if idmapResolved["agent_id"] == nil {
		idmapResolved["agent_id"] = idmapResolved["agent01"]
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
