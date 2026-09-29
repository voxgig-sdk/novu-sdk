-- Typed models for the Novu SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ActivityNotificationResponseDto
---@field channels? table
---@field contextKeys? table
---@field controls? table
---@field createdAt? string
---@field critical? boolean
---@field digestedNotificationId? string
---@field environmentId string
---@field id? string
---@field jobs? table
---@field organizationId string
---@field payload? table
---@field severity? string
---@field subscriber? any
---@field subscriberId string
---@field tags? table
---@field template? any
---@field templateId? string
---@field to? table
---@field topics? table
---@field transactionId string
---@field updatedAt? string

---@class ActivityNotificationResponseDtoLoadMatch
---@field notification_id string

---@class ActivityNotificationResponseDtoListMatch
---@field after? string
---@field before? string
---@field channel? table
---@field context_key? table
---@field email? table
---@field limit? number
---@field page? number
---@field search? string
---@field severity? table
---@field subscriber_id? table
---@field subscription_id? string
---@field template? table
---@field topic_key? string
---@field transaction_id? string

---@class Agent
---@field active boolean
---@field behavior table
---@field bridgeUrl? string
---@field createdAt string
---@field createdBy? string
---@field description? string
---@field devBridgeActive? boolean
---@field devBridgeUrl? string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field identifier string
---@field integrations? table
---@field managedRuntime? any
---@field name string
---@field organizationId string
---@field runtime? string
---@field updatedAt string
---@field visibility? string

---@class AgentLoadMatch
---@field id string

---@class AgentListMatch
---@field after? string
---@field before? string
---@field identifier? string
---@field include_cursor? boolean
---@field limit? number
---@field order_by? string
---@field order_direction? string

---@class AgentCreateData
---@field active boolean
---@field behavior table
---@field bridgeUrl? string
---@field createdAt string
---@field createdBy? string
---@field description? string
---@field devBridgeActive? boolean
---@field devBridgeUrl? string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field identifier string
---@field integrations? table
---@field managedRuntime? any
---@field name string
---@field organizationId string
---@field runtime? string
---@field updatedAt string
---@field visibility? string

---@class AgentUpdateData
---@field id string
---@field active? boolean
---@field behavior? table
---@field bridgeUrl? string
---@field createdAt? string
---@field createdBy? string
---@field description? string
---@field devBridgeActive? boolean
---@field devBridgeUrl? string
---@field environmentId? string
---@field exceedsPlanLimit? boolean
---@field identifier? string
---@field integrations? table
---@field managedRuntime? any
---@field name? string
---@field organizationId? string
---@field runtime? string
---@field updatedAt? string
---@field visibility? string

---@class AgentRemoveMatch
---@field id string
---@field delete_from_provider string

---@class AgentIntegrationResponseDto
---@field agentId string
---@field connectedAt? table
---@field createdAt string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field integration table
---@field integrationIdentifier? string
---@field organizationId string
---@field providerId? string
---@field updatedAt string

---@class AgentIntegrationResponseDtoCreateData
---@field identifier string
---@field agentId string
---@field connectedAt? table
---@field createdAt string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field integration table
---@field integrationIdentifier? string
---@field organizationId string
---@field providerId? string
---@field updatedAt string

---@class AgentIntegrationResponseDtoUpdateData
---@field agent_id string
---@field agent_integration_id string
---@field agentId? string
---@field connectedAt? table
---@field createdAt? string
---@field environmentId? string
---@field exceedsPlanLimit? boolean
---@field id? string
---@field integration? table
---@field integrationIdentifier? string
---@field organizationId? string
---@field providerId? string
---@field updatedAt? string

---@class AgentResponseDto
---@field active boolean
---@field behavior table
---@field bridgeUrl? string
---@field createdAt string
---@field createdBy? string
---@field description? string
---@field devBridgeActive? boolean
---@field devBridgeUrl? string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field identifier string
---@field integrations? table
---@field managedRuntime? any
---@field name string
---@field organizationId string
---@field runtime? string
---@field updatedAt string
---@field visibility? string

---@class AgentResponseDtoUpdateData
---@field identifier string
---@field active? boolean
---@field behavior? table
---@field bridgeUrl? string
---@field createdAt? string
---@field createdBy? string
---@field description? string
---@field devBridgeActive? boolean
---@field devBridgeUrl? string
---@field environmentId? string
---@field exceedsPlanLimit? boolean
---@field id? string
---@field integrations? table
---@field managedRuntime? any
---@field name? string
---@field organizationId? string
---@field runtime? string
---@field updatedAt? string
---@field visibility? string

---@class Bulk
---@field subscribers table

---@class BulkCreateData
---@field subscribers table

