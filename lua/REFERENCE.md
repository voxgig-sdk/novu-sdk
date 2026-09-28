# Novu Lua SDK Reference

Complete API reference for the Novu Lua SDK.


## NovuSDK

### Constructor

```lua
local sdk = require("novu_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ActivityNotificationResponseDto(data)`

Create a new `ActivityNotificationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Agent(data)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentIntegrationResponseDto(data)`

Create a new `AgentIntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `AgentResponseDto(data)`

Create a new `AgentResponseDto` entity instance. Pass `nil` for no initial data.

#### `Bulk(data)`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `ChannelConnection(data)`

Create a new `ChannelConnection` entity instance. Pass `nil` for no initial data.

#### `ChannelEndpoint(data)`

Create a new `ChannelEndpoint` entity instance. Pass `nil` for no initial data.

#### `Configure(data)`

Create a new `Configure` entity instance. Pass `nil` for no initial data.

#### `Context(data)`

Create a new `Context` entity instance. Pass `nil` for no initial data.

#### `CreateSubscriptionsResponseDto(data)`

Create a new `CreateSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Diff(data)`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Domain(data)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DomainConnectApplyUrlResponseDto(data)`

Create a new `DomainConnectApplyUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainConnectStatusResponseDto(data)`

Create a new `DomainConnectStatusResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainResponseDto(data)`

Create a new `DomainResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainRouteResponseDto(data)`

Create a new `DomainRouteResponseDto` entity instance. Pass `nil` for no initial data.

#### `Environment(data)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `EnvironmentTagsDto(data)`

Create a new `EnvironmentTagsDto` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data)`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariableWorkflowInfoDto(data)`

Create a new `EnvironmentVariableWorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `GenerateChatOAuthUrlResponseDto(data)`

Create a new `GenerateChatOAuthUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `GeneratePreviewResponseDto(data)`

Create a new `GeneratePreviewResponseDto` entity instance. Pass `nil` for no initial data.

#### `ImportMasterJsonResponseDto(data)`

Create a new `ImportMasterJsonResponseDto` entity instance. Pass `nil` for no initial data.

#### `InboxNotificationDto(data)`

Create a new `InboxNotificationDto` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationResponseDto(data)`

Create a new `IntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Layout(data)`

Create a new `Layout` entity instance. Pass `nil` for no initial data.

#### `LayoutResponseDto(data)`

Create a new `LayoutResponseDto` entity instance. Pass `nil` for no initial data.

#### `Link(data)`

Create a new `Link` entity instance. Pass `nil` for no initial data.

#### `ListAgentIntegrationsResponseDto(data)`

Create a new `ListAgentIntegrationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListAgentsResponseDto(data)`

Create a new `ListAgentsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListChannelConnectionsResponseDto(data)`

Create a new `ListChannelConnectionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListChannelEndpointsResponseDto(data)`

Create a new `ListChannelEndpointsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListContextsResponseDto(data)`

Create a new `ListContextsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListDomainRoutesResponseDto(data)`

Create a new `ListDomainRoutesResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListDomainsResponseDto(data)`

Create a new `ListDomainsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListSubscribersResponseDto(data)`

Create a new `ListSubscribersResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListTopicSubscriptionsResponseDto(data)`

Create a new `ListTopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListTopicsResponseDto(data)`

Create a new `ListTopicsResponseDto` entity instance. Pass `nil` for no initial data.

#### `MasterJson(data)`

Create a new `MasterJson` entity instance. Pass `nil` for no initial data.

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `MessageResponseDto(data)`

Create a new `MessageResponseDto` entity instance. Pass `nil` for no initial data.

#### `NotificationFeedItemDto(data)`

Create a new `NotificationFeedItemDto` entity instance. Pass `nil` for no initial data.

#### `PreferencesResponseDto(data)`

Create a new `PreferencesResponseDto` entity instance. Pass `nil` for no initial data.

#### `Publish(data)`

Create a new `Publish` entity instance. Pass `nil` for no initial data.

#### `RemoveSubscriberResponseDto(data)`

Create a new `RemoveSubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Step(data)`

Create a new `Step` entity instance. Pass `nil` for no initial data.

#### `Subscriber(data)`

Create a new `Subscriber` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsCountResponseDto(data)`

Create a new `SubscriberNotificationsCountResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsResponseDto(data)`

Create a new `SubscriberNotificationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberPreferencesDto(data)`

