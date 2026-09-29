# Novu Python SDK Reference

Complete API reference for the Novu Python SDK.


## NovuSDK

### Constructor

```python
from novu_sdk import NovuSDK

client = NovuSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NovuSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = NovuSDK.test()
```


### Instance Methods

#### `ActivityNotificationResponseDto(data=None)`

Create a new `ActivityNotificationResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Agent(data=None)`

Create a new `AgentEntity` instance. Pass `None` for no initial data.

#### `AgentIntegrationResponseDto(data=None)`

Create a new `AgentIntegrationResponseDtoEntity` instance. Pass `None` for no initial data.

#### `AgentResponseDto(data=None)`

Create a new `AgentResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Bulk(data=None)`

Create a new `BulkEntity` instance. Pass `None` for no initial data.

#### `ChannelConnection(data=None)`

Create a new `ChannelConnectionEntity` instance. Pass `None` for no initial data.

#### `ChannelEndpoint(data=None)`

Create a new `ChannelEndpointEntity` instance. Pass `None` for no initial data.

#### `Configure(data=None)`

Create a new `ConfigureEntity` instance. Pass `None` for no initial data.

#### `Context(data=None)`

Create a new `ContextEntity` instance. Pass `None` for no initial data.

#### `CreateSubscriptionsResponseDto(data=None)`

Create a new `CreateSubscriptionsResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Diff(data=None)`

Create a new `DiffEntity` instance. Pass `None` for no initial data.

#### `Domain(data=None)`

Create a new `DomainEntity` instance. Pass `None` for no initial data.

#### `DomainConnectApplyUrlResponseDto(data=None)`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance. Pass `None` for no initial data.

#### `DomainConnectStatusResponseDto(data=None)`

Create a new `DomainConnectStatusResponseDtoEntity` instance. Pass `None` for no initial data.

#### `DomainResponseDto(data=None)`

Create a new `DomainResponseDtoEntity` instance. Pass `None` for no initial data.

#### `DomainRouteResponseDto(data=None)`

Create a new `DomainRouteResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Environment(data=None)`

Create a new `EnvironmentEntity` instance. Pass `None` for no initial data.

#### `EnvironmentTagsDto(data=None)`

Create a new `EnvironmentTagsDtoEntity` instance. Pass `None` for no initial data.

#### `EnvironmentVariable(data=None)`

Create a new `EnvironmentVariableEntity` instance. Pass `None` for no initial data.

#### `EnvironmentVariableWorkflowInfoDto(data=None)`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `GenerateChatOAuthUrlResponseDto(data=None)`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance. Pass `None` for no initial data.

#### `GeneratePreviewResponseDto(data=None)`

Create a new `GeneratePreviewResponseDtoEntity` instance. Pass `None` for no initial data.

#### `ImportMasterJsonResponseDto(data=None)`

Create a new `ImportMasterJsonResponseDtoEntity` instance. Pass `None` for no initial data.

#### `InboxNotificationDto(data=None)`

Create a new `InboxNotificationDtoEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `IntegrationResponseDto(data=None)`

Create a new `IntegrationResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Layout(data=None)`

Create a new `LayoutEntity` instance. Pass `None` for no initial data.

#### `LayoutResponseDto(data=None)`

Create a new `LayoutResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Link(data=None)`

Create a new `LinkEntity` instance. Pass `None` for no initial data.

#### `ListAgentIntegrationsResponseDto(data=None)`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance. Pass `None` for no initial data.

#### `ListDomainRoutesResponseDto(data=None)`

Create a new `ListDomainRoutesResponseDtoEntity` instance. Pass `None` for no initial data.

#### `ListTopicSubscriptionsResponseDto(data=None)`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance. Pass `None` for no initial data.

#### `MasterJson(data=None)`

Create a new `MasterJsonEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `MessageResponseDto(data=None)`

Create a new `MessageResponseDtoEntity` instance. Pass `None` for no initial data.

#### `NotificationFeedItemDto(data=None)`

Create a new `NotificationFeedItemDtoEntity` instance. Pass `None` for no initial data.

#### `PreferencesResponseDto(data=None)`

Create a new `PreferencesResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Publish(data=None)`

Create a new `PublishEntity` instance. Pass `None` for no initial data.

#### `RemoveSubscriberResponseDto(data=None)`

Create a new `RemoveSubscriberResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Step(data=None)`

Create a new `StepEntity` instance. Pass `None` for no initial data.

#### `Subscriber(data=None)`

Create a new `SubscriberEntity` instance. Pass `None` for no initial data.

#### `SubscriberNotificationsCountResponseDto(data=None)`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance. Pass `None` for no initial data.

#### `SubscriberNotificationsResponseDto(data=None)`

Create a new `SubscriberNotificationsResponseDtoEntity` instance. Pass `None` for no initial data.

#### `SubscriberPreferencesDto(data=None)`

Create a new `SubscriberPreferencesDtoEntity` instance. Pass `None` for no initial data.

#### `SubscriberResponseDto(data=None)`

Create a new `SubscriberResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Subscription(data=None)`

Create a new `SubscriptionEntity` instance. Pass `None` for no initial data.

#### `Topic(data=None)`

Create a new `TopicEntity` instance. Pass `None` for no initial data.

#### `TopicSubscriberDto(data=None)`

Create a new `TopicSubscriberDtoEntity` instance. Pass `None` for no initial data.

#### `TopicSubscriptionsResponseDto(data=None)`

Create a new `TopicSubscriptionsResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Translation(data=None)`

Create a new `TranslationEntity` instance. Pass `None` for no initial data.

#### `TranslationGroupDto(data=None)`

Create a new `TranslationGroupDtoEntity` instance. Pass `None` for no initial data.

#### `TriggerEventResponseDto(data=None)`

Create a new `TriggerEventResponseDtoEntity` instance. Pass `None` for no initial data.

#### `Unseen(data=None)`

Create a new `UnseenEntity` instance. Pass `None` for no initial data.

#### `Upload(data=None)`

Create a new `UploadEntity` instance. Pass `None` for no initial data.

#### `WebhookResultDto(data=None)`

Create a new `WebhookResultDtoEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `WorkflowInfoDto(data=None)`

Create a new `WorkflowInfoDtoEntity` instance. Pass `None` for no initial data.

#### `WorkflowResponseDto(data=None)`

Create a new `WorkflowResponseDtoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActivityNotificationResponseDtoEntity

