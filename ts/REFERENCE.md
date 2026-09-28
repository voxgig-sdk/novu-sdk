# Novu TypeScript SDK Reference

Complete API reference for the Novu TypeScript SDK.


## NovuSDK

### Constructor

```ts
new NovuSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NovuSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NovuSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NovuSDK` instance in test mode.


### Instance Methods

#### `ActivityNotificationResponseDto(data?: object)`

Create a new `ActivityNotificationResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityNotificationResponseDtoEntity` instance.

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `AgentIntegrationResponseDto(data?: object)`

Create a new `AgentIntegrationResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentIntegrationResponseDtoEntity` instance.

#### `AgentResponseDto(data?: object)`

Create a new `AgentResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentResponseDtoEntity` instance.

#### `Bulk(data?: object)`

Create a new `Bulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkEntity` instance.

#### `ChannelConnection(data?: object)`

Create a new `ChannelConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChannelConnectionEntity` instance.

#### `ChannelEndpoint(data?: object)`

Create a new `ChannelEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChannelEndpointEntity` instance.

#### `Configure(data?: object)`

Create a new `Configure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigureEntity` instance.

#### `Context(data?: object)`

Create a new `Context` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContextEntity` instance.

#### `CreateSubscriptionsResponseDto(data?: object)`

Create a new `CreateSubscriptionsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateSubscriptionsResponseDtoEntity` instance.

#### `Diff(data?: object)`

Create a new `Diff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiffEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `DomainConnectApplyUrlResponseDto(data?: object)`

Create a new `DomainConnectApplyUrlResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainConnectApplyUrlResponseDtoEntity` instance.

#### `DomainConnectStatusResponseDto(data?: object)`

Create a new `DomainConnectStatusResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainConnectStatusResponseDtoEntity` instance.

#### `DomainResponseDto(data?: object)`

Create a new `DomainResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainResponseDtoEntity` instance.

#### `DomainRouteResponseDto(data?: object)`

Create a new `DomainRouteResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainRouteResponseDtoEntity` instance.

#### `Environment(data?: object)`

Create a new `Environment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentEntity` instance.

#### `EnvironmentTagsDto(data?: object)`

Create a new `EnvironmentTagsDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentTagsDtoEntity` instance.

#### `EnvironmentVariable(data?: object)`

Create a new `EnvironmentVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentVariableEntity` instance.

#### `EnvironmentVariableWorkflowInfoDto(data?: object)`

Create a new `EnvironmentVariableWorkflowInfoDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentVariableWorkflowInfoDtoEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `GenerateChatOAuthUrlResponseDto(data?: object)`

Create a new `GenerateChatOAuthUrlResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateChatOAuthUrlResponseDtoEntity` instance.

#### `GeneratePreviewResponseDto(data?: object)`

Create a new `GeneratePreviewResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeneratePreviewResponseDtoEntity` instance.

#### `ImportMasterJsonResponseDto(data?: object)`

Create a new `ImportMasterJsonResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImportMasterJsonResponseDtoEntity` instance.

#### `InboxNotificationDto(data?: object)`

Create a new `InboxNotificationDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InboxNotificationDtoEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `IntegrationResponseDto(data?: object)`

Create a new `IntegrationResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationResponseDtoEntity` instance.

#### `Layout(data?: object)`

Create a new `Layout` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LayoutEntity` instance.

#### `LayoutResponseDto(data?: object)`

Create a new `LayoutResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LayoutResponseDtoEntity` instance.

#### `Link(data?: object)`

Create a new `Link` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkEntity` instance.

#### `ListAgentIntegrationsResponseDto(data?: object)`

Create a new `ListAgentIntegrationsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListAgentIntegrationsResponseDtoEntity` instance.

#### `ListAgentsResponseDto(data?: object)`

Create a new `ListAgentsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListAgentsResponseDtoEntity` instance.

#### `ListChannelConnectionsResponseDto(data?: object)`

Create a new `ListChannelConnectionsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListChannelConnectionsResponseDtoEntity` instance.

#### `ListChannelEndpointsResponseDto(data?: object)`

Create a new `ListChannelEndpointsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListChannelEndpointsResponseDtoEntity` instance.

#### `ListContextsResponseDto(data?: object)`

Create a new `ListContextsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListContextsResponseDtoEntity` instance.

#### `ListDomainRoutesResponseDto(data?: object)`

Create a new `ListDomainRoutesResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListDomainRoutesResponseDtoEntity` instance.

#### `ListDomainsResponseDto(data?: object)`

Create a new `ListDomainsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListDomainsResponseDtoEntity` instance.

#### `ListSubscribersResponseDto(data?: object)`

Create a new `ListSubscribersResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSubscribersResponseDtoEntity` instance.

#### `ListTopicSubscriptionsResponseDto(data?: object)`

Create a new `ListTopicSubscriptionsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListTopicSubscriptionsResponseDtoEntity` instance.

#### `ListTopicsResponseDto(data?: object)`

Create a new `ListTopicsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListTopicsResponseDtoEntity` instance.

#### `MasterJson(data?: object)`

Create a new `MasterJson` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MasterJsonEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `MessageResponseDto(data?: object)`

Create a new `MessageResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageResponseDtoEntity` instance.

#### `NotificationFeedItemDto(data?: object)`

Create a new `NotificationFeedItemDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationFeedItemDtoEntity` instance.