Create a new `SubscriberPreferencesDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberResponseDto(data)`

Create a new `SubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Subscription(data)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `Topic(data)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriberDto(data)`

Create a new `TopicSubscriberDto` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriptionsResponseDto(data)`

Create a new `TopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Translation(data)`

Create a new `Translation` entity instance. Pass `nil` for no initial data.

#### `TranslationGroupDto(data)`

Create a new `TranslationGroupDto` entity instance. Pass `nil` for no initial data.

#### `Trigger(data)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `TriggerEventResponseDto(data)`

Create a new `TriggerEventResponseDto` entity instance. Pass `nil` for no initial data.

#### `Unseen(data)`

Create a new `Unseen` entity instance. Pass `nil` for no initial data.

#### `Upload(data)`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `WebhookResultDto(data)`

Create a new `WebhookResultDto` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowInfoDto(data)`

Create a new `WorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `WorkflowResponseDto(data)`

Create a new `WorkflowResponseDto` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActivityNotificationResponseDtoEntity

```lua
local activity_notification_response_dto = client:ActivityNotificationResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `table` | No |  |
| `contextKeys` | `table` | No | Context (single or multi) in which the notification was sent |
| `controls` | `table` | No | Controls associated with the notification |
| `createdAt` | `string` | No | Creation time of the notification |
| `critical` | `boolean` | No | Criticality of the notification |
| `digestedNotificationId` | `string` | No | Digested Notification ID |
| `environmentId` | `string` | Yes | Environment ID of the notification |
| `id` | `string` | No | Unique identifier of the notification |
| `jobs` | `table` | No | Jobs of the notification |
| `organizationId` | `string` | Yes | Organization ID of the notification |
| `payload` | `table` | No | Payload of the notification |
| `severity` | `string` | No | Workflow severity |
| `subscriber` | `any` | No | Subscriber of the notification |
| `subscriberId` | `string` | Yes | Subscriber ID of the notification |
| `tags` | `table` | No | Tags associated with the notification |
| `template` | `any` | No | Template of the notification |
| `templateId` | `string` | No | Template ID of the notification |
| `to` | `table` | No | To field for subscriber definition |
| `topics` | `table` | No | Topics of the notification |
| `transactionId` | `string` | Yes | Transaction ID of the notification |
| `updatedAt` | `string` | No | Last updated time of the notification |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActivityNotificationResponseDto():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActivityNotificationResponseDto():load({ notification_id = "notification_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentEntity

```lua
local agent = client:Agent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `table` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes | Required when not adopting an existing managed agent. |
| `integrations` | `table` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Agent():create({
  active = --[[ boolean ]],
  behavior = --[[ table ]],
  createdAt = --[[ string ]],
  environmentId = --[[ string ]],
  id = --[[ string ]],
  identifier = --[[ string ]],
  name = --[[ string ]],
  organizationId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Agent():load({ id = "agent_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Agent():remove({ id = "agent_id", delete_from_provider = "delete_from_provider" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Agent():update({
  id = "agent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentIntegrationResponseDtoEntity

```lua
local agent_integration_response_dto = client:AgentIntegrationResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `table` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentIntegrationResponseDto():create({
  identifier = --[[ string ]],
  agentId = --[[ string ]],
  createdAt = --[[ string ]],
  environmentId = --[[ string ]],
  id = --[[ string ]],
  integration = --[[ table ]],
  organizationId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AgentIntegrationResponseDto():update({
  agent_id = "agent_id",
  agent_integration_id = "agent_integration_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentResponseDtoEntity

```lua
local agent_response_dto = client:AgentResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `table` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes |  |
| `integrations` | `table` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AgentResponseDto():update({
  identifier = "identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkEntity

```lua
local bulk = client:Bulk(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `table` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Bulk():create({
  subscribers = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChannelConnectionEntity

```lua
local channel_connection = client:ChannelConnection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `table` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `table` | No |  |
| `contextKeys` | `table` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `table` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ChannelConnection():create({
  auth = --[[ table ]],
  channel = --[[ string ]],
  contextKeys = --[[ table ]],
  createdAt = --[[ string ]],
  identifier = --[[ string ]],
  integrationIdentifier = --[[ string ]],
  providerId = --[[ string ]],
  subscriberId = --[[ string ]],
  updatedAt = --[[ string ]],
  workspace = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ChannelConnection():load({ id = "channel_connection_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ChannelConnection():remove({ id = "channel_connection_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ChannelConnection():update({
  id = "channel_connection_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChannelEndpointEntity

```lua
local channel_endpoint = client:ChannelEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `table` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `any` | Yes | Endpoint data specific to the channel type |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Yes | Type of channel endpoint |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ChannelEndpoint():create({
  channel = --[[ string ]],
  connectionIdentifier = --[[ string ]],
  contextKeys = --[[ table ]],
  createdAt = --[[ string ]],
  endpoint = --[[ any ]],
  identifier = --[[ string ]],
  integrationIdentifier = --[[ string ]],
  providerId = --[[ string ]],
  subscriberId = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ChannelEndpoint():load({ id = "channel_endpoint_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ChannelEndpoint():remove({ id = "channel_endpoint_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ChannelEndpoint():update({
  id = "channel_endpoint_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConfigureEntity

```lua
local configure = client:Configure(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `string` | Yes | Resolved bot username from getMe |
| `configuredAt` | `string` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Configure():create({
  integration_id = --[[ string ]],
  botUsername = --[[ string ]],
  configuredAt = --[[ string ]],
  webhookUrl = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContextEntity

```lua
local context = client:Context(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Optional bridge URL override for agent connect. |
| `data` | `table` | No | Optional custom data to associate with this context. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Context():create({
  id = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Context():load({ id = "context_id", type = "type" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Context():remove({ id = "context_id", type = "type" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Context():update({
  id = "context_id",
  type = "type",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContextEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateSubscriptionsResponseDtoEntity

```lua
local create_subscriptions_response_dto = client:CreateSubscriptionsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `table` | No |  |
| `name` | `string` | No | The name of the topic |
| `preferences` | `table` | No | The preferences of the topic. |
| `subscriberIds` | `table` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `table` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateSubscriptionsResponseDto():create({
  topic_key = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DiffEntity

```lua
local diff = client:Diff(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `table` | Yes | Diff resources by resource type |
| `sourceEnvironmentId` | `string` | Yes | Source environment ID |
| `summary` | `any` | Yes | Overall summary |
| `targetEnvironmentId` | `string` | Yes | Target environment ID |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `resources` | - |
| `sourceEnvironmentId` | Yes |
| `summary` | - |
| `targetEnvironmentId` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Diff():create({
  environment_id = --[[ string ]],
  resources = --[[ table ]],
  sourceEnvironmentId = --[[ string ]],
  summary = --[[ any ]],
  targetEnvironmentId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainEntity

```lua
local domain = client:Domain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `table` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `table` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes | The domain name (e.g. |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Domain():create({
  createdAt = --[[ string ]],
  environmentId = --[[ string ]],
  id = --[[ string ]],
  mxRecordConfigured = --[[ boolean ]],
  name = --[[ string ]],
  organizationId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Domain():load({ id = "domain_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Domain():remove({ id = "domain_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Domain():update({
  id = "domain_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainConnectApplyUrlResponseDtoEntity

```lua
local domain_connect_apply_url_response_dto = client:DomainConnectApplyUrlResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `string` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DomainConnectApplyUrlResponseDto():create({
  domain_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainConnectStatusResponseDtoEntity

```lua
local domain_connect_status_response_dto = client:DomainConnectStatusResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DomainConnectStatusResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainResponseDtoEntity

```lua
local domain_response_dto = client:DomainResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `table` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `table` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DomainResponseDto():create({
  id = --[[ string ]],
  createdAt = --[[ string ]],
  environmentId = --[[ string ]],
  mxRecordConfigured = --[[ boolean ]],
  name = --[[ string ]],
  organizationId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainRouteResponseDtoEntity

```lua
local domain_route_response_dto = client:DomainRouteResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | No | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `table` | No | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DomainRouteResponseDto():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DomainRouteResponseDto():load({ address = "address", domain_id = "domain_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DomainRouteResponseDto():update({
  address = "address",
  domain_id = "domain_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainRouteResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentEntity

```lua
local environment = client:Environment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `table` | No | List of API keys associated with the environment |
| `bridge` | `table` | No |  |
| `color` | `string` | Yes | Hex color code for the environment |
| `dns` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Environment():create({
  color = --[[ string ]],
  id = --[[ string ]],
  identifier = --[[ string ]],
  name = --[[ string ]],
  organizationId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Environment():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Environment():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Environment():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentTagsDtoEntity

```lua
local environment_tags_dto = client:EnvironmentTagsDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnvironmentTagsDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentTagsDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentVariableEntity

```lua
local environment_variable = client:EnvironmentVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `isSecret` | `boolean` | Yes | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `string` | Yes | Unique key for the variable. |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes | The type of the variable |
| `updatedAt` | `string` | Yes |  |
| `values` | `table` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EnvironmentVariable():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  isSecret = --[[ boolean ]],
  key = --[[ string ]],
  organizationId = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
  values = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnvironmentVariable():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EnvironmentVariable():load({ id = "environment_variable_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EnvironmentVariable():remove({ id = "environment_variable_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EnvironmentVariable():update({
  id = "environment_variable_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```lua
local environment_variable_workflow_info_dto = client:EnvironmentVariableWorkflowInfoDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnvironmentVariableWorkflowInfoDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Event():remove({ transaction_id = "transaction_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateChatOAuthUrlResponseDtoEntity

```lua
local generate_chat_o_auth_url_response_dto = client:GenerateChatOAuthUrlResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `boolean` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `table` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier |
| `mode` | `string` | No | OAuth flow mode. |
| `scope` | `table` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `table` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GenerateChatOAuthUrlResponseDto():create({
  integrationIdentifier = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeneratePreviewResponseDtoEntity

```lua
local generate_preview_response_dto = client:GeneratePreviewResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `table` | No | Optional control values |
| `previewPayload` | `any` | No | Optional payload for preview generation |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GeneratePreviewResponseDto():create({
  step_id = --[[ string ]],
  workflow_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImportMasterJsonResponseDtoEntity

```lua
local import_master_json_response_dto = client:ImportMasterJsonResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `table` | No | List of resource IDs that failed to import |
| `locale` | `string` | Yes | The locale for which translations are being imported |
| `masterJson` | `table` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Yes | Human-readable message describing the import result |
| `success` | `boolean` | Yes | Overall success status of the import operation |
| `successful` | `table` | No | List of resource IDs that were successfully imported |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImportMasterJsonResponseDto():create({
  locale = --[[ string ]],
  masterJson = --[[ table ]],
  message = --[[ string ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InboxNotificationDtoEntity

```lua
local inbox_notification_dto = client:InboxNotificationDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `string` | No | ISO timestamp when the notification was archived |
| `avatar` | `string` | No | Avatar URL for the notification |
| `body` | `string` | Yes | Body content of the notification |
| `channelType` | `string` | Yes | Channel the message was sent on |
| `createdAt` | `string` | Yes | ISO timestamp when the notification was created |
| `data` | `table` | No | Custom data payload of the notification |
| `deliveredAt` | `table` | No | Timestamps when the notification was delivered |
| `firstSeenAt` | `string` | No | ISO timestamp when the notification was first seen |
| `id` | `string` | Yes | Unique identifier of the notification |
| `isArchived` | `boolean` | Yes | Whether the notification has been archived |
| `isRead` | `boolean` | Yes | Whether the notification has been read |
| `isSeen` | `boolean` | Yes | Whether the notification has been seen |
| `isSnoozed` | `boolean` | Yes | Whether the notification is snoozed |
| `primaryAction` | `any` | No | Primary action button for the notification |
| `readAt` | `string` | No | ISO timestamp when the notification was read |
| `redirect` | `any` | No | Redirect configuration for the notification |
| `secondaryAction` | `any` | No | Secondary action button for the notification |
| `severity` | `string` | Yes | Workflow severity |
| `snoozeUntil` | `string` | Yes | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `string` | No | ISO timestamp when the notification will be unsnoozed |
| `subject` | `string` | No | Subject of the notification |
| `tags` | `table` | No | Tags associated with the notification |
| `to` | `any` | Yes | Subscriber this notification was sent to |
| `transactionId` | `string` | Yes | Transaction identifier of the notification |
| `workflow` | `any` | No | Workflow associated with the notification |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InboxNotificationDto():update({
  notification_id = "notification_id",
  subscriber_id = "subscriber_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboxNotificationDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | No | The channel type for the integration. |
| `check` | `boolean` | No | Flag to check the integration status |
| `conditions` | `table` | No | Legacy StepFilter conditions. |
| `configurations` | `table` | No | Configurations for the integration |
| `credentials` | `any` | No | The credentials for the integration |
| `deleted` | `boolean` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | No | The ID of the associated environment |
| `id` | `string` | No | The unique identifier of the integration record in the database. |
| `identifier` | `string` | No | The unique identifier for the integration |
| `kind` | `string` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | No | The name of the integration |
| `organizationId` | `string` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `boolean` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | No | The provider ID for the integration |
| `rules` | `table` | No | JSONLogic used at send time to select this integration. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Integration():create({
  deleted = --[[ boolean ]],
  organizationId = --[[ string ]],
  primary = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Integration():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Integration():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Integration():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationResponseDtoEntity

```lua
local integration_response_dto = client:IntegrationResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Indicates whether the integration is currently active. |
| `channel` | `string` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `table` | No | Legacy StepFilter conditions. |
| `configurations` | `any` | No | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `any` | No | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `boolean` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `string` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `string` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `string` | Yes | The unique identifier for the environment associated with this integration. |
| `id` | `string` | No | The unique identifier of the integration record in the database. |
| `identifier` | `string` | Yes | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `string` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `string` | Yes | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `string` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `boolean` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `string` | Yes | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `table` | No | JSONLogic used at send time to select this integration. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IntegrationResponseDto():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  deleted = --[[ boolean ]],
  environmentId = --[[ string ]],
  identifier = --[[ string ]],
  name = --[[ string ]],
  organizationId = --[[ string ]],
  primary = --[[ boolean ]],
  providerId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IntegrationResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LayoutEntity

```lua
local layout = client:Layout(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `any` | No | Control values for the layout. |
| `controls` | `any` | Yes | Controls metadata for the layout |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | Yes | Unique internal identifier of the layout |
| `isDefault` | `boolean` | Yes | Whether the layout is the default layout |
| `isTranslationEnabled` | `boolean` | Yes | Whether the layout translations are enabled |
| `layoutId` | `string` | Yes | Unique identifier for the layout |
| `name` | `string` | Yes | Name of the layout |
| `origin` | `string` | Yes | Workflow origin |
| `slug` | `string` | Yes | Slug of the layout |
| `source` | `string` | No | Source of layout creation |
| `type` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the layout |
| `variables` | `table` | No | The variables JSON Schema for the layout |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Layout():create({
  controls = --[[ any ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  isDefault = --[[ boolean ]],
  isTranslationEnabled = --[[ boolean ]],
  layoutId = --[[ string ]],
  name = --[[ string ]],
  origin = --[[ string ]],
  slug = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Layout():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Layout():load({ id = "layout_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Layout():remove({ id = "layout_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Layout():update({
  id = "layout_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LayoutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LayoutResponseDtoEntity

```lua
local layout_response_dto = client:LayoutResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LayoutResponseDto():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LayoutResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkEntity

```lua
local link = client:Link(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `table` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Link():create({
  integrationIdentifier = --[[ string ]],
  subscriberId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListAgentIntegrationsResponseDtoEntity

```lua
local list_agent_integrations_response_dto = client:ListAgentIntegrationsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `table` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `table` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListAgentIntegrationsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListAgentsResponseDtoEntity

```lua
local list_agents_response_dto = client:ListAgentsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `table` | Yes |  |
| `bridgeUrl` | `string` | No | Production bridge URL |
| `createdAt` | `string` | Yes |  |
| `createdBy` | `string` | No | Mongo user id of the user who created the agent |
| `description` | `string` | No |  |
| `devBridgeActive` | `boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `string` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes |  |
| `identifier` | `string` | Yes |  |
| `integrations` | `table` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListAgentsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAgentsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListChannelConnectionsResponseDtoEntity

```lua
local list_channel_connections_response_dto = client:ListChannelConnectionsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `table` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `table` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListChannelConnectionsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListChannelConnectionsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListChannelEndpointsResponseDtoEntity

```lua
local list_channel_endpoints_response_dto = client:ListChannelEndpointsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `table` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `any` | Yes | Endpoint data specific to the channel type |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Yes | Type of channel endpoint |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListChannelEndpointsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListChannelEndpointsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListContextsResponseDtoEntity

```lua
local list_contexts_response_dto = client:ListContextsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Yes | Creation timestamp |
| `data` | `table` | Yes | Custom data associated with this context |
| `id` | `string` | Yes | Unique identifier for this context |
| `type` | `string` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListContextsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListContextsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListDomainRoutesResponseDtoEntity

```lua
local list_domain_routes_response_dto = client:ListDomainRoutesResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes |  |
| `agentId` | `string` | No | Internal id of the destination agent. |
| `createdAt` | `string` | Yes |  |
| `data` | `table` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListDomainRoutesResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListDomainsResponseDtoEntity

```lua
local list_domains_response_dto = client:ListDomainsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `table` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `table` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListDomainsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDomainsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSubscribersResponseDtoEntity

```lua
local list_subscribers_response_dto = client:ListSubscribersResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `table` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | No | Additional custom data for the subscriber |
| `deleted` | `boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `table` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListSubscribersResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubscribersResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListTopicSubscriptionsResponseDtoEntity

```lua
local list_topic_subscriptions_response_dto = client:ListTopicSubscriptionsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `table` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The date and time the subscription was created |
| `id` | `string` | Yes | The identifier of the subscription |
| `identifier` | `string` | Yes | The identifier of the subscription |
| `preferences` | `table` | No | The preferences for workflows in this subscription |
| `subscriber` | `any` | Yes | Subscriber information |
| `topic` | `any` | Yes | Topic information |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListTopicSubscriptionsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListTopicsResponseDtoEntity

```lua
local list_topics_response_dto = client:ListTopicsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No | The date the topic was created |
| `data` | `table` | No | Additional custom data associated with the topic |
| `id` | `string` | Yes | The identifier of the topic |
| `key` | `string` | Yes | The unique key of the topic |
| `name` | `string` | No | The name of the topic |
| `updatedAt` | `string` | No | The date the topic was last updated |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListTopicsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListTopicsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MasterJsonEntity

```lua
local master_json = client:MasterJson(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `table` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `table` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MasterJson():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MasterJsonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageEntity

```lua
local message = client:Message(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `any` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `table` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Yes | Creation date of the message |
| `cta` | `any` | Yes | Call to action associated with the message |
| `deliveredAt` | `table` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `table` | No | Device tokens associated with the message, if applicable |
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
| `overrides` | `table` | No | Provider specific overrides used when triggering the notification |
| `payload` | `table` | No | The payload that was used to send the notification trigger |
| `phone` | `string` | No | Phone number associated with the message, if applicable |
| `providerId` | `string` | No | Provider ID associated with the message, if applicable |
| `read` | `boolean` | Yes | Indicates if the message has been read |
| `seen` | `boolean` | Yes | Indicates if the message has been seen |
| `snoozedUntil` | `string` | No | Date when the message will be unsnoozed |
| `status` | `string` | Yes | Status of the message |
| `subject` | `string` | No | Subject of the message, if applicable |
| `subscriber` | `any` | No | Subscriber details, if available |
| `subscriberId` | `string` | Yes | Subscriber ID associated with the message |
| `template` | `any` | No | Workflow template associated with the message |
| `templateId` | `string` | No | Template ID associated with the message |
| `templateIdentifier` | `string` | No | Identifier for the message template |
| `title` | `string` | No | Title of the message, if applicable |
| `transactionId` | `string` | Yes | Transaction ID associated with the message |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Message():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Message():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageResponseDtoEntity

```lua
local message_response_dto = client:MessageResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `string` | Yes |  |
| `messageId` | `any` | Yes |  |
| `payload` | `table` | No | Message action payload |
| `status` | `string` | Yes | Message action status |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MessageResponseDto():create({
  subscriber_id = --[[ string ]],
  markAs = --[[ string ]],
  messageId = --[[ any ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationFeedItemDtoEntity

```lua
local notification_feed_item_dto = client:NotificationFeedItemDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `any` | No | Actor details related to the notification, if applicable. |
| `archived` | `boolean` | Yes | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `string` | Yes | The main content of the notification. |
| `createdAt` | `string` | No | Timestamp indicating when the notification was created. |
| `cta` | `any` | Yes | Call-to-action information associated with the notification. |
| `data` | `table` | No | The data sent with the notification. |
| `deviceTokens` | `table` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | No | Identifier for the feed associated with the notification. |
| `id` | `string` | Yes | Unique identifier for the notification. |
| `jobId` | `string` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | No | Identifier for the message template used. |
| `notificationId` | `string` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `string` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `table` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `table` | No | The payload that was used to send the notification trigger. |
| `providerId` | `string` | No | Identifier for the provider that sends the notification. |
| `read` | `boolean` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `boolean` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Yes | Current status of the notification. |
| `subject` | `string` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `any` | No | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `table` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | No | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NotificationFeedItemDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationFeedItemDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PreferencesResponseDtoEntity

```lua
local preferences_response_dto = client:PreferencesResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `table` | No |  |
| `preferences` | `table` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PreferencesResponseDto():update({
  subscriber_id = "subscriber_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreferencesResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublishEntity

```lua
local publish = client:Publish(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `boolean` | No | Perform a dry run without making actual changes |
| `resources` | `table` | No | Array of specific resources to publish. |
| `results` | `table` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `string` | No | Source environment ID to sync from. |
| `summary` | `any` | Yes | Summary of the sync operation |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Publish():create({
  environment_id = --[[ string ]],
  results = --[[ table ]],
  summary = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublishEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemoveSubscriberResponseDtoEntity

```lua
local remove_subscriber_response_dto = client:RemoveSubscriberResponseDto(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:RemoveSubscriberResponseDto():remove({ subscriber_id = "subscriber_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StepEntity

```lua
local step = client:Step(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `table` | No | Control values for the step (alias for controls.values) |
| `controls` | `any` | Yes | Controls metadata for the step |
| `id` | `string` | Yes | Database identifier of the step |
| `issues` | `any` | No | Issues associated with the step |
| `name` | `string` | Yes | Name of the step |
| `origin` | `string` | Yes | Workflow origin |
| `providerOverrides` | `table` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Yes | Slug of the step |
| `stepId` | `string` | Yes | Unique identifier of the step |
| `stepResolverHash` | `string` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Yes | Type of the step |
| `variables` | `table` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Yes | Workflow database identifier |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Step():load({ id = "step_id", workflow_id = "workflow_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StepEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberEntity

```lua
local subscriber = client:Subscriber(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `table` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | No | Additional custom data for the subscriber |
| `deleted` | `boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `table` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Subscriber():create({
  createdAt = --[[ string ]],
  deleted = --[[ boolean ]],
  environmentId = --[[ string ]],
  organizationId = --[[ string ]],
  subscriberId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Subscriber():load({ id = "subscriber_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Subscriber():remove({ id = "subscriber_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Subscriber():update({
  id = "subscriber_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberNotificationsCountResponseDtoEntity

```lua
local subscriber_notifications_count_response_dto = client:SubscriberNotificationsCountResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The count of notifications matching the filter |
| `filter` | `table` | Yes | The filter applied |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriberNotificationsCountResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberNotificationsResponseDtoEntity

```lua
local subscriber_notifications_response_dto = client:SubscriberNotificationsResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriberNotificationsResponseDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberPreferencesDtoEntity

```lua
local subscriber_preferences_dto = client:SubscriberPreferencesDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriberPreferencesDto():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriberPreferencesDto():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberPreferencesDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberResponseDtoEntity

```lua
local subscriber_response_dto = client:SubscriberResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `table` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `table` | No | Additional custom data for the subscriber |
| `deleted` | `boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `string` | No | The email address of the subscriber. |
| `environmentId` | `string` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `string` | No | The first name of the subscriber. |
| `id` | `string` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `string` | No | The last name of the subscriber. |
| `lastOnlineAt` | `string` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `string` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `string` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `string` | No | The phone number of the subscriber. |
| `subscriberId` | `string` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `string` | No | Timezone of the subscriber |
| `topics` | `table` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriberResponseDto():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionEntity

```lua
local subscription = client:Subscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `table` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The creation date of the subscription |
| `id` | `string` | Yes | The unique identifier of the subscription |
| `identifier` | `string` | No | The identifier of the subscription |
| `name` | `string` | No | The name of the subscription |
| `preferences` | `table` | No | The preferences/rules for the subscription |
| `subscriber` | `any` | Yes | The subscriber information |
| `topic` | `any` | Yes | The topic information |
| `updatedAt` | `string` | Yes | The last update date of the subscription |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Subscription():load({ id = "subscription_id", topic_id = "topic_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Subscription():update({
  id = "subscription_id",
  topic_id = "topic_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicEntity

```lua
local topic = client:Topic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | Additional custom data associated with the topic. |
| `id` | `string` | No |  |
| `key` | `string` | Yes | The unique key identifier for the topic. |
| `name` | `string` | No | The display name for the topic |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Topic():create({
  key = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Topic():load({ id = "topic_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Topic():remove({ id = "topic_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Topic():update({
  id = "topic_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicSubscriberDtoEntity

```lua
local topic_subscriber_dto = client:TopicSubscriberDto(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TopicSubscriberDto():load({ external_subscriber_id = "external_subscriber_id", topic_id = "topic_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicSubscriberDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicSubscriptionsResponseDtoEntity

```lua
local topic_subscriptions_response_dto = client:TopicSubscriptionsResponseDto(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TopicSubscriptionsResponseDto():remove({ topic_key = "topic_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranslationEntity

```lua
local translation = client:Translation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `table` | Yes | Translation content as JSON object |
| `id` | `string` | No |  |
| `locale` | `string` | Yes | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `string` | Yes | The resource ID to associate translation with. |
| `resourceType` | `string` | Yes | The resource type to associate translation with |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Translation():create({
  content = --[[ table ]],
  locale = --[[ string ]],
  resourceId = --[[ string ]],
  resourceType = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Translation():load({ locale = "locale", resource_id = "resource_id", resource_type = "resource_type" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Translation():remove({ resource_id = "resource_id", resource_type = "resource_type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranslationGroupDtoEntity

```lua
local translation_group_dto = client:TranslationGroupDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | No |  |
| `locales` | `table` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `table` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `string` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TranslationGroupDto():load({ resource_id = "resource_id", resource_type = "resource_type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslationGroupDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriggerEntity

```lua
local trigger = client:Trigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `table` | No |  |
| `name` | `string` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `table` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `to` | `any` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | No | A unique identifier for deduplication. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Trigger():create({
  name = --[[ string ]],
  to = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriggerEventResponseDtoEntity

```lua
local trigger_event_response_dto = client:TriggerEventResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `boolean` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | No | Link to the activity feed for this trigger event |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `table` | No |  |
| `error` | `table` | No | In case of an error, this field will contain the error message(s) |
| `events` | `table` | Yes |  |
| `jobData` | `table` | No |  |
| `name` | `string` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `table` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Yes | Status of the trigger |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | No | The returned transaction ID of the trigger |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TriggerEventResponseDto():create({
  acknowledged = --[[ boolean ]],
  events = --[[ table ]],
  name = --[[ string ]],
  payload = --[[ table ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEventResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UnseenEntity

```lua
local unseen = client:Unseen(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Unseen():load({ subscriber_id = "subscriber_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnseenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadEntity

```lua
local upload = client:Upload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | List of error messages for failed uploads |
| `failedUploads` | `number` | Yes | Number of files that failed to upload |
| `successfulUploads` | `number` | Yes | Number of files successfully uploaded |
| `totalFiles` | `number` | Yes | Total number of files processed |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Upload():create({
  errors = --[[ table ]],
  failedUploads = --[[ number ]],
  successfulUploads = --[[ number ]],
  totalFiles = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookResultDtoEntity

```lua
local webhook_result_dto = client:WebhookResultDto(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhookResultDto():create({
  environment_id = --[[ string ]],
  integration_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookResultDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Whether the workflow is active |
| `agent` | `any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `boolean` | No | Enable or disable translations for this workflow |
| `issues` | `table` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `table` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `table` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `source` | `string` | No | Source of workflow creation |
| `status` | `string` | Yes | Workflow status |
| `stepTypeOverviews` | `table` | Yes | Overview of step types in the workflow |
| `steps` | `table` | Yes | Steps of the workflow |
| `tags` | `table` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the workflow |
| `validatePayload` | `boolean` | No | Enable or disable payload schema validation |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Workflow():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  origin = --[[ string ]],
  preferences = --[[ any ]],
  severity = --[[ string ]],
  slug = --[[ string ]],
  status = --[[ string ]],
  stepTypeOverviews = --[[ table ]],
  steps = --[[ table ]],
  updatedAt = --[[ string ]],
  workflowId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Workflow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = "workflow_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Workflow():remove({ id = "workflow_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Workflow():update({
  id = "workflow_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowInfoDtoEntity

```lua
local workflow_info_dto = client:WorkflowInfoDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkflowInfoDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowResponseDtoEntity

```lua
local workflow_response_dto = client:WorkflowResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Whether the workflow is active |
| `agent` | `any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `boolean` | No | Enable or disable translations for this workflow |
| `issues` | `table` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `table` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `table` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `status` | `string` | Yes | Workflow status |
| `steps` | `table` | Yes | Steps of the workflow |
| `tags` | `table` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the workflow |
| `validatePayload` | `boolean` | No | Enable or disable payload schema validation |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkflowResponseDto():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
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

