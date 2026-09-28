# Novu Python SDK



The Python SDK for the Novu API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ActivityNotificationResponseDto()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/novu-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from novu_sdk import NovuSDK

client = NovuSDK({
    "apikey": os.environ.get("NOVU_APIKEY"),
})
```

### 2. List activitynotificationresponsedto records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    activitynotificationresponsedtos = client.ActivityNotificationResponseDto().list()
    for activitynotificationresponsedto in activitynotificationresponsedtos:
        print(activitynotificationresponsedto)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a domainrouteresponsedto

DomainRouteResponseDto is nested under address, so provide the `address`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    domainrouteresponsedto = client.DomainRouteResponseDto().load({"address": "example_address", "domain_id": "example_domain_id"})
    print(domainrouteresponsedto)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    environmentvariables = client.EnvironmentVariable().list()
    print(environmentvariables)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = NovuSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
environmentvariable = client.EnvironmentVariable().list()
# environmentvariable contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = NovuSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### NovuSDK

```python
from novu_sdk import NovuSDK

client = NovuSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = NovuSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### NovuSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `activity_notification_response_dto = client.ActivityNotificationResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `list` |  |
| `contextKeys` | `list` | Context (single or multi) in which the notification was sent |
| `controls` | `dict` | Controls associated with the notification |
| `createdAt` | `str` | Creation time of the notification |
| `critical` | `bool` | Criticality of the notification |
| `digestedNotificationId` | `str` | Digested Notification ID |
| `environmentId` | `str` | Environment ID of the notification |
| `id` | `str` | Unique identifier of the notification |
| `jobs` | `list` | Jobs of the notification |
| `organizationId` | `str` | Organization ID of the notification |
| `payload` | `dict` | Payload of the notification |
| `severity` | `str` | Workflow severity |
| `subscriber` | `Any` | Subscriber of the notification |
| `subscriberId` | `str` | Subscriber ID of the notification |
| `tags` | `list` | Tags associated with the notification |
| `template` | `Any` | Template of the notification |
| `templateId` | `str` | Template ID of the notification |
| `to` | `dict` | To field for subscriber definition |
| `topics` | `list` | Topics of the notification |
| `transactionId` | `str` | Transaction ID of the notification |
| `updatedAt` | `str` | Last updated time of the notification |

#### Example: Load

```python
activity_notification_response_dto = client.ActivityNotificationResponseDto().load({"notification_id": "notification_id"})
```

#### Example: List

```python
activity_notification_response_dtos = client.ActivityNotificationResponseDto().list()
```


### Agent

Create an instance: `agent = client.Agent()`

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
| `active` | `bool` |  |
| `behavior` | `dict` |  |
| `bridgeUrl` | `str` | Production bridge URL |
| `createdAt` | `str` |  |
| `createdBy` | `str` | Mongo user id of the user who created the agent |
| `description` | `str` |  |
| `devBridgeActive` | `bool` | Whether the dev bridge override is active |
| `devBridgeUrl` | `str` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `str` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `str` |  |
| `identifier` | `str` | Required when not adopting an existing managed agent. |
| `integrations` | `list` |  |
| `managedRuntime` | `Any` | Present when runtime is "managed". |
| `name` | `str` | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `str` |  |
| `runtime` | `str` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `str` |  |
| `visibility` | `str` | Discovery scope of the agent. |

#### Example: Load

```python
agent = client.Agent().load({"id": "agent_id"})
```

#### Example: Create

```python
agent = client.Agent().create({
    "active": True,  # bool
    "behavior": {},  # dict
    "createdAt": "example_createdAt",  # str
    "environmentId": "example_environmentId",  # str
    "id": "example_id",  # str
    "identifier": "example_identifier",  # str
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### AgentIntegrationResponseDto

Create an instance: `agent_integration_response_dto = client.AgentIntegrationResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `str` |  |
| `connectedAt` | `dict` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `str` |  |
| `environmentId` | `str` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `str` | Agent–integration link document id. |
| `integration` | `dict` |  |
| `integrationIdentifier` | `str` | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `str` |  |
| `providerId` | `str` | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `str` |  |

#### Example: Create

```python
agent_integration_response_dto = client.AgentIntegrationResponseDto().create({
    "identifier": "example_identifier",  # str
    "agentId": "example_agentId",  # str
    "createdAt": "example_createdAt",  # str
    "environmentId": "example_environmentId",  # str
    "id": "example_id",  # str
    "integration": {},  # dict
    "organizationId": "example_organizationId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### AgentResponseDto

Create an instance: `agent_response_dto = client.AgentResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `behavior` | `dict` |  |
| `bridgeUrl` | `str` | Production bridge URL |
| `createdAt` | `str` |  |
| `createdBy` | `str` | Mongo user id of the user who created the agent |
| `description` | `str` |  |
| `devBridgeActive` | `bool` | Whether the dev bridge override is active |
| `devBridgeUrl` | `str` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `str` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `str` |  |
| `identifier` | `str` |  |
| `integrations` | `list` |  |
| `managedRuntime` | `Any` | Present when runtime is "managed". |
| `name` | `str` |  |
| `organizationId` | `str` |  |
| `runtime` | `str` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `str` |  |
| `visibility` | `str` | Discovery scope of the agent. |


### Bulk

Create an instance: `bulk = client.Bulk()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscribers` | `list` | An array of subscribers to be created in bulk. |

#### Example: Create

```python
bulk = client.Bulk().create({
    "subscribers": [],  # list
})
```


### ChannelConnection

Create an instance: `channel_connection = client.ChannelConnection()`

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
| `auth` | `dict` |  |
| `channel` | `str` | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `str` | Connection mode that determines how the channel connection is scoped. |
| `context` | `dict` |  |
| `contextKeys` | `list` | The context of the channel connection |
| `createdAt` | `str` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `str` |  |
| `identifier` | `str` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `str` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `dict` |  |

