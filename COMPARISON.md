# Novu: the Voxgig SDK and the Speakeasy SDK compared

Vergleich: Speakeasy. Compared with novuhq/novu-ts (@novu/api 3.19.1, generated from spec 3.19.0). Spec: api.novu.co/openapi.sdk.yaml, 3.19.2 as fetched, OAS 3.0.0, 102 paths / 149 ops, MIT. Added 2026-09-28. Rebuilt 2026-09-29 on sdkgen 4.32.1 and apidef 8.22.0.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Speakeasy |
|---|---|---|
| SDK | this repository, commit `2da1c53`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@novu/api@3.19.1` (TypeScript) |
| Input | `novu-openapi.yaml`: OAS 3.0.0, `info.version` 3.19.2, 102 paths, 149 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 148 of 149 (1 modelled as `patch` but not generated) | 149 operation methods |
| Entities | 59 | not applicable |
| ts package | 3.63 MB, 480 files | 9.26 MB, 3908 files |
| Runtime dependencies | 0 | 1 |
| Generated tests | ts 548 pass / 0 fail / 8 skipped; py 408 pass / 57 skipped; rb 432 runs / 0 fail; lua 406 pass / 0 fail; php 432 tests / 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 4 of 4 steps right, 0 returned wrong data, 0 request violations (static) | 2 of 4 steps right, 0 request violations (static) |

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

- **Y1-Y4** (@tabnas/yaml, used by apidef). Four YAML parser defects: a quote inside a block scalar, comment or plain scalar inverted the flow scanner's quote parity (Lob failed at line 14557); a digit-first plain scalar was cut at its first colon (Novu's `09:00 AM`); scalars resolve by YAML 1.1 rules, so SaladCloud's country code `no` becomes `false`; and a `#` straight after a leading number ended the scalar, so Lob's buckslip weight `80#` read as the number 80 and was typed as an integer. Y1 and Y2 are fixed in the published parser (apidef 8.18.0 requires @tabnas/yaml 0.5.12, and 0.5.13 parses Lob and Novu), and Y4 in 0.5.14 (tabnas/yaml#95), so this rebuild uses no overlay. Y3 is the parser's documented YAML 1.1 leniency, and SaladCloud's SDK comes out the same with and without a patched parser.
- **TS-NAMES** (@voxgig/sdkgen). An entity named operation, context or control collided with the SDK types the ts entity file imports (TS2300: Neon, Novu), and an entity named eval produced `const eval` in the README examples (TS1215: Vapi). Fixed in voxgig/sdkgen#210, released in 4.30.3; this SDK is built on 4.32.1.
- **PATCH-OP** (@voxgig/apidef + @voxgig/sdkgen). apidef resolves a PATCH beside a PUT on the same entity as a sixth op, `patch`, and sdkgen generates only load, list, create, update and remove, so those operations are modelled but have no method. Here: PATCH /v2/workflows/{workflowId}. Open: voxgig/sdkgen#211.
- **QUERY-ECHO** (@voxgig/sdkgen, PrepareQuery). Every match field, path parameters included, was also sent as a query parameter, such as `?id=` on a load. Fixed in voxgig/sdkgen#222, released in 4.31.0: query parameters go out under the definition's names, and the rebuild's scenario requests carry no echoed parameter.
- **HEADERS** (@voxgig/sdkgen, PrepareHeaders, 20 targets). A parameter the definition declares `in: header` was sent in the query or the body, never as a header. Here: Novu's `idempotency-key` went out as `?idempotency_key=`. Fixed in voxgig/sdkgen#223, released in 4.32.0, with a definition-suite check that each one arrives as a header. Cookie parameters have the same gap and stay open in voxgig/sdkgen#221.
- **ERGONOMICS** (@voxgig/apidef). Subscribers were listed through an entity named after the list response. Subscriber carries all five operations in the rebuild. Other entities are still named after response wrappers, such as ListTopicSubscriptionsResponseDto. Open: voxgig/apidef#97.

## Speakeasy SDK notes

- Validates responses with zod; the mock's static placeholder values fail it (for example `string` in a date-time field).

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.
- Rebuild: 2026-09-29, on create-sdkgen 0.30.4, sdkgen 4.32.1, apidef 8.22.0, model 12.0.0 and @tabnas/yaml 0.5.14, all as published, with no overlay.
- Toolchain refresh: 2026-09-30, to apidef 8.22.1 and @tabnas/yaml 0.5.15, as published. A regeneration on them writes the same SDK, so only `.sdk/package-lock.json` moved.
- Tests on the rebuild: all eight targets, the lua suite under Lua 5.4 with busted 2.2.0.
- Scenario on the rebuild: the Voxgig side was re-run on 2026-09-29; the compared SDK's run is from 2026-09-28, and its package is unchanged. The generated create input honours the definition's minimums, which the first run did not.
