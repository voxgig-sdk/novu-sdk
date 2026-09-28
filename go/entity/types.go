// Typed models for the Novu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/novu-sdk/go/core"
)

// ActivityNotificationResponseDto is the typed data model for the activity_notification_response_dto entity.
type ActivityNotificationResponseDto struct {
}

// ActivityNotificationResponseDtoLoadMatch is the typed request payload for ActivityNotificationResponseDto.LoadTyped.
type ActivityNotificationResponseDtoLoadMatch struct {
	NotificationId string `json:"notification_id"`
}

// ActivityNotificationResponseDtoListMatch is the typed request payload for ActivityNotificationResponseDto.ListTyped.
type ActivityNotificationResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Channel *[]any `json:"channel,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	Email *[]any `json:"email,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	Search *string `json:"search,omitempty"`
	Severity *[]any `json:"severity,omitempty"`
	SubscriberId *[]any `json:"subscriber_id,omitempty"`
	SubscriptionId *string `json:"subscription_id,omitempty"`
	Template *[]any `json:"template,omitempty"`
	TopicKey *string `json:"topic_key,omitempty"`
	TransactionId *string `json:"transaction_id,omitempty"`
}

// Agent is the typed data model for the agent entity.
type Agent struct {
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
}

// AgentCreateData is the typed request payload for Agent.CreateTyped.
type AgentCreateData struct {
	Active bool `json:"active"`
	Behavior map[string]any `json:"behavior"`
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	CreatedAt string `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	DevBridgeActive *bool `json:"devBridgeActive,omitempty"`
	DevBridgeUrl *string `json:"devBridgeUrl,omitempty"`
	EnvironmentId string `json:"environmentId"`
	ExceedsPlanLimit *bool `json:"exceedsPlanLimit,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	Integrations *[]any `json:"integrations,omitempty"`
	ManagedRuntime *any `json:"managedRuntime,omitempty"`
	Name string `json:"name"`
	OrganizationId string `json:"organizationId"`
	Runtime *string `json:"runtime,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Visibility *string `json:"visibility,omitempty"`
}

// AgentUpdateData is the typed request payload for Agent.UpdateTyped.
type AgentUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	Behavior *map[string]any `json:"behavior,omitempty"`
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	DevBridgeActive *bool `json:"devBridgeActive,omitempty"`
	DevBridgeUrl *string `json:"devBridgeUrl,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	ExceedsPlanLimit *bool `json:"exceedsPlanLimit,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	ManagedRuntime *any `json:"managedRuntime,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Runtime *string `json:"runtime,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// AgentRemoveMatch is the typed request payload for Agent.RemoveTyped.
type AgentRemoveMatch struct {
	Id string `json:"id"`
	DeleteFromProvider string `json:"delete_from_provider"`
}

// AgentIntegrationResponseDto is the typed data model for the agent_integration_response_dto entity.
type AgentIntegrationResponseDto struct {
}

// AgentIntegrationResponseDtoCreateData is the typed request payload for AgentIntegrationResponseDto.CreateTyped.
type AgentIntegrationResponseDtoCreateData struct {
	Identifier string `json:"identifier"`
	AgentId string `json:"agentId"`
	ConnectedAt *map[string]any `json:"connectedAt,omitempty"`
	CreatedAt string `json:"createdAt"`
	EnvironmentId string `json:"environmentId"`
	ExceedsPlanLimit *bool `json:"exceedsPlanLimit,omitempty"`
	Id string `json:"id"`
	Integration map[string]any `json:"integration"`
	IntegrationIdentifier *string `json:"integrationIdentifier,omitempty"`
	OrganizationId string `json:"organizationId"`
	ProviderId *string `json:"providerId,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// AgentIntegrationResponseDtoUpdateData is the typed request payload for AgentIntegrationResponseDto.UpdateTyped.
type AgentIntegrationResponseDtoUpdateData struct {
	AgentId string `json:"agent_id"`
	AgentIntegrationId string `json:"agent_integration_id"`
	AgentId2 *string `json:"agentId,omitempty"`
	ConnectedAt *map[string]any `json:"connectedAt,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	ExceedsPlanLimit *bool `json:"exceedsPlanLimit,omitempty"`
	Id *string `json:"id,omitempty"`
	Integration *map[string]any `json:"integration,omitempty"`
	IntegrationIdentifier *string `json:"integrationIdentifier,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// AgentResponseDto is the typed data model for the agent_response_dto entity.
type AgentResponseDto struct {
}

// AgentResponseDtoUpdateData is the typed request payload for AgentResponseDto.UpdateTyped.
type AgentResponseDtoUpdateData struct {
	Identifier string `json:"identifier"`
	Active *bool `json:"active,omitempty"`
	Behavior *map[string]any `json:"behavior,omitempty"`
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	DevBridgeActive *bool `json:"devBridgeActive,omitempty"`
	DevBridgeUrl *string `json:"devBridgeUrl,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	ExceedsPlanLimit *bool `json:"exceedsPlanLimit,omitempty"`
	Id *string `json:"id,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	ManagedRuntime *any `json:"managedRuntime,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Runtime *string `json:"runtime,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// Bulk is the typed data model for the bulk entity.
type Bulk struct {
}

// BulkCreateData is the typed request payload for Bulk.CreateTyped.
type BulkCreateData struct {
	Subscribers []any `json:"subscribers"`
}

// ChannelConnection is the typed data model for the channel_connection entity.
type ChannelConnection struct {
}

// ChannelConnectionLoadMatch is the typed request payload for ChannelConnection.LoadTyped.
type ChannelConnectionLoadMatch struct {
	Id string `json:"id"`
}

// ChannelConnectionCreateData is the typed request payload for ChannelConnection.CreateTyped.
type ChannelConnectionCreateData struct {
	Auth map[string]any `json:"auth"`
	Channel string `json:"channel"`
	ConnectionMode *string `json:"connectionMode,omitempty"`
	Context *map[string]any `json:"context,omitempty"`
	ContextKeys []any `json:"contextKeys"`
	CreatedAt string `json:"createdAt"`
	Id *string `json:"id,omitempty"`
	Identifier string `json:"identifier"`
	IntegrationIdentifier string `json:"integrationIdentifier"`
	ProviderId string `json:"providerId"`
	SubscriberId string `json:"subscriberId"`
	UpdatedAt string `json:"updatedAt"`
	Workspace map[string]any `json:"workspace"`
}

// ChannelConnectionUpdateData is the typed request payload for ChannelConnection.UpdateTyped.
type ChannelConnectionUpdateData struct {
	Id string `json:"id"`
	Auth *map[string]any `json:"auth,omitempty"`
	Channel *string `json:"channel,omitempty"`
	ConnectionMode *string `json:"connectionMode,omitempty"`
	Context *map[string]any `json:"context,omitempty"`
	ContextKeys *[]any `json:"contextKeys,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IntegrationIdentifier *string `json:"integrationIdentifier,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	SubscriberId *string `json:"subscriberId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Workspace *map[string]any `json:"workspace,omitempty"`
}

// ChannelConnectionRemoveMatch is the typed request payload for ChannelConnection.RemoveTyped.
type ChannelConnectionRemoveMatch struct {
	Id string `json:"id"`
}

// ChannelEndpoint is the typed data model for the channel_endpoint entity.
type ChannelEndpoint struct {
}

// ChannelEndpointLoadMatch is the typed request payload for ChannelEndpoint.LoadTyped.
type ChannelEndpointLoadMatch struct {
	Id string `json:"id"`
}

// ChannelEndpointCreateData is the typed request payload for ChannelEndpoint.CreateTyped.
type ChannelEndpointCreateData struct {
	Channel string `json:"channel"`
	ConnectionIdentifier string `json:"connectionIdentifier"`
	ContextKeys []any `json:"contextKeys"`
	CreatedAt string `json:"createdAt"`
	Endpoint any `json:"endpoint"`
	Id *string `json:"id,omitempty"`
	Identifier string `json:"identifier"`
	IntegrationIdentifier string `json:"integrationIdentifier"`
	ProviderId string `json:"providerId"`
	SubscriberId string `json:"subscriberId"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
}

// ChannelEndpointUpdateData is the typed request payload for ChannelEndpoint.UpdateTyped.
type ChannelEndpointUpdateData struct {
	Id string `json:"id"`
	Channel *string `json:"channel,omitempty"`
	ConnectionIdentifier *string `json:"connectionIdentifier,omitempty"`
	ContextKeys *[]any `json:"contextKeys,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Endpoint *any `json:"endpoint,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IntegrationIdentifier *string `json:"integrationIdentifier,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	SubscriberId *string `json:"subscriberId,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ChannelEndpointRemoveMatch is the typed request payload for ChannelEndpoint.RemoveTyped.
type ChannelEndpointRemoveMatch struct {
	Id string `json:"id"`
}

// Configure is the typed data model for the configure entity.
type Configure struct {
}

// ConfigureCreateData is the typed request payload for Configure.CreateTyped.
type ConfigureCreateData struct {
	IntegrationId string `json:"integration_id"`
	BotUsername string `json:"botUsername"`
	ConfiguredAt string `json:"configuredAt"`
	WebhookUrl string `json:"webhookUrl"`
}

// Context is the typed data model for the context entity.
type Context struct {
}

// ContextLoadMatch is the typed request payload for Context.LoadTyped.
type ContextLoadMatch struct {
	Id string `json:"id"`
	Type string `json:"type"`
}

// ContextCreateData is the typed request payload for Context.CreateTyped.
type ContextCreateData struct {
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id string `json:"id"`
	Type string `json:"type"`
}

// ContextUpdateData is the typed request payload for Context.UpdateTyped.
type ContextUpdateData struct {
	Id string `json:"id"`
	Type string `json:"type"`
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
}

// ContextRemoveMatch is the typed request payload for Context.RemoveTyped.
type ContextRemoveMatch struct {
	Id string `json:"id"`
	Type string `json:"type"`
}

// CreateSubscriptionsResponseDto is the typed data model for the create_subscriptions_response_dto entity.
type CreateSubscriptionsResponseDto struct {
}

// CreateSubscriptionsResponseDtoCreateData is the typed request payload for CreateSubscriptionsResponseDto.CreateTyped.
type CreateSubscriptionsResponseDtoCreateData struct {
	TopicKey string `json:"topic_key"`
	Context *map[string]any `json:"context,omitempty"`
	Name *string `json:"name,omitempty"`
	Preferences *[]any `json:"preferences,omitempty"`
	SubscriberIds *[]any `json:"subscriberIds,omitempty"`
	Subscriptions *[]any `json:"subscriptions,omitempty"`
}

// Diff is the typed data model for the diff entity.
type Diff struct {
}

// DiffCreateData is the typed request payload for Diff.CreateTyped.
type DiffCreateData struct {
	EnvironmentId string `json:"environment_id"`
	Resources []any `json:"resources"`
	SourceEnvironmentId string `json:"sourceEnvironmentId"`
	Summary any `json:"summary"`
	TargetEnvironmentId string `json:"targetEnvironmentId"`
}

// Domain is the typed data model for the domain entity.
type Domain struct {
}

// DomainLoadMatch is the typed request payload for Domain.LoadTyped.
type DomainLoadMatch struct {
	Id string `json:"id"`
}

// DomainCreateData is the typed request payload for Domain.CreateTyped.
type DomainCreateData struct {
	CreatedAt string `json:"createdAt"`
	Data *map[string]any `json:"data,omitempty"`
	DnsProvider *string `json:"dnsProvider,omitempty"`
	EnvironmentId string `json:"environmentId"`
	ExpectedDnsRecords *[]any `json:"expectedDnsRecords,omitempty"`
	Id string `json:"id"`
	MxRecordConfigured bool `json:"mxRecordConfigured"`
	Name string `json:"name"`
	OrganizationId string `json:"organizationId"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// DomainUpdateData is the typed request payload for Domain.UpdateTyped.
type DomainUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DnsProvider *string `json:"dnsProvider,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	ExpectedDnsRecords *[]any `json:"expectedDnsRecords,omitempty"`
	MxRecordConfigured *bool `json:"mxRecordConfigured,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// DomainRemoveMatch is the typed request payload for Domain.RemoveTyped.
type DomainRemoveMatch struct {
	Address *string `json:"address,omitempty"`
	Id string `json:"id"`
}

// DomainConnectApplyUrlResponseDto is the typed data model for the domain_connect_apply_url_response_dto entity.
type DomainConnectApplyUrlResponseDto struct {
}

// DomainConnectApplyUrlResponseDtoCreateData is the typed request payload for DomainConnectApplyUrlResponseDto.CreateTyped.
type DomainConnectApplyUrlResponseDtoCreateData struct {
	DomainId string `json:"domain_id"`
	RedirectUri *string `json:"redirectUri,omitempty"`
}

// DomainConnectStatusResponseDto is the typed data model for the domain_connect_status_response_dto entity.
type DomainConnectStatusResponseDto struct {
}

// DomainConnectStatusResponseDtoListMatch is the typed request payload for DomainConnectStatusResponseDto.ListTyped.
type DomainConnectStatusResponseDtoListMatch struct {
	Id string `json:"id"`
}

// DomainResponseDto is the typed data model for the domain_response_dto entity.
type DomainResponseDto struct {
}

// DomainResponseDtoCreateData is the typed request payload for DomainResponseDto.CreateTyped.
type DomainResponseDtoCreateData struct {
	Id string `json:"id"`
	CreatedAt string `json:"createdAt"`
	Data *map[string]any `json:"data,omitempty"`
	DnsProvider *string `json:"dnsProvider,omitempty"`
	EnvironmentId string `json:"environmentId"`
	ExpectedDnsRecords *[]any `json:"expectedDnsRecords,omitempty"`
	MxRecordConfigured bool `json:"mxRecordConfigured"`
	Name string `json:"name"`
	OrganizationId string `json:"organizationId"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// DomainRouteResponseDto is the typed data model for the domain_route_response_dto entity.
type DomainRouteResponseDto struct {
}

// DomainRouteResponseDtoLoadMatch is the typed request payload for DomainRouteResponseDto.LoadTyped.
type DomainRouteResponseDtoLoadMatch struct {
	Address string `json:"address"`
	DomainId string `json:"domain_id"`
}

// DomainRouteResponseDtoCreateData is the typed request payload for DomainRouteResponseDto.CreateTyped.
type DomainRouteResponseDtoCreateData struct {
	Id string `json:"id"`
	AgentId *string `json:"agentId,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DomainRouteResponseDtoUpdateData is the typed request payload for DomainRouteResponseDto.UpdateTyped.
type DomainRouteResponseDtoUpdateData struct {
	Address string `json:"address"`
	DomainId string `json:"domain_id"`
	AgentId *string `json:"agentId,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Environment is the typed data model for the environment entity.
type Environment struct {
}

// EnvironmentListMatch is the typed request payload for Environment.ListTyped.
type EnvironmentListMatch struct {
	ApiKeys *[]any `json:"apiKeys,omitempty"`
	Bridge *map[string]any `json:"bridge,omitempty"`
	Color *string `json:"color,omitempty"`
	Dns *map[string]any `json:"dns,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Type *string `json:"type,omitempty"`
}

// EnvironmentCreateData is the typed request payload for Environment.CreateTyped.
type EnvironmentCreateData struct {
	ApiKeys *[]any `json:"apiKeys,omitempty"`
	Bridge *map[string]any `json:"bridge,omitempty"`
	Color string `json:"color"`
	Dns *map[string]any `json:"dns,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	Name string `json:"name"`
	OrganizationId string `json:"organizationId"`
	ParentId *string `json:"parentId,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Type *string `json:"type,omitempty"`
}

// EnvironmentUpdateData is the typed request payload for Environment.UpdateTyped.
type EnvironmentUpdateData struct {
	Id string `json:"id"`
	ApiKeys *[]any `json:"apiKeys,omitempty"`
	Bridge *map[string]any `json:"bridge,omitempty"`
	Color *string `json:"color,omitempty"`
	Dns *map[string]any `json:"dns,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Type *string `json:"type,omitempty"`
}

// EnvironmentRemoveMatch is the typed request payload for Environment.RemoveTyped.
type EnvironmentRemoveMatch struct {
	Id string `json:"id"`
}

// EnvironmentTagsDto is the typed data model for the environment_tags_dto entity.
type EnvironmentTagsDto struct {
}

// EnvironmentTagsDtoListMatch is the typed request payload for EnvironmentTagsDto.ListTyped.
type EnvironmentTagsDtoListMatch struct {
	Id string `json:"id"`
}

// EnvironmentVariable is the typed data model for the environment_variable entity.
type EnvironmentVariable struct {
}

// EnvironmentVariableLoadMatch is the typed request payload for EnvironmentVariable.LoadTyped.
type EnvironmentVariableLoadMatch struct {
	Id string `json:"id"`
}

// EnvironmentVariableListMatch is the typed request payload for EnvironmentVariable.ListTyped.
type EnvironmentVariableListMatch struct {
	Search *string `json:"search,omitempty"`
}

// EnvironmentVariableCreateData is the typed request payload for EnvironmentVariable.CreateTyped.
type EnvironmentVariableCreateData struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	IsSecret bool `json:"isSecret"`
	Key string `json:"key"`
	OrganizationId string `json:"organizationId"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
	Values []any `json:"values"`
}

// EnvironmentVariableUpdateData is the typed request payload for EnvironmentVariable.UpdateTyped.
type EnvironmentVariableUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	IsSecret *bool `json:"isSecret,omitempty"`
	Key *string `json:"key,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Values *[]any `json:"values,omitempty"`
}

// EnvironmentVariableRemoveMatch is the typed request payload for EnvironmentVariable.RemoveTyped.
type EnvironmentVariableRemoveMatch struct {
	Id string `json:"id"`
}

// EnvironmentVariableWorkflowInfoDto is the typed data model for the environment_variable_workflow_info_dto entity.
type EnvironmentVariableWorkflowInfoDto struct {
}

// EnvironmentVariableWorkflowInfoDtoListMatch is the typed request payload for EnvironmentVariableWorkflowInfoDto.ListTyped.
type EnvironmentVariableWorkflowInfoDtoListMatch struct {
	VariableKey string `json:"variable_key"`
}

// Event is the typed data model for the event entity.
type Event struct {
}

// EventRemoveMatch is the typed request payload for Event.RemoveTyped.
type EventRemoveMatch struct {
	TransactionId string `json:"transaction_id"`
}

// GenerateChatOAuthUrlResponseDto is the typed data model for the generate_chat_o_auth_url_response_dto entity.
type GenerateChatOAuthUrlResponseDto struct {
}

// GenerateChatOAuthUrlResponseDtoCreateData is the typed request payload for GenerateChatOAuthUrlResponseDto.CreateTyped.
type GenerateChatOAuthUrlResponseDtoCreateData struct {
	AutoLinkUser *bool `json:"autoLinkUser,omitempty"`
	ConnectionIdentifier *string `json:"connectionIdentifier,omitempty"`
	ConnectionMode *string `json:"connectionMode,omitempty"`
	Context *map[string]any `json:"context,omitempty"`
	ContextHash *string `json:"contextHash,omitempty"`
	IntegrationIdentifier string `json:"integrationIdentifier"`
	Mode *string `json:"mode,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	SubscriberId *string `json:"subscriberId,omitempty"`
	UserScope *[]any `json:"userScope,omitempty"`
}

// GeneratePreviewResponseDto is the typed data model for the generate_preview_response_dto entity.
type GeneratePreviewResponseDto struct {
}

// GeneratePreviewResponseDtoCreateData is the typed request payload for GeneratePreviewResponseDto.CreateTyped.
type GeneratePreviewResponseDtoCreateData struct {
	StepId string `json:"step_id"`
	WorkflowId string `json:"workflow_id"`
	ControlValues *map[string]any `json:"controlValues,omitempty"`
	PreviewPayload *any `json:"previewPayload,omitempty"`
}

// ImportMasterJsonResponseDto is the typed data model for the import_master_json_response_dto entity.
type ImportMasterJsonResponseDto struct {
}

// ImportMasterJsonResponseDtoCreateData is the typed request payload for ImportMasterJsonResponseDto.CreateTyped.
type ImportMasterJsonResponseDtoCreateData struct {
	Failed *[]any `json:"failed,omitempty"`
	Locale string `json:"locale"`
	MasterJson map[string]any `json:"masterJson"`
	Message string `json:"message"`
	Success bool `json:"success"`
	Successful *[]any `json:"successful,omitempty"`
}

// InboxNotificationDto is the typed data model for the inbox_notification_dto entity.
type InboxNotificationDto struct {
}

// InboxNotificationDtoUpdateData is the typed request payload for InboxNotificationDto.UpdateTyped.
type InboxNotificationDtoUpdateData struct {
	ActionType *string `json:"action_type,omitempty"`
	NotificationId string `json:"notification_id"`
	SubscriberId string `json:"subscriber_id"`
	ContextKey *[]any `json:"context_key,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	ChannelType *string `json:"channelType,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DeliveredAt *[]any `json:"deliveredAt,omitempty"`
	FirstSeenAt *string `json:"firstSeenAt,omitempty"`
	Id *string `json:"id,omitempty"`
	IsArchived *bool `json:"isArchived,omitempty"`
	IsRead *bool `json:"isRead,omitempty"`
	IsSeen *bool `json:"isSeen,omitempty"`
	IsSnoozed *bool `json:"isSnoozed,omitempty"`
	PrimaryAction *any `json:"primaryAction,omitempty"`
	ReadAt *string `json:"readAt,omitempty"`
	Redirect *any `json:"redirect,omitempty"`
	SecondaryAction *any `json:"secondaryAction,omitempty"`
	Severity *string `json:"severity,omitempty"`
	SnoozeUntil *string `json:"snoozeUntil,omitempty"`
	SnoozedUntil *string `json:"snoozedUntil,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	To *any `json:"to,omitempty"`
	TransactionId *string `json:"transactionId,omitempty"`
	Workflow *any `json:"workflow,omitempty"`
}

// Integration is the typed data model for the integration entity.
type Integration struct {
}

// IntegrationListMatch is the typed request payload for Integration.ListTyped.
type IntegrationListMatch struct {
	Active *bool `json:"active,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Check *bool `json:"check,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Configurations *map[string]any `json:"configurations,omitempty"`
	Credentials *any `json:"credentials,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	Rules *map[string]any `json:"rules,omitempty"`
}

// IntegrationCreateData is the typed request payload for Integration.CreateTyped.
type IntegrationCreateData struct {
	Active *bool `json:"active,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Check *bool `json:"check,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Configurations *map[string]any `json:"configurations,omitempty"`
	Credentials *any `json:"credentials,omitempty"`
	Deleted bool `json:"deleted"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId string `json:"organizationId"`
	Primary bool `json:"primary"`
	ProviderId *string `json:"providerId,omitempty"`
	Rules *map[string]any `json:"rules,omitempty"`
}

// IntegrationUpdateData is the typed request payload for Integration.UpdateTyped.
type IntegrationUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Check *bool `json:"check,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Configurations *map[string]any `json:"configurations,omitempty"`
	Credentials *any `json:"credentials,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	Rules *map[string]any `json:"rules,omitempty"`
}

// IntegrationRemoveMatch is the typed request payload for Integration.RemoveTyped.
type IntegrationRemoveMatch struct {
	Id string `json:"id"`
}

// IntegrationResponseDto is the typed data model for the integration_response_dto entity.
type IntegrationResponseDto struct {
}

// IntegrationResponseDtoListMatch is the typed request payload for IntegrationResponseDto.ListTyped.
type IntegrationResponseDtoListMatch struct {
	Active *bool `json:"active,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Configurations *any `json:"configurations,omitempty"`
	Credentials *any `json:"credentials,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	Rules *map[string]any `json:"rules,omitempty"`
}

// IntegrationResponseDtoCreateData is the typed request payload for IntegrationResponseDto.CreateTyped.
type IntegrationResponseDtoCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Channel *string `json:"channel,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Configurations *any `json:"configurations,omitempty"`
	Credentials *any `json:"credentials,omitempty"`
	Deleted bool `json:"deleted"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	EnvironmentId string `json:"environmentId"`
	Identifier string `json:"identifier"`
	Kind *string `json:"kind,omitempty"`
	Name string `json:"name"`
	OrganizationId string `json:"organizationId"`
	Primary bool `json:"primary"`
	ProviderId string `json:"providerId"`
	Rules *map[string]any `json:"rules,omitempty"`
}

// Layout is the typed data model for the layout entity.
type Layout struct {
}

// LayoutLoadMatch is the typed request payload for Layout.LoadTyped.
type LayoutLoadMatch struct {
	Id string `json:"id"`
}

// LayoutListMatch is the typed request payload for Layout.ListTyped.
type LayoutListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Query *string `json:"query,omitempty"`
}

// LayoutCreateData is the typed request payload for Layout.CreateTyped.
type LayoutCreateData struct {
	ControlValues *any `json:"controlValues,omitempty"`
	Controls any `json:"controls"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	IsDefault bool `json:"isDefault"`
	IsTranslationEnabled bool `json:"isTranslationEnabled"`
	LayoutId string `json:"layoutId"`
	Name string `json:"name"`
	Origin string `json:"origin"`
	Slug string `json:"slug"`
	Source *string `json:"source,omitempty"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	Variables *map[string]any `json:"variables,omitempty"`
}

// LayoutUpdateData is the typed request payload for Layout.UpdateTyped.
type LayoutUpdateData struct {
	Id string `json:"id"`
	ControlValues *any `json:"controlValues,omitempty"`
	Controls *any `json:"controls,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	IsDefault *bool `json:"isDefault,omitempty"`
	IsTranslationEnabled *bool `json:"isTranslationEnabled,omitempty"`
	LayoutId *string `json:"layoutId,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Source *string `json:"source,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	Variables *map[string]any `json:"variables,omitempty"`
}

// LayoutRemoveMatch is the typed request payload for Layout.RemoveTyped.
type LayoutRemoveMatch struct {
	Id string `json:"id"`
}

// LayoutResponseDto is the typed data model for the layout_response_dto entity.
type LayoutResponseDto struct {
}

// LayoutResponseDtoCreateData is the typed request payload for LayoutResponseDto.CreateTyped.
type LayoutResponseDtoCreateData struct {
	Id string `json:"id"`
}

// Link is the typed data model for the link entity.
type Link struct {
}

// LinkCreateData is the typed request payload for Link.CreateTyped.
type LinkCreateData struct {
	Context *map[string]any `json:"context,omitempty"`
	ContextHash *string `json:"contextHash,omitempty"`
	IntegrationIdentifier string `json:"integrationIdentifier"`
	SubscriberId string `json:"subscriberId"`
}

// ListAgentIntegrationsResponseDto is the typed data model for the list_agent_integrations_response_dto entity.
type ListAgentIntegrationsResponseDto struct {
}

// ListAgentIntegrationsResponseDtoListMatch is the typed request payload for ListAgentIntegrationsResponseDto.ListTyped.
type ListAgentIntegrationsResponseDtoListMatch struct {
	Identifier string `json:"identifier"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	IntegrationIdentifier *string `json:"integration_identifier,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// ListAgentsResponseDto is the typed data model for the list_agents_response_dto entity.
type ListAgentsResponseDto struct {
}

// ListAgentsResponseDtoListMatch is the typed request payload for ListAgentsResponseDto.ListTyped.
type ListAgentsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// ListChannelConnectionsResponseDto is the typed data model for the list_channel_connections_response_dto entity.
type ListChannelConnectionsResponseDto struct {
}

// ListChannelConnectionsResponseDtoListMatch is the typed request payload for ListChannelConnectionsResponseDto.ListTyped.
type ListChannelConnectionsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Channel *string `json:"channel,omitempty"`
	ConnectionMode *string `json:"connection_mode,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	IntegrationIdentifier *string `json:"integration_identifier,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	SubscriberId *string `json:"subscriber_id,omitempty"`
}

// ListChannelEndpointsResponseDto is the typed data model for the list_channel_endpoints_response_dto entity.
type ListChannelEndpointsResponseDto struct {
}

// ListChannelEndpointsResponseDtoListMatch is the typed request payload for ListChannelEndpointsResponseDto.ListTyped.
type ListChannelEndpointsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Channel *string `json:"channel,omitempty"`
	ConnectionIdentifier *string `json:"connection_identifier,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	IntegrationIdentifier *string `json:"integration_identifier,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	SubscriberId *string `json:"subscriber_id,omitempty"`
}

// ListContextsResponseDto is the typed data model for the list_contexts_response_dto entity.
type ListContextsResponseDto struct {
}

// ListContextsResponseDtoListMatch is the typed request payload for ListContextsResponseDto.ListTyped.
type ListContextsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Search *string `json:"search,omitempty"`
}

// ListDomainRoutesResponseDto is the typed data model for the list_domain_routes_response_dto entity.
type ListDomainRoutesResponseDto struct {
}

// ListDomainRoutesResponseDtoListMatch is the typed request payload for ListDomainRoutesResponseDto.ListTyped.
type ListDomainRoutesResponseDtoListMatch struct {
	DomainId string `json:"domain_id"`
	After *string `json:"after,omitempty"`
	AgentId *string `json:"agent_id,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// ListDomainsResponseDto is the typed data model for the list_domains_response_dto entity.
type ListDomainsResponseDto struct {
}

// ListDomainsResponseDtoListMatch is the typed request payload for ListDomainsResponseDto.ListTyped.
type ListDomainsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// ListSubscribersResponseDto is the typed data model for the list_subscribers_response_dto entity.
type ListSubscribersResponseDto struct {
}

// ListSubscribersResponseDtoListMatch is the typed request payload for ListSubscribersResponseDto.ListTyped.
type ListSubscribersResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Email *string `json:"email,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Phone *string `json:"phone,omitempty"`
	SubscriberId *string `json:"subscriber_id,omitempty"`
}

// ListTopicSubscriptionsResponseDto is the typed data model for the list_topic_subscriptions_response_dto entity.
type ListTopicSubscriptionsResponseDto struct {
}

// ListTopicSubscriptionsResponseDtoListMatch is the typed request payload for ListTopicSubscriptionsResponseDto.ListTyped.
type ListTopicSubscriptionsResponseDtoListMatch struct {
	SubscriberId string `json:"subscriber_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Key *string `json:"key,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// ListTopicsResponseDto is the typed data model for the list_topics_response_dto entity.
type ListTopicsResponseDto struct {
}

// ListTopicsResponseDtoListMatch is the typed request payload for ListTopicsResponseDto.ListTyped.
type ListTopicsResponseDtoListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeCursor *bool `json:"include_cursor,omitempty"`
	Key *string `json:"key,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
}

// MasterJson is the typed data model for the master_json entity.
type MasterJson struct {
}

// MasterJsonLoadMatch is the typed request payload for MasterJson.LoadTyped.
type MasterJsonLoadMatch struct {
	Locale *string `json:"locale,omitempty"`
}

// Message is the typed data model for the message entity.
type Message struct {
}

// MessageListMatch is the typed request payload for Message.ListTyped.
type MessageListMatch struct {
	Channel *string `json:"channel,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SubscriberId *string `json:"subscriber_id,omitempty"`
	TransactionId *[]any `json:"transaction_id,omitempty"`
}

// MessageRemoveMatch is the typed request payload for Message.RemoveTyped.
type MessageRemoveMatch struct {
	Id string `json:"id"`
}

// MessageResponseDto is the typed data model for the message_response_dto entity.
type MessageResponseDto struct {
}

// MessageResponseDtoCreateData is the typed request payload for MessageResponseDto.CreateTyped.
type MessageResponseDtoCreateData struct {
	MessageId *string `json:"message_id,omitempty"`
	SubscriberId string `json:"subscriber_id"`
	Type *any `json:"type,omitempty"`
	MarkAs string `json:"markAs"`
	MessageId2 any `json:"messageId"`
	Payload *map[string]any `json:"payload,omitempty"`
	Status string `json:"status"`
}

// NotificationFeedItemDto is the typed data model for the notification_feed_item_dto entity.
type NotificationFeedItemDto struct {
}

// NotificationFeedItemDtoListMatch is the typed request payload for NotificationFeedItemDto.ListTyped.
type NotificationFeedItemDtoListMatch struct {
	SubscriberId string `json:"subscriber_id"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	Payload *string `json:"payload,omitempty"`
	Read *bool `json:"read,omitempty"`
	Seen *bool `json:"seen,omitempty"`
}

// PreferencesResponseDto is the typed data model for the preferences_response_dto entity.
type PreferencesResponseDto struct {
}

// PreferencesResponseDtoUpdateData is the typed request payload for PreferencesResponseDto.UpdateTyped.
type PreferencesResponseDtoUpdateData struct {
	SubscriberId string `json:"subscriber_id"`
	Context *map[string]any `json:"context,omitempty"`
	Preferences *[]any `json:"preferences,omitempty"`
}

// Publish is the typed data model for the publish entity.
type Publish struct {
}

// PublishCreateData is the typed request payload for Publish.CreateTyped.
type PublishCreateData struct {
	EnvironmentId string `json:"environment_id"`
	DryRun *bool `json:"dryRun,omitempty"`
	Resources *[]any `json:"resources,omitempty"`
	Results []any `json:"results"`
	SourceEnvironmentId *string `json:"sourceEnvironmentId,omitempty"`
	Summary any `json:"summary"`
}

// RemoveSubscriberResponseDto is the typed data model for the remove_subscriber_response_dto entity.
type RemoveSubscriberResponseDto struct {
}

// RemoveSubscriberResponseDtoRemoveMatch is the typed request payload for RemoveSubscriberResponseDto.RemoveTyped.
type RemoveSubscriberResponseDtoRemoveMatch struct {
	SubscriberId string `json:"subscriber_id"`
}

// Step is the typed data model for the step entity.
type Step struct {
}

// StepLoadMatch is the typed request payload for Step.LoadTyped.
type StepLoadMatch struct {
	Id string `json:"id"`
	WorkflowId string `json:"workflow_id"`
}

// Subscriber is the typed data model for the subscriber entity.
type Subscriber struct {
}

// SubscriberLoadMatch is the typed request payload for Subscriber.LoadTyped.
type SubscriberLoadMatch struct {
	Id string `json:"id"`
}

// SubscriberCreateData is the typed request payload for Subscriber.CreateTyped.
type SubscriberCreateData struct {
	FailIfExist *bool `json:"fail_if_exist,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Channels *[]any `json:"channels,omitempty"`
	CreatedAt string `json:"createdAt"`
	Data *map[string]any `json:"data,omitempty"`
	Deleted bool `json:"deleted"`
	Email *string `json:"email,omitempty"`
	EnvironmentId string `json:"environmentId"`
	FirstName *string `json:"firstName,omitempty"`
	Id *string `json:"id,omitempty"`
	IsOnline *bool `json:"isOnline,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	LastOnlineAt *string `json:"lastOnlineAt,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OrganizationId string `json:"organizationId"`
	Phone *string `json:"phone,omitempty"`
	SubscriberId string `json:"subscriberId"`
	Timezone *string `json:"timezone,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	V *float64 `json:"v,omitempty"`
}

// SubscriberUpdateData is the typed request payload for Subscriber.UpdateTyped.
type SubscriberUpdateData struct {
	Id string `json:"id"`
	Avatar *string `json:"avatar,omitempty"`
	Channels *[]any `json:"channels,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Email *string `json:"email,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	IsOnline *bool `json:"isOnline,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	LastOnlineAt *string `json:"lastOnlineAt,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Phone *string `json:"phone,omitempty"`
	SubscriberId *string `json:"subscriberId,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	V *float64 `json:"v,omitempty"`
}

// SubscriberRemoveMatch is the typed request payload for Subscriber.RemoveTyped.
type SubscriberRemoveMatch struct {
	Id string `json:"id"`
	NotificationId *string `json:"notification_id,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
}

// SubscriberNotificationsCountResponseDto is the typed data model for the subscriber_notifications_count_response_dto entity.
type SubscriberNotificationsCountResponseDto struct {
}

// SubscriberNotificationsCountResponseDtoListMatch is the typed request payload for SubscriberNotificationsCountResponseDto.ListTyped.
type SubscriberNotificationsCountResponseDtoListMatch struct {
	SubscriberId string `json:"subscriber_id"`
	Filter string `json:"filter"`
}

// SubscriberNotificationsResponseDto is the typed data model for the subscriber_notifications_response_dto entity.
type SubscriberNotificationsResponseDto struct {
}

// SubscriberNotificationsResponseDtoListMatch is the typed request payload for SubscriberNotificationsResponseDto.ListTyped.
type SubscriberNotificationsResponseDtoListMatch struct {
	Id string `json:"id"`
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	ContextKey *[]any `json:"context_key,omitempty"`
	CreatedGte *float64 `json:"created_gte,omitempty"`
	CreatedLte *float64 `json:"created_lte,omitempty"`
	Data *string `json:"data,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	Read *bool `json:"read,omitempty"`
	Seen *bool `json:"seen,omitempty"`
	Severity *[]any `json:"severity,omitempty"`
	Snoozed *bool `json:"snoozed,omitempty"`
}

// SubscriberPreferencesDto is the typed data model for the subscriber_preferences_dto entity.
type SubscriberPreferencesDto struct {
}

// SubscriberPreferencesDtoListMatch is the typed request payload for SubscriberPreferencesDto.ListTyped.
type SubscriberPreferencesDtoListMatch struct {
	Id string `json:"id"`
	ContextKey *[]any `json:"context_key,omitempty"`
	Criticality *string `json:"criticality,omitempty"`
}

// SubscriberPreferencesDtoUpdateData is the typed request payload for SubscriberPreferencesDto.UpdateTyped.
type SubscriberPreferencesDtoUpdateData struct {
	Id string `json:"id"`
}

// SubscriberResponseDto is the typed data model for the subscriber_response_dto entity.
type SubscriberResponseDto struct {
}

// SubscriberResponseDtoUpdateData is the typed request payload for SubscriberResponseDto.UpdateTyped.
type SubscriberResponseDtoUpdateData struct {
	Id string `json:"id"`
	Avatar *string `json:"avatar,omitempty"`
	Channels *[]any `json:"channels,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Email *string `json:"email,omitempty"`
	EnvironmentId *string `json:"environmentId,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	IsOnline *bool `json:"isOnline,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	LastOnlineAt *string `json:"lastOnlineAt,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	Phone *string `json:"phone,omitempty"`
	SubscriberId *string `json:"subscriberId,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	V *float64 `json:"v,omitempty"`
}

// Subscription is the typed data model for the subscription entity.
type Subscription struct {
}

// SubscriptionLoadMatch is the typed request payload for Subscription.LoadTyped.
type SubscriptionLoadMatch struct {
	Id string `json:"id"`
	TopicId string `json:"topic_id"`
}

// SubscriptionUpdateData is the typed request payload for Subscription.UpdateTyped.
type SubscriptionUpdateData struct {
	Id string `json:"id"`
	TopicId string `json:"topic_id"`
	ContextKeys *[]any `json:"contextKeys,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	Preferences *[]any `json:"preferences,omitempty"`
	Subscriber *any `json:"subscriber,omitempty"`
	Topic *any `json:"topic,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// Topic is the typed data model for the topic entity.
type Topic struct {
}

// TopicLoadMatch is the typed request payload for Topic.LoadTyped.
type TopicLoadMatch struct {
	Id string `json:"id"`
}

// TopicCreateData is the typed request payload for Topic.CreateTyped.
type TopicCreateData struct {
	FailIfExist *bool `json:"fail_if_exist,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Key string `json:"key"`
	Name *string `json:"name,omitempty"`
}

// TopicUpdateData is the typed request payload for Topic.UpdateTyped.
type TopicUpdateData struct {
	Id string `json:"id"`
	Data *map[string]any `json:"data,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TopicRemoveMatch is the typed request payload for Topic.RemoveTyped.
type TopicRemoveMatch struct {
	Id string `json:"id"`
}

// TopicSubscriberDto is the typed data model for the topic_subscriber_dto entity.
type TopicSubscriberDto struct {
}

// TopicSubscriberDtoLoadMatch is the typed request payload for TopicSubscriberDto.LoadTyped.
type TopicSubscriberDtoLoadMatch struct {
	ExternalSubscriberId string `json:"external_subscriber_id"`
	TopicId string `json:"topic_id"`
}

// TopicSubscriptionsResponseDto is the typed data model for the topic_subscriptions_response_dto entity.
type TopicSubscriptionsResponseDto struct {
}

// TopicSubscriptionsResponseDtoRemoveMatch is the typed request payload for TopicSubscriptionsResponseDto.RemoveTyped.
type TopicSubscriptionsResponseDtoRemoveMatch struct {
	TopicKey string `json:"topic_key"`
}

// Translation is the typed data model for the translation entity.
type Translation struct {
}

// TranslationLoadMatch is the typed request payload for Translation.LoadTyped.
type TranslationLoadMatch struct {
	Locale string `json:"locale"`
	ResourceId string `json:"resource_id"`
	ResourceType string `json:"resource_type"`
}

// TranslationCreateData is the typed request payload for Translation.CreateTyped.
type TranslationCreateData struct {
	Content map[string]any `json:"content"`
	Id *string `json:"id,omitempty"`
	Locale string `json:"locale"`
	ResourceId string `json:"resourceId"`
	ResourceType string `json:"resourceType"`
}

// TranslationRemoveMatch is the typed request payload for Translation.RemoveTyped.
type TranslationRemoveMatch struct {
	Locale *string `json:"locale,omitempty"`
	ResourceId string `json:"resource_id"`
	ResourceType string `json:"resource_type"`
}

// TranslationGroupDto is the typed data model for the translation_group_dto entity.
type TranslationGroupDto struct {
}

// TranslationGroupDtoLoadMatch is the typed request payload for TranslationGroupDto.LoadTyped.
type TranslationGroupDtoLoadMatch struct {
	ResourceId string `json:"resource_id"`
	ResourceType string `json:"resource_type"`
}

// Trigger is the typed data model for the trigger entity.
type Trigger struct {
}

// TriggerCreateData is the typed request payload for Trigger.CreateTyped.
type TriggerCreateData struct {
	Actor *any `json:"actor,omitempty"`
	AgentId *string `json:"agentId,omitempty"`
	BridgeUrl *string `json:"bridgeUrl,omitempty"`
	Context *map[string]any `json:"context,omitempty"`
	Name string `json:"name"`
	Overrides *any `json:"overrides,omitempty"`
	Payload *map[string]any `json:"payload,omitempty"`
	Tenant *any `json:"tenant,omitempty"`
	To any `json:"to"`
	TransactionId *string `json:"transactionId,omitempty"`
}

// TriggerEventResponseDto is the typed data model for the trigger_event_response_dto entity.
type TriggerEventResponseDto struct {
}

// TriggerEventResponseDtoCreateData is the typed request payload for TriggerEventResponseDto.CreateTyped.
type TriggerEventResponseDtoCreateData struct {
	Acknowledged bool `json:"acknowledged"`
	ActivityFeedLink *string `json:"activityFeedLink,omitempty"`
	Actor *any `json:"actor,omitempty"`
	AgentId *string `json:"agentId,omitempty"`
	Context *map[string]any `json:"context,omitempty"`
	Error *[]any `json:"error,omitempty"`
	Events []any `json:"events"`
	JobData *map[string]any `json:"jobData,omitempty"`
	Name string `json:"name"`
	Overrides *any `json:"overrides,omitempty"`
	Payload map[string]any `json:"payload"`
	Status string `json:"status"`
	Tenant *any `json:"tenant,omitempty"`
	TransactionId *string `json:"transactionId,omitempty"`
}

// Unseen is the typed data model for the unseen entity.
type Unseen struct {
}

// UnseenLoadMatch is the typed request payload for Unseen.LoadTyped.
type UnseenLoadMatch struct {
	SubscriberId string `json:"subscriber_id"`
	Limit *float64 `json:"limit,omitempty"`
	Seen *bool `json:"seen,omitempty"`
}

// Upload is the typed data model for the upload entity.
type Upload struct {
}

// UploadCreateData is the typed request payload for Upload.CreateTyped.
type UploadCreateData struct {
	Errors []any `json:"errors"`
	FailedUploads float64 `json:"failedUploads"`
	SuccessfulUploads float64 `json:"successfulUploads"`
	TotalFiles float64 `json:"totalFiles"`
}

// WebhookResultDto is the typed data model for the webhook_result_dto entity.
type WebhookResultDto struct {
}

// WebhookResultDtoCreateData is the typed request payload for WebhookResultDto.CreateTyped.
type WebhookResultDtoCreateData struct {
	EnvironmentId string `json:"environment_id"`
	IntegrationId string `json:"integration_id"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id string `json:"id"`
	EnvironmentId *string `json:"environment_id,omitempty"`
}

// WorkflowListMatch is the typed request payload for Workflow.ListTyped.
type WorkflowListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Query *string `json:"query,omitempty"`
	Status *[]any `json:"status,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
}

// WorkflowCreateData is the typed request payload for Workflow.CreateTyped.
type WorkflowCreateData struct {
	Active *bool `json:"active,omitempty"`
	Agent *any `json:"agent,omitempty"`
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	IsTranslationEnabled *bool `json:"isTranslationEnabled,omitempty"`
	Issues *map[string]any `json:"issues,omitempty"`
	LastPublishedAt *string `json:"lastPublishedAt,omitempty"`
	LastPublishedBy *any `json:"lastPublishedBy,omitempty"`
	LastTriggeredAt *string `json:"lastTriggeredAt,omitempty"`
	Name string `json:"name"`
	Origin string `json:"origin"`
	PayloadExample *map[string]any `json:"payloadExample,omitempty"`
	PayloadSchema *map[string]any `json:"payloadSchema,omitempty"`
	Preferences any `json:"preferences"`
	Severity string `json:"severity"`
	Slug string `json:"slug"`
	Source *string `json:"source,omitempty"`
	Status string `json:"status"`
	StepTypeOverviews []any `json:"stepTypeOverviews"`
	Steps []any `json:"steps"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	ValidatePayload *bool `json:"validatePayload,omitempty"`
	WorkflowId string `json:"workflowId"`
}

// WorkflowUpdateData is the typed request payload for Workflow.UpdateTyped.
type WorkflowUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	Agent *any `json:"agent,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	IsTranslationEnabled *bool `json:"isTranslationEnabled,omitempty"`
	Issues *map[string]any `json:"issues,omitempty"`
	LastPublishedAt *string `json:"lastPublishedAt,omitempty"`
	LastPublishedBy *any `json:"lastPublishedBy,omitempty"`
	LastTriggeredAt *string `json:"lastTriggeredAt,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	PayloadExample *map[string]any `json:"payloadExample,omitempty"`
	PayloadSchema *map[string]any `json:"payloadSchema,omitempty"`
	Preferences *any `json:"preferences,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	StepTypeOverviews *[]any `json:"stepTypeOverviews,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	ValidatePayload *bool `json:"validatePayload,omitempty"`
	WorkflowId *string `json:"workflowId,omitempty"`
}

