# Novu Ruby SDK Reference

Complete API reference for the Novu Ruby SDK.


## NovuSDK

### Constructor

```ruby
require_relative 'Novu_sdk'

client = NovuSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NovuSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = NovuSDK.test
```


### Instance Methods

#### `ActivityNotificationResponseDto(data = nil)`

Create a new `ActivityNotificationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Agent(data = nil)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentIntegrationResponseDto(data = nil)`

Create a new `AgentIntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `AgentResponseDto(data = nil)`

Create a new `AgentResponseDto` entity instance. Pass `nil` for no initial data.

#### `Bulk(data = nil)`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `ChannelConnection(data = nil)`

Create a new `ChannelConnection` entity instance. Pass `nil` for no initial data.

#### `ChannelEndpoint(data = nil)`

Create a new `ChannelEndpoint` entity instance. Pass `nil` for no initial data.

#### `Configure(data = nil)`

Create a new `Configure` entity instance. Pass `nil` for no initial data.

#### `Context(data = nil)`

Create a new `Context` entity instance. Pass `nil` for no initial data.

#### `CreateSubscriptionsResponseDto(data = nil)`

Create a new `CreateSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Diff(data = nil)`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Domain(data = nil)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DomainConnectApplyUrlResponseDto(data = nil)`

Create a new `DomainConnectApplyUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainConnectStatusResponseDto(data = nil)`

Create a new `DomainConnectStatusResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainResponseDto(data = nil)`

Create a new `DomainResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainRouteResponseDto(data = nil)`

Create a new `DomainRouteResponseDto` entity instance. Pass `nil` for no initial data.

#### `Environment(data = nil)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `EnvironmentTagsDto(data = nil)`

Create a new `EnvironmentTagsDto` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data = nil)`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariableWorkflowInfoDto(data = nil)`

Create a new `EnvironmentVariableWorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `Event(data = nil)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `GenerateChatOAuthUrlResponseDto(data = nil)`

Create a new `GenerateChatOAuthUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `GeneratePreviewResponseDto(data = nil)`

Create a new `GeneratePreviewResponseDto` entity instance. Pass `nil` for no initial data.

#### `ImportMasterJsonResponseDto(data = nil)`

Create a new `ImportMasterJsonResponseDto` entity instance. Pass `nil` for no initial data.

#### `InboxNotificationDto(data = nil)`

Create a new `InboxNotificationDto` entity instance. Pass `nil` for no initial data.

#### `Integration(data = nil)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationResponseDto(data = nil)`

Create a new `IntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Layout(data = nil)`

Create a new `Layout` entity instance. Pass `nil` for no initial data.

#### `LayoutResponseDto(data = nil)`

Create a new `LayoutResponseDto` entity instance. Pass `nil` for no initial data.

#### `Link(data = nil)`

Create a new `Link` entity instance. Pass `nil` for no initial data.

#### `ListAgentIntegrationsResponseDto(data = nil)`

Create a new `ListAgentIntegrationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListAgentsResponseDto(data = nil)`

Create a new `ListAgentsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListChannelConnectionsResponseDto(data = nil)`

Create a new `ListChannelConnectionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListChannelEndpointsResponseDto(data = nil)`

Create a new `ListChannelEndpointsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListContextsResponseDto(data = nil)`

Create a new `ListContextsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListDomainRoutesResponseDto(data = nil)`

Create a new `ListDomainRoutesResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListDomainsResponseDto(data = nil)`

Create a new `ListDomainsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListSubscribersResponseDto(data = nil)`

Create a new `ListSubscribersResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListTopicSubscriptionsResponseDto(data = nil)`

Create a new `ListTopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListTopicsResponseDto(data = nil)`

Create a new `ListTopicsResponseDto` entity instance. Pass `nil` for no initial data.

#### `MasterJson(data = nil)`

Create a new `MasterJson` entity instance. Pass `nil` for no initial data.

#### `Message(data = nil)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `MessageResponseDto(data = nil)`

Create a new `MessageResponseDto` entity instance. Pass `nil` for no initial data.

#### `NotificationFeedItemDto(data = nil)`

Create a new `NotificationFeedItemDto` entity instance. Pass `nil` for no initial data.

#### `PreferencesResponseDto(data = nil)`

Create a new `PreferencesResponseDto` entity instance. Pass `nil` for no initial data.

#### `Publish(data = nil)`

Create a new `Publish` entity instance. Pass `nil` for no initial data.

#### `RemoveSubscriberResponseDto(data = nil)`

Create a new `RemoveSubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Step(data = nil)`

Create a new `Step` entity instance. Pass `nil` for no initial data.

#### `Subscriber(data = nil)`

Create a new `Subscriber` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsCountResponseDto(data = nil)`

Create a new `SubscriberNotificationsCountResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsResponseDto(data = nil)`

Create a new `SubscriberNotificationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberPreferencesDto(data = nil)`

Create a new `SubscriberPreferencesDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberResponseDto(data = nil)`

Create a new `SubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Subscription(data = nil)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `Topic(data = nil)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriberDto(data = nil)`

Create a new `TopicSubscriberDto` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriptionsResponseDto(data = nil)`

Create a new `TopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Translation(data = nil)`

Create a new `Translation` entity instance. Pass `nil` for no initial data.

#### `TranslationGroupDto(data = nil)`

Create a new `TranslationGroupDto` entity instance. Pass `nil` for no initial data.

#### `Trigger(data = nil)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `TriggerEventResponseDto(data = nil)`

Create a new `TriggerEventResponseDto` entity instance. Pass `nil` for no initial data.

#### `Unseen(data = nil)`

Create a new `Unseen` entity instance. Pass `nil` for no initial data.

