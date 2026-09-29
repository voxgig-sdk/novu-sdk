# Novu Golang SDK Reference

Complete API reference for the Novu Golang SDK.


## NovuSDK

### Constructor

```go
func NewNovuSDK(options map[string]any) *NovuSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *NovuSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *NovuSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `ActivityNotificationResponseDto(data map[string]any) NovuEntity`

Create a new `ActivityNotificationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Agent(data map[string]any) NovuEntity`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentIntegrationResponseDto(data map[string]any) NovuEntity`

Create a new `AgentIntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `AgentResponseDto(data map[string]any) NovuEntity`

Create a new `AgentResponseDto` entity instance. Pass `nil` for no initial data.

#### `Bulk(data map[string]any) NovuEntity`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `ChannelConnection(data map[string]any) NovuEntity`

Create a new `ChannelConnection` entity instance. Pass `nil` for no initial data.

#### `ChannelEndpoint(data map[string]any) NovuEntity`

Create a new `ChannelEndpoint` entity instance. Pass `nil` for no initial data.

#### `Configure(data map[string]any) NovuEntity`

Create a new `Configure` entity instance. Pass `nil` for no initial data.

#### `Context(data map[string]any) NovuEntity`

Create a new `Context` entity instance. Pass `nil` for no initial data.

#### `CreateSubscriptionsResponseDto(data map[string]any) NovuEntity`

Create a new `CreateSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Diff(data map[string]any) NovuEntity`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Domain(data map[string]any) NovuEntity`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DomainConnectApplyUrlResponseDto(data map[string]any) NovuEntity`

Create a new `DomainConnectApplyUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainConnectStatusResponseDto(data map[string]any) NovuEntity`

Create a new `DomainConnectStatusResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainResponseDto(data map[string]any) NovuEntity`

Create a new `DomainResponseDto` entity instance. Pass `nil` for no initial data.

#### `DomainRouteResponseDto(data map[string]any) NovuEntity`

Create a new `DomainRouteResponseDto` entity instance. Pass `nil` for no initial data.

#### `Environment(data map[string]any) NovuEntity`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `EnvironmentTagsDto(data map[string]any) NovuEntity`

Create a new `EnvironmentTagsDto` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data map[string]any) NovuEntity`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariableWorkflowInfoDto(data map[string]any) NovuEntity`

Create a new `EnvironmentVariableWorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) NovuEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `GenerateChatOAuthUrlResponseDto(data map[string]any) NovuEntity`

Create a new `GenerateChatOAuthUrlResponseDto` entity instance. Pass `nil` for no initial data.

#### `GeneratePreviewResponseDto(data map[string]any) NovuEntity`

Create a new `GeneratePreviewResponseDto` entity instance. Pass `nil` for no initial data.

#### `ImportMasterJsonResponseDto(data map[string]any) NovuEntity`

Create a new `ImportMasterJsonResponseDto` entity instance. Pass `nil` for no initial data.

#### `InboxNotificationDto(data map[string]any) NovuEntity`

Create a new `InboxNotificationDto` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) NovuEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationResponseDto(data map[string]any) NovuEntity`

Create a new `IntegrationResponseDto` entity instance. Pass `nil` for no initial data.

#### `Layout(data map[string]any) NovuEntity`

Create a new `Layout` entity instance. Pass `nil` for no initial data.

#### `LayoutResponseDto(data map[string]any) NovuEntity`

Create a new `LayoutResponseDto` entity instance. Pass `nil` for no initial data.

#### `Link(data map[string]any) NovuEntity`

Create a new `Link` entity instance. Pass `nil` for no initial data.

#### `ListAgentIntegrationsResponseDto(data map[string]any) NovuEntity`

Create a new `ListAgentIntegrationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListDomainRoutesResponseDto(data map[string]any) NovuEntity`

Create a new `ListDomainRoutesResponseDto` entity instance. Pass `nil` for no initial data.

#### `ListTopicSubscriptionsResponseDto(data map[string]any) NovuEntity`

Create a new `ListTopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `MasterJson(data map[string]any) NovuEntity`

Create a new `MasterJson` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) NovuEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `MessageResponseDto(data map[string]any) NovuEntity`

Create a new `MessageResponseDto` entity instance. Pass `nil` for no initial data.

#### `NotificationFeedItemDto(data map[string]any) NovuEntity`

Create a new `NotificationFeedItemDto` entity instance. Pass `nil` for no initial data.

