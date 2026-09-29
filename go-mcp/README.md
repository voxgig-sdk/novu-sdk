# novu-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Novu SDK as
two agent tools — `novu_list` and `novu_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/novu-mcp)
make build

# 2. Provide credentials via the environment
export NOVU_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user novu \
  -- /absolute/path/to/novu-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./novu-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// novu_list: first page of records
{ "entity": "activity_notification_response_dto" }
{ "entity": "activity_notification_response_dto", "query": { } }

// novu_load: one record by id
{ "entity": "activity_notification_response_dto", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/novu-mcp
   ```

2. **Set your API key:**

   ```sh
   export NOVU_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user novu \
     -- "$PWD"/dist/*/novu-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `novu_list` and `novu_load` tools now appear
   in new sessions. Ask the agent to *"list activity_notification_response_dto using novu"*
   and it calls `novu_list` with `{"entity":"activity_notification_response_dto"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export NOVU_APIKEY=sk_live_xxx            # API key
export NOVU_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./novu-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `novu_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "activity_notification_response_dto" }
```

### Call the `novu_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "activity_notification_response_dto", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `novu_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `novu_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 59 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NOVU_APIKEY` | API key sent with every request. |
| `NOVU_BASE` | Optional override of the API base URL. |

### Entities

The 59 entities valid as the `entity` argument:

activity_notification_response_dto | agent | agent_integration_response_dto | agent_response_dto | bulk | channel_connection | channel_endpoint | configure | context | create_subscriptions_response_dto | diff | domain | domain_connect_apply_url_response_dto | domain_connect_status_response_dto | domain_response_dto | domain_route_response_dto | environment | environment_tags_dto | environment_variable | environment_variable_workflow_info_dto | event | generate_chat_o_auth_url_response_dto | generate_preview_response_dto | import_master_json_response_dto | inbox_notification_dto | integration | integration_response_dto | layout | layout_response_dto | link | list_agent_integrations_response_dto | list_domain_routes_response_dto | list_topic_subscriptions_response_dto | master_json | message | message_response_dto | notification_feed_item_dto | preferences_response_dto | publish | remove_subscriber_response_dto | step | subscriber | subscriber_notifications_count_response_dto | subscriber_notifications_response_dto | subscriber_preferences_dto | subscriber_response_dto | subscription | topic | topic_subscriber_dto | topic_subscriptions_response_dto | translation | translation_group_dto | trigger_event_response_dto | unseen | upload | webhook_result_dto | workflow | workflow_info_dto | workflow_response_dto

### Smoke test via HTTP (raw JSON-RPC)

```sh
./novu-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"novu_load","arguments":{"entity":"activity_notification_response_dto","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