---@class ChannelConnection
---@field auth table
---@field channel string
---@field connectionMode? string
---@field context? table
---@field contextKeys table
---@field createdAt string
---@field id? string
---@field identifier string
---@field integrationIdentifier string
---@field providerId string
---@field subscriberId string
---@field updatedAt string
---@field workspace table

---@class ChannelConnectionLoadMatch
---@field id string

---@class ChannelConnectionListMatch
---@field after? string
---@field before? string
---@field channel? string
---@field connection_mode? string
---@field context_key? table
---@field include_cursor? boolean
---@field integration_identifier? string
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field provider_id? string
---@field subscriber_id? string

---@class ChannelConnectionCreateData
---@field auth table
---@field channel string
---@field connectionMode? string
---@field context? table
---@field contextKeys table
---@field createdAt string
---@field id? string
---@field identifier string
---@field integrationIdentifier string
---@field providerId string
---@field subscriberId string
---@field updatedAt string
---@field workspace table

---@class ChannelConnectionUpdateData
---@field id string
---@field auth? table
---@field channel? string
---@field connectionMode? string
---@field context? table
---@field contextKeys? table
---@field createdAt? string
---@field identifier? string
---@field integrationIdentifier? string
---@field providerId? string
---@field subscriberId? string
---@field updatedAt? string
---@field workspace? table

---@class ChannelConnectionRemoveMatch
---@field id string

---@class ChannelEndpoint
---@field channel string
---@field connectionIdentifier string
---@field contextKeys table
---@field createdAt string
---@field endpoint any
---@field id? string
---@field identifier string
---@field integrationIdentifier string
---@field providerId string
---@field subscriberId string
---@field type string
---@field updatedAt string

---@class ChannelEndpointLoadMatch
---@field id string

---@class ChannelEndpointListMatch
---@field after? string
---@field before? string
---@field channel? string
---@field connection_identifier? string
---@field context_key? table
---@field include_cursor? boolean
---@field integration_identifier? string
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field provider_id? string
---@field subscriber_id? string

---@class ChannelEndpointCreateData
---@field channel string
---@field connectionIdentifier string
---@field contextKeys table
---@field createdAt string
---@field endpoint any
---@field id? string
---@field identifier string
---@field integrationIdentifier string
---@field providerId string
---@field subscriberId string
---@field type string
---@field updatedAt string

---@class ChannelEndpointUpdateData
---@field id string
---@field channel? string
---@field connectionIdentifier? string
---@field contextKeys? table
---@field createdAt? string
---@field endpoint? any
---@field identifier? string
---@field integrationIdentifier? string
---@field providerId? string
---@field subscriberId? string
---@field type? string
---@field updatedAt? string

---@class ChannelEndpointRemoveMatch
---@field id string

---@class Configure
---@field botUsername string
---@field configuredAt string
---@field webhookUrl string

---@class ConfigureCreateData
---@field integration_id string
---@field botUsername string
---@field configuredAt string
---@field webhookUrl string

---@class Context
---@field bridgeUrl? string
---@field createdAt string
---@field data table
---@field id string
---@field type string
---@field updatedAt string

---@class ContextLoadMatch
---@field id string
---@field type string

---@class ContextListMatch
---@field after? string
---@field before? string
---@field id? string
---@field include_cursor? boolean
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field search? string

---@class ContextCreateData
---@field bridgeUrl? string
---@field createdAt string
---@field data table
---@field id string
---@field type string
---@field updatedAt string

---@class ContextUpdateData
---@field id string
---@field type string
---@field bridgeUrl? string
---@field createdAt? string
---@field data? table
---@field updatedAt? string

---@class ContextRemoveMatch
---@field id string
---@field type string

---@class CreateSubscriptionsResponseDto
---@field context? table
---@field name? string
---@field preferences? table
---@field subscriberIds? table
---@field subscriptions? table

---@class CreateSubscriptionsResponseDtoCreateData
---@field topic_key string
---@field context? table
---@field name? string
---@field preferences? table
---@field subscriberIds? table
---@field subscriptions? table

---@class Diff
---@field resources table
---@field sourceEnvironmentId string
---@field summary any
---@field targetEnvironmentId string

---@class DiffCreateData
---@field environment_id string
---@field resources table
---@field sourceEnvironmentId string
---@field summary any
---@field targetEnvironmentId string

---@class Domain
---@field createdAt string
---@field data? table
---@field dnsProvider? string
---@field environmentId string
---@field expectedDnsRecords? table
---@field id string
---@field mxRecordConfigured boolean
---@field name string
---@field organizationId string
---@field status string
---@field updatedAt string

---@class DomainLoadMatch
---@field id string

---@class DomainListMatch
---@field after? string
---@field before? string
---@field include_cursor? boolean
---@field limit? number
---@field name? string
---@field order_by? string
---@field order_direction? string

