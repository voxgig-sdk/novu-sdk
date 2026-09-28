# Novu API

Novu REST API. Please see https://docs.novu.co/api-reference for more details.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 67 entities and 149 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ActivityNotificationResponseDto](docs/api/activity_notification_response_dto.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `contextKeys`: Context (single or multi) in which the notification was sent
- `controls`: Controls associated with the notification
- `createdAt`: Creation time of the notification
- `critical`: Criticality of the notification
- `digestedNotificationId`: Digested Notification ID

### [Agent](docs/api/agent.html)

Results: OK. When a reply or edit is delivered, `data` contains the platform message identifiers. Side-effect-only requests (typing, reactions, deletes, signals without an outbound message) return `data: null`.; Created; OK; The link was removed.; The agent was deleted.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `bridgeUrl`: Production bridge URL
- `createdBy`: Mongo user id of the user who created the agent
- `devBridgeActive`: Whether the dev bridge override is active
- `devBridgeUrl`: Development bridge URL (set by npx novu dev)
- `exceedsPlanLimit`: Cloud only. `true` when the agent falls outside the organization plan agent limit (by creation order among active agents, inactive agents do not consume slots). Only plan limits produce this flag, system-capped organizations (enterprise/unlimited tiers) are never over-limit. Over-limit agents are still stored but will not respond to inbound messages until the plan is upgraded or older agents are deactivated.

### [AgentIntegrationResponseDto](docs/api/agent_integration_response_dto.html)

Results: Created; OK.

SDK operations: `create`, `update`.

Key fields to recognise:

