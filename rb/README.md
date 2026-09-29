# Novu Ruby SDK



The Ruby SDK for the Novu API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ActivityNotificationResponseDto` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/novu-sdk/releases)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/novu-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-novu-sdk", path: "./novu-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Novu_sdk"

client = NovuSDK.new({
  "apikey" => ENV["NOVU_APIKEY"],
})
```

### 2. List activitynotificationresponsedto records

```ruby
begin
  # list returns an Array of ActivityNotificationResponseDto records — iterate directly.
  activitynotificationresponsedtos = client.ActivityNotificationResponseDto.list
  activitynotificationresponsedtos.each do |item|
    puts "#{item["id"]} #{item["channels"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a domainrouteresponsedto

DomainRouteResponseDto is nested under address, so provide the `address`.

```ruby
begin
  # load returns the ENTITY — call data_get for the DomainRouteResponseDto record (raises on error).
  domainrouteresponsedto = client.DomainRouteResponseDto.load({ "address" => "example_address", "domain_id" => "example_domain_id" })
  puts domainrouteresponsedto
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  environmentvariables = client.EnvironmentVariable.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = NovuSDK.test({
  "entity" => { "environmentvariable" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
environmentvariable = client.EnvironmentVariable.list()
puts environmentvariable
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = NovuSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### NovuSDK

```ruby
require_relative "Novu_sdk"
client = NovuSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = NovuSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### NovuSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `ListDomainRoutesResponseDto` | `(data) -> ListDomainRoutesResponseDtoEntity` | Create a ListDomainRoutesResponseDto entity instance. |
| `ListTopicSubscriptionsResponseDto` | `(data) -> ListTopicSubscriptionsResponseDtoEntity` | Create a ListTopicSubscriptionsResponseDto entity instance. |
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
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `NovuError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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
| `bridgeUrl` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | Creation timestamp |
| `data` | Custom data associated with this context |
| `id` | Unique identifier for this context |
| `type` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | Last update timestamp |

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, Remove.

API path: `/v1/events/trigger`

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

Operations: Create, List, Load, Remove, Update.

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
| `createdAt` | The date the topic was created |
| `data` | Additional custom data associated with the topic |
| `id` | The identifier of the topic |
| `key` | The unique key of the topic |
| `name` | The name of the topic |
| `updatedAt` | The date the topic was last updated |

Operations: Create, List, Load, Remove, Update.

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
| `createdAt` | Creation timestamp |
| `id` |  |
| `locale` | Locale code |
| `resourceId` | Resource identifier |
| `resourceType` | Resource type |
| `updatedAt` | Last update timestamp |

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

Create an instance: `activity_notification_response_dto = client.ActivityNotificationResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `Array` |  |
| `contextKeys` | `Array` | Context (single or multi) in which the notification was sent |
| `controls` | `Hash` | Controls associated with the notification |
| `createdAt` | `String` | Creation time of the notification |
| `critical` | `Boolean` | Criticality of the notification |
| `digestedNotificationId` | `String` | Digested Notification ID |
| `environmentId` | `String` | Environment ID of the notification |
| `id` | `String` | Unique identifier of the notification |
| `jobs` | `Array` | Jobs of the notification |
| `organizationId` | `String` | Organization ID of the notification |
| `payload` | `Hash` | Payload of the notification |
| `severity` | `String` | Workflow severity |
| `subscriber` | `Object` | Subscriber of the notification |
| `subscriberId` | `String` | Subscriber ID of the notification |
| `tags` | `Array` | Tags associated with the notification |
| `template` | `Object` | Template of the notification |
| `templateId` | `String` | Template ID of the notification |
| `to` | `Hash` | To field for subscriber definition |
| `topics` | `Array` | Topics of the notification |
| `transactionId` | `String` | Transaction ID of the notification |
| `updatedAt` | `String` | Last updated time of the notification |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ActivityNotificationResponseDto record (raises on error).
activity_notification_response_dto = client.ActivityNotificationResponseDto.load({ "notification_id" => "notification_id" })
```

#### Example: List

```ruby
# list returns an Array of ActivityNotificationResponseDto records (raises on error).
activity_notification_response_dtos = client.ActivityNotificationResponseDto.list
```


### Agent

Create an instance: `agent = client.Agent`

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
| `active` | `Boolean` |  |
| `behavior` | `Hash` |  |
| `bridgeUrl` | `String` | Production bridge URL |
| `createdAt` | `String` |  |
| `createdBy` | `String` | Mongo user id of the user who created the agent |
| `description` | `String` |  |
| `devBridgeActive` | `Boolean` | Whether the dev bridge override is active |
| `devBridgeUrl` | `String` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `String` |  |
| `exceedsPlanLimit` | `Boolean` | Cloud only. |
| `id` | `String` |  |
| `identifier` | `String` | Required when not adopting an existing managed agent. |
| `integrations` | `Array` |  |
| `managedRuntime` | `Object` | Present when runtime is "managed". |
| `name` | `String` | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `String` |  |
| `runtime` | `String` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `String` |  |
| `visibility` | `String` | Discovery scope of the agent. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Agent record (raises on error).
agent = client.Agent.load({ "id" => "agent_id" })
```

#### Example: List

```ruby
# list returns an Array of Agent records (raises on error).
agents = client.Agent.list
```

#### Example: Create

```ruby
agent = client.Agent.create({
  "active" => true, # Boolean
  "behavior" => {}, # Hash
  "createdAt" => "example_createdAt", # String
  "environmentId" => "example_environmentId", # String
  "id" => "example_id", # String
  "identifier" => "example_identifier", # String
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### AgentIntegrationResponseDto

Create an instance: `agent_integration_response_dto = client.AgentIntegrationResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `String` |  |
| `connectedAt` | `Hash` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `String` |  |
| `environmentId` | `String` |  |
| `exceedsPlanLimit` | `Boolean` | Cloud only. |
| `id` | `String` | Agent–integration link document id. |
| `integration` | `Hash` |  |
| `integrationIdentifier` | `String` | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `String` |  |
| `providerId` | `String` | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
agent_integration_response_dto = client.AgentIntegrationResponseDto.create({
  "identifier" => "example_identifier", # String
  "agentId" => "example_agentId", # String
  "createdAt" => "example_createdAt", # String
  "environmentId" => "example_environmentId", # String
  "id" => "example_id", # String
  "integration" => {}, # Hash
  "organizationId" => "example_organizationId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### AgentResponseDto

Create an instance: `agent_response_dto = client.AgentResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `behavior` | `Hash` |  |
| `bridgeUrl` | `String` | Production bridge URL |
| `createdAt` | `String` |  |
| `createdBy` | `String` | Mongo user id of the user who created the agent |
| `description` | `String` |  |
| `devBridgeActive` | `Boolean` | Whether the dev bridge override is active |
| `devBridgeUrl` | `String` | Development bridge URL (set by npx novu dev) |
| `environmentId` | `String` |  |
| `exceedsPlanLimit` | `Boolean` | Cloud only. |
| `id` | `String` |  |
| `identifier` | `String` |  |
| `integrations` | `Array` |  |
| `managedRuntime` | `Object` | Present when runtime is "managed". |
| `name` | `String` |  |
| `organizationId` | `String` |  |
| `runtime` | `String` | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `String` |  |
| `visibility` | `String` | Discovery scope of the agent. |


### Bulk

Create an instance: `bulk = client.Bulk`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscribers` | `Array` | An array of subscribers to be created in bulk. |

#### Example: Create

```ruby
bulk = client.Bulk.create({
  "subscribers" => [], # Array
})
```


### ChannelConnection

Create an instance: `channel_connection = client.ChannelConnection`

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
| `auth` | `Hash` |  |
| `channel` | `String` | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `String` | Connection mode that determines how the channel connection is scoped. |
| `context` | `Hash` |  |
| `contextKeys` | `Array` | The context of the channel connection |
| `createdAt` | `String` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `String` |  |
| `identifier` | `String` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `String` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ChannelConnection record (raises on error).
channel_connection = client.ChannelConnection.load({ "id" => "channel_connection_id" })
```

#### Example: List

```ruby
# list returns an Array of ChannelConnection records (raises on error).
channel_connections = client.ChannelConnection.list
```

#### Example: Create

```ruby
channel_connection = client.ChannelConnection.create({
  "auth" => {}, # Hash
  "channel" => "example_channel", # String
  "contextKeys" => [], # Array
  "createdAt" => "example_createdAt", # String
  "identifier" => "example_identifier", # String
  "integrationIdentifier" => "example_integrationIdentifier", # String
  "providerId" => "example_providerId", # String
  "subscriberId" => "example_subscriberId", # String
  "updatedAt" => "example_updatedAt", # String
  "workspace" => {}, # Hash
})
```


### ChannelEndpoint

Create an instance: `channel_endpoint = client.ChannelEndpoint`

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
| `channel` | `String` | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `String` | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `Array` | The context of the channel connection |
| `createdAt` | `String` | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Object` | Endpoint data specific to the channel type |
| `id` | `String` |  |
| `identifier` | `String` | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | The subscriber ID to which the channel endpoint is linked |
| `type` | `String` | Type of channel endpoint |
| `updatedAt` | `String` | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ChannelEndpoint record (raises on error).
channel_endpoint = client.ChannelEndpoint.load({ "id" => "channel_endpoint_id" })
```

#### Example: List

```ruby
# list returns an Array of ChannelEndpoint records (raises on error).
channel_endpoints = client.ChannelEndpoint.list
```

#### Example: Create

```ruby
channel_endpoint = client.ChannelEndpoint.create({
  "channel" => "example_channel", # String
  "connectionIdentifier" => "example_connectionIdentifier", # String
  "contextKeys" => [], # Array
  "createdAt" => "example_createdAt", # String
  "endpoint" => "example_endpoint", # Object
  "identifier" => "example_identifier", # String
  "integrationIdentifier" => "example_integrationIdentifier", # String
  "providerId" => "example_providerId", # String
  "subscriberId" => "example_subscriberId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Configure

Create an instance: `configure = client.Configure`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `botUsername` | `String` | Resolved bot username from getMe |
| `configuredAt` | `String` | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `String` | URL Novu registered with Telegram for incoming updates |

#### Example: Create

```ruby
configure = client.Configure.create({
  "integration_id" => "example_integration_id", # String
  "botUsername" => "example_botUsername", # String
  "configuredAt" => "example_configuredAt", # String
  "webhookUrl" => "example_webhookUrl", # String
})
```


### Context

Create an instance: `context = client.Context`

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
| `bridgeUrl` | `String` | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `String` | Creation timestamp |
| `data` | `Hash` | Custom data associated with this context |
| `id` | `String` | Unique identifier for this context |
| `type` | `String` | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `String` | Last update timestamp |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Context record (raises on error).
context = client.Context.load({ "id" => "context_id", "type" => "type" })
```

#### Example: List

```ruby
# list returns an Array of Context records (raises on error).
contexts = client.Context.list
```

#### Example: Create

```ruby
context = client.Context.create({
  "createdAt" => "example_createdAt", # String
  "data" => {}, # Hash
  "id" => "example_id", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### CreateSubscriptionsResponseDto

Create an instance: `create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `Hash` |  |
| `name` | `String` | The name of the topic |
| `preferences` | `Array` | The preferences of the topic. |
| `subscriberIds` | `Array` | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `Array` | List of subscriptions to subscribe to the topic (max: 100). |

#### Example: Create

```ruby
create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto.create({
  "topic_key" => "example_topic_key", # String
})
```


### Diff

Create an instance: `diff = client.Diff`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resources` | `Array` | Diff resources by resource type |
| `sourceEnvironmentId` | `String` | Source environment ID |
| `summary` | `Object` | Overall summary |
| `targetEnvironmentId` | `String` | Target environment ID |

#### Example: Create

```ruby
diff = client.Diff.create({
  "environment_id" => "example_environment_id", # String
  "resources" => [], # Array
  "sourceEnvironmentId" => "example_sourceEnvironmentId", # String
  "summary" => "example_summary", # Object
  "targetEnvironmentId" => "example_targetEnvironmentId", # String
})
```


### Domain

Create an instance: `domain = client.Domain`

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
| `createdAt` | `String` |  |
| `data` | `Hash` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `String` |  |
| `environmentId` | `String` |  |
| `expectedDnsRecords` | `Array` |  |
| `id` | `String` |  |
| `mxRecordConfigured` | `Boolean` |  |
| `name` | `String` | The domain name (e.g. |
| `organizationId` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Domain record (raises on error).
domain = client.Domain.load({ "id" => "domain_id" })
```

#### Example: List

```ruby
# list returns an Array of Domain records (raises on error).
domains = client.Domain.list
```

#### Example: Create

```ruby
domain = client.Domain.create({
  "createdAt" => "example_createdAt", # String
  "environmentId" => "example_environmentId", # String
  "id" => "example_id", # String
  "mxRecordConfigured" => true, # Boolean
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### DomainConnectApplyUrlResponseDto

Create an instance: `domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redirectUri` | `String` | Dashboard URL to return to after the DNS provider consent flow completes. |

#### Example: Create

```ruby
domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto.create({
  "domain_id" => "example_domain_id", # String
})
```


### DomainConnectStatusResponseDto

Create an instance: `domain_connect_status_response_dto = client.DomainConnectStatusResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of DomainConnectStatusResponseDto records (raises on error).
domain_connect_status_response_dtos = client.DomainConnectStatusResponseDto.list
```


### DomainResponseDto

Create an instance: `domain_response_dto = client.DomainResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `String` |  |
| `data` | `Hash` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `String` |  |
| `environmentId` | `String` |  |
| `expectedDnsRecords` | `Array` |  |
| `id` | `String` |  |
| `mxRecordConfigured` | `Boolean` |  |
| `name` | `String` |  |
| `organizationId` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
domain_response_dto = client.DomainResponseDto.create({
  "id" => "example_id", # String
  "createdAt" => "example_createdAt", # String
  "environmentId" => "example_environmentId", # String
  "mxRecordConfigured" => true, # Boolean
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### DomainRouteResponseDto

Create an instance: `domain_route_response_dto = client.DomainRouteResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` |  |
| `agentId` | `String` | Internal id of the destination agent. |
| `createdAt` | `String` |  |
| `data` | `Hash` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `String` |  |
| `environmentId` | `String` |  |
| `id` | `String` |  |
| `organizationId` | `String` |  |
| `type` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DomainRouteResponseDto record (raises on error).
domain_route_response_dto = client.DomainRouteResponseDto.load({ "address" => "address", "domain_id" => "domain_id" })
```

#### Example: Create

```ruby
domain_route_response_dto = client.DomainRouteResponseDto.create({
  "id" => "example_id", # String
  "address" => "example_address", # String
  "createdAt" => "example_createdAt", # String
  "domainId" => "example_domainId", # String
  "environmentId" => "example_environmentId", # String
  "organizationId" => "example_organizationId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Environment

Create an instance: `environment = client.Environment`

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
| `apiKeys` | `Array` | List of API keys associated with the environment |
| `bridge` | `Hash` |  |
| `color` | `String` | Hex color code for the environment |
| `dns` | `Hash` |  |
| `id` | `String` | Unique identifier of the environment |
| `identifier` | `String` | Unique identifier for the environment |
| `name` | `String` | Name of the environment to be created |
| `organizationId` | `String` | Organization ID associated with the environment |
| `parentId` | `String` | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `String` | URL-friendly slug for the environment |
| `type` | `String` | Type of the environment |

#### Example: List

```ruby
# list returns an Array of Environment records (raises on error).
environments = client.Environment.list
```

#### Example: Create

```ruby
environment = client.Environment.create({
  "color" => "example_color", # String
  "id" => "example_id", # String
  "identifier" => "example_identifier", # String
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
})
```


### EnvironmentTagsDto

Create an instance: `environment_tags_dto = client.EnvironmentTagsDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of EnvironmentTagsDto records (raises on error).
environment_tags_dtos = client.EnvironmentTagsDto.list
```


### EnvironmentVariable

Create an instance: `environment_variable = client.EnvironmentVariable`

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
| `createdAt` | `String` |  |
| `id` | `String` |  |
| `isSecret` | `Boolean` | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `String` | Unique key for the variable. |
| `organizationId` | `String` |  |
| `type` | `String` | The type of the variable |
| `updatedAt` | `String` |  |
| `values` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EnvironmentVariable record (raises on error).
environment_variable = client.EnvironmentVariable.load({ "id" => "environment_variable_id" })
```

#### Example: List

```ruby
# list returns an Array of EnvironmentVariable records (raises on error).
environment_variables = client.EnvironmentVariable.list
```

#### Example: Create

```ruby
environment_variable = client.EnvironmentVariable.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "isSecret" => true, # Boolean
  "key" => "example_key", # String
  "organizationId" => "example_organizationId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
  "values" => [], # Array
})
```


### EnvironmentVariableWorkflowInfoDto

Create an instance: `environment_variable_workflow_info_dto = client.EnvironmentVariableWorkflowInfoDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the workflow |
| `workflowId` | `String` | The unique identifier of the workflow |

#### Example: List

```ruby
# list returns an Array of EnvironmentVariableWorkflowInfoDto records (raises on error).
environment_variable_workflow_info_dtos = client.EnvironmentVariableWorkflowInfoDto.list
```


### Event

Create an instance: `event = client.Event`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Object` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `String` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `String` | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `Hash` |  |
| `name` | `String` | The trigger identifier of the workflow you wish to send. |
| `overrides` | `Object` | This could be used to override provider specific configurations |
| `payload` | `Hash` | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `Object` | It is used to specify a tenant context during trigger event. |
| `to` | `Object` | The recipients list of people who will receive the notification. |
| `transactionId` | `String` | A unique identifier for deduplication. |

#### Example: Create

```ruby
event = client.Event.create({
  "name" => "example_name", # String
  "to" => "example_to", # Object
})
```


### GenerateChatOAuthUrlResponseDto

Create an instance: `generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoLinkUser` | `Boolean` | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `String` | Identifier of the channel connection that will be created. |
| `connectionMode` | `String` | Connection mode that determines how the channel connection is scoped. |
| `context` | `Hash` |  |
| `contextHash` | `String` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `String` | Integration identifier |
| `mode` | `String` | OAuth flow mode. |
| `scope` | `Array` | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `String` | The subscriber ID to associate with the channel connection. |
| `userScope` | `Array` | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

#### Example: Create

```ruby
generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto.create({
  "integrationIdentifier" => "example_integrationIdentifier", # String
})
```


### GeneratePreviewResponseDto

Create an instance: `generate_preview_response_dto = client.GeneratePreviewResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `Hash` | Optional control values |
| `previewPayload` | `Object` | Optional payload for preview generation |

#### Example: Create

```ruby
generate_preview_response_dto = client.GeneratePreviewResponseDto.create({
  "step_id" => "example_step_id", # String
  "workflow_id" => "example_workflow_id", # String
})
```


### ImportMasterJsonResponseDto

Create an instance: `import_master_json_response_dto = client.ImportMasterJsonResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed` | `Array` | List of resource IDs that failed to import |
| `locale` | `String` | The locale for which translations are being imported |
| `masterJson` | `Hash` | Master JSON object containing all translations organized by workflow identifier |
| `message` | `String` | Human-readable message describing the import result |
| `success` | `Boolean` | Overall success status of the import operation |
| `successful` | `Array` | List of resource IDs that were successfully imported |

#### Example: Create

```ruby
import_master_json_response_dto = client.ImportMasterJsonResponseDto.create({
  "locale" => "example_locale", # String
  "masterJson" => {}, # Hash
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```


### InboxNotificationDto

Create an instance: `inbox_notification_dto = client.InboxNotificationDto`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `String` | ISO timestamp when the notification was archived |
| `avatar` | `String` | Avatar URL for the notification |
| `body` | `String` | Body content of the notification |
| `channelType` | `String` | Channel the message was sent on |
| `createdAt` | `String` | ISO timestamp when the notification was created |
| `data` | `Hash` | Custom data payload of the notification |
| `deliveredAt` | `Array` | Timestamps when the notification was delivered |
| `firstSeenAt` | `String` | ISO timestamp when the notification was first seen |
| `id` | `String` | Unique identifier of the notification |
| `isArchived` | `Boolean` | Whether the notification has been archived |
| `isRead` | `Boolean` | Whether the notification has been read |
| `isSeen` | `Boolean` | Whether the notification has been seen |
| `isSnoozed` | `Boolean` | Whether the notification is snoozed |
| `primaryAction` | `Object` | Primary action button for the notification |
| `readAt` | `String` | ISO timestamp when the notification was read |
| `redirect` | `Object` | Redirect configuration for the notification |
| `secondaryAction` | `Object` | Secondary action button for the notification |
| `severity` | `String` | Workflow severity |
| `snoozeUntil` | `String` | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `String` | ISO timestamp when the notification will be unsnoozed |
| `subject` | `String` | Subject of the notification |
| `tags` | `Array` | Tags associated with the notification |
| `to` | `Object` | Subscriber this notification was sent to |
| `transactionId` | `String` | Transaction identifier of the notification |
| `workflow` | `Object` | Workflow associated with the notification |


### Integration

Create an instance: `integration = client.Integration`

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
| `active` | `Boolean` | If the integration is active, the validation on the credentials field will run |
| `channel` | `String` | The channel type for the integration. |
| `check` | `Boolean` | Flag to check the integration status |
| `conditions` | `Array` | Legacy StepFilter conditions. |
| `configurations` | `Hash` | Configurations for the integration |
| `credentials` | `Object` | The credentials for the integration |
| `deleted` | `Boolean` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `String` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `String` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `String` | The ID of the associated environment |
| `id` | `String` | The unique identifier of the integration record in the database. |
| `identifier` | `String` | The unique identifier for the integration |
| `kind` | `String` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `String` | The name of the integration |
| `organizationId` | `String` | The unique identifier for the organization that owns this integration. |
| `primary` | `Boolean` | Indicates whether this integration is marked as primary. |
| `providerId` | `String` | The provider ID for the integration |
| `rules` | `Hash` | JSONLogic used at send time to select this integration. |

#### Example: List

```ruby
# list returns an Array of Integration records (raises on error).
integrations = client.Integration.list
```

#### Example: Create

```ruby
integration = client.Integration.create({
  "deleted" => true, # Boolean
  "organizationId" => "example_organizationId", # String
  "primary" => true, # Boolean
})
```


### IntegrationResponseDto

Create an instance: `integration_response_dto = client.IntegrationResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` | Indicates whether the integration is currently active. |
| `channel` | `String` | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `Array` | Legacy StepFilter conditions. |
| `configurations` | `Object` | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `Object` | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `Boolean` | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `String` | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `String` | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `String` | The unique identifier for the environment associated with this integration. |
| `id` | `String` | The unique identifier of the integration record in the database. |
| `identifier` | `String` | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `String` | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `String` | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `String` | The unique identifier for the organization that owns this integration. |
| `primary` | `Boolean` | Indicates whether this integration is marked as primary. |
| `providerId` | `String` | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `Hash` | JSONLogic used at send time to select this integration. |

#### Example: List

```ruby
# list returns an Array of IntegrationResponseDto records (raises on error).
integration_response_dtos = client.IntegrationResponseDto.list
```

#### Example: Create

```ruby
integration_response_dto = client.IntegrationResponseDto.create({
  "id" => "example_id", # String
  "active" => true, # Boolean
  "deleted" => true, # Boolean
  "environmentId" => "example_environmentId", # String
  "identifier" => "example_identifier", # String
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
  "primary" => true, # Boolean
  "providerId" => "example_providerId", # String
})
```


### Layout

Create an instance: `layout = client.Layout`

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
| `controlValues` | `Object` | Control values for the layout. |
| `controls` | `Object` | Controls metadata for the layout |
| `createdAt` | `String` | Creation timestamp |
| `id` | `String` | Unique internal identifier of the layout |
| `isDefault` | `Boolean` | Whether the layout is the default layout |
| `isTranslationEnabled` | `Boolean` | Whether the layout translations are enabled |
| `layoutId` | `String` | Unique identifier for the layout |
| `name` | `String` | Name of the layout |
| `origin` | `String` | Workflow origin |
| `slug` | `String` | Slug of the layout |
| `source` | `String` | Source of layout creation |
| `type` | `String` | Resource type |
| `updatedAt` | `String` | Last updated timestamp |
| `updatedBy` | `Object` | User who last updated the layout |
| `variables` | `Hash` | The variables JSON Schema for the layout |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Layout record (raises on error).
layout = client.Layout.load({ "id" => "layout_id" })
```

#### Example: List

```ruby
# list returns an Array of Layout records (raises on error).
layouts = client.Layout.list
```

#### Example: Create

```ruby
layout = client.Layout.create({
  "controls" => "example_controls", # Object
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "isDefault" => true, # Boolean
  "isTranslationEnabled" => true, # Boolean
  "layoutId" => "example_layoutId", # String
  "name" => "example_name", # String
  "origin" => "example_origin", # String
  "slug" => "example_slug", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### LayoutResponseDto

Create an instance: `layout_response_dto = client.LayoutResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Create

```ruby
layout_response_dto = client.LayoutResponseDto.create({
  "id" => "example_id", # String
})
```


### Link

Create an instance: `link = client.Link`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `Hash` |  |
| `contextHash` | `String` | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `String` | Integration identifier for the chat provider integration |
| `subscriberId` | `String` | External subscriber identifier to link to their chat identity |

#### Example: Create

```ruby
link = client.Link.create({
  "integrationIdentifier" => "example_integrationIdentifier", # String
  "subscriberId" => "example_subscriberId", # String
})
```


### ListAgentIntegrationsResponseDto

Create an instance: `list_agent_integrations_response_dto = client.ListAgentIntegrationsResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentId` | `String` |  |
| `connectedAt` | `Hash` | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `String` |  |
| `environmentId` | `String` |  |
| `exceedsPlanLimit` | `Boolean` | Cloud only. |
| `id` | `String` | Agent–integration link document id. |
| `integration` | `Hash` |  |
| `organizationId` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListAgentIntegrationsResponseDto records (raises on error).
list_agent_integrations_response_dtos = client.ListAgentIntegrationsResponseDto.list
```


### ListDomainRoutesResponseDto

Create an instance: `list_domain_routes_response_dto = client.ListDomainRoutesResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` |  |
| `agentId` | `String` | Internal id of the destination agent. |
| `createdAt` | `String` |  |
| `data` | `Hash` | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `String` |  |
| `environmentId` | `String` |  |
| `id` | `String` |  |
| `organizationId` | `String` |  |
| `type` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListDomainRoutesResponseDto records (raises on error).
list_domain_routes_response_dtos = client.ListDomainRoutesResponseDto.list
```


### ListTopicSubscriptionsResponseDto

Create an instance: `list_topic_subscriptions_response_dto = client.ListTopicSubscriptionsResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `Array` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `String` | The date and time the subscription was created |
| `id` | `String` | The identifier of the subscription |
| `identifier` | `String` | The identifier of the subscription |
| `preferences` | `Array` | The preferences for workflows in this subscription |
| `subscriber` | `Object` | Subscriber information |
| `topic` | `Object` | Topic information |

#### Example: List

```ruby
# list returns an Array of ListTopicSubscriptionsResponseDto records (raises on error).
list_topic_subscriptions_response_dtos = client.ListTopicSubscriptionsResponseDto.list
```


### MasterJson

Create an instance: `master_json = client.MasterJson`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `layouts` | `Hash` | All translations for given locale organized by layout identifier |
| `workflows` | `Hash` | All translations for given locale organized by workflow identifier |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the MasterJson record (raises on error).
master_json = client.MasterJson.load()
```


### Message

Create an instance: `message = client.Message`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `String` | Channel the message was sent on |
| `content` | `Object` | Content of the message, can be an email block or a string |
| `contextKeys` | `Array` | Context (single or multi) in which the message was sent |
| `createdAt` | `String` | Creation date of the message |
| `cta` | `Object` | Call to action associated with the message |
| `deliveredAt` | `Array` | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `Array` | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `String` | Direct webhook URL for the message, if applicable |
| `email` | `String` | Email address associated with the message, if applicable |
| `environmentId` | `String` | Environment ID where the message is sent |
| `errorId` | `String` | Error ID if the message has an error |
| `errorText` | `String` | Error text if the message has an error |
| `feedId` | `String` | Feed ID associated with the message, if applicable |
| `id` | `String` | Unique identifier for the message |
| `lastReadDate` | `String` | Last read date of the message, if available |
| `lastSeenDate` | `String` | Last seen date of the message, if available |
| `messageTemplateId` | `String` | Message template ID |
| `notificationId` | `String` | Notification ID associated with the message |
| `organizationId` | `String` | Organization ID associated with the message |
| `overrides` | `Hash` | Provider specific overrides used when triggering the notification |
| `payload` | `Hash` | The payload that was used to send the notification trigger |
| `phone` | `String` | Phone number associated with the message, if applicable |
| `providerId` | `String` | Provider ID associated with the message, if applicable |
| `read` | `Boolean` | Indicates if the message has been read |
| `seen` | `Boolean` | Indicates if the message has been seen |
| `snoozedUntil` | `String` | Date when the message will be unsnoozed |
| `status` | `String` | Status of the message |
| `subject` | `String` | Subject of the message, if applicable |
| `subscriber` | `Object` | Subscriber details, if available |
| `subscriberId` | `String` | Subscriber ID associated with the message |
| `template` | `Object` | Workflow template associated with the message |
| `templateId` | `String` | Template ID associated with the message |
| `templateIdentifier` | `String` | Identifier for the message template |
| `title` | `String` | Title of the message, if applicable |
| `transactionId` | `String` | Transaction ID associated with the message |

#### Example: List

```ruby
# list returns an Array of Message records (raises on error).
messages = client.Message.list
```


### MessageResponseDto

Create an instance: `message_response_dto = client.MessageResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markAs` | `String` |  |
| `messageId` | `Object` |  |
| `payload` | `Hash` | Message action payload |
| `status` | `String` | Message action status |

#### Example: Create

```ruby
message_response_dto = client.MessageResponseDto.create({
  "subscriber_id" => "example_subscriber_id", # String
  "markAs" => "example_markAs", # String
  "messageId" => "example_messageId", # Object
  "status" => "example_status", # String
})
```


### NotificationFeedItemDto

Create an instance: `notification_feed_item_dto = client.NotificationFeedItemDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Object` | Actor details related to the notification, if applicable. |
| `archived` | `Boolean` | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `String` | Channel the message was sent on |
| `content` | `String` | The main content of the notification. |
| `createdAt` | `String` | Timestamp indicating when the notification was created. |
| `cta` | `Object` | Call-to-action information associated with the notification. |
| `data` | `Hash` | The data sent with the notification. |
| `deviceTokens` | `Array` | Device tokens for push notifications, if applicable. |
| `environmentId` | `String` | Identifier for the environment where the notification is sent. |
| `feedId` | `String` | Identifier for the feed associated with the notification. |
| `id` | `String` | Unique identifier for the notification. |
| `jobId` | `String` | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `String` | Identifier for the message template used. |
| `notificationId` | `String` | Unique identifier for the notification instance. |
| `organizationId` | `String` | Identifier for the organization sending the notification. |
| `overrides` | `Hash` | Provider-specific overrides used when triggering the notification. |
| `payload` | `Hash` | The payload that was used to send the notification trigger. |
| `providerId` | `String` | Identifier for the provider that sends the notification. |
| `read` | `Boolean` | Indicates whether the notification has been read by the subscriber. |
| `seen` | `Boolean` | Indicates whether the notification has been seen by the subscriber. |
| `status` | `String` | Current status of the notification. |
| `subject` | `String` | The subject line for email notifications, if applicable. |
| `subscriber` | `Object` | Subscriber details associated with this notification. |
| `subscriberId` | `String` | Unique identifier for the subscriber receiving the notification. |
| `tags` | `Array` | Tags associated with the workflow that triggered the notification. |
| `templateId` | `String` | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `String` | Identifier for the template used, if applicable. |
| `transactionId` | `String` | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `String` | Timestamp indicating when the notification was last updated. |

#### Example: List

```ruby
# list returns an Array of NotificationFeedItemDto records (raises on error).
notification_feed_item_dtos = client.NotificationFeedItemDto.list
```


### PreferencesResponseDto

Create an instance: `preferences_response_dto = client.PreferencesResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `Hash` |  |
| `preferences` | `Array` | Array of workflow preferences to update (maximum 100 items) |


### Publish

Create an instance: `publish = client.Publish`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dryRun` | `Boolean` | Perform a dry run without making actual changes |
| `resources` | `Array` | Array of specific resources to publish. |
| `results` | `Array` | Sync results by resource type |
| `sourceEnvironmentId` | `String` | Source environment ID to sync from. |
| `summary` | `Object` | Summary of the sync operation |

#### Example: Create

```ruby
publish = client.Publish.create({
  "environment_id" => "example_environment_id", # String
  "results" => [], # Array
  "summary" => "example_summary", # Object
})
```


### RemoveSubscriberResponseDto

Create an instance: `remove_subscriber_response_dto = client.RemoveSubscriberResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Step

Create an instance: `step = client.Step`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `controlValues` | `Hash` | Control values for the step (alias for controls.values) |
| `controls` | `Object` | Controls metadata for the step |
| `id` | `String` | Database identifier of the step |
| `issues` | `Object` | Issues associated with the step |
| `name` | `String` | Name of the step |
| `origin` | `String` | Workflow origin |
| `providerOverrides` | `Hash` | Per-provider content overrides keyed by providerId. |
| `slug` | `String` | Slug of the step |
| `stepId` | `String` | Unique identifier of the step |
| `stepResolverHash` | `String` | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `String` | Type of the step |
| `variables` | `Hash` | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `String` | Workflow database identifier |
| `workflowId` | `String` | Workflow identifier |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Step record (raises on error).
step = client.Step.load({ "id" => "step_id", "workflow_id" => "workflow_id" })
```


### Subscriber

Create an instance: `subscriber = client.Subscriber`

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
| `avatar` | `String` | The URL of the subscriber's avatar image. |
| `channels` | `Array` | An array of channel settings associated with the subscriber. |
| `createdAt` | `String` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Hash` | Additional custom data for the subscriber |
| `deleted` | `Boolean` | Indicates whether the subscriber has been deleted. |
| `email` | `String` | The email address of the subscriber. |
| `environmentId` | `String` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `String` | The first name of the subscriber. |
| `id` | `String` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `Boolean` | Indicates whether the subscriber is currently online. |
| `lastName` | `String` | The last name of the subscriber. |
| `lastOnlineAt` | `String` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `String` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `String` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `String` | The phone number of the subscriber. |
| `subscriberId` | `String` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `String` | Timezone of the subscriber |
| `topics` | `Array` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `String` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `Float` | The version of the subscriber document. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Subscriber record (raises on error).
subscriber = client.Subscriber.load({ "id" => "subscriber_id" })
```

#### Example: List

```ruby
# list returns an Array of Subscriber records (raises on error).
subscribers = client.Subscriber.list
```

#### Example: Create

```ruby
subscriber = client.Subscriber.create({
  "createdAt" => "example_createdAt", # String
  "deleted" => true, # Boolean
  "environmentId" => "example_environmentId", # String
  "organizationId" => "example_organizationId", # String
  "subscriberId" => "example_subscriberId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### SubscriberNotificationsCountResponseDto

Create an instance: `subscriber_notifications_count_response_dto = client.SubscriberNotificationsCountResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Float` | The count of notifications matching the filter |
| `filter` | `Hash` | The filter applied |

#### Example: List

```ruby
# list returns an Array of SubscriberNotificationsCountResponseDto records (raises on error).
subscriber_notifications_count_response_dtos = client.SubscriberNotificationsCountResponseDto.list
```


### SubscriberNotificationsResponseDto

Create an instance: `subscriber_notifications_response_dto = client.SubscriberNotificationsResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SubscriberNotificationsResponseDto records (raises on error).
subscriber_notifications_response_dtos = client.SubscriberNotificationsResponseDto.list
```


### SubscriberPreferencesDto

Create an instance: `subscriber_preferences_dto = client.SubscriberPreferencesDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SubscriberPreferencesDto records (raises on error).
subscriber_preferences_dtos = client.SubscriberPreferencesDto.list
```


### SubscriberResponseDto

Create an instance: `subscriber_response_dto = client.SubscriberResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `String` | The URL of the subscriber's avatar image. |
| `channels` | `Array` | An array of channel settings associated with the subscriber. |
| `createdAt` | `String` | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Hash` | Additional custom data for the subscriber |
| `deleted` | `Boolean` | Indicates whether the subscriber has been deleted. |
| `email` | `String` | The email address of the subscriber. |
| `environmentId` | `String` | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `String` | The first name of the subscriber. |
| `id` | `String` | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `Boolean` | Indicates whether the subscriber is currently online. |
| `lastName` | `String` | The last name of the subscriber. |
| `lastOnlineAt` | `String` | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `String` | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `String` | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `String` | The phone number of the subscriber. |
| `subscriberId` | `String` | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `String` | Timezone of the subscriber |
| `topics` | `Array` | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `String` | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `Float` | The version of the subscriber document. |


### Subscription

Create an instance: `subscription = client.Subscription`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contextKeys` | `Array` | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `String` | The creation date of the subscription |
| `id` | `String` | The unique identifier of the subscription |
| `identifier` | `String` | The identifier of the subscription |
| `name` | `String` | The name of the subscription |
| `preferences` | `Array` | The preferences/rules for the subscription |
| `subscriber` | `Object` | The subscriber information |
| `topic` | `Object` | The topic information |
| `updatedAt` | `String` | The last update date of the subscription |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Subscription record (raises on error).
subscription = client.Subscription.load({ "id" => "subscription_id", "topic_id" => "topic_id" })
```


### Topic

Create an instance: `topic = client.Topic`

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
| `createdAt` | `String` | The date the topic was created |
| `data` | `Hash` | Additional custom data associated with the topic |
| `id` | `String` | The identifier of the topic |
| `key` | `String` | The unique key of the topic |
| `name` | `String` | The name of the topic |
| `updatedAt` | `String` | The date the topic was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Topic record (raises on error).
topic = client.Topic.load({ "id" => "topic_id" })
```

#### Example: List

```ruby
# list returns an Array of Topic records (raises on error).
topics = client.Topic.list
```

#### Example: Create

```ruby
topic = client.Topic.create({
  "id" => "example_id", # String
  "key" => "example_key", # String
})
```


### TopicSubscriberDto

Create an instance: `topic_subscriber_dto = client.TopicSubscriberDto`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `environmentId` | `String` | Unique identifier for the environment |
| `externalSubscriberId` | `String` | External identifier for the subscriber |
| `organizationId` | `String` | Unique identifier for the organization |
| `subscriberId` | `String` | Unique identifier for the subscriber |
| `topicId` | `String` | Unique identifier for the topic |
| `topicKey` | `String` | Key associated with the topic |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TopicSubscriberDto record (raises on error).
topic_subscriber_dto = client.TopicSubscriberDto.load({ "external_subscriber_id" => "external_subscriber_id", "topic_id" => "topic_id" })
```


### TopicSubscriptionsResponseDto

Create an instance: `topic_subscriptions_response_dto = client.TopicSubscriptionsResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Translation

Create an instance: `translation = client.Translation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Hash` | Translation content as JSON object |
| `createdAt` | `String` | Creation timestamp |
| `id` | `String` |  |
| `locale` | `String` | Locale code |
| `resourceId` | `String` | Resource identifier |
| `resourceType` | `String` | Resource type |
| `updatedAt` | `String` | Last update timestamp |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Translation record (raises on error).
translation = client.Translation.load({ "locale" => "locale", "resource_id" => "resource_id", "resource_type" => "resource_type" })
```

#### Example: Create

```ruby
translation = client.Translation.create({
  "content" => {}, # Hash
  "createdAt" => "example_createdAt", # String
  "locale" => "example_locale", # String
  "resourceId" => "example_resourceId", # String
  "resourceType" => "example_resourceType", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### TranslationGroupDto

Create an instance: `translation_group_dto = client.TranslationGroupDto`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `String` | Creation timestamp |
| `id` | `String` |  |
| `locales` | `Array` | Array of available locales for this resource |
| `outdatedLocales` | `Array` | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `String` | Resource identifier (slugified ID) |
| `resourceName` | `String` | Resource name (e.g., workflow name) |
| `resourceType` | `String` | Resource type |
| `updatedAt` | `String` | Last update timestamp |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TranslationGroupDto record (raises on error).
translation_group_dto = client.TranslationGroupDto.load({ "resource_id" => "resource_id", "resource_type" => "resource_type" })
```


### TriggerEventResponseDto

Create an instance: `trigger_event_response_dto = client.TriggerEventResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledged` | `Boolean` | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `String` | Link to the activity feed for this trigger event |
| `actor` | `Object` | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `String` | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `Hash` |  |
| `error` | `Array` | In case of an error, this field will contain the error message(s) |
| `events` | `Array` |  |
| `jobData` | `Hash` |  |
| `name` | `String` | The trigger identifier associated for the template you wish to send. |
| `overrides` | `Object` | This could be used to override provider specific configurations |
| `payload` | `Hash` | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `String` | Status of the trigger |
| `tenant` | `Object` | It is used to specify a tenant context during trigger event. |
| `transactionId` | `String` | The returned transaction ID of the trigger |

#### Example: Create

```ruby
trigger_event_response_dto = client.TriggerEventResponseDto.create({
  "acknowledged" => true, # Boolean
  "events" => [], # Array
  "name" => "example_name", # String
  "payload" => {}, # Hash
  "status" => "example_status", # String
})
```


### Unseen

Create an instance: `unseen = client.Unseen`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Unseen record (raises on error).
unseen = client.Unseen.load({ "subscriber_id" => "subscriber_id" })
```


### Upload

Create an instance: `upload = client.Upload`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | List of error messages for failed uploads |
| `failedUploads` | `Float` | Number of files that failed to upload |
| `successfulUploads` | `Float` | Number of files successfully uploaded |
| `totalFiles` | `Float` | Total number of files processed |

#### Example: Create

```ruby
upload = client.Upload.create({
  "errors" => [], # Array
  "failedUploads" => 1, # Float
  "successfulUploads" => 1, # Float
  "totalFiles" => 1, # Float
})
```


### WebhookResultDto

Create an instance: `webhook_result_dto = client.WebhookResultDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
webhook_result_dto = client.WebhookResultDto.create({
  "environment_id" => "example_environment_id", # String
  "integration_id" => "example_integration_id", # String
})
```


### Workflow

Create an instance: `workflow = client.Workflow`

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
| `active` | `Boolean` | Whether the workflow is active |
| `agent` | `Object` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `String` | Creation timestamp |
| `description` | `String` | Description of the workflow |
| `id` | `String` | Database identifier of the workflow |
| `isTranslationEnabled` | `Boolean` | Enable or disable translations for this workflow |
| `issues` | `Hash` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `String` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Object` | User who last published the workflow |
| `lastTriggeredAt` | `String` | Timestamp of the last workflow trigger |
| `name` | `String` | Name of the workflow |
| `origin` | `String` | Workflow origin |
| `payloadExample` | `Hash` | Generated payload example based on the payload schema |
| `payloadSchema` | `Hash` | The payload JSON Schema for the workflow |
| `preferences` | `Object` | Preferences for the workflow |
| `severity` | `String` | Workflow severity |
| `slug` | `String` | Slug of the workflow |
| `source` | `String` | Source of workflow creation |
| `status` | `String` | Workflow status |
| `stepTypeOverviews` | `Array` | Overview of step types in the workflow |
| `steps` | `Array` | Steps of the workflow |
| `tags` | `Array` | Tags associated with the workflow |
| `updatedAt` | `String` | Last updated timestamp |
| `updatedBy` | `Object` | User who last updated the workflow |
| `validatePayload` | `Boolean` | Enable or disable payload schema validation |
| `workflowId` | `String` | Workflow identifier |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Workflow record (raises on error).
workflow = client.Workflow.load({ "id" => "workflow_id" })
```

#### Example: List

```ruby
# list returns an Array of Workflow records (raises on error).
workflows = client.Workflow.list
```

#### Example: Create

```ruby
workflow = client.Workflow.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "origin" => "example_origin", # String
  "preferences" => "example_preferences", # Object
  "severity" => "example_severity", # String
  "slug" => "example_slug", # String
  "status" => "example_status", # String
  "stepTypeOverviews" => [], # Array
  "steps" => [], # Array
  "updatedAt" => "example_updatedAt", # String
  "workflowId" => "example_workflowId", # String
})
```


### WorkflowInfoDto

Create an instance: `workflow_info_dto = client.WorkflowInfoDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the workflow |
| `workflowId` | `String` | The unique identifier of the workflow |

#### Example: List

```ruby
# list returns an Array of WorkflowInfoDto records (raises on error).
workflow_info_dtos = client.WorkflowInfoDto.list
```


### WorkflowResponseDto

Create an instance: `workflow_response_dto = client.WorkflowResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` | Whether the workflow is active |
| `agent` | `Object` | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `String` | Creation timestamp |
| `description` | `String` | Description of the workflow |
| `id` | `String` | Database identifier of the workflow |
| `isTranslationEnabled` | `Boolean` | Enable or disable translations for this workflow |
| `issues` | `Hash` | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `String` | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Object` | User who last published the workflow |
| `lastTriggeredAt` | `String` | Timestamp of the last workflow trigger |
| `name` | `String` | Name of the workflow |
| `origin` | `String` | Workflow origin |
| `payloadExample` | `Hash` | Generated payload example based on the payload schema |
| `payloadSchema` | `Hash` | The payload JSON Schema for the workflow |
| `preferences` | `Object` | Preferences for the workflow |
| `severity` | `String` | Workflow severity |
| `slug` | `String` | Slug of the workflow |
| `status` | `String` | Workflow status |
| `steps` | `Array` | Steps of the workflow |
| `tags` | `Array` | Tags associated with the workflow |
| `updatedAt` | `String` | Last updated timestamp |
| `updatedBy` | `Object` | User who last updated the workflow |
| `validatePayload` | `Boolean` | Enable or disable payload schema validation |
| `workflowId` | `String` | Workflow identifier |

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

Features are the extension mechanism. A feature is a Ruby class
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

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Novu_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Novu_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
environmentvariable = client.EnvironmentVariable
environmentvariable.list()

# environmentvariable.data_get now returns the environmentvariable data from the last list
# environmentvariable.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