#### Example: Load

```python
channel_connection = client.ChannelConnection().load({"id": "channel_connection_id"})
```

#### Example: Create

```python
channel_connection = client.ChannelConnection().create({
    "auth": {},  # dict
    "channel": "example_channel",  # str
    "contextKeys": [],  # list
    "createdAt": "example_createdAt",  # str
    "identifier": "example_identifier",  # str
    "integrationIdentifier": "example_integrationIdentifier",  # str
    "providerId": "example_providerId",  # str
    "subscriberId": "example_subscriberId",  # str
    "updatedAt": "example_updatedAt",  # str
    "workspace": {},  # dict
})
```


### ChannelEndpoint

Create an instance: `channel_endpoint = client.ChannelEndpoint()`

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
| `channel` | `str` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `str` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `list` | The context of the channel connection |
| `createdAt` | `str` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Any` | Endpoint data specific to the channel type |
| `id` | `str` |  |
| `identifier` | `str` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | The subscriber ID to which the channel endpoint is linked |
| `type` | `str` | Type of channel endpoint |
| `updatedAt` | `str` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

#### Example: Load

```python
channel_endpoint = client.ChannelEndpoint().load({"id": "channel_endpoint_id"})
```

#### Example: Create

```python
channel_endpoint = client.ChannelEndpoint().create({
    "channel": "example_channel",  # str
    "connectionIdentifier": "example_connectionIdentifier",  # str
    "contextKeys": [],  # list
    "createdAt": "example_createdAt",  # str
    "endpoint": "example_endpoint",  # Any
    "identifier": "example_identifier",  # str
    "integrationIdentifier": "example_integrationIdentifier",  # str
    "providerId": "example_providerId",  # str
    "subscriberId": "example_subscriberId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Configure

Create an instance: `configure = client.Configure()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `botUsername` | `str` | Resolved bot username from getMe |
| `configuredAt` | `str` | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `str` | URL Novu registered with Telegram for incoming updates |

#### Example: Create

```python
configure = client.Configure().create({
    "integration_id": "example_integration_id",  # str
    "botUsername": "example_botUsername",  # str
    "configuredAt": "example_configuredAt",  # str
    "webhookUrl": "example_webhookUrl",  # str
})
```


### Context

Create an instance: `context = client.Context()`

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
| `bridgeUrl` | `str` | Optional bridge URL override for agent connect. |
| `data` | `dict` | Optional custom data to associate with this context. |
| `id` | `str` | Unique identifier for this context. |
| `type` | `str` | Context type (e.g., tenant, app, workspace). |

#### Example: Load

```python
context = client.Context().load({"id": "context_id", "type": "type"})
```

#### Example: Create

```python
context = client.Context().create({
    "id": "example_id",  # str
    "type": "example_type",  # str
})
```


### CreateSubscriptionsResponseDto

Create an instance: `create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `dict` |  |
| `name` | `str` | The name of the topic |
| `preferences` | `list` | The preferences of the topic. |
| `subscriberIds` | `list` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `list` | List of subscriptions to subscribe to the topic (max: 100). |

#### Example: Create

```python
create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto().create({
    "topic_key": "example_topic_key",  # str
})
```


### Diff

Create an instance: `diff = client.Diff()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resources` | `list` | Diff resources by resource type |
| `sourceEnvironmentId` | `str` | Source environment ID |
| `summary` | `Any` | Overall summary |
| `targetEnvironmentId` | `str` | Target environment ID |

#### Example: Create

```python
diff = client.Diff().create({
    "environment_id": "example_environment_id",  # str
    "resources": [],  # list
    "sourceEnvironmentId": "example_sourceEnvironmentId",  # str
    "summary": "example_summary",  # Any
    "targetEnvironmentId": "example_targetEnvironmentId",  # str
})
```


### Domain

Create an instance: `domain = client.Domain()`

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
| `createdAt` | `str` |  |
| `data` | `dict` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `str` |  |
| `environmentId` | `str` |  |
| `expectedDnsRecords` | `list` |  |
| `id` | `str` |  |
| `mxRecordConfigured` | `bool` |  |
| `name` | `str` | The domain name (e.g. |
| `organizationId` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: Load

```python
domain = client.Domain().load({"id": "domain_id"})
```

#### Example: Create

```python
domain = client.Domain().create({
    "createdAt": "example_createdAt",  # str
    "environmentId": "example_environmentId",  # str
    "id": "example_id",  # str
    "mxRecordConfigured": True,  # bool
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### DomainConnectApplyUrlResponseDto

Create an instance: `domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redirectUri` | `str` | Dashboard URL to return to after the DNS provider consent flow completes. |

#### Example: Create

```python
domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto().create({
    "domain_id": "example_domain_id",  # str
})
```


### DomainConnectStatusResponseDto

Create an instance: `domain_connect_status_response_dto = client.DomainConnectStatusResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
domain_connect_status_response_dtos = client.DomainConnectStatusResponseDto().list({"id": "example"})
```


### DomainResponseDto

Create an instance: `domain_response_dto = client.DomainResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `data` | `dict` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `str` |  |
| `environmentId` | `str` |  |
| `expectedDnsRecords` | `list` |  |
| `id` | `str` |  |
| `mxRecordConfigured` | `bool` |  |
| `name` | `str` |  |
| `organizationId` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: Create

```python
domain_response_dto = client.DomainResponseDto().create({
    "id": "example_id",  # str
    "createdAt": "example_createdAt",  # str
    "environmentId": "example_environmentId",  # str
    "mxRecordConfigured": True,  # bool
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### DomainRouteResponseDto

Create an instance: `domain_route_response_dto = client.DomainRouteResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `str` | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `dict` | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
domain_route_response_dto = client.DomainRouteResponseDto().load({"address": "address", "domain_id": "domain_id"})
```

#### Example: Create

```python
domain_route_response_dto = client.DomainRouteResponseDto().create({
    "id": "example_id",  # str
})
```


### Environment

Create an instance: `environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKeys` | `list` | List of API keys associated with the environment |
| `bridge` | `dict` |  |
| `color` | `str` | Hex color code for the environment |
| `dns` | `dict` |  |
| `id` | `str` | Unique identifier of the environment |
| `identifier` | `str` | Unique identifier for the environment |
| `name` | `str` | Name of the environment to be created |
| `organizationId` | `str` | Organization ID associated with the environment |
| `parentId` | `str` | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `str` | URL-friendly slug for the environment |
| `type` | `str` | Type of the environment |

#### Example: List

```python
environments = client.Environment().list()
```

#### Example: Create

```python
environment = client.Environment().create({
    "color": "example_color",  # str
    "id": "example_id",  # str
    "identifier": "example_identifier",  # str
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
})
```


### EnvironmentTagsDto

Create an instance: `environment_tags_dto = client.EnvironmentTagsDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
environment_tags_dtos = client.EnvironmentTagsDto().list({"id": "example"})
```


### EnvironmentVariable

Create an instance: `environment_variable = client.EnvironmentVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `id` | `str` |  |
| `isSecret` | `bool` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `str` | Unique key for the variable. |
| `organizationId` | `str` |  |
| `type` | `str` | The type of the variable |
| `updatedAt` | `str` |  |
| `values` | `list` |  |

#### Example: Load

```python
environment_variable = client.EnvironmentVariable().load({"id": "environment_variable_id"})
```

#### Example: List

```python
environment_variables = client.EnvironmentVariable().list()
```

#### Example: Create

```python
environment_variable = client.EnvironmentVariable().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "isSecret": True,  # bool
    "key": "example_key",  # str
    "organizationId": "example_organizationId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
    "values": [],  # list
})
```


### EnvironmentVariableWorkflowInfoDto

Create an instance: `environment_variable_workflow_info_dto = client.EnvironmentVariableWorkflowInfoDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` | The name of the workflow |
| `workflowId` | `str` | The unique identifier of the workflow |

#### Example: List

```python
environment_variable_workflow_info_dtos = client.EnvironmentVariableWorkflowInfoDto().list({"variable_key": "example"})
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GenerateChatOAuthUrlResponseDto

Create an instance: `generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoLinkUser` | `bool` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `str` | Identifier of the channel connection that will be created. |
| `connectionMode` | `str` | Connection mode that determines how the channel connection is scoped. |
| `context` | `dict` |  |
| `contextHash` | `str` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `str` | Integration identifier |
| `mode` | `str` | OAuth flow mode. |
| `scope` | `list` | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `str` | The subscriber ID to associate with the channel connection. |
| `userScope` | `list` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

#### Example: Create

```python
generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto().create({
    "integrationIdentifier": "example_integrationIdentifier",  # str
})
```


### GeneratePreviewResponseDto

Create an instance: `generate_preview_response_dto = client.GeneratePreviewResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `dict` | Optional control values |
| `previewPayload` | `Any` | Optional payload for preview generation |

#### Example: Create

```python
generate_preview_response_dto = client.GeneratePreviewResponseDto().create({
    "step_id": "example_step_id",  # str
    "workflow_id": "example_workflow_id",  # str
})
```


### ImportMasterJsonResponseDto

Create an instance: `import_master_json_response_dto = client.ImportMasterJsonResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed` | `list` | List of resource IDs that failed to import |
| `locale` | `str` | The locale for which translations are being imported |
| `masterJson` | `dict` | Master JSON object containing all translations organized by workflow identifier |
| `message` | `str` | Human-readable message describing the import result |
| `success` | `bool` | Overall success status of the import operation |
| `successful` | `list` | List of resource IDs that were successfully imported |

#### Example: Create

```python
import_master_json_response_dto = client.ImportMasterJsonResponseDto().create({
    "locale": "example_locale",  # str
    "masterJson": {},  # dict
    "message": "example_message",  # str
    "success": True,  # bool
})
```


### InboxNotificationDto

Create an instance: `inbox_notification_dto = client.InboxNotificationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `str` | ISO timestamp when the notification was archived |
| `avatar` | `str` | Avatar URL for the notification |
| `body` | `str` | Body content of the notification |
| `channelType` | `str` | Channel the message was sent on |
| `createdAt` | `str` | ISO timestamp when the notification was created |
| `data` | `dict` | Custom data payload of the notification |
| `deliveredAt` | `list` | Timestamps when the notification was delivered |
| `firstSeenAt` | `str` | ISO timestamp when the notification was first seen |
| `id` | `str` | Unique identifier of the notification |
| `isArchived` | `bool` | Whether the notification has been archived |
| `isRead` | `bool` | Whether the notification has been read |
| `isSeen` | `bool` | Whether the notification has been seen |
| `isSnoozed` | `bool` | Whether the notification is snoozed |
| `primaryAction` | `Any` | Primary action button for the notification |
| `readAt` | `str` | ISO timestamp when the notification was read |
| `redirect` | `Any` | Redirect configuration for the notification |
| `secondaryAction` | `Any` | Secondary action button for the notification |
| `severity` | `str` | Workflow severity |
| `snoozeUntil` | `str` | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `str` | ISO timestamp when the notification will be unsnoozed |
| `subject` | `str` | Subject of the notification |
| `tags` | `list` | Tags associated with the notification |
| `to` | `Any` | Subscriber this notification was sent to |
| `transactionId` | `str` | Transaction identifier of the notification |
| `workflow` | `Any` | Workflow associated with the notification |


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If the integration is active, the validation on the credentials field will run |
| `channel` | `str` | The channel type for the integration. |
| `check` | `bool` | Flag to check the integration status |
| `conditions` | `list` | Legacy StepFilter conditions. |
| `configurations` | `dict` | Configurations for the integration |
| `credentials` | `Any` | The credentials for the integration |
| `deleted` | `bool` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `str` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `str` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `str` | The ID of the associated environment |
| `id` | `str` | The unique identifier of the integration record in the database. |
| `identifier` | `str` | The unique identifier for the integration |
| `kind` | `str` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `str` | The name of the integration |
| `organizationId` | `str` | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Indicates whether this integration is marked as primary. |
| `providerId` | `str` | The provider ID for the integration |
| `rules` | `dict` | JSONLogic used at send time to select this integration. |

#### Example: List

```python
integrations = client.Integration().list()
```

#### Example: Create

```python
integration = client.Integration().create({
    "deleted": True,  # bool
    "organizationId": "example_organizationId",  # str
    "primary": True,  # bool
})
```


### IntegrationResponseDto

Create an instance: `integration_response_dto = client.IntegrationResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Indicates whether the integration is currently active. |
| `channel` | `str` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `list` | Legacy StepFilter conditions. |
| `configurations` | `Any` | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `Any` | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `bool` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `str` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `str` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `str` | The unique identifier for the environment associated with this integration. |
| `id` | `str` | The unique identifier of the integration record in the database. |
| `identifier` | `str` | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `str` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `str` | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `str` | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Indicates whether this integration is marked as primary. |
| `providerId` | `str` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `dict` | JSONLogic used at send time to select this integration. |

#### Example: List

```python
integration_response_dtos = client.IntegrationResponseDto().list()
```

#### Example: Create

```python
integration_response_dto = client.IntegrationResponseDto().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "deleted": True,  # bool
    "environmentId": "example_environmentId",  # str
    "identifier": "example_identifier",  # str
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
    "primary": True,  # bool
    "providerId": "example_providerId",  # str
})
```


### Layout

Create an instance: `layout = client.Layout()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `Any` | Control values for the layout. |
| `controls` | `Any` | Controls metadata for the layout |
| `createdAt` | `str` | Creation timestamp |
| `id` | `str` | Unique internal identifier of the layout |
| `isDefault` | `bool` | Whether the layout is the default layout |
| `isTranslationEnabled` | `bool` | Whether the layout translations are enabled |
| `layoutId` | `str` | Unique identifier for the layout |
| `name` | `str` | Name of the layout |
| `origin` | `str` | Workflow origin |
| `slug` | `str` | Slug of the layout |
| `source` | `str` | Source of layout creation |
| `type` | `str` | Resource type |
| `updatedAt` | `str` | Last updated timestamp |
| `updatedBy` | `Any` | User who last updated the layout |
| `variables` | `dict` | The variables JSON Schema for the layout |

#### Example: Load

```python
layout = client.Layout().load({"id": "layout_id"})
```

#### Example: List

```python
layouts = client.Layout().list()
```

#### Example: Create

```python
layout = client.Layout().create({
    "controls": "example_controls",  # Any
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "isDefault": True,  # bool
    "isTranslationEnabled": True,  # bool
    "layoutId": "example_layoutId",  # str
    "name": "example_name",  # str
    "origin": "example_origin",  # str
    "slug": "example_slug",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### LayoutResponseDto

Create an instance: `layout_response_dto = client.LayoutResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
layout_response_dto = client.LayoutResponseDto().create({
    "id": "example_id",  # str
})
```


### Link

Create an instance: `link = client.Link()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `dict` |  |
| `contextHash` | `str` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `str` | Integration identifier for the chat provider integration |
| `subscriberId` | `str` | External subscriber identifier to link to their chat identity |

#### Example: Create

```python
link = client.Link().create({
    "integrationIdentifier": "example_integrationIdentifier",  # str
    "subscriberId": "example_subscriberId",  # str
})
```


### ListAgentIntegrationsResponseDto

Create an instance: `list_agent_integrations_response_dto = client.ListAgentIntegrationsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `str` |  |
| `connectedAt` | `dict` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `str` |  |
| `environmentId` | `str` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `str` | Agent–integration link document id. |
| `integration` | `dict` |  |
| `organizationId` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: List

```python
list_agent_integrations_response_dtos = client.ListAgentIntegrationsResponseDto().list({"identifier": "example"})
```


### ListAgentsResponseDto

Create an instance: `list_agents_response_dto = client.ListAgentsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `behavior` | `dict` |  |
| `bridgeUrl` | `str` | Production bridge URL |
| `createdAt` | `str` |  |
| `createdBy` | `str` | Mongo user id of the user who created the agent |
| `description` | `str` |  |
| `devBridgeActive` | `bool` | Whether the dev bridge override is active |
| `devBridgeUrl` | `str` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `str` |  |
| `exceedsPlanLimit` | `bool` | Cloud only. |
| `id` | `str` |  |
| `identifier` | `str` |  |
| `integrations` | `list` |  |
| `managedRuntime` | `Any` | Present when runtime is "managed". |
| `name` | `str` |  |
| `organizationId` | `str` |  |
| `runtime` | `str` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `str` |  |
| `visibility` | `str` | Discovery scope of the agent. |

#### Example: List

```python
list_agents_response_dtos = client.ListAgentsResponseDto().list()
```


### ListChannelConnectionsResponseDto

Create an instance: `list_channel_connections_response_dto = client.ListChannelConnectionsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `dict` |  |
| `channel` | `str` | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `list` | The context of the channel connection |
| `createdAt` | `str` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `str` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `str` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `dict` |  |

#### Example: List

```python
list_channel_connections_response_dtos = client.ListChannelConnectionsResponseDto().list()
```


### ListChannelEndpointsResponseDto

Create an instance: `list_channel_endpoints_response_dto = client.ListChannelEndpointsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `str` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `str` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `list` | The context of the channel connection |
| `createdAt` | `str` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Any` | Endpoint data specific to the channel type |
| `identifier` | `str` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | The subscriber ID to which the channel endpoint is linked |
| `type` | `str` | Type of channel endpoint |
| `updatedAt` | `str` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

#### Example: List

```python
list_channel_endpoints_response_dtos = client.ListChannelEndpointsResponseDto().list()
```


### ListContextsResponseDto

Create an instance: `list_contexts_response_dto = client.ListContextsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bridgeUrl` | `str` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `str` | Creation timestamp |
| `data` | `dict` | Custom data associated with this context |
| `id` | `str` | Unique identifier for this context |
| `type` | `str` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `str` | Last update timestamp |

#### Example: List

```python
list_contexts_response_dtos = client.ListContextsResponseDto().list()
```


### ListDomainRoutesResponseDto

Create an instance: `list_domain_routes_response_dto = client.ListDomainRoutesResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` |  |
| `agentId` | `str` | Internal id of the destination agent. |
| `createdAt` | `str` |  |
| `data` | `dict` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `str` |  |
| `environmentId` | `str` |  |
| `id` | `str` |  |
| `organizationId` | `str` |  |
| `type` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: List

```python
list_domain_routes_response_dtos = client.ListDomainRoutesResponseDto().list({"domain_id": "example"})
```


### ListDomainsResponseDto

Create an instance: `list_domains_response_dto = client.ListDomainsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `data` | `dict` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `str` |  |
| `environmentId` | `str` |  |
| `expectedDnsRecords` | `list` |  |
| `id` | `str` |  |
| `mxRecordConfigured` | `bool` |  |
| `name` | `str` |  |
| `organizationId` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: List

```python
list_domains_response_dtos = client.ListDomainsResponseDto().list()
```


### ListSubscribersResponseDto

Create an instance: `list_subscribers_response_dto = client.ListSubscribersResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `str` | The URL of the subscriber's avatar image. |
| `channels` | `list` | An array of channel settings associated with the subscriber. |
| `createdAt` | `str` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `dict` | Additional custom data for the subscriber |
| `deleted` | `bool` | Indicates whether the subscriber has been deleted. |
| `email` | `str` | The email address of the subscriber. |
| `environmentId` | `str` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `str` | The first name of the subscriber. |
| `id` | `str` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | Indicates whether the subscriber is currently online. |
| `lastName` | `str` | The last name of the subscriber. |
| `lastOnlineAt` | `str` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `str` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `str` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `str` | The phone number of the subscriber. |
| `subscriberId` | `str` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `str` | Timezone of the subscriber |
| `topics` | `list` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `str` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | The version of the subscriber document. |

#### Example: List

```python
list_subscribers_response_dtos = client.ListSubscribersResponseDto().list()
```


### ListTopicSubscriptionsResponseDto

Create an instance: `list_topic_subscriptions_response_dto = client.ListTopicSubscriptionsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `list` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `str` | The date and time the subscription was created |
| `id` | `str` | The identifier of the subscription |
| `identifier` | `str` | The identifier of the subscription |
| `preferences` | `list` | The preferences for workflows in this subscription |
| `subscriber` | `Any` | Subscriber information |
| `topic` | `Any` | Topic information |

#### Example: List

```python
list_topic_subscriptions_response_dtos = client.ListTopicSubscriptionsResponseDto().list({"subscriber_id": "example"})
```


### ListTopicsResponseDto

Create an instance: `list_topics_response_dto = client.ListTopicsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date the topic was created |
| `data` | `dict` | Additional custom data associated with the topic |
| `id` | `str` | The identifier of the topic |
| `key` | `str` | The unique key of the topic |
| `name` | `str` | The name of the topic |
| `updatedAt` | `str` | The date the topic was last updated |

#### Example: List

```python
list_topics_response_dtos = client.ListTopicsResponseDto().list()
```


### MasterJson

Create an instance: `master_json = client.MasterJson()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `layouts` | `dict` | All translations for given locale organized by layout identifier |
| `workflows` | `dict` | All translations for given locale organized by workflow identifier |

#### Example: Load

```python
master_json = client.MasterJson().load()
```


### Message

Create an instance: `message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `str` | Channel the message was sent on |
| `content` | `Any` | Content of the message, can be an email block or a string |
| `contextKeys` | `list` | Context (single or multi) in which the message was sent |
| `createdAt` | `str` | Creation date of the message |
| `cta` | `Any` | Call to action associated with the message |
| `deliveredAt` | `list` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `list` | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `str` | Direct webhook URL for the message, if applicable |
| `email` | `str` | Email address associated with the message, if applicable |
| `environmentId` | `str` | Environment ID where the message is sent |
| `errorId` | `str` | Error ID if the message has an error |
| `errorText` | `str` | Error text if the message has an error |
| `feedId` | `str` | Feed ID associated with the message, if applicable |
| `id` | `str` | Unique identifier for the message |
| `lastReadDate` | `str` | Last read date of the message, if available |
| `lastSeenDate` | `str` | Last seen date of the message, if available |
| `messageTemplateId` | `str` | Message template ID |
| `notificationId` | `str` | Notification ID associated with the message |
| `organizationId` | `str` | Organization ID associated with the message |
| `overrides` | `dict` | Provider specific overrides used when triggering the notification |
| `payload` | `dict` | The payload that was used to send the notification trigger |
| `phone` | `str` | Phone number associated with the message, if applicable |
| `providerId` | `str` | Provider ID associated with the message, if applicable |
| `read` | `bool` | Indicates if the message has been read |
| `seen` | `bool` | Indicates if the message has been seen |
| `snoozedUntil` | `str` | Date when the message will be unsnoozed |
| `status` | `str` | Status of the message |
| `subject` | `str` | Subject of the message, if applicable |
| `subscriber` | `Any` | Subscriber details, if available |
| `subscriberId` | `str` | Subscriber ID associated with the message |
| `template` | `Any` | Workflow template associated with the message |
| `templateId` | `str` | Template ID associated with the message |
| `templateIdentifier` | `str` | Identifier for the message template |
| `title` | `str` | Title of the message, if applicable |
| `transactionId` | `str` | Transaction ID associated with the message |

#### Example: List

```python
messages = client.Message().list()
```


### MessageResponseDto

Create an instance: `message_response_dto = client.MessageResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markAs` | `str` |  |
| `messageId` | `Any` |  |
| `payload` | `dict` | Message action payload |
| `status` | `str` | Message action status |

#### Example: Create

```python
message_response_dto = client.MessageResponseDto().create({
    "subscriber_id": "example_subscriber_id",  # str
    "markAs": "example_markAs",  # str
    "messageId": "example_messageId",  # Any
    "status": "example_status",  # str
})
```


### NotificationFeedItemDto

Create an instance: `notification_feed_item_dto = client.NotificationFeedItemDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Any` | Actor details related to the notification, if applicable. |
| `archived` | `bool` | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `str` | Channel the message was sent on |
| `content` | `str` | The main content of the notification. |
| `createdAt` | `str` | Timestamp indicating when the notification was created. |
| `cta` | `Any` | Call-to-action information associated with the notification. |
| `data` | `dict` | The data sent with the notification. |
| `deviceTokens` | `list` | Device tokens for push notifications, if applicable. |
| `environmentId` | `str` | Identifier for the environment where the notification is sent. |
| `feedId` | `str` | Identifier for the feed associated with the notification. |
| `id` | `str` | Unique identifier for the notification. |
| `jobId` | `str` | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `str` | Identifier for the message template used. |
| `notificationId` | `str` | Unique identifier for the notification instance. |
| `organizationId` | `str` | Identifier for the organization sending the notification. |
| `overrides` | `dict` | Provider-specific overrides used when triggering the notification. |
| `payload` | `dict` | The payload that was used to send the notification trigger. |
| `providerId` | `str` | Identifier for the provider that sends the notification. |
| `read` | `bool` | Indicates whether the notification has been read by the subscriber. |
| `seen` | `bool` | Indicates whether the notification has been seen by the subscriber. |
| `status` | `str` | Current status of the notification. |
| `subject` | `str` | The subject line for email notifications, if applicable. |
| `subscriber` | `Any` | Subscriber details associated with this notification. |
| `subscriberId` | `str` | Unique identifier for the subscriber receiving the notification. |
| `tags` | `list` | Tags associated with the workflow that triggered the notification. |
| `templateId` | `str` | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `str` | Identifier for the template used, if applicable. |
| `transactionId` | `str` | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `str` | Timestamp indicating when the notification was last updated. |

#### Example: List

```python
notification_feed_item_dtos = client.NotificationFeedItemDto().list({"subscriber_id": "example"})
```


### PreferencesResponseDto

Create an instance: `preferences_response_dto = client.PreferencesResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `dict` |  |
| `preferences` | `list` | Array of workflow preferences to update (maximum 100 items) |


### Publish

Create an instance: `publish = client.Publish()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dryRun` | `bool` | Perform a dry run without making actual changes |
| `resources` | `list` | Array of specific resources to publish. |
| `results` | `list` | Sync results by resource type |
| `sourceEnvironmentId` | `str` | Source environment ID to sync from. |
| `summary` | `Any` | Summary of the sync operation |

#### Example: Create

```python
publish = client.Publish().create({
    "environment_id": "example_environment_id",  # str
    "results": [],  # list
    "summary": "example_summary",  # Any
})
```


### RemoveSubscriberResponseDto

Create an instance: `remove_subscriber_response_dto = client.RemoveSubscriberResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Step

Create an instance: `step = client.Step()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `dict` | Control values for the step (alias for controls.values) |
| `controls` | `Any` | Controls metadata for the step |
| `id` | `str` | Database identifier of the step |
| `issues` | `Any` | Issues associated with the step |
| `name` | `str` | Name of the step |
| `origin` | `str` | Workflow origin |
| `providerOverrides` | `dict` | Per-provider content overrides keyed by providerId. |
| `slug` | `str` | Slug of the step |
| `stepId` | `str` | Unique identifier of the step |
| `stepResolverHash` | `str` | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `str` | Type of the step |
| `variables` | `dict` | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `str` | Workflow database identifier |
| `workflowId` | `str` | Workflow identifier |

#### Example: Load

```python
step = client.Step().load({"id": "step_id", "workflow_id": "workflow_id"})
```


### Subscriber

Create an instance: `subscriber = client.Subscriber()`

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
| `avatar` | `str` | The URL of the subscriber's avatar image. |
| `channels` | `list` | An array of channel settings associated with the subscriber. |
| `createdAt` | `str` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `dict` | Additional custom data for the subscriber |
| `deleted` | `bool` | Indicates whether the subscriber has been deleted. |
| `email` | `str` | The email address of the subscriber. |
| `environmentId` | `str` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `str` | The first name of the subscriber. |
| `id` | `str` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | Indicates whether the subscriber is currently online. |
| `lastName` | `str` | The last name of the subscriber. |
| `lastOnlineAt` | `str` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `str` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `str` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `str` | The phone number of the subscriber. |
| `subscriberId` | `str` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `str` | Timezone of the subscriber |
| `topics` | `list` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `str` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | The version of the subscriber document. |

#### Example: Load

```python
subscriber = client.Subscriber().load({"id": "subscriber_id"})
```

#### Example: Create

```python
subscriber = client.Subscriber().create({
    "createdAt": "example_createdAt",  # str
    "deleted": True,  # bool
    "environmentId": "example_environmentId",  # str
    "organizationId": "example_organizationId",  # str
    "subscriberId": "example_subscriberId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### SubscriberNotificationsCountResponseDto

Create an instance: `subscriber_notifications_count_response_dto = client.SubscriberNotificationsCountResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `float` | The count of notifications matching the filter |
| `filter` | `dict` | The filter applied |

#### Example: List

```python
subscriber_notifications_count_response_dtos = client.SubscriberNotificationsCountResponseDto().list({"subscriber_id": "example", "filter": "example"})
```


### SubscriberNotificationsResponseDto

Create an instance: `subscriber_notifications_response_dto = client.SubscriberNotificationsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
subscriber_notifications_response_dtos = client.SubscriberNotificationsResponseDto().list({"id": "example"})
```


### SubscriberPreferencesDto

Create an instance: `subscriber_preferences_dto = client.SubscriberPreferencesDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
subscriber_preferences_dtos = client.SubscriberPreferencesDto().list({"id": "example"})
```


### SubscriberResponseDto

Create an instance: `subscriber_response_dto = client.SubscriberResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `str` | The URL of the subscriber's avatar image. |
| `channels` | `list` | An array of channel settings associated with the subscriber. |
| `createdAt` | `str` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `dict` | Additional custom data for the subscriber |
| `deleted` | `bool` | Indicates whether the subscriber has been deleted. |
| `email` | `str` | The email address of the subscriber. |
| `environmentId` | `str` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `str` | The first name of the subscriber. |
| `id` | `str` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | Indicates whether the subscriber is currently online. |
| `lastName` | `str` | The last name of the subscriber. |
| `lastOnlineAt` | `str` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `str` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `str` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `str` | The phone number of the subscriber. |
| `subscriberId` | `str` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `str` | Timezone of the subscriber |
| `topics` | `list` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `str` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | The version of the subscriber document. |


### Subscription

Create an instance: `subscription = client.Subscription()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `list` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `str` | The creation date of the subscription |
| `id` | `str` | The unique identifier of the subscription |
| `identifier` | `str` | The identifier of the subscription |
| `name` | `str` | The name of the subscription |
| `preferences` | `list` | The preferences/rules for the subscription |
| `subscriber` | `Any` | The subscriber information |
| `topic` | `Any` | The topic information |
| `updatedAt` | `str` | The last update date of the subscription |

#### Example: Load

```python
subscription = client.Subscription().load({"id": "subscription_id", "topic_id": "topic_id"})
```


### Topic

Create an instance: `topic = client.Topic()`

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
| `data` | `dict` | Additional custom data associated with the topic. |
| `id` | `str` |  |
| `key` | `str` | The unique key identifier for the topic. |
| `name` | `str` | The display name for the topic |

#### Example: Load

```python
topic = client.Topic().load({"id": "topic_id"})
```

#### Example: Create

```python
topic = client.Topic().create({
    "key": "example_key",  # str
})
```


### TopicSubscriberDto

Create an instance: `topic_subscriber_dto = client.TopicSubscriberDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `environmentId` | `str` | Unique identifier for the environment |
| `externalSubscriberId` | `str` | External identifier for the subscriber |
| `organizationId` | `str` | Unique identifier for the organization |
| `subscriberId` | `str` | Unique identifier for the subscriber |
| `topicId` | `str` | Unique identifier for the topic |
| `topicKey` | `str` | Key associated with the topic |

#### Example: Load

```python
topic_subscriber_dto = client.TopicSubscriberDto().load({"external_subscriber_id": "external_subscriber_id", "topic_id": "topic_id"})
```


### TopicSubscriptionsResponseDto

Create an instance: `topic_subscriptions_response_dto = client.TopicSubscriptionsResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Translation

Create an instance: `translation = client.Translation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `dict` | Translation content as JSON object |
| `id` | `str` |  |
| `locale` | `str` | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `str` | The resource ID to associate translation with. |
| `resourceType` | `str` | The resource type to associate translation with |

#### Example: Load

```python
translation = client.Translation().load({"locale": "locale", "resource_id": "resource_id", "resource_type": "resource_type"})
```

#### Example: Create

```python
translation = client.Translation().create({
    "content": {},  # dict
    "locale": "example_locale",  # str
    "resourceId": "example_resourceId",  # str
    "resourceType": "example_resourceType",  # str
})
```


### TranslationGroupDto

Create an instance: `translation_group_dto = client.TranslationGroupDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | Creation timestamp |
| `id` | `str` |  |
| `locales` | `list` | Array of available locales for this resource |
| `outdatedLocales` | `list` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `str` | Resource identifier (slugified ID) |
| `resourceName` | `str` | Resource name (e.g., workflow name) |
| `resourceType` | `str` | Resource type |
| `updatedAt` | `str` | Last update timestamp |

#### Example: Load

```python
translation_group_dto = client.TranslationGroupDto().load({"resource_id": "resource_id", "resource_type": "resource_type"})
```


### Trigger

Create an instance: `trigger = client.Trigger()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `str` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `str` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `dict` |  |
| `name` | `str` | The trigger identifier of the workflow you wish to send. |
| `overrides` | `Any` | This could be used to override provider specific configurations |
| `payload` | `dict` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `Any` | It is used to specify a tenant context during trigger event. |
| `to` | `Any` | The recipients list of people who will receive the notification. |
| `transactionId` | `str` | A unique identifier for deduplication. |

#### Example: Create

```python
trigger = client.Trigger().create({
    "name": "example_name",  # str
    "to": "example_to",  # Any
})
```


### TriggerEventResponseDto

Create an instance: `trigger_event_response_dto = client.TriggerEventResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledged` | `bool` | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `str` | Link to the activity feed for this trigger event |
| `actor` | `Any` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `str` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `dict` |  |
| `error` | `list` | In case of an error, this field will contain the error message(s) |
| `events` | `list` |  |
| `jobData` | `dict` |  |
| `name` | `str` | The trigger identifier associated for the template you wish to send. |
| `overrides` | `Any` | This could be used to override provider specific configurations |
| `payload` | `dict` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `str` | Status of the trigger |
| `tenant` | `Any` | It is used to specify a tenant context during trigger event. |
| `transactionId` | `str` | The returned transaction ID of the trigger |

#### Example: Create

```python
trigger_event_response_dto = client.TriggerEventResponseDto().create({
    "acknowledged": True,  # bool
    "events": [],  # list
    "name": "example_name",  # str
    "payload": {},  # dict
    "status": "example_status",  # str
})
```


### Unseen

Create an instance: `unseen = client.Unseen()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `float` |  |

#### Example: Load

```python
unseen = client.Unseen().load({"subscriber_id": "subscriber_id"})
```


### Upload

Create an instance: `upload = client.Upload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | List of error messages for failed uploads |
| `failedUploads` | `float` | Number of files that failed to upload |
| `successfulUploads` | `float` | Number of files successfully uploaded |
| `totalFiles` | `float` | Total number of files processed |

#### Example: Create

```python
upload = client.Upload().create({
    "errors": [],  # list
    "failedUploads": 1,  # float
    "successfulUploads": 1,  # float
    "totalFiles": 1,  # float
})
```


### WebhookResultDto

Create an instance: `webhook_result_dto = client.WebhookResultDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
webhook_result_dto = client.WebhookResultDto().create({
    "environment_id": "example_environment_id",  # str
    "integration_id": "example_integration_id",  # str
})
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the workflow is active |
| `agent` | `Any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `str` | Creation timestamp |
| `description` | `str` | Description of the workflow |
| `id` | `str` | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | Enable or disable translations for this workflow |
| `issues` | `dict` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `str` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Any` | User who last published the workflow |
| `lastTriggeredAt` | `str` | Timestamp of the last workflow trigger |
| `name` | `str` | Name of the workflow |
| `origin` | `str` | Workflow origin |
| `payloadExample` | `dict` | Generated payload example based on the payload schema |
| `payloadSchema` | `dict` | The payload JSON Schema for the workflow |
| `preferences` | `Any` | Preferences for the workflow |
| `severity` | `str` | Workflow severity |
| `slug` | `str` | Slug of the workflow |
| `source` | `str` | Source of workflow creation |
| `status` | `str` | Workflow status |
| `stepTypeOverviews` | `list` | Overview of step types in the workflow |
| `steps` | `list` | Steps of the workflow |
| `tags` | `list` | Tags associated with the workflow |
| `updatedAt` | `str` | Last updated timestamp |
| `updatedBy` | `Any` | User who last updated the workflow |
| `validatePayload` | `bool` | Enable or disable payload schema validation |
| `workflowId` | `str` | Workflow identifier |

#### Example: Load

```python
workflow = client.Workflow().load({"id": "workflow_id"})
```

#### Example: List

```python
workflows = client.Workflow().list()
```

#### Example: Create

```python
workflow = client.Workflow().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "origin": "example_origin",  # str
    "preferences": "example_preferences",  # Any
    "severity": "example_severity",  # str
    "slug": "example_slug",  # str
    "status": "example_status",  # str
    "stepTypeOverviews": [],  # list
    "steps": [],  # list
    "updatedAt": "example_updatedAt",  # str
    "workflowId": "example_workflowId",  # str
})
```


### WorkflowInfoDto

Create an instance: `workflow_info_dto = client.WorkflowInfoDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` | The name of the workflow |
| `workflowId` | `str` | The unique identifier of the workflow |

#### Example: List

```python
workflow_info_dtos = client.WorkflowInfoDto().list({"layout_id": "example"})
```


### WorkflowResponseDto

Create an instance: `workflow_response_dto = client.WorkflowResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the workflow is active |
| `agent` | `Any` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `str` | Creation timestamp |
| `description` | `str` | Description of the workflow |
| `id` | `str` | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | Enable or disable translations for this workflow |
| `issues` | `dict` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `str` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Any` | User who last published the workflow |
| `lastTriggeredAt` | `str` | Timestamp of the last workflow trigger |
| `name` | `str` | Name of the workflow |
| `origin` | `str` | Workflow origin |
| `payloadExample` | `dict` | Generated payload example based on the payload schema |
| `payloadSchema` | `dict` | The payload JSON Schema for the workflow |
| `preferences` | `Any` | Preferences for the workflow |
| `severity` | `str` | Workflow severity |
| `slug` | `str` | Slug of the workflow |
| `status` | `str` | Workflow status |
| `steps` | `list` | Steps of the workflow |
| `tags` | `list` | Tags associated with the workflow |
| `updatedAt` | `str` | Last updated timestamp |
| `updatedBy` | `Any` | User who last updated the workflow |
| `validatePayload` | `bool` | Enable or disable payload schema validation |
| `workflowId` | `str` | Workflow identifier |

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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── novu_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`novu_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
environmentvariable = client.EnvironmentVariable()
environmentvariable.list()

# environmentvariable.data_get() now returns the environmentvariable data from the last list
# environmentvariable.match_get() returns the last match criteria
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
