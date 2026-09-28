# Novu PHP SDK Reference

Complete API reference for the Novu PHP SDK.


## NovuSDK

### Constructor

```php
require_once __DIR__ . '/novu_sdk.php';

$client = new NovuSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NovuSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = NovuSDK::test();
```


### Instance Methods

#### `ActivityNotificationResponseDto($data = null)`

Create a new `ActivityNotificationResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Agent($data = null)`

Create a new `AgentEntity` instance. Pass `null` for no initial data.

#### `AgentIntegrationResponseDto($data = null)`

Create a new `AgentIntegrationResponseDtoEntity` instance. Pass `null` for no initial data.

#### `AgentResponseDto($data = null)`

Create a new `AgentResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Bulk($data = null)`

Create a new `BulkEntity` instance. Pass `null` for no initial data.

#### `ChannelConnection($data = null)`

Create a new `ChannelConnectionEntity` instance. Pass `null` for no initial data.

#### `ChannelEndpoint($data = null)`

Create a new `ChannelEndpointEntity` instance. Pass `null` for no initial data.

#### `Configure($data = null)`

Create a new `ConfigureEntity` instance. Pass `null` for no initial data.

#### `Context($data = null)`

Create a new `ContextEntity` instance. Pass `null` for no initial data.

#### `CreateSubscriptionsResponseDto($data = null)`

Create a new `CreateSubscriptionsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Diff($data = null)`

Create a new `DiffEntity` instance. Pass `null` for no initial data.

#### `Domain($data = null)`

Create a new `DomainEntity` instance. Pass `null` for no initial data.

#### `DomainConnectApplyUrlResponseDto($data = null)`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance. Pass `null` for no initial data.

#### `DomainConnectStatusResponseDto($data = null)`

Create a new `DomainConnectStatusResponseDtoEntity` instance. Pass `null` for no initial data.

#### `DomainResponseDto($data = null)`

Create a new `DomainResponseDtoEntity` instance. Pass `null` for no initial data.

#### `DomainRouteResponseDto($data = null)`

Create a new `DomainRouteResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Environment($data = null)`

Create a new `EnvironmentEntity` instance. Pass `null` for no initial data.

#### `EnvironmentTagsDto($data = null)`

Create a new `EnvironmentTagsDtoEntity` instance. Pass `null` for no initial data.

#### `EnvironmentVariable($data = null)`

Create a new `EnvironmentVariableEntity` instance. Pass `null` for no initial data.

#### `EnvironmentVariableWorkflowInfoDto($data = null)`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `GenerateChatOAuthUrlResponseDto($data = null)`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance. Pass `null` for no initial data.

#### `GeneratePreviewResponseDto($data = null)`

Create a new `GeneratePreviewResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ImportMasterJsonResponseDto($data = null)`

Create a new `ImportMasterJsonResponseDtoEntity` instance. Pass `null` for no initial data.

#### `InboxNotificationDto($data = null)`

Create a new `InboxNotificationDtoEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `IntegrationResponseDto($data = null)`

Create a new `IntegrationResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Layout($data = null)`

Create a new `LayoutEntity` instance. Pass `null` for no initial data.

#### `LayoutResponseDto($data = null)`

Create a new `LayoutResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Link($data = null)`

Create a new `LinkEntity` instance. Pass `null` for no initial data.

#### `ListAgentIntegrationsResponseDto($data = null)`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListAgentsResponseDto($data = null)`

Create a new `ListAgentsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListChannelConnectionsResponseDto($data = null)`

Create a new `ListChannelConnectionsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListChannelEndpointsResponseDto($data = null)`

Create a new `ListChannelEndpointsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListContextsResponseDto($data = null)`

Create a new `ListContextsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListDomainRoutesResponseDto($data = null)`

Create a new `ListDomainRoutesResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListDomainsResponseDto($data = null)`

Create a new `ListDomainsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListSubscribersResponseDto($data = null)`

Create a new `ListSubscribersResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListTopicSubscriptionsResponseDto($data = null)`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ListTopicsResponseDto($data = null)`

Create a new `ListTopicsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `MasterJson($data = null)`

Create a new `MasterJsonEntity` instance. Pass `null` for no initial data.

#### `Message($data = null)`

Create a new `MessageEntity` instance. Pass `null` for no initial data.

#### `MessageResponseDto($data = null)`

Create a new `MessageResponseDtoEntity` instance. Pass `null` for no initial data.

#### `NotificationFeedItemDto($data = null)`

Create a new `NotificationFeedItemDtoEntity` instance. Pass `null` for no initial data.

#### `PreferencesResponseDto($data = null)`

Create a new `PreferencesResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Publish($data = null)`

Create a new `PublishEntity` instance. Pass `null` for no initial data.

#### `RemoveSubscriberResponseDto($data = null)`

Create a new `RemoveSubscriberResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Step($data = null)`

Create a new `StepEntity` instance. Pass `null` for no initial data.

#### `Subscriber($data = null)`

Create a new `SubscriberEntity` instance. Pass `null` for no initial data.

#### `SubscriberNotificationsCountResponseDto($data = null)`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance. Pass `null` for no initial data.

#### `SubscriberNotificationsResponseDto($data = null)`