- `connectedAt`: Set when the agent–integration link received its first inbound webhook delivery.
- `exceedsPlanLimit`: Cloud only. `true` when this channel type (provider) falls outside the organization plan active-channel limit (by connection order). Active channels are counted per channel type, so multiple integrations of the same provider (for example several Slack workspaces) count as a single active channel. Over-limit channels keep their configuration but the agent will not respond on them until the plan is upgraded or older channel types are disconnected.
- `id`: Agent–integration link document id.
- `integrationIdentifier`: The integration identifier (same as in the integration store), not the internal document _id.
- `providerId`: Provider ID to auto-create a dedicated integration (for example

### [AgentResponseDto](docs/api/agent_response_dto.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `bridgeUrl`: Production bridge URL
- `createdBy`: Mongo user id of the user who created the agent
- `devBridgeActive`: Whether the dev bridge override is active
- `devBridgeUrl`: Development bridge URL (set by npx novu dev)
- `exceedsPlanLimit`: Cloud only. `true` when the agent falls outside the organization plan agent limit (by creation order among active agents, inactive agents do not consume slots). Only plan limits produce this flag, system-capped organizations (enterprise/unlimited tiers) are never over-limit. Over-limit agents are still stored but will not respond to inbound messages until the plan is upgraded or older agents are deactivated.

### [Bulk](docs/api/bulk.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `subscribers`: An array of subscribers to be created in bulk.

### [ChannelConnection](docs/api/channel_connection.html)

Results: Created; OK.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `channel`: The channel type (email, sms, push, chat, etc.).
- `connectionMode`: Connection mode that determines how the channel connection is scoped.
- `contextKeys`: The context of the channel connection
- `createdAt`: The timestamp indicating when the channel endpoint was created, in ISO 8601 format.
- `identifier`: The unique identifier of the channel endpoint.

### [ChannelEndpoint](docs/api/channel_endpoint.html)

Results: Created; OK.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `channel`: The channel type (email, sms, push, chat, etc.).
- `connectionIdentifier`: The identifier of the channel connection used for this endpoint.
- `contextKeys`: The context of the channel connection
- `createdAt`: The timestamp indicating when the channel endpoint was created, in ISO 8601 format.
- `endpoint`: Endpoint data specific to the channel type

### [Configure](docs/api/configure.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `botUsername`: Resolved bot username from getMe
- `configuredAt`: ISO-8601 timestamp the webhook was configured at
- `webhookUrl`: URL Novu registered with Telegram for incoming updates

### [Context](docs/api/context.html)

Results: Created; OK.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `bridgeUrl`: Bridge URL override for agent connect, if configured on this context
- `data`: Custom data associated with this context
- `id`: Unique identifier for this context
- `type`: Context type (for example, tenant, app, workspace)

### [CreateSubscriptionsResponseDto](docs/api/create_subscriptions_response_dto.html)

Results: Subscriptions created successfully.

SDK operations: `create`.

Key fields to recognise:

- `name`: The name of the subscription
- `preferences`: The preferences for workflows in this subscription
- `subscriberIds`: List of subscriber IDs to subscribe to the topic (max: 100).
- `subscriptions`: List of subscriptions to subscribe to the topic (max: 100).

### [Diff](docs/api/diff.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `resources`: Diff resources by resource type
- `sourceEnvironmentId`: Source environment ID
- `summary`: Overall summary
- `targetEnvironmentId`: Target environment ID

### [Domain](docs/api/domain.html)

Results: OK; Created.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `data`: String key-value metadata (max 10 keys, 500 characters total when set via API).
- `name`: The domain name (for example

### [DomainConnectApplyUrlResponseDto](docs/api/domain_connect_apply_url_response_dto.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `redirectUri`: Dashboard URL to return to after the DNS provider consent flow completes.

### [DomainConnectStatusResponseDto](docs/api/domain_connect_status_response_dto.html)

Results: OK.

SDK operations: `list`.

### [DomainResponseDto](docs/api/domain_response_dto.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `data`: String key-value metadata (max 10 keys, 500 characters total when set via API).

### [DomainRouteResponseDto](docs/api/domain_route_response_dto.html)

Results: OK; Created.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `agentId`: Internal id of the destination agent. Only present for agent routes.
- `data`: String key-value metadata (max 10 keys, 500 characters total when set via API).

### [Environment](docs/api/environment.html)

Results: Created; OK.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `apiKeys`: List of API keys associated with the environment
- `color`: Hex color code for the environment
- `id`: Unique identifier of the environment
- `identifier`: Unique identifier for the environment
- `name`: Name of the environment

### [EnvironmentTagsDto](docs/api/environment_tags_dto.html)

Results: OK.

SDK operations: `list`.

### [EnvironmentVariable](docs/api/environment_variable.html)

Results: OK; The environment variable has been deleted.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `isSecret`: Whether this variable is a secret (encrypted at rest, masked in responses)
- `key`: Unique key for the variable.
- `type`: The type of the variable

### [EnvironmentVariableWorkflowInfoDto](docs/api/environment_variable_workflow_info_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `name`: The name of the workflow
- `workflowId`: The unique identifier of the workflow

### [Event](docs/api/event.html)

SDK operations: `remove`.

### [GenerateChatOAuthUrlResponseDto](docs/api/generate_chat_o_auth_url_response_dto.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `autoLinkUser`: When true (default when connectionMode is &quot;subscriber&quot;), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked &quot;Connect&quot; as a personal endpoint.
- `connectionIdentifier`: Identifier of the channel connection that will be created.
- `connectionMode`: Connection mode that determines how the channel connection is scoped.
- `contextHash`: HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same &quot;Inbox with context&quot; signing scheme).
- `integrationIdentifier`: Integration identifier

### [GeneratePreviewResponseDto](docs/api/generate_preview_response_dto.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `controlValues`: Optional control values
- `previewPayload`: Optional payload for preview generation

### [ImportMasterJsonResponseDto](docs/api/import_master_json_response_dto.html)

Results: Master translations imported successfully; Master translations uploaded successfully.

SDK operations: `create`.

Key fields to recognise:

- `failed`: List of resource IDs that failed to import
- `locale`: The locale for which translations are being imported
- `masterJson`: Master JSON object containing all translations organized by workflow identifier
- `message`: Human-readable message describing the import result
- `success`: Overall success status of the import operation

### [InboxNotificationDto](docs/api/inbox_notification_dto.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `archivedAt`: ISO timestamp when the notification was archived
- `avatar`: Avatar URL for the notification
- `body`: Body content of the notification
- `channelType`: Channel the message was sent on
- `createdAt`: ISO timestamp when the notification was created

### [Integration](docs/api/integration.html)

Results: OK; Created; The list of integrations belonging to the organization that are successfully returned.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `active`: Indicates whether the integration is currently active. An active integration will process events and messages.
- `channel`: The channel type for the integration, which defines how it communicates (for example, email, SMS). Not set for agent-kind integrations.
- `check`: Flag to check the integration status
- `conditions`: Legacy StepFilter conditions. Ignored when `rules` is also set.
- `configurations`: The configurations required for enabling the additional configurations of the integration.

### [IntegrationResponseDto](docs/api/integration_response_dto.html)

Results: OK; The list of active integrations belonging to the organization that are successfully returned.

SDK operations: `create`, `list`.

Key fields to recognise:

- `active`: Indicates whether the integration is currently active. An active integration will process events and messages.
- `channel`: The channel type for the integration, which defines how it communicates (for example, email, SMS). Not set for agent-kind integrations.
- `conditions`: Legacy StepFilter conditions. Ignored when `rules` is also set.
- `configurations`: The configurations required for enabling the additional configurations of the integration.
- `credentials`: The decrypted credentials required for the integration to function (for example provider API keys, signing secrets). Only returned to dashboard/session-token callers; API-key authenticated callers receive the integration metadata without this field to avoid amplifying API-key leaks into provider-credential leaks.

### [Layout](docs/api/layout.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `controlValues`: Control values for the layout.
- `controls`: Controls metadata for the layout
- `createdAt`: Creation timestamp
- `id`: Unique internal identifier of the layout
- `isDefault`: Whether the layout is the default layout

### [LayoutResponseDto](docs/api/layout_response_dto.html)

Results: Created.

SDK operations: `create`.

### [Link](docs/api/link.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `contextHash`: HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same &quot;Inbox with context&quot; signing scheme).
- `integrationIdentifier`: Integration identifier for the chat provider integration
- `subscriberId`: External subscriber identifier to link to their chat identity

### [ListAgentIntegrationsResponseDto](docs/api/list_agent_integrations_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `connectedAt`: Set when the agent–integration link received its first inbound webhook delivery.
- `exceedsPlanLimit`: Cloud only. `true` when this channel type (provider) falls outside the organization plan active-channel limit (by connection order). Active channels are counted per channel type, so multiple integrations of the same provider (for example several Slack workspaces) count as a single active channel. Over-limit channels keep their configuration but the agent will not respond on them until the plan is upgraded or older channel types are disconnected.
- `id`: Agent–integration link document id.

### [ListAgentsResponseDto](docs/api/list_agents_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `bridgeUrl`: Production bridge URL
- `createdBy`: Mongo user id of the user who created the agent
- `devBridgeActive`: Whether the dev bridge override is active
- `devBridgeUrl`: Development bridge URL (set by npx novu dev)
- `exceedsPlanLimit`: Cloud only. `true` when the agent falls outside the organization plan agent limit (by creation order among active agents, inactive agents do not consume slots). Only plan limits produce this flag, system-capped organizations (enterprise/unlimited tiers) are never over-limit. Over-limit agents are still stored but will not respond to inbound messages until the plan is upgraded or older agents are deactivated.

### [ListChannelConnectionsResponseDto](docs/api/list_channel_connections_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `channel`: The channel type (email, sms, push, chat, etc.).
- `contextKeys`: The context of the channel connection
- `createdAt`: The timestamp indicating when the channel endpoint was created, in ISO 8601 format.
- `identifier`: The unique identifier of the channel endpoint.
- `integrationIdentifier`: The identifier of the integration to use for this channel endpoint.

### [ListChannelEndpointsResponseDto](docs/api/list_channel_endpoints_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `channel`: The channel type (email, sms, push, chat, etc.).
- `connectionIdentifier`: The identifier of the channel connection used for this endpoint.
- `contextKeys`: The context of the channel connection
- `createdAt`: The timestamp indicating when the channel endpoint was created, in ISO 8601 format.
- `endpoint`: Endpoint data specific to the channel type

### [ListContextsResponseDto](docs/api/list_contexts_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `bridgeUrl`: Bridge URL override for agent connect, if configured on this context
- `createdAt`: Creation timestamp
- `data`: List of returned Contexts
- `id`: Unique identifier for this context
- `type`: Context type (for example, tenant, app, workspace)

### [ListDomainRoutesResponseDto](docs/api/list_domain_routes_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `agentId`: Internal id of the destination agent. Only present for agent routes.
- `data`: List of returned domain routes

### [ListDomainsResponseDto](docs/api/list_domains_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `data`: List of returned domains

### [ListSubscribersResponseDto](docs/api/list_subscribers_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `avatar`: The URL of the subscriber&#39;s avatar image.
- `channels`: An array of channel settings associated with the subscriber.
- `createdAt`: The timestamp indicating when the subscriber was created, in ISO 8601 format.
- `data`: List of returned Subscribers
- `deleted`: Indicates whether the subscriber has been deleted.

### [ListTopicSubscriptionsResponseDto](docs/api/list_topic_subscriptions_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `contextKeys`: Context keys that scope this subscription (for example, tenant:org-a, project:proj-123)
- `createdAt`: The date and time the subscription was created
- `id`: Unique identifier of the workflow
- `identifier`: The identifier of the subscription
- `preferences`: The preferences for workflows in this subscription

### [ListTopicsResponseDto](docs/api/list_topics_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The date the topic was created
- `data`: List of returned Topics
- `id`: The identifier of the topic
- `key`: The unique key of the topic
- `name`: The name of the topic

### [MasterJson](docs/api/master_json.html)

Results: Master translations JSON retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `layouts`: All translations for given locale organized by layout identifier
- `workflows`: All translations for given locale organized by workflow identifier

### [Message](docs/api/message.html)

Results: OK.

SDK operations: `list`, `remove`.

Key fields to recognise:

- `channel`: Channel the message was sent on
- `content`: Content of the message, can be an email block or a string
- `contextKeys`: Context (single or multi) in which the message was sent
- `createdAt`: Creation date of the message
- `cta`: Call to action associated with the message

### [MessageResponseDto](docs/api/message_response_dto.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `payload`: The payload that was used to send the notification trigger
- `status`: Status of the message

### [NotificationFeedItemDto](docs/api/notification_feed_item_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `actor`: Actor details related to the notification, if applicable.
- `archived`: Indicates whether the notification has been archived by the subscriber.
- `channel`: Channel the message was sent on
- `content`: The main content of the notification.
- `createdAt`: Timestamp indicating when the notification was created.

### [PreferencesResponseDto](docs/api/preferences_response_dto.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `preferences`: Array of workflow preferences to update (maximum 100 items)

### [Publish](docs/api/publish.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `dryRun`: Perform a dry run without making actual changes
- `resources`: Number of resources processed
- `results`: Sync results by resource type
- `sourceEnvironmentId`: Source environment ID to sync from.
- `summary`: Summary of the sync operation

### [RemoveSubscriberResponseDto](docs/api/remove_subscriber_response_dto.html)

Results: OK.

SDK operations: `remove`.

### [Step](docs/api/step.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `controlValues`: Control values for the step (alias for controls.values)
- `controls`: Controls metadata for the step
- `id`: Database identifier of the step
- `issues`: Issues associated with the step
- `name`: Name of the step

### [Subscriber](docs/api/subscriber.html)

Results: Created; OK.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `avatar`: The URL of the subscriber&#39;s avatar image.
- `channels`: An array of channel settings associated with the subscriber.
- `createdAt`: The timestamp indicating when the subscriber was created, in ISO 8601 format.
- `data`: Additional custom data for the subscriber
- `deleted`: Indicates whether the subscriber has been deleted.

### [SubscriberNotificationsCountResponseDto](docs/api/subscriber_notifications_count_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `count`: The count of notifications matching the filter
- `filter`: The filter applied

### [SubscriberNotificationsResponseDto](docs/api/subscriber_notifications_response_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier of the notification

### [SubscriberPreferencesDto](docs/api/subscriber_preferences_dto.html)

Results: OK.

SDK operations: `list`, `update`.

### [SubscriberResponseDto](docs/api/subscriber_response_dto.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `avatar`: The URL of the subscriber&#39;s avatar image.
- `channels`: An array of channel settings associated with the subscriber.
- `createdAt`: The timestamp indicating when the subscriber was created, in ISO 8601 format.
- `data`: Additional custom data for the subscriber
- `deleted`: Indicates whether the subscriber has been deleted.

### [Subscription](docs/api/subscription.html)

Results: OK.

SDK operations: `load`, `update`.

Key fields to recognise:

- `contextKeys`: Context keys that scope this subscription (for example, tenant:org-a, project:proj-123)
- `createdAt`: The creation date of the subscription
- `id`: The unique identifier of the subscription
- `identifier`: The identifier of the subscription
- `name`: The name of the subscription

### [Topic](docs/api/topic.html)

Results: OK; Created; Topic deleted successfully.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `data`: Additional custom data associated with the topic
- `key`: The unique key of the topic
- `name`: The name of the topic

### [TopicSubscriberDto](docs/api/topic_subscriber_dto.html)

SDK operations: `load`.

Key fields to recognise:

- `environmentId`: Unique identifier for the environment
- `externalSubscriberId`: External identifier for the subscriber
- `organizationId`: Unique identifier for the organization
- `subscriberId`: Unique identifier for the subscriber
- `topicId`: Unique identifier for the topic

### [TopicSubscriptionsResponseDto](docs/api/topic_subscriptions_response_dto.html)

Results: Subscriptions deleted successfully.

SDK operations: `remove`.

### [Translation](docs/api/translation.html)

Results: Translation created or updated successfully; Translation found; Translation deleted successfully; Translation group deleted successfully.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `content`: Translation content as JSON object
- `locale`: Locale code
- `resourceId`: Resource identifier
- `resourceType`: Resource type

### [TranslationGroupDto](docs/api/translation_group_dto.html)

Results: Translation group details.

SDK operations: `load`.

Key fields to recognise:

- `createdAt`: Creation timestamp
- `locales`: Array of available locales for this resource
- `outdatedLocales`: Locales that are outdated compared to the default locale (only present when there are outdated locales)
- `resourceId`: Resource identifier (slugified ID)
- `resourceName`: Resource name (for example, workflow name)

### [Trigger](docs/api/trigger.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `actor`: It is used to display the Avatar of the provided actor&#39;s subscriber id or actor object.
- `agentId`: Override the workflow-assigned agent for this trigger using the public agent identifier.
- `bridgeUrl`: Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application.
- `name`: The trigger identifier of the workflow you wish to send.
- `overrides`: This could be used to override provider specific configurations

### [TriggerEventResponseDto](docs/api/trigger_event_response_dto.html)

Results: OK; Broadcast request has been registered successfully; Created.

SDK operations: `create`.

Key fields to recognise:

- `acknowledged`: Indicates whether the trigger was acknowledged or not
- `activityFeedLink`: Link to the activity feed for this trigger event
- `actor`: It is used to display the Avatar of the provided actor&#39;s subscriber id or actor object.
- `agentId`: Override the workflow-assigned agent for this trigger using the public agent identifier.
- `error`: In case of an error, this field will contain the error message(s)

### [Unseen](docs/api/unseen.html)

Results: OK.

SDK operations: `load`.

### [Upload](docs/api/upload.html)

Results: Upload results.

SDK operations: `create`.

Key fields to recognise:

- `errors`: List of error messages for failed uploads
- `failedUploads`: Number of files that failed to upload
- `successfulUploads`: Number of files successfully uploaded
- `totalFiles`: Total number of files processed

### [WebhookResultDto](docs/api/webhook_result_dto.html)

Results: Successfully processed webhook events.

SDK operations: `create`.

### [Workflow](docs/api/workflow.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `active`: Whether the workflow is active
- `agent`: Optional agent assignment used to route this workflow through an agent&#39;s connected channels. Null when unassigned.
- `createdAt`: Creation timestamp
- `description`: Description of the workflow
- `id`: Database identifier of the workflow

### [WorkflowInfoDto](docs/api/workflow_info_dto.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `name`: The name of the workflow
- `workflowId`: The unique identifier of the workflow

### [WorkflowResponseDto](docs/api/workflow_response_dto.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `active`: Whether the workflow is active
- `agent`: Optional agent assignment used to route this workflow through an agent&#39;s connected channels. Null when unassigned.
- `createdAt`: Creation timestamp
- `description`: Description of the workflow
- `id`: Database identifier of the workflow

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ActivityNotificationResponseDto](docs/api/activity_notification_response_dto.html) | `list` | `GET /v1/notifications` | Required |
| [ActivityNotificationResponseDto](docs/api/activity_notification_response_dto.html) | `load` | `GET /v1/notifications/{notificationId}` | Required |
| [Agent](docs/api/agent.html) | `create` | `POST /v1/agents/{agentId}/reply` | Required |
| [Agent](docs/api/agent.html) | `create` | `POST /v1/agents` | Required |
| [Agent](docs/api/agent.html) | `load` | `GET /v1/agents/{identifier}` | Required |
| [Agent](docs/api/agent.html) | `remove` | `DELETE /v1/agents/{identifier}/integrations/{agentIntegrationId}` | Required |
| [Agent](docs/api/agent.html) | `remove` | `DELETE /v1/agents/{identifier}` | Required |
| [Agent](docs/api/agent.html) | `update` | `PATCH /v1/agents/{identifier}` | Required |
| [AgentIntegrationResponseDto](docs/api/agent_integration_response_dto.html) | `create` | `POST /v1/agents/{identifier}/integrations` | Required |
| [AgentIntegrationResponseDto](docs/api/agent_integration_response_dto.html) | `update` | `PATCH /v1/agents/{identifier}/integrations/{agentIntegrationId}` | Required |
| [AgentResponseDto](docs/api/agent_response_dto.html) | `update` | `PUT /v1/agents/{identifier}/bridge` | Required |
| [Bulk](docs/api/bulk.html) | `create` | `POST /v1/subscribers/bulk` | Required |
| [ChannelConnection](docs/api/channel_connection.html) | `create` | `POST /v1/channel-connections` | Required |
| [ChannelConnection](docs/api/channel_connection.html) | `load` | `GET /v1/channel-connections/{identifier}` | Required |
| [ChannelConnection](docs/api/channel_connection.html) | `remove` | `DELETE /v1/channel-connections/{identifier}` | Required |
| [ChannelConnection](docs/api/channel_connection.html) | `update` | `PATCH /v1/channel-connections/{identifier}` | Required |
| [ChannelEndpoint](docs/api/channel_endpoint.html) | `create` | `POST /v1/channel-endpoints` | Required |
| [ChannelEndpoint](docs/api/channel_endpoint.html) | `load` | `GET /v1/channel-endpoints/{identifier}` | Required |
| [ChannelEndpoint](docs/api/channel_endpoint.html) | `remove` | `DELETE /v1/channel-endpoints/{identifier}` | Required |
| [ChannelEndpoint](docs/api/channel_endpoint.html) | `update` | `PATCH /v1/channel-endpoints/{identifier}` | Required |
| [Configure](docs/api/configure.html) | `create` | `POST /v1/integrations/{integrationIdentifier}/webhook/configure` | Required |
| [Context](docs/api/context.html) | `create` | `POST /v2/contexts` | Required |
| [Context](docs/api/context.html) | `load` | `GET /v2/contexts/{type}/{id}` | Required |
| [Context](docs/api/context.html) | `remove` | `DELETE /v2/contexts/{type}/{id}` | Required |
| [Context](docs/api/context.html) | `update` | `PATCH /v2/contexts/{type}/{id}` | Required |
| [CreateSubscriptionsResponseDto](docs/api/create_subscriptions_response_dto.html) | `create` | `POST /v2/topics/{topicKey}/subscriptions` | Required |
| [Diff](docs/api/diff.html) | `create` | `POST /v2/environments/{targetEnvironmentId}/diff` | Required |
| [Domain](docs/api/domain.html) | `create` | `POST /v1/domains/{domain}/diagnose` | Required |
| [Domain](docs/api/domain.html) | `create` | `POST /v1/domains` | Required |
| [Domain](docs/api/domain.html) | `load` | `GET /v1/domains/{domain}` | Required |
| [Domain](docs/api/domain.html) | `remove` | `DELETE /v1/domains/{domain}/routes/{address}` | Required |
| [Domain](docs/api/domain.html) | `remove` | `DELETE /v1/domains/{domain}` | Required |
| [Domain](docs/api/domain.html) | `update` | `PATCH /v1/domains/{domain}` | Required |
| [DomainConnectApplyUrlResponseDto](docs/api/domain_connect_apply_url_response_dto.html) | `create` | `POST /v1/domains/{domain}/auto-configure/start` | Required |
| [DomainConnectStatusResponseDto](docs/api/domain_connect_status_response_dto.html) | `list` | `GET /v1/domains/{domain}/auto-configure` | Required |
| [DomainResponseDto](docs/api/domain_response_dto.html) | `create` | `POST /v1/domains/{domain}/verify` | Required |
| [DomainRouteResponseDto](docs/api/domain_route_response_dto.html) | `create` | `POST /v1/domains/{domain}/routes/{address}/test` | Required |
| [DomainRouteResponseDto](docs/api/domain_route_response_dto.html) | `create` | `POST /v1/domains/{domain}/routes` | Required |
| [DomainRouteResponseDto](docs/api/domain_route_response_dto.html) | `load` | `GET /v1/domains/{domain}/routes/{address}` | Required |
| [DomainRouteResponseDto](docs/api/domain_route_response_dto.html) | `update` | `PATCH /v1/domains/{domain}/routes/{address}` | Required |
| [Environment](docs/api/environment.html) | `create` | `POST /v1/environments` | Required |
| [Environment](docs/api/environment.html) | `list` | `GET /v1/environments` | Required |
| [Environment](docs/api/environment.html) | `remove` | `DELETE /v1/environments/{environmentId}` | Required |
| [Environment](docs/api/environment.html) | `update` | `PUT /v1/environments/{environmentId}` | Required |
| [EnvironmentTagsDto](docs/api/environment_tags_dto.html) | `list` | `GET /v2/environments/{environmentId}/tags` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `create` | `POST /v1/environment-variables` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `list` | `GET /v1/environment-variables` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `load` | `GET /v1/environment-variables/{variableKey}` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `remove` | `DELETE /v1/environment-variables/{variableKey}` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `update` | `PATCH /v1/environment-variables/{variableKey}` | Required |
| [EnvironmentVariableWorkflowInfoDto](docs/api/environment_variable_workflow_info_dto.html) | `list` | `GET /v1/environment-variables/{variableKey}/usage` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /v1/events/trigger/{transactionId}` | Required |
| [GenerateChatOAuthUrlResponseDto](docs/api/generate_chat_o_auth_url_response_dto.html) | `create` | `POST /v1/integrations/channel-connections/oauth` | Required |
| [GenerateChatOAuthUrlResponseDto](docs/api/generate_chat_o_auth_url_response_dto.html) | `create` | `POST /v1/integrations/channel-endpoints/oauth` | Required |
| [GenerateChatOAuthUrlResponseDto](docs/api/generate_chat_o_auth_url_response_dto.html) | `create` | `POST /v1/integrations/chat/oauth` | Required |
| [GeneratePreviewResponseDto](docs/api/generate_preview_response_dto.html) | `create` | `POST /v2/workflows/{workflowId}/step/{stepId}/preview` | Required |
| [ImportMasterJsonResponseDto](docs/api/import_master_json_response_dto.html) | `create` | `POST /v2/translations/master-json` | Required |
| [ImportMasterJsonResponseDto](docs/api/import_master_json_response_dto.html) | `create` | `POST /v2/translations/master-json/upload` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/archive` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/read` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unread` | Required |
| [InboxNotificationDto](docs/api/inbox_notification_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze` | Required |
| [Integration](docs/api/integration.html) | `create` | `POST /v1/integrations/{integrationId}/auto-configure` | Required |
| [Integration](docs/api/integration.html) | `create` | `POST /v1/integrations/{integrationIdentifier}/mobile-link` | Required |
| [Integration](docs/api/integration.html) | `create` | `POST /v1/integrations` | Required |
| [Integration](docs/api/integration.html) | `list` | `GET /v1/integrations` | Required |
| [Integration](docs/api/integration.html) | `remove` | `DELETE /v1/integrations/{integrationId}` | Required |
| [Integration](docs/api/integration.html) | `update` | `PUT /v1/integrations/{integrationId}` | Required |
| [IntegrationResponseDto](docs/api/integration_response_dto.html) | `create` | `POST /v1/integrations/{integrationId}/set-primary` | Required |
| [IntegrationResponseDto](docs/api/integration_response_dto.html) | `list` | `GET /v1/integrations/active` | Required |
| [Layout](docs/api/layout.html) | `create` | `POST /v2/layouts/{layoutId}/preview` | Required |
| [Layout](docs/api/layout.html) | `create` | `POST /v2/layouts` | Required |
| [Layout](docs/api/layout.html) | `list` | `GET /v2/layouts` | Required |
| [Layout](docs/api/layout.html) | `load` | `GET /v2/layouts/{layoutId}` | Required |
| [Layout](docs/api/layout.html) | `remove` | `DELETE /v2/layouts/{layoutId}` | Required |
| [Layout](docs/api/layout.html) | `update` | `PUT /v2/layouts/{layoutId}` | Required |
| [LayoutResponseDto](docs/api/layout_response_dto.html) | `create` | `POST /v2/layouts/{layoutId}/duplicate` | Required |
| [Link](docs/api/link.html) | `create` | `POST /v1/integrations/channel-endpoints/link` | Required |
| [ListAgentIntegrationsResponseDto](docs/api/list_agent_integrations_response_dto.html) | `list` | `GET /v1/agents/{identifier}/integrations` | Required |
| [ListAgentsResponseDto](docs/api/list_agents_response_dto.html) | `list` | `GET /v1/agents` | Required |
| [ListChannelConnectionsResponseDto](docs/api/list_channel_connections_response_dto.html) | `list` | `GET /v1/channel-connections` | Required |
| [ListChannelEndpointsResponseDto](docs/api/list_channel_endpoints_response_dto.html) | `list` | `GET /v1/channel-endpoints` | Required |
| [ListContextsResponseDto](docs/api/list_contexts_response_dto.html) | `list` | `GET /v2/contexts` | Required |
| [ListDomainRoutesResponseDto](docs/api/list_domain_routes_response_dto.html) | `list` | `GET /v1/domains/{domain}/routes` | Required |
| [ListDomainsResponseDto](docs/api/list_domains_response_dto.html) | `list` | `GET /v1/domains` | Required |
| [ListSubscribersResponseDto](docs/api/list_subscribers_response_dto.html) | `list` | `GET /v2/subscribers` | Required |
| [ListTopicSubscriptionsResponseDto](docs/api/list_topic_subscriptions_response_dto.html) | `list` | `GET /v2/subscribers/{subscriberId}/subscriptions` | Required |
| [ListTopicSubscriptionsResponseDto](docs/api/list_topic_subscriptions_response_dto.html) | `list` | `GET /v2/topics/{topicKey}/subscriptions` | Required |
| [ListTopicsResponseDto](docs/api/list_topics_response_dto.html) | `list` | `GET /v2/topics` | Required |
| [MasterJson](docs/api/master_json.html) | `load` | `GET /v2/translations/master-json` | Required |
| [Message](docs/api/message.html) | `list` | `GET /v1/messages` | Required |
| [Message](docs/api/message.html) | `remove` | `DELETE /v1/messages/transaction/{transactionId}` | Required |
| [Message](docs/api/message.html) | `remove` | `DELETE /v1/messages/{messageId}` | Required |
| [MessageResponseDto](docs/api/message_response_dto.html) | `create` | `POST /v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}` | Required |
| [MessageResponseDto](docs/api/message_response_dto.html) | `create` | `POST /v1/subscribers/{subscriberId}/messages/mark-as` | Required |
| [NotificationFeedItemDto](docs/api/notification_feed_item_dto.html) | `list` | `GET /v1/subscribers/{subscriberId}/notifications/feed` | Required |
| [PreferencesResponseDto](docs/api/preferences_response_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/preferences/bulk` | Required |
| [Publish](docs/api/publish.html) | `create` | `POST /v2/environments/{targetEnvironmentId}/publish` | Required |
| [RemoveSubscriberResponseDto](docs/api/remove_subscriber_response_dto.html) | `remove` | `DELETE /v2/subscribers/{subscriberId}` | Required |
| [Step](docs/api/step.html) | `load` | `GET /v2/workflows/{workflowId}/steps/{stepId}` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v1/subscribers/{subscriberId}/messages/mark-all` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers/{subscriberId}/notifications/archive` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers/{subscriberId}/notifications/delete` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers/{subscriberId}/notifications/read` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers/{subscriberId}/notifications/read-archive` | Required |
| [Subscriber](docs/api/subscriber.html) | `create` | `POST /v2/subscribers/{subscriberId}/notifications/seen` | Required |
| [Subscriber](docs/api/subscriber.html) | `load` | `GET /v2/subscribers/{subscriberId}` | Required |
| [Subscriber](docs/api/subscriber.html) | `remove` | `DELETE /v2/subscribers/{subscriberId}/notifications/{notificationId}` | Required |
| [Subscriber](docs/api/subscriber.html) | `remove` | `DELETE /v1/subscribers/{subscriberId}/credentials/{providerId}` | Required |
| [Subscriber](docs/api/subscriber.html) | `update` | `PATCH /v2/subscribers/{subscriberId}` | Required |
| [SubscriberNotificationsCountResponseDto](docs/api/subscriber_notifications_count_response_dto.html) | `list` | `GET /v2/subscribers/{subscriberId}/notifications/count` | Required |
| [SubscriberNotificationsResponseDto](docs/api/subscriber_notifications_response_dto.html) | `list` | `GET /v2/subscribers/{subscriberId}/notifications` | Required |
| [SubscriberPreferencesDto](docs/api/subscriber_preferences_dto.html) | `list` | `GET /v2/subscribers/{subscriberId}/preferences` | Required |
| [SubscriberPreferencesDto](docs/api/subscriber_preferences_dto.html) | `update` | `PATCH /v2/subscribers/{subscriberId}/preferences` | Required |
| [SubscriberResponseDto](docs/api/subscriber_response_dto.html) | `update` | `PATCH /v1/subscribers/{subscriberId}/credentials` | Required |
| [SubscriberResponseDto](docs/api/subscriber_response_dto.html) | `update` | `PUT /v1/subscribers/{subscriberId}/credentials` | Required |
| [SubscriberResponseDto](docs/api/subscriber_response_dto.html) | `update` | `PATCH /v1/subscribers/{subscriberId}/online-status` | Required |
| [Subscription](docs/api/subscription.html) | `load` | `GET /v2/topics/{topicKey}/subscriptions/{identifier}` | Required |
| [Subscription](docs/api/subscription.html) | `update` | `PATCH /v2/topics/{topicKey}/subscriptions/{identifier}` | Required |
| [Topic](docs/api/topic.html) | `create` | `POST /v2/topics` | Required |
| [Topic](docs/api/topic.html) | `load` | `GET /v2/topics/{topicKey}` | Required |
| [Topic](docs/api/topic.html) | `remove` | `DELETE /v2/topics/{topicKey}` | Required |
| [Topic](docs/api/topic.html) | `update` | `PATCH /v2/topics/{topicKey}` | Required |
| [TopicSubscriberDto](docs/api/topic_subscriber_dto.html) | `load` | `GET /v1/topics/{topicKey}/subscribers/{externalSubscriberId}` | Required |
| [TopicSubscriptionsResponseDto](docs/api/topic_subscriptions_response_dto.html) | `remove` | `DELETE /v2/topics/{topicKey}/subscriptions` | Required |
| [Translation](docs/api/translation.html) | `create` | `POST /v2/translations` | Required |
| [Translation](docs/api/translation.html) | `load` | `GET /v2/translations/{resourceType}/{resourceId}/{locale}` | Required |
| [Translation](docs/api/translation.html) | `remove` | `DELETE /v2/translations/{resourceType}/{resourceId}/{locale}` | Required |
| [Translation](docs/api/translation.html) | `remove` | `DELETE /v2/translations/{resourceType}/{resourceId}` | Required |
| [TranslationGroupDto](docs/api/translation_group_dto.html) | `load` | `GET /v2/translations/group/{resourceType}/{resourceId}` | Required |
| [Trigger](docs/api/trigger.html) | `create` | `POST /v1/events/trigger` | Required |
| [TriggerEventResponseDto](docs/api/trigger_event_response_dto.html) | `create` | `POST /v1/events/trigger/broadcast` | Required |
| [TriggerEventResponseDto](docs/api/trigger_event_response_dto.html) | `create` | `POST /v1/events/trigger/bulk` | Required |
| [Unseen](docs/api/unseen.html) | `load` | `GET /v1/subscribers/{subscriberId}/notifications/unseen` | Required |
| [Upload](docs/api/upload.html) | `create` | `POST /v2/translations/upload` | Required |
| [WebhookResultDto](docs/api/webhook_result_dto.html) | `create` | `POST /v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /v2/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /v2/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /v2/workflows/{workflowId}` | Required |
| [Workflow](docs/api/workflow.html) | `patch` | `PATCH /v2/workflows/{workflowId}` | Required |
| [Workflow](docs/api/workflow.html) | `remove` | `DELETE /v2/workflows/{workflowId}` | Required |
| [Workflow](docs/api/workflow.html) | `update` | `PUT /v2/workflows/{workflowId}` | Required |
| [WorkflowInfoDto](docs/api/workflow_info_dto.html) | `list` | `GET /v2/layouts/{layoutId}/usage` | Required |
| [WorkflowResponseDto](docs/api/workflow_response_dto.html) | `update` | `PUT /v2/workflows/{workflowId}/sync` | Required |

## Connect to the API

- API server: `https://api.novu.co`
- API server: `https://eu.api.novu.co`