#### `PreferencesResponseDto(data?: object)`

Create a new `PreferencesResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PreferencesResponseDtoEntity` instance.

#### `Publish(data?: object)`

Create a new `Publish` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublishEntity` instance.

#### `RemoveSubscriberResponseDto(data?: object)`

Create a new `RemoveSubscriberResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveSubscriberResponseDtoEntity` instance.

#### `Step(data?: object)`

Create a new `Step` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StepEntity` instance.

#### `Subscriber(data?: object)`

Create a new `Subscriber` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberEntity` instance.

#### `SubscriberNotificationsCountResponseDto(data?: object)`

Create a new `SubscriberNotificationsCountResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberNotificationsCountResponseDtoEntity` instance.

#### `SubscriberNotificationsResponseDto(data?: object)`

Create a new `SubscriberNotificationsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberNotificationsResponseDtoEntity` instance.

#### `SubscriberPreferencesDto(data?: object)`

Create a new `SubscriberPreferencesDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberPreferencesDtoEntity` instance.

#### `SubscriberResponseDto(data?: object)`

Create a new `SubscriberResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberResponseDtoEntity` instance.

#### `Subscription(data?: object)`

Create a new `Subscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionEntity` instance.

#### `Topic(data?: object)`

Create a new `Topic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicEntity` instance.

#### `TopicSubscriberDto(data?: object)`

Create a new `TopicSubscriberDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicSubscriberDtoEntity` instance.

#### `TopicSubscriptionsResponseDto(data?: object)`

Create a new `TopicSubscriptionsResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicSubscriptionsResponseDtoEntity` instance.

#### `Translation(data?: object)`

Create a new `Translation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranslationEntity` instance.

#### `TranslationGroupDto(data?: object)`

Create a new `TranslationGroupDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranslationGroupDtoEntity` instance.

#### `Trigger(data?: object)`

Create a new `Trigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriggerEntity` instance.

#### `TriggerEventResponseDto(data?: object)`

Create a new `TriggerEventResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriggerEventResponseDtoEntity` instance.

#### `Unseen(data?: object)`

Create a new `Unseen` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnseenEntity` instance.

#### `Upload(data?: object)`

Create a new `Upload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadEntity` instance.

#### `WebhookResultDto(data?: object)`