---@class DomainCreateData
---@field createdAt string
---@field data? table
---@field dnsProvider? string
---@field environmentId string
---@field expectedDnsRecords? table
---@field id string
---@field mxRecordConfigured boolean
---@field name string
---@field organizationId string
---@field status string
---@field updatedAt string

---@class DomainUpdateData
---@field id string
---@field createdAt? string
---@field data? table
---@field dnsProvider? string
---@field environmentId? string
---@field expectedDnsRecords? table
---@field mxRecordConfigured? boolean
---@field name? string
---@field organizationId? string
---@field status? string
---@field updatedAt? string

---@class DomainRemoveMatch
---@field address? string
---@field id string

---@class DomainConnectApplyUrlResponseDto
---@field redirectUri? string

---@class DomainConnectApplyUrlResponseDtoCreateData
---@field domain_id string
---@field redirectUri? string

---@class DomainConnectStatusResponseDto
---@field id? string

---@class DomainConnectStatusResponseDtoListMatch
---@field id string

---@class DomainResponseDto
---@field createdAt string
---@field data? table
---@field dnsProvider? string
---@field environmentId string
---@field expectedDnsRecords? table
---@field id string
---@field mxRecordConfigured boolean
---@field name string
---@field organizationId string
---@field status string
---@field updatedAt string

---@class DomainResponseDtoCreateData
---@field id string
---@field createdAt string
---@field data? table
---@field dnsProvider? string
---@field environmentId string
---@field expectedDnsRecords? table
---@field mxRecordConfigured boolean
---@field name string
---@field organizationId string
---@field status string
---@field updatedAt string

---@class DomainRouteResponseDto
---@field address string
---@field agentId? string
---@field createdAt string
---@field data? table
---@field domainId string
---@field environmentId string
---@field id string
---@field organizationId string
---@field type string
---@field updatedAt string

---@class DomainRouteResponseDtoLoadMatch
---@field address string
---@field domain_id string

---@class DomainRouteResponseDtoCreateData
---@field id string
---@field address string
---@field agentId? string
---@field createdAt string
---@field data? table
---@field domainId string
---@field environmentId string
---@field organizationId string
---@field type string
---@field updatedAt string

---@class DomainRouteResponseDtoUpdateData
---@field address string
---@field domain_id string
---@field agentId? string
---@field createdAt? string
---@field data? table
---@field domainId? string
---@field environmentId? string
---@field id? string
---@field organizationId? string
---@field type? string
---@field updatedAt? string

---@class Environment
---@field apiKeys? table
---@field bridge? table
---@field color string
---@field dns? table
---@field id string
---@field identifier string
---@field name string
---@field organizationId string
---@field parentId? string
---@field slug? string
---@field type? string

---@class EnvironmentListMatch
---@field apiKeys? table
---@field bridge? table
---@field color? string
---@field dns? table
---@field id? string
---@field identifier? string
---@field name? string
---@field organizationId? string
---@field parentId? string
---@field slug? string
---@field type? string

---@class EnvironmentCreateData
---@field apiKeys? table
---@field bridge? table
---@field color string
---@field dns? table
---@field id string
---@field identifier string
---@field name string
---@field organizationId string
---@field parentId? string
---@field slug? string
---@field type? string

---@class EnvironmentUpdateData
---@field id string
---@field apiKeys? table
---@field bridge? table
---@field color? string
---@field dns? table
---@field identifier? string
---@field name? string
---@field organizationId? string
---@field parentId? string
---@field slug? string
---@field type? string

---@class EnvironmentRemoveMatch
---@field id string

---@class EnvironmentTagsDto
---@field id? string

---@class EnvironmentTagsDtoListMatch
---@field id string

---@class EnvironmentVariable
---@field createdAt string
---@field id string
---@field isSecret boolean
---@field key string
---@field organizationId string
---@field type string
---@field updatedAt string
---@field values table

---@class EnvironmentVariableLoadMatch
---@field id string

---@class EnvironmentVariableListMatch
---@field search? string

---@class EnvironmentVariableCreateData
---@field createdAt string
---@field id string
---@field isSecret boolean
---@field key string
---@field organizationId string
---@field type string
---@field updatedAt string
---@field values table

---@class EnvironmentVariableUpdateData
---@field id string
---@field createdAt? string
---@field isSecret? boolean
---@field key? string
---@field organizationId? string
---@field type? string
---@field updatedAt? string
---@field values? table

---@class EnvironmentVariableRemoveMatch
---@field id string

---@class EnvironmentVariableWorkflowInfoDto
---@field name string
---@field workflowId string

---@class EnvironmentVariableWorkflowInfoDtoListMatch
---@field variable_key string