The default credential is sent in the `Authorization` header with the `ApiKey` prefix.

API key authentication. Allowed headers-- &quot;Authorization: ApiKey &lt;novu_secret_key&gt;&quot;.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `novu_list`: List records for an entity. Supported entities: `activity_notification_response_dto`, `domain_connect_status_response_dto`, `environment`, `environment_tags_dto`, `environment_variable`, `environment_variable_workflow_info_dto`, `integration`, `integration_response_dto`, `layout`, `list_agent_integrations_response_dto`, `list_agents_response_dto`, `list_channel_connections_response_dto`, `list_channel_endpoints_response_dto`, `list_contexts_response_dto`, `list_domain_routes_response_dto`, `list_domains_response_dto`, `list_subscribers_response_dto`, `list_topic_subscriptions_response_dto`, `list_topics_response_dto`, `message`, `notification_feed_item_dto`, `subscriber_notifications_count_response_dto`, `subscriber_notifications_response_dto`, `subscriber_preferences_dto`, `workflow`, `workflow_info_dto`.
- `novu_load`: Load one record for an entity. Supported entities: `activity_notification_response_dto`, `agent`, `channel_connection`, `channel_endpoint`, `context`, `domain`, `domain_route_response_dto`, `environment_variable`, `layout`, `master_json`, `step`, `subscriber`, `subscription`, `topic`, `topic_subscriber_dto`, `translation`, `translation_group_dto`, `unseen`, `workflow`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

