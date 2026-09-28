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

func TestInboxNotificationDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.InboxNotificationDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil InboxNotificationDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := inbox_notification_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "inbox_notification_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		inboxNotificationDtoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.inbox_notification_dto")))
		var inboxNotificationDtoRef01Data map[string]any
		if len(inboxNotificationDtoRef01DataRaw) > 0 {
			inboxNotificationDtoRef01Data = core.ToMapAny(inboxNotificationDtoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = inboxNotificationDtoRef01Data

		// UPDATE
		inboxNotificationDtoRef01Ent := client.InboxNotificationDto(nil)
		inboxNotificationDtoRef01DataUp0Up := map[string]any{
			"id": inboxNotificationDtoRef01Data["id"],
			"subscriber_id": setup.idmap["subscriber_id"],
		}

		inboxNotificationDtoRef01MarkdefUp0Name := "archivedAt"
		inboxNotificationDtoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-inbox_notification_dto_ref01_%d", setup.now)
		inboxNotificationDtoRef01DataUp0Up[inboxNotificationDtoRef01MarkdefUp0Name] = inboxNotificationDtoRef01MarkdefUp0Value

		inboxNotificationDtoRef01ResdataUp0Result, err := inboxNotificationDtoRef01Ent.Update(inboxNotificationDtoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		inboxNotificationDtoRef01ResdataUp0 := core.ToMapAny(entityData(inboxNotificationDtoRef01ResdataUp0Result))
		if inboxNotificationDtoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if inboxNotificationDtoRef01ResdataUp0["id"] != inboxNotificationDtoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if inboxNotificationDtoRef01ResdataUp0[inboxNotificationDtoRef01MarkdefUp0Name] != inboxNotificationDtoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", inboxNotificationDtoRef01MarkdefUp0Name, inboxNotificationDtoRef01ResdataUp0[inboxNotificationDtoRef01MarkdefUp0Name])
		}

	})
}

func inbox_notification_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "inbox_notification_dto", "InboxNotificationDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read inbox_notification_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse inbox_notification_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"inbox_notification_dto01", "inbox_notification_dto02", "inbox_notification_dto03", "subscriber01", "subscriber02", "subscriber03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add subscriber_id alias for update test.
	if idmapResolved["subscriber_id"] == nil {
		idmapResolved["subscriber_id"] = idmapResolved["subscriber01"]
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