---@class Event
---@field actor? any
---@field agentId? string
---@field bridgeUrl? string
---@field context? table
---@field name string
---@field overrides? any
---@field payload? table
---@field tenant? any
---@field to any
---@field transactionId? string

---@class EventCreateData
---@field actor? any
---@field agentId? string
---@field bridgeUrl? string
---@field context? table
---@field name string
---@field overrides? any
---@field payload? table
---@field tenant? any
---@field to any
---@field transactionId? string

---@class EventRemoveMatch
---@field transaction_id string

---@class GenerateChatOAuthUrlResponseDto
---@field autoLinkUser? boolean
---@field connectionIdentifier? string
---@field connectionMode? string
---@field context? table
---@field contextHash? string
---@field integrationIdentifier string
---@field mode? string
---@field scope? table
---@field subscriberId? string
---@field userScope? table

---@class GenerateChatOAuthUrlResponseDtoCreateData
---@field autoLinkUser? boolean
---@field connectionIdentifier? string
---@field connectionMode? string
---@field context? table
---@field contextHash? string
---@field integrationIdentifier string
---@field mode? string
---@field scope? table
---@field subscriberId? string
---@field userScope? table

---@class GeneratePreviewResponseDto
---@field controlValues? table
---@field previewPayload? any

---@class GeneratePreviewResponseDtoCreateData
---@field step_id string
---@field workflow_id string
---@field controlValues? table
---@field previewPayload? any

---@class ImportMasterJsonResponseDto
---@field failed? table
---@field locale string
---@field masterJson table
---@field message string
---@field success boolean
---@field successful? table

---@class ImportMasterJsonResponseDtoCreateData
---@field failed? table
---@field locale string
---@field masterJson table
---@field message string
---@field success boolean
---@field successful? table

---@class InboxNotificationDto
---@field archivedAt? string
---@field avatar? string
---@field body string
---@field channelType string
---@field createdAt string
---@field data? table
---@field deliveredAt? table
---@field firstSeenAt? string
---@field id string
---@field isArchived boolean
---@field isRead boolean
---@field isSeen boolean
---@field isSnoozed boolean
---@field primaryAction? any
---@field readAt? string
---@field redirect? any
---@field secondaryAction? any
---@field severity string
---@field snoozeUntil string
---@field snoozedUntil? string
---@field subject? string
---@field tags? table
---@field to any
---@field transactionId string
---@field workflow? any

---@class InboxNotificationDtoUpdateData
---@field action_type? string
---@field notification_id string
---@field subscriber_id string
---@field context_key? table
---@field archivedAt? string
---@field avatar? string
---@field body? string
---@field channelType? string
---@field createdAt? string
---@field data? table
---@field deliveredAt? table
---@field firstSeenAt? string
---@field id? string
---@field isArchived? boolean
---@field isRead? boolean
---@field isSeen? boolean
---@field isSnoozed? boolean
---@field primaryAction? any
---@field readAt? string
---@field redirect? any
---@field secondaryAction? any
---@field severity? string
---@field snoozeUntil? string
---@field snoozedUntil? string
---@field subject? string
---@field tags? table
---@field to? any
---@field transactionId? string
---@field workflow? any

---@class Integration
---@field active? boolean
---@field channel? string
---@field check? boolean
---@field conditions? table
---@field configurations? table
---@field credentials? any
---@field deleted boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId? string
---@field id? string
---@field identifier? string
---@field kind? string
---@field name? string
---@field organizationId string
---@field primary boolean
---@field providerId? string
---@field rules? table

---@class IntegrationListMatch
---@field active? boolean
---@field channel? string
---@field check? boolean
---@field conditions? table
---@field configurations? table
---@field credentials? any
---@field deleted? boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId? string
---@field id? string
---@field identifier? string
---@field kind? string
---@field name? string
---@field organizationId? string
---@field primary? boolean
---@field providerId? string
---@field rules? table

---@class IntegrationCreateData
---@field active? boolean
---@field channel? string
---@field check? boolean
---@field conditions? table
---@field configurations? table
---@field credentials? any
---@field deleted boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId? string
---@field id? string
---@field identifier? string
---@field kind? string
---@field name? string
---@field organizationId string
---@field primary boolean
---@field providerId? string
---@field rules? table

---@class IntegrationUpdateData
---@field id string
---@field active? boolean
---@field channel? string
---@field check? boolean
---@field conditions? table
---@field configurations? table
---@field credentials? any
---@field deleted? boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId? string
---@field identifier? string
---@field kind? string
---@field name? string
---@field organizationId? string
---@field primary? boolean
---@field providerId? string
---@field rules? table

---@class IntegrationRemoveMatch
---@field id string