#### `PreferencesResponseDto(data map[string]any) NovuEntity`

Create a new `PreferencesResponseDto` entity instance. Pass `nil` for no initial data.

#### `Publish(data map[string]any) NovuEntity`

Create a new `Publish` entity instance. Pass `nil` for no initial data.

#### `RemoveSubscriberResponseDto(data map[string]any) NovuEntity`

Create a new `RemoveSubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Step(data map[string]any) NovuEntity`

Create a new `Step` entity instance. Pass `nil` for no initial data.

#### `Subscriber(data map[string]any) NovuEntity`

Create a new `Subscriber` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsCountResponseDto(data map[string]any) NovuEntity`

Create a new `SubscriberNotificationsCountResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberNotificationsResponseDto(data map[string]any) NovuEntity`

Create a new `SubscriberNotificationsResponseDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberPreferencesDto(data map[string]any) NovuEntity`

Create a new `SubscriberPreferencesDto` entity instance. Pass `nil` for no initial data.

#### `SubscriberResponseDto(data map[string]any) NovuEntity`

Create a new `SubscriberResponseDto` entity instance. Pass `nil` for no initial data.

#### `Subscription(data map[string]any) NovuEntity`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `Topic(data map[string]any) NovuEntity`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriberDto(data map[string]any) NovuEntity`

Create a new `TopicSubscriberDto` entity instance. Pass `nil` for no initial data.

#### `TopicSubscriptionsResponseDto(data map[string]any) NovuEntity`

Create a new `TopicSubscriptionsResponseDto` entity instance. Pass `nil` for no initial data.

#### `Translation(data map[string]any) NovuEntity`

Create a new `Translation` entity instance. Pass `nil` for no initial data.

#### `TranslationGroupDto(data map[string]any) NovuEntity`

Create a new `TranslationGroupDto` entity instance. Pass `nil` for no initial data.

#### `TriggerEventResponseDto(data map[string]any) NovuEntity`

Create a new `TriggerEventResponseDto` entity instance. Pass `nil` for no initial data.

#### `Unseen(data map[string]any) NovuEntity`

Create a new `Unseen` entity instance. Pass `nil` for no initial data.

#### `Upload(data map[string]any) NovuEntity`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `WebhookResultDto(data map[string]any) NovuEntity`

