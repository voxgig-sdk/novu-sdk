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

func TestDomainRouteResponseDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DomainRouteResponseDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil DomainRouteResponseDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := domain_route_response_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "domain_route_response_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		domainRouteResponseDtoRef01Ent := client.DomainRouteResponseDto(nil)
		domainRouteResponseDtoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "domain_route_response_dto"}), "domain_route_response_dto_ref01"))
		domainRouteResponseDtoRef01Data["domain"] = setup.idmap["domain01"]
		domainRouteResponseDtoRef01Data["domain_id"] = setup.idmap["domain01"]

		domainRouteResponseDtoRef01DataResult, err := domainRouteResponseDtoRef01Ent.Create(domainRouteResponseDtoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		domainRouteResponseDtoRef01Data = core.ToMapAny(entityData(domainRouteResponseDtoRef01DataResult))
		if domainRouteResponseDtoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if domainRouteResponseDtoRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		domainRouteResponseDtoRef01DataUp0Up := map[string]any{
			"id": domainRouteResponseDtoRef01Data["id"],
			"domain_id": setup.idmap["domain_id"],
		}

		domainRouteResponseDtoRef01MarkdefUp0Name := "agentId"
		domainRouteResponseDtoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-domain_route_response_dto_ref01_%d", setup.now)
		domainRouteResponseDtoRef01DataUp0Up[domainRouteResponseDtoRef01MarkdefUp0Name] = domainRouteResponseDtoRef01MarkdefUp0Value

		domainRouteResponseDtoRef01ResdataUp0Result, err := domainRouteResponseDtoRef01Ent.Update(domainRouteResponseDtoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		domainRouteResponseDtoRef01ResdataUp0 := core.ToMapAny(entityData(domainRouteResponseDtoRef01ResdataUp0Result))
		if domainRouteResponseDtoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if domainRouteResponseDtoRef01ResdataUp0["id"] != domainRouteResponseDtoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if domainRouteResponseDtoRef01ResdataUp0[domainRouteResponseDtoRef01MarkdefUp0Name] != domainRouteResponseDtoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", domainRouteResponseDtoRef01MarkdefUp0Name, domainRouteResponseDtoRef01ResdataUp0[domainRouteResponseDtoRef01MarkdefUp0Name])
		}

		// LOAD
		domainRouteResponseDtoRef01MatchDt0 := map[string]any{
			"id": domainRouteResponseDtoRef01Data["id"],
		}
		domainRouteResponseDtoRef01DataDt0Loaded, err := domainRouteResponseDtoRef01Ent.Load(domainRouteResponseDtoRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		domainRouteResponseDtoRef01DataDt0LoadResult := core.ToMapAny(entityData(domainRouteResponseDtoRef01DataDt0Loaded))
		if domainRouteResponseDtoRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if domainRouteResponseDtoRef01DataDt0LoadResult["id"] != domainRouteResponseDtoRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func domain_route_response_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "domain_route_response_dto", "DomainRouteResponseDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read domain_route_response_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse domain_route_response_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"domain_route_response_dto01", "domain_route_response_dto02", "domain_route_response_dto03", "domain01", "domain02", "domain03"},
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
	entidEnvRaw := os.Getenv("NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID": idmap,
		"NOVU_TEST_LIVE":      "FALSE",
		"NOVU_TEST_EXPLAIN":   "FALSE",
		"NOVU_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add domain_id alias for update test.
	if idmapResolved["domain_id"] == nil {
		idmapResolved["domain_id"] = idmapResolved["domain01"]
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