---@class IntegrationResponseDto
---@field active boolean
---@field channel? string
---@field conditions? table
---@field configurations? any
---@field credentials? any
---@field deleted boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId string
---@field id? string
---@field identifier string
---@field kind? string
---@field name string
---@field organizationId string
---@field primary boolean
---@field providerId string
---@field rules? table

---@class IntegrationResponseDtoListMatch
---@field active? boolean
---@field channel? string
---@field conditions? table
---@field configurations? any
---@field credentials? any
---@field deleted? boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId? string
---@field id? string
---@field identifier? string
---@field kind? string
---@field name? string
---@field organizationId? string
---@field primary? boolean
---@field providerId? string
---@field rules? table

---@class IntegrationResponseDtoCreateData
---@field id string
---@field active boolean
---@field channel? string
---@field conditions? table
---@field configurations? any
---@field credentials? any
---@field deleted boolean
---@field deletedAt? string
---@field deletedBy? string
---@field environmentId string
---@field identifier string
---@field kind? string
---@field name string
---@field organizationId string
---@field primary boolean
---@field providerId string
---@field rules? table

---@class Layout
---@field controlValues? any
---@field controls any
---@field createdAt string
---@field id string
---@field isDefault boolean
---@field isTranslationEnabled boolean
---@field layoutId string
---@field name string
---@field origin string
---@field slug string
---@field source? string
---@field type string
---@field updatedAt string
---@field updatedBy? any
---@field variables? table

---@class LayoutLoadMatch
---@field id string

---@class LayoutListMatch
---@field limit? number
---@field offset? number
---@field order_by? string
---@field order_direction? string
---@field query? string

---@class LayoutCreateData
---@field controlValues? any
---@field controls any
---@field createdAt string
---@field id string
---@field isDefault boolean
---@field isTranslationEnabled boolean
---@field layoutId string
---@field name string
---@field origin string
---@field slug string
---@field source? string
---@field type string
---@field updatedAt string
---@field updatedBy? any
---@field variables? table

---@class LayoutUpdateData
---@field id string
---@field controlValues? any
---@field controls? any
---@field createdAt? string
---@field isDefault? boolean
---@field isTranslationEnabled? boolean
---@field layoutId? string
---@field name? string
---@field origin? string
---@field slug? string
---@field source? string
---@field type? string
---@field updatedAt? string
---@field updatedBy? any
---@field variables? table

---@class LayoutRemoveMatch
---@field id string

---@class LayoutResponseDto
---@field id? string

---@class LayoutResponseDtoCreateData
---@field id string

---@class Link
---@field context? table
---@field contextHash? string
---@field integrationIdentifier string
---@field subscriberId string

---@class LinkCreateData
---@field context? table
---@field contextHash? string
---@field integrationIdentifier string
---@field subscriberId string

---@class ListAgentIntegrationsResponseDto
---@field agentId string
---@field connectedAt? table
---@field createdAt string
---@field environmentId string
---@field exceedsPlanLimit? boolean
---@field id string
---@field integration table
---@field organizationId string
---@field updatedAt string

---@class ListAgentIntegrationsResponseDtoListMatch
---@field identifier string
---@field after? string
---@field before? string
---@field include_cursor? boolean
---@field integration_identifier? string
---@field limit? number
---@field order_by? string
---@field order_direction? string

---@class ListDomainRoutesResponseDto
---@field address string
---@field agentId? string
---@field createdAt string
---@field data? table
---@field domainId string
---@field environmentId string
---@field id string
---@field organizationId string
---@field type string
---@field updatedAt string

---@class ListDomainRoutesResponseDtoListMatch
---@field domain_id string
---@field after? string
---@field agent_id? string
---@field before? string
---@field include_cursor? boolean
---@field limit? number
---@field order_by? string
---@field order_direction? string

---@class ListTopicSubscriptionsResponseDto
---@field contextKeys? table
---@field createdAt string
---@field id string
---@field identifier string
---@field preferences? table
---@field subscriber any
---@field topic any

---@class ListTopicSubscriptionsResponseDtoListMatch
---@field subscriber_id string
---@field after? string
---@field before? string
---@field context_key? table
---@field include_cursor? boolean
---@field key? string
---@field limit? number
---@field order_by? string
---@field order_direction? string

---@class MasterJson
---@field layouts table
---@field workflows table

---@class MasterJsonLoadMatch
---@field locale? string

