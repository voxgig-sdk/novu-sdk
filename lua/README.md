# Novu Lua SDK



The Lua SDK for the Novu API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:ActivityNotificationResponseDto()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/novu-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("novu_sdk")

local client = sdk.new({
  apikey = os.getenv("NOVU_APIKEY"),
})
```

### 2. List activitynotificationresponsedto records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local activitynotificationresponsedtos, err = client:ActivityNotificationResponseDto():list()
if err then error(err) end

for _, item in ipairs(activitynotificationresponsedtos) do
  print(item["id"])
end
```

### 3. Load a domainrouteresponsedto

DomainRouteResponseDto is nested under address, so provide the `address`.

```lua
local domainrouteresponsedto, err = client:DomainRouteResponseDto():load({ address = "example_address", domain_id = "example_domain_id" })
if err then error(err) end
print(domainrouteresponsedto)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local environmentvariables, err = client:EnvironmentVariable():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:EnvironmentVariable():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### NovuSDK

```lua
local sdk = require("novu_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### NovuSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `ActivityNotificationResponseDto` | `(data) -> ActivityNotificationResponseDtoEntity` | Create an ActivityNotificationResponseDto entity instance. |
| `Agent` | `(data) -> AgentEntity` | Create an Agent entity instance. |
| `AgentIntegrationResponseDto` | `(data) -> AgentIntegrationResponseDtoEntity` | Create an AgentIntegrationResponseDto entity instance. |
| `AgentResponseDto` | `(data) -> AgentResponseDtoEntity` | Create an AgentResponseDto entity instance. |
| `Bulk` | `(data) -> BulkEntity` | Create a Bulk entity instance. |
| `ChannelConnection` | `(data) -> ChannelConnectionEntity` | Create a ChannelConnection entity instance. |
| `ChannelEndpoint` | `(data) -> ChannelEndpointEntity` | Create a ChannelEndpoint entity instance. |
| `Configure` | `(data) -> ConfigureEntity` | Create a Configure entity instance. |
| `Context` | `(data) -> ContextEntity` | Create a Context entity instance. |
| `CreateSubscriptionsResponseDto` | `(data) -> CreateSubscriptionsResponseDtoEntity` | Create a CreateSubscriptionsResponseDto entity instance. |
| `Diff` | `(data) -> DiffEntity` | Create a Diff entity instance. |
| `Domain` | `(data) -> DomainEntity` | Create a Domain entity instance. |
| `DomainConnectApplyUrlResponseDto` | `(data) -> DomainConnectApplyUrlResponseDtoEntity` | Create a DomainConnectApplyUrlResponseDto entity instance. |
| `DomainConnectStatusResponseDto` | `(data) -> DomainConnectStatusResponseDtoEntity` | Create a DomainConnectStatusResponseDto entity instance. |
| `DomainResponseDto` | `(data) -> DomainResponseDtoEntity` | Create a DomainResponseDto entity instance. |
| `DomainRouteResponseDto` | `(data) -> DomainRouteResponseDtoEntity` | Create a DomainRouteResponseDto entity instance. |
| `Environment` | `(data) -> EnvironmentEntity` | Create an Environment entity instance. |
| `EnvironmentTagsDto` | `(data) -> EnvironmentTagsDtoEntity` | Create an EnvironmentTagsDto entity instance. |
| `EnvironmentVariable` | `(data) -> EnvironmentVariableEntity` | Create an EnvironmentVariable entity instance. |
| `EnvironmentVariableWorkflowInfoDto` | `(data) -> EnvironmentVariableWorkflowInfoDtoEntity` | Create an EnvironmentVariableWorkflowInfoDto entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `GenerateChatOAuthUrlResponseDto` | `(data) -> GenerateChatOAuthUrlResponseDtoEntity` | Create a GenerateChatOAuthUrlResponseDto entity instance. |
| `GeneratePreviewResponseDto` | `(data) -> GeneratePreviewResponseDtoEntity` | Create a GeneratePreviewResponseDto entity instance. |
| `ImportMasterJsonResponseDto` | `(data) -> ImportMasterJsonResponseDtoEntity` | Create an ImportMasterJsonResponseDto entity instance. |
| `InboxNotificationDto` | `(data) -> InboxNotificationDtoEntity` | Create an InboxNotificationDto entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationResponseDto` | `(data) -> IntegrationResponseDtoEntity` | Create an IntegrationResponseDto entity instance. |
| `Layout` | `(data) -> LayoutEntity` | Create a Layout entity instance. |
| `LayoutResponseDto` | `(data) -> LayoutResponseDtoEntity` | Create a LayoutResponseDto entity instance. |
| `Link` | `(data) -> LinkEntity` | Create a Link entity instance. |
| `ListAgentIntegrationsResponseDto` | `(data) -> ListAgentIntegrationsResponseDtoEntity` | Create a ListAgentIntegrationsResponseDto entity instance. |
| `ListAgentsResponseDto` | `(data) -> ListAgentsResponseDtoEntity` | Create a ListAgentsResponseDto entity instance. |
| `ListChannelConnectionsResponseDto` | `(data) -> ListChannelConnectionsResponseDtoEntity` | Create a ListChannelConnectionsResponseDto entity instance. |
| `ListChannelEndpointsResponseDto` | `(data) -> ListChannelEndpointsResponseDtoEntity` | Create a ListChannelEndpointsResponseDto entity instance. |
| `ListContextsResponseDto` | `(data) -> ListContextsResponseDtoEntity` | Create a ListContextsResponseDto entity instance. |
| `ListDomainRoutesResponseDto` | `(data) -> ListDomainRoutesResponseDtoEntity` | Create a ListDomainRoutesResponseDto entity instance. |
| `ListDomainsResponseDto` | `(data) -> ListDomainsResponseDtoEntity` | Create a ListDomainsResponseDto entity instance. |
| `ListSubscribersResponseDto` | `(data) -> ListSubscribersResponseDtoEntity` | Create a ListSubscribersResponseDto entity instance. |
| `ListTopicSubscriptionsResponseDto` | `(data) -> ListTopicSubscriptionsResponseDtoEntity` | Create a ListTopicSubscriptionsResponseDto entity instance. |
| `ListTopicsResponseDto` | `(data) -> ListTopicsResponseDtoEntity` | Create a ListTopicsResponseDto entity instance. |
| `MasterJson` | `(data) -> MasterJsonEntity` | Create a MasterJson entity instance. |
| `Message` | `(data) -> MessageEntity` | Create a Message entity instance. |
| `MessageResponseDto` | `(data) -> MessageResponseDtoEntity` | Create a MessageResponseDto entity instance. |
| `NotificationFeedItemDto` | `(data) -> NotificationFeedItemDtoEntity` | Create a NotificationFeedItemDto entity instance. |
| `PreferencesResponseDto` | `(data) -> PreferencesResponseDtoEntity` | Create a PreferencesResponseDto entity instance. |
| `Publish` | `(data) -> PublishEntity` | Create a Publish entity instance. |
| `RemoveSubscriberResponseDto` | `(data) -> RemoveSubscriberResponseDtoEntity` | Create a RemoveSubscriberResponseDto entity instance. |
| `Step` | `(data) -> StepEntity` | Create a Step entity instance. |
| `Subscriber` | `(data) -> SubscriberEntity` | Create a Subscriber entity instance. |
| `SubscriberNotificationsCountResponseDto` | `(data) -> SubscriberNotificationsCountResponseDtoEntity` | Create a SubscriberNotificationsCountResponseDto entity instance. |
| `SubscriberNotificationsResponseDto` | `(data) -> SubscriberNotificationsResponseDtoEntity` | Create a SubscriberNotificationsResponseDto entity instance. |
| `SubscriberPreferencesDto` | `(data) -> SubscriberPreferencesDtoEntity` | Create a SubscriberPreferencesDto entity instance. |
| `SubscriberResponseDto` | `(data) -> SubscriberResponseDtoEntity` | Create a SubscriberResponseDto entity instance. |
| `Subscription` | `(data) -> SubscriptionEntity` | Create a Subscription entity instance. |
| `Topic` | `(data) -> TopicEntity` | Create a Topic entity instance. |
| `TopicSubscriberDto` | `(data) -> TopicSubscriberDtoEntity` | Create a TopicSubscriberDto entity instance. |
| `TopicSubscriptionsResponseDto` | `(data) -> TopicSubscriptionsResponseDtoEntity` | Create a TopicSubscriptionsResponseDto entity instance. |
| `Translation` | `(data) -> TranslationEntity` | Create a Translation entity instance. |
| `TranslationGroupDto` | `(data) -> TranslationGroupDtoEntity` | Create a TranslationGroupDto entity instance. |
| `Trigger` | `(data) -> TriggerEntity` | Create a Trigger entity instance. |
| `TriggerEventResponseDto` | `(data) -> TriggerEventResponseDtoEntity` | Create a TriggerEventResponseDto entity instance. |
| `Unseen` | `(data) -> UnseenEntity` | Create an Unseen entity instance. |
| `Upload` | `(data) -> UploadEntity` | Create an Upload entity instance. |
| `WebhookResultDto` | `(data) -> WebhookResultDtoEntity` | Create a WebhookResultDto entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowInfoDto` | `(data) -> WorkflowInfoDtoEntity` | Create a WorkflowInfoDto entity instance. |
| `WorkflowResponseDto` | `(data) -> WorkflowResponseDtoEntity` | Create a WorkflowResponseDto entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local activity_notification_response_dto, err = client:ActivityNotificationResponseDto():load()
    if err then error(err) end
    -- activity_notification_response_dto is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### ActivityNotificationResponseDto

| Field | Description |
| --- | --- |
| `channels` |  |
| `contextKeys` | Context (single or multi) in which the notification was sent |
| `controls` | Controls associated with the notification |
| `createdAt` | Creation time of the notification |
| `critical` | Criticality of the notification |
| `digestedNotificationId` | Digested Notification ID |
| `environmentId` | Environment ID of the notification |
| `id` | Unique identifier of the notification |
| `jobs` | Jobs of the notification |
| `organizationId` | Organization ID of the notification |
| `payload` | Payload of the notification |
| `severity` | Workflow severity |
| `subscriber` | Subscriber of the notification |
| `subscriberId` | Subscriber ID of the notification |
| `tags` | Tags associated with the notification |
| `template` | Template of the notification |
| `templateId` | Template ID of the notification |
| `to` | To field for subscriber definition |
| `topics` | Topics of the notification |
| `transactionId` | Transaction ID of the notification |
| `updatedAt` | Last updated time of the notification |

Operations: List, Load.

API path: `/v1/notifications`

#### Agent

| Field | Description |
| --- | --- |
| `active` |  |
| `behavior` |  |
| `bridgeUrl` | Production bridge URL |
| `createdAt` |  |
| `createdBy` | Mongo user id of the user who created the agent |
| `description` |  |
| `devBridgeActive` | Whether the dev bridge override is active |
| `devBridgeUrl` | Development bridge URL (set by npx novu dev) |
| `environmentId` |  |
| `exceedsPlanLimit` | Cloud only. |
| `id` |  |
| `identifier` | Required when not adopting an existing managed agent. |
| `integrations` |  |
| `managedRuntime` | Present when runtime is "managed". |
| `name` | Required when not adopting an existing managed agent (i.e. |
| `organizationId` |  |
| `runtime` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` |  |
| `visibility` | Discovery scope of the agent. |

Operations: Create, Load, Remove, Update.

API path: `/v1/agents/{agentId}/reply`

#### AgentIntegrationResponseDto

| Field | Description |
| --- | --- |
| `agentId` |  |
| `connectedAt` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` |  |
| `environmentId` |  |
| `exceedsPlanLimit` | Cloud only. |
| `id` | Agent–integration link document id. |
| `integration` |  |
| `integrationIdentifier` | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` |  |
| `providerId` | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` |  |

Operations: Create, Update.

API path: `/v1/agents/{identifier}/integrations`

#### AgentResponseDto

| Field | Description |
| --- | --- |
| `active` |  |
| `behavior` |  |
| `bridgeUrl` | Production bridge URL |
| `createdAt` |  |
| `createdBy` | Mongo user id of the user who created the agent |
| `description` |  |
| `devBridgeActive` | Whether the dev bridge override is active |
| `devBridgeUrl` | Development bridge URL (set by npx novu dev) |
| `environmentId` |  |
| `exceedsPlanLimit` | Cloud only. |
| `id` |  |
| `identifier` |  |
| `integrations` |  |
| `managedRuntime` | Present when runtime is "managed". |
| `name` |  |
| `organizationId` |  |
| `runtime` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` |  |
| `visibility` | Discovery scope of the agent. |

Operations: Update.

API path: `/v1/agents/{identifier}/bridge`

#### Bulk

| Field | Description |
| --- | --- |
| `subscribers` | An array of subscribers to be created in bulk. |

Operations: Create.

API path: `/v1/subscribers/bulk`

#### ChannelConnection

| Field | Description |
| --- | --- |
| `auth` |  |
| `channel` | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | Connection mode that determines how the channel connection is scoped. |
| `context` |  |
| `contextKeys` | The context of the channel connection |
| `createdAt` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` |  |
| `identifier` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` |  |

Operations: Create, Load, Remove, Update.

API path: `/v1/channel-connections`

#### ChannelEndpoint

| Field | Description |
| --- | --- |
| `channel` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | The context of the channel connection |
| `createdAt` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | Endpoint data specific to the channel type |
| `id` |  |
| `identifier` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | The subscriber ID to which the channel endpoint is linked |
| `type` | Type of channel endpoint |
| `updatedAt` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

Operations: Create, Load, Remove, Update.

API path: `/v1/channel-endpoints`

#### Configure

| Field | Description |
| --- | --- |
| `botUsername` | Resolved bot username from getMe |
| `configuredAt` | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | URL Novu registered with Telegram for incoming updates |

Operations: Create.

API path: `/v1/integrations/{integrationIdentifier}/webhook/configure`

#### Context

| Field | Description |
| --- | --- |
| `bridgeUrl` | Optional bridge URL override for agent connect. |
| `data` | Optional custom data to associate with this context. |
| `id` | Unique identifier for this context. |
| `type` | Context type (e.g., tenant, app, workspace). |

Operations: Create, Load, Remove, Update.

API path: `/v2/contexts`

#### CreateSubscriptionsResponseDto

| Field | Description |
| --- | --- |
| `context` |  |
| `name` | The name of the topic |
| `preferences` | The preferences of the topic. |
| `subscriberIds` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | List of subscriptions to subscribe to the topic (max: 100). |

Operations: Create.

API path: `/v2/topics/{topicKey}/subscriptions`

#### Diff

| Field | Description |
| --- | --- |
| `resources` | Diff resources by resource type |
| `sourceEnvironmentId` | Source environment ID |
| `summary` | Overall summary |
| `targetEnvironmentId` | Target environment ID |

Operations: Create.

API path: `/v2/environments/{targetEnvironmentId}/diff`

#### Domain

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `data` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` |  |
| `environmentId` |  |
| `expectedDnsRecords` |  |
| `id` |  |
| `mxRecordConfigured` |  |
| `name` | The domain name (e.g. |
| `organizationId` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create, Load, Remove, Update.

API path: `/v1/domains/{domain}/diagnose`

#### DomainConnectApplyUrlResponseDto

| Field | Description |
| --- | --- |
| `redirectUri` | Dashboard URL to return to after the DNS provider consent flow completes. |

Operations: Create.

API path: `/v1/domains/{domain}/auto-configure/start`

#### DomainConnectStatusResponseDto

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/v1/domains/{domain}/auto-configure`

#### DomainResponseDto

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `data` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` |  |
| `environmentId` |  |
| `expectedDnsRecords` |  |
| `id` |  |
| `mxRecordConfigured` |  |
| `name` |  |
| `organizationId` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/v1/domains/{domain}/verify`

#### DomainRouteResponseDto

| Field | Description |
| --- | --- |
| `agentId` | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` |  |
| `type` |  |

Operations: Create, Load, Update.

API path: `/v1/domains/{domain}/routes/{address}/test`

#### Environment

| Field | Description |
| --- | --- |
| `apiKeys` | List of API keys associated with the environment |
| `bridge` |  |
| `color` | Hex color code for the environment |
| `dns` |  |
| `id` | Unique identifier of the environment |
| `identifier` | Unique identifier for the environment |
| `name` | Name of the environment to be created |
| `organizationId` | Organization ID associated with the environment |
| `parentId` | MongoDB ObjectId of the parent environment (optional) |
| `slug` | URL-friendly slug for the environment |
| `type` | Type of the environment |

Operations: Create, List, Remove, Update.

API path: `/v1/environments`

#### EnvironmentTagsDto

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/v2/environments/{environmentId}/tags`

#### EnvironmentVariable

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `id` |  |
| `isSecret` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | Unique key for the variable. |
| `organizationId` |  |
| `type` | The type of the variable |
| `updatedAt` |  |
| `values` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/environment-variables`

#### EnvironmentVariableWorkflowInfoDto

| Field | Description |
| --- | --- |
| `name` | The name of the workflow |
| `workflowId` | The unique identifier of the workflow |

Operations: List.

API path: `/v1/environment-variables/{variableKey}/usage`

#### Event

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/v1/events/trigger/{transactionId}`

#### GenerateChatOAuthUrlResponseDto

| Field | Description |
| --- | --- |
| `autoLinkUser` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | Identifier of the channel connection that will be created. |
| `connectionMode` | Connection mode that determines how the channel connection is scoped. |
| `context` |  |
| `contextHash` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | Integration identifier |
| `mode` | OAuth flow mode. |
| `scope` | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | The subscriber ID to associate with the channel connection. |
| `userScope` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

Operations: Create.

API path: `/v1/integrations/channel-connections/oauth`

#### GeneratePreviewResponseDto

| Field | Description |
| --- | --- |
| `controlValues` | Optional control values |
| `previewPayload` | Optional payload for preview generation |

Operations: Create.

API path: `/v2/workflows/{workflowId}/step/{stepId}/preview`

#### ImportMasterJsonResponseDto

| Field | Description |
| --- | --- |
| `failed` | List of resource IDs that failed to import |
| `locale` | The locale for which translations are being imported |
| `masterJson` | Master JSON object containing all translations organized by workflow identifier |
| `message` | Human-readable message describing the import result |
| `success` | Overall success status of the import operation |
| `successful` | List of resource IDs that were successfully imported |

Operations: Create.

API path: `/v2/translations/master-json`

#### InboxNotificationDto

| Field | Description |
| --- | --- |
| `archivedAt` | ISO timestamp when the notification was archived |
| `avatar` | Avatar URL for the notification |
| `body` | Body content of the notification |
| `channelType` | Channel the message was sent on |
| `createdAt` | ISO timestamp when the notification was created |
| `data` | Custom data payload of the notification |
| `deliveredAt` | Timestamps when the notification was delivered |
| `firstSeenAt` | ISO timestamp when the notification was first seen |
| `id` | Unique identifier of the notification |
| `isArchived` | Whether the notification has been archived |
| `isRead` | Whether the notification has been read |
| `isSeen` | Whether the notification has been seen |
| `isSnoozed` | Whether the notification is snoozed |
| `primaryAction` | Primary action button for the notification |
| `readAt` | ISO timestamp when the notification was read |
| `redirect` | Redirect configuration for the notification |
| `secondaryAction` | Secondary action button for the notification |
| `severity` | Workflow severity |
| `snoozeUntil` | The date and time until which the notification should be snoozed |
| `snoozedUntil` | ISO timestamp when the notification will be unsnoozed |
| `subject` | Subject of the notification |
| `tags` | Tags associated with the notification |
| `to` | Subscriber this notification was sent to |
| `transactionId` | Transaction identifier of the notification |
| `workflow` | Workflow associated with the notification |

Operations: Update.

API path: `/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete`

#### Integration

| Field | Description |
| --- | --- |
| `active` | If the integration is active, the validation on the credentials field will run |
| `channel` | The channel type for the integration. |
| `check` | Flag to check the integration status |
| `conditions` | Legacy StepFilter conditions. |
| `configurations` | Configurations for the integration |
| `credentials` | The credentials for the integration |
| `deleted` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | The ID of the associated environment |
| `id` | The unique identifier of the integration record in the database. |
| `identifier` | The unique identifier for the integration |
| `kind` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | The name of the integration |
| `organizationId` | The unique identifier for the organization that owns this integration. |
| `primary` | Indicates whether this integration is marked as primary. |
| `providerId` | The provider ID for the integration |
| `rules` | JSONLogic used at send time to select this integration. |

Operations: Create, List, Remove, Update.

API path: `/v1/integrations/{integrationId}/auto-configure`

#### IntegrationResponseDto

| Field | Description |
| --- | --- |
| `active` | Indicates whether the integration is currently active. |
| `channel` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | Legacy StepFilter conditions. |
| `configurations` | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | The unique identifier for the environment associated with this integration. |
| `id` | The unique identifier of the integration record in the database. |
| `identifier` | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | The unique identifier for the organization that owns this integration. |
| `primary` | Indicates whether this integration is marked as primary. |
| `providerId` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | JSONLogic used at send time to select this integration. |

Operations: Create, List.

API path: `/v1/integrations/{integrationId}/set-primary`

#### Layout

| Field | Description |
| --- | --- |
| `controlValues` | Control values for the layout. |
| `controls` | Controls metadata for the layout |
| `createdAt` | Creation timestamp |
| `id` | Unique internal identifier of the layout |
| `isDefault` | Whether the layout is the default layout |
| `isTranslationEnabled` | Whether the layout translations are enabled |
| `layoutId` | Unique identifier for the layout |
| `name` | Name of the layout |
| `origin` | Workflow origin |
| `slug` | Slug of the layout |
| `source` | Source of layout creation |
| `type` | Resource type |
| `updatedAt` | Last updated timestamp |
| `updatedBy` | User who last updated the layout |
| `variables` | The variables JSON Schema for the layout |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/layouts/{layoutId}/preview`

#### LayoutResponseDto

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create.

API path: `/v2/layouts/{layoutId}/duplicate`

#### Link

| Field | Description |
| --- | --- |
| `context` |  |
| `contextHash` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | Integration identifier for the chat provider integration |
| `subscriberId` | External subscriber identifier to link to their chat identity |

Operations: Create.

API path: `/v1/integrations/channel-endpoints/link`

#### ListAgentIntegrationsResponseDto

| Field | Description |
| --- | --- |
| `agentId` |  |
| `connectedAt` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` |  |
| `environmentId` |  |
| `exceedsPlanLimit` | Cloud only. |
| `id` | Agent–integration link document id. |
| `integration` |  |
| `organizationId` |  |
| `updatedAt` |  |

Operations: List.

API path: `/v1/agents/{identifier}/integrations`

#### ListAgentsResponseDto

| Field | Description |
| --- | --- |
| `active` |  |
| `behavior` |  |
| `bridgeUrl` | Production bridge URL |
| `createdAt` |  |
| `createdBy` | Mongo user id of the user who created the agent |
| `description` |  |
| `devBridgeActive` | Whether the dev bridge override is active |
| `devBridgeUrl` | Development bridge URL (set by npx novu dev) |
| `environmentId` |  |
| `exceedsPlanLimit` | Cloud only. |
| `id` |  |
| `identifier` |  |
| `integrations` |  |
| `managedRuntime` | Present when runtime is "managed". |
| `name` |  |
| `organizationId` |  |
| `runtime` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` |  |
| `visibility` | Discovery scope of the agent. |

Operations: List.

API path: `/v1/agents`

#### ListChannelConnectionsResponseDto

| Field | Description |
| --- | --- |
| `auth` |  |
| `channel` | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | The context of the channel connection |
| `createdAt` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` |  |

Operations: List.

API path: `/v1/channel-connections`

#### ListChannelEndpointsResponseDto

| Field | Description |
| --- | --- |
| `channel` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | The context of the channel connection |
| `createdAt` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | Endpoint data specific to the channel type |
| `identifier` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | The subscriber ID to which the channel endpoint is linked |
| `type` | Type of channel endpoint |
| `updatedAt` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

Operations: List.

API path: `/v1/channel-endpoints`

#### ListContextsResponseDto

| Field | Description |
| --- | --- |
| `bridgeUrl` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | Creation timestamp |
| `data` | Custom data associated with this context |
| `id` | Unique identifier for this context |
| `type` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | Last update timestamp |

Operations: List.

API path: `/v2/contexts`

#### ListDomainRoutesResponseDto

| Field | Description |
| --- | --- |
| `address` |  |
| `agentId` | Internal id of the destination agent. |
| `createdAt` |  |
| `data` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` |  |
| `environmentId` |  |
| `id` |  |
| `organizationId` |  |
| `type` |  |
| `updatedAt` |  |

Operations: List.

API path: `/v1/domains/{domain}/routes`

#### ListDomainsResponseDto

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `data` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` |  |
| `environmentId` |  |
| `expectedDnsRecords` |  |
| `id` |  |
| `mxRecordConfigured` |  |
| `name` |  |
| `organizationId` |  |
| `status` |  |
| `updatedAt` |  |

Operations: List.

API path: `/v1/domains`

#### ListSubscribersResponseDto

| Field | Description |
| --- | --- |
| `avatar` | The URL of the subscriber's avatar image. |
| `channels` | An array of channel settings associated with the subscriber. |
| `createdAt` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | Additional custom data for the subscriber |
| `deleted` | Indicates whether the subscriber has been deleted. |
| `email` | The email address of the subscriber. |
| `environmentId` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | The first name of the subscriber. |
| `id` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | Indicates whether the subscriber is currently online. |
| `lastName` | The last name of the subscriber. |
| `lastOnlineAt` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | The phone number of the subscriber. |
| `subscriberId` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | Timezone of the subscriber |
| `topics` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | The version of the subscriber document. |

Operations: List.

API path: `/v2/subscribers`

#### ListTopicSubscriptionsResponseDto

| Field | Description |
| --- | --- |
| `contextKeys` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | The date and time the subscription was created |
| `id` | The identifier of the subscription |
| `identifier` | The identifier of the subscription |
| `preferences` | The preferences for workflows in this subscription |
| `subscriber` | Subscriber information |
| `topic` | Topic information |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/subscriptions`

#### ListTopicsResponseDto

| Field | Description |
| --- | --- |
| `createdAt` | The date the topic was created |
| `data` | Additional custom data associated with the topic |
| `id` | The identifier of the topic |
| `key` | The unique key of the topic |
| `name` | The name of the topic |
| `updatedAt` | The date the topic was last updated |

Operations: List.

API path: `/v2/topics`

#### MasterJson

| Field | Description |
| --- | --- |
| `layouts` | All translations for given locale organized by layout identifier |
| `workflows` | All translations for given locale organized by workflow identifier |

Operations: Load.

API path: `/v2/translations/master-json`

#### Message

| Field | Description |
| --- | --- |
| `channel` | Channel the message was sent on |
| `content` | Content of the message, can be an email block or a string |
| `contextKeys` | Context (single or multi) in which the message was sent |
| `createdAt` | Creation date of the message |
| `cta` | Call to action associated with the message |
| `deliveredAt` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | Direct webhook URL for the message, if applicable |
| `email` | Email address associated with the message, if applicable |
| `environmentId` | Environment ID where the message is sent |
| `errorId` | Error ID if the message has an error |
| `errorText` | Error text if the message has an error |
| `feedId` | Feed ID associated with the message, if applicable |
| `id` | Unique identifier for the message |
| `lastReadDate` | Last read date of the message, if available |
| `lastSeenDate` | Last seen date of the message, if available |
| `messageTemplateId` | Message template ID |
| `notificationId` | Notification ID associated with the message |
| `organizationId` | Organization ID associated with the message |
| `overrides` | Provider specific overrides used when triggering the notification |
| `payload` | The payload that was used to send the notification trigger |
| `phone` | Phone number associated with the message, if applicable |
| `providerId` | Provider ID associated with the message, if applicable |
| `read` | Indicates if the message has been read |
| `seen` | Indicates if the message has been seen |
| `snoozedUntil` | Date when the message will be unsnoozed |
| `status` | Status of the message |
| `subject` | Subject of the message, if applicable |
| `subscriber` | Subscriber details, if available |
| `subscriberId` | Subscriber ID associated with the message |
| `template` | Workflow template associated with the message |
| `templateId` | Template ID associated with the message |
| `templateIdentifier` | Identifier for the message template |
| `title` | Title of the message, if applicable |
| `transactionId` | Transaction ID associated with the message |

Operations: List, Remove.

API path: `/v1/messages`

#### MessageResponseDto

| Field | Description |
| --- | --- |
| `markAs` |  |
| `messageId` |  |
| `payload` | Message action payload |
| `status` | Message action status |

Operations: Create.

API path: `/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}`

#### NotificationFeedItemDto

| Field | Description |
| --- | --- |
| `actor` | Actor details related to the notification, if applicable. |
| `archived` | Indicates whether the notification has been archived by the subscriber. |
| `channel` | Channel the message was sent on |
| `content` | The main content of the notification. |
| `createdAt` | Timestamp indicating when the notification was created. |
| `cta` | Call-to-action information associated with the notification. |
| `data` | The data sent with the notification. |
| `deviceTokens` | Device tokens for push notifications, if applicable. |
| `environmentId` | Identifier for the environment where the notification is sent. |
| `feedId` | Identifier for the feed associated with the notification. |
| `id` | Unique identifier for the notification. |
| `jobId` | Identifier for the job that triggered the notification. |
| `messageTemplateId` | Identifier for the message template used. |
| `notificationId` | Unique identifier for the notification instance. |
| `organizationId` | Identifier for the organization sending the notification. |
| `overrides` | Provider-specific overrides used when triggering the notification. |
| `payload` | The payload that was used to send the notification trigger. |
| `providerId` | Identifier for the provider that sends the notification. |
| `read` | Indicates whether the notification has been read by the subscriber. |
| `seen` | Indicates whether the notification has been seen by the subscriber. |
| `status` | Current status of the notification. |
| `subject` | The subject line for email notifications, if applicable. |
| `subscriber` | Subscriber details associated with this notification. |
| `subscriberId` | Unique identifier for the subscriber receiving the notification. |
| `tags` | Tags associated with the workflow that triggered the notification. |
| `templateId` | Identifier for the template used to generate the notification. |
| `templateIdentifier` | Identifier for the template used, if applicable. |
| `transactionId` | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | Timestamp indicating when the notification was last updated. |

Operations: List.

API path: `/v1/subscribers/{subscriberId}/notifications/feed`

#### PreferencesResponseDto

| Field | Description |
| --- | --- |
| `context` |  |
| `preferences` | Array of workflow preferences to update (maximum 100 items) |

Operations: Update.

API path: `/v2/subscribers/{subscriberId}/preferences/bulk`

#### Publish

| Field | Description |
| --- | --- |
| `dryRun` | Perform a dry run without making actual changes |
| `resources` | Array of specific resources to publish. |
| `results` | Sync results by resource type |
| `sourceEnvironmentId` | Source environment ID to sync from. |
| `summary` | Summary of the sync operation |

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
| `controlValues` | Control values for the step (alias for controls.values) |
| `controls` | Controls metadata for the step |
| `id` | Database identifier of the step |
| `issues` | Issues associated with the step |
| `name` | Name of the step |
| `origin` | Workflow origin |
| `providerOverrides` | Per-provider content overrides keyed by providerId. |
| `slug` | Slug of the step |
| `stepId` | Unique identifier of the step |
| `stepResolverHash` | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | Type of the step |
| `variables` | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | Workflow database identifier |
| `workflowId` | Workflow identifier |

Operations: Load.

API path: `/v2/workflows/{workflowId}/steps/{stepId}`

#### Subscriber

| Field | Description |
| --- | --- |
| `avatar` | The URL of the subscriber's avatar image. |
| `channels` | An array of channel settings associated with the subscriber. |
| `createdAt` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | Additional custom data for the subscriber |
| `deleted` | Indicates whether the subscriber has been deleted. |
| `email` | The email address of the subscriber. |
| `environmentId` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | The first name of the subscriber. |
| `id` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | Indicates whether the subscriber is currently online. |
| `lastName` | The last name of the subscriber. |
| `lastOnlineAt` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | The phone number of the subscriber. |
| `subscriberId` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | Timezone of the subscriber |
| `topics` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | The version of the subscriber document. |

Operations: Create, Load, Remove, Update.

API path: `/v2/subscribers`

#### SubscriberNotificationsCountResponseDto

| Field | Description |
| --- | --- |
| `count` | The count of notifications matching the filter |
| `filter` | The filter applied |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/notifications/count`

#### SubscriberNotificationsResponseDto

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/v2/subscribers/{subscriberId}/notifications`

#### SubscriberPreferencesDto

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List, Update.

API path: `/v2/subscribers/{subscriberId}/preferences`

#### SubscriberResponseDto

| Field | Description |
| --- | --- |
| `avatar` | The URL of the subscriber's avatar image. |
| `channels` | An array of channel settings associated with the subscriber. |
| `createdAt` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | Additional custom data for the subscriber |
| `deleted` | Indicates whether the subscriber has been deleted. |
| `email` | The email address of the subscriber. |
| `environmentId` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | The first name of the subscriber. |
| `id` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | Indicates whether the subscriber is currently online. |
| `lastName` | The last name of the subscriber. |
| `lastOnlineAt` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | The phone number of the subscriber. |
| `subscriberId` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | Timezone of the subscriber |
| `topics` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | The version of the subscriber document. |

Operations: Update.

API path: `/v1/subscribers/{subscriberId}/credentials`

#### Subscription

| Field | Description |
| --- | --- |
| `contextKeys` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | The creation date of the subscription |
| `id` | The unique identifier of the subscription |
| `identifier` | The identifier of the subscription |
| `name` | The name of the subscription |
| `preferences` | The preferences/rules for the subscription |
| `subscriber` | The subscriber information |
| `topic` | The topic information |
| `updatedAt` | The last update date of the subscription |

Operations: Load, Update.

API path: `/v2/topics/{topicKey}/subscriptions/{identifier}`

#### Topic

| Field | Description |
| --- | --- |
| `data` | Additional custom data associated with the topic. |
| `id` |  |
| `key` | The unique key identifier for the topic. |
| `name` | The display name for the topic |

Operations: Create, Load, Remove, Update.

API path: `/v2/topics`

#### TopicSubscriberDto

| Field | Description |
| --- | --- |
| `environmentId` | Unique identifier for the environment |
| `externalSubscriberId` | External identifier for the subscriber |
| `organizationId` | Unique identifier for the organization |
| `subscriberId` | Unique identifier for the subscriber |
| `topicId` | Unique identifier for the topic |
| `topicKey` | Key associated with the topic |

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
| `content` | Translation content as JSON object |
| `id` |  |
| `locale` | Locale code (e.g., en_US, es_ES) |
| `resourceId` | The resource ID to associate translation with. |
| `resourceType` | The resource type to associate translation with |

Operations: Create, Load, Remove.

API path: `/v2/translations`

#### TranslationGroupDto

| Field | Description |
| --- | --- |
| `createdAt` | Creation timestamp |
| `id` |  |
| `locales` | Array of available locales for this resource |
| `outdatedLocales` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | Resource identifier (slugified ID) |
| `resourceName` | Resource name (e.g., workflow name) |
| `resourceType` | Resource type |
| `updatedAt` | Last update timestamp |

Operations: Load.

API path: `/v2/translations/group/{resourceType}/{resourceId}`

#### Trigger

| Field | Description |
| --- | --- |
| `actor` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` |  |
| `name` | The trigger identifier of the workflow you wish to send. |
| `overrides` | This could be used to override provider specific configurations |
| `payload` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | It is used to specify a tenant context during trigger event. |
| `to` | The recipients list of people who will receive the notification. |
| `transactionId` | A unique identifier for deduplication. |

Operations: Create.

API path: `/v1/events/trigger`

#### TriggerEventResponseDto

| Field | Description |
| --- | --- |
| `acknowledged` | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | Link to the activity feed for this trigger event |
| `actor` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` |  |
| `error` | In case of an error, this field will contain the error message(s) |
| `events` |  |
| `jobData` |  |
| `name` | The trigger identifier associated for the template you wish to send. |
| `overrides` | This could be used to override provider specific configurations |
| `payload` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | Status of the trigger |
| `tenant` | It is used to specify a tenant context during trigger event. |
| `transactionId` | The returned transaction ID of the trigger |

Operations: Create.

API path: `/v1/events/trigger/broadcast`

#### Unseen

| Field | Description |
| --- | --- |
| `count` |  |

Operations: Load.

API path: `/v1/subscribers/{subscriberId}/notifications/unseen`

#### Upload

| Field | Description |
| --- | --- |
| `errors` | List of error messages for failed uploads |
| `failedUploads` | Number of files that failed to upload |
| `successfulUploads` | Number of files successfully uploaded |
| `totalFiles` | Total number of files processed |

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
| `active` | Whether the workflow is active |
| `agent` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | Creation timestamp |
| `description` | Description of the workflow |
| `id` | Database identifier of the workflow |
| `isTranslationEnabled` | Enable or disable translations for this workflow |
| `issues` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | Timestamp of the last workflow publication |
| `lastPublishedBy` | User who last published the workflow |
| `lastTriggeredAt` | Timestamp of the last workflow trigger |
| `name` | Name of the workflow |
| `origin` | Workflow origin |
| `payloadExample` | Generated payload example based on the payload schema |
| `payloadSchema` | The payload JSON Schema for the workflow |
| `preferences` | Preferences for the workflow |
| `severity` | Workflow severity |
| `slug` | Slug of the workflow |
| `source` | Source of workflow creation |
| `status` | Workflow status |
| `stepTypeOverviews` | Overview of step types in the workflow |
| `steps` | Steps of the workflow |
| `tags` | Tags associated with the workflow |
| `updatedAt` | Last updated timestamp |
| `updatedBy` | User who last updated the workflow |
| `validatePayload` | Enable or disable payload schema validation |
| `workflowId` | Workflow identifier |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v2/workflows`

#### WorkflowInfoDto

| Field | Description |
| --- | --- |
| `name` | The name of the workflow |
| `workflowId` | The unique identifier of the workflow |

Operations: List.

API path: `/v2/layouts/{layoutId}/usage`

#### WorkflowResponseDto

| Field | Description |
| --- | --- |
| `active` | Whether the workflow is active |
| `agent` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | Creation timestamp |
| `description` | Description of the workflow |
| `id` | Database identifier of the workflow |
| `isTranslationEnabled` | Enable or disable translations for this workflow |
| `issues` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | Timestamp of the last workflow publication |
| `lastPublishedBy` | User who last published the workflow |
| `lastTriggeredAt` | Timestamp of the last workflow trigger |
| `name` | Name of the workflow |
| `origin` | Workflow origin |
| `payloadExample` | Generated payload example based on the payload schema |
| `payloadSchema` | The payload JSON Schema for the workflow |
| `preferences` | Preferences for the workflow |
| `severity` | Workflow severity |
| `slug` | Slug of the workflow |
| `status` | Workflow status |
| `steps` | Steps of the workflow |
| `tags` | Tags associated with the workflow |
| `updatedAt` | Last updated timestamp |
| `updatedBy` | User who last updated the workflow |
| `validatePayload` | Enable or disable payload schema validation |
| `workflowId` | Workflow identifier |

Operations: Update.

API path: `/v2/workflows/{workflowId}/sync`



## Entities


### ActivityNotificationResponseDto

Create an instance: `local activity_notification_response_dto = client:ActivityNotificationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `table` |  |
| `contextKeys` | `table` | Context (single or multi) in which the notification was sent |
| `controls` | `table` | Controls associated with the notification |
| `createdAt` | `string` | Creation time of the notification |
| `critical` | `boolean` | Criticality of the notification |
| `digestedNotificationId` | `string` | Digested Notification ID |
| `environmentId` | `string` | Environment ID of the notification |
| `id` | `string` | Unique identifier of the notification |
| `jobs` | `table` | Jobs of the notification |
| `organizationId` | `string` | Organization ID of the notification |
| `payload` | `table` | Payload of the notification |
| `severity` | `string` | Workflow severity |
| `subscriber` | `any` | Subscriber of the notification |
| `subscriberId` | `string` | Subscriber ID of the notification |
| `tags` | `table` | Tags associated with the notification |
| `template` | `any` | Template of the notification |
| `templateId` | `string` | Template ID of the notification |
| `to` | `table` | To field for subscriber definition |
| `topics` | `table` | Topics of the notification |
| `transactionId` | `string` | Transaction ID of the notification |
| `updatedAt` | `string` | Last updated time of the notification |

#### Example: Load

```lua
local activity_notification_response_dto, err = client:ActivityNotificationResponseDto():load({ notification_id = "notification_id" })
```

#### Example: List

```lua
local activity_notification_response_dtos, err = client:ActivityNotificationResponseDto():list()
```


### Agent

Create an instance: `local agent = client:Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `behavior` | `table` |  |
| `bridgeUrl` | `string` | Production bridge URL |
| `createdAt` | `string` |  |
| `createdBy` | `string` | Mongo user id of the user who created the agent |
| `description` | `string` |  |
| `devBridgeActive` | `boolean` | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `boolean` | Cloud only. |
| `id` | `string` |  |
| `identifier` | `string` | Required when not adopting an existing managed agent. |
| `integrations` | `table` |  |
| `managedRuntime` | `any` | Present when runtime is "managed". |
| `name` | `string` | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `string` |  |
| `runtime` | `string` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` |  |
| `visibility` | `string` | Discovery scope of the agent. |

#### Example: Load

```lua
local agent, err = client:Agent():load({ id = "agent_id" })
```

#### Example: Create

```lua
local agent, err = client:Agent():create({
  active = true, -- boolean
  behavior = {}, -- table
  createdAt = "example_createdAt", -- string
  environmentId = "example_environmentId", -- string
  id = "example_id", -- string
  identifier = "example_identifier", -- string
  name = "example_name", -- string
  organizationId = "example_organizationId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### AgentIntegrationResponseDto

Create an instance: `local agent_integration_response_dto = client:AgentIntegrationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `string` |  |
| `connectedAt` | `table` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` |  |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `boolean` | Cloud only. |
| `id` | `string` | Agent–integration link document id. |
| `integration` | `table` |  |
| `integrationIdentifier` | `string` | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `string` |  |
| `providerId` | `string` | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `string` |  |

#### Example: Create

```lua
local agent_integration_response_dto, err = client:AgentIntegrationResponseDto():create({
  identifier = "example_identifier", -- string
  agentId = "example_agentId", -- string
  createdAt = "example_createdAt", -- string
  environmentId = "example_environmentId", -- string
  id = "example_id", -- string
  integration = {}, -- table
  organizationId = "example_organizationId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### AgentResponseDto

Create an instance: `local agent_response_dto = client:AgentResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `behavior` | `table` |  |
| `bridgeUrl` | `string` | Production bridge URL |
| `createdAt` | `string` |  |
| `createdBy` | `string` | Mongo user id of the user who created the agent |
| `description` | `string` |  |
| `devBridgeActive` | `boolean` | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `boolean` | Cloud only. |
| `id` | `string` |  |
| `identifier` | `string` |  |
| `integrations` | `table` |  |
| `managedRuntime` | `any` | Present when runtime is "managed". |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `runtime` | `string` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` |  |
| `visibility` | `string` | Discovery scope of the agent. |


### Bulk

Create an instance: `local bulk = client:Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscribers` | `table` | An array of subscribers to be created in bulk. |

#### Example: Create

```lua
local bulk, err = client:Bulk():create({
  subscribers = {}, -- table
})
```


### ChannelConnection

Create an instance: `local channel_connection = client:ChannelConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `table` |  |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | Connection mode that determines how the channel connection is scoped. |
| `context` | `table` |  |
| `contextKeys` | `table` | The context of the channel connection |
| `createdAt` | `string` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` |  |
| `identifier` | `string` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `table` |  |

#### Example: Load

```lua
local channel_connection, err = client:ChannelConnection():load({ id = "channel_connection_id" })
```

#### Example: Create

```lua
local channel_connection, err = client:ChannelConnection():create({
  auth = {}, -- table
  channel = "example_channel", -- string
  contextKeys = {}, -- table
  createdAt = "example_createdAt", -- string
  identifier = "example_identifier", -- string
  integrationIdentifier = "example_integrationIdentifier", -- string
  providerId = "example_providerId", -- string
  subscriberId = "example_subscriberId", -- string
  updatedAt = "example_updatedAt", -- string
  workspace = {}, -- table
})
```


### ChannelEndpoint

Create an instance: `local channel_endpoint = client:ChannelEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `table` | The context of the channel connection |
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

```lua
local channel_endpoint, err = client:ChannelEndpoint():load({ id = "channel_endpoint_id" })
```

#### Example: Create

```lua
local channel_endpoint, err = client:ChannelEndpoint():create({
  channel = "example_channel", -- string
  connectionIdentifier = "example_connectionIdentifier", -- string
  contextKeys = {}, -- table
  createdAt = "example_createdAt", -- string
  endpoint = "example_endpoint", -- any
  identifier = "example_identifier", -- string
  integrationIdentifier = "example_integrationIdentifier", -- string
  providerId = "example_providerId", -- string
  subscriberId = "example_subscriberId", -- string
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Configure

Create an instance: `local configure = client:Configure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `botUsername` | `string` | Resolved bot username from getMe |
| `configuredAt` | `string` | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | URL Novu registered with Telegram for incoming updates |

#### Example: Create

```lua
local configure, err = client:Configure():create({
  integration_id = "example_integration_id", -- string
  botUsername = "example_botUsername", -- string
  configuredAt = "example_configuredAt", -- string
  webhookUrl = "example_webhookUrl", -- string
})
```


### Context

Create an instance: `local context = client:Context(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bridgeUrl` | `string` | Optional bridge URL override for agent connect. |
| `data` | `table` | Optional custom data to associate with this context. |
| `id` | `string` | Unique identifier for this context. |
| `type` | `string` | Context type (e.g., tenant, app, workspace). |

#### Example: Load

```lua
local context, err = client:Context():load({ id = "context_id", type = "type" })
```

#### Example: Create

```lua
local context, err = client:Context():create({
  id = "example_id", -- string
  type = "example_type", -- string
})
```


### CreateSubscriptionsResponseDto

Create an instance: `local create_subscriptions_response_dto = client:CreateSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `table` |  |
| `name` | `string` | The name of the topic |
| `preferences` | `table` | The preferences of the topic. |
| `subscriberIds` | `table` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `table` | List of subscriptions to subscribe to the topic (max: 100). |

#### Example: Create

```lua
local create_subscriptions_response_dto, err = client:CreateSubscriptionsResponseDto():create({
  topic_key = "example_topic_key", -- string
})
```


### Diff

Create an instance: `local diff = client:Diff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resources` | `table` | Diff resources by resource type |
| `sourceEnvironmentId` | `string` | Source environment ID |
| `summary` | `any` | Overall summary |
| `targetEnvironmentId` | `string` | Target environment ID |

#### Example: Create

```lua
local diff, err = client:Diff():create({
  environment_id = "example_environment_id", -- string
  resources = {}, -- table
  sourceEnvironmentId = "example_sourceEnvironmentId", -- string
  summary = "example_summary", -- any
  targetEnvironmentId = "example_targetEnvironmentId", -- string
})
```


### Domain

Create an instance: `local domain = client:Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `data` | `table` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` |  |
| `environmentId` | `string` |  |
| `expectedDnsRecords` | `table` |  |
| `id` | `string` |  |
| `mxRecordConfigured` | `boolean` |  |
| `name` | `string` | The domain name (e.g. |
| `organizationId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local domain, err = client:Domain():load({ id = "domain_id" })
```

#### Example: Create

```lua
local domain, err = client:Domain():create({
  createdAt = "example_createdAt", -- string
  environmentId = "example_environmentId", -- string
  id = "example_id", -- string
  mxRecordConfigured = true, -- boolean
  name = "example_name", -- string
  organizationId = "example_organizationId", -- string
  status = "example_status", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### DomainConnectApplyUrlResponseDto

Create an instance: `local domain_connect_apply_url_response_dto = client:DomainConnectApplyUrlResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redirectUri` | `string` | Dashboard URL to return to after the DNS provider consent flow completes. |

#### Example: Create

```lua
local domain_connect_apply_url_response_dto, err = client:DomainConnectApplyUrlResponseDto():create({
  domain_id = "example_domain_id", -- string
})
```


### DomainConnectStatusResponseDto

Create an instance: `local domain_connect_status_response_dto = client:DomainConnectStatusResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local domain_connect_status_response_dtos, err = client:DomainConnectStatusResponseDto():list()
```


### DomainResponseDto

Create an instance: `local domain_response_dto = client:DomainResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `data` | `table` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` |  |
| `environmentId` | `string` |  |
| `expectedDnsRecords` | `table` |  |
| `id` | `string` |  |
| `mxRecordConfigured` | `boolean` |  |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```lua
local domain_response_dto, err = client:DomainResponseDto():create({
  id = "example_id", -- string
  createdAt = "example_createdAt", -- string
  environmentId = "example_environmentId", -- string
  mxRecordConfigured = true, -- boolean
  name = "example_name", -- string
  organizationId = "example_organizationId", -- string
  status = "example_status", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### DomainRouteResponseDto

Create an instance: `local domain_route_response_dto = client:DomainRouteResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `string` | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `table` | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local domain_route_response_dto, err = client:DomainRouteResponseDto():load({ address = "address", domain_id = "domain_id" })
```

#### Example: Create

```lua
local domain_route_response_dto, err = client:DomainRouteResponseDto():create({
  id = "example_id", -- string
})
```


### Environment

Create an instance: `local environment = client:Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKeys` | `table` | List of API keys associated with the environment |
| `bridge` | `table` |  |
| `color` | `string` | Hex color code for the environment |
| `dns` | `table` |  |
| `id` | `string` | Unique identifier of the environment |
| `identifier` | `string` | Unique identifier for the environment |
| `name` | `string` | Name of the environment to be created |
| `organizationId` | `string` | Organization ID associated with the environment |
| `parentId` | `string` | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `string` | URL-friendly slug for the environment |
| `type` | `string` | Type of the environment |

#### Example: List

```lua
local environments, err = client:Environment():list()
```

#### Example: Create

```lua
local environment, err = client:Environment():create({
  color = "example_color", -- string
  id = "example_id", -- string
  identifier = "example_identifier", -- string
  name = "example_name", -- string
  organizationId = "example_organizationId", -- string
})
```


### EnvironmentTagsDto

Create an instance: `local environment_tags_dto = client:EnvironmentTagsDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local environment_tags_dtos, err = client:EnvironmentTagsDto():list()
```


### EnvironmentVariable

Create an instance: `local environment_variable = client:EnvironmentVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `isSecret` | `boolean` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `string` | Unique key for the variable. |
| `organizationId` | `string` |  |
| `type` | `string` | The type of the variable |
| `updatedAt` | `string` |  |
| `values` | `table` |  |

#### Example: Load

```lua
local environment_variable, err = client:EnvironmentVariable():load({ id = "environment_variable_id" })
```

#### Example: List

```lua
local environment_variables, err = client:EnvironmentVariable():list()
```

#### Example: Create

```lua
local environment_variable, err = client:EnvironmentVariable():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  isSecret = true, -- boolean
  key = "example_key", -- string
  organizationId = "example_organizationId", -- string
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
  values = {}, -- table
})
```


### EnvironmentVariableWorkflowInfoDto

Create an instance: `local environment_variable_workflow_info_dto = client:EnvironmentVariableWorkflowInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name of the workflow |
| `workflowId` | `string` | The unique identifier of the workflow |

#### Example: List

```lua
local environment_variable_workflow_info_dtos, err = client:EnvironmentVariableWorkflowInfoDto():list()
```


### Event

Create an instance: `local event = client:Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GenerateChatOAuthUrlResponseDto

Create an instance: `local generate_chat_o_auth_url_response_dto = client:GenerateChatOAuthUrlResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoLinkUser` | `boolean` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | Connection mode that determines how the channel connection is scoped. |
| `context` | `table` |  |
| `contextHash` | `string` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Integration identifier |
| `mode` | `string` | OAuth flow mode. |
| `scope` | `table` | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | The subscriber ID to associate with the channel connection. |
| `userScope` | `table` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

#### Example: Create

```lua
local generate_chat_o_auth_url_response_dto, err = client:GenerateChatOAuthUrlResponseDto():create({
  integrationIdentifier = "example_integrationIdentifier", -- string
})
```


### GeneratePreviewResponseDto

Create an instance: `local generate_preview_response_dto = client:GeneratePreviewResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `table` | Optional control values |
| `previewPayload` | `any` | Optional payload for preview generation |

#### Example: Create

```lua
local generate_preview_response_dto, err = client:GeneratePreviewResponseDto():create({
  step_id = "example_step_id", -- string
  workflow_id = "example_workflow_id", -- string
})
```


### ImportMasterJsonResponseDto

Create an instance: `local import_master_json_response_dto = client:ImportMasterJsonResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed` | `table` | List of resource IDs that failed to import |
| `locale` | `string` | The locale for which translations are being imported |
| `masterJson` | `table` | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Human-readable message describing the import result |
| `success` | `boolean` | Overall success status of the import operation |
| `successful` | `table` | List of resource IDs that were successfully imported |

#### Example: Create

```lua
local import_master_json_response_dto, err = client:ImportMasterJsonResponseDto():create({
  locale = "example_locale", -- string
  masterJson = {}, -- table
  message = "example_message", -- string
  success = true, -- boolean
})
```


### InboxNotificationDto

Create an instance: `local inbox_notification_dto = client:InboxNotificationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `string` | ISO timestamp when the notification was archived |
| `avatar` | `string` | Avatar URL for the notification |
| `body` | `string` | Body content of the notification |
| `channelType` | `string` | Channel the message was sent on |
| `createdAt` | `string` | ISO timestamp when the notification was created |
| `data` | `table` | Custom data payload of the notification |
| `deliveredAt` | `table` | Timestamps when the notification was delivered |
| `firstSeenAt` | `string` | ISO timestamp when the notification was first seen |
| `id` | `string` | Unique identifier of the notification |
| `isArchived` | `boolean` | Whether the notification has been archived |
| `isRead` | `boolean` | Whether the notification has been read |
| `isSeen` | `boolean` | Whether the notification has been seen |
| `isSnoozed` | `boolean` | Whether the notification is snoozed |
| `primaryAction` | `any` | Primary action button for the notification |
| `readAt` | `string` | ISO timestamp when the notification was read |
| `redirect` | `any` | Redirect configuration for the notification |
| `secondaryAction` | `any` | Secondary action button for the notification |
| `severity` | `string` | Workflow severity |
| `snoozeUntil` | `string` | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `string` | ISO timestamp when the notification will be unsnoozed |
| `subject` | `string` | Subject of the notification |
| `tags` | `table` | Tags associated with the notification |
| `to` | `any` | Subscriber this notification was sent to |
| `transactionId` | `string` | Transaction identifier of the notification |
| `workflow` | `any` | Workflow associated with the notification |


### Integration

Create an instance: `local integration = client:Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | The channel type for the integration. |
| `check` | `boolean` | Flag to check the integration status |
| `conditions` | `table` | Legacy StepFilter conditions. |
| `configurations` | `table` | Configurations for the integration |
| `credentials` | `any` | The credentials for the integration |
| `deleted` | `boolean` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | The ID of the associated environment |
| `id` | `string` | The unique identifier of the integration record in the database. |
| `identifier` | `string` | The unique identifier for the integration |
| `kind` | `string` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | The name of the integration |
| `organizationId` | `string` | The unique identifier for the organization that owns this integration. |
| `primary` | `boolean` | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | The provider ID for the integration |
| `rules` | `table` | JSONLogic used at send time to select this integration. |

#### Example: List

```lua
local integrations, err = client:Integration():list()
```

#### Example: Create

```lua
local integration, err = client:Integration():create({
  deleted = true, -- boolean
  organizationId = "example_organizationId", -- string
  primary = true, -- boolean
})
```


### IntegrationResponseDto

Create an instance: `local integration_response_dto = client:IntegrationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Indicates whether the integration is currently active. |
| `channel` | `string` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `table` | Legacy StepFilter conditions. |
| `configurations` | `any` | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `any` | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `boolean` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | The unique identifier for the environment associated with this integration. |
| `id` | `string` | The unique identifier of the integration record in the database. |
| `identifier` | `string` | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `string` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `string` | The unique identifier for the organization that owns this integration. |
| `primary` | `boolean` | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `table` | JSONLogic used at send time to select this integration. |

#### Example: List

```lua
local integration_response_dtos, err = client:IntegrationResponseDto():list()
```

#### Example: Create

```lua
local integration_response_dto, err = client:IntegrationResponseDto():create({
  id = "example_id", -- string
  active = true, -- boolean
  deleted = true, -- boolean
  environmentId = "example_environmentId", -- string
  identifier = "example_identifier", -- string
  name = "example_name", -- string
  organizationId = "example_organizationId", -- string
  primary = true, -- boolean
  providerId = "example_providerId", -- string
})
```


### Layout

Create an instance: `local layout = client:Layout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `any` | Control values for the layout. |
| `controls` | `any` | Controls metadata for the layout |
| `createdAt` | `string` | Creation timestamp |
| `id` | `string` | Unique internal identifier of the layout |
| `isDefault` | `boolean` | Whether the layout is the default layout |
| `isTranslationEnabled` | `boolean` | Whether the layout translations are enabled |
| `layoutId` | `string` | Unique identifier for the layout |
| `name` | `string` | Name of the layout |
| `origin` | `string` | Workflow origin |
| `slug` | `string` | Slug of the layout |
| `source` | `string` | Source of layout creation |
| `type` | `string` | Resource type |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the layout |
| `variables` | `table` | The variables JSON Schema for the layout |

#### Example: Load

```lua
local layout, err = client:Layout():load({ id = "layout_id" })
```

#### Example: List

```lua
local layouts, err = client:Layout():list()
```

#### Example: Create

```lua
local layout, err = client:Layout():create({
  controls = "example_controls", -- any
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  isDefault = true, -- boolean
  isTranslationEnabled = true, -- boolean
  layoutId = "example_layoutId", -- string
  name = "example_name", -- string
  origin = "example_origin", -- string
  slug = "example_slug", -- string
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### LayoutResponseDto

Create an instance: `local layout_response_dto = client:LayoutResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```lua
local layout_response_dto, err = client:LayoutResponseDto():create({
  id = "example_id", -- string
})
```


### Link

Create an instance: `local link = client:Link(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `table` |  |
| `contextHash` | `string` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | External subscriber identifier to link to their chat identity |

#### Example: Create

```lua
local link, err = client:Link():create({
  integrationIdentifier = "example_integrationIdentifier", -- string
  subscriberId = "example_subscriberId", -- string
})
```


### ListAgentIntegrationsResponseDto

Create an instance: `local list_agent_integrations_response_dto = client:ListAgentIntegrationsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `string` |  |
| `connectedAt` | `table` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` |  |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `boolean` | Cloud only. |
| `id` | `string` | Agent–integration link document id. |
| `integration` | `table` |  |
| `organizationId` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local list_agent_integrations_response_dtos, err = client:ListAgentIntegrationsResponseDto():list()
```


### ListAgentsResponseDto

Create an instance: `local list_agents_response_dto = client:ListAgentsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `behavior` | `table` |  |
| `bridgeUrl` | `string` | Production bridge URL |
| `createdAt` | `string` |  |
| `createdBy` | `string` | Mongo user id of the user who created the agent |
| `description` | `string` |  |
| `devBridgeActive` | `boolean` | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` |  |
| `exceedsPlanLimit` | `boolean` | Cloud only. |
| `id` | `string` |  |
| `identifier` | `string` |  |
| `integrations` | `table` |  |
| `managedRuntime` | `any` | Present when runtime is "managed". |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `runtime` | `string` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` |  |
| `visibility` | `string` | Discovery scope of the agent. |

#### Example: List

```lua
local list_agents_response_dtos, err = client:ListAgentsResponseDto():list()
```


### ListChannelConnectionsResponseDto

Create an instance: `local list_channel_connections_response_dto = client:ListChannelConnectionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `table` |  |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `table` | The context of the channel connection |
| `createdAt` | `string` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `string` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `table` |  |

#### Example: List

```lua
local list_channel_connections_response_dtos, err = client:ListChannelConnectionsResponseDto():list()
```


### ListChannelEndpointsResponseDto

Create an instance: `local list_channel_endpoints_response_dto = client:ListChannelEndpointsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `table` | The context of the channel connection |
| `createdAt` | `string` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `any` | Endpoint data specific to the channel type |
| `identifier` | `string` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Type of channel endpoint |
| `updatedAt` | `string` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

#### Example: List

```lua
local list_channel_endpoints_response_dtos, err = client:ListChannelEndpointsResponseDto():list()
```


### ListContextsResponseDto

Create an instance: `local list_contexts_response_dto = client:ListContextsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bridgeUrl` | `string` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Creation timestamp |
| `data` | `table` | Custom data associated with this context |
| `id` | `string` | Unique identifier for this context |
| `type` | `string` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Last update timestamp |

#### Example: List

```lua
local list_contexts_response_dtos, err = client:ListContextsResponseDto():list()
```


### ListDomainRoutesResponseDto

Create an instance: `local list_domain_routes_response_dto = client:ListDomainRoutesResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` |  |
| `agentId` | `string` | Internal id of the destination agent. |
| `createdAt` | `string` |  |
| `data` | `table` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` |  |
| `environmentId` | `string` |  |
| `id` | `string` |  |
| `organizationId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local list_domain_routes_response_dtos, err = client:ListDomainRoutesResponseDto():list()
```


### ListDomainsResponseDto

Create an instance: `local list_domains_response_dto = client:ListDomainsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `data` | `table` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` |  |
| `environmentId` | `string` |  |
| `expectedDnsRecords` | `table` |  |
| `id` | `string` |  |
| `mxRecordConfigured` | `boolean` |  |
| `name` | `string` |  |
| `organizationId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local list_domains_response_dtos, err = client:ListDomainsResponseDto():list()
```


### ListSubscribersResponseDto

Create an instance: `local list_subscribers_response_dto = client:ListSubscribersResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | The URL of the subscriber's avatar image. |
| `channels` | `table` | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | Additional custom data for the subscriber |
| `deleted` | `boolean` | Indicates whether the subscriber has been deleted. |
| `email` | `string` | The email address of the subscriber. |
| `environmentId` | `string` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | The first name of the subscriber. |
| `id` | `string` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | The last name of the subscriber. |
| `lastOnlineAt` | `string` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | The phone number of the subscriber. |
| `subscriberId` | `string` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | Timezone of the subscriber |
| `topics` | `table` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | The version of the subscriber document. |

#### Example: List

```lua
local list_subscribers_response_dtos, err = client:ListSubscribersResponseDto():list()
```


### ListTopicSubscriptionsResponseDto

Create an instance: `local list_topic_subscriptions_response_dto = client:ListTopicSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `table` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | The date and time the subscription was created |
| `id` | `string` | The identifier of the subscription |
| `identifier` | `string` | The identifier of the subscription |
| `preferences` | `table` | The preferences for workflows in this subscription |
| `subscriber` | `any` | Subscriber information |
| `topic` | `any` | Topic information |

#### Example: List

```lua
local list_topic_subscriptions_response_dtos, err = client:ListTopicSubscriptionsResponseDto():list()
```


### ListTopicsResponseDto

Create an instance: `local list_topics_response_dto = client:ListTopicsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date the topic was created |
| `data` | `table` | Additional custom data associated with the topic |
| `id` | `string` | The identifier of the topic |
| `key` | `string` | The unique key of the topic |
| `name` | `string` | The name of the topic |
| `updatedAt` | `string` | The date the topic was last updated |

#### Example: List

```lua
local list_topics_response_dtos, err = client:ListTopicsResponseDto():list()
```


### MasterJson

Create an instance: `local master_json = client:MasterJson(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `layouts` | `table` | All translations for given locale organized by layout identifier |
| `workflows` | `table` | All translations for given locale organized by workflow identifier |

#### Example: Load

```lua
local master_json, err = client:MasterJson():load()
```


### Message

Create an instance: `local message = client:Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | Channel the message was sent on |
| `content` | `any` | Content of the message, can be an email block or a string |
| `contextKeys` | `table` | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Creation date of the message |
| `cta` | `any` | Call to action associated with the message |
| `deliveredAt` | `table` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `table` | Device tokens associated with the message, if applicable |
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
| `overrides` | `table` | Provider specific overrides used when triggering the notification |
| `payload` | `table` | The payload that was used to send the notification trigger |
| `phone` | `string` | Phone number associated with the message, if applicable |
| `providerId` | `string` | Provider ID associated with the message, if applicable |
| `read` | `boolean` | Indicates if the message has been read |
| `seen` | `boolean` | Indicates if the message has been seen |
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

```lua
local messages, err = client:Message():list()
```


### MessageResponseDto

Create an instance: `local message_response_dto = client:MessageResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markAs` | `string` |  |
| `messageId` | `any` |  |
| `payload` | `table` | Message action payload |
| `status` | `string` | Message action status |

#### Example: Create

```lua
local message_response_dto, err = client:MessageResponseDto():create({
  subscriber_id = "example_subscriber_id", -- string
  markAs = "example_markAs", -- string
  messageId = "example_messageId", -- any
  status = "example_status", -- string
})
```


### NotificationFeedItemDto

Create an instance: `local notification_feed_item_dto = client:NotificationFeedItemDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `any` | Actor details related to the notification, if applicable. |
| `archived` | `boolean` | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `string` | Channel the message was sent on |
| `content` | `string` | The main content of the notification. |
| `createdAt` | `string` | Timestamp indicating when the notification was created. |
| `cta` | `any` | Call-to-action information associated with the notification. |
| `data` | `table` | The data sent with the notification. |
| `deviceTokens` | `table` | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | Identifier for the feed associated with the notification. |
| `id` | `string` | Unique identifier for the notification. |
| `jobId` | `string` | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | Identifier for the message template used. |
| `notificationId` | `string` | Unique identifier for the notification instance. |
| `organizationId` | `string` | Identifier for the organization sending the notification. |
| `overrides` | `table` | Provider-specific overrides used when triggering the notification. |
| `payload` | `table` | The payload that was used to send the notification trigger. |
| `providerId` | `string` | Identifier for the provider that sends the notification. |
| `read` | `boolean` | Indicates whether the notification has been read by the subscriber. |
| `seen` | `boolean` | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Current status of the notification. |
| `subject` | `string` | The subject line for email notifications, if applicable. |
| `subscriber` | `any` | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Unique identifier for the subscriber receiving the notification. |
| `tags` | `table` | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | Timestamp indicating when the notification was last updated. |

#### Example: List

```lua
local notification_feed_item_dtos, err = client:NotificationFeedItemDto():list()
```


### PreferencesResponseDto

Create an instance: `local preferences_response_dto = client:PreferencesResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `table` |  |
| `preferences` | `table` | Array of workflow preferences to update (maximum 100 items) |


### Publish

Create an instance: `local publish = client:Publish(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dryRun` | `boolean` | Perform a dry run without making actual changes |
| `resources` | `table` | Array of specific resources to publish. |
| `results` | `table` | Sync results by resource type |
| `sourceEnvironmentId` | `string` | Source environment ID to sync from. |
| `summary` | `any` | Summary of the sync operation |

#### Example: Create

```lua
local publish, err = client:Publish():create({
  environment_id = "example_environment_id", -- string
  results = {}, -- table
  summary = "example_summary", -- any
})
```


### RemoveSubscriberResponseDto

Create an instance: `local remove_subscriber_response_dto = client:RemoveSubscriberResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Step

Create an instance: `local step = client:Step(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `table` | Control values for the step (alias for controls.values) |
| `controls` | `any` | Controls metadata for the step |
| `id` | `string` | Database identifier of the step |
| `issues` | `any` | Issues associated with the step |
| `name` | `string` | Name of the step |
| `origin` | `string` | Workflow origin |
| `providerOverrides` | `table` | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Slug of the step |
| `stepId` | `string` | Unique identifier of the step |
| `stepResolverHash` | `string` | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Type of the step |
| `variables` | `table` | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Workflow database identifier |
| `workflowId` | `string` | Workflow identifier |

#### Example: Load

```lua
local step, err = client:Step():load({ id = "step_id", workflow_id = "workflow_id" })
```


### Subscriber

Create an instance: `local subscriber = client:Subscriber(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | The URL of the subscriber's avatar image. |
| `channels` | `table` | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | Additional custom data for the subscriber |
| `deleted` | `boolean` | Indicates whether the subscriber has been deleted. |
| `email` | `string` | The email address of the subscriber. |
| `environmentId` | `string` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | The first name of the subscriber. |
| `id` | `string` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | The last name of the subscriber. |
| `lastOnlineAt` | `string` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | The phone number of the subscriber. |
| `subscriberId` | `string` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | Timezone of the subscriber |
| `topics` | `table` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | The version of the subscriber document. |

#### Example: Load

```lua
local subscriber, err = client:Subscriber():load({ id = "subscriber_id" })
```

#### Example: Create

```lua
local subscriber, err = client:Subscriber():create({
  createdAt = "example_createdAt", -- string
  deleted = true, -- boolean
  environmentId = "example_environmentId", -- string
  organizationId = "example_organizationId", -- string
  subscriberId = "example_subscriberId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### SubscriberNotificationsCountResponseDto

Create an instance: `local subscriber_notifications_count_response_dto = client:SubscriberNotificationsCountResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The count of notifications matching the filter |
| `filter` | `table` | The filter applied |

#### Example: List

```lua
local subscriber_notifications_count_response_dtos, err = client:SubscriberNotificationsCountResponseDto():list()
```


### SubscriberNotificationsResponseDto

Create an instance: `local subscriber_notifications_response_dto = client:SubscriberNotificationsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local subscriber_notifications_response_dtos, err = client:SubscriberNotificationsResponseDto():list()
```


### SubscriberPreferencesDto

Create an instance: `local subscriber_preferences_dto = client:SubscriberPreferencesDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local subscriber_preferences_dtos, err = client:SubscriberPreferencesDto():list()
```


### SubscriberResponseDto

Create an instance: `local subscriber_response_dto = client:SubscriberResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | The URL of the subscriber's avatar image. |
| `channels` | `table` | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | Additional custom data for the subscriber |
| `deleted` | `boolean` | Indicates whether the subscriber has been deleted. |
| `email` | `string` | The email address of the subscriber. |
| `environmentId` | `string` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | The first name of the subscriber. |
| `id` | `string` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | The last name of the subscriber. |
| `lastOnlineAt` | `string` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | The phone number of the subscriber. |
| `subscriberId` | `string` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | Timezone of the subscriber |
| `topics` | `table` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | The version of the subscriber document. |


### Subscription

Create an instance: `local subscription = client:Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `table` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | The creation date of the subscription |
| `id` | `string` | The unique identifier of the subscription |
| `identifier` | `string` | The identifier of the subscription |
| `name` | `string` | The name of the subscription |
| `preferences` | `table` | The preferences/rules for the subscription |
| `subscriber` | `any` | The subscriber information |
| `topic` | `any` | The topic information |
| `updatedAt` | `string` | The last update date of the subscription |

#### Example: Load

```lua
local subscription, err = client:Subscription():load({ id = "subscription_id", topic_id = "topic_id" })
```


### Topic

Create an instance: `local topic = client:Topic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | Additional custom data associated with the topic. |
| `id` | `string` |  |
| `key` | `string` | The unique key identifier for the topic. |
| `name` | `string` | The display name for the topic |

#### Example: Load

```lua
local topic, err = client:Topic():load({ id = "topic_id" })
```

#### Example: Create

```lua
local topic, err = client:Topic():create({
  key = "example_key", -- string
})
```


### TopicSubscriberDto

Create an instance: `local topic_subscriber_dto = client:TopicSubscriberDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```lua
local topic_subscriber_dto, err = client:TopicSubscriberDto():load({ external_subscriber_id = "external_subscriber_id", topic_id = "topic_id" })
```


### TopicSubscriptionsResponseDto

Create an instance: `local topic_subscriptions_response_dto = client:TopicSubscriptionsResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Translation

Create an instance: `local translation = client:Translation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `table` | Translation content as JSON object |
| `id` | `string` |  |
| `locale` | `string` | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `string` | The resource ID to associate translation with. |
| `resourceType` | `string` | The resource type to associate translation with |

#### Example: Load

```lua
local translation, err = client:Translation():load({ locale = "locale", resource_id = "resource_id", resource_type = "resource_type" })
```

#### Example: Create

```lua
local translation, err = client:Translation():create({
  content = {}, -- table
  locale = "example_locale", -- string
  resourceId = "example_resourceId", -- string
  resourceType = "example_resourceType", -- string
})
```


### TranslationGroupDto

Create an instance: `local translation_group_dto = client:TranslationGroupDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | Creation timestamp |
| `id` | `string` |  |
| `locales` | `table` | Array of available locales for this resource |
| `outdatedLocales` | `table` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Resource identifier (slugified ID) |
| `resourceName` | `string` | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Resource type |
| `updatedAt` | `string` | Last update timestamp |

#### Example: Load

```lua
local translation_group_dto, err = client:TranslationGroupDto():load({ resource_id = "resource_id", resource_type = "resource_type" })
```


### Trigger

Create an instance: `local trigger = client:Trigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `table` |  |
| `name` | `string` | The trigger identifier of the workflow you wish to send. |
| `overrides` | `any` | This could be used to override provider specific configurations |
| `payload` | `table` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `any` | It is used to specify a tenant context during trigger event. |
| `to` | `any` | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | A unique identifier for deduplication. |

#### Example: Create

```lua
local trigger, err = client:Trigger():create({
  name = "example_name", -- string
  to = "example_to", -- any
})
```


### TriggerEventResponseDto

Create an instance: `local trigger_event_response_dto = client:TriggerEventResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledged` | `boolean` | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | Link to the activity feed for this trigger event |
| `actor` | `any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `table` |  |
| `error` | `table` | In case of an error, this field will contain the error message(s) |
| `events` | `table` |  |
| `jobData` | `table` |  |
| `name` | `string` | The trigger identifier associated for the template you wish to send. |
| `overrides` | `any` | This could be used to override provider specific configurations |
| `payload` | `table` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Status of the trigger |
| `tenant` | `any` | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | The returned transaction ID of the trigger |

#### Example: Create

```lua
local trigger_event_response_dto, err = client:TriggerEventResponseDto():create({
  acknowledged = true, -- boolean
  events = {}, -- table
  name = "example_name", -- string
  payload = {}, -- table
  status = "example_status", -- string
})
```


### Unseen

Create an instance: `local unseen = client:Unseen(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |

#### Example: Load

```lua
local unseen, err = client:Unseen():load({ subscriber_id = "subscriber_id" })
```


### Upload

Create an instance: `local upload = client:Upload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | List of error messages for failed uploads |
| `failedUploads` | `number` | Number of files that failed to upload |
| `successfulUploads` | `number` | Number of files successfully uploaded |
| `totalFiles` | `number` | Total number of files processed |

#### Example: Create

```lua
local upload, err = client:Upload():create({
  errors = {}, -- table
  failedUploads = 1, -- number
  successfulUploads = 1, -- number
  totalFiles = 1, -- number
})
```


### WebhookResultDto

Create an instance: `local webhook_result_dto = client:WebhookResultDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local webhook_result_dto, err = client:WebhookResultDto():create({
  environment_id = "example_environment_id", -- string
  integration_id = "example_integration_id", -- string
})
```


### Workflow

Create an instance: `local workflow = client:Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the workflow is active |
| `agent` | `any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Creation timestamp |
| `description` | `string` | Description of the workflow |
| `id` | `string` | Database identifier of the workflow |
| `isTranslationEnabled` | `boolean` | Enable or disable translations for this workflow |
| `issues` | `table` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | User who last published the workflow |
| `lastTriggeredAt` | `string` | Timestamp of the last workflow trigger |
| `name` | `string` | Name of the workflow |
| `origin` | `string` | Workflow origin |
| `payloadExample` | `table` | Generated payload example based on the payload schema |
| `payloadSchema` | `table` | The payload JSON Schema for the workflow |
| `preferences` | `any` | Preferences for the workflow |
| `severity` | `string` | Workflow severity |
| `slug` | `string` | Slug of the workflow |
| `source` | `string` | Source of workflow creation |
| `status` | `string` | Workflow status |
| `stepTypeOverviews` | `table` | Overview of step types in the workflow |
| `steps` | `table` | Steps of the workflow |
| `tags` | `table` | Tags associated with the workflow |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the workflow |
| `validatePayload` | `boolean` | Enable or disable payload schema validation |
| `workflowId` | `string` | Workflow identifier |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ id = "workflow_id" })
```

#### Example: List

```lua
local workflows, err = client:Workflow():list()
```

#### Example: Create

```lua
local workflow, err = client:Workflow():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  origin = "example_origin", -- string
  preferences = "example_preferences", -- any
  severity = "example_severity", -- string
  slug = "example_slug", -- string
  status = "example_status", -- string
  stepTypeOverviews = {}, -- table
  steps = {}, -- table
  updatedAt = "example_updatedAt", -- string
  workflowId = "example_workflowId", -- string
})
```


### WorkflowInfoDto

Create an instance: `local workflow_info_dto = client:WorkflowInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name of the workflow |
| `workflowId` | `string` | The unique identifier of the workflow |

#### Example: List

```lua
local workflow_info_dtos, err = client:WorkflowInfoDto():list()
```


### WorkflowResponseDto

Create an instance: `local workflow_response_dto = client:WorkflowResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the workflow is active |
| `agent` | `any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Creation timestamp |
| `description` | `string` | Description of the workflow |
| `id` | `string` | Database identifier of the workflow |
| `isTranslationEnabled` | `boolean` | Enable or disable translations for this workflow |
| `issues` | `table` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | User who last published the workflow |
| `lastTriggeredAt` | `string` | Timestamp of the last workflow trigger |
| `name` | `string` | Name of the workflow |
| `origin` | `string` | Workflow origin |
| `payloadExample` | `table` | Generated payload example based on the payload schema |
| `payloadSchema` | `table` | The payload JSON Schema for the workflow |
| `preferences` | `any` | Preferences for the workflow |
| `severity` | `string` | Workflow severity |
| `slug` | `string` | Slug of the workflow |
| `status` | `string` | Workflow status |
| `steps` | `table` | Steps of the workflow |
| `tags` | `table` | Tags associated with the workflow |
| `updatedAt` | `string` | Last updated timestamp |
| `updatedBy` | `any` | User who last updated the workflow |
| `validatePayload` | `boolean` | Enable or disable payload schema validation |
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

10 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `channel_endpoint` | `endpoint` | 14 | 0 levels |
| `list_channel_endpoints_response_dto` | `endpoint` | 14 | 0 levels |
| `layout` | `controls` | 5 | 14 levels |
| `step` | `controls` | 5 | 14 levels |
| `workflow` | `steps` | 5 | 19 levels |
| `workflow_response_dto` | `steps` | 5 | 19 levels |
| `message` | `template` | 4 | 10 levels |
| `trigger` | `to` | 4 | 3 levels |
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── novu_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`novu_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local environmentvariable = client:EnvironmentVariable()
environmentvariable:list()

-- environmentvariable:data_get() now returns the environmentvariable data from the last list
-- environmentvariable:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
