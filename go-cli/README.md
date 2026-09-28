# novu-cli

boru-driven command-line client **and** interactive REPL for the Novu
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/novu-cli)
make build

# 2. See usage (words, entities, env vars)
./novu-cli --help

# 3. Provide credentials once, via the environment
export NOVU_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./novu-cli list activity_notification_response_dto
./novu-cli load 1 activity_notification_response_dto            # {id:1} shorthand
./novu-cli load '{id:1}' activity_notification_response_dto       # explicit match map
./novu-cli list agent

# 5. Override the API base URL for a single call
NOVU_BASE=https://api.example.com ./novu-cli list activity_notification_response_dto

# 6. No arguments -> interactive REPL
./novu-cli
novu> list activity_notification_response_dto
novu> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/novu-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export NOVU_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/novu-cli list activity_notification_response_dto
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./novu-cli list activity_notification_response_dto
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./novu-cli load 1 activity_notification_response_dto          # scalar shorthand for {id:1}
./novu-cli load '{id:1}' activity_notification_response_dto     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export NOVU_APIKEY=sk_live_xxx            # API key
export NOVU_BASE=https://api.example.com  # optional: override the API base URL
./novu-cli list activity_notification_response_dto
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `novu>`). Each line is
evaluated as its own boru expression:

```text
$ ./novu-cli
novu> list activity_notification_response_dto
novu> /help
novu> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 67 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `activity_notification_response_dto`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NOVU_APIKEY` | API key sent with every request. |
| `NOVU_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/novu-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 67 entities this SDK exposes (any is valid as `<entity>`):

activity_notification_response_dto agent agent_integration_response_dto agent_response_dto bulk channel_connection channel_endpoint configure context create_subscriptions_response_dto diff domain domain_connect_apply_url_response_dto domain_connect_status_response_dto domain_response_dto domain_route_response_dto environment environment_tags_dto environment_variable environment_variable_workflow_info_dto event generate_chat_o_auth_url_response_dto generate_preview_response_dto import_master_json_response_dto inbox_notification_dto integration integration_response_dto layout layout_response_dto link list_agent_integrations_response_dto list_agents_response_dto list_channel_connections_response_dto list_channel_endpoints_response_dto list_contexts_response_dto list_domain_routes_response_dto list_domains_response_dto list_subscribers_response_dto list_topic_subscriptions_response_dto list_topics_response_dto master_json message message_response_dto notification_feed_item_dto preferences_response_dto publish remove_subscriber_response_dto step subscriber subscriber_notifications_count_response_dto subscriber_notifications_response_dto subscriber_preferences_dto subscriber_response_dto subscription topic topic_subscriber_dto topic_subscriptions_response_dto translation translation_group_dto trigger trigger_event_response_dto unseen upload webhook_result_dto workflow workflow_info_dto workflow_response_dto

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./novu-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
