# Novu Golang SDK



The Golang SDK for the Novu API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ActivityNotificationResponseDto(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/novu-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/novu-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/novu-sdk/go=../novu-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/novu-sdk/go"
)

func main() {
    client := sdk.NewNovuSDK(map[string]any{
        "apikey": os.Getenv("NOVU_APIKEY"),
    })

    // List activityNotificationResponseDto records — the value is the array of records itself.
    activityNotificationResponseDtos, err := client.ActivityNotificationResponseDto(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range activityNotificationResponseDtos.([]any) {
        fmt.Println(item)
    }

    // Load a single activityNotificationResponseDto — the value is the loaded record.
    activityNotificationResponseDto, err := client.ActivityNotificationResponseDto(nil).Load(map[string]any{"notification_id": "example_notification_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(activityNotificationResponseDto)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
environmentvariables, err := client.EnvironmentVariable(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = environmentvariables
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

environmentVariable, err := client.EnvironmentVariable(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(environmentVariable) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewNovuSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
NOVU_TEST_LIVE=TRUE
NOVU_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewNovuSDK

```go
func NewNovuSDK(options map[string]any) *NovuSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *NovuSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### NovuSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ActivityNotificationResponseDto` | `(data map[string]any) NovuEntity` | Create an ActivityNotificationResponseDto entity instance. |
| `Agent` | `(data map[string]any) NovuEntity` | Create an Agent entity instance. |
| `AgentIntegrationResponseDto` | `(data map[string]any) NovuEntity` | Create an AgentIntegrationResponseDto entity instance. |
| `AgentResponseDto` | `(data map[string]any) NovuEntity` | Create an AgentResponseDto entity instance. |
| `Bulk` | `(data map[string]any) NovuEntity` | Create a Bulk entity instance. |
| `ChannelConnection` | `(data map[string]any) NovuEntity` | Create a ChannelConnection entity instance. |
| `ChannelEndpoint` | `(data map[string]any) NovuEntity` | Create a ChannelEndpoint entity instance. |
| `Configure` | `(data map[string]any) NovuEntity` | Create a Configure entity instance. |
| `Context` | `(data map[string]any) NovuEntity` | Create a Context entity instance. |
| `CreateSubscriptionsResponseDto` | `(data map[string]any) NovuEntity` | Create a CreateSubscriptionsResponseDto entity instance. |
| `Diff` | `(data map[string]any) NovuEntity` | Create a Diff entity instance. |
| `Domain` | `(data map[string]any) NovuEntity` | Create a Domain entity instance. |
| `DomainConnectApplyUrlResponseDto` | `(data map[string]any) NovuEntity` | Create a DomainConnectApplyUrlResponseDto entity instance. |
| `DomainConnectStatusResponseDto` | `(data map[string]any) NovuEntity` | Create a DomainConnectStatusResponseDto entity instance. |
| `DomainResponseDto` | `(data map[string]any) NovuEntity` | Create a DomainResponseDto entity instance. |
| `DomainRouteResponseDto` | `(data map[string]any) NovuEntity` | Create a DomainRouteResponseDto entity instance. |
| `Environment` | `(data map[string]any) NovuEntity` | Create an Environment entity instance. |
| `EnvironmentTagsDto` | `(data map[string]any) NovuEntity` | Create an EnvironmentTagsDto entity instance. |
| `EnvironmentVariable` | `(data map[string]any) NovuEntity` | Create an EnvironmentVariable entity instance. |
| `EnvironmentVariableWorkflowInfoDto` | `(data map[string]any) NovuEntity` | Create an EnvironmentVariableWorkflowInfoDto entity instance. |
| `Event` | `(data map[string]any) NovuEntity` | Create an Event entity instance. |
| `GenerateChatOAuthUrlResponseDto` | `(data map[string]any) NovuEntity` | Create a GenerateChatOAuthUrlResponseDto entity instance. |
| `GeneratePreviewResponseDto` | `(data map[string]any) NovuEntity` | Create a GeneratePreviewResponseDto entity instance. |
| `ImportMasterJsonResponseDto` | `(data map[string]any) NovuEntity` | Create an ImportMasterJsonResponseDto entity instance. |
| `InboxNotificationDto` | `(data map[string]any) NovuEntity` | Create an InboxNotificationDto entity instance. |
| `Integration` | `(data map[string]any) NovuEntity` | Create an Integration entity instance. |
| `IntegrationResponseDto` | `(data map[string]any) NovuEntity` | Create an IntegrationResponseDto entity instance. |
| `Layout` | `(data map[string]any) NovuEntity` | Create a Layout entity instance. |
| `LayoutResponseDto` | `(data map[string]any) NovuEntity` | Create a LayoutResponseDto entity instance. |
| `Link` | `(data map[string]any) NovuEntity` | Create a Link entity instance. |
| `ListAgentIntegrationsResponseDto` | `(data map[string]any) NovuEntity` | Create a ListAgentIntegrationsResponseDto entity instance. |
| `ListDomainRoutesResponseDto` | `(data map[string]any) NovuEntity` | Create a ListDomainRoutesResponseDto entity instance. |
| `ListTopicSubscriptionsResponseDto` | `(data map[string]any) NovuEntity` | Create a ListTopicSubscriptionsResponseDto entity instance. |
| `MasterJson` | `(data map[string]any) NovuEntity` | Create a MasterJson entity instance. |
| `Message` | `(data map[string]any) NovuEntity` | Create a Message entity instance. |
| `MessageResponseDto` | `(data map[string]any) NovuEntity` | Create a MessageResponseDto entity instance. |
| `NotificationFeedItemDto` | `(data map[string]any) NovuEntity` | Create a NotificationFeedItemDto entity instance. |
| `PreferencesResponseDto` | `(data map[string]any) NovuEntity` | Create a PreferencesResponseDto entity instance. |
| `Publish` | `(data map[string]any) NovuEntity` | Create a Publish entity instance. |
| `RemoveSubscriberResponseDto` | `(data map[string]any) NovuEntity` | Create a RemoveSubscriberResponseDto entity instance. |
| `Step` | `(data map[string]any) NovuEntity` | Create a Step entity instance. |
| `Subscriber` | `(data map[string]any) NovuEntity` | Create a Subscriber entity instance. |
| `SubscriberNotificationsCountResponseDto` | `(data map[string]any) NovuEntity` | Create a SubscriberNotificationsCountResponseDto entity instance. |
| `SubscriberNotificationsResponseDto` | `(data map[string]any) NovuEntity` | Create a SubscriberNotificationsResponseDto entity instance. |
| `SubscriberPreferencesDto` | `(data map[string]any) NovuEntity` | Create a SubscriberPreferencesDto entity instance. |
| `SubscriberResponseDto` | `(data map[string]any) NovuEntity` | Create a SubscriberResponseDto entity instance. |
| `Subscription` | `(data map[string]any) NovuEntity` | Create a Subscription entity instance. |
| `Topic` | `(data map[string]any) NovuEntity` | Create a Topic entity instance. |
| `TopicSubscriberDto` | `(data map[string]any) NovuEntity` | Create a TopicSubscriberDto entity instance. |
| `TopicSubscriptionsResponseDto` | `(data map[string]any) NovuEntity` | Create a TopicSubscriptionsResponseDto entity instance. |
| `Translation` | `(data map[string]any) NovuEntity` | Create a Translation entity instance. |
| `TranslationGroupDto` | `(data map[string]any) NovuEntity` | Create a TranslationGroupDto entity instance. |
| `TriggerEventResponseDto` | `(data map[string]any) NovuEntity` | Create a TriggerEventResponseDto entity instance. |
| `Unseen` | `(data map[string]any) NovuEntity` | Create an Unseen entity instance. |
| `Upload` | `(data map[string]any) NovuEntity` | Create an Upload entity instance. |
| `WebhookResultDto` | `(data map[string]any) NovuEntity` | Create a WebhookResultDto entity instance. |
| `Workflow` | `(data map[string]any) NovuEntity` | Create a Workflow entity instance. |
| `WorkflowInfoDto` | `(data map[string]any) NovuEntity` | Create a WorkflowInfoDto entity instance. |
| `WorkflowResponseDto` | `(data map[string]any) NovuEntity` | Create a WorkflowResponseDto entity instance. |

### Entity interface (NovuEntity)

All entities implement the `NovuEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activityNotificationResponseDto, err := client.ActivityNotificationResponseDto(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activityNotificationResponseDto is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ActivityNotificationResponseDto

| Field | Description |
| --- | --- |
| `"channels"` |  |
| `"contextKeys"` | Context (single or multi) in which the notification was sent |
| `"controls"` | Controls associated with the notification |
| `"createdAt"` | Creation time of the notification |
| `"critical"` | Criticality of the notification |
| `"digestedNotificationId"` | Digested Notification ID |
| `"environmentId"` | Environment ID of the notification |
| `"id"` | Unique identifier of the notification |
| `"jobs"` | Jobs of the notification |
| `"organizationId"` | Organization ID of the notification |
| `"payload"` | Payload of the notification |
| `"severity"` | Workflow severity |
| `"subscriber"` | Subscriber of the notification |
| `"subscriberId"` | Subscriber ID of the notification |
| `"tags"` | Tags associated with the notification |
| `"template"` | Template of the notification |
| `"templateId"` | Template ID of the notification |
| `"to"` | To field for subscriber definition |
| `"topics"` | Topics of the notification |
| `"transactionId"` | Transaction ID of the notification |
| `"updatedAt"` | Last updated time of the notification |

Operations: List, Load.

API path: `/v1/notifications`

#### Agent

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"behavior"` |  |
| `"bridgeUrl"` | Production bridge URL |
| `"createdAt"` |  |
| `"createdBy"` | Mongo user id of the user who created the agent |
| `"description"` |  |
| `"devBridgeActive"` | Whether the dev bridge override is active |
| `"devBridgeUrl"` | Development bridge URL (set by npx novu dev) |
| `"environmentId"` |  |
| `"exceedsPlanLimit"` | Cloud only. |
| `"id"` |  |
| `"identifier"` | Required when not adopting an existing managed agent. |
| `"integrations"` |  |
| `"managedRuntime"` | Present when runtime is "managed". |
| `"name"` | Required when not adopting an existing managed agent (i.e. |
| `"organizationId"` |  |
| `"runtime"` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `"updatedAt"` |  |
| `"visibility"` | Discovery scope of the agent. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/agents/{agentId}/reply`

#### AgentIntegrationResponseDto

| Field | Description |
| --- | --- |
| `"agentId"` |  |
| `"connectedAt"` | Set when the agent–integration link received its first inbound webhook delivery. |
| `"createdAt"` |  |
| `"environmentId"` |  |
| `"exceedsPlanLimit"` | Cloud only. |
| `"id"` | Agent–integration link document id. |
| `"integration"` |  |
| `"integrationIdentifier"` | The integration identifier (same as in the integration store), not the internal document _id. |
| `"organizationId"` |  |
| `"providerId"` | Provider ID to auto-create a dedicated integration (e.g. |
| `"updatedAt"` |  |

Operations: Create, Update.

API path: `/v1/agents/{identifier}/integrations`

#### AgentResponseDto

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"behavior"` |  |
| `"bridgeUrl"` | Production bridge URL |
| `"createdAt"` |  |
| `"createdBy"` | Mongo user id of the user who created the agent |
| `"description"` |  |
| `"devBridgeActive"` | Whether the dev bridge override is active |
| `"devBridgeUrl"` | Development bridge URL (set by npx novu dev) |
| `"environmentId"` |  |
| `"exceedsPlanLimit"` | Cloud only. |
| `"id"` |  |
| `"identifier"` |  |
| `"integrations"` |  |
| `"managedRuntime"` | Present when runtime is "managed". |
| `"name"` |  |
| `"organizationId"` |  |
| `"runtime"` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `"updatedAt"` |  |
| `"visibility"` | Discovery scope of the agent. |

Operations: Update.

API path: `/v1/agents/{identifier}/bridge`

#### Bulk

| Field | Description |
| --- | --- |
| `"subscribers"` | An array of subscribers to be created in bulk. |

Operations: Create.

API path: `/v1/subscribers/bulk`

#### ChannelConnection

| Field | Description |
| --- | --- |
| `"auth"` |  |
| `"channel"` | The channel type (email, sms, push, chat, etc.). |
| `"connectionMode"` | Connection mode that determines how the channel connection is scoped. |
| `"context"` |  |
| `"contextKeys"` | The context of the channel connection |
| `"createdAt"` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `"id"` |  |
| `"identifier"` | The unique identifier of the channel endpoint. |
| `"integrationIdentifier"` | The identifier of the integration to use for this channel endpoint. |
| `"providerId"` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `"subscriberId"` | The subscriber ID to which the channel connection is linked |
| `"updatedAt"` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `"workspace"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/channel-connections`

#### ChannelEndpoint

| Field | Description |
| --- | --- |
| `"channel"` | The channel type (email, sms, push, chat, etc.). |
| `"connectionIdentifier"` | The identifier of the channel connection used for this endpoint. |
| `"contextKeys"` | The context of the channel connection |
| `"createdAt"` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `"endpoint"` | Endpoint data specific to the channel type |
| `"id"` |  |
| `"identifier"` | The unique identifier of the channel endpoint. |
| `"integrationIdentifier"` | The identifier of the integration to use for this channel endpoint. |
| `"providerId"` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `"subscriberId"` | The subscriber ID to which the channel endpoint is linked |
| `"type"` | Type of channel endpoint |
| `"updatedAt"` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/channel-endpoints`

#### Configure

| Field | Description |
| --- | --- |
| `"botUsername"` | Resolved bot username from getMe |
| `"configuredAt"` | ISO-8601 timestamp the webhook was configured at |
| `"webhookUrl"` | URL Novu registered with Telegram for incoming updates |

Operations: Create.

API path: `/v1/integrations/{integrationIdentifier}/webhook/configure`

#### Context

| Field | Description |
| --- | --- |
| `"bridgeUrl"` | Bridge URL override for agent connect, if configured on this context |
| `"createdAt"` | Creation timestamp |
| `"data"` | Custom data associated with this context |
| `"id"` | Unique identifier for this context |
| `"type"` | Context type (e.g., tenant, app, workspace) |
| `"updatedAt"` | Last update timestamp |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/contexts`

#### CreateSubscriptionsResponseDto

| Field | Description |
| --- | --- |
| `"context"` |  |
| `"name"` | The name of the topic |
| `"preferences"` | The preferences of the topic. |
| `"subscriberIds"` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `"subscriptions"` | List of subscriptions to subscribe to the topic (max: 100). |

Operations: Create.

API path: `/v2/topics/{topicKey}/subscriptions`

#### Diff

| Field | Description |
| --- | --- |
| `"resources"` | Diff resources by resource type |
| `"sourceEnvironmentId"` | Source environment ID |
| `"summary"` | Overall summary |
| `"targetEnvironmentId"` | Target environment ID |

Operations: Create.

API path: `/v2/environments/{targetEnvironmentId}/diff`

#### Domain

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"data"` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `"dnsProvider"` |  |
| `"environmentId"` |  |
| `"expectedDnsRecords"` |  |
| `"id"` |  |
| `"mxRecordConfigured"` |  |
| `"name"` | The domain name (e.g. |
| `"organizationId"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/domains/{domain}/diagnose`

#### DomainConnectApplyUrlResponseDto

| Field | Description |
| --- | --- |
| `"redirectUri"` | Dashboard URL to return to after the DNS provider consent flow completes. |

Operations: Create.

API path: `/v1/domains/{domain}/auto-configure/start`

#### DomainConnectStatusResponseDto

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/v1/domains/{domain}/auto-configure`

#### DomainResponseDto

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"data"` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `"dnsProvider"` |  |
| `"environmentId"` |  |
| `"expectedDnsRecords"` |  |
| `"id"` |  |
| `"mxRecordConfigured"` |  |
| `"name"` |  |
| `"organizationId"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create.

API path: `/v1/domains/{domain}/verify`

#### DomainRouteResponseDto

| Field | Description |
| --- | --- |
| `"address"` |  |
| `"agentId"` | Internal id of the destination agent. |
| `"createdAt"` |  |
| `"data"` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `"domainId"` |  |
| `"environmentId"` |  |
| `"id"` |  |
| `"organizationId"` |  |
| `"type"` |  |
| `"updatedAt"` |  |

Operations: Create, Load, Update.

API path: `/v1/domains/{domain}/routes/{address}/test`

#### Environment

| Field | Description |
| --- | --- |
| `"apiKeys"` | List of API keys associated with the environment |
| `"bridge"` |  |
| `"color"` | Hex color code for the environment |
| `"dns"` |  |
| `"id"` | Unique identifier of the environment |
| `"identifier"` | Unique identifier for the environment |
| `"name"` | Name of the environment to be created |
| `"organizationId"` | Organization ID associated with the environment |
| `"parentId"` | MongoDB ObjectId of the parent environment (optional) |
| `"slug"` | URL-friendly slug for the environment |
| `"type"` | Type of the environment |

Operations: Create, List, Remove, Update.

API path: `/v1/environments`

#### EnvironmentTagsDto

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/v2/environments/{environmentId}/tags`

#### EnvironmentVariable

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"id"` |  |
| `"isSecret"` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `"key"` | Unique key for the variable. |
| `"organizationId"` |  |
| `"type"` | The type of the variable |
| `"updatedAt"` |  |
| `"values"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/environment-variables`

#### EnvironmentVariableWorkflowInfoDto

| Field | Description |
| --- | --- |
| `"name"` | The name of the workflow |
| `"workflowId"` | The unique identifier of the workflow |

Operations: List.

API path: `/v1/environment-variables/{variableKey}/usage`

#### Event

| Field | Description |
| --- | --- |
| `"actor"` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `"agentId"` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `"bridgeUrl"` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `"context"` |  |
| `"name"` | The trigger identifier of the workflow you wish to send. |
| `"overrides"` | This could be used to override provider specific configurations |
| `"payload"` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `"tenant"` | It is used to specify a tenant context during trigger event. |
| `"to"` | The recipients list of people who will receive the notification. |
| `"transactionId"` | A unique identifier for deduplication. |

Operations: Create, Remove.

API path: `/v1/events/trigger`

#### GenerateChatOAuthUrlResponseDto

| Field | Description |
| --- | --- |
| `"autoLinkUser"` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `"connectionIdentifier"` | Identifier of the channel connection that will be created. |
| `"connectionMode"` | Connection mode that determines how the channel connection is scoped. |
| `"context"` |  |
| `"contextHash"` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `"integrationIdentifier"` | Integration identifier |
| `"mode"` | OAuth flow mode. |
| `"scope"` | **Slack only**: OAuth scopes to request during authorization. |
| `"subscriberId"` | The subscriber ID to associate with the channel connection. |
| `"userScope"` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

Operations: Create.

API path: `/v1/integrations/channel-connections/oauth`

#### GeneratePreviewResponseDto

| Field | Description |
| --- | --- |
| `"controlValues"` | Optional control values |
| `"previewPayload"` | Optional payload for preview generation |

Operations: Create.

API path: `/v2/workflows/{workflowId}/step/{stepId}/preview`

#### ImportMasterJsonResponseDto

| Field | Description |
| --- | --- |
| `"failed"` | List of resource IDs that failed to import |
| `"locale"` | The locale for which translations are being imported |
| `"masterJson"` | Master JSON object containing all translations organized by workflow identifier |
| `"message"` | Human-readable message describing the import result |
| `"success"` | Overall success status of the import operation |
| `"successful"` | List of resource IDs that were successfully imported |

Operations: Create.

API path: `/v2/translations/master-json`

#### InboxNotificationDto

| Field | Description |
| --- | --- |
| `"archivedAt"` | ISO timestamp when the notification was archived |
| `"avatar"` | Avatar URL for the notification |
| `"body"` | Body content of the notification |
| `"channelType"` | Channel the message was sent on |
| `"createdAt"` | ISO timestamp when the notification was created |
| `"data"` | Custom data payload of the notification |
| `"deliveredAt"` | Timestamps when the notification was delivered |
| `"firstSeenAt"` | ISO timestamp when the notification was first seen |
| `"id"` | Unique identifier of the notification |
| `"isArchived"` | Whether the notification has been archived |
| `"isRead"` | Whether the notification has been read |
| `"isSeen"` | Whether the notification has been seen |
| `"isSnoozed"` | Whether the notification is snoozed |
| `"primaryAction"` | Primary action button for the notification |
| `"readAt"` | ISO timestamp when the notification was read |
| `"redirect"` | Redirect configuration for the notification |
| `"secondaryAction"` | Secondary action button for the notification |
| `"severity"` | Workflow severity |
| `"snoozeUntil"` | The date and time until which the notification should be snoozed |
| `"snoozedUntil"` | ISO timestamp when the notification will be unsnoozed |
| `"subject"` | Subject of the notification |
| `"tags"` | Tags associated with the notification |
| `"to"` | Subscriber this notification was sent to |
| `"transactionId"` | Transaction identifier of the notification |
| `"workflow"` | Workflow associated with the notification |

Operations: Update.

API path: `/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete`

#### Integration

| Field | Description |
| --- | --- |
| `"active"` | If the integration is active, the validation on the credentials field will run |
| `"channel"` | The channel type for the integration. |
| `"check"` | Flag to check the integration status |
| `"conditions"` | Legacy StepFilter conditions. |
| `"configurations"` | Configurations for the integration |
| `"credentials"` | The credentials for the integration |
| `"deleted"` | Indicates whether the integration has been marked as deleted (soft delete). |
| `"deletedAt"` | The timestamp indicating when the integration was deleted. |
| `"deletedBy"` | The identifier of the user who performed the deletion of this integration. |
| `"environmentId"` | The ID of the associated environment |
| `"id"` | The unique identifier of the integration record in the database. |
| `"identifier"` | The unique identifier for the integration |
| `"kind"` | Distinguishes delivery integrations from agent-runtime integrations. |
| `"name"` | The name of the integration |
| `"organizationId"` | The unique identifier for the organization that owns this integration. |
| `"primary"` | Indicates whether this integration is marked as primary. |
| `"providerId"` | The provider ID for the integration |
| `"rules"` | JSONLogic used at send time to select this integration. |

Operations: Create, List, Remove, Update.

API path: `/v1/integrations/{integrationId}/auto-configure`

#### IntegrationResponseDto

| Field | Description |
| --- | --- |
| `"active"` | Indicates whether the integration is currently active. |
| `"channel"` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `"conditions"` | Legacy StepFilter conditions. |
| `"configurations"` | The configurations required for enabling the additional configurations of the integration. |
| `"credentials"` | The decrypted credentials required for the integration to function (e.g. |
| `"deleted"` | Indicates whether the integration has been marked as deleted (soft delete). |
| `"deletedAt"` | The timestamp indicating when the integration was deleted. |
| `"deletedBy"` | The identifier of the user who performed the deletion of this integration. |
| `"environmentId"` | The unique identifier for the environment associated with this integration. |
| `"id"` | The unique identifier of the integration record in the database. |
| `"identifier"` | A unique string identifier for the integration, often used for API calls or internal references. |
| `"kind"` | Distinguishes delivery integrations from agent-runtime integrations. |
| `"name"` | The name of the integration, which is used to identify it in the user interface. |
| `"organizationId"` | The unique identifier for the organization that owns this integration. |
| `"primary"` | Indicates whether this integration is marked as primary. |
| `"providerId"` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `"rules"` | JSONLogic used at send time to select this integration. |

Operations: Create, List.

API path: `/v1/integrations/{integrationId}/set-primary`

#### Layout

| Field | Description |
| --- | --- |
| `"controlValues"` | Control values for the layout. |
| `"controls"` | Controls metadata for the layout |
| `"createdAt"` | Creation timestamp |
| `"id"` | Unique internal identifier of the layout |
| `"isDefault"` | Whether the layout is the default layout |
| `"isTranslationEnabled"` | Whether the layout translations are enabled |
| `"layoutId"` | Unique identifier for the layout |
| `"name"` | Name of the layout |
| `"origin"` | Workflow origin |
| `"slug"` | Slug of the layout |
| `"source"` | Source of layout creation |
| `"type"` | Resource type |
| `"updatedAt"` | Last updated timestamp |
| `"updatedBy"` | User who last updated the layout |
| `"variables"` | The variables JSON Schema for the layout |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/layouts/{layoutId}/preview`

#### LayoutResponseDto

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create.

API path: `/v2/layouts/{layoutId}/duplicate`

#### Link

| Field | Description |
| --- | --- |
| `"context"` |  |
| `"contextHash"` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `"integrationIdentifier"` | Integration identifier for the chat provider integration |
| `"subscriberId"` | External subscriber identifier to link to their chat identity |

Operations: Create.

API path: `/v1/integrations/channel-endpoints/link`

#### ListAgentIntegrationsResponseDto

| Field | Description |
| --- | --- |
| `"agentId"` |  |
| `"connectedAt"` | Set when the agent–integration link received its first inbound webhook delivery. |
| `"createdAt"` |  |
| `"environmentId"` |  |
| `"exceedsPlanLimit"` | Cloud only. |
| `"id"` | Agent–integration link document id. |
| `"integration"` |  |
| `"organizationId"` |  |
| `"updatedAt"` |  |

Operations: List.

API path: `/v1/agents/{identifier}/integrations`

#### ListDomainRoutesResponseDto

| Field | Description |
| --- | --- |
| `"address"` |  |
| `"agentId"` | Internal id of the destination agent. |
| `"createdAt"` |  |
| `"data"` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `"domainId"` |  |
| `"environmentId"` |  |
| `"id"` |  |
| `"organizationId"` |  |
| `"type"` |  |
| `"updatedAt"` |  |

Operations: List.

API path: `/v1/domains/{domain}/routes`

#### ListTopicSubscriptionsResponseDto

| Field | Description |
| --- | --- |
| `"contextKeys"` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `"createdAt"` | The date and time the subscription was created |
| `"id"` | The identifier of the subscription |
| `"identifier"` | The identifier of the subscription |
| `"preferences"` | The preferences for workflows in this subscription |
| `"subscriber"` | Subscriber information |
| `"topic"` | Topic information |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/subscriptions`

#### MasterJson

| Field | Description |
| --- | --- |
| `"layouts"` | All translations for given locale organized by layout identifier |
| `"workflows"` | All translations for given locale organized by workflow identifier |

Operations: Load.

API path: `/v2/translations/master-json`

#### Message

| Field | Description |
| --- | --- |
| `"channel"` | Channel the message was sent on |
| `"content"` | Content of the message, can be an email block or a string |
| `"contextKeys"` | Context (single or multi) in which the message was sent |
| `"createdAt"` | Creation date of the message |
| `"cta"` | Call to action associated with the message |
| `"deliveredAt"` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `"deviceTokens"` | Device tokens associated with the message, if applicable |
| `"directWebhookUrl"` | Direct webhook URL for the message, if applicable |
| `"email"` | Email address associated with the message, if applicable |
| `"environmentId"` | Environment ID where the message is sent |
| `"errorId"` | Error ID if the message has an error |
| `"errorText"` | Error text if the message has an error |
| `"feedId"` | Feed ID associated with the message, if applicable |
| `"id"` | Unique identifier for the message |
| `"lastReadDate"` | Last read date of the message, if available |
| `"lastSeenDate"` | Last seen date of the message, if available |
| `"messageTemplateId"` | Message template ID |
| `"notificationId"` | Notification ID associated with the message |
| `"organizationId"` | Organization ID associated with the message |
| `"overrides"` | Provider specific overrides used when triggering the notification |
| `"payload"` | The payload that was used to send the notification trigger |
| `"phone"` | Phone number associated with the message, if applicable |
| `"providerId"` | Provider ID associated with the message, if applicable |
| `"read"` | Indicates if the message has been read |
| `"seen"` | Indicates if the message has been seen |
| `"snoozedUntil"` | Date when the message will be unsnoozed |
| `"status"` | Status of the message |
| `"subject"` | Subject of the message, if applicable |
| `"subscriber"` | Subscriber details, if available |
| `"subscriberId"` | Subscriber ID associated with the message |
| `"template"` | Workflow template associated with the message |
| `"templateId"` | Template ID associated with the message |
| `"templateIdentifier"` | Identifier for the message template |
| `"title"` | Title of the message, if applicable |
| `"transactionId"` | Transaction ID associated with the message |

Operations: List, Remove.

API path: `/v1/messages`

#### MessageResponseDto

| Field | Description |
| --- | --- |
| `"markAs"` |  |
| `"messageId"` |  |
| `"payload"` | Message action payload |
| `"status"` | Message action status |

Operations: Create.

API path: `/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}`

#### NotificationFeedItemDto

| Field | Description |
| --- | --- |
| `"actor"` | Actor details related to the notification, if applicable. |
| `"archived"` | Indicates whether the notification has been archived by the subscriber. |
| `"channel"` | Channel the message was sent on |
| `"content"` | The main content of the notification. |
| `"createdAt"` | Timestamp indicating when the notification was created. |
| `"cta"` | Call-to-action information associated with the notification. |
| `"data"` | The data sent with the notification. |
| `"deviceTokens"` | Device tokens for push notifications, if applicable. |
| `"environmentId"` | Identifier for the environment where the notification is sent. |
| `"feedId"` | Identifier for the feed associated with the notification. |
| `"id"` | Unique identifier for the notification. |
| `"jobId"` | Identifier for the job that triggered the notification. |
| `"messageTemplateId"` | Identifier for the message template used. |
| `"notificationId"` | Unique identifier for the notification instance. |
| `"organizationId"` | Identifier for the organization sending the notification. |
| `"overrides"` | Provider-specific overrides used when triggering the notification. |
| `"payload"` | The payload that was used to send the notification trigger. |
| `"providerId"` | Identifier for the provider that sends the notification. |
| `"read"` | Indicates whether the notification has been read by the subscriber. |
| `"seen"` | Indicates whether the notification has been seen by the subscriber. |
| `"status"` | Current status of the notification. |
| `"subject"` | The subject line for email notifications, if applicable. |
| `"subscriber"` | Subscriber details associated with this notification. |
| `"subscriberId"` | Unique identifier for the subscriber receiving the notification. |
| `"tags"` | Tags associated with the workflow that triggered the notification. |
| `"templateId"` | Identifier for the template used to generate the notification. |
| `"templateIdentifier"` | Identifier for the template used, if applicable. |
| `"transactionId"` | Unique identifier for the transaction associated with the notification. |
| `"updatedAt"` | Timestamp indicating when the notification was last updated. |

Operations: List.

API path: `/v1/subscribers/{subscriberId}/notifications/feed`

#### PreferencesResponseDto

| Field | Description |
| --- | --- |
| `"context"` |  |
| `"preferences"` | Array of workflow preferences to update (maximum 100 items) |

Operations: Update.

API path: `/v2/subscribers/{subscriberId}/preferences/bulk`

#### Publish

| Field | Description |
| --- | --- |
| `"dryRun"` | Perform a dry run without making actual changes |
| `"resources"` | Array of specific resources to publish. |
| `"results"` | Sync results by resource type |
| `"sourceEnvironmentId"` | Source environment ID to sync from. |
| `"summary"` | Summary of the sync operation |

Operations: Create.

API path: `/v2/environments/{targetEnvironmentId}/publish`

#### RemoveSubscriberResponseDto

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/v2/subscribers/{subscriberId}`

#### Step

| Field | Description |
| --- | --- |
| `"controlValues"` | Control values for the step (alias for controls.values) |
| `"controls"` | Controls metadata for the step |
| `"id"` | Database identifier of the step |
| `"issues"` | Issues associated with the step |
| `"name"` | Name of the step |
| `"origin"` | Workflow origin |
| `"providerOverrides"` | Per-provider content overrides keyed by providerId. |
| `"slug"` | Slug of the step |
| `"stepId"` | Unique identifier of the step |
| `"stepResolverHash"` | Hash identifying the deployed Cloudflare Worker for this step |
| `"type"` | Type of the step |
| `"variables"` | JSON Schema for variables, follows the JSON Schema standard |
| `"workflowDatabaseId"` | Workflow database identifier |
| `"workflowId"` | Workflow identifier |

Operations: Load.

API path: `/v2/workflows/{workflowId}/steps/{stepId}`

#### Subscriber

| Field | Description |
| --- | --- |
| `"avatar"` | The URL of the subscriber's avatar image. |
| `"channels"` | An array of channel settings associated with the subscriber. |
| `"createdAt"` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `"data"` | Additional custom data for the subscriber |
| `"deleted"` | Indicates whether the subscriber has been deleted. |
| `"email"` | The email address of the subscriber. |
| `"environmentId"` | The unique identifier of the environment associated with this subscriber. |
| `"firstName"` | The first name of the subscriber. |
| `"id"` | The internal ID generated by Novu for your subscriber. |
| `"isOnline"` | Indicates whether the subscriber is currently online. |
| `"lastName"` | The last name of the subscriber. |
| `"lastOnlineAt"` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `"locale"` | The locale setting of the subscriber, indicating their preferred language or region. |
| `"organizationId"` | The unique identifier of the organization to which the subscriber belongs. |
| `"phone"` | The phone number of the subscriber. |
| `"subscriberId"` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `"timezone"` | Timezone of the subscriber |
| `"topics"` | An array of topics that the subscriber is subscribed to. |
| `"updatedAt"` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `"v"` | The version of the subscriber document. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/subscribers`

#### SubscriberNotificationsCountResponseDto

| Field | Description |
| --- | --- |
| `"count"` | The count of notifications matching the filter |
| `"filter"` | The filter applied |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/notifications/count`

#### SubscriberNotificationsResponseDto

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/notifications`

#### SubscriberPreferencesDto

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List, Update.

API path: `/v2/subscribers/{subscriberId}/preferences`

#### SubscriberResponseDto

| Field | Description |
| --- | --- |
| `"avatar"` | The URL of the subscriber's avatar image. |
| `"channels"` | An array of channel settings associated with the subscriber. |
| `"createdAt"` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `"data"` | Additional custom data for the subscriber |
| `"deleted"` | Indicates whether the subscriber has been deleted. |
| `"email"` | The email address of the subscriber. |
| `"environmentId"` | The unique identifier of the environment associated with this subscriber. |
| `"firstName"` | The first name of the subscriber. |
| `"id"` | The internal ID generated by Novu for your subscriber. |
| `"isOnline"` | Indicates whether the subscriber is currently online. |
| `"lastName"` | The last name of the subscriber. |
| `"lastOnlineAt"` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `"locale"` | The locale setting of the subscriber, indicating their preferred language or region. |
| `"organizationId"` | The unique identifier of the organization to which the subscriber belongs. |
| `"phone"` | The phone number of the subscriber. |
| `"subscriberId"` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `"timezone"` | Timezone of the subscriber |
| `"topics"` | An array of topics that the subscriber is subscribed to. |
| `"updatedAt"` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `"v"` | The version of the subscriber document. |

Operations: Update.

API path: `/v1/subscribers/{subscriberId}/credentials`

#### Subscription

| Field | Description |
| --- | --- |
| `"contextKeys"` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `"createdAt"` | The creation date of the subscription |
| `"id"` | The unique identifier of the subscription |
| `"identifier"` | The identifier of the subscription |
| `"name"` | The name of the subscription |
| `"preferences"` | The preferences/rules for the subscription |
| `"subscriber"` | The subscriber information |
| `"topic"` | The topic information |
| `"updatedAt"` | The last update date of the subscription |

Operations: Load, Update.

API path: `/v2/topics/{topicKey}/subscriptions/{identifier}`

#### Topic

| Field | Description |
| --- | --- |
| `"createdAt"` | The date the topic was created |
| `"data"` | Additional custom data associated with the topic |
| `"id"` | The identifier of the topic |
| `"key"` | The unique key of the topic |
| `"name"` | The name of the topic |
| `"updatedAt"` | The date the topic was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/topics`

#### TopicSubscriberDto

| Field | Description |
| --- | --- |
| `"environmentId"` | Unique identifier for the environment |
| `"externalSubscriberId"` | External identifier for the subscriber |
| `"organizationId"` | Unique identifier for the organization |
| `"subscriberId"` | Unique identifier for the subscriber |
| `"topicId"` | Unique identifier for the topic |
| `"topicKey"` | Key associated with the topic |

Operations: Load.

API path: `/v1/topics/{topicKey}/subscribers/{externalSubscriberId}`

#### TopicSubscriptionsResponseDto

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/v2/topics/{topicKey}/subscriptions`

#### Translation

| Field | Description |
| --- | --- |
| `"content"` | Translation content as JSON object |
| `"createdAt"` | Creation timestamp |
| `"id"` |  |
| `"locale"` | Locale code |
| `"resourceId"` | Resource identifier |
| `"resourceType"` | Resource type |
| `"updatedAt"` | Last update timestamp |

Operations: Create, Load, Remove.

API path: `/v2/translations`

#### TranslationGroupDto

| Field | Description |
| --- | --- |
| `"createdAt"` | Creation timestamp |
| `"id"` |  |
| `"locales"` | Array of available locales for this resource |
| `"outdatedLocales"` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `"resourceId"` | Resource identifier (slugified ID) |
| `"resourceName"` | Resource name (e.g., workflow name) |
| `"resourceType"` | Resource type |
| `"updatedAt"` | Last update timestamp |

Operations: Load.

API path: `/v2/translations/group/{resourceType}/{resourceId}`

#### TriggerEventResponseDto

| Field | Description |
| --- | --- |
| `"acknowledged"` | Indicates whether the trigger was acknowledged or not |
| `"activityFeedLink"` | Link to the activity feed for this trigger event |
| `"actor"` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `"agentId"` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `"context"` |  |
| `"error"` | In case of an error, this field will contain the error message(s) |
| `"events"` |  |
| `"jobData"` |  |
| `"name"` | The trigger identifier associated for the template you wish to send. |
| `"overrides"` | This could be used to override provider specific configurations |
| `"payload"` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `"status"` | Status of the trigger |
| `"tenant"` | It is used to specify a tenant context during trigger event. |
| `"transactionId"` | The returned transaction ID of the trigger |

Operations: Create.

API path: `/v1/events/trigger/broadcast`

#### Unseen

| Field | Description |
| --- | --- |
| `"count"` |  |

Operations: Load.

API path: `/v1/subscribers/{subscriberId}/notifications/unseen`

#### Upload

| Field | Description |
| --- | --- |
| `"errors"` | List of error messages for failed uploads |
| `"failedUploads"` | Number of files that failed to upload |
| `"successfulUploads"` | Number of files successfully uploaded |
| `"totalFiles"` | Total number of files processed |

Operations: Create.

API path: `/v2/translations/upload`

#### WebhookResultDto

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}`

#### Workflow

| Field | Description |
| --- | --- |
| `"active"` | Whether the workflow is active |
| `"agent"` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `"createdAt"` | Creation timestamp |
| `"description"` | Description of the workflow |
| `"id"` | Database identifier of the workflow |
| `"isTranslationEnabled"` | Enable or disable translations for this workflow |
| `"issues"` | Runtime issues for workflow creation and update |
| `"lastPublishedAt"` | Timestamp of the last workflow publication |
| `"lastPublishedBy"` | User who last published the workflow |
| `"lastTriggeredAt"` | Timestamp of the last workflow trigger |
| `"name"` | Name of the workflow |
| `"origin"` | Workflow origin |
| `"payloadExample"` | Generated payload example based on the payload schema |
| `"payloadSchema"` | The payload JSON Schema for the workflow |
| `"preferences"` | Preferences for the workflow |
| `"severity"` | Workflow severity |
| `"slug"` | Slug of the workflow |
| `"source"` | Source of workflow creation |
| `"status"` | Workflow status |
| `"stepTypeOverviews"` | Overview of step types in the workflow |
| `"steps"` | Steps of the workflow |
| `"tags"` | Tags associated with the workflow |
| `"updatedAt"` | Last updated timestamp |
| `"updatedBy"` | User who last updated the workflow |
| `"validatePayload"` | Enable or disable payload schema validation |
| `"workflowId"` | Workflow identifier |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v2/workflows`

#### WorkflowInfoDto

| Field | Description |
| --- | --- |
| `"name"` | The name of the workflow |
| `"workflowId"` | The unique identifier of the workflow |

Operations: List.

API path: `/v2/layouts/{layoutId}/usage`

#### WorkflowResponseDto

| Field | Description |
| --- | --- |
| `"active"` | Whether the workflow is active |
| `"agent"` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `"createdAt"` | Creation timestamp |
| `"description"` | Description of the workflow |
| `"id"` | Database identifier of the workflow |
| `"isTranslationEnabled"` | Enable or disable translations for this workflow |
| `"issues"` | Runtime issues for workflow creation and update |
| `"lastPublishedAt"` | Timestamp of the last workflow publication |
| `"lastPublishedBy"` | User who last published the workflow |
| `"lastTriggeredAt"` | Timestamp of the last workflow trigger |
| `"name"` | Name of the workflow |
| `"origin"` | Workflow origin |
| `"payloadExample"` | Generated payload example based on the payload schema |
| `"payloadSchema"` | The payload JSON Schema for the workflow |
| `"preferences"` | Preferences for the workflow |
| `"severity"` | Workflow severity |
| `"slug"` | Slug of the workflow |
| `"status"` | Workflow status |
| `"steps"` | Steps of the workflow |
| `"tags"` | Tags associated with the workflow |
| `"updatedAt"` | Last updated timestamp |
| `"updatedBy"` | User who last updated the workflow |
| `"validatePayload"` | Enable or disable payload schema validation |
| `"workflowId"` | Workflow identifier |

Operations: Update.

API path: `/v2/workflows/{workflowId}/sync`



## Entities


### ActivityNotificationResponseDto

Create an instance: `activityNotificationResponseDto := client.ActivityNotificationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `[]any` |  |
| `contextKeys` | `[]any` | Context (single or multi) in which the notification was sent |
| `controls` | `map[string]any` | Controls associated with the notification |
| `createdAt` | `string` | Creation time of the notification |
| `critical` | `bool` | Criticality of the notification |
| `digestedNotificationId` | `string` | Digested Notification ID |
| `environmentId` | `string` | Environment ID of the notification |
| `id` | `string` | Unique identifier of the notification |
| `jobs` | `[]any` | Jobs of the notification |
| `organizationId` | `string` | Organization ID of the notification |
| `payload` | `map[string]any` | Payload of the notification |
| `severity` | `string` | Workflow severity |
| `subscriber` | `any` | Subscriber of the notification |
| `subscriberId` | `string` | Subscriber ID of the notification |
| `tags` | `[]any` | Tags associated with the notification |
| `template` | `any` | Template of the notification |
| `templateId` | `string` | Template ID of the notification |
| `to` | `map[string]any` | To field for subscriber definition |
| `topics` | `[]any` | Topics of the notification |
| `transactionId` | `string` | Transaction ID of the notification |
| `updatedAt` | `string` | Last updated time of the notification |

#### Example: Load

```go
activityNotificationResponseDto, err := client.ActivityNotificationResponseDto(nil).Load(map[string]any{"notification_id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityNotificationResponseDto) // the loaded record
```

#### Example: List

```go
activityNotificationResponseDtos, err := client.ActivityNotificationResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityNotificationResponseDtos) // the array of records
```


### Agent

Create an instance: `agent := client.Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `behavior` | `map[string]any` |  |
| `bridgeUrl` | `string` | Production bridge URL |
| `createdAt` | `string` |  |
| `createdBy` | `string` | Mongo user id of the user who created the agent |
| `description` | `string` |  |
| `devBridgeActive` | `bool` | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `string` |  |
| `identifier` | `string` | Required when not adopting an existing managed agent. |
| `integrations` | `[]any` |  |
| `managedRuntime` | `any` | Present when runtime is "managed". |
| `name` | `string` | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `string` |  |
| `runtime` | `string` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` |  |
| `visibility` | `string` | Discovery scope of the agent. |

#### Example: Load

```go
agent, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the loaded record
```

#### Example: List

```go
agents, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agents) // the array of records
```

#### Example: Create

```go
result, err := client.Agent(nil).Create(map[string]any{
    "active": true,
    "behavior": map[string]any{},
    "createdAt": "example_createdAt",
    "environmentId": "example_environmentId",
    "id": "example_id",
    "identifier": "example_identifier",
    "name": "example_name",
    "organizationId": "example_organizationId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AgentIntegrationResponseDto

Create an instance: `agentIntegrationResponseDto := client.AgentIntegrationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `string` |  |
| `connectedAt` | `map[string]any` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` |  |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `string` | Agent–integration link document id. |
| `integration` | `map[string]any` |  |
| `integrationIdentifier` | `string` | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `string` |  |
| `providerId` | `string` | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `string` |  |

#### Example: Create

```go
result, err := client.AgentIntegrationResponseDto(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "agentId": "example_agentId",
    "createdAt": "example_createdAt",
    "environmentId": "example_environmentId",
    "id": "example_id",
    "integration": map[string]any{},
    "organizationId": "example_organizationId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AgentResponseDto

Create an instance: `agentResponseDto := client.AgentResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `behavior` | `map[string]any` |  |
| `bridgeUrl` | `string` | Production bridge URL |
| `createdAt` | `string` |  |
| `createdBy` | `string` | Mongo user id of the user who created the agent |
| `description` | `string` |  |
| `devBridgeActive` | `bool` | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `string` |  |
| `identifier` | `string` |  |
| `integrations` | `[]any` |  |
| `managedRuntime` | `any` | Present when runtime is "managed". |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `runtime` | `string` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` |  |
| `visibility` | `string` | Discovery scope of the agent. |


### Bulk

Create an instance: `bulk := client.Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscribers` | `[]any` | An array of subscribers to be created in bulk. |

#### Example: Create

```go
result, err := client.Bulk(nil).Create(map[string]any{
    "subscribers": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ChannelConnection

Create an instance: `channelConnection := client.ChannelConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `map[string]any` |  |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | Connection mode that determines how the channel connection is scoped. |
| `context` | `map[string]any` |  |
| `contextKeys` | `[]any` | The context of the channel connection |
| `createdAt` | `string` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` |  |
| `identifier` | `string` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `map[string]any` |  |

#### Example: Load

```go
channelConnection, err := client.ChannelConnection(nil).Load(map[string]any{"id": "channel_connection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(channelConnection) // the loaded record
```

#### Example: List

```go
channelConnections, err := client.ChannelConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(channelConnections) // the array of records
```

#### Example: Create

```go
result, err := client.ChannelConnection(nil).Create(map[string]any{
    "auth": map[string]any{},
    "channel": "example_channel",
    "contextKeys": []any{},
    "createdAt": "example_createdAt",
    "identifier": "example_identifier",
    "integrationIdentifier": "example_integrationIdentifier",
    "providerId": "example_providerId",
    "subscriberId": "example_subscriberId",
    "updatedAt": "example_updatedAt",
    "workspace": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ChannelEndpoint

Create an instance: `channelEndpoint := client.ChannelEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `[]any` | The context of the channel connection |
| `createdAt` | `string` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `any` | Endpoint data specific to the channel type |
| `id` | `string` |  |
| `identifier` | `string` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Type of channel endpoint |
| `updatedAt` | `string` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

#### Example: Load

```go
channelEndpoint, err := client.ChannelEndpoint(nil).Load(map[string]any{"id": "channel_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(channelEndpoint) // the loaded record
```

#### Example: List

```go
channelEndpoints, err := client.ChannelEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(channelEndpoints) // the array of records
```

#### Example: Create

```go
result, err := client.ChannelEndpoint(nil).Create(map[string]any{
    "channel": "example_channel",
    "connectionIdentifier": "example_connectionIdentifier",
    "contextKeys": []any{},
    "createdAt": "example_createdAt",
    "endpoint": "example_endpoint",
    "identifier": "example_identifier",
    "integrationIdentifier": "example_integrationIdentifier",
    "providerId": "example_providerId",
    "subscriberId": "example_subscriberId",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Configure

Create an instance: `configure := client.Configure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `botUsername` | `string` | Resolved bot username from getMe |
| `configuredAt` | `string` | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | URL Novu registered with Telegram for incoming updates |

#### Example: Create

```go
result, err := client.Configure(nil).Create(map[string]any{
    "integration_id": "example_integration_id",
    "botUsername": "example_botUsername",
    "configuredAt": "example_configuredAt",
    "webhookUrl": "example_webhookUrl",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Context

Create an instance: `context := client.Context(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bridgeUrl` | `string` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Creation timestamp |
| `data` | `map[string]any` | Custom data associated with this context |
| `id` | `string` | Unique identifier for this context |
| `type` | `string` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Last update timestamp |

#### Example: Load

```go
context, err := client.Context(nil).Load(map[string]any{"id": "context_id", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(context) // the loaded record
```

#### Example: List

```go
contexts, err := client.Context(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contexts) // the array of records
```

#### Example: Create

```go
result, err := client.Context(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "data": map[string]any{},
    "id": "example_id",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreateSubscriptionsResponseDto

Create an instance: `createSubscriptionsResponseDto := client.CreateSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `map[string]any` |  |
| `name` | `string` | The name of the topic |
| `preferences` | `[]any` | The preferences of the topic. |
| `subscriberIds` | `[]any` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `[]any` | List of subscriptions to subscribe to the topic (max: 100). |

#### Example: Create

```go
result, err := client.CreateSubscriptionsResponseDto(nil).Create(map[string]any{
    "topic_key": "example_topic_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Diff

Create an instance: `diff := client.Diff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resources` | `[]any` | Diff resources by resource type |
| `sourceEnvironmentId` | `string` | Source environment ID |
| `summary` | `any` | Overall summary |
| `targetEnvironmentId` | `string` | Target environment ID |

#### Example: Create

```go
result, err := client.Diff(nil).Create(map[string]any{
    "environment_id": "example_environment_id",
    "resources": []any{},
    "sourceEnvironmentId": "example_sourceEnvironmentId",
    "summary": "example_summary",
    "targetEnvironmentId": "example_targetEnvironmentId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Domain

Create an instance: `domain := client.Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `data` | `map[string]any` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` |  |
| `environmentId` | `string` |  |
| `expectedDnsRecords` | `[]any` |  |
| `id` | `string` |  |
| `mxRecordConfigured` | `bool` |  |
| `name` | `string` | The domain name (e.g. |
| `organizationId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```go
domain, err := client.Domain(nil).Load(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domain) // the loaded record
```

#### Example: List

```go
domains, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(domains) // the array of records
```

#### Example: Create

```go
result, err := client.Domain(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "environmentId": "example_environmentId",
    "id": "example_id",
    "mxRecordConfigured": true,
    "name": "example_name",
    "organizationId": "example_organizationId",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DomainConnectApplyUrlResponseDto

Create an instance: `domainConnectApplyUrlResponseDto := client.DomainConnectApplyUrlResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redirectUri` | `string` | Dashboard URL to return to after the DNS provider consent flow completes. |

#### Example: Create

```go
result, err := client.DomainConnectApplyUrlResponseDto(nil).Create(map[string]any{
    "domain_id": "example_domain_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DomainConnectStatusResponseDto

Create an instance: `domainConnectStatusResponseDto := client.DomainConnectStatusResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
domainConnectStatusResponseDtos, err := client.DomainConnectStatusResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainConnectStatusResponseDtos) // the array of records
```


### DomainResponseDto

Create an instance: `domainResponseDto := client.DomainResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `data` | `map[string]any` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` |  |
| `environmentId` | `string` |  |
| `expectedDnsRecords` | `[]any` |  |
| `id` | `string` |  |
| `mxRecordConfigured` | `bool` |  |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```go
result, err := client.DomainResponseDto(nil).Create(map[string]any{
    "id": "example_id",
    "createdAt": "example_createdAt",
    "environmentId": "example_environmentId",
    "mxRecordConfigured": true,
    "name": "example_name",
    "organizationId": "example_organizationId",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DomainRouteResponseDto

Create an instance: `domainRouteResponseDto := client.DomainRouteResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` |  |
| `agentId` | `string` | Internal id of the destination agent. |
| `createdAt` | `string` |  |
| `data` | `map[string]any` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` |  |
| `environmentId` | `string` |  |
| `id` | `string` |  |
| `organizationId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```go
domainRouteResponseDto, err := client.DomainRouteResponseDto(nil).Load(map[string]any{"address": "address", "domain_id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainRouteResponseDto) // the loaded record
```

#### Example: Create

```go
result, err := client.DomainRouteResponseDto(nil).Create(map[string]any{
    "id": "example_id",
    "address": "example_address",
    "createdAt": "example_createdAt",
    "domainId": "example_domainId",
    "environmentId": "example_environmentId",
    "organizationId": "example_organizationId",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Environment

Create an instance: `environment := client.Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKeys` | `[]any` | List of API keys associated with the environment |
| `bridge` | `map[string]any` |  |
| `color` | `string` | Hex color code for the environment |
| `dns` | `map[string]any` |  |
| `id` | `string` | Unique identifier of the environment |
| `identifier` | `string` | Unique identifier for the environment |
| `name` | `string` | Name of the environment to be created |
| `organizationId` | `string` | Organization ID associated with the environment |
| `parentId` | `string` | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `string` | URL-friendly slug for the environment |
| `type` | `string` | Type of the environment |

#### Example: List

```go
environments, err := client.Environment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environments) // the array of records
```

#### Example: Create

```go
result, err := client.Environment(nil).Create(map[string]any{
    "color": "example_color",
    "id": "example_id",
    "identifier": "example_identifier",
    "name": "example_name",
    "organizationId": "example_organizationId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnvironmentTagsDto

Create an instance: `environmentTagsDto := client.EnvironmentTagsDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
environmentTagsDtos, err := client.EnvironmentTagsDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentTagsDtos) // the array of records
```


### EnvironmentVariable

Create an instance: `environmentVariable := client.EnvironmentVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `isSecret` | `bool` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `string` | Unique key for the variable. |
| `organizationId` | `string` |  |
| `type` | `string` | The type of the variable |
| `updatedAt` | `string` |  |
| `values` | `[]any` |  |

#### Example: Load

```go
environmentVariable, err := client.EnvironmentVariable(nil).Load(map[string]any{"id": "environment_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentVariable) // the loaded record
```

#### Example: List

```go
environmentVariables, err := client.EnvironmentVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentVariables) // the array of records
```

#### Example: Create

```go
result, err := client.EnvironmentVariable(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isSecret": true,
    "key": "example_key",
    "organizationId": "example_organizationId",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
    "values": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnvironmentVariableWorkflowInfoDto

Create an instance: `environmentVariableWorkflowInfoDto := client.EnvironmentVariableWorkflowInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name of the workflow |
| `workflowId` | `string` | The unique identifier of the workflow |

#### Example: List

```go
environmentVariableWorkflowInfoDtos, err := client.EnvironmentVariableWorkflowInfoDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentVariableWorkflowInfoDtos) // the array of records
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `map[string]any` |  |
| `name` | `string` | The trigger identifier of the workflow you wish to send. |
| `overrides` | `any` | This could be used to override provider specific configurations |
| `payload` | `map[string]any` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `any` | It is used to specify a tenant context during trigger event. |
| `to` | `any` | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | A unique identifier for deduplication. |

#### Example: Create

```go
result, err := client.Event(nil).Create(map[string]any{
    "name": "example_name",
    "to": "example_to",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GenerateChatOAuthUrlResponseDto

Create an instance: `generateChatOAuthUrlResponseDto := client.GenerateChatOAuthUrlResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoLinkUser` | `bool` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | Connection mode that determines how the channel connection is scoped. |
| `context` | `map[string]any` |  |
| `contextHash` | `string` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Integration identifier |
| `mode` | `string` | OAuth flow mode. |
| `scope` | `[]any` | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | The subscriber ID to associate with the channel connection. |
| `userScope` | `[]any` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

#### Example: Create

```go
result, err := client.GenerateChatOAuthUrlResponseDto(nil).Create(map[string]any{
    "integrationIdentifier": "example_integrationIdentifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GeneratePreviewResponseDto

Create an instance: `generatePreviewResponseDto := client.GeneratePreviewResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `map[string]any` | Optional control values |
| `previewPayload` | `any` | Optional payload for preview generation |

#### Example: Create

```go
result, err := client.GeneratePreviewResponseDto(nil).Create(map[string]any{
    "step_id": "example_step_id",
    "workflow_id": "example_workflow_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ImportMasterJsonResponseDto

Create an instance: `importMasterJsonResponseDto := client.ImportMasterJsonResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed` | `[]any` | List of resource IDs that failed to import |
| `locale` | `string` | The locale for which translations are being imported |
| `masterJson` | `map[string]any` | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Human-readable message describing the import result |
| `success` | `bool` | Overall success status of the import operation |
| `successful` | `[]any` | List of resource IDs that were successfully imported |

#### Example: Create

```go
result, err := client.ImportMasterJsonResponseDto(nil).Create(map[string]any{
    "locale": "example_locale",
    "masterJson": map[string]any{},
    "message": "example_message",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### InboxNotificationDto

Create an instance: `inboxNotificationDto := client.InboxNotificationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `string` | ISO timestamp when the notification was archived |
| `avatar` | `string` | Avatar URL for the notification |
| `body` | `string` | Body content of the notification |
| `channelType` | `string` | Channel the message was sent on |
| `createdAt` | `string` | ISO timestamp when the notification was created |
| `data` | `map[string]any` | Custom data payload of the notification |
| `deliveredAt` | `[]any` | Timestamps when the notification was delivered |
| `firstSeenAt` | `string` | ISO timestamp when the notification was first seen |
| `id` | `string` | Unique identifier of the notification |
| `isArchived` | `bool` | Whether the notification has been archived |
| `isRead` | `bool` | Whether the notification has been read |
| `isSeen` | `bool` | Whether the notification has been seen |
| `isSnoozed` | `bool` | Whether the notification is snoozed |
| `primaryAction` | `any` | Primary action button for the notification |
| `readAt` | `string` | ISO timestamp when the notification was read |
| `redirect` | `any` | Redirect configuration for the notification |
| `secondaryAction` | `any` | Secondary action button for the notification |
| `severity` | `string` | Workflow severity |
| `snoozeUntil` | `string` | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `string` | ISO timestamp when the notification will be unsnoozed |
| `subject` | `string` | Subject of the notification |
| `tags` | `[]any` | Tags associated with the notification |
| `to` | `any` | Subscriber this notification was sent to |
| `transactionId` | `string` | Transaction identifier of the notification |
| `workflow` | `any` | Workflow associated with the notification |


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | The channel type for the integration. |
| `check` | `bool` | Flag to check the integration status |
| `conditions` | `[]any` | Legacy StepFilter conditions. |
| `configurations` | `map[string]any` | Configurations for the integration |
| `credentials` | `any` | The credentials for the integration |
| `deleted` | `bool` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | The ID of the associated environment |
| `id` | `string` | The unique identifier of the integration record in the database. |
| `identifier` | `string` | The unique identifier for the integration |
| `kind` | `string` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | The name of the integration |
| `organizationId` | `string` | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | The provider ID for the integration |
| `rules` | `map[string]any` | JSONLogic used at send time to select this integration. |

#### Example: List

```go
integrations, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrations) // the array of records
```

#### Example: Create

```go
result, err := client.Integration(nil).Create(map[string]any{
    "deleted": true,
    "organizationId": "example_organizationId",
    "primary": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IntegrationResponseDto

Create an instance: `integrationResponseDto := client.IntegrationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Indicates whether the integration is currently active. |
| `channel` | `string` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `[]any` | Legacy StepFilter conditions. |
| `configurations` | `any` | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `any` | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `bool` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | The unique identifier for the environment associated with this integration. |
| `id` | `string` | The unique identifier of the integration record in the database. |
| `identifier` | `string` | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `string` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `string` | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `map[string]any` | JSONLogic used at send time to select this integration. |

#### Example: List

```go
integrationResponseDtos, err := client.IntegrationResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrationResponseDtos) // the array of records
```

#### Example: Create

```go
result, err := client.IntegrationResponseDto(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "deleted": true,
    "environmentId": "example_environmentId",
    "identifier": "example_identifier",
    "name": "example_name",
    "organizationId": "example_organizationId",
    "primary": true,
    "providerId": "example_providerId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Layout

Create an instance: `layout := client.Layout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `any` | Control values for the layout. |
| `controls` | `any` | Controls metadata for the layout |
| `createdAt` | `string` | Creation timestamp |
| `id` | `string` | Unique internal identifier of the layout |
| `isDefault` | `bool` | Whether the layout is the default layout |
| `isTranslationEnabled` | `bool` | Whether the layout translations are enabled |
| `layoutId` | `string` | Unique identifier for the layout |
| `name` | `string` | Name of the layout |
| `origin` | `string` | Workflow origin |
| `slug` | `string` | Slug of the layout |
| `source` | `string` | Source of layout creation |
| `type` | `string` | Resource type |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the layout |
| `variables` | `map[string]any` | The variables JSON Schema for the layout |

#### Example: Load

```go
layout, err := client.Layout(nil).Load(map[string]any{"id": "layout_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(layout) // the loaded record
```

#### Example: List

```go
layouts, err := client.Layout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(layouts) // the array of records
```

#### Example: Create

```go
result, err := client.Layout(nil).Create(map[string]any{
    "controls": "example_controls",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isDefault": true,
    "isTranslationEnabled": true,
    "layoutId": "example_layoutId",
    "name": "example_name",
    "origin": "example_origin",
    "slug": "example_slug",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LayoutResponseDto

Create an instance: `layoutResponseDto := client.LayoutResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.LayoutResponseDto(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Link

Create an instance: `link := client.Link(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `map[string]any` |  |
| `contextHash` | `string` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | External subscriber identifier to link to their chat identity |

#### Example: Create

```go
result, err := client.Link(nil).Create(map[string]any{
    "integrationIdentifier": "example_integrationIdentifier",
    "subscriberId": "example_subscriberId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ListAgentIntegrationsResponseDto

Create an instance: `listAgentIntegrationsResponseDto := client.ListAgentIntegrationsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `string` |  |
| `connectedAt` | `map[string]any` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` |  |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `string` | Agent–integration link document id. |
| `integration` | `map[string]any` |  |
| `organizationId` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```go
listAgentIntegrationsResponseDtos, err := client.ListAgentIntegrationsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listAgentIntegrationsResponseDtos) // the array of records
```


### ListDomainRoutesResponseDto

Create an instance: `listDomainRoutesResponseDto := client.ListDomainRoutesResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` |  |
| `agentId` | `string` | Internal id of the destination agent. |
| `createdAt` | `string` |  |
| `data` | `map[string]any` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` |  |
| `environmentId` | `string` |  |
| `id` | `string` |  |
| `organizationId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```go
listDomainRoutesResponseDtos, err := client.ListDomainRoutesResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDomainRoutesResponseDtos) // the array of records
```


### ListTopicSubscriptionsResponseDto

Create an instance: `listTopicSubscriptionsResponseDto := client.ListTopicSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `[]any` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | The date and time the subscription was created |
| `id` | `string` | The identifier of the subscription |
| `identifier` | `string` | The identifier of the subscription |
| `preferences` | `[]any` | The preferences for workflows in this subscription |
| `subscriber` | `any` | Subscriber information |
| `topic` | `any` | Topic information |

#### Example: List

```go
listTopicSubscriptionsResponseDtos, err := client.ListTopicSubscriptionsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listTopicSubscriptionsResponseDtos) // the array of records
```


### MasterJson

Create an instance: `masterJson := client.MasterJson(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `layouts` | `map[string]any` | All translations for given locale organized by layout identifier |
| `workflows` | `map[string]any` | All translations for given locale organized by workflow identifier |

#### Example: Load

```go
masterJson, err := client.MasterJson(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(masterJson) // the loaded record
```


### Message

Create an instance: `message := client.Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | Channel the message was sent on |
| `content` | `any` | Content of the message, can be an email block or a string |
| `contextKeys` | `[]any` | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Creation date of the message |
| `cta` | `any` | Call to action associated with the message |
| `deliveredAt` | `[]any` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `[]any` | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `string` | Direct webhook URL for the message, if applicable |
| `email` | `string` | Email address associated with the message, if applicable |
| `environmentId` | `string` | Environment ID where the message is sent |
| `errorId` | `string` | Error ID if the message has an error |
| `errorText` | `string` | Error text if the message has an error |
| `feedId` | `string` | Feed ID associated with the message, if applicable |
| `id` | `string` | Unique identifier for the message |
| `lastReadDate` | `string` | Last read date of the message, if available |
| `lastSeenDate` | `string` | Last seen date of the message, if available |
| `messageTemplateId` | `string` | Message template ID |
| `notificationId` | `string` | Notification ID associated with the message |
| `organizationId` | `string` | Organization ID associated with the message |
| `overrides` | `map[string]any` | Provider specific overrides used when triggering the notification |
| `payload` | `map[string]any` | The payload that was used to send the notification trigger |
| `phone` | `string` | Phone number associated with the message, if applicable |
| `providerId` | `string` | Provider ID associated with the message, if applicable |
| `read` | `bool` | Indicates if the message has been read |
| `seen` | `bool` | Indicates if the message has been seen |
| `snoozedUntil` | `string` | Date when the message will be unsnoozed |
| `status` | `string` | Status of the message |
| `subject` | `string` | Subject of the message, if applicable |
| `subscriber` | `any` | Subscriber details, if available |
| `subscriberId` | `string` | Subscriber ID associated with the message |
| `template` | `any` | Workflow template associated with the message |
| `templateId` | `string` | Template ID associated with the message |
| `templateIdentifier` | `string` | Identifier for the message template |
| `title` | `string` | Title of the message, if applicable |
| `transactionId` | `string` | Transaction ID associated with the message |

#### Example: List

```go
messages, err := client.Message(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(messages) // the array of records
```


### MessageResponseDto

Create an instance: `messageResponseDto := client.MessageResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markAs` | `string` |  |
| `messageId` | `any` |  |
| `payload` | `map[string]any` | Message action payload |
| `status` | `string` | Message action status |

#### Example: Create

```go
result, err := client.MessageResponseDto(nil).Create(map[string]any{
    "subscriber_id": "example_subscriber_id",
    "markAs": "example_markAs",
    "messageId": "example_messageId",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NotificationFeedItemDto

Create an instance: `notificationFeedItemDto := client.NotificationFeedItemDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `any` | Actor details related to the notification, if applicable. |
| `archived` | `bool` | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `string` | Channel the message was sent on |
| `content` | `string` | The main content of the notification. |
| `createdAt` | `string` | Timestamp indicating when the notification was created. |
| `cta` | `any` | Call-to-action information associated with the notification. |
| `data` | `map[string]any` | The data sent with the notification. |
| `deviceTokens` | `[]any` | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | Identifier for the feed associated with the notification. |
| `id` | `string` | Unique identifier for the notification. |
| `jobId` | `string` | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | Identifier for the message template used. |
| `notificationId` | `string` | Unique identifier for the notification instance. |
| `organizationId` | `string` | Identifier for the organization sending the notification. |
| `overrides` | `map[string]any` | Provider-specific overrides used when triggering the notification. |
| `payload` | `map[string]any` | The payload that was used to send the notification trigger. |
| `providerId` | `string` | Identifier for the provider that sends the notification. |
| `read` | `bool` | Indicates whether the notification has been read by the subscriber. |
| `seen` | `bool` | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Current status of the notification. |
| `subject` | `string` | The subject line for email notifications, if applicable. |
| `subscriber` | `any` | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Unique identifier for the subscriber receiving the notification. |
| `tags` | `[]any` | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | Timestamp indicating when the notification was last updated. |

#### Example: List

```go
notificationFeedItemDtos, err := client.NotificationFeedItemDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationFeedItemDtos) // the array of records
```


### PreferencesResponseDto

Create an instance: `preferencesResponseDto := client.PreferencesResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `map[string]any` |  |
| `preferences` | `[]any` | Array of workflow preferences to update (maximum 100 items) |


### Publish

Create an instance: `publish := client.Publish(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dryRun` | `bool` | Perform a dry run without making actual changes |
| `resources` | `[]any` | Array of specific resources to publish. |
| `results` | `[]any` | Sync results by resource type |
| `sourceEnvironmentId` | `string` | Source environment ID to sync from. |
| `summary` | `any` | Summary of the sync operation |

#### Example: Create

```go
result, err := client.Publish(nil).Create(map[string]any{
    "environment_id": "example_environment_id",
    "results": []any{},
    "summary": "example_summary",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RemoveSubscriberResponseDto

Create an instance: `removeSubscriberResponseDto := client.RemoveSubscriberResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Step

Create an instance: `step := client.Step(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `map[string]any` | Control values for the step (alias for controls.values) |
| `controls` | `any` | Controls metadata for the step |
| `id` | `string` | Database identifier of the step |
| `issues` | `any` | Issues associated with the step |
| `name` | `string` | Name of the step |
| `origin` | `string` | Workflow origin |
| `providerOverrides` | `map[string]any` | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Slug of the step |
| `stepId` | `string` | Unique identifier of the step |
| `stepResolverHash` | `string` | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Type of the step |
| `variables` | `map[string]any` | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Workflow database identifier |
| `workflowId` | `string` | Workflow identifier |

#### Example: Load

```go
step, err := client.Step(nil).Load(map[string]any{"id": "step_id", "workflow_id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(step) // the loaded record
```


### Subscriber

Create an instance: `subscriber := client.Subscriber(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | The URL of the subscriber's avatar image. |
| `channels` | `[]any` | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `map[string]any` | Additional custom data for the subscriber |
| `deleted` | `bool` | Indicates whether the subscriber has been deleted. |
| `email` | `string` | The email address of the subscriber. |
| `environmentId` | `string` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | The first name of the subscriber. |
| `id` | `string` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | The last name of the subscriber. |
| `lastOnlineAt` | `string` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | The phone number of the subscriber. |
| `subscriberId` | `string` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | Timezone of the subscriber |
| `topics` | `[]any` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float64` | The version of the subscriber document. |

#### Example: Load

```go
subscriber, err := client.Subscriber(nil).Load(map[string]any{"id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriber) // the loaded record
```

#### Example: List

```go
subscribers, err := client.Subscriber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscribers) // the array of records
```

#### Example: Create

```go
result, err := client.Subscriber(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "deleted": true,
    "environmentId": "example_environmentId",
    "organizationId": "example_organizationId",
    "subscriberId": "example_subscriberId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriberNotificationsCountResponseDto

Create an instance: `subscriberNotificationsCountResponseDto := client.SubscriberNotificationsCountResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `float64` | The count of notifications matching the filter |
| `filter` | `map[string]any` | The filter applied |

#### Example: List

```go
subscriberNotificationsCountResponseDtos, err := client.SubscriberNotificationsCountResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriberNotificationsCountResponseDtos) // the array of records
```


### SubscriberNotificationsResponseDto

Create an instance: `subscriberNotificationsResponseDto := client.SubscriberNotificationsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
subscriberNotificationsResponseDtos, err := client.SubscriberNotificationsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriberNotificationsResponseDtos) // the array of records
```


### SubscriberPreferencesDto

Create an instance: `subscriberPreferencesDto := client.SubscriberPreferencesDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
subscriberPreferencesDtos, err := client.SubscriberPreferencesDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriberPreferencesDtos) // the array of records
```


### SubscriberResponseDto

Create an instance: `subscriberResponseDto := client.SubscriberResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | The URL of the subscriber's avatar image. |
| `channels` | `[]any` | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `map[string]any` | Additional custom data for the subscriber |
| `deleted` | `bool` | Indicates whether the subscriber has been deleted. |
| `email` | `string` | The email address of the subscriber. |
| `environmentId` | `string` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | The first name of the subscriber. |
| `id` | `string` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | The last name of the subscriber. |
| `lastOnlineAt` | `string` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | The phone number of the subscriber. |
| `subscriberId` | `string` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | Timezone of the subscriber |
| `topics` | `[]any` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float64` | The version of the subscriber document. |


### Subscription

Create an instance: `subscription := client.Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `[]any` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | The creation date of the subscription |
| `id` | `string` | The unique identifier of the subscription |
| `identifier` | `string` | The identifier of the subscription |
| `name` | `string` | The name of the subscription |
| `preferences` | `[]any` | The preferences/rules for the subscription |
| `subscriber` | `any` | The subscriber information |
| `topic` | `any` | The topic information |
| `updatedAt` | `string` | The last update date of the subscription |

#### Example: Load

```go
subscription, err := client.Subscription(nil).Load(map[string]any{"id": "subscription_id", "topic_id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscription) // the loaded record
```


### Topic

Create an instance: `topic := client.Topic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date the topic was created |
| `data` | `map[string]any` | Additional custom data associated with the topic |
| `id` | `string` | The identifier of the topic |
| `key` | `string` | The unique key of the topic |
| `name` | `string` | The name of the topic |
| `updatedAt` | `string` | The date the topic was last updated |

#### Example: Load

```go
topic, err := client.Topic(nil).Load(map[string]any{"id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(topic) // the loaded record
```

#### Example: List

```go
topics, err := client.Topic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(topics) // the array of records
```

#### Example: Create

```go
result, err := client.Topic(nil).Create(map[string]any{
    "id": "example_id",
    "key": "example_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TopicSubscriberDto

Create an instance: `topicSubscriberDto := client.TopicSubscriberDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `environmentId` | `string` | Unique identifier for the environment |
| `externalSubscriberId` | `string` | External identifier for the subscriber |
| `organizationId` | `string` | Unique identifier for the organization |
| `subscriberId` | `string` | Unique identifier for the subscriber |
| `topicId` | `string` | Unique identifier for the topic |
| `topicKey` | `string` | Key associated with the topic |

#### Example: Load

```go
topicSubscriberDto, err := client.TopicSubscriberDto(nil).Load(map[string]any{"external_subscriber_id": "external_subscriber_id", "topic_id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(topicSubscriberDto) // the loaded record
```


### TopicSubscriptionsResponseDto

Create an instance: `topicSubscriptionsResponseDto := client.TopicSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Translation

Create an instance: `translation := client.Translation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `map[string]any` | Translation content as JSON object |
| `createdAt` | `string` | Creation timestamp |
| `id` | `string` |  |
| `locale` | `string` | Locale code |
| `resourceId` | `string` | Resource identifier |
| `resourceType` | `string` | Resource type |
| `updatedAt` | `string` | Last update timestamp |

#### Example: Load

```go
translation, err := client.Translation(nil).Load(map[string]any{"locale": "locale", "resource_id": "resource_id", "resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(translation) // the loaded record
```

#### Example: Create

```go
result, err := client.Translation(nil).Create(map[string]any{
    "content": map[string]any{},
    "createdAt": "example_createdAt",
    "locale": "example_locale",
    "resourceId": "example_resourceId",
    "resourceType": "example_resourceType",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TranslationGroupDto

Create an instance: `translationGroupDto := client.TranslationGroupDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | Creation timestamp |
| `id` | `string` |  |
| `locales` | `[]any` | Array of available locales for this resource |
| `outdatedLocales` | `[]any` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Resource identifier (slugified ID) |
| `resourceName` | `string` | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Resource type |
| `updatedAt` | `string` | Last update timestamp |

#### Example: Load

```go
translationGroupDto, err := client.TranslationGroupDto(nil).Load(map[string]any{"resource_id": "resource_id", "resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(translationGroupDto) // the loaded record
```


### TriggerEventResponseDto

Create an instance: `triggerEventResponseDto := client.TriggerEventResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledged` | `bool` | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | Link to the activity feed for this trigger event |
| `actor` | `any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `map[string]any` |  |
| `error` | `[]any` | In case of an error, this field will contain the error message(s) |
| `events` | `[]any` |  |
| `jobData` | `map[string]any` |  |
| `name` | `string` | The trigger identifier associated for the template you wish to send. |
| `overrides` | `any` | This could be used to override provider specific configurations |
| `payload` | `map[string]any` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Status of the trigger |
| `tenant` | `any` | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | The returned transaction ID of the trigger |

#### Example: Create

```go
result, err := client.TriggerEventResponseDto(nil).Create(map[string]any{
    "acknowledged": true,
    "events": []any{},
    "name": "example_name",
    "payload": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Unseen

Create an instance: `unseen := client.Unseen(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `float64` |  |

#### Example: Load

```go
unseen, err := client.Unseen(nil).Load(map[string]any{"subscriber_id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(unseen) // the loaded record
```


### Upload

Create an instance: `upload := client.Upload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of error messages for failed uploads |
| `failedUploads` | `float64` | Number of files that failed to upload |
| `successfulUploads` | `float64` | Number of files successfully uploaded |
| `totalFiles` | `float64` | Total number of files processed |

#### Example: Create

```go
result, err := client.Upload(nil).Create(map[string]any{
    "errors": []any{},
    "failedUploads": 1,
    "successfulUploads": 1,
    "totalFiles": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WebhookResultDto

Create an instance: `webhookResultDto := client.WebhookResultDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.WebhookResultDto(nil).Create(map[string]any{
    "environment_id": "example_environment_id",
    "integration_id": "example_integration_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the workflow is active |
| `agent` | `any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Creation timestamp |
| `description` | `string` | Description of the workflow |
| `id` | `string` | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | Enable or disable translations for this workflow |
| `issues` | `map[string]any` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | User who last published the workflow |
| `lastTriggeredAt` | `string` | Timestamp of the last workflow trigger |
| `name` | `string` | Name of the workflow |
| `origin` | `string` | Workflow origin |
| `payloadExample` | `map[string]any` | Generated payload example based on the payload schema |
| `payloadSchema` | `map[string]any` | The payload JSON Schema for the workflow |
| `preferences` | `any` | Preferences for the workflow |
| `severity` | `string` | Workflow severity |
| `slug` | `string` | Slug of the workflow |
| `source` | `string` | Source of workflow creation |
| `status` | `string` | Workflow status |
| `stepTypeOverviews` | `[]any` | Overview of step types in the workflow |
| `steps` | `[]any` | Steps of the workflow |
| `tags` | `[]any` | Tags associated with the workflow |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the workflow |
| `validatePayload` | `bool` | Enable or disable payload schema validation |
| `workflowId` | `string` | Workflow identifier |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
```

#### Example: List

```go
workflows, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflows) // the array of records
```

#### Example: Create

```go
result, err := client.Workflow(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "origin": "example_origin",
    "preferences": "example_preferences",
    "severity": "example_severity",
    "slug": "example_slug",
    "status": "example_status",
    "stepTypeOverviews": []any{},
    "steps": []any{},
    "updatedAt": "example_updatedAt",
    "workflowId": "example_workflowId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkflowInfoDto

Create an instance: `workflowInfoDto := client.WorkflowInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name of the workflow |
| `workflowId` | `string` | The unique identifier of the workflow |

#### Example: List

```go
workflowInfoDtos, err := client.WorkflowInfoDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowInfoDtos) // the array of records
```


### WorkflowResponseDto

Create an instance: `workflowResponseDto := client.WorkflowResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the workflow is active |
| `agent` | `any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Creation timestamp |
| `description` | `string` | Description of the workflow |
| `id` | `string` | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | Enable or disable translations for this workflow |
| `issues` | `map[string]any` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | User who last published the workflow |
| `lastTriggeredAt` | `string` | Timestamp of the last workflow trigger |
| `name` | `string` | Name of the workflow |
| `origin` | `string` | Workflow origin |
| `payloadExample` | `map[string]any` | Generated payload example based on the payload schema |
| `payloadSchema` | `map[string]any` | The payload JSON Schema for the workflow |
| `preferences` | `any` | Preferences for the workflow |
| `severity` | `string` | Workflow severity |
| `slug` | `string` | Slug of the workflow |
| `status` | `string` | Workflow status |
| `steps` | `[]any` | Steps of the workflow |
| `tags` | `[]any` | Tags associated with the workflow |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the workflow |
| `validatePayload` | `bool` | Enable or disable payload schema validation |
| `workflowId` | `string` | Workflow identifier |

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

9 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `channel_endpoint` | `endpoint` | 14 | 0 levels |
| `layout` | `controls` | 5 | 14 levels |
| `step` | `controls` | 5 | 14 levels |
| `workflow` | `steps` | 5 | 19 levels |
| `workflow_response_dto` | `steps` | 5 | 19 levels |
| `event` | `to` | 4 | 3 levels |
| `message` | `template` | 4 | 10 levels |
| `trigger_event_response_dto` | `events` | 4 | 6 levels |
| `create_subscriptions_response_dto` | `preferences` | 3 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/novu-sdk/go/
├── novu.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/novu-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
environmentvariable := client.EnvironmentVariable(nil)
environmentvariable.List(nil, nil)

// environmentvariable.Data() now returns the environmentvariable data from the last list
// environmentvariable.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