Create a new `SubscriberNotificationsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `SubscriberPreferencesDto($data = null)`

Create a new `SubscriberPreferencesDtoEntity` instance. Pass `null` for no initial data.

#### `SubscriberResponseDto($data = null)`

Create a new `SubscriberResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Subscription($data = null)`

Create a new `SubscriptionEntity` instance. Pass `null` for no initial data.

#### `Topic($data = null)`

Create a new `TopicEntity` instance. Pass `null` for no initial data.

#### `TopicSubscriberDto($data = null)`

Create a new `TopicSubscriberDtoEntity` instance. Pass `null` for no initial data.

#### `TopicSubscriptionsResponseDto($data = null)`

Create a new `TopicSubscriptionsResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Translation($data = null)`

Create a new `TranslationEntity` instance. Pass `null` for no initial data.

#### `TranslationGroupDto($data = null)`

Create a new `TranslationGroupDtoEntity` instance. Pass `null` for no initial data.

#### `Trigger($data = null)`

Create a new `TriggerEntity` instance. Pass `null` for no initial data.

#### `TriggerEventResponseDto($data = null)`

Create a new `TriggerEventResponseDtoEntity` instance. Pass `null` for no initial data.

#### `Unseen($data = null)`

Create a new `UnseenEntity` instance. Pass `null` for no initial data.

#### `Upload($data = null)`

Create a new `UploadEntity` instance. Pass `null` for no initial data.

#### `WebhookResultDto($data = null)`

Create a new `WebhookResultDtoEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `WorkflowInfoDto($data = null)`

Create a new `WorkflowInfoDtoEntity` instance. Pass `null` for no initial data.

#### `WorkflowResponseDto($data = null)`