---@class Message
---@field channel string
---@field content? any
---@field contextKeys? table
---@field createdAt string
---@field cta any
---@field deliveredAt? table
---@field deviceTokens? table
---@field directWebhookUrl? string
---@field email? string
---@field environmentId string
---@field errorId? string
---@field errorText? string
---@field feedId? string
---@field id? string
---@field lastReadDate? string
---@field lastSeenDate? string
---@field messageTemplateId? string
---@field notificationId string
---@field organizationId string
---@field overrides? table
---@field payload? table
---@field phone? string
---@field providerId? string
---@field read boolean
---@field seen boolean
---@field snoozedUntil? string
---@field status string
---@field subject? string
---@field subscriber? any
---@field subscriberId string
---@field template? any
---@field templateId? string
---@field templateIdentifier? string
---@field title? string
---@field transactionId string

---@class MessageListMatch
---@field channel? string
---@field context_key? table
---@field limit? number
---@field page? number
---@field subscriber_id? string
---@field transaction_id? table

---@class MessageRemoveMatch
---@field id string

---@class MessageResponseDto
---@field markAs string
---@field messageId any
---@field payload? table
---@field status string

---@class MessageResponseDtoCreateData
---@field message_id? string
---@field subscriber_id string
---@field type? any
---@field markAs string
---@field messageId any
---@field payload? table
---@field status string

---@class NotificationFeedItemDto
---@field actor? any
---@field archived boolean
---@field channel string
---@field content string
---@field createdAt? string
---@field cta any
---@field data? table
---@field deviceTokens? table
---@field environmentId string
---@field feedId? string
---@field id string
---@field jobId string
---@field messageTemplateId? string
---@field notificationId string
---@field organizationId string
---@field overrides? table
---@field payload? table
---@field providerId? string
---@field read boolean
---@field seen boolean
---@field status string
---@field subject? string
---@field subscriber? any
---@field subscriberId string
---@field tags? table
---@field templateId string
---@field templateIdentifier? string
---@field transactionId string
---@field updatedAt? string

---@class NotificationFeedItemDtoListMatch
---@field subscriber_id string
---@field limit? number
---@field page? number
---@field payload? string
---@field read? boolean
---@field seen? boolean

---@class PreferencesResponseDto
---@field context? table
---@field preferences table

---@class PreferencesResponseDtoUpdateData
---@field subscriber_id string
---@field context? table
---@field preferences? table

---@class Publish
---@field dryRun? boolean
---@field resources? table
---@field results table
---@field sourceEnvironmentId? string
---@field summary any

---@class PublishCreateData
---@field environment_id string
---@field dryRun? boolean
---@field resources? table
---@field results table
---@field sourceEnvironmentId? string
---@field summary any

---@class RemoveSubscriberResponseDto

---@class RemoveSubscriberResponseDtoRemoveMatch
---@field subscriber_id string

---@class Step
---@field controlValues? table
---@field controls any
---@field id string
---@field issues? any
---@field name string
---@field origin string
---@field providerOverrides? table
---@field slug string
---@field stepId string
---@field stepResolverHash? string
---@field type string
---@field variables table
---@field workflowDatabaseId string
---@field workflowId string

---@class StepLoadMatch
---@field id string
---@field workflow_id string

---@class Subscriber
---@field avatar? string
---@field channels? table
---@field createdAt string
---@field data? table
---@field deleted boolean
---@field email? string
---@field environmentId string
---@field firstName? string
---@field id? string
---@field isOnline? boolean
---@field lastName? string
---@field lastOnlineAt? string
---@field locale? string
---@field organizationId string
---@field phone? string
---@field subscriberId string
---@field timezone? string
---@field topics? table
---@field updatedAt string
---@field v? number

---@class SubscriberLoadMatch
---@field id string

---@class SubscriberListMatch
---@field after? string
---@field before? string
---@field email? string
---@field include_cursor? boolean
---@field limit? number
---@field name? string
---@field order_by? string
---@field order_direction? string
---@field phone? string
---@field subscriber_id? string

---@class SubscriberCreateData
---@field fail_if_exist? boolean
---@field avatar? string
---@field channels? table
---@field createdAt string
---@field data? table
---@field deleted boolean
---@field email? string
---@field environmentId string
---@field firstName? string
---@field id? string
---@field isOnline? boolean
---@field lastName? string
---@field lastOnlineAt? string
---@field locale? string
---@field organizationId string
---@field phone? string
---@field subscriberId string
---@field timezone? string
---@field topics? table
---@field updatedAt string
---@field v? number

---@class SubscriberUpdateData
---@field id string
---@field avatar? string
---@field channels? table
---@field createdAt? string
---@field data? table
---@field deleted? boolean
---@field email? string
---@field environmentId? string
---@field firstName? string
---@field isOnline? boolean
---@field lastName? string
---@field lastOnlineAt? string
---@field locale? string
---@field organizationId? string
---@field phone? string
---@field subscriberId? string
---@field timezone? string
---@field topics? table
---@field updatedAt? string
---@field v? number