Create a new `WebhookResultDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookResultDtoEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `WorkflowInfoDto(data?: object)`

Create a new `WorkflowInfoDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowInfoDtoEntity` instance.

#### `WorkflowResponseDto(data?: object)`

Create a new `WorkflowResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowResponseDtoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NovuSDK.test()`.

**Returns:** `NovuSDK` instance in test mode.


---

## ActivityNotificationResponseDtoEntity

```ts
const activity_notification_response_dto = client.ActivityNotificationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `any[]` | No |  |
| `contextKeys` | `any[]` | No | Context (single or multi) in which the notification was sent |
| `controls` | `Record<string, any>` | No | Controls associated with the notification |
| `createdAt` | `string` | No | Creation time of the notification |
| `critical` | `boolean` | No | Criticality of the notification |
| `digestedNotificationId` | `string` | No | Digested Notification ID |
| `environmentId` | `string` | Yes | Environment ID of the notification |
| `id` | `string` | No | Unique identifier of the notification |
| `jobs` | `any[]` | No | Jobs of the notification |
| `organizationId` | `string` | Yes | Organization ID of the notification |
| `payload` | `Record<string, any>` | No | Payload of the notification |
| `severity` | `string` | No | Workflow severity |
| `subscriber` | `any` | No | Subscriber of the notification |
| `subscriberId` | `string` | Yes | Subscriber ID of the notification |
| `tags` | `any[]` | No | Tags associated with the notification |
| `template` | `any` | No | Template of the notification |
| `templateId` | `string` | No | Template ID of the notification |
| `to` | `Record<string, any>` | No | To field for subscriber definition |
| `topics` | `any[]` | No | Topics of the notification |
| `transactionId` | `string` | Yes | Transaction ID of the notification |
| `updatedAt` | `string` | No | Last updated time of the notification |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActivityNotificationResponseDto().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActivityNotificationResponseDto().load({ notification_id: 'notification_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentEntity

```ts
const agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `Record<string, any>` | Yes |  |
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
| `integrations` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reply` | `/v1/agents/{agentId}/reply` | `client.Agent().create({ $action: 'reply', ... })` |

An action returns that action's OWN response, which is not necessarily a
Agent record — check the API definition for its shape.

```ts
const result = await client.Agent().create({
  $action: 'reply',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Agent().create({
  active: true,
  behavior: {},
  createdAt: 'example_createdAt',
  environmentId: 'example_environmentId',
  id: 'example_id',
  identifier: 'example_identifier',
  name: 'example_name',
  organizationId: 'example_organizationId',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Agent().load({ id: 'agent_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Agent().remove({ id: 'agent_id', delete_from_provider: 'delete_from_provider' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Agent().update({
  id: 'agent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentIntegrationResponseDtoEntity

```ts
const agent_integration_response_dto = client.AgentIntegrationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `Record<string, any>` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentIntegrationResponseDto().create({
  identifier: 'example_identifier',
  agentId: 'example_agentId',
  createdAt: 'example_createdAt',
  environmentId: 'example_environmentId',
  id: 'example_id',
  integration: {},
  organizationId: 'example_organizationId',
  updatedAt: 'example_updatedAt',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AgentIntegrationResponseDto().update({
  agent_id: 'agent_id',
  agent_integration_id: 'agent_integration_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentResponseDtoEntity

```ts
const agent_response_dto = client.AgentResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `Record<string, any>` | Yes |  |
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
| `integrations` | `any[]` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AgentResponseDto().update({
  identifier: 'identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkEntity

```ts
const bulk = client.Bulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `any[]` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Bulk().create({
  subscribers: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChannelConnectionEntity

```ts
const channel_connection = client.ChannelConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Record<string, any>` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `Record<string, any>` | No |  |
| `contextKeys` | `any[]` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `string` | No |  |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `Record<string, any>` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ChannelConnection().create({
  auth: {},
  channel: 'example_channel',
  contextKeys: [],
  createdAt: 'example_createdAt',
  identifier: 'example_identifier',
  integrationIdentifier: 'example_integrationIdentifier',
  providerId: 'example_providerId',
  subscriberId: 'example_subscriberId',
  updatedAt: 'example_updatedAt',
  workspace: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ChannelConnection().load({ id: 'channel_connection_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ChannelConnection().remove({ id: 'channel_connection_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ChannelConnection().update({
  id: 'channel_connection_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChannelConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChannelEndpointEntity

```ts
const channel_endpoint = client.ChannelEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `any[]` | Yes | The context of the channel connection |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ChannelEndpoint().create({
  channel: 'example_channel',
  connectionIdentifier: 'example_connectionIdentifier',
  contextKeys: [],
  createdAt: 'example_createdAt',
  endpoint: 'example_endpoint',
  identifier: 'example_identifier',
  integrationIdentifier: 'example_integrationIdentifier',
  providerId: 'example_providerId',
  subscriberId: 'example_subscriberId',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ChannelEndpoint().load({ id: 'channel_endpoint_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ChannelEndpoint().remove({ id: 'channel_endpoint_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ChannelEndpoint().update({
  id: 'channel_endpoint_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChannelEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigureEntity

```ts
const configure = client.Configure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `string` | Yes | Resolved bot username from getMe |
| `configuredAt` | `string` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `string` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Configure().create({
  integration_id: 'example_integration_id',
  botUsername: 'example_botUsername',
  configuredAt: 'example_configuredAt',
  webhookUrl: 'example_webhookUrl',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigureEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContextEntity

```ts
const context = client.Context()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Optional bridge URL override for agent connect. |
| `data` | `Record<string, any>` | No | Optional custom data to associate with this context. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Context().create({
  id: 'example_id',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Context().load({ id: 'context_id', type: 'type' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Context().remove({ id: 'context_id', type: 'type' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Context().update({
  id: 'context_id',
  type: 'type',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContextEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateSubscriptionsResponseDtoEntity

```ts
const create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Record<string, any>` | No |  |
| `name` | `string` | No | The name of the topic |
| `preferences` | `any[]` | No | The preferences of the topic. |
| `subscriberIds` | `any[]` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `any[]` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateSubscriptionsResponseDto().create({
  topic_key: 'example_topic_key',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiffEntity

```ts
const diff = client.Diff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `any[]` | Yes | Diff resources by resource type |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Diff().create({
  environment_id: 'example_environment_id',
  resources: [],
  sourceEnvironmentId: 'example_sourceEnvironmentId',
  summary: 'example_summary',
  targetEnvironmentId: 'example_targetEnvironmentId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiffEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `Record<string, any>` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes | The domain name (e.g. |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `diagnose` | `/v1/domains/{domain}/diagnose` | `client.Domain().create({ $action: 'diagnose', ... })` |

An action returns that action's OWN response, which is not necessarily a
Domain record — check the API definition for its shape.

```ts
const result = await client.Domain().create({
  $action: 'diagnose',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Domain().create({
  createdAt: 'example_createdAt',
  environmentId: 'example_environmentId',
  id: 'example_id',
  mxRecordConfigured: true,
  name: 'example_name',
  organizationId: 'example_organizationId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Domain().load({ id: 'domain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Domain().remove({ id: 'domain_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Domain().update({
  id: 'domain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainConnectApplyUrlResponseDtoEntity

```ts
const domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `string` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainConnectApplyUrlResponseDto().create({
  domain_id: 'example_domain_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainConnectStatusResponseDtoEntity

```ts
const domain_connect_status_response_dto = client.DomainConnectStatusResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `auto-configure` | `/v1/domains/{domain}/auto-configure` | `client.DomainConnectStatusResponseDto().list({ $action: 'auto-configure', ... })` |

An action returns that action's OWN response, which is not necessarily a
DomainConnectStatusResponseDto record — check the API definition for its shape.

```ts
const result = await client.DomainConnectStatusResponseDto().list({
  $action: 'auto-configure',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DomainConnectStatusResponseDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainResponseDtoEntity

```ts
const domain_response_dto = client.DomainResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `Record<string, any>` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `verify` | `/v1/domains/{domain}/verify` | `client.DomainResponseDto().create({ $action: 'verify', ... })` |

An action returns that action's OWN response, which is not necessarily a
DomainResponseDto record — check the API definition for its shape.

```ts
const result = await client.DomainResponseDto().create({
  $action: 'verify',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainResponseDto().create({
  id: 'example_id',
  createdAt: 'example_createdAt',
  environmentId: 'example_environmentId',
  mxRecordConfigured: true,
  name: 'example_name',
  organizationId: 'example_organizationId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainRouteResponseDtoEntity

```ts
const domain_route_response_dto = client.DomainRouteResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | No | Agent identifier; required when type is agent, ignored when type is webhook. |
| `data` | `Record<string, any>` | No | Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values). |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `routes` | `/v1/domains/{domain}/routes` | `client.DomainRouteResponseDto().create({ $action: 'routes', ... })` |
| `test` | `/v1/domains/{domain}/routes/{address}/test` | `client.DomainRouteResponseDto().create({ $action: 'test', ... })` |

An action returns that action's OWN response, which is not necessarily a
DomainRouteResponseDto record — check the API definition for its shape.

```ts
const result = await client.DomainRouteResponseDto().create({
  $action: 'routes',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainRouteResponseDto().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DomainRouteResponseDto().load({ address: 'address', domain_id: 'domain_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DomainRouteResponseDto().update({
  address: 'address',
  domain_id: 'domain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainRouteResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentEntity

```ts
const environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `any[]` | No | List of API keys associated with the environment |
| `bridge` | `Record<string, any>` | No |  |
| `color` | `string` | Yes | Hex color code for the environment |
| `dns` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Environment().create({
  color: 'example_color',
  id: 'example_id',
  identifier: 'example_identifier',
  name: 'example_name',
  organizationId: 'example_organizationId',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Environment().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Environment().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Environment().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentTagsDtoEntity

```ts
const environment_tags_dto = client.EnvironmentTagsDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `tags` | `/v2/environments/{environmentId}/tags` | `client.EnvironmentTagsDto().list({ $action: 'tags', ... })` |

An action returns that action's OWN response, which is not necessarily a
EnvironmentTagsDto record — check the API definition for its shape.

```ts
const result = await client.EnvironmentTagsDto().list({
  $action: 'tags',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvironmentTagsDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentTagsDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentVariableEntity

```ts
const environment_variable = client.EnvironmentVariable()
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
| `values` | `any[]` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnvironmentVariable().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  isSecret: true,
  key: 'example_key',
  organizationId: 'example_organizationId',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  values: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvironmentVariable().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnvironmentVariable().load({ id: 'environment_variable_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EnvironmentVariable().remove({ id: 'environment_variable_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EnvironmentVariable().update({
  id: 'environment_variable_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```ts
const environment_variable_workflow_info_dto = client.EnvironmentVariableWorkflowInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvironmentVariableWorkflowInfoDto().list({ variable_key: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Event().remove({ transaction_id: 'transaction_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateChatOAuthUrlResponseDtoEntity

```ts
const generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `boolean` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `string` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `string` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `Record<string, any>` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier |
| `mode` | `string` | No | OAuth flow mode. |
| `scope` | `any[]` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `string` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `any[]` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GenerateChatOAuthUrlResponseDto().create({
  integrationIdentifier: 'example_integrationIdentifier',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeneratePreviewResponseDtoEntity

```ts
const generate_preview_response_dto = client.GeneratePreviewResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Record<string, any>` | No | Optional control values |
| `previewPayload` | `any` | No | Optional payload for preview generation |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GeneratePreviewResponseDto().create({
  step_id: 'example_step_id',
  workflow_id: 'example_workflow_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImportMasterJsonResponseDtoEntity

```ts
const import_master_json_response_dto = client.ImportMasterJsonResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `any[]` | No | List of resource IDs that failed to import |
| `locale` | `string` | Yes | The locale for which translations are being imported |
| `masterJson` | `Record<string, any>` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `string` | Yes | Human-readable message describing the import result |
| `success` | `boolean` | Yes | Overall success status of the import operation |
| `successful` | `any[]` | No | List of resource IDs that were successfully imported |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImportMasterJsonResponseDto().create({
  locale: 'example_locale',
  masterJson: {},
  message: 'example_message',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InboxNotificationDtoEntity

```ts
const inbox_notification_dto = client.InboxNotificationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `string` | No | ISO timestamp when the notification was archived |
| `avatar` | `string` | No | Avatar URL for the notification |
| `body` | `string` | Yes | Body content of the notification |
| `channelType` | `string` | Yes | Channel the message was sent on |
| `createdAt` | `string` | Yes | ISO timestamp when the notification was created |
| `data` | `Record<string, any>` | No | Custom data payload of the notification |
| `deliveredAt` | `any[]` | No | Timestamps when the notification was delivered |
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
| `tags` | `any[]` | No | Tags associated with the notification |
| `to` | `any` | Yes | Subscriber this notification was sent to |
| `transactionId` | `string` | Yes | Transaction identifier of the notification |
| `workflow` | `any` | No | Workflow associated with the notification |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InboxNotificationDto().update({
  notification_id: 'notification_id',
  subscriber_id: 'subscriber_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InboxNotificationDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `string` | No | The channel type for the integration. |
| `check` | `boolean` | No | Flag to check the integration status |
| `conditions` | `any[]` | No | Legacy StepFilter conditions. |
| `configurations` | `Record<string, any>` | No | Configurations for the integration |
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
| `rules` | `Record<string, any>` | No | JSONLogic used at send time to select this integration. |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `auto_configure` | `/v1/integrations/{integrationId}/auto-configure` | `client.Integration().create({ $action: 'auto_configure', ... })` |
| `mobile_link` | `/v1/integrations/{integrationIdentifier}/mobile-link` | `client.Integration().create({ $action: 'mobile_link', ... })` |

An action returns that action's OWN response, which is not necessarily a
Integration record — check the API definition for its shape.

```ts
const result = await client.Integration().create({
  $action: 'auto_configure',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Integration().create({
  deleted: true,
  organizationId: 'example_organizationId',
  primary: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Integration().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Integration().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationResponseDtoEntity

```ts
const integration_response_dto = client.IntegrationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Indicates whether the integration is currently active. |
| `channel` | `string` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `any[]` | No | Legacy StepFilter conditions. |
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
| `rules` | `Record<string, any>` | No | JSONLogic used at send time to select this integration. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `set-primary` | `/v1/integrations/{integrationId}/set-primary` | `client.IntegrationResponseDto().create({ $action: 'set-primary', ... })` |

An action returns that action's OWN response, which is not necessarily a
IntegrationResponseDto record — check the API definition for its shape.

```ts
const result = await client.IntegrationResponseDto().create({
  $action: 'set-primary',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IntegrationResponseDto().create({
  id: 'example_id',
  active: true,
  deleted: true,
  environmentId: 'example_environmentId',
  identifier: 'example_identifier',
  name: 'example_name',
  organizationId: 'example_organizationId',
  primary: true,
  providerId: 'example_providerId',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IntegrationResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LayoutEntity

```ts
const layout = client.Layout()
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
| `variables` | `Record<string, any>` | No | The variables JSON Schema for the layout |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `preview` | `/v2/layouts/{layoutId}/preview` | `client.Layout().create({ $action: 'preview', ... })` |

An action returns that action's OWN response, which is not necessarily a
Layout record — check the API definition for its shape.

```ts
const result = await client.Layout().create({
  $action: 'preview',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Layout().create({
  controls: 'example_controls',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isDefault: true,
  isTranslationEnabled: true,
  layoutId: 'example_layoutId',
  name: 'example_name',
  origin: 'example_origin',
  slug: 'example_slug',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Layout().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Layout().load({ id: 'layout_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Layout().remove({ id: 'layout_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Layout().update({
  id: 'layout_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LayoutEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LayoutResponseDtoEntity

```ts
const layout_response_dto = client.LayoutResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `duplicate` | `/v2/layouts/{layoutId}/duplicate` | `client.LayoutResponseDto().create({ $action: 'duplicate', ... })` |

An action returns that action's OWN response, which is not necessarily a
LayoutResponseDto record — check the API definition for its shape.

```ts
const result = await client.LayoutResponseDto().create({
  $action: 'duplicate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LayoutResponseDto().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LayoutResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkEntity

```ts
const link = client.Link()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Record<string, any>` | No |  |
| `contextHash` | `string` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `string` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `string` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Link().create({
  integrationIdentifier: 'example_integrationIdentifier',
  subscriberId: 'example_subscriberId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListAgentIntegrationsResponseDtoEntity

```ts
const list_agent_integrations_response_dto = client.ListAgentIntegrationsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `string` | Yes |  |
| `connectedAt` | `Record<string, any>` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `exceedsPlanLimit` | `boolean` | No | Cloud only. |
| `id` | `string` | Yes | Agent–integration link document id. |
| `integration` | `Record<string, any>` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListAgentIntegrationsResponseDto().list({ identifier: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListAgentsResponseDtoEntity

```ts
const list_agents_response_dto = client.ListAgentsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes |  |
| `behavior` | `Record<string, any>` | Yes |  |
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
| `integrations` | `any[]` | No |  |
| `managedRuntime` | `any` | No | Present when runtime is "managed". |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `runtime` | `string` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `string` | Yes |  |
| `visibility` | `string` | No | Discovery scope of the agent. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListAgentsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListAgentsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListChannelConnectionsResponseDtoEntity

```ts
const list_channel_connections_response_dto = client.ListChannelConnectionsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Record<string, any>` | Yes |  |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `contextKeys` | `any[]` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListChannelConnectionsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListChannelConnectionsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListChannelEndpointsResponseDtoEntity

```ts
const list_channel_endpoints_response_dto = client.ListChannelEndpointsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `string` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `any[]` | Yes | The context of the channel connection |
| `createdAt` | `string` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `any` | Yes | Endpoint data specific to the channel type |
| `identifier` | `string` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `string` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `string` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `string` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `string` | Yes | Type of channel endpoint |
| `updatedAt` | `string` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListChannelEndpointsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListChannelEndpointsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListContextsResponseDtoEntity

```ts
const list_contexts_response_dto = client.ListContextsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `string` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `string` | Yes | Creation timestamp |
| `data` | `Record<string, any>` | Yes | Custom data associated with this context |
| `id` | `string` | Yes | Unique identifier for this context |
| `type` | `string` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListContextsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListContextsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListDomainRoutesResponseDtoEntity

```ts
const list_domain_routes_response_dto = client.ListDomainRoutesResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes |  |
| `agentId` | `string` | No | Internal id of the destination agent. |
| `createdAt` | `string` | Yes |  |
| `data` | `Record<string, any>` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `string` | Yes |  |
| `environmentId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListDomainRoutesResponseDto().list({ domain_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListDomainsResponseDtoEntity

```ts
const list_domains_response_dto = client.ListDomainsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `data` | `Record<string, any>` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `string` | No |  |
| `environmentId` | `string` | Yes |  |
| `expectedDnsRecords` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `mxRecordConfigured` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `organizationId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListDomainsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListDomainsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSubscribersResponseDtoEntity

```ts
const list_subscribers_response_dto = client.ListSubscribersResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `any[]` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Record<string, any>` | No | Additional custom data for the subscriber |
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
| `topics` | `any[]` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListSubscribersResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSubscribersResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListTopicSubscriptionsResponseDtoEntity

```ts
const list_topic_subscriptions_response_dto = client.ListTopicSubscriptionsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `any[]` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The date and time the subscription was created |
| `id` | `string` | Yes | The identifier of the subscription |
| `identifier` | `string` | Yes | The identifier of the subscription |
| `preferences` | `any[]` | No | The preferences for workflows in this subscription |
| `subscriber` | `any` | Yes | Subscriber information |
| `topic` | `any` | Yes | Topic information |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListTopicSubscriptionsResponseDto().list({ subscriber_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListTopicsResponseDtoEntity

```ts
const list_topics_response_dto = client.ListTopicsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No | The date the topic was created |
| `data` | `Record<string, any>` | No | Additional custom data associated with the topic |
| `id` | `string` | Yes | The identifier of the topic |
| `key` | `string` | Yes | The unique key of the topic |
| `name` | `string` | No | The name of the topic |
| `updatedAt` | `string` | No | The date the topic was last updated |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListTopicsResponseDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListTopicsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MasterJsonEntity

```ts
const master_json = client.MasterJson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `Record<string, any>` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `Record<string, any>` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MasterJson().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MasterJsonEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | Channel the message was sent on |
| `content` | `any` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `any[]` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `string` | Yes | Creation date of the message |
| `cta` | `any` | Yes | Call to action associated with the message |
| `deliveredAt` | `any[]` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `any[]` | No | Device tokens associated with the message, if applicable |
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
| `overrides` | `Record<string, any>` | No | Provider specific overrides used when triggering the notification |
| `payload` | `Record<string, any>` | No | The payload that was used to send the notification trigger |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Message().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Message().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageResponseDtoEntity

```ts
const message_response_dto = client.MessageResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `string` | Yes |  |
| `messageId` | `any` | Yes |  |
| `payload` | `Record<string, any>` | No | Message action payload |
| `status` | `string` | Yes | Message action status |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MessageResponseDto().create({
  subscriber_id: 'example_subscriber_id',
  markAs: 'example_markAs',
  messageId: 'example_messageId',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationFeedItemDtoEntity

```ts
const notification_feed_item_dto = client.NotificationFeedItemDto()
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
| `data` | `Record<string, any>` | No | The data sent with the notification. |
| `deviceTokens` | `any[]` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `string` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `string` | No | Identifier for the feed associated with the notification. |
| `id` | `string` | Yes | Unique identifier for the notification. |
| `jobId` | `string` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `string` | No | Identifier for the message template used. |
| `notificationId` | `string` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `string` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `Record<string, any>` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `Record<string, any>` | No | The payload that was used to send the notification trigger. |
| `providerId` | `string` | No | Identifier for the provider that sends the notification. |
| `read` | `boolean` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `boolean` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `string` | Yes | Current status of the notification. |
| `subject` | `string` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `any` | No | Subscriber details associated with this notification. |
| `subscriberId` | `string` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `any[]` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `string` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `string` | No | Identifier for the template used, if applicable. |
| `transactionId` | `string` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `string` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NotificationFeedItemDto().list({ subscriber_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationFeedItemDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PreferencesResponseDtoEntity

```ts
const preferences_response_dto = client.PreferencesResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Record<string, any>` | No |  |
| `preferences` | `any[]` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PreferencesResponseDto().update({
  subscriber_id: 'subscriber_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PreferencesResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublishEntity

```ts
const publish = client.Publish()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `boolean` | No | Perform a dry run without making actual changes |
| `resources` | `any[]` | No | Array of specific resources to publish. |
| `results` | `any[]` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `string` | No | Source environment ID to sync from. |
| `summary` | `any` | Yes | Summary of the sync operation |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Publish().create({
  environment_id: 'example_environment_id',
  results: [],
  summary: 'example_summary',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublishEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveSubscriberResponseDtoEntity

```ts
const remove_subscriber_response_dto = client.RemoveSubscriberResponseDto()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveSubscriberResponseDto().remove({ subscriber_id: 'subscriber_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StepEntity

```ts
const step = client.Step()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Record<string, any>` | No | Control values for the step (alias for controls.values) |
| `controls` | `any` | Yes | Controls metadata for the step |
| `id` | `string` | Yes | Database identifier of the step |
| `issues` | `any` | No | Issues associated with the step |
| `name` | `string` | Yes | Name of the step |
| `origin` | `string` | Yes | Workflow origin |
| `providerOverrides` | `Record<string, any>` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `string` | Yes | Slug of the step |
| `stepId` | `string` | Yes | Unique identifier of the step |
| `stepResolverHash` | `string` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `string` | Yes | Type of the step |
| `variables` | `Record<string, any>` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `string` | Yes | Workflow database identifier |
| `workflowId` | `string` | Yes | Workflow identifier |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Step().load({ id: 'step_id', workflow_id: 'workflow_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StepEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberEntity

```ts
const subscriber = client.Subscriber()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `any[]` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Record<string, any>` | No | Additional custom data for the subscriber |
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
| `topics` | `any[]` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `message_mark_all` | `/v1/subscribers/{subscriberId}/messages/mark-all` | `client.Subscriber().create({ $action: 'message_mark_all', ... })` |
| `notification_archive` | `/v2/subscribers/{subscriberId}/notifications/archive` | `client.Subscriber().create({ $action: 'notification_archive', ... })` |
| `notification_delete` | `/v2/subscribers/{subscriberId}/notifications/delete` | `client.Subscriber().create({ $action: 'notification_delete', ... })` |
| `notification_read` | `/v2/subscribers/{subscriberId}/notifications/read` | `client.Subscriber().create({ $action: 'notification_read', ... })` |
| `notification_read_archive` | `/v2/subscribers/{subscriberId}/notifications/read-archive` | `client.Subscriber().create({ $action: 'notification_read_archive', ... })` |
| `notification_seen` | `/v2/subscribers/{subscriberId}/notifications/seen` | `client.Subscriber().create({ $action: 'notification_seen', ... })` |

An action returns that action's OWN response, which is not necessarily a
Subscriber record — check the API definition for its shape.

```ts
const result = await client.Subscriber().create({
  $action: 'message_mark_all',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Subscriber().create({
  createdAt: 'example_createdAt',
  deleted: true,
  environmentId: 'example_environmentId',
  organizationId: 'example_organizationId',
  subscriberId: 'example_subscriberId',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Subscriber().load({ id: 'subscriber_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Subscriber().remove({ id: 'subscriber_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Subscriber().update({
  id: 'subscriber_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberNotificationsCountResponseDtoEntity

```ts
const subscriber_notifications_count_response_dto = client.SubscriberNotificationsCountResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The count of notifications matching the filter |
| `filter` | `Record<string, any>` | Yes | The filter applied |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriberNotificationsCountResponseDto().list({ subscriber_id: "example", filter: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberNotificationsResponseDtoEntity

```ts
const subscriber_notifications_response_dto = client.SubscriberNotificationsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `notifications` | `/v2/subscribers/{subscriberId}/notifications` | `client.SubscriberNotificationsResponseDto().list({ $action: 'notifications', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriberNotificationsResponseDto record — check the API definition for its shape.

```ts
const result = await client.SubscriberNotificationsResponseDto().list({
  $action: 'notifications',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriberNotificationsResponseDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberPreferencesDtoEntity

```ts
const subscriber_preferences_dto = client.SubscriberPreferencesDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `preferences` | `/v2/subscribers/{subscriberId}/preferences` | `client.SubscriberPreferencesDto().list({ $action: 'preferences', ... })` |
| `preferences` | `/v2/subscribers/{subscriberId}/preferences` | `client.SubscriberPreferencesDto().update({ $action: 'preferences', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriberPreferencesDto record — check the API definition for its shape.

```ts
const result = await client.SubscriberPreferencesDto().list({
  $action: 'preferences',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriberPreferencesDto().list({ id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriberPreferencesDto().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberPreferencesDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberResponseDtoEntity

```ts
const subscriber_response_dto = client.SubscriberResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | The URL of the subscriber's avatar image. |
| `channels` | `any[]` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `string` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `Record<string, any>` | No | Additional custom data for the subscriber |
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
| `topics` | `any[]` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `string` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `number` | No | The version of the subscriber document. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `credentials` | `/v1/subscribers/{subscriberId}/credentials` | `client.SubscriberResponseDto().update({ $action: 'credentials', ... })` |
| `credentials` | `/v1/subscribers/{subscriberId}/credentials` | `client.SubscriberResponseDto().update({ $action: 'credentials', ... })` |
| `online-status` | `/v1/subscribers/{subscriberId}/online-status` | `client.SubscriberResponseDto().update({ $action: 'online-status', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriberResponseDto record — check the API definition for its shape.

```ts
const result = await client.SubscriberResponseDto().update({
  $action: 'credentials',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriberResponseDto().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionEntity

```ts
const subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `any[]` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `string` | Yes | The creation date of the subscription |
| `id` | `string` | Yes | The unique identifier of the subscription |
| `identifier` | `string` | No | The identifier of the subscription |
| `name` | `string` | No | The name of the subscription |
| `preferences` | `any[]` | No | The preferences/rules for the subscription |
| `subscriber` | `any` | Yes | The subscriber information |
| `topic` | `any` | Yes | The topic information |
| `updatedAt` | `string` | Yes | The last update date of the subscription |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Subscription().load({ id: 'subscription_id', topic_id: 'topic_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Subscription().update({
  id: 'subscription_id',
  topic_id: 'topic_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicEntity

```ts
const topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No | Additional custom data associated with the topic. |
| `id` | `string` | No |  |
| `key` | `string` | Yes | The unique key identifier for the topic. |
| `name` | `string` | No | The display name for the topic |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Topic().create({
  key: 'example_key',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Topic().load({ id: 'topic_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Topic().remove({ id: 'topic_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Topic().update({
  id: 'topic_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicSubscriberDtoEntity

```ts
const topic_subscriber_dto = client.TopicSubscriberDto()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TopicSubscriberDto().load({ external_subscriber_id: 'external_subscriber_id', topic_id: 'topic_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicSubscriberDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicSubscriptionsResponseDtoEntity

```ts
const topic_subscriptions_response_dto = client.TopicSubscriptionsResponseDto()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TopicSubscriptionsResponseDto().remove({ topic_key: 'topic_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranslationEntity

```ts
const translation = client.Translation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Record<string, any>` | Yes | Translation content as JSON object |
| `id` | `string` | No |  |
| `locale` | `string` | Yes | Locale code (e.g., en_US, es_ES) |
| `resourceId` | `string` | Yes | The resource ID to associate translation with. |
| `resourceType` | `string` | Yes | The resource type to associate translation with |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Translation().create({
  content: {},
  locale: 'example_locale',
  resourceId: 'example_resourceId',
  resourceType: 'example_resourceType',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Translation().load({ locale: 'locale', resource_id: 'resource_id', resource_type: 'resource_type' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Translation().remove({ resource_id: 'resource_id', resource_type: 'resource_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranslationGroupDtoEntity

```ts
const translation_group_dto = client.TranslationGroupDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | Creation timestamp |
| `id` | `string` | No |  |
| `locales` | `any[]` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `any[]` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `string` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `string` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `string` | Yes | Resource type |
| `updatedAt` | `string` | Yes | Last update timestamp |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TranslationGroupDto().load({ resource_id: 'resource_id', resource_type: 'resource_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranslationGroupDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriggerEntity

```ts
const trigger = client.Trigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `string` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `Record<string, any>` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `to` | `any` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `string` | No | A unique identifier for deduplication. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Trigger().create({
  name: 'example_name',
  to: 'example_to',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriggerEventResponseDtoEntity

```ts
const trigger_event_response_dto = client.TriggerEventResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `boolean` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `string` | No | Link to the activity feed for this trigger event |
| `actor` | `any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `string` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `Record<string, any>` | No |  |
| `error` | `any[]` | No | In case of an error, this field will contain the error message(s) |
| `events` | `any[]` | Yes |  |
| `jobData` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `any` | No | This could be used to override provider specific configurations |
| `payload` | `Record<string, any>` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `string` | Yes | Status of the trigger |
| `tenant` | `any` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `string` | No | The returned transaction ID of the trigger |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TriggerEventResponseDto().create({
  acknowledged: true,
  events: [],
  name: 'example_name',
  payload: {},
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriggerEventResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnseenEntity

```ts
const unseen = client.Unseen()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Unseen().load({ subscriber_id: 'subscriber_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnseenEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadEntity

```ts
const upload = client.Upload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | List of error messages for failed uploads |
| `failedUploads` | `number` | Yes | Number of files that failed to upload |
| `successfulUploads` | `number` | Yes | Number of files successfully uploaded |
| `totalFiles` | `number` | Yes | Total number of files processed |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Upload().create({
  errors: [],
  failedUploads: 1,
  successfulUploads: 1,
  totalFiles: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookResultDtoEntity

```ts
const webhook_result_dto = client.WebhookResultDto()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhookResultDto().create({
  environment_id: 'example_environment_id',
  integration_id: 'example_integration_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookResultDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
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
| `issues` | `Record<string, any>` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `Record<string, any>` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `Record<string, any>` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `source` | `string` | No | Source of workflow creation |
| `status` | `string` | Yes | Workflow status |
| `stepTypeOverviews` | `any[]` | Yes | Overview of step types in the workflow |
| `steps` | `any[]` | Yes | Steps of the workflow |
| `tags` | `any[]` | No | Tags associated with the workflow |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Workflow().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  origin: 'example_origin',
  preferences: 'example_preferences',
  severity: 'example_severity',
  slug: 'example_slug',
  status: 'example_status',
  stepTypeOverviews: [],
  steps: [],
  updatedAt: 'example_updatedAt',
  workflowId: 'example_workflowId',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Workflow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 'workflow_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Workflow().remove({ id: 'workflow_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Workflow().update({
  id: 'workflow_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowInfoDtoEntity

```ts
const workflow_info_dto = client.WorkflowInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name of the workflow |
| `workflowId` | `string` | Yes | The unique identifier of the workflow |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkflowInfoDto().list({ layout_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowInfoDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowResponseDtoEntity

```ts
const workflow_response_dto = client.WorkflowResponseDto()
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
| `issues` | `Record<string, any>` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `string` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `any` | No | User who last published the workflow |
| `lastTriggeredAt` | `string` | No | Timestamp of the last workflow trigger |
| `name` | `string` | Yes | Name of the workflow |
| `origin` | `string` | Yes | Workflow origin |
| `payloadExample` | `Record<string, any>` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `Record<string, any>` | No | The payload JSON Schema for the workflow |
| `preferences` | `any` | Yes | Preferences for the workflow |
| `severity` | `string` | Yes | Workflow severity |
| `slug` | `string` | Yes | Slug of the workflow |
| `status` | `string` | Yes | Workflow status |
| `steps` | `any[]` | Yes | Steps of the workflow |
| `tags` | `any[]` | No | Tags associated with the workflow |
| `updatedAt` | `string` | Yes | Last updated timestamp |
| `updatedBy` | `any` | No | User who last updated the workflow |
| `validatePayload` | `boolean` | No | Enable or disable payload schema validation |
| `workflowId` | `string` | Yes | Workflow identifier |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sync` | `/v2/workflows/{workflowId}/sync` | `client.WorkflowResponseDto().update({ $action: 'sync', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkflowResponseDto record — check the API definition for its shape.

```ts
const result = await client.WorkflowResponseDto().update({
  $action: 'sync',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkflowResponseDto().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NovuSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new NovuSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

