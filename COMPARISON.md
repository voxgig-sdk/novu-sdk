# Novu: the Voxgig SDK and the Speakeasy SDK compared

Vergleich: Speakeasy. Compared with novuhq/novu-ts (@novu/api 3.19.1, generated from spec 3.19.0). Spec: api.novu.co/openapi.sdk.yaml, 3.19.2 as fetched, OAS 3.0.0, 102 paths / 149 ops, MIT. Added 2026-09-28.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Speakeasy |
|---|---|---|
| SDK | this repository, commit `9fb76e9`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@novu/api@3.19.1` (TypeScript) |
| Input | `novu-openapi.yaml`: OAS 3.0.0, `info.version` 3.19.2, 102 paths, 149 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 148 of 149 (1 modelled as `patch` but not generated) | 149 operation methods |
| Entities | 67 | not applicable |
| ts package | 3.72 MB, 512 files | 9.26 MB, 3908 files |
| Runtime dependencies | 0 | 1 |
| Generated tests | ts 435 pass / 0 fail; py 424 pass; rb 448 runs / 0 fail; lua 422 pass / 0 fail; php 448 tests, 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 4 of 4 steps right, 0 request violations (static) | 2 of 4 steps right, 0 request violations (static) |

## Features

Voxgig's features are opt-in; these builds enable the standard set. The Speakeasy column is read from the published package, with the evidence below.

| Feature | Voxgig | Speakeasy |
|---|---|---|
| Retries | yes | yes |
| Timeouts | yes | yes |
| Pagination helper | partial | no |
| Idempotency keys | yes | yes |
| Rate-limit handling | yes | yes |
| Logging / debug | yes | yes |
| Built-in offline test mode | yes | no |
| Metrics / telemetry | partial | no |
| Cancellation | yes | yes |
| Hooks / middleware | yes | yes |

**Evidence, Speakeasy.**

- Retries: lib/retries.js retry(); funcs/*.js default: backoff 1s->30s (exp 1.5), retryConnectionErrors true, codes 408/409/429/5XX. No attempt cap: stops at maxElapsedTime 1h. Option retryConfig.
- Timeouts: SDKOptions.timeoutMs (lib/config.d.ts) and per-call RequestOptions.timeoutMs (lib/sdks.d.ts), applied per attempt via AbortSignal.timeout. Default -1 = none.
- Pagination helper: List ops (e.g. funcs/contextsList.js) take after/before/limit by hand. types/operations.js defines PageIterator/createPageIterator, but no file in funcs/ or sdk/ uses it.
- Idempotency keys: hooks/novu-custom-hook.js beforeCreateRequest sets idempotency-key to Date.now()+random base36 on every request lacking one; set before the retry loop, so retries reuse it.
- Rate-limit handling: 429 is a default retry code; lib/retries.js retryIntervalFromResponse honours retry-after-ms and Retry-After (seconds or HTTP date), capped by maxInterval 30s. No throttling.
- Logging / debug: SDKOptions.debugLogger (console-like Logger, lib/config.d.ts); lib/sdks.js logRequest/logResponse log method, URL, headers and body. No log level or env var.
- Built-in offline test mode: Searched mock/testMode/fake/sandbox across src/ outside models: 0 hits. No built-in mock transport or test mode.
- Metrics / telemetry: Searched telemetry/opentelemetry/tracer/metric: no code. hooks/types.d.ts only comments that generic hooks could host tracing (counted under hooks).
- Cancellation: RequestOptions extends RequestInit (lib/sdks.d.ts), so signal reaches fetch, combined with the timeout signal (lib/sdks.js _do); abort -> RequestAbortedError.
- Hooks / middleware: httpClient option: new HTTPClient({fetcher}).addHook('beforeRequest'|'requestError'|'response') (lib/http.js). Author-level SDKHooks are registered in hooks/registration.js.
- Auth: SDKOptions.secretKey (string or async function) -> Authorization header; NovuCustomHook.beforeRequest prefixes 'ApiKey '. No env-var default. serverIdx/serverURL choose US or EU.
- Errors: Partly: per-op matchers choose classes by status, grouped by schema. trigger: 400 PayloadValidationExceptionDto, 422 ValidationErrorDto, 401/403/404/409/500 ErrorDto, else SDKError (all NovuError).

**Evidence, Voxgig.**

- Retries: retry feature: 408, 425, 429 and 5xx, honouring Retry-After.
- Timeouts: timeout feature: 30 s per attempt by default.
- Pagination helper: paging feature: page and cursor state carried between calls (ctrl.paging); no iterator.
- Idempotency keys: idempotency feature: generates an Idempotency-Key for mutating calls, stable across retries.
- Rate-limit handling: ratelimit feature: client-side token bucket; retry honours Retry-After on 429.
- Logging / debug: debug feature: request and response logging with auth headers redacted.
- Built-in offline test mode: test feature: an offline mock transport; every generated suite runs on it.
- Metrics / telemetry: metrics feature: per-operation counts and timings; no OpenTelemetry.
- Cancellation: an AbortSignal per call (callopts.signal).
- Hooks / middleware: extend: custom features hook every pipeline stage.

## Scenario

✓ right, ⚠ returned without error but with the wrong data, ✗ failed.

Each SDK lists one resource, loads and removes the first item it listed, and creates one from the definition's own example or required fields, against a mock built from the same vendor definition. The mock is Prism: static mode answers with the definition's examples, and dynamic mode generates schema-valid data. Each SDK is credited with its better mode. Request violations are Prism's verdicts on what the SDK sent.

- **Voxgig, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Voxgig, dynamic:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Speakeasy, static:** 2 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✗ `load`: Response validation failed
  - ✗ `create`: Response validation failed
  - ✓ `remove`
- **Speakeasy, dynamic:** 2 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✗ `load`: Response validation failed
  - ✗ `create`: Response validation failed
  - ✓ `remove`

## Voxgig toolchain findings

- **Y1-Y3** (@tabnas/yaml 0.5.11 (used by apidef)). Three YAML parser defects. A quote inside a block scalar, comment or plain scalar inverts the flow scanner's quote parity (Lob fails at line 14557). A digit-first plain scalar is cut at its first colon (Novu's `09:00 AM`). Scalars resolve by YAML 1.1 rules, so SaladCloud's country code NO becomes false. Patch written and verified: all eight specs parse identically to js-yaml, 0 regressions over 259 local YAML files. Not applied: attaching tabnas/yaml with push access was refused. The three SDKs were built on the patched parser.
- **TS-NAMES** (@voxgig/sdkgen 4.30.2). An entity named operation, context or control collided with the SDK types the ts entity file imports (TS2300: Neon, Novu). An entity named eval produced `const eval` in the README examples (TS1215: Vapi). Fixed in voxgig/sdkgen#210 (open). The three SDKs were built on that branch.
- **PATCH-OP** (@voxgig/apidef 8.17.2 + @voxgig/sdkgen 4.30.2). apidef resolves a PATCH beside a PUT on the same entity as a sixth op, `patch`. sdkgen generates only load, list, create, update and remove, so those operations are modelled but have no method. The coverage gate counts entities, so it passes anyway. Here: novu: PATCH /v2/workflows/{workflowId}. Reported, not changed: a design decision across both tools.
- **QUERY-ECHO** (@voxgig/sdkgen 4.30.2 (PrepareQuery: ts, js and rb read the field; other targets not checked)). Every match field, path parameters included, is also sent as a query parameter: GET /video/v1/assets/a1?id=a1 (Mux), GET /assistant/asst_1?id=asst_1 (Vapi), DELETE .../containers/web?id=web&organization_name=acme&project_id=demo (SaladCloud). prepareQuery excludes names in point.params, but the generated config carries path parameters in point.args.params (which prepareParams reads), so nothing is excluded. Harmless to a lenient server, rejected by a strict one. Prism logs paths without query strings, so its runs did not show it. Reported, not changed: the same exclusion exists per target.

## Speakeasy SDK notes

- Validates responses with zod; the mock's static placeholder values fail it (for example `string` in a date-time field).

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.

