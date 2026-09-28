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

func TestWorkflowResponseDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WorkflowResponseDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkflowResponseDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := workflow_response_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "workflow_response_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		workflowResponseDtoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.workflow_response_dto")))
		var workflowResponseDtoRef01Data map[string]any
		if len(workflowResponseDtoRef01DataRaw) > 0 {
			workflowResponseDtoRef01Data = core.ToMapAny(workflowResponseDtoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = workflowResponseDtoRef01Data

		// UPDATE
		workflowResponseDtoRef01Ent := client.WorkflowResponseDto(nil)
		workflowResponseDtoRef01DataUp0Up := map[string]any{
			"id": workflowResponseDtoRef01Data["id"],
		}

		workflowResponseDtoRef01MarkdefUp0Name := "createdAt"
		workflowResponseDtoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-workflow_response_dto_ref01_%d", setup.now)
		workflowResponseDtoRef01DataUp0Up[workflowResponseDtoRef01MarkdefUp0Name] = workflowResponseDtoRef01MarkdefUp0Value

		workflowResponseDtoRef01ResdataUp0Result, err := workflowResponseDtoRef01Ent.Update(workflowResponseDtoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		workflowResponseDtoRef01ResdataUp0 := core.ToMapAny(entityData(workflowResponseDtoRef01ResdataUp0Result))
		if workflowResponseDtoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if workflowResponseDtoRef01ResdataUp0["id"] != workflowResponseDtoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if workflowResponseDtoRef01ResdataUp0[workflowResponseDtoRef01MarkdefUp0Name] != workflowResponseDtoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", workflowResponseDtoRef01MarkdefUp0Name, workflowResponseDtoRef01ResdataUp0[workflowResponseDtoRef01MarkdefUp0Name])
		}

	})
}

func workflow_response_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "workflow_response_dto", "WorkflowResponseDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read workflow_response_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse workflow_response_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"workflow_response_dto01", "workflow_response_dto02", "workflow_response_dto03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID"])
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
