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

func TestSubscriberResponseDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriberResponseDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriberResponseDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := subscriber_response_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscriber_response_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_SUBSCRIBER_RESPONSE_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		subscriberResponseDtoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.subscriber_response_dto")))
		var subscriberResponseDtoRef01Data map[string]any
		if len(subscriberResponseDtoRef01DataRaw) > 0 {
			subscriberResponseDtoRef01Data = core.ToMapAny(subscriberResponseDtoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = subscriberResponseDtoRef01Data

		// UPDATE
		subscriberResponseDtoRef01Ent := client.SubscriberResponseDto(nil)
		subscriberResponseDtoRef01DataUp0Up := map[string]any{
			"id": subscriberResponseDtoRef01Data["id"],
		}

		subscriberResponseDtoRef01MarkdefUp0Name := "avatar"
		subscriberResponseDtoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-subscriber_response_dto_ref01_%d", setup.now)
		subscriberResponseDtoRef01DataUp0Up[subscriberResponseDtoRef01MarkdefUp0Name] = subscriberResponseDtoRef01MarkdefUp0Value

		subscriberResponseDtoRef01ResdataUp0Result, err := subscriberResponseDtoRef01Ent.Update(subscriberResponseDtoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		subscriberResponseDtoRef01ResdataUp0 := core.ToMapAny(entityData(subscriberResponseDtoRef01ResdataUp0Result))
		if subscriberResponseDtoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if subscriberResponseDtoRef01ResdataUp0["id"] != subscriberResponseDtoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if subscriberResponseDtoRef01ResdataUp0[subscriberResponseDtoRef01MarkdefUp0Name] != subscriberResponseDtoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", subscriberResponseDtoRef01MarkdefUp0Name, subscriberResponseDtoRef01ResdataUp0[subscriberResponseDtoRef01MarkdefUp0Name])
		}

	})
}

func subscriber_response_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscriber_response_dto", "SubscriberResponseDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscriber_response_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscriber_response_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscriber_response_dto01", "subscriber_response_dto02", "subscriber_response_dto03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_SUBSCRIBER_RESPONSE_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_SUBSCRIBER_RESPONSE_DTO_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_SUBSCRIBER_RESPONSE_DTO_ENTID"])
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