---@class SubscriberRemoveMatch
---@field id string
---@field notification_id? string
---@field context_key? table
---@field provider_id? string

---@class SubscriberNotificationsCountResponseDto
---@field count number
---@field filter table

---@class SubscriberNotificationsCountResponseDtoListMatch
---@field subscriber_id string
---@field filter string

---@class SubscriberNotificationsResponseDto
---@field id? string

---@class SubscriberNotificationsResponseDtoListMatch
---@field id string
---@field after? string
---@field archived? boolean
---@field context_key? table
---@field created_gte? number
---@field created_lte? number
---@field data? string
---@field limit? number
---@field offset? number
---@field read? boolean
---@field seen? boolean
---@field severity? table
---@field snoozed? boolean

---@class SubscriberPreferencesDto
---@field id? string

---@class SubscriberPreferencesDtoListMatch
---@field id string
---@field context_key? table
---@field criticality? string

---@class SubscriberPreferencesDtoUpdateData
---@field id string

---@class SubscriberResponseDto
---@field avatar? string
---@field channels? table
---@field createdAt string
---@field data? table
---@field deleted boolean
---@field email? string
---@field environmentId string
---@field firstName? string
---@field id? string
---@field isOnline? boolean
---@field lastName? string
---@field lastOnlineAt? string
---@field locale? string
---@field organizationId string
---@field phone? string
---@field subscriberId string
---@field timezone? string
---@field topics? table
---@field updatedAt string
---@field v? number

---@class SubscriberResponseDtoUpdateData
---@field id string
---@field avatar? string
---@field channels? table
---@field createdAt? string
---@field data? table
---@field deleted? boolean
---@field email? string
---@field environmentId? string
---@field firstName? string
---@field isOnline? boolean
---@field lastName? string
---@field lastOnlineAt? string
---@field locale? string
---@field organizationId? string
---@field phone? string
---@field subscriberId? string
---@field timezone? string
---@field topics? table
---@field updatedAt? string
---@field v? number

---@class Subscription
---@field contextKeys? table
---@field createdAt string
---@field id string
---@field identifier? string
---@field name? string
---@field preferences? table
---@field subscriber any
---@field topic any
---@field updatedAt string

---@class SubscriptionLoadMatch
---@field id string
---@field topic_id string

---@class SubscriptionUpdateData
---@field id string
---@field topic_id string
---@field contextKeys? table
---@field createdAt? string
---@field identifier? string
---@field name? string
---@field preferences? table
---@field subscriber? any
---@field topic? any
---@field updatedAt? string

---@class Topic
---@field createdAt? string
---@field data? table
---@field id string
---@field key string
---@field name? string
---@field updatedAt? string

---@class TopicLoadMatch
---@field id string

---@class TopicListMatch
---@field after? string
---@field before? string
---@field include_cursor? boolean
---@field key? string
---@field limit? number
---@field name? string
---@field order_by? string
---@field order_direction? string

---@class TopicCreateData
---@field fail_if_exist? boolean
---@field createdAt? string
---@field data? table
---@field id string
---@field key string
---@field name? string
---@field updatedAt? string

---@class TopicUpdateData
---@field id string
---@field createdAt? string
---@field data? table
---@field key? string
---@field name? string
---@field updatedAt? string

---@class TopicRemoveMatch
---@field id string

---@class TopicSubscriberDto
---@field environmentId string
---@field externalSubscriberId string
---@field organizationId string
---@field subscriberId string
---@field topicId string
---@field topicKey string

---@class TopicSubscriberDtoLoadMatch
---@field external_subscriber_id string
---@field topic_id string

---@class TopicSubscriptionsResponseDto

---@class TopicSubscriptionsResponseDtoRemoveMatch
---@field topic_key string

---@class Translation
---@field content table
---@field createdAt string
---@field id? string
---@field locale string
---@field resourceId string
---@field resourceType string
---@field updatedAt string

---@class TranslationLoadMatch
---@field locale string
---@field resource_id string
---@field resource_type string

---@class TranslationCreateData
---@field content table
---@field createdAt string
---@field id? string
---@field locale string
---@field resourceId string
---@field resourceType string
---@field updatedAt string

---@class TranslationRemoveMatch
---@field locale? string
---@field resource_id string
---@field resource_type string

---@class TranslationGroupDto
---@field createdAt string
---@field id? string
---@field locales table
---@field outdatedLocales? table
---@field resourceId string
---@field resourceName string
---@field resourceType string
---@field updatedAt string

---@class TranslationGroupDtoLoadMatch
---@field resource_id string
---@field resource_type string

---@class TriggerEventResponseDto
---@field acknowledged boolean
---@field activityFeedLink? string
---@field actor? any
---@field agentId? string
---@field context? table
---@field error? table
---@field events table
---@field jobData? table
---@field name string
---@field overrides? any
---@field payload table
---@field status string
---@field tenant? any
---@field transactionId? string