// WorkflowRemoveMatch is the typed request payload for Workflow.RemoveTyped.
type WorkflowRemoveMatch struct {
	Id string `json:"id"`
}

// WorkflowInfoDto is the typed data model for the workflow_info_dto entity.
type WorkflowInfoDto struct {
}

// WorkflowInfoDtoListMatch is the typed request payload for WorkflowInfoDto.ListTyped.
type WorkflowInfoDtoListMatch struct {
	LayoutId string `json:"layout_id"`
}

// WorkflowResponseDto is the typed data model for the workflow_response_dto entity.
type WorkflowResponseDto struct {
}

// WorkflowResponseDtoUpdateData is the typed request payload for WorkflowResponseDto.UpdateTyped.
type WorkflowResponseDtoUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	Agent *any `json:"agent,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	IsTranslationEnabled *bool `json:"isTranslationEnabled,omitempty"`
	Issues *map[string]any `json:"issues,omitempty"`
	LastPublishedAt *string `json:"lastPublishedAt,omitempty"`
	LastPublishedBy *any `json:"lastPublishedBy,omitempty"`
	LastTriggeredAt *string `json:"lastTriggeredAt,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	PayloadExample *map[string]any `json:"payloadExample,omitempty"`
	PayloadSchema *map[string]any `json:"payloadSchema,omitempty"`
	Preferences *any `json:"preferences,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	ValidatePayload *bool `json:"validatePayload,omitempty"`
	WorkflowId *string `json:"workflowId,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