```python
activity_notification_response_dto = client.ActivityNotificationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `list` | No |  |
| `contextKeys` | `list` | No | Context (single or multi) in which the notification was sent |
| `controls` | `dict` | No | Controls associated with the notification |
| `createdAt` | `str` | No | Creation time of the notification |
| `critical` | `bool` | No | Criticality of the notification |
| `digestedNotificationId` | `str` | No | Digested Notification ID |
| `environmentId` | `str` | Yes | Environment ID of the notification |
| `id` | `str` | No | Unique identifier of the notification |
| `jobs` | `list` | No | Jobs of the notification |
| `organizationId` | `str` | Yes | Organization ID of the notification |
| `payload` | `dict` | No | Payload of the notification |
| `severity` | `str` | No | Workflow severity |
| `subscriber` | `Any` | No | Subscriber of the notification |
| `subscriberId` | `str` | Yes | Subscriber ID of the notification |
| `tags` | `list` | No | Tags associated with the notification |
| `template` | `Any` | No | Template of the notification |
| `templateId` | `str` | No | Template ID of the notification |
| `to` | `dict` | No | To field for subscriber definition |
| `topics` | `list` | No | Topics of the notification |
| `transactionId` | `str` | Yes | Transaction ID of the notification |
| `updatedAt` | `str` | No | Last updated time of the notification |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActivityNotificationResponseDto().list()
for activity_notification_response_dto in results:
    print(activity_notification_response_dto)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActivityNotificationResponseDto().load({"notification_id": "notification_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityNotificationResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentEntity

```python
agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `dict` | Yes |  |
| `bridgeUrl` | `str` | No | Production bridge URL |
| `createdAt` | `str` | Yes |  |
| `createdBy` | `str` | No | Mongo user id of the user who created the agent |
| `description` | `str` | No |  |
| `devBridgeActive` | `bool` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `str` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `str` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `str` | Yes |  |
| `identifier` | `str` | Yes | Required when not adopting an existing managed agent. |
| `integrations` | `list` | No |  |
| `managedRuntime` | `Any` | No | Present when runtime is "managed". |
| `name` | `str` | Yes | Required when not adopting an existing managed agent (i.e. |
| `organizationId` | `str` | Yes |  |
| `runtime` | `str` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `str` | Yes |  |
| `visibility` | `str` | No | Discovery scope of the agent. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Agent().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Agent().list()
for agent in results:
    print(agent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Agent().load({"id": "agent_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Agent().remove({"id": "agent_id", "delete_from_provider": "delete_from_provider"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Agent().update({
    "id": "agent_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentIntegrationResponseDtoEntity

```python
agent_integration_response_dto = client.AgentIntegrationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `str` | Yes |  |
| `connectedAt` | `dict` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `str` | Yes |  |
| `environmentId` | `str` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `str` | Yes | Agent–integration link document id. |
| `integration` | `dict` | Yes |  |
| `integrationIdentifier` | `str` | No | The integration identifier (same as in the integration store), not the internal document _id. |
| `organizationId` | `str` | Yes |  |
| `providerId` | `str` | No | Provider ID to auto-create a dedicated integration (e.g. |
| `updatedAt` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentIntegrationResponseDto().create({
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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AgentIntegrationResponseDto().update({
    "agent_id": "agent_id",
    "agent_integration_id": "agent_integration_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentIntegrationResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentResponseDtoEntity

```python
agent_response_dto = client.AgentResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes |  |
| `behavior` | `dict` | Yes |  |
| `bridgeUrl` | `str` | No | Production bridge URL |
| `createdAt` | `str` | Yes |  |
| `createdBy` | `str` | No | Mongo user id of the user who created the agent |
| `description` | `str` | No |  |
| `devBridgeActive` | `bool` | No | Whether the dev bridge override is active |
| `devBridgeUrl` | `str` | No | Development bridge URL (set by npx novu dev) |
| `environmentId` | `str` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `str` | Yes |  |
| `identifier` | `str` | Yes |  |
| `integrations` | `list` | No |  |
| `managedRuntime` | `Any` | No | Present when runtime is "managed". |
| `name` | `str` | Yes |  |
| `organizationId` | `str` | Yes |  |
| `runtime` | `str` | No | Whether the agent brain is self-hosted (bridge) or managed by a third-party provider |
| `updatedAt` | `str` | Yes |  |
| `visibility` | `str` | No | Discovery scope of the agent. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AgentResponseDto().update({
    "identifier": "identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkEntity

```python
bulk = client.Bulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscribers` | `list` | Yes | An array of subscribers to be created in bulk. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Bulk().create({
    "subscribers": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChannelConnectionEntity

```python
channel_connection = client.ChannelConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `dict` | Yes |  |
| `channel` | `str` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionMode` | `str` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `dict` | No |  |
| `contextKeys` | `list` | Yes | The context of the channel connection |
| `createdAt` | `str` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `id` | `str` | No |  |
| `identifier` | `str` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | Yes | The subscriber ID to which the channel connection is linked |
| `updatedAt` | `str` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |
| `workspace` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ChannelConnection().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ChannelConnection().list()
for channel_connection in results:
    print(channel_connection)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ChannelConnection().load({"id": "channel_connection_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ChannelConnection().remove({"id": "channel_connection_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ChannelConnection().update({
    "id": "channel_connection_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChannelEndpointEntity

```python
channel_endpoint = client.ChannelEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `str` | Yes | The channel type (email, sms, push, chat, etc.). |
| `connectionIdentifier` | `str` | Yes | The identifier of the channel connection used for this endpoint. |
| `contextKeys` | `list` | Yes | The context of the channel connection |
| `createdAt` | `str` | Yes | The timestamp indicating when the channel endpoint was created, in ISO 8601 format. |
| `endpoint` | `Any` | Yes | Endpoint data specific to the channel type |
| `id` | `str` | No |  |
| `identifier` | `str` | Yes | The unique identifier of the channel endpoint. |
| `integrationIdentifier` | `str` | Yes | The identifier of the integration to use for this channel endpoint. |
| `providerId` | `str` | Yes | The provider identifier (e.g., sendgrid, twilio, slack, etc.). |
| `subscriberId` | `str` | Yes | The subscriber ID to which the channel endpoint is linked |
| `type` | `str` | Yes | Type of channel endpoint |
| `updatedAt` | `str` | Yes | The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ChannelEndpoint().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ChannelEndpoint().list()
for channel_endpoint in results:
    print(channel_endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ChannelEndpoint().load({"id": "channel_endpoint_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ChannelEndpoint().remove({"id": "channel_endpoint_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ChannelEndpoint().update({
    "id": "channel_endpoint_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConfigureEntity

```python
configure = client.Configure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botUsername` | `str` | Yes | Resolved bot username from getMe |
| `configuredAt` | `str` | Yes | ISO-8601 timestamp the webhook was configured at |
| `webhookUrl` | `str` | Yes | URL Novu registered with Telegram for incoming updates |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Configure().create({
    "integration_id": "example_integration_id",  # str
    "botUsername": "example_botUsername",  # str
    "configuredAt": "example_configuredAt",  # str
    "webhookUrl": "example_webhookUrl",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContextEntity

```python
context = client.Context()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bridgeUrl` | `str` | No | Bridge URL override for agent connect, if configured on this context |
| `createdAt` | `str` | Yes | Creation timestamp |
| `data` | `dict` | Yes | Custom data associated with this context |
| `id` | `str` | Yes | Unique identifier for this context |
| `type` | `str` | Yes | Context type (e.g., tenant, app, workspace) |
| `updatedAt` | `str` | Yes | Last update timestamp |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Context().create({
    "createdAt": "example_createdAt",  # str
    "data": {},  # dict
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Context().list()
for context in results:
    print(context)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Context().load({"id": "context_id", "type": "type"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Context().remove({"id": "context_id", "type": "type"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Context().update({
    "id": "context_id",
    "type": "type",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContextEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateSubscriptionsResponseDtoEntity

```python
create_subscriptions_response_dto = client.CreateSubscriptionsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `dict` | No |  |
| `name` | `str` | No | The name of the topic |
| `preferences` | `list` | No | The preferences of the topic. |
| `subscriberIds` | `list` | No | List of subscriber IDs to subscribe to the topic (max: 100). |
| `subscriptions` | `list` | No | List of subscriptions to subscribe to the topic (max: 100). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateSubscriptionsResponseDto().create({
    "topic_key": "example_topic_key",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSubscriptionsResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DiffEntity

```python
diff = client.Diff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `list` | Yes | Diff resources by resource type |
| `sourceEnvironmentId` | `str` | Yes | Source environment ID |
| `summary` | `Any` | Yes | Overall summary |
| `targetEnvironmentId` | `str` | Yes | Target environment ID |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `resources` | - |
| `sourceEnvironmentId` | Yes |
| `summary` | - |
| `targetEnvironmentId` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Diff().create({
    "environment_id": "example_environment_id",  # str
    "resources": [],  # list
    "sourceEnvironmentId": "example_sourceEnvironmentId",  # str
    "summary": "example_summary",  # Any
    "targetEnvironmentId": "example_targetEnvironmentId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainEntity

```python
domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `data` | `dict` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `str` | No |  |
| `environmentId` | `str` | Yes |  |
| `expectedDnsRecords` | `list` | No |  |
| `id` | `str` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `str` | Yes | The domain name (e.g. |
| `organizationId` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Domain().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Domain().list()
for domain in results:
    print(domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Domain().load({"id": "domain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Domain().remove({"id": "domain_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Domain().update({
    "id": "domain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainConnectApplyUrlResponseDtoEntity

```python
domain_connect_apply_url_response_dto = client.DomainConnectApplyUrlResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectUri` | `str` | No | Dashboard URL to return to after the DNS provider consent flow completes. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainConnectApplyUrlResponseDto().create({
    "domain_id": "example_domain_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainConnectApplyUrlResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainConnectStatusResponseDtoEntity

```python
domain_connect_status_response_dto = client.DomainConnectStatusResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DomainConnectStatusResponseDto().list({"id": "example"})
for domain_connect_status_response_dto in results:
    print(domain_connect_status_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainConnectStatusResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainResponseDtoEntity

```python
domain_response_dto = client.DomainResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `data` | `dict` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `dnsProvider` | `str` | No |  |
| `environmentId` | `str` | Yes |  |
| `expectedDnsRecords` | `list` | No |  |
| `id` | `str` | Yes |  |
| `mxRecordConfigured` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `organizationId` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainResponseDto().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainRouteResponseDtoEntity

```python
domain_route_response_dto = client.DomainRouteResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes |  |
| `agentId` | `str` | No | Internal id of the destination agent. |
| `createdAt` | `str` | Yes |  |
| `data` | `dict` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `str` | Yes |  |
| `environmentId` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `organizationId` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainRouteResponseDto().create({
    "id": "example_id",  # str
    "address": "example_address",  # str
    "createdAt": "example_createdAt",  # str
    "domainId": "example_domainId",  # str
    "environmentId": "example_environmentId",  # str
    "organizationId": "example_organizationId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DomainRouteResponseDto().load({"address": "address", "domain_id": "domain_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DomainRouteResponseDto().update({
    "address": "address",
    "domain_id": "domain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainRouteResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentEntity

```python
environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKeys` | `list` | No | List of API keys associated with the environment |
| `bridge` | `dict` | No |  |
| `color` | `str` | Yes | Hex color code for the environment |
| `dns` | `dict` | No |  |
| `id` | `str` | Yes | Unique identifier of the environment |
| `identifier` | `str` | Yes | Unique identifier for the environment |
| `name` | `str` | Yes | Name of the environment to be created |
| `organizationId` | `str` | Yes | Organization ID associated with the environment |
| `parentId` | `str` | No | MongoDB ObjectId of the parent environment (optional) |
| `slug` | `str` | No | URL-friendly slug for the environment |
| `type` | `str` | No | Type of the environment |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Environment().create({
    "color": "example_color",  # str
    "id": "example_id",  # str
    "identifier": "example_identifier",  # str
    "name": "example_name",  # str
    "organizationId": "example_organizationId",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Environment().list()
for environment in results:
    print(environment)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Environment().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Environment().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentTagsDtoEntity

```python
environment_tags_dto = client.EnvironmentTagsDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnvironmentTagsDto().list({"id": "example"})
for environment_tags_dto in results:
    print(environment_tags_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentTagsDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentVariableEntity

```python
environment_variable = client.EnvironmentVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `isSecret` | `bool` | Yes | Whether this variable is a secret (encrypted at rest, masked in responses) |
| `key` | `str` | Yes | Unique key for the variable. |
| `organizationId` | `str` | Yes |  |
| `type` | `str` | Yes | The type of the variable |
| `updatedAt` | `str` | Yes |  |
| `values` | `list` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EnvironmentVariable().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnvironmentVariable().list()
for environment_variable in results:
    print(environment_variable)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EnvironmentVariable().load({"id": "environment_variable_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EnvironmentVariable().remove({"id": "environment_variable_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EnvironmentVariable().update({
    "id": "environment_variable_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentVariableWorkflowInfoDtoEntity

```python
environment_variable_workflow_info_dto = client.EnvironmentVariableWorkflowInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | Yes | The name of the workflow |
| `workflowId` | `str` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnvironmentVariableWorkflowInfoDto().list({"variable_key": "example"})
for environment_variable_workflow_info_dto in results:
    print(environment_variable_workflow_info_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableWorkflowInfoDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `str` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `bridgeUrl` | `str` | No | Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. |
| `context` | `dict` | No |  |
| `name` | `str` | Yes | The trigger identifier of the workflow you wish to send. |
| `overrides` | `Any` | No | This could be used to override provider specific configurations |
| `payload` | `dict` | No | The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it. |
| `tenant` | `Any` | No | It is used to specify a tenant context during trigger event. |
| `to` | `Any` | Yes | The recipients list of people who will receive the notification. |
| `transactionId` | `str` | No | A unique identifier for deduplication. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Event().create({
    "name": "example_name",  # str
    "to": "example_to",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Event().remove({"transaction_id": "transaction_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateChatOAuthUrlResponseDtoEntity

```python
generate_chat_o_auth_url_response_dto = client.GenerateChatOAuthUrlResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoLinkUser` | `bool` | No | When true (default when connectionMode is "subscriber"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked "Connect" as a personal endpoint. |
| `connectionIdentifier` | `str` | No | Identifier of the channel connection that will be created. |
| `connectionMode` | `str` | No | Connection mode that determines how the channel connection is scoped. |
| `context` | `dict` | No |  |
| `contextHash` | `str` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `str` | Yes | Integration identifier |
| `mode` | `str` | No | OAuth flow mode. |
| `scope` | `list` | No | **Slack only**: OAuth scopes to request during authorization. |
| `subscriberId` | `str` | No | The subscriber ID to associate with the channel connection. |
| `userScope` | `list` | No | **Slack only**: User-level OAuth scopes for "Sign in with Slack". |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GenerateChatOAuthUrlResponseDto().create({
    "integrationIdentifier": "example_integrationIdentifier",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateChatOAuthUrlResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeneratePreviewResponseDtoEntity

```python
generate_preview_response_dto = client.GeneratePreviewResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `dict` | No | Optional control values |
| `previewPayload` | `Any` | No | Optional payload for preview generation |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GeneratePreviewResponseDto().create({
    "step_id": "example_step_id",  # str
    "workflow_id": "example_workflow_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePreviewResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImportMasterJsonResponseDtoEntity

```python
import_master_json_response_dto = client.ImportMasterJsonResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed` | `list` | No | List of resource IDs that failed to import |
| `locale` | `str` | Yes | The locale for which translations are being imported |
| `masterJson` | `dict` | Yes | Master JSON object containing all translations organized by workflow identifier |
| `message` | `str` | Yes | Human-readable message describing the import result |
| `success` | `bool` | Yes | Overall success status of the import operation |
| `successful` | `list` | No | List of resource IDs that were successfully imported |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImportMasterJsonResponseDto().create({
    "locale": "example_locale",  # str
    "masterJson": {},  # dict
    "message": "example_message",  # str
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportMasterJsonResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InboxNotificationDtoEntity

```python
inbox_notification_dto = client.InboxNotificationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `str` | No | ISO timestamp when the notification was archived |
| `avatar` | `str` | No | Avatar URL for the notification |
| `body` | `str` | Yes | Body content of the notification |
| `channelType` | `str` | Yes | Channel the message was sent on |
| `createdAt` | `str` | Yes | ISO timestamp when the notification was created |
| `data` | `dict` | No | Custom data payload of the notification |
| `deliveredAt` | `list` | No | Timestamps when the notification was delivered |
| `firstSeenAt` | `str` | No | ISO timestamp when the notification was first seen |
| `id` | `str` | Yes | Unique identifier of the notification |
| `isArchived` | `bool` | Yes | Whether the notification has been archived |
| `isRead` | `bool` | Yes | Whether the notification has been read |
| `isSeen` | `bool` | Yes | Whether the notification has been seen |
| `isSnoozed` | `bool` | Yes | Whether the notification is snoozed |
| `primaryAction` | `Any` | No | Primary action button for the notification |
| `readAt` | `str` | No | ISO timestamp when the notification was read |
| `redirect` | `Any` | No | Redirect configuration for the notification |
| `secondaryAction` | `Any` | No | Secondary action button for the notification |
| `severity` | `str` | Yes | Workflow severity |
| `snoozeUntil` | `str` | Yes | The date and time until which the notification should be snoozed |
| `snoozedUntil` | `str` | No | ISO timestamp when the notification will be unsnoozed |
| `subject` | `str` | No | Subject of the notification |
| `tags` | `list` | No | Tags associated with the notification |
| `to` | `Any` | Yes | Subscriber this notification was sent to |
| `transactionId` | `str` | Yes | Transaction identifier of the notification |
| `workflow` | `Any` | No | Workflow associated with the notification |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InboxNotificationDto().update({
    "notification_id": "notification_id",
    "subscriber_id": "subscriber_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboxNotificationDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If the integration is active, the validation on the credentials field will run |
| `channel` | `str` | No | The channel type for the integration. |
| `check` | `bool` | No | Flag to check the integration status |
| `conditions` | `list` | No | Legacy StepFilter conditions. |
| `configurations` | `dict` | No | Configurations for the integration |
| `credentials` | `Any` | No | The credentials for the integration |
| `deleted` | `bool` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `str` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `str` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `str` | No | The ID of the associated environment |
| `id` | `str` | No | The unique identifier of the integration record in the database. |
| `identifier` | `str` | No | The unique identifier for the integration |
| `kind` | `str` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `str` | No | The name of the integration |
| `organizationId` | `str` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `str` | No | The provider ID for the integration |
| `rules` | `dict` | No | JSONLogic used at send time to select this integration. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Integration().create({
    "deleted": True,  # bool
    "organizationId": "example_organizationId",  # str
    "primary": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Integration().list()
for integration in results:
    print(integration)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Integration().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Integration().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationResponseDtoEntity

```python
integration_response_dto = client.IntegrationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the integration is currently active. |
| `channel` | `str` | No | The channel type for the integration, which defines how it communicates (e.g., email, SMS). |
| `conditions` | `list` | No | Legacy StepFilter conditions. |
| `configurations` | `Any` | No | The configurations required for enabling the additional configurations of the integration. |
| `credentials` | `Any` | No | The decrypted credentials required for the integration to function (e.g. |
| `deleted` | `bool` | Yes | Indicates whether the integration has been marked as deleted (soft delete). |
| `deletedAt` | `str` | No | The timestamp indicating when the integration was deleted. |
| `deletedBy` | `str` | No | The identifier of the user who performed the deletion of this integration. |
| `environmentId` | `str` | Yes | The unique identifier for the environment associated with this integration. |
| `id` | `str` | No | The unique identifier of the integration record in the database. |
| `identifier` | `str` | Yes | A unique string identifier for the integration, often used for API calls or internal references. |
| `kind` | `str` | No | Distinguishes delivery integrations from agent-runtime integrations. |
| `name` | `str` | Yes | The name of the integration, which is used to identify it in the user interface. |
| `organizationId` | `str` | Yes | The unique identifier for the organization that owns this integration. |
| `primary` | `bool` | Yes | Indicates whether this integration is marked as primary. |
| `providerId` | `str` | Yes | The identifier for the provider of the integration (e.g., "mailgun", "twilio"). |
| `rules` | `dict` | No | JSONLogic used at send time to select this integration. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IntegrationResponseDto().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IntegrationResponseDto().list()
for integration_response_dto in results:
    print(integration_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LayoutEntity

```python
layout = client.Layout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `Any` | No | Control values for the layout. |
| `controls` | `Any` | Yes | Controls metadata for the layout |
| `createdAt` | `str` | Yes | Creation timestamp |
| `id` | `str` | Yes | Unique internal identifier of the layout |
| `isDefault` | `bool` | Yes | Whether the layout is the default layout |
| `isTranslationEnabled` | `bool` | Yes | Whether the layout translations are enabled |
| `layoutId` | `str` | Yes | Unique identifier for the layout |
| `name` | `str` | Yes | Name of the layout |
| `origin` | `str` | Yes | Workflow origin |
| `slug` | `str` | Yes | Slug of the layout |
| `source` | `str` | No | Source of layout creation |
| `type` | `str` | Yes | Resource type |
| `updatedAt` | `str` | Yes | Last updated timestamp |
| `updatedBy` | `Any` | No | User who last updated the layout |
| `variables` | `dict` | No | The variables JSON Schema for the layout |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Layout().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Layout().list()
for layout in results:
    print(layout)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Layout().load({"id": "layout_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Layout().remove({"id": "layout_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Layout().update({
    "id": "layout_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LayoutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LayoutResponseDtoEntity

```python
layout_response_dto = client.LayoutResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LayoutResponseDto().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LayoutResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkEntity

```python
link = client.Link()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `dict` | No |  |
| `contextHash` | `str` | No | HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same "Inbox with context" signing scheme). |
| `integrationIdentifier` | `str` | Yes | Integration identifier for the chat provider integration |
| `subscriberId` | `str` | Yes | External subscriber identifier to link to their chat identity |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Link().create({
    "integrationIdentifier": "example_integrationIdentifier",  # str
    "subscriberId": "example_subscriberId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAgentIntegrationsResponseDtoEntity

```python
list_agent_integrations_response_dto = client.ListAgentIntegrationsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentId` | `str` | Yes |  |
| `connectedAt` | `dict` | No | Set when the agent–integration link received its first inbound webhook delivery. |
| `createdAt` | `str` | Yes |  |
| `environmentId` | `str` | Yes |  |
| `exceedsPlanLimit` | `bool` | No | Cloud only. |
| `id` | `str` | Yes | Agent–integration link document id. |
| `integration` | `dict` | Yes |  |
| `organizationId` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAgentIntegrationsResponseDto().list({"identifier": "example"})
for list_agent_integrations_response_dto in results:
    print(list_agent_integrations_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAgentIntegrationsResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListDomainRoutesResponseDtoEntity

```python
list_domain_routes_response_dto = client.ListDomainRoutesResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes |  |
| `agentId` | `str` | No | Internal id of the destination agent. |
| `createdAt` | `str` | Yes |  |
| `data` | `dict` | No | String key-value metadata (max 10 keys, 500 characters total when set via API). |
| `domainId` | `str` | Yes |  |
| `environmentId` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `organizationId` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListDomainRoutesResponseDto().list({"domain_id": "example"})
for list_domain_routes_response_dto in results:
    print(list_domain_routes_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDomainRoutesResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListTopicSubscriptionsResponseDtoEntity

```python
list_topic_subscriptions_response_dto = client.ListTopicSubscriptionsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `list` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `str` | Yes | The date and time the subscription was created |
| `id` | `str` | Yes | The identifier of the subscription |
| `identifier` | `str` | Yes | The identifier of the subscription |
| `preferences` | `list` | No | The preferences for workflows in this subscription |
| `subscriber` | `Any` | Yes | Subscriber information |
| `topic` | `Any` | Yes | Topic information |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListTopicSubscriptionsResponseDto().list({"subscriber_id": "example"})
for list_topic_subscriptions_response_dto in results:
    print(list_topic_subscriptions_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListTopicSubscriptionsResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MasterJsonEntity

```python
master_json = client.MasterJson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `layouts` | `dict` | Yes | All translations for given locale organized by layout identifier |
| `workflows` | `dict` | Yes | All translations for given locale organized by workflow identifier |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MasterJson().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MasterJsonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageEntity

```python
message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `str` | Yes | Channel the message was sent on |
| `content` | `Any` | No | Content of the message, can be an email block or a string |
| `contextKeys` | `list` | No | Context (single or multi) in which the message was sent |
| `createdAt` | `str` | Yes | Creation date of the message |
| `cta` | `Any` | Yes | Call to action associated with the message |
| `deliveredAt` | `list` | No | Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed |
| `deviceTokens` | `list` | No | Device tokens associated with the message, if applicable |
| `directWebhookUrl` | `str` | No | Direct webhook URL for the message, if applicable |
| `email` | `str` | No | Email address associated with the message, if applicable |
| `environmentId` | `str` | Yes | Environment ID where the message is sent |
| `errorId` | `str` | No | Error ID if the message has an error |
| `errorText` | `str` | No | Error text if the message has an error |
| `feedId` | `str` | No | Feed ID associated with the message, if applicable |
| `id` | `str` | No | Unique identifier for the message |
| `lastReadDate` | `str` | No | Last read date of the message, if available |
| `lastSeenDate` | `str` | No | Last seen date of the message, if available |
| `messageTemplateId` | `str` | No | Message template ID |
| `notificationId` | `str` | Yes | Notification ID associated with the message |
| `organizationId` | `str` | Yes | Organization ID associated with the message |
| `overrides` | `dict` | No | Provider specific overrides used when triggering the notification |
| `payload` | `dict` | No | The payload that was used to send the notification trigger |
| `phone` | `str` | No | Phone number associated with the message, if applicable |
| `providerId` | `str` | No | Provider ID associated with the message, if applicable |
| `read` | `bool` | Yes | Indicates if the message has been read |
| `seen` | `bool` | Yes | Indicates if the message has been seen |
| `snoozedUntil` | `str` | No | Date when the message will be unsnoozed |
| `status` | `str` | Yes | Status of the message |
| `subject` | `str` | No | Subject of the message, if applicable |
| `subscriber` | `Any` | No | Subscriber details, if available |
| `subscriberId` | `str` | Yes | Subscriber ID associated with the message |
| `template` | `Any` | No | Workflow template associated with the message |
| `templateId` | `str` | No | Template ID associated with the message |
| `templateIdentifier` | `str` | No | Identifier for the message template |
| `title` | `str` | No | Title of the message, if applicable |
| `transactionId` | `str` | Yes | Transaction ID associated with the message |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Message().list()
for message in results:
    print(message)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Message().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageResponseDtoEntity

```python
message_response_dto = client.MessageResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markAs` | `str` | Yes |  |
| `messageId` | `Any` | Yes |  |
| `payload` | `dict` | No | Message action payload |
| `status` | `str` | Yes | Message action status |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MessageResponseDto().create({
    "subscriber_id": "example_subscriber_id",  # str
    "markAs": "example_markAs",  # str
    "messageId": "example_messageId",  # Any
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationFeedItemDtoEntity

```python
notification_feed_item_dto = client.NotificationFeedItemDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Any` | No | Actor details related to the notification, if applicable. |
| `archived` | `bool` | Yes | Indicates whether the notification has been archived by the subscriber. |
| `channel` | `str` | Yes | Channel the message was sent on |
| `content` | `str` | Yes | The main content of the notification. |
| `createdAt` | `str` | No | Timestamp indicating when the notification was created. |
| `cta` | `Any` | Yes | Call-to-action information associated with the notification. |
| `data` | `dict` | No | The data sent with the notification. |
| `deviceTokens` | `list` | No | Device tokens for push notifications, if applicable. |
| `environmentId` | `str` | Yes | Identifier for the environment where the notification is sent. |
| `feedId` | `str` | No | Identifier for the feed associated with the notification. |
| `id` | `str` | Yes | Unique identifier for the notification. |
| `jobId` | `str` | Yes | Identifier for the job that triggered the notification. |
| `messageTemplateId` | `str` | No | Identifier for the message template used. |
| `notificationId` | `str` | Yes | Unique identifier for the notification instance. |
| `organizationId` | `str` | Yes | Identifier for the organization sending the notification. |
| `overrides` | `dict` | No | Provider-specific overrides used when triggering the notification. |
| `payload` | `dict` | No | The payload that was used to send the notification trigger. |
| `providerId` | `str` | No | Identifier for the provider that sends the notification. |
| `read` | `bool` | Yes | Indicates whether the notification has been read by the subscriber. |
| `seen` | `bool` | Yes | Indicates whether the notification has been seen by the subscriber. |
| `status` | `str` | Yes | Current status of the notification. |
| `subject` | `str` | No | The subject line for email notifications, if applicable. |
| `subscriber` | `Any` | No | Subscriber details associated with this notification. |
| `subscriberId` | `str` | Yes | Unique identifier for the subscriber receiving the notification. |
| `tags` | `list` | No | Tags associated with the workflow that triggered the notification. |
| `templateId` | `str` | Yes | Identifier for the template used to generate the notification. |
| `templateIdentifier` | `str` | No | Identifier for the template used, if applicable. |
| `transactionId` | `str` | Yes | Unique identifier for the transaction associated with the notification. |
| `updatedAt` | `str` | No | Timestamp indicating when the notification was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NotificationFeedItemDto().list({"subscriber_id": "example"})
for notification_feed_item_dto in results:
    print(notification_feed_item_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationFeedItemDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PreferencesResponseDtoEntity

```python
preferences_response_dto = client.PreferencesResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `dict` | No |  |
| `preferences` | `list` | Yes | Array of workflow preferences to update (maximum 100 items) |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PreferencesResponseDto().update({
    "subscriber_id": "subscriber_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreferencesResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublishEntity

```python
publish = client.Publish()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dryRun` | `bool` | No | Perform a dry run without making actual changes |
| `resources` | `list` | No | Array of specific resources to publish. |
| `results` | `list` | Yes | Sync results by resource type |
| `sourceEnvironmentId` | `str` | No | Source environment ID to sync from. |
| `summary` | `Any` | Yes | Summary of the sync operation |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Publish().create({
    "environment_id": "example_environment_id",  # str
    "results": [],  # list
    "summary": "example_summary",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublishEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveSubscriberResponseDtoEntity

```python
remove_subscriber_response_dto = client.RemoveSubscriberResponseDto()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveSubscriberResponseDto().remove({"subscriber_id": "subscriber_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveSubscriberResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StepEntity

```python
step = client.Step()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `controlValues` | `dict` | No | Control values for the step (alias for controls.values) |
| `controls` | `Any` | Yes | Controls metadata for the step |
| `id` | `str` | Yes | Database identifier of the step |
| `issues` | `Any` | No | Issues associated with the step |
| `name` | `str` | Yes | Name of the step |
| `origin` | `str` | Yes | Workflow origin |
| `providerOverrides` | `dict` | No | Per-provider content overrides keyed by providerId. |
| `slug` | `str` | Yes | Slug of the step |
| `stepId` | `str` | Yes | Unique identifier of the step |
| `stepResolverHash` | `str` | No | Hash identifying the deployed Cloudflare Worker for this step |
| `type` | `str` | Yes | Type of the step |
| `variables` | `dict` | Yes | JSON Schema for variables, follows the JSON Schema standard |
| `workflowDatabaseId` | `str` | Yes | Workflow database identifier |
| `workflowId` | `str` | Yes | Workflow identifier |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Step().load({"id": "step_id", "workflow_id": "workflow_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StepEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberEntity

```python
subscriber = client.Subscriber()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `str` | No | The URL of the subscriber's avatar image. |
| `channels` | `list` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `str` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `dict` | No | Additional custom data for the subscriber |
| `deleted` | `bool` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `str` | No | The email address of the subscriber. |
| `environmentId` | `str` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `str` | No | The first name of the subscriber. |
| `id` | `str` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `str` | No | The last name of the subscriber. |
| `lastOnlineAt` | `str` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `str` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `str` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `str` | No | The phone number of the subscriber. |
| `subscriberId` | `str` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `str` | No | Timezone of the subscriber |
| `topics` | `list` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `str` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | No | The version of the subscriber document. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Subscriber().create({
    "createdAt": "example_createdAt",  # str
    "deleted": True,  # bool
    "environmentId": "example_environmentId",  # str
    "organizationId": "example_organizationId",  # str
    "subscriberId": "example_subscriberId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subscriber().list()
for subscriber in results:
    print(subscriber)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Subscriber().load({"id": "subscriber_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Subscriber().remove({"id": "subscriber_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Subscriber().update({
    "id": "subscriber_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberNotificationsCountResponseDtoEntity

```python
subscriber_notifications_count_response_dto = client.SubscriberNotificationsCountResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float` | Yes | The count of notifications matching the filter |
| `filter` | `dict` | Yes | The filter applied |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriberNotificationsCountResponseDto().list({"subscriber_id": "example", "filter": "example"})
for subscriber_notifications_count_response_dto in results:
    print(subscriber_notifications_count_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberNotificationsCountResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberNotificationsResponseDtoEntity

```python
subscriber_notifications_response_dto = client.SubscriberNotificationsResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriberNotificationsResponseDto().list({"id": "example"})
for subscriber_notifications_response_dto in results:
    print(subscriber_notifications_response_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberNotificationsResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberPreferencesDtoEntity

```python
subscriber_preferences_dto = client.SubscriberPreferencesDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriberPreferencesDto().list({"id": "example"})
for subscriber_preferences_dto in results:
    print(subscriber_preferences_dto)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriberPreferencesDto().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberPreferencesDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberResponseDtoEntity

```python
subscriber_response_dto = client.SubscriberResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `str` | No | The URL of the subscriber's avatar image. |
| `channels` | `list` | No | An array of channel settings associated with the subscriber. |
| `createdAt` | `str` | Yes | The timestamp indicating when the subscriber was created, in ISO 8601 format. |
| `data` | `dict` | No | Additional custom data for the subscriber |
| `deleted` | `bool` | Yes | Indicates whether the subscriber has been deleted. |
| `email` | `str` | No | The email address of the subscriber. |
| `environmentId` | `str` | Yes | The unique identifier of the environment associated with this subscriber. |
| `firstName` | `str` | No | The first name of the subscriber. |
| `id` | `str` | No | The internal ID generated by Novu for your subscriber. |
| `isOnline` | `bool` | No | Indicates whether the subscriber is currently online. |
| `lastName` | `str` | No | The last name of the subscriber. |
| `lastOnlineAt` | `str` | No | The timestamp indicating when the subscriber was last online, in ISO 8601 format. |
| `locale` | `str` | No | The locale setting of the subscriber, indicating their preferred language or region. |
| `organizationId` | `str` | Yes | The unique identifier of the organization to which the subscriber belongs. |
| `phone` | `str` | No | The phone number of the subscriber. |
| `subscriberId` | `str` | Yes | The identifier used to create this subscriber, which typically corresponds to the user ID in your system. |
| `timezone` | `str` | No | Timezone of the subscriber |
| `topics` | `list` | No | An array of topics that the subscriber is subscribed to. |
| `updatedAt` | `str` | Yes | The timestamp indicating when the subscriber was last updated, in ISO 8601 format. |
| `v` | `float` | No | The version of the subscriber document. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriberResponseDto().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionEntity

```python
subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextKeys` | `list` | No | Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123) |
| `createdAt` | `str` | Yes | The creation date of the subscription |
| `id` | `str` | Yes | The unique identifier of the subscription |
| `identifier` | `str` | No | The identifier of the subscription |
| `name` | `str` | No | The name of the subscription |
| `preferences` | `list` | No | The preferences/rules for the subscription |
| `subscriber` | `Any` | Yes | The subscriber information |
| `topic` | `Any` | Yes | The topic information |
| `updatedAt` | `str` | Yes | The last update date of the subscription |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Subscription().load({"id": "subscription_id", "topic_id": "topic_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Subscription().update({
    "id": "subscription_id",
    "topic_id": "topic_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicEntity

```python
topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | No | The date the topic was created |
| `data` | `dict` | No | Additional custom data associated with the topic |
| `id` | `str` | Yes | The identifier of the topic |
| `key` | `str` | Yes | The unique key of the topic |
| `name` | `str` | No | The name of the topic |
| `updatedAt` | `str` | No | The date the topic was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Topic().create({
    "id": "example_id",  # str
    "key": "example_key",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Topic().list()
for topic in results:
    print(topic)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Topic().load({"id": "topic_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Topic().remove({"id": "topic_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Topic().update({
    "id": "topic_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicSubscriberDtoEntity

```python
topic_subscriber_dto = client.TopicSubscriberDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `environmentId` | `str` | Yes | Unique identifier for the environment |
| `externalSubscriberId` | `str` | Yes | External identifier for the subscriber |
| `organizationId` | `str` | Yes | Unique identifier for the organization |
| `subscriberId` | `str` | Yes | Unique identifier for the subscriber |
| `topicId` | `str` | Yes | Unique identifier for the topic |
| `topicKey` | `str` | Yes | Key associated with the topic |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TopicSubscriberDto().load({"external_subscriber_id": "external_subscriber_id", "topic_id": "topic_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicSubscriberDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicSubscriptionsResponseDtoEntity

```python
topic_subscriptions_response_dto = client.TopicSubscriptionsResponseDto()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TopicSubscriptionsResponseDto().remove({"topic_key": "topic_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicSubscriptionsResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranslationEntity

```python
translation = client.Translation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `dict` | Yes | Translation content as JSON object |
| `createdAt` | `str` | Yes | Creation timestamp |
| `id` | `str` | No |  |
| `locale` | `str` | Yes | Locale code |
| `resourceId` | `str` | Yes | Resource identifier |
| `resourceType` | `str` | Yes | Resource type |
| `updatedAt` | `str` | Yes | Last update timestamp |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Translation().create({
    "content": {},  # dict
    "createdAt": "example_createdAt",  # str
    "locale": "example_locale",  # str
    "resourceId": "example_resourceId",  # str
    "resourceType": "example_resourceType",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Translation().load({"locale": "locale", "resource_id": "resource_id", "resource_type": "resource_type"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Translation().remove({"resource_id": "resource_id", "resource_type": "resource_type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranslationGroupDtoEntity

```python
translation_group_dto = client.TranslationGroupDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | Creation timestamp |
| `id` | `str` | No |  |
| `locales` | `list` | Yes | Array of available locales for this resource |
| `outdatedLocales` | `list` | No | Locales that are outdated compared to the default locale (only present when there are outdated locales) |
| `resourceId` | `str` | Yes | Resource identifier (slugified ID) |
| `resourceName` | `str` | Yes | Resource name (e.g., workflow name) |
| `resourceType` | `str` | Yes | Resource type |
| `updatedAt` | `str` | Yes | Last update timestamp |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TranslationGroupDto().load({"resource_id": "resource_id", "resource_type": "resource_type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslationGroupDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TriggerEventResponseDtoEntity

```python
trigger_event_response_dto = client.TriggerEventResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledged` | `bool` | Yes | Indicates whether the trigger was acknowledged or not |
| `activityFeedLink` | `str` | No | Link to the activity feed for this trigger event |
| `actor` | `Any` | No | It is used to display the Avatar of the provided actor's subscriber id or actor object. |
| `agentId` | `str` | No | Override the workflow-assigned agent for this trigger using the public agent identifier. |
| `context` | `dict` | No |  |
| `error` | `list` | No | In case of an error, this field will contain the error message(s) |
| `events` | `list` | Yes |  |
| `jobData` | `dict` | No |  |
| `name` | `str` | Yes | The trigger identifier associated for the template you wish to send. |
| `overrides` | `Any` | No | This could be used to override provider specific configurations |
| `payload` | `dict` | Yes | The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it. |
| `status` | `str` | Yes | Status of the trigger |
| `tenant` | `Any` | No | It is used to specify a tenant context during trigger event. |
| `transactionId` | `str` | No | The returned transaction ID of the trigger |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TriggerEventResponseDto().create({
    "acknowledged": True,  # bool
    "events": [],  # list
    "name": "example_name",  # str
    "payload": {},  # dict
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEventResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UnseenEntity

```python
unseen = client.Unseen()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Unseen().load({"subscriber_id": "subscriber_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnseenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadEntity

```python
upload = client.Upload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | List of error messages for failed uploads |
| `failedUploads` | `float` | Yes | Number of files that failed to upload |
| `successfulUploads` | `float` | Yes | Number of files successfully uploaded |
| `totalFiles` | `float` | Yes | Total number of files processed |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Upload().create({
    "errors": [],  # list
    "failedUploads": 1,  # float
    "successfulUploads": 1,  # float
    "totalFiles": 1,  # float
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookResultDtoEntity

```python
webhook_result_dto = client.WebhookResultDto()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhookResultDto().create({
    "environment_id": "example_environment_id",  # str
    "integration_id": "example_integration_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookResultDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `Any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `str` | Yes | Creation timestamp |
| `description` | `str` | No | Description of the workflow |
| `id` | `str` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `dict` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `str` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Any` | No | User who last published the workflow |
| `lastTriggeredAt` | `str` | No | Timestamp of the last workflow trigger |
| `name` | `str` | Yes | Name of the workflow |
| `origin` | `str` | Yes | Workflow origin |
| `payloadExample` | `dict` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `dict` | No | The payload JSON Schema for the workflow |
| `preferences` | `Any` | Yes | Preferences for the workflow |
| `severity` | `str` | Yes | Workflow severity |
| `slug` | `str` | Yes | Slug of the workflow |
| `source` | `str` | No | Source of workflow creation |
| `status` | `str` | Yes | Workflow status |
| `stepTypeOverviews` | `list` | Yes | Overview of step types in the workflow |
| `steps` | `list` | Yes | Steps of the workflow |
| `tags` | `list` | No | Tags associated with the workflow |
| `updatedAt` | `str` | Yes | Last updated timestamp |
| `updatedBy` | `Any` | No | User who last updated the workflow |
| `validatePayload` | `bool` | No | Enable or disable payload schema validation |
| `workflowId` | `str` | Yes | Workflow identifier |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Workflow().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Workflow().list()
for workflow in results:
    print(workflow)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Workflow().remove({"id": "workflow_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Workflow().update({
    "id": "workflow_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowInfoDtoEntity

```python
workflow_info_dto = client.WorkflowInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | Yes | The name of the workflow |
| `workflowId` | `str` | Yes | The unique identifier of the workflow |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkflowInfoDto().list({"layout_id": "example"})
for workflow_info_dto in results:
    print(workflow_info_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowInfoDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowResponseDtoEntity

```python
workflow_response_dto = client.WorkflowResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | Whether the workflow is active |
| `agent` | `Any` | No | Optional agent assignment used to route this workflow through an agent's connected channels. |
| `createdAt` | `str` | Yes | Creation timestamp |
| `description` | `str` | No | Description of the workflow |
| `id` | `str` | Yes | Database identifier of the workflow |
| `isTranslationEnabled` | `bool` | No | Enable or disable translations for this workflow |
| `issues` | `dict` | No | Runtime issues for workflow creation and update |
| `lastPublishedAt` | `str` | No | Timestamp of the last workflow publication |
| `lastPublishedBy` | `Any` | No | User who last published the workflow |
| `lastTriggeredAt` | `str` | No | Timestamp of the last workflow trigger |
| `name` | `str` | Yes | Name of the workflow |
| `origin` | `str` | Yes | Workflow origin |
| `payloadExample` | `dict` | No | Generated payload example based on the payload schema |
| `payloadSchema` | `dict` | No | The payload JSON Schema for the workflow |
| `preferences` | `Any` | Yes | Preferences for the workflow |
| `severity` | `str` | Yes | Workflow severity |
| `slug` | `str` | Yes | Slug of the workflow |
| `status` | `str` | Yes | Workflow status |
| `steps` | `list` | Yes | Steps of the workflow |
| `tags` | `list` | No | Tags associated with the workflow |
| `updatedAt` | `str` | Yes | Last updated timestamp |
| `updatedBy` | `Any` | No | User who last updated the workflow |
| `validatePayload` | `bool` | No | Enable or disable payload schema validation |
| `workflowId` | `str` | Yes | Workflow identifier |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkflowResponseDto().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = NovuSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