---@class TriggerEventResponseDtoCreateData
---@field acknowledged boolean
---@field activityFeedLink? string
---@field actor? any
---@field agentId? string
---@field context? table
---@field error? table
---@field events table
---@field jobData? table
---@field name string
---@field overrides? any
---@field payload table
---@field status string
---@field tenant? any
---@field transactionId? string

---@class Unseen
---@field count number

---@class UnseenLoadMatch
---@field subscriber_id string
---@field limit? number
---@field seen? boolean

---@class Upload
---@field errors table
---@field failedUploads number
---@field successfulUploads number
---@field totalFiles number

---@class UploadCreateData
---@field errors table
---@field failedUploads number
---@field successfulUploads number
---@field totalFiles number

---@class WebhookResultDto

---@class WebhookResultDtoCreateData
---@field environment_id string
---@field integration_id string

---@class Workflow
---@field active? boolean
---@field agent? any
---@field createdAt string
---@field description? string
---@field id string
---@field isTranslationEnabled? boolean
---@field issues? table
---@field lastPublishedAt? string
---@field lastPublishedBy? any
---@field lastTriggeredAt? string
---@field name string
---@field origin string
---@field payloadExample? table
---@field payloadSchema? table
---@field preferences any
---@field severity string
---@field slug string
---@field source? string
---@field status string
---@field stepTypeOverviews table
---@field steps table
---@field tags? table
---@field updatedAt string
---@field updatedBy? any
---@field validatePayload? boolean
---@field workflowId string

---@class WorkflowLoadMatch
---@field id string
---@field environment_id? string

---@class WorkflowListMatch
---@field limit? number
---@field offset? number
---@field order_by? string
---@field order_direction? string
---@field query? string
---@field status? table
---@field tag? table

---@class WorkflowCreateData
---@field active? boolean
---@field agent? any
---@field createdAt string
---@field description? string
---@field id string
---@field isTranslationEnabled? boolean
---@field issues? table
---@field lastPublishedAt? string
---@field lastPublishedBy? any
---@field lastTriggeredAt? string
---@field name string
---@field origin string
---@field payloadExample? table
---@field payloadSchema? table
---@field preferences any
---@field severity string
---@field slug string
---@field source? string
---@field status string
---@field stepTypeOverviews table
---@field steps table
---@field tags? table
---@field updatedAt string
---@field updatedBy? any
---@field validatePayload? boolean
---@field workflowId string

---@class WorkflowUpdateData
---@field id string
---@field active? boolean
---@field agent? any
---@field createdAt? string
---@field description? string
---@field isTranslationEnabled? boolean
---@field issues? table
---@field lastPublishedAt? string
---@field lastPublishedBy? any
---@field lastTriggeredAt? string
---@field name? string
---@field origin? string
---@field payloadExample? table
---@field payloadSchema? table
---@field preferences? any
---@field severity? string
---@field slug? string
---@field source? string
---@field status? string
---@field stepTypeOverviews? table
---@field steps? table
---@field tags? table
---@field updatedAt? string
---@field updatedBy? any
---@field validatePayload? boolean
---@field workflowId? string

---@class WorkflowRemoveMatch
---@field id string

---@class WorkflowInfoDto
---@field name string
---@field workflowId string

---@class WorkflowInfoDtoListMatch
---@field layout_id string

---@class WorkflowResponseDto
---@field active? boolean
---@field agent? any
---@field createdAt string
---@field description? string
---@field id string
---@field isTranslationEnabled? boolean
---@field issues? table
---@field lastPublishedAt? string
---@field lastPublishedBy? any
---@field lastTriggeredAt? string
---@field name string
---@field origin string
---@field payloadExample? table
---@field payloadSchema? table
---@field preferences any
---@field severity string
---@field slug string
---@field status string
---@field steps table
---@field tags? table
---@field updatedAt string
---@field updatedBy? any
---@field validatePayload? boolean
---@field workflowId string

---@class WorkflowResponseDtoUpdateData
---@field id string
---@field active? boolean
---@field agent? any
---@field createdAt? string
---@field description? string
---@field isTranslationEnabled? boolean
---@field issues? table
---@field lastPublishedAt? string
---@field lastPublishedBy? any
---@field lastTriggeredAt? string
---@field name? string
---@field origin? string
---@field payloadExample? table
---@field payloadSchema? table
---@field preferences? any
---@field severity? string
---@field slug? string
---@field status? string
---@field steps? table
---@field tags? table
---@field updatedAt? string
---@field updatedBy? any
---@field validatePayload? boolean
---@field workflowId? string

local M = {}

return M