Create a new `WebhookResultDto` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) NovuEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowInfoDto(data map[string]any) NovuEntity`

Create a new `WorkflowInfoDto` entity instance. Pass `nil` for no initial data.

#### `WorkflowResponseDto(data map[string]any) NovuEntity`

Create a new `WorkflowResponseDto` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActivityNotificationResponseDtoEntity

```go
activityNotificationResponseDto := client.ActivityNotificationResponseDto(nil)
fmt.Println(activityNotificationResponseDto.GetName()) // "activity_notification_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `[]any` | No |  |
| `contextKeys` | `[]any` | No | Context (single or multi) in which the notification was sent |
| `controls` | `map[string]any` | No | Controls associated with the notification |
| `createdAt` | `string` | No | Creation time of the notification |
| `critical` | `bool` | No | Criticality of the notification |
| `digestedNotificationId` | `string` | No | Digested Notification ID |
| `environmentId` | `string` | Yes | Environment ID of the notification |
| `id` | `string` | No | Unique identifier of the notification |
| `jobs` | `[]any` | No | Jobs of the notification |
| `organizationId` | `string` | Yes | Organization ID of the notification |
| `payload` | `map[string]any` | No | Payload of the notification |
| `severity` | `string` | No | Workflow severity |
| `subscriber` | `any` | No | Subscriber of the notification |
| `subscriberId` | `string` | Yes | Subscriber ID of the notification |
| `tags` | `[]any` | No | Tags associated with the notification |
| `template` | `any` | No | Template of the notification |
| `templateId` | `string` | No | Template ID of the notification |
| `to` | `map[string]any` | No | To field for subscriber definition |
| `topics` | `[]any` | No | Topics of the notification |
| `transactionId` | `string` | Yes | Transaction ID of the notification |
| `updatedAt` | `string` | No | Last updated time of the notification |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActivityNotificationResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActivityNotificationResponseDto(nil).Load(map[string]any{"notification_id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentEntity

```go
agent := client.Agent(nil)
fmt.Println(agent.GetName()) // "agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `map[string]any` | Yes |  |
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
| `integrations` | `[]any` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active` | - | - | Yes | Yes | - |
| `behavior` | - | - | - | Yes | - |
| `bridgeUrl` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `createdBy` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `devBridgeActive` | - | - | - | - | - |
| `devBridgeUrl` | - | - | - | - | - |
| `environmentId` | - | - | - | - | - |
| `exceedsPlanLimit` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `identifier` | - | - | - | - | - |
| `integrations` | - | - | - | - | - |
| `managedRuntime` | - | - | Yes | - | - |
| `name` | - | - | - | Yes | - |
| `organizationId` | - | - | - | - | - |
| `runtime` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `visibility` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Agent(nil).Update(map[string]any{
    "id": "agent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Agent(nil).Remove(map[string]any{"id": "agent_id", "delete_from_provider": "delete_from_provider"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentIntegrationResponseDtoEntity

```go
agentIntegrationResponseDto := client.AgentIntegrationResponseDto(nil)
fmt.Println(agentIntegrationResponseDto.GetName()) // "agent_integration_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `map[string]any` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `map[string]any` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AgentIntegrationResponseDto(nil).Update(map[string]any{
    "agent_id": "agent_id",
    "agent_integration_id": "agent_integration_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentResponseDtoEntity

```go
agentResponseDto := client.AgentResponseDto(nil)
fmt.Println(agentResponseDto.GetName()) // "agent_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `map[string]any` | Yes |  |
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
| `integrations` | `[]any` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AgentResponseDto(nil).Update(map[string]any{
    "identifier": "identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkEntity

```go
bulk := client.Bulk(nil)
fmt.Println(bulk.GetName()) // "bulk"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `[]any` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Bulk(nil).Create(map[string]any{
    "subscribers": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChannelConnectionEntity

```go
channelConnection := client.ChannelConnection(nil)
fmt.Println(channelConnection.GetName()) // "channel_connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `map[string]any` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `map[string]any` | No |  |
| `contextKeys` | `[]any` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `auth` | - | - | - | - | - |
| `channel` | - | - | - | - | - |
| `connectionMode` | - | - | - | - | - |
| `context` | - | - | - | - | - |
| `contextKeys` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `identifier` | - | - | Yes | - | - |
| `integrationIdentifier` | - | - | - | - | - |
| `providerId` | - | - | - | - | - |
| `subscriberId` | - | - | Yes | - | - |
| `updatedAt` | - | - | - | - | - |
| `workspace` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ChannelConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ChannelConnection(nil).Load(map[string]any{"id": "channel_connection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ChannelConnection(nil).Update(map[string]any{
    "id": "channel_connection_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ChannelConnection(nil).Remove(map[string]any{"id": "channel_connection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChannelConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChannelEndpointEntity

```go
channelEndpoint := client.ChannelEndpoint(nil)
fmt.Println(channelEndpoint.GetName()) // "channel_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `[]any` | Yes | The context of the channel connection |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ChannelEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ChannelEndpoint(nil).Load(map[string]any{"id": "channel_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ChannelEndpoint(nil).Update(map[string]any{
    "id": "channel_endpoint_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ChannelEndpoint(nil).Remove(map[string]any{"id": "channel_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChannelEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConfigureEntity

```go
configure := client.Configure(nil)
fmt.Println(configure.GetName()) // "configure"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `string` | Yes | Resolved bot username from getMe |
| `configuredAt` | `string` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConfigureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContextEntity

```go
context := client.Context(nil)
fmt.Println(context.GetName()) // "context"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Yes | Creation timestamp |
| `data` | `map[string]any` | Yes | Custom data associated with this context |
| `id` | `string` | Yes | Unique identifier for this context |
| `type` | `string` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `bridgeUrl` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `data` | - | - | Yes | - | - |
| `id` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Context(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Context(nil).Load(map[string]any{"id": "context_id", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Context(nil).Update(map[string]any{
    "id": "context_id",
    "type": "type",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Context(nil).Remove(map[string]any{"id": "context_id", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContextEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateSubscriptionsResponseDtoEntity

```go
createSubscriptionsResponseDto := client.CreateSubscriptionsResponseDto(nil)
fmt.Println(createSubscriptionsResponseDto.GetName()) // "create_subscriptions_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `map[string]any` | No |  |
| `name` | `string` | No | The name of the topic |
| `preferences` | `[]any` | No | The preferences of the topic. |
| `subscriberIds` | `[]any` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `[]any` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateSubscriptionsResponseDto(nil).Create(map[string]any{
    "topic_key": "example_topic_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DiffEntity

```go
diff := client.Diff(nil)
fmt.Println(diff.GetName()) // "diff"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `[]any` | Yes | Diff resources by resource type |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainEntity

```go
domain := client.Domain(nil)
fmt.Println(domain.GetName()) // "domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `map[string]any` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `string` | Yes | The domain name (e.g. |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Domain(nil).Load(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Domain(nil).Update(map[string]any{
    "id": "domain_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Domain(nil).Remove(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainConnectApplyUrlResponseDtoEntity

```go
domainConnectApplyUrlResponseDto := client.DomainConnectApplyUrlResponseDto(nil)
fmt.Println(domainConnectApplyUrlResponseDto.GetName()) // "domain_connect_apply_url_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `string` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DomainConnectApplyUrlResponseDto(nil).Create(map[string]any{
    "domain_id": "example_domain_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainConnectStatusResponseDtoEntity

```go
domainConnectStatusResponseDto := client.DomainConnectStatusResponseDto(nil)
fmt.Println(domainConnectStatusResponseDto.GetName()) // "domain_connect_status_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DomainConnectStatusResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainResponseDtoEntity

```go
domainResponseDto := client.DomainResponseDto(nil)
fmt.Println(domainResponseDto.GetName()) // "domain_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `map[string]any` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainRouteResponseDtoEntity

```go
domainRouteResponseDto := client.DomainRouteResponseDto(nil)
fmt.Println(domainRouteResponseDto.GetName()) // "domain_route_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes |  |
| `agentId` | `string` | No | Internal id of the destination agent. |
| `createdAt` | `string` | Yes |  |
| `data` | `map[string]any` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `address` | - | - | - |
| `agentId` | - | - | - |
| `createdAt` | - | - | - |
| `data` | - | - | - |
| `domainId` | - | - | - |
| `environmentId` | - | - | - |
| `id` | - | - | - |
| `organizationId` | - | - | - |
| `type` | - | - | Yes |
| `updatedAt` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DomainRouteResponseDto(nil).Load(map[string]any{"address": "address", "domain_id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DomainRouteResponseDto(nil).Update(map[string]any{
    "address": "address",
    "domain_id": "domain_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainRouteResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentEntity

```go
environment := client.Environment(nil)
fmt.Println(environment.GetName()) // "environment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `[]any` | No | List of API keys associated with the environment |
| `bridge` | `map[string]any` | No |  |
| `color` | `string` | Yes | Hex color code for the environment |
| `dns` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Environment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Environment(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Environment(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentTagsDtoEntity

```go
environmentTagsDto := client.EnvironmentTagsDto(nil)
fmt.Println(environmentTagsDto.GetName()) // "environment_tags_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnvironmentTagsDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentTagsDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentVariableEntity

```go
environmentVariable := client.EnvironmentVariable(nil)
fmt.Println(environmentVariable.GetName()) // "environment_variable"
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
| `values` | `[]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnvironmentVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EnvironmentVariable(nil).Load(map[string]any{"id": "environment_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EnvironmentVariable(nil).Update(map[string]any{
    "id": "environment_variable_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EnvironmentVariable(nil).Remove(map[string]any{"id": "environment_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```go
environmentVariableWorkflowInfoDto := client.EnvironmentVariableWorkflowInfoDto(nil)
fmt.Println(environmentVariableWorkflowInfoDto.GetName()) // "environment_variable_workflow_info_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnvironmentVariableWorkflowInfoDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `map[string]any` | No |  |
| `name` | `string` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `map[string]any` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `to` | `any` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | No | A unique identifier for deduplication. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Event(nil).Remove(map[string]any{"transaction_id": "transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateChatOAuthUrlResponseDtoEntity

```go
generateChatOAuthUrlResponseDto := client.GenerateChatOAuthUrlResponseDto(nil)
fmt.Println(generateChatOAuthUrlResponseDto.GetName()) // "generate_chat_o_auth_url_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `bool` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `map[string]any` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier |
| `mode` | `string` | No | OAuth flow mode. |
| `scope` | `[]any` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `[]any` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GenerateChatOAuthUrlResponseDto(nil).Create(map[string]any{
    "integrationIdentifier": "example_integrationIdentifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeneratePreviewResponseDtoEntity

```go
generatePreviewResponseDto := client.GeneratePreviewResponseDto(nil)
fmt.Println(generatePreviewResponseDto.GetName()) // "generate_preview_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `map[string]any` | No | Optional control values |
| `previewPayload` | `any` | No | Optional payload for preview generation |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImportMasterJsonResponseDtoEntity

```go
importMasterJsonResponseDto := client.ImportMasterJsonResponseDto(nil)
fmt.Println(importMasterJsonResponseDto.GetName()) // "import_master_json_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `[]any` | No | List of resource IDs that failed to import |
| `locale` | `string` | Yes | The locale for which translations are being imported |
| `masterJson` | `map[string]any` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Yes | Human-readable message describing the import result |
| `success` | `bool` | Yes | Overall success status of the import operation |
| `successful` | `[]any` | No | List of resource IDs that were successfully imported |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InboxNotificationDtoEntity

```go
inboxNotificationDto := client.InboxNotificationDto(nil)
fmt.Println(inboxNotificationDto.GetName()) // "inbox_notification_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `string` | No | ISO timestamp when the notification was archived |
| `avatar` | `string` | No | Avatar URL for the notification |
| `body` | `string` | Yes | Body content of the notification |
| `channelType` | `string` | Yes | Channel the message was sent on |
| `createdAt` | `string` | Yes | ISO timestamp when the notification was created |
| `data` | `map[string]any` | No | Custom data payload of the notification |
| `deliveredAt` | `[]any` | No | Timestamps when the notification was delivered |
| `firstSeenAt` | `string` | No | ISO timestamp when the notification was first seen |
| `id` | `string` | Yes | Unique identifier of the notification |
| `isArchived` | `bool` | Yes | Whether the notification has been archived |
| `isRead` | `bool` | Yes | Whether the notification has been read |
| `isSeen` | `bool` | Yes | Whether the notification has been seen |
| `isSnoozed` | `bool` | Yes | Whether the notification is snoozed |
| `primaryAction` | `any` | No | Primary action button for the notification |
| `readAt` | `string` | No | ISO timestamp when the notification was read |
| `redirect` | `any` | No | Redirect configuration for the notification |
| `secondaryAction` | `any` | No | Secondary action button for the notification |
| `severity` | `string` | Yes | Workflow severity |
| `snoozeUntil` | `string` | Yes | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `string` | No | ISO timestamp when the notification will be unsnoozed |
| `subject` | `string` | No | Subject of the notification |
| `tags` | `[]any` | No | Tags associated with the notification |
| `to` | `any` | Yes | Subscriber this notification was sent to |
| `transactionId` | `string` | Yes | Transaction identifier of the notification |
| `workflow` | `any` | No | Workflow associated with the notification |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InboxNotificationDto(nil).Update(map[string]any{
    "notification_id": "notification_id",
    "subscriber_id": "subscriber_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InboxNotificationDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | No | The channel type for the integration. |
| `check` | `bool` | No | Flag to check the integration status |
| `conditions` | `[]any` | No | Legacy StepFilter conditions. |
| `configurations` | `map[string]any` | No | Configurations for the integration |
| `credentials` | `any` | No | The credentials for the integration |
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
| `rules` | `map[string]any` | No | JSONLogic used at send time to select this integration. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Integration(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationResponseDtoEntity

```go
integrationResponseDto := client.IntegrationResponseDto(nil)
fmt.Println(integrationResponseDto.GetName()) // "integration_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the integration is currently active. |
| `channel` | `string` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `[]any` | No | Legacy StepFilter conditions. |
| `configurations` | `any` | No | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `any` | No | The decrypted credentials required for the integration to function (e.g. |
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
| `rules` | `map[string]any` | No | JSONLogic used at send time to select this integration. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IntegrationResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LayoutEntity

```go
layout := client.Layout(nil)
fmt.Println(layout.GetName()) // "layout"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `any` | No | Control values for the layout. |
| `controls` | `any` | Yes | Controls metadata for the layout |
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
| `updatedBy` | `any` | No | User who last updated the layout |
| `variables` | `map[string]any` | No | The variables JSON Schema for the layout |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Layout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Layout(nil).Load(map[string]any{"id": "layout_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Layout(nil).Update(map[string]any{
    "id": "layout_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Layout(nil).Remove(map[string]any{"id": "layout_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LayoutEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LayoutResponseDtoEntity

```go
layoutResponseDto := client.LayoutResponseDto(nil)
fmt.Println(layoutResponseDto.GetName()) // "layout_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LayoutResponseDto(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LayoutResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LinkEntity

```go
link := client.Link(nil)
fmt.Println(link.GetName()) // "link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `map[string]any` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListAgentIntegrationsResponseDtoEntity

```go
listAgentIntegrationsResponseDto := client.ListAgentIntegrationsResponseDto(nil)
fmt.Println(listAgentIntegrationsResponseDto.GetName()) // "list_agent_integrations_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `map[string]any` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `map[string]any` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListAgentIntegrationsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListDomainRoutesResponseDtoEntity

```go
listDomainRoutesResponseDto := client.ListDomainRoutesResponseDto(nil)
fmt.Println(listDomainRoutesResponseDto.GetName()) // "list_domain_routes_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes |  |
| `agentId` | `string` | No | Internal id of the destination agent. |
| `createdAt` | `string` | Yes |  |
| `data` | `map[string]any` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListDomainRoutesResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListTopicSubscriptionsResponseDtoEntity

```go
listTopicSubscriptionsResponseDto := client.ListTopicSubscriptionsResponseDto(nil)
fmt.Println(listTopicSubscriptionsResponseDto.GetName()) // "list_topic_subscriptions_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `[]any` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The date and time the subscription was created |
| `id` | `string` | Yes | The identifier of the subscription |
| `identifier` | `string` | Yes | The identifier of the subscription |
| `preferences` | `[]any` | No | The preferences for workflows in this subscription |
| `subscriber` | `any` | Yes | Subscriber information |
| `topic` | `any` | Yes | Topic information |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListTopicSubscriptionsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MasterJsonEntity

```go
masterJson := client.MasterJson(nil)
fmt.Println(masterJson.GetName()) // "master_json"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `map[string]any` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `map[string]any` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MasterJson(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MasterJsonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `any` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `[]any` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Yes | Creation date of the message |
| `cta` | `any` | Yes | Call to action associated with the message |
| `deliveredAt` | `[]any` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `[]any` | No | Device tokens associated with the message, if applicable |
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
| `overrides` | `map[string]any` | No | Provider specific overrides used when triggering the notification |
| `payload` | `map[string]any` | No | The payload that was used to send the notification trigger |
| `phone` | `string` | No | Phone number associated with the message, if applicable |
| `providerId` | `string` | No | Provider ID associated with the message, if applicable |
| `read` | `bool` | Yes | Indicates if the message has been read |
| `seen` | `bool` | Yes | Indicates if the message has been seen |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Message(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Message(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageResponseDtoEntity

```go
messageResponseDto := client.MessageResponseDto(nil)
fmt.Println(messageResponseDto.GetName()) // "message_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `string` | Yes |  |
| `messageId` | `any` | Yes |  |
| `payload` | `map[string]any` | No | Message action payload |
| `status` | `string` | Yes | Message action status |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationFeedItemDtoEntity

```go
notificationFeedItemDto := client.NotificationFeedItemDto(nil)
fmt.Println(notificationFeedItemDto.GetName()) // "notification_feed_item_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `any` | No | Actor details related to the notification, if applicable. |
| `archived` | `bool` | Yes | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `string` | Yes | The main content of the notification. |
| `createdAt` | `string` | No | Timestamp indicating when the notification was created. |
| `cta` | `any` | Yes | Call-to-action information associated with the notification. |
| `data` | `map[string]any` | No | The data sent with the notification. |
| `deviceTokens` | `[]any` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | No | Identifier for the feed associated with the notification. |
| `id` | `string` | Yes | Unique identifier for the notification. |
| `jobId` | `string` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | No | Identifier for the message template used. |
| `notificationId` | `string` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `string` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `map[string]any` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `map[string]any` | No | The payload that was used to send the notification trigger. |
| `providerId` | `string` | No | Identifier for the provider that sends the notification. |
| `read` | `bool` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `bool` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Yes | Current status of the notification. |
| `subject` | `string` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `any` | No | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `[]any` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | No | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NotificationFeedItemDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationFeedItemDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PreferencesResponseDtoEntity

```go
preferencesResponseDto := client.PreferencesResponseDto(nil)
fmt.Println(preferencesResponseDto.GetName()) // "preferences_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `map[string]any` | No |  |
| `preferences` | `[]any` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PreferencesResponseDto(nil).Update(map[string]any{
    "subscriber_id": "subscriber_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PreferencesResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublishEntity

```go
publish := client.Publish(nil)
fmt.Println(publish.GetName()) // "publish"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `bool` | No | Perform a dry run without making actual changes |
| `resources` | `[]any` | No | Array of specific resources to publish. |
| `results` | `[]any` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `string` | No | Source environment ID to sync from. |
| `summary` | `any` | Yes | Summary of the sync operation |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublishEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemoveSubscriberResponseDtoEntity

```go
removeSubscriberResponseDto := client.RemoveSubscriberResponseDto(nil)
fmt.Println(removeSubscriberResponseDto.GetName()) // "remove_subscriber_response_dto"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RemoveSubscriberResponseDto(nil).Remove(map[string]any{"subscriber_id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StepEntity

```go
step := client.Step(nil)
fmt.Println(step.GetName()) // "step"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `map[string]any` | No | Control values for the step (alias for controls.values) |
| `controls` | `any` | Yes | Controls metadata for the step |
| `id` | `string` | Yes | Database identifier of the step |
| `issues` | `any` | No | Issues associated with the step |
| `name` | `string` | Yes | Name of the step |
| `origin` | `string` | Yes | Workflow origin |
| `providerOverrides` | `map[string]any` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Yes | Slug of the step |
| `stepId` | `string` | Yes | Unique identifier of the step |
| `stepResolverHash` | `string` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Yes | Type of the step |
| `variables` | `map[string]any` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Yes | Workflow database identifier |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Step(nil).Load(map[string]any{"id": "step_id", "workflow_id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StepEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberEntity

```go
subscriber := client.Subscriber(nil)
fmt.Println(subscriber.GetName()) // "subscriber"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `[]any` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `map[string]any` | No | Additional custom data for the subscriber |
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
| `topics` | `[]any` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float64` | No | The version of the subscriber document. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subscriber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Subscriber(nil).Load(map[string]any{"id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Subscriber(nil).Update(map[string]any{
    "id": "subscriber_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Subscriber(nil).Remove(map[string]any{"id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberNotificationsCountResponseDtoEntity

```go
subscriberNotificationsCountResponseDto := client.SubscriberNotificationsCountResponseDto(nil)
fmt.Println(subscriberNotificationsCountResponseDto.GetName()) // "subscriber_notifications_count_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float64` | Yes | The count of notifications matching the filter |
| `filter` | `map[string]any` | Yes | The filter applied |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriberNotificationsCountResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberNotificationsResponseDtoEntity

```go
subscriberNotificationsResponseDto := client.SubscriberNotificationsResponseDto(nil)
fmt.Println(subscriberNotificationsResponseDto.GetName()) // "subscriber_notifications_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriberNotificationsResponseDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberPreferencesDtoEntity

```go
subscriberPreferencesDto := client.SubscriberPreferencesDto(nil)
fmt.Println(subscriberPreferencesDto.GetName()) // "subscriber_preferences_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriberPreferencesDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriberPreferencesDto(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberPreferencesDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberResponseDtoEntity

```go
subscriberResponseDto := client.SubscriberResponseDto(nil)
fmt.Println(subscriberResponseDto.GetName()) // "subscriber_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `[]any` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `map[string]any` | No | Additional custom data for the subscriber |
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
| `topics` | `[]any` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float64` | No | The version of the subscriber document. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriberResponseDto(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionEntity

```go
subscription := client.Subscription(nil)
fmt.Println(subscription.GetName()) // "subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `[]any` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The creation date of the subscription |
| `id` | `string` | Yes | The unique identifier of the subscription |
| `identifier` | `string` | No | The identifier of the subscription |
| `name` | `string` | No | The name of the subscription |
| `preferences` | `[]any` | No | The preferences/rules for the subscription |
| `subscriber` | `any` | Yes | The subscriber information |
| `topic` | `any` | Yes | The topic information |
| `updatedAt` | `string` | Yes | The last update date of the subscription |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Subscription(nil).Load(map[string]any{"id": "subscription_id", "topic_id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Subscription(nil).Update(map[string]any{
    "id": "subscription_id",
    "topic_id": "topic_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopicEntity

```go
topic := client.Topic(nil)
fmt.Println(topic.GetName()) // "topic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No | The date the topic was created |
| `data` | `map[string]any` | No | Additional custom data associated with the topic |
| `id` | `string` | Yes | The identifier of the topic |
| `key` | `string` | Yes | The unique key of the topic |
| `name` | `string` | No | The name of the topic |
| `updatedAt` | `string` | No | The date the topic was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Topic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Topic(nil).Load(map[string]any{"id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Topic(nil).Update(map[string]any{
    "id": "topic_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Topic(nil).Remove(map[string]any{"id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopicSubscriberDtoEntity

```go
topicSubscriberDto := client.TopicSubscriberDto(nil)
fmt.Println(topicSubscriberDto.GetName()) // "topic_subscriber_dto"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TopicSubscriberDto(nil).Load(map[string]any{"external_subscriber_id": "external_subscriber_id", "topic_id": "topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopicSubscriberDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopicSubscriptionsResponseDtoEntity

```go
topicSubscriptionsResponseDto := client.TopicSubscriptionsResponseDto(nil)
fmt.Println(topicSubscriptionsResponseDto.GetName()) // "topic_subscriptions_response_dto"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TopicSubscriptionsResponseDto(nil).Remove(map[string]any{"topic_key": "topic_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranslationEntity

```go
translation := client.Translation(nil)
fmt.Println(translation.GetName()) // "translation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `map[string]any` | Yes | Translation content as JSON object |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | No |  |
| `locale` | `string` | Yes | Locale code |
| `resourceId` | `string` | Yes | Resource identifier |
| `resourceType` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Translation(nil).Load(map[string]any{"locale": "locale", "resource_id": "resource_id", "resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Translation(nil).Remove(map[string]any{"resource_id": "resource_id", "resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranslationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranslationGroupDtoEntity

```go
translationGroupDto := client.TranslationGroupDto(nil)
fmt.Println(translationGroupDto.GetName()) // "translation_group_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | No |  |
| `locales` | `[]any` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `[]any` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `string` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TranslationGroupDto(nil).Load(map[string]any{"resource_id": "resource_id", "resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranslationGroupDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TriggerEventResponseDtoEntity

```go
triggerEventResponseDto := client.TriggerEventResponseDto(nil)
fmt.Println(triggerEventResponseDto.GetName()) // "trigger_event_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `bool` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | No | Link to the activity feed for this trigger event |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `map[string]any` | No |  |
| `error` | `[]any` | No | In case of an error, this field will contain the error message(s) |
| `events` | `[]any` | Yes |  |
| `jobData` | `map[string]any` | No |  |
| `name` | `string` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `map[string]any` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Yes | Status of the trigger |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | No | The returned transaction ID of the trigger |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TriggerEventResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UnseenEntity

```go
unseen := client.Unseen(nil)
fmt.Println(unseen.GetName()) // "unseen"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Unseen(nil).Load(map[string]any{"subscriber_id": "subscriber_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UnseenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadEntity

```go
upload := client.Upload(nil)
fmt.Println(upload.GetName()) // "upload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | List of error messages for failed uploads |
| `failedUploads` | `float64` | Yes | Number of files that failed to upload |
| `successfulUploads` | `float64` | Yes | Number of files successfully uploaded |
| `totalFiles` | `float64` | Yes | Total number of files processed |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookResultDtoEntity

```go
webhookResultDto := client.WebhookResultDto(nil)
fmt.Println(webhookResultDto.GetName()) // "webhook_result_dto"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookResultDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `map[string]any` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `map[string]any` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `map[string]any` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `source` | `string` | No | Source of workflow creation |
| `status` | `string` | Yes | Workflow status |
| `stepTypeOverviews` | `[]any` | Yes | Overview of step types in the workflow |
| `steps` | `[]any` | Yes | Steps of the workflow |
| `tags` | `[]any` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the workflow |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Workflow(nil).Update(map[string]any{
    "id": "workflow_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Workflow(nil).Remove(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowInfoDtoEntity

```go
workflowInfoDto := client.WorkflowInfoDto(nil)
fmt.Println(workflowInfoDto.GetName()) // "workflow_info_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkflowInfoDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowInfoDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowResponseDtoEntity

```go
workflowResponseDto := client.WorkflowResponseDto(nil)
fmt.Println(workflowResponseDto.GetName()) // "workflow_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | Description of the workflow |
| `id` | `string` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `map[string]any` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `map[string]any` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `map[string]any` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `status` | `string` | Yes | Workflow status |
| `steps` | `[]any` | Yes | Steps of the workflow |
| `tags` | `[]any` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the workflow |
| `validatePayload` | `bool` | No | Enable or disable payload schema validation |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkflowResponseDto(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewNovuSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