#### `Upload(data = nil)`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `WebhookResultDto(data = nil)`

Create a new `WebhookResultDto` entity instance. Pass `nil` for no initial data.

#### `Workflow(data = nil)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowInfoDto(data = nil)`

Create a new `WorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `WorkflowResponseDto(data = nil)`

Create a new `WorkflowResponseDto` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ActivityNotificationResponseDtoEntity

```ruby
activity_notification_response_dto = client.ActivityNotificationResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `Array` | No |  |
| `contextKeys` | `Array` | No | Context (single or multi) in which the notification was sent |
| `controls` | `Hash` | No | Controls associated with the notification |
| `createdAt` | `String` | No | Creation time of the notification |
| `critical` | `Boolean` | No | Criticality of the notification |
| `digestedNotificationId` | `String` | No | Digested Notification ID |
| `environmentId` | `String` | Yes | Environment ID of the notification |
| `id` | `String` | No | Unique identifier of the notification |
| `jobs` | `Array` | No | Jobs of the notification |
| `organizationId` | `String` | Yes | Organization ID of the notification |
| `payload` | `Hash` | No | Payload of the notification |
| `severity` | `String` | No | Workflow severity |
| `subscriber` | `Object` | No | Subscriber of the notification |
| `subscriberId` | `String` | Yes | Subscriber ID of the notification |
| `tags` | `Array` | No | Tags associated with the notification |
| `template` | `Object` | No | Template of the notification |
| `templateId` | `String` | No | Template ID of the notification |
| `to` | `Hash` | No | To field for subscriber definition |
| `topics` | `Array` | No | Topics of the notification |
| `transactionId` | `String` | Yes | Transaction ID of the notification |
| `updatedAt` | `String` | No | Last updated time of the notification |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ActivityNotificationResponseDto.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ActivityNotificationResponseDto.load({ "notification_id" => "notification_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentEntity

```ruby
agent = client.Agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes |  |
| `behavior` | `Hash` | Yes |  |
| `bridgeUrl` | `String` | No | Production bridge URL |
| `createdAt` | `String` | Yes |  |
| `createdBy` | `String` | No | Mongo user id of the user who created the agent |
| `description` | `String` | No |  |
| `devBridgeActive` | `Boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `String` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `String` | Yes |  |
| `exceedsPlanLimit` | `Boolean` | No | Cloud only. |
| `id` | `String` | Yes |  |
| `identifier` | `String` | Yes | Required when not adopting an existing managed agent. |
| `integrations` | `Array` | No |  |
| `managedRuntime` | `Object` | No | Present when runtime is "managed". |
| `name` | `String` | Yes | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `String` | Yes |  |
| `runtime` | `String` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `String` | Yes |  |
| `visibility` | `String` | No | Discovery scope of the agent. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Agent.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Agent.load({ "id" => "agent_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Agent.remove({ "id" => "agent_id", "delete_from_provider" => "delete_from_provider" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Agent.update({
  "id" => "agent_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentIntegrationResponseDtoEntity

```ruby
agent_integration_response_dto = client.AgentIntegrationResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `String` | Yes |  |
| `connectedAt` | `Hash` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `String` | Yes |  |
| `environmentId` | `String` | Yes |  |
| `exceedsPlanLimit` | `Boolean` | No | Cloud only. |
| `id` | `String` | Yes | Agent–integration link document id. |
| `integration` | `Hash` | Yes |  |
| `integrationIdentifier` | `String` | No | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `String` | Yes |  |
| `providerId` | `String` | No | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentIntegrationResponseDto.create({
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

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AgentIntegrationResponseDto.update({
  "agent_id" => "agent_id",
  "agent_integration_id" => "agent_integration_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentResponseDtoEntity

```ruby
agent_response_dto = client.AgentResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes |  |
| `behavior` | `Hash` | Yes |  |
| `bridgeUrl` | `String` | No | Production bridge URL |
| `createdAt` | `String` | Yes |  |
| `createdBy` | `String` | No | Mongo user id of the user who created the agent |
| `description` | `String` | No |  |
| `devBridgeActive` | `Boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `String` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `String` | Yes |  |
| `exceedsPlanLimit` | `Boolean` | No | Cloud only. |
| `id` | `String` | Yes |  |
| `identifier` | `String` | Yes |  |
| `integrations` | `Array` | No |  |
| `managedRuntime` | `Object` | No | Present when runtime is "managed". |
| `name` | `String` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `runtime` | `String` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `String` | Yes |  |
| `visibility` | `String` | No | Discovery scope of the agent. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AgentResponseDto.update({
  "identifier" => "identifier",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkEntity

```ruby
bulk = client.Bulk
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `Array` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Bulk.create({
  "subscribers" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChannelConnectionEntity

```ruby
channel_connection = client.ChannelConnection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Hash` | Yes |  |
| `channel` | `String` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `String` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `Hash` | No |  |
| `contextKeys` | `Array` | Yes | The context of the channel connection |
| `createdAt` | `String` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `String` | No |  |
| `identifier` | `String` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `String` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `Hash` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ChannelConnection.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ChannelConnection.load({ "id" => "channel_connection_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ChannelConnection.remove({ "id" => "channel_connection_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ChannelConnection.update({
  "id" => "channel_connection_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChannelConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChannelEndpointEntity

```ruby
channel_endpoint = client.ChannelEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `String` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `String` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `Array` | Yes | The context of the channel connection |
| `createdAt` | `String` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Object` | Yes | Endpoint data specific to the channel type |
| `id` | `String` | No |  |
| `identifier` | `String` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `String` | Yes | Type of channel endpoint |
| `updatedAt` | `String` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ChannelEndpoint.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ChannelEndpoint.load({ "id" => "channel_endpoint_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ChannelEndpoint.remove({ "id" => "channel_endpoint_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ChannelEndpoint.update({
  "id" => "channel_endpoint_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChannelEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConfigureEntity

```ruby
configure = client.Configure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `String` | Yes | Resolved bot username from getMe |
| `configuredAt` | `String` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `String` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Configure.create({
  "integration_id" => "example_integration_id", # String
  "botUsername" => "example_botUsername", # String
  "configuredAt" => "example_configuredAt", # String
  "webhookUrl" => "example_webhookUrl", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConfigureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContextEntity

```ruby
context = client.Context
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `String` | No | Optional bridge URL override for agent connect. |
| `data` | `Hash` | No | Optional custom data to associate with this context. |
| `id` | `String` | Yes | Unique identifier for this context. |
| `type` | `String` | Yes | Context type (e.g., tenant, app, workspace). |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `bridgeUrl` | - | - | - | - |
| `data` | - | - | Yes | - |
| `id` | - | - | - | - |
| `type` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Context.create({
  "id" => "example_id", # String
  "type" => "example_type", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Context.load({ "id" => "context_id", "type" => "type" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Context.remove({ "id" => "context_id", "type" => "type" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Context.update({
  "id" => "context_id",
  "type" => "type",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContextEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateSubscriptionsResponseDtoEntity

```ruby
create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Hash` | No |  |
| `name` | `String` | No | The name of the topic |
| `preferences` | `Array` | No | The preferences of the topic. |
| `subscriberIds` | `Array` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `Array` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateSubscriptionsResponseDto.create({
  "topic_key" => "example_topic_key", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DiffEntity

```ruby
diff = client.Diff
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `Array` | Yes | Diff resources by resource type |
| `sourceEnvironmentId` | `String` | Yes | Source environment ID |
| `summary` | `Object` | Yes | Overall summary |
| `targetEnvironmentId` | `String` | Yes | Target environment ID |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `resources` | - |
| `sourceEnvironmentId` | Yes |
| `summary` | - |
| `targetEnvironmentId` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Diff.create({
  "environment_id" => "example_environment_id", # String
  "resources" => [], # Array
  "sourceEnvironmentId" => "example_sourceEnvironmentId", # String
  "summary" => "example_summary", # Object
  "targetEnvironmentId" => "example_targetEnvironmentId", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainEntity

```ruby
domain = client.Domain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `data` | `Hash` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `String` | No |  |
| `environmentId` | `String` | Yes |  |
| `expectedDnsRecords` | `Array` | No |  |
| `id` | `String` | Yes |  |
| `mxRecordConfigured` | `Boolean` | Yes |  |
| `name` | `String` | Yes | The domain name (e.g. |
| `organizationId` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Domain.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Domain.load({ "id" => "domain_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Domain.remove({ "id" => "domain_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Domain.update({
  "id" => "domain_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainConnectApplyUrlResponseDtoEntity

```ruby
domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `String` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DomainConnectApplyUrlResponseDto.create({
  "domain_id" => "example_domain_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainConnectStatusResponseDtoEntity

```ruby
domain_connect_status_response_dto = client.DomainConnectStatusResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DomainConnectStatusResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainResponseDtoEntity

```ruby
domain_response_dto = client.DomainResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `data` | `Hash` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `String` | No |  |
| `environmentId` | `String` | Yes |  |
| `expectedDnsRecords` | `Array` | No |  |
| `id` | `String` | Yes |  |
| `mxRecordConfigured` | `Boolean` | Yes |  |
| `name` | `String` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DomainResponseDto.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainRouteResponseDtoEntity

```ruby
domain_route_response_dto = client.DomainRouteResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `String` | No | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `Hash` | No | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DomainRouteResponseDto.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DomainRouteResponseDto.load({ "address" => "address", "domain_id" => "domain_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DomainRouteResponseDto.update({
  "address" => "address",
  "domain_id" => "domain_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainRouteResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentEntity

```ruby
environment = client.Environment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `Array` | No | List of API keys associated with the environment |
| `bridge` | `Hash` | No |  |
| `color` | `String` | Yes | Hex color code for the environment |
| `dns` | `Hash` | No |  |
| `id` | `String` | Yes | Unique identifier of the environment |
| `identifier` | `String` | Yes | Unique identifier for the environment |
| `name` | `String` | Yes | Name of the environment to be created |
| `organizationId` | `String` | Yes | Organization ID associated with the environment |
| `parentId` | `String` | No | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `String` | No | URL-friendly slug for the environment |
| `type` | `String` | No | Type of the environment |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Environment.create({
  "color" => "example_color", # String
  "id" => "example_id", # String
  "identifier" => "example_identifier", # String
  "name" => "example_name", # String
  "organizationId" => "example_organizationId", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Environment.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Environment.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Environment.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentTagsDtoEntity

```ruby
environment_tags_dto = client.EnvironmentTagsDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EnvironmentTagsDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentTagsDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentVariableEntity

```ruby
environment_variable = client.EnvironmentVariable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `isSecret` | `Boolean` | Yes | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `String` | Yes | Unique key for the variable. |
| `organizationId` | `String` | Yes |  |
| `type` | `String` | Yes | The type of the variable |
| `updatedAt` | `String` | Yes |  |
| `values` | `Array` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EnvironmentVariable.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EnvironmentVariable.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EnvironmentVariable.load({ "id" => "environment_variable_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EnvironmentVariable.remove({ "id" => "environment_variable_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EnvironmentVariable.update({
  "id" => "environment_variable_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```ruby
environment_variable_workflow_info_dto = client.EnvironmentVariableWorkflowInfoDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | Yes | The name of the workflow |
| `workflowId` | `String` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EnvironmentVariableWorkflowInfoDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EventEntity

```ruby
event = client.Event
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Event.remove({ "transaction_id" => "transaction_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateChatOAuthUrlResponseDtoEntity

```ruby
generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `Boolean` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `String` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `String` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `Hash` | No |  |
| `contextHash` | `String` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `String` | Yes | Integration identifier |
| `mode` | `String` | No | OAuth flow mode. |
| `scope` | `Array` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `String` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `Array` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GenerateChatOAuthUrlResponseDto.create({
  "integrationIdentifier" => "example_integrationIdentifier", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeneratePreviewResponseDtoEntity

```ruby
generate_preview_response_dto = client.GeneratePreviewResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Hash` | No | Optional control values |
| `previewPayload` | `Object` | No | Optional payload for preview generation |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GeneratePreviewResponseDto.create({
  "step_id" => "example_step_id", # String
  "workflow_id" => "example_workflow_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImportMasterJsonResponseDtoEntity

```ruby
import_master_json_response_dto = client.ImportMasterJsonResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `Array` | No | List of resource IDs that failed to import |
| `locale` | `String` | Yes | The locale for which translations are being imported |
| `masterJson` | `Hash` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `String` | Yes | Human-readable message describing the import result |
| `success` | `Boolean` | Yes | Overall success status of the import operation |
| `successful` | `Array` | No | List of resource IDs that were successfully imported |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImportMasterJsonResponseDto.create({
  "locale" => "example_locale", # String
  "masterJson" => {}, # Hash
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InboxNotificationDtoEntity

```ruby
inbox_notification_dto = client.InboxNotificationDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `String` | No | ISO timestamp when the notification was archived |
| `avatar` | `String` | No | Avatar URL for the notification |
| `body` | `String` | Yes | Body content of the notification |
| `channelType` | `String` | Yes | Channel the message was sent on |
| `createdAt` | `String` | Yes | ISO timestamp when the notification was created |
| `data` | `Hash` | No | Custom data payload of the notification |
| `deliveredAt` | `Array` | No | Timestamps when the notification was delivered |
| `firstSeenAt` | `String` | No | ISO timestamp when the notification was first seen |
| `id` | `String` | Yes | Unique identifier of the notification |
| `isArchived` | `Boolean` | Yes | Whether the notification has been archived |
| `isRead` | `Boolean` | Yes | Whether the notification has been read |
| `isSeen` | `Boolean` | Yes | Whether the notification has been seen |
| `isSnoozed` | `Boolean` | Yes | Whether the notification is snoozed |
| `primaryAction` | `Object` | No | Primary action button for the notification |
| `readAt` | `String` | No | ISO timestamp when the notification was read |
| `redirect` | `Object` | No | Redirect configuration for the notification |
| `secondaryAction` | `Object` | No | Secondary action button for the notification |
| `severity` | `String` | Yes | Workflow severity |
| `snoozeUntil` | `String` | Yes | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `String` | No | ISO timestamp when the notification will be unsnoozed |
| `subject` | `String` | No | Subject of the notification |
| `tags` | `Array` | No | Tags associated with the notification |
| `to` | `Object` | Yes | Subscriber this notification was sent to |
| `transactionId` | `String` | Yes | Transaction identifier of the notification |
| `workflow` | `Object` | No | Workflow associated with the notification |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.InboxNotificationDto.update({
  "notification_id" => "notification_id",
  "subscriber_id" => "subscriber_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InboxNotificationDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationEntity

```ruby
integration = client.Integration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `String` | No | The channel type for the integration. |
| `check` | `Boolean` | No | Flag to check the integration status |
| `conditions` | `Array` | No | Legacy StepFilter conditions. |
| `configurations` | `Hash` | No | Configurations for the integration |
| `credentials` | `Object` | No | The credentials for the integration |
| `deleted` | `Boolean` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `String` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `String` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `String` | No | The ID of the associated environment |
| `id` | `String` | No | The unique identifier of the integration record in the database. |
| `identifier` | `String` | No | The unique identifier for the integration |
| `kind` | `String` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `String` | No | The name of the integration |
| `organizationId` | `String` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `Boolean` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `String` | No | The provider ID for the integration |
| `rules` | `Hash` | No | JSONLogic used at send time to select this integration. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Integration.create({
  "deleted" => true, # Boolean
  "organizationId" => "example_organizationId", # String
  "primary" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Integration.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Integration.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Integration.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationResponseDtoEntity

```ruby
integration_response_dto = client.IntegrationResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes | Indicates whether the integration is currently active. |
| `channel` | `String` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `Array` | No | Legacy StepFilter conditions. |
| `configurations` | `Object` | No | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `Object` | No | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `Boolean` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `String` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `String` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `String` | Yes | The unique identifier for the environment associated with this integration. |
| `id` | `String` | No | The unique identifier of the integration record in the database. |
| `identifier` | `String` | Yes | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `String` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `String` | Yes | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `String` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `Boolean` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `String` | Yes | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `Hash` | No | JSONLogic used at send time to select this integration. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IntegrationResponseDto.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IntegrationResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LayoutEntity

```ruby
layout = client.Layout
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Object` | No | Control values for the layout. |
| `controls` | `Object` | Yes | Controls metadata for the layout |
| `createdAt` | `String` | Yes | Creation timestamp |
| `id` | `String` | Yes | Unique internal identifier of the layout |
| `isDefault` | `Boolean` | Yes | Whether the layout is the default layout |
| `isTranslationEnabled` | `Boolean` | Yes | Whether the layout translations are enabled |
| `layoutId` | `String` | Yes | Unique identifier for the layout |
| `name` | `String` | Yes | Name of the layout |
| `origin` | `String` | Yes | Workflow origin |
| `slug` | `String` | Yes | Slug of the layout |
| `source` | `String` | No | Source of layout creation |
| `type` | `String` | Yes | Resource type |
| `updatedAt` | `String` | Yes | Last updated timestamp |
| `updatedBy` | `Object` | No | User who last updated the layout |
| `variables` | `Hash` | No | The variables JSON Schema for the layout |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Layout.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Layout.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Layout.load({ "id" => "layout_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Layout.remove({ "id" => "layout_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Layout.update({
  "id" => "layout_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LayoutEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LayoutResponseDtoEntity

```ruby
layout_response_dto = client.LayoutResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LayoutResponseDto.create({
  "id" => "example_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LayoutResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkEntity

```ruby
link = client.Link
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Hash` | No |  |
| `contextHash` | `String` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `String` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `String` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Link.create({
  "integrationIdentifier" => "example_integrationIdentifier", # String
  "subscriberId" => "example_subscriberId", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAgentIntegrationsResponseDtoEntity

```ruby
list_agent_integrations_response_dto = client.ListAgentIntegrationsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `String` | Yes |  |
| `connectedAt` | `Hash` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `String` | Yes |  |
| `environmentId` | `String` | Yes |  |
| `exceedsPlanLimit` | `Boolean` | No | Cloud only. |
| `id` | `String` | Yes | Agent–integration link document id. |
| `integration` | `Hash` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListAgentIntegrationsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAgentsResponseDtoEntity

```ruby
list_agents_response_dto = client.ListAgentsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes |  |
| `behavior` | `Hash` | Yes |  |
| `bridgeUrl` | `String` | No | Production bridge URL |
| `createdAt` | `String` | Yes |  |
| `createdBy` | `String` | No | Mongo user id of the user who created the agent |
| `description` | `String` | No |  |
| `devBridgeActive` | `Boolean` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `String` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `String` | Yes |  |
| `exceedsPlanLimit` | `Boolean` | No | Cloud only. |
| `id` | `String` | Yes |  |
| `identifier` | `String` | Yes |  |
| `integrations` | `Array` | No |  |
| `managedRuntime` | `Object` | No | Present when runtime is "managed". |
| `name` | `String` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `runtime` | `String` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `String` | Yes |  |
| `visibility` | `String` | No | Discovery scope of the agent. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListAgentsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAgentsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListChannelConnectionsResponseDtoEntity

```ruby
list_channel_connections_response_dto = client.ListChannelConnectionsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Hash` | Yes |  |
| `channel` | `String` | Yes | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `Array` | Yes | The context of the channel connection |
| `createdAt` | `String` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `String` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `String` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListChannelConnectionsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListChannelConnectionsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListChannelEndpointsResponseDtoEntity

```ruby
list_channel_endpoints_response_dto = client.ListChannelEndpointsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `String` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `String` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `Array` | Yes | The context of the channel connection |
| `createdAt` | `String` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Object` | Yes | Endpoint data specific to the channel type |
| `identifier` | `String` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `String` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `String` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `String` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `String` | Yes | Type of channel endpoint |
| `updatedAt` | `String` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListChannelEndpointsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListChannelEndpointsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListContextsResponseDtoEntity

```ruby
list_contexts_response_dto = client.ListContextsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `String` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `String` | Yes | Creation timestamp |
| `data` | `Hash` | Yes | Custom data associated with this context |
| `id` | `String` | Yes | Unique identifier for this context |
| `type` | `String` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `String` | Yes | Last update timestamp |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListContextsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListContextsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDomainRoutesResponseDtoEntity

```ruby
list_domain_routes_response_dto = client.ListDomainRoutesResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes |  |
| `agentId` | `String` | No | Internal id of the destination agent. |
| `createdAt` | `String` | Yes |  |
| `data` | `Hash` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `String` | Yes |  |
| `environmentId` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDomainRoutesResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDomainsResponseDtoEntity

```ruby
list_domains_response_dto = client.ListDomainsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `data` | `Hash` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `String` | No |  |
| `environmentId` | `String` | Yes |  |
| `expectedDnsRecords` | `Array` | No |  |
| `id` | `String` | Yes |  |
| `mxRecordConfigured` | `Boolean` | Yes |  |
| `name` | `String` | Yes |  |
| `organizationId` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDomainsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDomainsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSubscribersResponseDtoEntity

```ruby
list_subscribers_response_dto = client.ListSubscribersResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `String` | No | The URL of the subscriber's avatar image. |
| `channels` | `Array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `String` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Hash` | No | Additional custom data for the subscriber |
| `deleted` | `Boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `String` | No | The email address of the subscriber. |
| `environmentId` | `String` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `String` | No | The first name of the subscriber. |
| `id` | `String` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `Boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `String` | No | The last name of the subscriber. |
| `lastOnlineAt` | `String` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `String` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `String` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `String` | No | The phone number of the subscriber. |
| `subscriberId` | `String` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `String` | No | Timezone of the subscriber |
| `topics` | `Array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `String` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `Float` | No | The version of the subscriber document. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSubscribersResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSubscribersResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListTopicSubscriptionsResponseDtoEntity

```ruby
list_topic_subscriptions_response_dto = client.ListTopicSubscriptionsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `Array` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `String` | Yes | The date and time the subscription was created |
| `id` | `String` | Yes | The identifier of the subscription |
| `identifier` | `String` | Yes | The identifier of the subscription |
| `preferences` | `Array` | No | The preferences for workflows in this subscription |
| `subscriber` | `Object` | Yes | Subscriber information |
| `topic` | `Object` | Yes | Topic information |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListTopicSubscriptionsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListTopicsResponseDtoEntity

```ruby
list_topics_response_dto = client.ListTopicsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | No | The date the topic was created |
| `data` | `Hash` | No | Additional custom data associated with the topic |
| `id` | `String` | Yes | The identifier of the topic |
| `key` | `String` | Yes | The unique key of the topic |
| `name` | `String` | No | The name of the topic |
| `updatedAt` | `String` | No | The date the topic was last updated |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListTopicsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListTopicsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MasterJsonEntity

```ruby
master_json = client.MasterJson
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `Hash` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `Hash` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MasterJson.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MasterJsonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MessageEntity

```ruby
message = client.Message
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `String` | Yes | Channel the message was sent on |
| `content` | `Object` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `Array` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `String` | Yes | Creation date of the message |
| `cta` | `Object` | Yes | Call to action associated with the message |
| `deliveredAt` | `Array` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `Array` | No | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `String` | No | Direct webhook URL for the message, if applicable |
| `email` | `String` | No | Email address associated with the message, if applicable |
| `environmentId` | `String` | Yes | Environment ID where the message is sent |
| `errorId` | `String` | No | Error ID if the message has an error |
| `errorText` | `String` | No | Error text if the message has an error |
| `feedId` | `String` | No | Feed ID associated with the message, if applicable |
| `id` | `String` | No | Unique identifier for the message |
| `lastReadDate` | `String` | No | Last read date of the message, if available |
| `lastSeenDate` | `String` | No | Last seen date of the message, if available |
| `messageTemplateId` | `String` | No | Message template ID |
| `notificationId` | `String` | Yes | Notification ID associated with the message |
| `organizationId` | `String` | Yes | Organization ID associated with the message |
| `overrides` | `Hash` | No | Provider specific overrides used when triggering the notification |
| `payload` | `Hash` | No | The payload that was used to send the notification trigger |
| `phone` | `String` | No | Phone number associated with the message, if applicable |
| `providerId` | `String` | No | Provider ID associated with the message, if applicable |
| `read` | `Boolean` | Yes | Indicates if the message has been read |
| `seen` | `Boolean` | Yes | Indicates if the message has been seen |
| `snoozedUntil` | `String` | No | Date when the message will be unsnoozed |
| `status` | `String` | Yes | Status of the message |
| `subject` | `String` | No | Subject of the message, if applicable |
| `subscriber` | `Object` | No | Subscriber details, if available |
| `subscriberId` | `String` | Yes | Subscriber ID associated with the message |
| `template` | `Object` | No | Workflow template associated with the message |
| `templateId` | `String` | No | Template ID associated with the message |
| `templateIdentifier` | `String` | No | Identifier for the message template |
| `title` | `String` | No | Title of the message, if applicable |
| `transactionId` | `String` | Yes | Transaction ID associated with the message |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Message.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Message.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MessageResponseDtoEntity

```ruby
message_response_dto = client.MessageResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `String` | Yes |  |
| `messageId` | `Object` | Yes |  |
| `payload` | `Hash` | No | Message action payload |
| `status` | `String` | Yes | Message action status |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.MessageResponseDto.create({
  "subscriber_id" => "example_subscriber_id", # String
  "markAs" => "example_markAs", # String
  "messageId" => "example_messageId", # Object
  "status" => "example_status", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MessageResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NotificationFeedItemDtoEntity

```ruby
notification_feed_item_dto = client.NotificationFeedItemDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Object` | No | Actor details related to the notification, if applicable. |
| `archived` | `Boolean` | Yes | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `String` | Yes | Channel the message was sent on |
| `content` | `String` | Yes | The main content of the notification. |
| `createdAt` | `String` | No | Timestamp indicating when the notification was created. |
| `cta` | `Object` | Yes | Call-to-action information associated with the notification. |
| `data` | `Hash` | No | The data sent with the notification. |
| `deviceTokens` | `Array` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `String` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `String` | No | Identifier for the feed associated with the notification. |
| `id` | `String` | Yes | Unique identifier for the notification. |
| `jobId` | `String` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `String` | No | Identifier for the message template used. |
| `notificationId` | `String` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `String` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `Hash` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `Hash` | No | The payload that was used to send the notification trigger. |
| `providerId` | `String` | No | Identifier for the provider that sends the notification. |
| `read` | `Boolean` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `Boolean` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `String` | Yes | Current status of the notification. |
| `subject` | `String` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `Object` | No | Subscriber details associated with this notification. |
| `subscriberId` | `String` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `Array` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `String` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `String` | No | Identifier for the template used, if applicable. |
| `transactionId` | `String` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `String` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NotificationFeedItemDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NotificationFeedItemDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PreferencesResponseDtoEntity

```ruby
preferences_response_dto = client.PreferencesResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Hash` | No |  |
| `preferences` | `Array` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PreferencesResponseDto.update({
  "subscriber_id" => "subscriber_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PreferencesResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublishEntity

```ruby
publish = client.Publish
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `Boolean` | No | Perform a dry run without making actual changes |
| `resources` | `Array` | No | Array of specific resources to publish. |
| `results` | `Array` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `String` | No | Source environment ID to sync from. |
| `summary` | `Object` | Yes | Summary of the sync operation |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Publish.create({
  "environment_id" => "example_environment_id", # String
  "results" => [], # Array
  "summary" => "example_summary", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublishEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RemoveSubscriberResponseDtoEntity

```ruby
remove_subscriber_response_dto = client.RemoveSubscriberResponseDto
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.RemoveSubscriberResponseDto.remove({ "subscriber_id" => "subscriber_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StepEntity

```ruby
step = client.Step
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Hash` | No | Control values for the step (alias for controls.values) |
| `controls` | `Object` | Yes | Controls metadata for the step |
| `id` | `String` | Yes | Database identifier of the step |
| `issues` | `Object` | No | Issues associated with the step |
| `name` | `String` | Yes | Name of the step |
| `origin` | `String` | Yes | Workflow origin |
| `providerOverrides` | `Hash` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `String` | Yes | Slug of the step |
| `stepId` | `String` | Yes | Unique identifier of the step |
| `stepResolverHash` | `String` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `String` | Yes | Type of the step |
| `variables` | `Hash` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `String` | Yes | Workflow database identifier |
| `workflowId` | `String` | Yes | Workflow identifier |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Step.load({ "id" => "step_id", "workflow_id" => "workflow_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StepEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriberEntity

```ruby
subscriber = client.Subscriber
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `String` | No | The URL of the subscriber's avatar image. |
| `channels` | `Array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `String` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Hash` | No | Additional custom data for the subscriber |
| `deleted` | `Boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `String` | No | The email address of the subscriber. |
| `environmentId` | `String` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `String` | No | The first name of the subscriber. |
| `id` | `String` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `Boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `String` | No | The last name of the subscriber. |
| `lastOnlineAt` | `String` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `String` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `String` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `String` | No | The phone number of the subscriber. |
| `subscriberId` | `String` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `String` | No | Timezone of the subscriber |
| `topics` | `Array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `String` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `Float` | No | The version of the subscriber document. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Subscriber.create({
  "createdAt" => "example_createdAt", # String
  "deleted" => true, # Boolean
  "environmentId" => "example_environmentId", # String
  "organizationId" => "example_organizationId", # String
  "subscriberId" => "example_subscriberId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Subscriber.load({ "id" => "subscriber_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Subscriber.remove({ "id" => "subscriber_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Subscriber.update({
  "id" => "subscriber_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriberNotificationsCountResponseDtoEntity

```ruby
subscriber_notifications_count_response_dto = client.SubscriberNotificationsCountResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Float` | Yes | The count of notifications matching the filter |
| `filter` | `Hash` | Yes | The filter applied |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriberNotificationsCountResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriberNotificationsResponseDtoEntity

```ruby
subscriber_notifications_response_dto = client.SubscriberNotificationsResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriberNotificationsResponseDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriberPreferencesDtoEntity

```ruby
subscriber_preferences_dto = client.SubscriberPreferencesDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriberPreferencesDto.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriberPreferencesDto.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriberPreferencesDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriberResponseDtoEntity

```ruby
subscriber_response_dto = client.SubscriberResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `String` | No | The URL of the subscriber's avatar image. |
| `channels` | `Array` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `String` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Hash` | No | Additional custom data for the subscriber |
| `deleted` | `Boolean` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `String` | No | The email address of the subscriber. |
| `environmentId` | `String` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `String` | No | The first name of the subscriber. |
| `id` | `String` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `Boolean` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `String` | No | The last name of the subscriber. |
| `lastOnlineAt` | `String` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `String` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `String` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `String` | No | The phone number of the subscriber. |
| `subscriberId` | `String` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `String` | No | Timezone of the subscriber |
| `topics` | `Array` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `String` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `Float` | No | The version of the subscriber document. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriberResponseDto.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriberResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionEntity

```ruby
subscription = client.Subscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `Array` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `String` | Yes | The creation date of the subscription |
| `id` | `String` | Yes | The unique identifier of the subscription |
| `identifier` | `String` | No | The identifier of the subscription |
| `name` | `String` | No | The name of the subscription |
| `preferences` | `Array` | No | The preferences/rules for the subscription |
| `subscriber` | `Object` | Yes | The subscriber information |
| `topic` | `Object` | Yes | The topic information |
| `updatedAt` | `String` | Yes | The last update date of the subscription |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Subscription.load({ "id" => "subscription_id", "topic_id" => "topic_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Subscription.update({
  "id" => "subscription_id",
  "topic_id" => "topic_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopicEntity

```ruby
topic = client.Topic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No | Additional custom data associated with the topic. |
| `id` | `String` | No |  |
| `key` | `String` | Yes | The unique key identifier for the topic. |
| `name` | `String` | No | The display name for the topic |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Topic.create({
  "key" => "example_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Topic.load({ "id" => "topic_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Topic.remove({ "id" => "topic_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Topic.update({
  "id" => "topic_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopicSubscriberDtoEntity

```ruby
topic_subscriber_dto = client.TopicSubscriberDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `environmentId` | `String` | Yes | Unique identifier for the environment |
| `externalSubscriberId` | `String` | Yes | External identifier for the subscriber |
| `organizationId` | `String` | Yes | Unique identifier for the organization |
| `subscriberId` | `String` | Yes | Unique identifier for the subscriber |
| `topicId` | `String` | Yes | Unique identifier for the topic |
| `topicKey` | `String` | Yes | Key associated with the topic |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TopicSubscriberDto.load({ "external_subscriber_id" => "external_subscriber_id", "topic_id" => "topic_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopicSubscriberDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopicSubscriptionsResponseDtoEntity

```ruby
topic_subscriptions_response_dto = client.TopicSubscriptionsResponseDto
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TopicSubscriptionsResponseDto.remove({ "topic_key" => "topic_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TranslationEntity

```ruby
translation = client.Translation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Hash` | Yes | Translation content as JSON object |
| `id` | `String` | No |  |
| `locale` | `String` | Yes | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `String` | Yes | The resource ID to associate translation with. |
| `resourceType` | `String` | Yes | The resource type to associate translation with |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Translation.create({
  "content" => {}, # Hash
  "locale" => "example_locale", # String
  "resourceId" => "example_resourceId", # String
  "resourceType" => "example_resourceType", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Translation.load({ "locale" => "locale", "resource_id" => "resource_id", "resource_type" => "resource_type" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Translation.remove({ "resource_id" => "resource_id", "resource_type" => "resource_type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TranslationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TranslationGroupDtoEntity

```ruby
translation_group_dto = client.TranslationGroupDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | Creation timestamp |
| `id` | `String` | No |  |
| `locales` | `Array` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `Array` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `String` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `String` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `String` | Yes | Resource type |
| `updatedAt` | `String` | Yes | Last update timestamp |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TranslationGroupDto.load({ "resource_id" => "resource_id", "resource_type" => "resource_type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TranslationGroupDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TriggerEntity

```ruby
trigger = client.Trigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Object` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `String` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `String` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `Hash` | No |  |
| `name` | `String` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `Object` | No | This could be used to override provider specific configurations |
| `payload` | `Hash` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `Object` | No | It is used to specify a tenant context during trigger event. |
| `to` | `Object` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `String` | No | A unique identifier for deduplication. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Trigger.create({
  "name" => "example_name", # String
  "to" => "example_to", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TriggerEventResponseDtoEntity

```ruby
trigger_event_response_dto = client.TriggerEventResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `Boolean` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `String` | No | Link to the activity feed for this trigger event |
| `actor` | `Object` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `String` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `Hash` | No |  |
| `error` | `Array` | No | In case of an error, this field will contain the error message(s) |
| `events` | `Array` | Yes |  |
| `jobData` | `Hash` | No |  |
| `name` | `String` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `Object` | No | This could be used to override provider specific configurations |
| `payload` | `Hash` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `String` | Yes | Status of the trigger |
| `tenant` | `Object` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `String` | No | The returned transaction ID of the trigger |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TriggerEventResponseDto.create({
  "acknowledged" => true, # Boolean
  "events" => [], # Array
  "name" => "example_name", # String
  "payload" => {}, # Hash
  "status" => "example_status", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TriggerEventResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UnseenEntity

```ruby
unseen = client.Unseen
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Unseen.load({ "subscriber_id" => "subscriber_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UnseenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadEntity

```ruby
upload = client.Upload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | List of error messages for failed uploads |
| `failedUploads` | `Float` | Yes | Number of files that failed to upload |
| `successfulUploads` | `Float` | Yes | Number of files successfully uploaded |
| `totalFiles` | `Float` | Yes | Total number of files processed |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Upload.create({
  "errors" => [], # Array
  "failedUploads" => 1, # Float
  "successfulUploads" => 1, # Float
  "totalFiles" => 1, # Float
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookResultDtoEntity

```ruby
webhook_result_dto = client.WebhookResultDto
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WebhookResultDto.create({
  "environment_id" => "example_environment_id", # String
  "integration_id" => "example_integration_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookResultDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowEntity

```ruby
workflow = client.Workflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No | Whether the workflow is active |
| `agent` | `Object` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `String` | Yes | Creation timestamp |
| `description` | `String` | No | Description of the workflow |
| `id` | `String` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `Boolean` | No | Enable or disable translations for this workflow |
| `issues` | `Hash` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `String` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Object` | No | User who last published the workflow |
| `lastTriggeredAt` | `String` | No | Timestamp of the last workflow trigger |
| `name` | `String` | Yes | Name of the workflow |
| `origin` | `String` | Yes | Workflow origin |
| `payloadExample` | `Hash` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `Hash` | No | The payload JSON Schema for the workflow |
| `preferences` | `Object` | Yes | Preferences for the workflow |
| `severity` | `String` | Yes | Workflow severity |
| `slug` | `String` | Yes | Slug of the workflow |
| `source` | `String` | No | Source of workflow creation |
| `status` | `String` | Yes | Workflow status |
| `stepTypeOverviews` | `Array` | Yes | Overview of step types in the workflow |
| `steps` | `Array` | Yes | Steps of the workflow |
| `tags` | `Array` | No | Tags associated with the workflow |
| `updatedAt` | `String` | Yes | Last updated timestamp |
| `updatedBy` | `Object` | No | User who last updated the workflow |
| `validatePayload` | `Boolean` | No | Enable or disable payload schema validation |
| `workflowId` | `String` | Yes | Workflow identifier |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Workflow.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Workflow.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Workflow.load({ "id" => "workflow_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Workflow.remove({ "id" => "workflow_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Workflow.update({
  "id" => "workflow_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowInfoDtoEntity

```ruby
workflow_info_dto = client.WorkflowInfoDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | Yes | The name of the workflow |
| `workflowId` | `String` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkflowInfoDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowInfoDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowResponseDtoEntity

```ruby
workflow_response_dto = client.WorkflowResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No | Whether the workflow is active |
| `agent` | `Object` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `String` | Yes | Creation timestamp |
| `description` | `String` | No | Description of the workflow |
| `id` | `String` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `Boolean` | No | Enable or disable translations for this workflow |
| `issues` | `Hash` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `String` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Object` | No | User who last published the workflow |
| `lastTriggeredAt` | `String` | No | Timestamp of the last workflow trigger |
| `name` | `String` | Yes | Name of the workflow |
| `origin` | `String` | Yes | Workflow origin |
| `payloadExample` | `Hash` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `Hash` | No | The payload JSON Schema for the workflow |
| `preferences` | `Object` | Yes | Preferences for the workflow |
| `severity` | `String` | Yes | Workflow severity |
| `slug` | `String` | Yes | Slug of the workflow |
| `status` | `String` | Yes | Workflow status |
| `steps` | `Array` | Yes | Steps of the workflow |
| `tags` | `Array` | No | Tags associated with the workflow |
| `updatedAt` | `String` | Yes | Last updated timestamp |
| `updatedBy` | `Object` | No | User who last updated the workflow |
| `validatePayload` | `Boolean` | No | Enable or disable payload schema validation |
| `workflowId` | `String` | Yes | Workflow identifier |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkflowResponseDto.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = NovuSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