Create a new `WorkflowResponseDtoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): NovuUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActivityNotificationResponseDtoEntity

```php
$activity_notification_response_dto = $client->ActivityNotificationResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `array` | No |  |
| `contextKeys` | `array` | No | Context (single or multi) in which the notification was sent |
| `controls` | `array` | No | Controls associated with the notification |
| `createdAt` | `string` | No | Creation time of the notification |
| `critical` | `bool` | No | Criticality of the notification |
| `digestedNotificationId` | `string` | No | Digested Notification ID |
| `environmentId` | `string` | Yes | Environment ID of the notification |
| `id` | `string` | No | Unique identifier of the notification |
| `jobs` | `array` | No | Jobs of the notification |
| `organizationId` | `string` | Yes | Organization ID of the notification |
| `payload` | `array` | No | Payload of the notification |
| `severity` | `string` | No | Workflow severity |
| `subscriber` | `mixed` | No | Subscriber of the notification |
| `subscriberId` | `string` | Yes | Subscriber ID of the notification |
| `tags` | `array` | No | Tags associated with the notification |
| `template` | `mixed` | No | Template of the notification |
| `templateId` | `string` | No | Template ID of the notification |
| `to` | `array` | No | To field for subscriber definition |
| `topics` | `array` | No | Topics of the notification |
| `transactionId` | `string` | Yes | Transaction ID of the notification |
| `updatedAt` | `string` | No | Last updated time of the notification |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActivityNotificationResponseDto()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActivityNotificationResponseDto()->load(["notification_id" => "notification_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityNotificationResponseDtoEntity`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentEntity

```php
$agent = $client->Agent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `array` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `bool` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes | Required when not adopting an existing managed agent. |
| `integrations` | `array` | No |  |
| `managedRuntime` | `mixed` | No | Present when runtime is "managed". |
| `name` | `string` | Yes | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `active` | - | Yes | Yes | - |
| `behavior` | - | - | Yes | - |
| `bridgeUrl` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `createdBy` | - | - | - | - |
| `description` | - | - | - | - |
| `devBridgeActive` | - | - | - | - |
| `devBridgeUrl` | - | - | - | - |
| `environmentId` | - | - | - | - |
| `exceedsPlanLimit` | - | - | - | - |
| `id` | - | - | - | - |
| `identifier` | - | - | - | - |
| `integrations` | - | - | - | - |
| `managedRuntime` | - | Yes | - | - |
| `name` | - | - | Yes | - |
| `organizationId` | - | - | - | - |
| `runtime` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `visibility` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Agent()->create([
  "active" => null, // bool
  "behavior" => null, // array
  "createdAt" => null, // string
  "environmentId" => null, // string
  "id" => null, // string
  "identifier" => null, // string
  "name" => null, // string
  "organizationId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->load(["id" => "agent_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->remove(["id" => "agent_id", "delete_from_provider" => "delete_from_provider"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Agent()->update([
  "id" => "agent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentIntegrationResponseDtoEntity

```php
$agent_integration_response_dto = $client->AgentIntegrationResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `array` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `array` | Yes |  |
| `integrationIdentifier` | `string` | No | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `string` | Yes |  |
| `providerId` | `string` | No | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `string` | Yes |  |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `agentId` | - | - |
| `connectedAt` | - | - |
| `createdAt` | - | - |
| `environmentId` | - | - |
| `exceedsPlanLimit` | - | - |
| `id` | - | - |
| `integration` | - | - |
| `integrationIdentifier` | - | Yes |
| `organizationId` | - | - |
| `providerId` | - | - |
| `updatedAt` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentIntegrationResponseDto()->create([
  "identifier" => null, // string
  "agentId" => null, // string
  "createdAt" => null, // string
  "environmentId" => null, // string
  "id" => null, // string
  "integration" => null, // array
  "organizationId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AgentIntegrationResponseDto()->update([
  "agent_id" => "agent_id",
  "agent_integration_id" => "agent_integration_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentIntegrationResponseDtoEntity`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentResponseDtoEntity

```php
$agent_response_dto = $client->AgentResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `array` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `bool` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes |  |
| `integrations` | `array` | No |  |
| `managedRuntime` | `mixed` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AgentResponseDto()->update([
  "identifier" => "identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentResponseDtoEntity`

Create a new `AgentResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkEntity

```php
$bulk = $client->Bulk();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `array` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Bulk()->create([
  "subscribers" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkEntity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChannelConnectionEntity

```php
$channel_connection = $client->ChannelConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `array` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `array` | No |  |
| `contextKeys` | `array` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `auth` | - | - | - | - |
| `channel` | - | - | - | - |
| `connectionMode` | - | - | - | - |
| `context` | - | - | - | - |
| `contextKeys` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `id` | - | - | - | - |
| `identifier` | - | Yes | - | - |
| `integrationIdentifier` | - | - | - | - |
| `providerId` | - | - | - | - |
| `subscriberId` | - | Yes | - | - |
| `updatedAt` | - | - | - | - |
| `workspace` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ChannelConnection()->create([
  "auth" => null, // array
  "channel" => null, // string
  "contextKeys" => null, // array
  "createdAt" => null, // string
  "identifier" => null, // string
  "integrationIdentifier" => null, // string
  "providerId" => null, // string
  "subscriberId" => null, // string
  "updatedAt" => null, // string
  "workspace" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ChannelConnection()->load(["id" => "channel_connection_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ChannelConnection()->remove(["id" => "channel_connection_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ChannelConnection()->update([
  "id" => "channel_connection_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChannelConnectionEntity`

Create a new `ChannelConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChannelEndpointEntity

```php
$channel_endpoint = $client->ChannelEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `array` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `mixed` | Yes | Endpoint data specific to the channel type |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Yes | Type of channel endpoint |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ChannelEndpoint()->create([
  "channel" => null, // string
  "connectionIdentifier" => null, // string
  "contextKeys" => null, // array
  "createdAt" => null, // string
  "endpoint" => null, // mixed
  "identifier" => null, // string
  "integrationIdentifier" => null, // string
  "providerId" => null, // string
  "subscriberId" => null, // string
  "type" => null, // string
  "updatedAt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ChannelEndpoint()->load(["id" => "channel_endpoint_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ChannelEndpoint()->remove(["id" => "channel_endpoint_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ChannelEndpoint()->update([
  "id" => "channel_endpoint_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChannelEndpointEntity`

Create a new `ChannelEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConfigureEntity

```php
$configure = $client->Configure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `string` | Yes | Resolved bot username from getMe |
| `configuredAt` | `string` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Configure()->create([
  "integration_id" => null, // string
  "botUsername" => null, // string
  "configuredAt" => null, // string
  "webhookUrl" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConfigureEntity`

Create a new `ConfigureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContextEntity

```php
$context = $client->Context();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Optional bridge URL override for agent connect. |
| `data` | `array` | No | Optional custom data to associate with this context. |
| `id` | `string` | Yes | Unique identifier for this context. |
| `type` | `string` | Yes | Context type (e.g., tenant, app, workspace). |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `bridgeUrl` | - | - | - | - |
| `data` | - | - | Yes | - |
| `id` | - | - | - | - |
| `type` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Context()->create([
  "id" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Context()->load(["id" => "context_id", "type" => "type"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Context()->remove(["id" => "context_id", "type" => "type"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Context()->update([
  "id" => "context_id",
  "type" => "type",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContextEntity`

Create a new `ContextEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateSubscriptionsResponseDtoEntity

```php
$create_subscriptions_response_dto = $client->CreateSubscriptionsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `array` | No |  |
| `name` | `string` | No | The name of the topic |
| `preferences` | `array` | No | The preferences of the topic. |
| `subscriberIds` | `array` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `array` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateSubscriptionsResponseDto()->create([
  "topic_key" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateSubscriptionsResponseDtoEntity`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DiffEntity

```php
$diff = $client->Diff();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `array` | Yes | Diff resources by resource type |
| `sourceEnvironmentId` | `string` | Yes | Source environment ID |
| `summary` | `mixed` | Yes | Overall summary |
| `targetEnvironmentId` | `string` | Yes | Target environment ID |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `resources` | - |
| `sourceEnvironmentId` | Yes |
| `summary` | - |
| `targetEnvironmentId` | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Diff()->create([
  "environment_id" => null, // string
  "resources" => null, // array
  "sourceEnvironmentId" => null, // string
  "summary" => null, // mixed
  "targetEnvironmentId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DiffEntity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainEntity

```php
$domain = $client->Domain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `array` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `array` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `string` | Yes | The domain name (e.g. |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Domain()->create([
  "createdAt" => null, // string
  "environmentId" => null, // string
  "id" => null, // string
  "mxRecordConfigured" => null, // bool
  "name" => null, // string
  "organizationId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->load(["id" => "domain_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->remove(["id" => "domain_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Domain()->update([
  "id" => "domain_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainEntity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainConnectApplyUrlResponseDtoEntity

```php
$domain_connect_apply_url_response_dto = $client->DomainConnectApplyUrlResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `string` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DomainConnectApplyUrlResponseDto()->create([
  "domain_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainConnectApplyUrlResponseDtoEntity`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainConnectStatusResponseDtoEntity

```php
$domain_connect_status_response_dto = $client->DomainConnectStatusResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DomainConnectStatusResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainConnectStatusResponseDtoEntity`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainResponseDtoEntity

```php
$domain_response_dto = $client->DomainResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `array` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `array` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DomainResponseDto()->create([
  "id" => null, // string
  "createdAt" => null, // string
  "environmentId" => null, // string
  "mxRecordConfigured" => null, // bool
  "name" => null, // string
  "organizationId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainResponseDtoEntity`

Create a new `DomainResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainRouteResponseDtoEntity

```php
$domain_route_response_dto = $client->DomainRouteResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | No | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `array` | No | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DomainRouteResponseDto()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DomainRouteResponseDto()->load(["address" => "address", "domain_id" => "domain_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DomainRouteResponseDto()->update([
  "address" => "address",
  "domain_id" => "domain_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainRouteResponseDtoEntity`

Create a new `DomainRouteResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentEntity

```php
$environment = $client->Environment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `array` | No | List of API keys associated with the environment |
| `bridge` | `array` | No |  |
| `color` | `string` | Yes | Hex color code for the environment |
| `dns` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier of the environment |
| `identifier` | `string` | Yes | Unique identifier for the environment |
| `name` | `string` | Yes | Name of the environment to be created |
| `organizationId` | `string` | Yes | Organization ID associated with the environment |
| `parentId` | `string` | No | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `string` | No | URL-friendly slug for the environment |
| `type` | `string` | No | Type of the environment |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `apiKeys` | - | - | - | - |
| `bridge` | - | - | - | - |
| `color` | - | - | Yes | - |
| `dns` | - | - | - | - |
| `id` | - | - | - | - |
| `identifier` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `organizationId` | - | - | - | - |
| `parentId` | - | - | - | - |
| `slug` | - | - | - | - |
| `type` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Environment()->create([
  "color" => null, // string
  "id" => null, // string
  "identifier" => null, // string
  "name" => null, // string
  "organizationId" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Environment()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Environment()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Environment()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentEntity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentTagsDtoEntity

```php
$environment_tags_dto = $client->EnvironmentTagsDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnvironmentTagsDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentTagsDtoEntity`

Create a new `EnvironmentTagsDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentVariableEntity

```php
$environment_variable = $client->EnvironmentVariable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `isSecret` | `bool` | Yes | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `string` | Yes | Unique key for the variable. |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes | The type of the variable |
| `updatedAt` | `string` | Yes |  |
| `values` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `isSecret` | - | - | Yes | Yes | - |
| `key` | - | - | - | Yes | - |
| `organizationId` | - | - | - | - | - |
| `type` | - | - | Yes | Yes | - |
| `updatedAt` | - | - | - | - | - |
| `values` | - | - | Yes | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EnvironmentVariable()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "isSecret" => null, // bool
  "key" => null, // string
  "organizationId" => null, // string
  "type" => null, // string
  "updatedAt" => null, // string
  "values" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnvironmentVariable()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EnvironmentVariable()->load(["id" => "environment_variable_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EnvironmentVariable()->remove(["id" => "environment_variable_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EnvironmentVariable()->update([
  "id" => "environment_variable_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentVariableEntity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```php
$environment_variable_workflow_info_dto = $client->EnvironmentVariableWorkflowInfoDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnvironmentVariableWorkflowInfoDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentVariableWorkflowInfoDtoEntity`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->remove(["transaction_id" => "transaction_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateChatOAuthUrlResponseDtoEntity

```php
$generate_chat_o_auth_url_response_dto = $client->GenerateChatOAuthUrlResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `bool` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `array` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier |
| `mode` | `string` | No | OAuth flow mode. |
| `scope` | `array` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `array` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `autoLinkUser` | - |
| `connectionIdentifier` | - |
| `connectionMode` | - |
| `context` | - |
| `contextHash` | - |
| `integrationIdentifier` | - |
| `mode` | - |
| `scope` | - |
| `subscriberId` | Yes |
| `userScope` | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GenerateChatOAuthUrlResponseDto()->create([
  "integrationIdentifier" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateChatOAuthUrlResponseDtoEntity`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeneratePreviewResponseDtoEntity

```php
$generate_preview_response_dto = $client->GeneratePreviewResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `array` | No | Optional control values |
| `previewPayload` | `mixed` | No | Optional payload for preview generation |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GeneratePreviewResponseDto()->create([
  "step_id" => null, // string
  "workflow_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeneratePreviewResponseDtoEntity`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImportMasterJsonResponseDtoEntity

```php
$import_master_json_response_dto = $client->ImportMasterJsonResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `array` | No | List of resource IDs that failed to import |
| `locale` | `string` | Yes | The locale for which translations are being imported |
| `masterJson` | `array` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Yes | Human-readable message describing the import result |
| `success` | `bool` | Yes | Overall success status of the import operation |
| `successful` | `array` | No | List of resource IDs that were successfully imported |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImportMasterJsonResponseDto()->create([
  "locale" => null, // string
  "masterJson" => null, // array
  "message" => null, // string
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImportMasterJsonResponseDtoEntity`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InboxNotificationDtoEntity

```php
$inbox_notification_dto = $client->InboxNotificationDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `string` | No | ISO timestamp when the notification was archived |
| `avatar` | `string` | No | Avatar URL for the notification |
| `body` | `string` | Yes | Body content of the notification |
| `channelType` | `string` | Yes | Channel the message was sent on |
| `createdAt` | `string` | Yes | ISO timestamp when the notification was created |
| `data` | `array` | No | Custom data payload of the notification |
| `deliveredAt` | `array` | No | Timestamps when the notification was delivered |
| `firstSeenAt` | `string` | No | ISO timestamp when the notification was first seen |
| `id` | `string` | Yes | Unique identifier of the notification |
| `isArchived` | `bool` | Yes | Whether the notification has been archived |
| `isRead` | `bool` | Yes | Whether the notification has been read |
| `isSeen` | `bool` | Yes | Whether the notification has been seen |
| `isSnoozed` | `bool` | Yes | Whether the notification is snoozed |
| `primaryAction` | `mixed` | No | Primary action button for the notification |
| `readAt` | `string` | No | ISO timestamp when the notification was read |
| `redirect` | `mixed` | No | Redirect configuration for the notification |
| `secondaryAction` | `mixed` | No | Secondary action button for the notification |
| `severity` | `string` | Yes | Workflow severity |
| `snoozeUntil` | `string` | Yes | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `string` | No | ISO timestamp when the notification will be unsnoozed |
| `subject` | `string` | No | Subject of the notification |
| `tags` | `array` | No | Tags associated with the notification |
| `to` | `mixed` | Yes | Subscriber this notification was sent to |
| `transactionId` | `string` | Yes | Transaction identifier of the notification |
| `workflow` | `mixed` | No | Workflow associated with the notification |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InboxNotificationDto()->update([
  "notification_id" => "notification_id",
  "subscriber_id" => "subscriber_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InboxNotificationDtoEntity`

Create a new `InboxNotificationDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | No | The channel type for the integration. |
| `check` | `bool` | No | Flag to check the integration status |
| `conditions` | `array` | No | Legacy StepFilter conditions. |
| `configurations` | `array` | No | Configurations for the integration |
| `credentials` | `mixed` | No | The credentials for the integration |
| `deleted` | `bool` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | No | The ID of the associated environment |
| `id` | `string` | No | The unique identifier of the integration record in the database. |
| `identifier` | `string` | No | The unique identifier for the integration |
| `kind` | `string` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | No | The name of the integration |
| `organizationId` | `string` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | No | The provider ID for the integration |
| `rules` | `array` | No | JSONLogic used at send time to select this integration. |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `active` | Yes | - | Yes | - |
| `channel` | - | - | - | - |
| `check` | - | - | - | - |
| `conditions` | - | - | - | - |
| `configurations` | - | - | - | - |
| `credentials` | - | - | - | - |
| `deleted` | - | - | - | - |
| `deletedAt` | - | - | - | - |
| `deletedBy` | - | - | - | - |
| `environmentId` | Yes | - | Yes | - |
| `id` | - | - | - | - |
| `identifier` | Yes | - | Yes | - |
| `kind` | - | - | - | - |
| `name` | Yes | - | Yes | - |
| `organizationId` | - | - | - | - |
| `primary` | - | - | - | - |
| `providerId` | Yes | - | Yes | - |
| `rules` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Integration()->create([
  "deleted" => null, // bool
  "organizationId" => null, // string
  "primary" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Integration()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Integration()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationResponseDtoEntity

```php
$integration_response_dto = $client->IntegrationResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the integration is currently active. |
| `channel` | `string` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `array` | No | Legacy StepFilter conditions. |
| `configurations` | `mixed` | No | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `mixed` | No | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `bool` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | Yes | The unique identifier for the environment associated with this integration. |
| `id` | `string` | No | The unique identifier of the integration record in the database. |
| `identifier` | `string` | Yes | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `string` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | Yes | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `string` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | Yes | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `array` | No | JSONLogic used at send time to select this integration. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IntegrationResponseDto()->create([
  "id" => null, // string
  "active" => null, // bool
  "deleted" => null, // bool
  "environmentId" => null, // string
  "identifier" => null, // string
  "name" => null, // string
  "organizationId" => null, // string
  "primary" => null, // bool
  "providerId" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IntegrationResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationResponseDtoEntity`

Create a new `IntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LayoutEntity

```php
$layout = $client->Layout();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `mixed` | No | Control values for the layout. |
| `controls` | `mixed` | Yes | Controls metadata for the layout |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | Yes | Unique internal identifier of the layout |
| `isDefault` | `bool` | Yes | Whether the layout is the default layout |
| `isTranslationEnabled` | `bool` | Yes | Whether the layout translations are enabled |
| `layoutId` | `string` | Yes | Unique identifier for the layout |
| `name` | `string` | Yes | Name of the layout |
| `origin` | `string` | Yes | Workflow origin |
| `slug` | `string` | Yes | Slug of the layout |
| `source` | `string` | No | Source of layout creation |
| `type` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `mixed` | No | User who last updated the layout |
| `variables` | `array` | No | The variables JSON Schema for the layout |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `controlValues` | - | - | - | - | - |
| `controls` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `isDefault` | - | - | - | - | - |
| `isTranslationEnabled` | - | - | Yes | Yes | - |
| `layoutId` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `origin` | - | - | - | - | - |
| `slug` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `updatedBy` | - | - | - | - | - |
| `variables` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Layout()->create([
  "controls" => null, // mixed
  "createdAt" => null, // string
  "id" => null, // string
  "isDefault" => null, // bool
  "isTranslationEnabled" => null, // bool
  "layoutId" => null, // string
  "name" => null, // string
  "origin" => null, // string
  "slug" => null, // string
  "type" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Layout()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Layout()->load(["id" => "layout_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Layout()->remove(["id" => "layout_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Layout()->update([
  "id" => "layout_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LayoutEntity`

Create a new `LayoutEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LayoutResponseDtoEntity

```php
$layout_response_dto = $client->LayoutResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LayoutResponseDto()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LayoutResponseDtoEntity`

Create a new `LayoutResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkEntity

```php
$link = $client->Link();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `array` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Link()->create([
  "integrationIdentifier" => null, // string
  "subscriberId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkEntity`

Create a new `LinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListAgentIntegrationsResponseDtoEntity

```php
$list_agent_integrations_response_dto = $client->ListAgentIntegrationsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `array` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `array` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListAgentIntegrationsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListAgentIntegrationsResponseDtoEntity`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListAgentsResponseDtoEntity

```php
$list_agents_response_dto = $client->ListAgentsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `array` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `bool` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes |  |
| `integrations` | `array` | No |  |
| `managedRuntime` | `mixed` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListAgentsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListAgentsResponseDtoEntity`

Create a new `ListAgentsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListChannelConnectionsResponseDtoEntity

```php
$list_channel_connections_response_dto = $client->ListChannelConnectionsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `array` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `array` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListChannelConnectionsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListChannelConnectionsResponseDtoEntity`

Create a new `ListChannelConnectionsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListChannelEndpointsResponseDtoEntity

```php
$list_channel_endpoints_response_dto = $client->ListChannelEndpointsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `array` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `mixed` | Yes | Endpoint data specific to the channel type |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Yes | Type of channel endpoint |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListChannelEndpointsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListChannelEndpointsResponseDtoEntity`

Create a new `ListChannelEndpointsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListContextsResponseDtoEntity

```php
$list_contexts_response_dto = $client->ListContextsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Yes | Creation timestamp |
| `data` | `array` | Yes | Custom data associated with this context |
| `id` | `string` | Yes | Unique identifier for this context |
| `type` | `string` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListContextsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListContextsResponseDtoEntity`

Create a new `ListContextsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListDomainRoutesResponseDtoEntity

```php
$list_domain_routes_response_dto = $client->ListDomainRoutesResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes |  |
| `agentId` | `string` | No | Internal id of the destination agent. |
| `createdAt` | `string` | Yes |  |
| `data` | `array` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListDomainRoutesResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListDomainRoutesResponseDtoEntity`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListDomainsResponseDtoEntity

```php
$list_domains_response_dto = $client->ListDomainsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `array` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `array` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListDomainsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListDomainsResponseDtoEntity`

Create a new `ListDomainsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSubscribersResponseDtoEntity

```php
$list_subscribers_response_dto = $client->ListSubscribersResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `array` | No | Additional custom data for the subscriber |
| `deleted` | `bool` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | No | The version of the subscriber document. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListSubscribersResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSubscribersResponseDtoEntity`

Create a new `ListSubscribersResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListTopicSubscriptionsResponseDtoEntity

```php
$list_topic_subscriptions_response_dto = $client->ListTopicSubscriptionsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `array` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The date and time the subscription was created |
| `id` | `string` | Yes | The identifier of the subscription |
| `identifier` | `string` | Yes | The identifier of the subscription |
| `preferences` | `array` | No | The preferences for workflows in this subscription |
| `subscriber` | `mixed` | Yes | Subscriber information |
| `topic` | `mixed` | Yes | Topic information |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListTopicSubscriptionsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListTopicSubscriptionsResponseDtoEntity`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListTopicsResponseDtoEntity

```php
$list_topics_response_dto = $client->ListTopicsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No | The date the topic was created |
| `data` | `array` | No | Additional custom data associated with the topic |
| `id` | `string` | Yes | The identifier of the topic |
| `key` | `string` | Yes | The unique key of the topic |
| `name` | `string` | No | The name of the topic |
| `updatedAt` | `string` | No | The date the topic was last updated |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListTopicsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListTopicsResponseDtoEntity`

Create a new `ListTopicsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MasterJsonEntity

```php
$master_json = $client->MasterJson();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `array` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `array` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MasterJson()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MasterJsonEntity`

Create a new `MasterJsonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MessageEntity

```php
$message = $client->Message();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `mixed` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `array` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Yes | Creation date of the message |
| `cta` | `mixed` | Yes | Call to action associated with the message |
| `deliveredAt` | `array` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `array` | No | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `string` | No | Direct webhook URL for the message, if applicable |
| `email` | `string` | No | Email address associated with the message, if applicable |
| `environmentId` | `string` | Yes | Environment ID where the message is sent |
| `errorId` | `string` | No | Error ID if the message has an error |
| `errorText` | `string` | No | Error text if the message has an error |
| `feedId` | `string` | No | Feed ID associated with the message, if applicable |
| `id` | `string` | No | Unique identifier for the message |
| `lastReadDate` | `string` | No | Last read date of the message, if available |
| `lastSeenDate` | `string` | No | Last seen date of the message, if available |
| `messageTemplateId` | `string` | No | Message template ID |
| `notificationId` | `string` | Yes | Notification ID associated with the message |
| `organizationId` | `string` | Yes | Organization ID associated with the message |
| `overrides` | `array` | No | Provider specific overrides used when triggering the notification |
| `payload` | `array` | No | The payload that was used to send the notification trigger |
| `phone` | `string` | No | Phone number associated with the message, if applicable |
| `providerId` | `string` | No | Provider ID associated with the message, if applicable |
| `read` | `bool` | Yes | Indicates if the message has been read |
| `seen` | `bool` | Yes | Indicates if the message has been seen |
| `snoozedUntil` | `string` | No | Date when the message will be unsnoozed |
| `status` | `string` | Yes | Status of the message |
| `subject` | `string` | No | Subject of the message, if applicable |
| `subscriber` | `mixed` | No | Subscriber details, if available |
| `subscriberId` | `string` | Yes | Subscriber ID associated with the message |
| `template` | `mixed` | No | Workflow template associated with the message |
| `templateId` | `string` | No | Template ID associated with the message |
| `templateIdentifier` | `string` | No | Identifier for the message template |
| `title` | `string` | No | Title of the message, if applicable |
| `transactionId` | `string` | Yes | Transaction ID associated with the message |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Message()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Message()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageEntity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MessageResponseDtoEntity

```php
$message_response_dto = $client->MessageResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `string` | Yes |  |
| `messageId` | `mixed` | Yes |  |
| `payload` | `array` | No | Message action payload |
| `status` | `string` | Yes | Message action status |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MessageResponseDto()->create([
  "subscriber_id" => null, // string
  "markAs" => null, // string
  "messageId" => null, // mixed
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageResponseDtoEntity`

Create a new `MessageResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationFeedItemDtoEntity

```php
$notification_feed_item_dto = $client->NotificationFeedItemDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `mixed` | No | Actor details related to the notification, if applicable. |
| `archived` | `bool` | Yes | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `string` | Yes | The main content of the notification. |
| `createdAt` | `string` | No | Timestamp indicating when the notification was created. |
| `cta` | `mixed` | Yes | Call-to-action information associated with the notification. |
| `data` | `array` | No | The data sent with the notification. |
| `deviceTokens` | `array` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | No | Identifier for the feed associated with the notification. |
| `id` | `string` | Yes | Unique identifier for the notification. |
| `jobId` | `string` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | No | Identifier for the message template used. |
| `notificationId` | `string` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `string` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `array` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `array` | No | The payload that was used to send the notification trigger. |
| `providerId` | `string` | No | Identifier for the provider that sends the notification. |
| `read` | `bool` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `bool` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Yes | Current status of the notification. |
| `subject` | `string` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `mixed` | No | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `array` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | No | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NotificationFeedItemDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationFeedItemDtoEntity`

Create a new `NotificationFeedItemDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PreferencesResponseDtoEntity

```php
$preferences_response_dto = $client->PreferencesResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `array` | No |  |
| `preferences` | `array` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PreferencesResponseDto()->update([
  "subscriber_id" => "subscriber_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PreferencesResponseDtoEntity`

Create a new `PreferencesResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublishEntity

```php
$publish = $client->Publish();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `bool` | No | Perform a dry run without making actual changes |
| `resources` | `array` | No | Array of specific resources to publish. |
| `results` | `array` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `string` | No | Source environment ID to sync from. |
| `summary` | `mixed` | Yes | Summary of the sync operation |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Publish()->create([
  "environment_id" => null, // string
  "results" => null, // array
  "summary" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublishEntity`

Create a new `PublishEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemoveSubscriberResponseDtoEntity

```php
$remove_subscriber_response_dto = $client->RemoveSubscriberResponseDto();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->RemoveSubscriberResponseDto()->remove(["subscriber_id" => "subscriber_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemoveSubscriberResponseDtoEntity`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StepEntity

```php
$step = $client->Step();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `array` | No | Control values for the step (alias for controls.values) |
| `controls` | `mixed` | Yes | Controls metadata for the step |
| `id` | `string` | Yes | Database identifier of the step |
| `issues` | `mixed` | No | Issues associated with the step |
| `name` | `string` | Yes | Name of the step |
| `origin` | `string` | Yes | Workflow origin |
| `providerOverrides` | `array` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Yes | Slug of the step |
| `stepId` | `string` | Yes | Unique identifier of the step |
| `stepResolverHash` | `string` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Yes | Type of the step |
| `variables` | `array` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Yes | Workflow database identifier |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Step()->load(["id" => "step_id", "workflow_id" => "workflow_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StepEntity`

Create a new `StepEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberEntity

```php
$subscriber = $client->Subscriber();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `array` | No | Additional custom data for the subscriber |
| `deleted` | `bool` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | No | The version of the subscriber document. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Subscriber()->create([
  "createdAt" => null, // string
  "deleted" => null, // bool
  "environmentId" => null, // string
  "organizationId" => null, // string
  "subscriberId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Subscriber()->load(["id" => "subscriber_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Subscriber()->remove(["id" => "subscriber_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Subscriber()->update([
  "id" => "subscriber_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberEntity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberNotificationsCountResponseDtoEntity

```php
$subscriber_notifications_count_response_dto = $client->SubscriberNotificationsCountResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float` | Yes | The count of notifications matching the filter |
| `filter` | `array` | Yes | The filter applied |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriberNotificationsCountResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberNotificationsCountResponseDtoEntity`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberNotificationsResponseDtoEntity

```php
$subscriber_notifications_response_dto = $client->SubscriberNotificationsResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriberNotificationsResponseDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberNotificationsResponseDtoEntity`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberPreferencesDtoEntity

```php
$subscriber_preferences_dto = $client->SubscriberPreferencesDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriberPreferencesDto()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriberPreferencesDto()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberPreferencesDtoEntity`

Create a new `SubscriberPreferencesDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberResponseDtoEntity

```php
$subscriber_response_dto = $client->SubscriberResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `array` | No | Additional custom data for the subscriber |
| `deleted` | `bool` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | No | The version of the subscriber document. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriberResponseDto()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberResponseDtoEntity`

Create a new `SubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionEntity

```php
$subscription = $client->Subscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `array` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The creation date of the subscription |
| `id` | `string` | Yes | The unique identifier of the subscription |
| `identifier` | `string` | No | The identifier of the subscription |
| `name` | `string` | No | The name of the subscription |
| `preferences` | `array` | No | The preferences/rules for the subscription |
| `subscriber` | `mixed` | Yes | The subscriber information |
| `topic` | `mixed` | Yes | The topic information |
| `updatedAt` | `string` | Yes | The last update date of the subscription |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->load(["id" => "subscription_id", "topic_id" => "topic_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Subscription()->update([
  "id" => "subscription_id",
  "topic_id" => "topic_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionEntity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopicEntity

```php
$topic = $client->Topic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | Additional custom data associated with the topic. |
| `id` | `string` | No |  |
| `key` | `string` | Yes | The unique key identifier for the topic. |
| `name` | `string` | No | The display name for the topic |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Topic()->create([
  "key" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Topic()->load(["id" => "topic_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Topic()->remove(["id" => "topic_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Topic()->update([
  "id" => "topic_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopicEntity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopicSubscriberDtoEntity

```php
$topic_subscriber_dto = $client->TopicSubscriberDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `environmentId` | `string` | Yes | Unique identifier for the environment |
| `externalSubscriberId` | `string` | Yes | External identifier for the subscriber |
| `organizationId` | `string` | Yes | Unique identifier for the organization |
| `subscriberId` | `string` | Yes | Unique identifier for the subscriber |
| `topicId` | `string` | Yes | Unique identifier for the topic |
| `topicKey` | `string` | Yes | Key associated with the topic |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TopicSubscriberDto()->load(["external_subscriber_id" => "external_subscriber_id", "topic_id" => "topic_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopicSubscriberDtoEntity`

Create a new `TopicSubscriberDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopicSubscriptionsResponseDtoEntity

```php
$topic_subscriptions_response_dto = $client->TopicSubscriptionsResponseDto();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TopicSubscriptionsResponseDto()->remove(["topic_key" => "topic_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopicSubscriptionsResponseDtoEntity`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranslationEntity

```php
$translation = $client->Translation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `array` | Yes | Translation content as JSON object |
| `id` | `string` | No |  |
| `locale` | `string` | Yes | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `string` | Yes | The resource ID to associate translation with. |
| `resourceType` | `string` | Yes | The resource type to associate translation with |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Translation()->create([
  "content" => null, // array
  "locale" => null, // string
  "resourceId" => null, // string
  "resourceType" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Translation()->load(["locale" => "locale", "resource_id" => "resource_id", "resource_type" => "resource_type"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Translation()->remove(["resource_id" => "resource_id", "resource_type" => "resource_type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranslationEntity`

Create a new `TranslationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranslationGroupDtoEntity

```php
$translation_group_dto = $client->TranslationGroupDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | No |  |
| `locales` | `array` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `array` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `string` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TranslationGroupDto()->load(["resource_id" => "resource_id", "resource_type" => "resource_type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranslationGroupDtoEntity`

Create a new `TranslationGroupDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TriggerEntity

```php
$trigger = $client->Trigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `mixed` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `array` | No |  |
| `name` | `string` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `mixed` | No | This could be used to override provider specific configurations |
| `payload` | `array` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `mixed` | No | It is used to specify a tenant context during trigger event. |
| `to` | `mixed` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | No | A unique identifier for deduplication. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Trigger()->create([
  "name" => null, // string
  "to" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TriggerEntity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TriggerEventResponseDtoEntity

```php
$trigger_event_response_dto = $client->TriggerEventResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `bool` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | No | Link to the activity feed for this trigger event |
| `actor` | `mixed` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `array` | No |  |
| `error` | `array` | No | In case of an error, this field will contain the error message(s) |
| `events` | `array` | Yes |  |
| `jobData` | `array` | No |  |
| `name` | `string` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `mixed` | No | This could be used to override provider specific configurations |
| `payload` | `array` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Yes | Status of the trigger |
| `tenant` | `mixed` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | No | The returned transaction ID of the trigger |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TriggerEventResponseDto()->create([
  "acknowledged" => null, // bool
  "events" => null, // array
  "name" => null, // string
  "payload" => null, // array
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TriggerEventResponseDtoEntity`

Create a new `TriggerEventResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UnseenEntity

```php
$unseen = $client->Unseen();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Unseen()->load(["subscriber_id" => "subscriber_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UnseenEntity`

Create a new `UnseenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadEntity

```php
$upload = $client->Upload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | List of error messages for failed uploads |
| `failedUploads` | `float` | Yes | Number of files that failed to upload |
| `successfulUploads` | `float` | Yes | Number of files successfully uploaded |
| `totalFiles` | `float` | Yes | Total number of files processed |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Upload()->create([
  "errors" => null, // array
  "failedUploads" => null, // float
  "successfulUploads" => null, // float
  "totalFiles" => null, // float
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadEntity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookResultDtoEntity

```php
$webhook_result_dto = $client->WebhookResultDto();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhookResultDto()->create([
  "environment_id" => null, // string
  "integration_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookResultDtoEntity`

Create a new `WebhookResultDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `mixed` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `array` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `mixed` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `array` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `array` | No | The payload JSON Schema for the workflow |
| `preferences` | `mixed` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `source` | `string` | No | Source of workflow creation |
| `status` | `string` | Yes | Workflow status |
| `stepTypeOverviews` | `array` | Yes | Overview of step types in the workflow |
| `steps` | `array` | Yes | Steps of the workflow |
| `tags` | `array` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `mixed` | No | User who last updated the workflow |
| `validatePayload` | `bool` | No | Enable or disable payload schema validation |
| `workflowId` | `string` | Yes | Workflow identifier |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active` | - | - | - | - | - |
| `agent` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `isTranslationEnabled` | - | - | - | - | - |
| `issues` | - | - | - | - | - |
| `lastPublishedAt` | - | - | - | - | - |
| `lastPublishedBy` | - | - | - | - | - |
| `lastTriggeredAt` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `origin` | - | - | - | Yes | - |
| `payloadExample` | - | - | - | - | - |
| `payloadSchema` | - | - | - | - | - |
| `preferences` | - | - | Yes | - | - |
| `severity` | - | - | Yes | Yes | - |
| `slug` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `stepTypeOverviews` | - | - | - | - | - |
| `steps` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `updatedBy` | - | - | - | - | - |
| `validatePayload` | - | - | - | - | - |
| `workflowId` | - | - | - | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Workflow()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "name" => null, // string
  "origin" => null, // string
  "preferences" => null, // mixed
  "severity" => null, // string
  "slug" => null, // string
  "status" => null, // string
  "stepTypeOverviews" => null, // array
  "steps" => null, // array
  "updatedAt" => null, // string
  "workflowId" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Workflow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->remove(["id" => "workflow_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Workflow()->update([
  "id" => "workflow_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowInfoDtoEntity

```php
$workflow_info_dto = $client->WorkflowInfoDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkflowInfoDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowInfoDtoEntity`

Create a new `WorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowResponseDtoEntity

```php
$workflow_response_dto = $client->WorkflowResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `mixed` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `array` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `mixed` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `array` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `array` | No | The payload JSON Schema for the workflow |
| `preferences` | `mixed` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `status` | `string` | Yes | Workflow status |
| `steps` | `array` | Yes | Steps of the workflow |
| `tags` | `array` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `mixed` | No | User who last updated the workflow |
| `validatePayload` | `bool` | No | Enable or disable payload schema validation |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkflowResponseDto()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowResponseDtoEntity`

Create a new `WorkflowResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```php
$client = new NovuSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

