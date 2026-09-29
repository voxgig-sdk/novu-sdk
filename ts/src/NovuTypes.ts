// Typed models for the Novu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ActivityNotificationResponseDto {
  channels?: any[]
  contextKeys?: any[]
  controls?: Record<string, any>
  createdAt?: string
  critical?: boolean
  digestedNotificationId?: string
  environmentId: string
  id?: string
  jobs?: any[]
  organizationId: string
  payload?: Record<string, any>
  severity?: string
  subscriber?: any
  subscriberId: string
  tags?: any[]
  template?: any
  templateId?: string
  to?: Record<string, any>
  topics?: any[]
  transactionId: string
  updatedAt?: string
}

export interface ActivityNotificationResponseDtoLoadMatch {
  notification_id: string
}

export interface ActivityNotificationResponseDtoListMatch {
  after?: string
  before?: string
  channel?: any[]
  context_key?: any[]
  email?: any[]
  limit?: number
  page?: number
  search?: string
  severity?: any[]
  subscriber_id?: any[]
  subscription_id?: string
  template?: any[]
  topic_key?: string
  transaction_id?: string
}

export interface Agent {
  active: boolean
  behavior: Record<string, any>
  bridgeUrl?: string
  createdAt: string
  createdBy?: string
  description?: string
  devBridgeActive?: boolean
  devBridgeUrl?: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  identifier: string
  integrations?: any[]
  managedRuntime?: any
  name: string
  organizationId: string
  runtime?: string
  updatedAt: string
  visibility?: string
}

export interface AgentLoadMatch {
  id: string
}

export interface AgentListMatch {
  after?: string
  before?: string
  identifier?: string
  include_cursor?: boolean
  limit?: number
  order_by?: string
  order_direction?: string
}

export interface AgentCreateData {
  active: boolean
  behavior: Record<string, any>
  bridgeUrl?: string
  createdAt: string
  createdBy?: string
  description?: string
  devBridgeActive?: boolean
  devBridgeUrl?: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  identifier: string
  integrations?: any[]
  managedRuntime?: any
  name: string
  organizationId: string
  runtime?: string
  updatedAt: string
  visibility?: string

  // Selects a custom action instead of the plain create:
  //   'reply'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentUpdateData {
  id: string
  active?: boolean
  behavior?: Record<string, any>
  bridgeUrl?: string
  createdAt?: string
  createdBy?: string
  description?: string
  devBridgeActive?: boolean
  devBridgeUrl?: string
  environmentId?: string
  exceedsPlanLimit?: boolean
  identifier?: string
  integrations?: any[]
  managedRuntime?: any
  name?: string
  organizationId?: string
  runtime?: string
  updatedAt?: string
  visibility?: string
}

export interface AgentRemoveMatch {
  id: string
  delete_from_provider: string
}

export interface AgentIntegrationResponseDto {
  agentId: string
  connectedAt?: Record<string, any>
  createdAt: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  integration: Record<string, any>
  integrationIdentifier?: string
  organizationId: string
  providerId?: string
  updatedAt: string
}

export interface AgentIntegrationResponseDtoCreateData {
  identifier: string
  agentId: string
  connectedAt?: Record<string, any>
  createdAt: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  integration: Record<string, any>
  integrationIdentifier?: string
  organizationId: string
  providerId?: string
  updatedAt: string
}

export interface AgentIntegrationResponseDtoUpdateData {
  agent_id: string
  agent_integration_id: string
  agentId?: string
  connectedAt?: Record<string, any>
  createdAt?: string
  environmentId?: string
  exceedsPlanLimit?: boolean
  id?: string
  integration?: Record<string, any>
  integrationIdentifier?: string
  organizationId?: string
  providerId?: string
  updatedAt?: string
}

export interface AgentResponseDto {
  active: boolean
  behavior: Record<string, any>
  bridgeUrl?: string
  createdAt: string
  createdBy?: string
  description?: string
  devBridgeActive?: boolean
  devBridgeUrl?: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  identifier: string
  integrations?: any[]
  managedRuntime?: any
  name: string
  organizationId: string
  runtime?: string
  updatedAt: string
  visibility?: string
}

export interface AgentResponseDtoUpdateData {
  identifier: string
  active?: boolean
  behavior?: Record<string, any>
  bridgeUrl?: string
  createdAt?: string
  createdBy?: string
  description?: string
  devBridgeActive?: boolean
  devBridgeUrl?: string
  environmentId?: string
  exceedsPlanLimit?: boolean
  id?: string
  integrations?: any[]
  managedRuntime?: any
  name?: string
  organizationId?: string
  runtime?: string
  updatedAt?: string
  visibility?: string
}

export interface Bulk {
  subscribers: any[]
}

export interface BulkCreateData {
  subscribers: any[]
}

export interface ChannelConnection {
  auth: Record<string, any>
  channel: string
  connectionMode?: string
  context?: Record<string, any>
  contextKeys: any[]
  createdAt: string
  id?: string
  identifier: string
  integrationIdentifier: string
  providerId: string
  subscriberId: string
  updatedAt: string
  workspace: Record<string, any>
}

export interface ChannelConnectionLoadMatch {
  id: string
}

export interface ChannelConnectionListMatch {
  after?: string
  before?: string
  channel?: string
  connection_mode?: string
  context_key?: any[]
  include_cursor?: boolean
  integration_identifier?: string
  limit?: number
  order_by?: string
  order_direction?: string
  provider_id?: string
  subscriber_id?: string
}

export interface ChannelConnectionCreateData {
  auth: Record<string, any>
  channel: string
  connectionMode?: string
  context?: Record<string, any>
  contextKeys: any[]
  createdAt: string
  id?: string
  identifier: string
  integrationIdentifier: string
  providerId: string
  subscriberId: string
  updatedAt: string
  workspace: Record<string, any>
}

export interface ChannelConnectionUpdateData {
  id: string
  auth?: Record<string, any>
  channel?: string
  connectionMode?: string
  context?: Record<string, any>
  contextKeys?: any[]
  createdAt?: string
  identifier?: string
  integrationIdentifier?: string
  providerId?: string
  subscriberId?: string
  updatedAt?: string
  workspace?: Record<string, any>
}

export interface ChannelConnectionRemoveMatch {
  id: string
}

export interface ChannelEndpoint {
  channel: string
  connectionIdentifier: string
  contextKeys: any[]
  createdAt: string
  endpoint: any
  id?: string
  identifier: string
  integrationIdentifier: string
  providerId: string
  subscriberId: string
  type: string
  updatedAt: string
}

export interface ChannelEndpointLoadMatch {
  id: string
}

export interface ChannelEndpointListMatch {
  after?: string
  before?: string
  channel?: string
  connection_identifier?: string
  context_key?: any[]
  include_cursor?: boolean
  integration_identifier?: string
  limit?: number
  order_by?: string
  order_direction?: string
  provider_id?: string
  subscriber_id?: string
}

export interface ChannelEndpointCreateData {
  channel: string
  connectionIdentifier: string
  contextKeys: any[]
  createdAt: string
  endpoint: any
  id?: string
  identifier: string
  integrationIdentifier: string
  providerId: string
  subscriberId: string
  type: string
  updatedAt: string
}

export interface ChannelEndpointUpdateData {
  id: string
  channel?: string
  connectionIdentifier?: string
  contextKeys?: any[]
  createdAt?: string
  endpoint?: any
  identifier?: string
  integrationIdentifier?: string
  providerId?: string
  subscriberId?: string
  type?: string
  updatedAt?: string
}

export interface ChannelEndpointRemoveMatch {
  id: string
}

export interface Configure {
  botUsername: string
  configuredAt: string
  webhookUrl: string
}

export interface ConfigureCreateData {
  integration_id: string
  botUsername: string
  configuredAt: string
  webhookUrl: string
}

export interface ContextType {
  bridgeUrl?: string
  createdAt: string
  data: Record<string, any>
  id: string
  type: string
  updatedAt: string
}

export interface ContextLoadMatch {
  id: string
  type: string
}

export interface ContextListMatch {
  after?: string
  before?: string
  id?: string
  include_cursor?: boolean
  limit?: number
  order_by?: string
  order_direction?: string
  search?: string
}

export interface ContextCreateData {
  bridgeUrl?: string
  createdAt: string
  data: Record<string, any>
  id: string
  type: string
  updatedAt: string
}

export interface ContextUpdateData {
  id: string
  type: string
  bridgeUrl?: string
  createdAt?: string
  data?: Record<string, any>
  updatedAt?: string
}

export interface ContextRemoveMatch {
  id: string
  type: string
}

export interface CreateSubscriptionsResponseDto {
  context?: Record<string, any>
  name?: string
  preferences?: any[]
  subscriberIds?: any[]
  subscriptions?: any[]
}

export interface CreateSubscriptionsResponseDtoCreateData {
  topic_key: string
  context?: Record<string, any>
  name?: string
  preferences?: any[]
  subscriberIds?: any[]
  subscriptions?: any[]
}

export interface Diff {
  resources: any[]
  sourceEnvironmentId: string
  summary: any
  targetEnvironmentId: string
}

export interface DiffCreateData {
  environment_id: string
  resources: any[]
  sourceEnvironmentId: string
  summary: any
  targetEnvironmentId: string
}

export interface Domain {
  createdAt: string
  data?: Record<string, any>
  dnsProvider?: string
  environmentId: string
  expectedDnsRecords?: any[]
  id: string
  mxRecordConfigured: boolean
  name: string
  organizationId: string
  status: string
  updatedAt: string
}

export interface DomainLoadMatch {
  id: string
}

export interface DomainListMatch {
  after?: string
  before?: string
  include_cursor?: boolean
  limit?: number
  name?: string
  order_by?: string
  order_direction?: string
}

export interface DomainCreateData {
  createdAt: string
  data?: Record<string, any>
  dnsProvider?: string
  environmentId: string
  expectedDnsRecords?: any[]
  id: string
  mxRecordConfigured: boolean
  name: string
  organizationId: string
  status: string
  updatedAt: string

  // Selects a custom action instead of the plain create:
  //   'diagnose'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainUpdateData {
  id: string
  createdAt?: string
  data?: Record<string, any>
  dnsProvider?: string
  environmentId?: string
  expectedDnsRecords?: any[]
  mxRecordConfigured?: boolean
  name?: string
  organizationId?: string
  status?: string
  updatedAt?: string
}

export interface DomainRemoveMatch {
  address?: string
  id: string
}

export interface DomainConnectApplyUrlResponseDto {
  redirectUri?: string
}

export interface DomainConnectApplyUrlResponseDtoCreateData {
  domain_id: string
  redirectUri?: string
}

export interface DomainConnectStatusResponseDto {
  id?: string
}

export interface DomainConnectStatusResponseDtoListMatch {
  id: string

  // Selects a custom action instead of the plain list:
  //   'auto-configure'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainResponseDto {
  createdAt: string
  data?: Record<string, any>
  dnsProvider?: string
  environmentId: string
  expectedDnsRecords?: any[]
  id: string
  mxRecordConfigured: boolean
  name: string
  organizationId: string
  status: string
  updatedAt: string
}

export interface DomainResponseDtoCreateData {
  id: string
  createdAt: string
  data?: Record<string, any>
  dnsProvider?: string
  environmentId: string
  expectedDnsRecords?: any[]
  mxRecordConfigured: boolean
  name: string
  organizationId: string
  status: string
  updatedAt: string

  // Selects a custom action instead of the plain create:
  //   'verify'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainRouteResponseDto {
  address: string
  agentId?: string
  createdAt: string
  data?: Record<string, any>
  domainId: string
  environmentId: string
  id: string
  organizationId: string
  type: string
  updatedAt: string
}

export interface DomainRouteResponseDtoLoadMatch {
  address: string
  domain_id: string
}

export interface DomainRouteResponseDtoCreateData {
  id: string
  address: string
  agentId?: string
  createdAt: string
  data?: Record<string, any>
  domainId: string
  environmentId: string
  organizationId: string
  type: string
  updatedAt: string

  // Selects a custom action instead of the plain create:
  //   'routes' | 'test'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainRouteResponseDtoUpdateData {
  address: string
  domain_id: string
  agentId?: string
  createdAt?: string
  data?: Record<string, any>
  domainId?: string
  environmentId?: string
  id?: string
  organizationId?: string
  type?: string
  updatedAt?: string
}

export interface Environment {
  apiKeys?: any[]
  bridge?: Record<string, any>
  color: string
  dns?: Record<string, any>
  id: string
  identifier: string
  name: string
  organizationId: string
  parentId?: string
  slug?: string
  type?: string
}

export interface EnvironmentListMatch {
  apiKeys?: any[]
  bridge?: Record<string, any>
  color?: string
  dns?: Record<string, any>
  id?: string
  identifier?: string
  name?: string
  organizationId?: string
  parentId?: string
  slug?: string
  type?: string
}

export interface EnvironmentCreateData {
  apiKeys?: any[]
  bridge?: Record<string, any>
  color: string
  dns?: Record<string, any>
  id: string
  identifier: string
  name: string
  organizationId: string
  parentId?: string
  slug?: string
  type?: string
}

export interface EnvironmentUpdateData {
  id: string
  apiKeys?: any[]
  bridge?: Record<string, any>
  color?: string
  dns?: Record<string, any>
  identifier?: string
  name?: string
  organizationId?: string
  parentId?: string
  slug?: string
  type?: string
}

export interface EnvironmentRemoveMatch {
  id: string
}

export interface EnvironmentTagsDto {
  id?: string
}

export interface EnvironmentTagsDtoListMatch {
  id: string

  // Selects a custom action instead of the plain list:
  //   'tags'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EnvironmentVariable {
  createdAt: string
  id: string
  isSecret: boolean
  key: string
  organizationId: string
  type: string
  updatedAt: string
  values: any[]
}

export interface EnvironmentVariableLoadMatch {
  id: string
}

export interface EnvironmentVariableListMatch {
  search?: string
}

export interface EnvironmentVariableCreateData {
  createdAt: string
  id: string
  isSecret: boolean
  key: string
  organizationId: string
  type: string
  updatedAt: string
  values: any[]
}

export interface EnvironmentVariableUpdateData {
  id: string
  createdAt?: string
  isSecret?: boolean
  key?: string
  organizationId?: string
  type?: string
  updatedAt?: string
  values?: any[]
}

export interface EnvironmentVariableRemoveMatch {
  id: string
}

export interface EnvironmentVariableWorkflowInfoDto {
  name: string
  workflowId: string
}

export interface EnvironmentVariableWorkflowInfoDtoListMatch {
  variable_key: string
}

export interface Event {
  actor?: any
  agentId?: string
  bridgeUrl?: string
  context?: Record<string, any>
  name: string
  overrides?: any
  payload?: Record<string, any>
  tenant?: any
  to: any
  transactionId?: string
}

export interface EventCreateData {
  actor?: any
  agentId?: string
  bridgeUrl?: string
  context?: Record<string, any>
  name: string
  overrides?: any
  payload?: Record<string, any>
  tenant?: any
  to: any
  transactionId?: string
}

export interface EventRemoveMatch {
  transaction_id: string
}

export interface GenerateChatOAuthUrlResponseDto {
  autoLinkUser?: boolean
  connectionIdentifier?: string
  connectionMode?: string
  context?: Record<string, any>
  contextHash?: string
  integrationIdentifier: string
  mode?: string
  scope?: any[]
  subscriberId?: string
  userScope?: any[]
}

export interface GenerateChatOAuthUrlResponseDtoCreateData {
  autoLinkUser?: boolean
  connectionIdentifier?: string
  connectionMode?: string
  context?: Record<string, any>
  contextHash?: string
  integrationIdentifier: string
  mode?: string
  scope?: any[]
  subscriberId?: string
  userScope?: any[]
}

export interface GeneratePreviewResponseDto {
  controlValues?: Record<string, any>
  previewPayload?: any
}

export interface GeneratePreviewResponseDtoCreateData {
  step_id: string
  workflow_id: string
  controlValues?: Record<string, any>
  previewPayload?: any
}

export interface ImportMasterJsonResponseDto {
  failed?: any[]
  locale: string
  masterJson: Record<string, any>
  message: string
  success: boolean
  successful?: any[]
}

export interface ImportMasterJsonResponseDtoCreateData {
  failed?: any[]
  locale: string
  masterJson: Record<string, any>
  message: string
  success: boolean
  successful?: any[]
}

export interface InboxNotificationDto {
  archivedAt?: string
  avatar?: string
  body: string
  channelType: string
  createdAt: string
  data?: Record<string, any>
  deliveredAt?: any[]
  firstSeenAt?: string
  id: string
  isArchived: boolean
  isRead: boolean
  isSeen: boolean
  isSnoozed: boolean
  primaryAction?: any
  readAt?: string
  redirect?: any
  secondaryAction?: any
  severity: string
  snoozeUntil: string
  snoozedUntil?: string
  subject?: string
  tags?: any[]
  to: any
  transactionId: string
  workflow?: any
}

export interface InboxNotificationDtoUpdateData {
  action_type?: string
  notification_id: string
  subscriber_id: string
  context_key?: any[]
  archivedAt?: string
  avatar?: string
  body?: string
  channelType?: string
  createdAt?: string
  data?: Record<string, any>
  deliveredAt?: any[]
  firstSeenAt?: string
  id?: string
  isArchived?: boolean
  isRead?: boolean
  isSeen?: boolean
  isSnoozed?: boolean
  primaryAction?: any
  readAt?: string
  redirect?: any
  secondaryAction?: any
  severity?: string
  snoozeUntil?: string
  snoozedUntil?: string
  subject?: string
  tags?: any[]
  to?: any
  transactionId?: string
  workflow?: any
}

export interface Integration {
  active?: boolean
  channel?: string
  check?: boolean
  conditions?: any[]
  configurations?: Record<string, any>
  credentials?: any
  deleted: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId?: string
  id?: string
  identifier?: string
  kind?: string
  name?: string
  organizationId: string
  primary: boolean
  providerId?: string
  rules?: Record<string, any>
}

export interface IntegrationListMatch {
  active?: boolean
  channel?: string
  check?: boolean
  conditions?: any[]
  configurations?: Record<string, any>
  credentials?: any
  deleted?: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId?: string
  id?: string
  identifier?: string
  kind?: string
  name?: string
  organizationId?: string
  primary?: boolean
  providerId?: string
  rules?: Record<string, any>
}

export interface IntegrationCreateData {
  active?: boolean
  channel?: string
  check?: boolean
  conditions?: any[]
  configurations?: Record<string, any>
  credentials?: any
  deleted: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId?: string
  id?: string
  identifier?: string
  kind?: string
  name?: string
  organizationId: string
  primary: boolean
  providerId?: string
  rules?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'auto_configure' | 'mobile_link'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationUpdateData {
  id: string
  active?: boolean
  channel?: string
  check?: boolean
  conditions?: any[]
  configurations?: Record<string, any>
  credentials?: any
  deleted?: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId?: string
  identifier?: string
  kind?: string
  name?: string
  organizationId?: string
  primary?: boolean
  providerId?: string
  rules?: Record<string, any>
}

export interface IntegrationRemoveMatch {
  id: string
}

export interface IntegrationResponseDto {
  active: boolean
  channel?: string
  conditions?: any[]
  configurations?: any
  credentials?: any
  deleted: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId: string
  id?: string
  identifier: string
  kind?: string
  name: string
  organizationId: string
  primary: boolean
  providerId: string
  rules?: Record<string, any>
}

export interface IntegrationResponseDtoListMatch {
  active?: boolean
  channel?: string
  conditions?: any[]
  configurations?: any
  credentials?: any
  deleted?: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId?: string
  id?: string
  identifier?: string
  kind?: string
  name?: string
  organizationId?: string
  primary?: boolean
  providerId?: string
  rules?: Record<string, any>
}

export interface IntegrationResponseDtoCreateData {
  id: string
  active: boolean
  channel?: string
  conditions?: any[]
  configurations?: any
  credentials?: any
  deleted: boolean
  deletedAt?: string
  deletedBy?: string
  environmentId: string
  identifier: string
  kind?: string
  name: string
  organizationId: string
  primary: boolean
  providerId: string
  rules?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'set-primary'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Layout {
  controlValues?: any
  controls: any
  createdAt: string
  id: string
  isDefault: boolean
  isTranslationEnabled: boolean
  layoutId: string
  name: string
  origin: string
  slug: string
  source?: string
  type: string
  updatedAt: string
  updatedBy?: any
  variables?: Record<string, any>
}

export interface LayoutLoadMatch {
  id: string
}

export interface LayoutListMatch {
  limit?: number
  offset?: number
  order_by?: string
  order_direction?: string
  query?: string
}

export interface LayoutCreateData {
  controlValues?: any
  controls: any
  createdAt: string
  id: string
  isDefault: boolean
  isTranslationEnabled: boolean
  layoutId: string
  name: string
  origin: string
  slug: string
  source?: string
  type: string
  updatedAt: string
  updatedBy?: any
  variables?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'preview'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface LayoutUpdateData {
  id: string
  controlValues?: any
  controls?: any
  createdAt?: string
  isDefault?: boolean
  isTranslationEnabled?: boolean
  layoutId?: string
  name?: string
  origin?: string
  slug?: string
  source?: string
  type?: string
  updatedAt?: string
  updatedBy?: any
  variables?: Record<string, any>
}

export interface LayoutRemoveMatch {
  id: string
}

export interface LayoutResponseDto {
  id?: string
}

export interface LayoutResponseDtoCreateData {
  id: string

  // Selects a custom action instead of the plain create:
  //   'duplicate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Link {
  context?: Record<string, any>
  contextHash?: string
  integrationIdentifier: string
  subscriberId: string
}

export interface LinkCreateData {
  context?: Record<string, any>
  contextHash?: string
  integrationIdentifier: string
  subscriberId: string
}

export interface ListAgentIntegrationsResponseDto {
  agentId: string
  connectedAt?: Record<string, any>
  createdAt: string
  environmentId: string
  exceedsPlanLimit?: boolean
  id: string
  integration: Record<string, any>
  organizationId: string
  updatedAt: string
}

export interface ListAgentIntegrationsResponseDtoListMatch {
  identifier: string
  after?: string
  before?: string
  include_cursor?: boolean
  integration_identifier?: string
  limit?: number
  order_by?: string
  order_direction?: string
}

export interface ListDomainRoutesResponseDto {
  address: string
  agentId?: string
  createdAt: string
  data?: Record<string, any>
  domainId: string
  environmentId: string
  id: string
  organizationId: string
  type: string
  updatedAt: string
}

export interface ListDomainRoutesResponseDtoListMatch {
  domain_id: string
  after?: string
  agent_id?: string
  before?: string
  include_cursor?: boolean
  limit?: number
  order_by?: string
  order_direction?: string
}

export interface ListTopicSubscriptionsResponseDto {
  contextKeys?: any[]
  createdAt: string
  id: string
  identifier: string
  preferences?: any[]
  subscriber: any
  topic: any
}

export interface ListTopicSubscriptionsResponseDtoListMatch {
  subscriber_id: string
  after?: string
  before?: string
  context_key?: any[]
  include_cursor?: boolean
  key?: string
  limit?: number
  order_by?: string
  order_direction?: string
}

export interface MasterJson {
  layouts: Record<string, any>
  workflows: Record<string, any>
}

export interface MasterJsonLoadMatch {
  locale?: string
}

export interface Message {
  channel: string
  content?: any
  contextKeys?: any[]
  createdAt: string
  cta: any
  deliveredAt?: any[]
  deviceTokens?: any[]
  directWebhookUrl?: string
  email?: string
  environmentId: string
  errorId?: string
  errorText?: string
  feedId?: string
  id?: string
  lastReadDate?: string
  lastSeenDate?: string
  messageTemplateId?: string
  notificationId: string
  organizationId: string
  overrides?: Record<string, any>
  payload?: Record<string, any>
  phone?: string
  providerId?: string
  read: boolean
  seen: boolean
  snoozedUntil?: string
  status: string
  subject?: string
  subscriber?: any
  subscriberId: string
  template?: any
  templateId?: string
  templateIdentifier?: string
  title?: string
  transactionId: string
}

export interface MessageListMatch {
  channel?: string
  context_key?: any[]
  limit?: number
  page?: number
  subscriber_id?: string
  transaction_id?: any[]
}

export interface MessageRemoveMatch {
  id: string
}

export interface MessageResponseDto {
  markAs: string
  messageId: any
  payload?: Record<string, any>
  status: string
}

export interface MessageResponseDtoCreateData {
  message_id?: string
  subscriber_id: string
  type?: any
  markAs: string
  messageId: any
  payload?: Record<string, any>
  status: string
}

export interface NotificationFeedItemDto {
  actor?: any
  archived: boolean
  channel: string
  content: string
  createdAt?: string
  cta: any
  data?: Record<string, any>
  deviceTokens?: any[]
  environmentId: string
  feedId?: string
  id: string
  jobId: string
  messageTemplateId?: string
  notificationId: string
  organizationId: string
  overrides?: Record<string, any>
  payload?: Record<string, any>
  providerId?: string
  read: boolean
  seen: boolean
  status: string
  subject?: string
  subscriber?: any
  subscriberId: string
  tags?: any[]
  templateId: string
  templateIdentifier?: string
  transactionId: string
  updatedAt?: string
}

export interface NotificationFeedItemDtoListMatch {
  subscriber_id: string
  limit?: number
  page?: number
  payload?: string
  read?: boolean
  seen?: boolean
}

export interface PreferencesResponseDto {
  context?: Record<string, any>
  preferences: any[]
}

export interface PreferencesResponseDtoUpdateData {
  subscriber_id: string
  context?: Record<string, any>
  preferences?: any[]
}

export interface Publish {
  dryRun?: boolean
  resources?: any[]
  results: any[]
  sourceEnvironmentId?: string
  summary: any
}

export interface PublishCreateData {
  environment_id: string
  dryRun?: boolean
  resources?: any[]
  results: any[]
  sourceEnvironmentId?: string
  summary: any
}

export interface RemoveSubscriberResponseDto {
}

export interface RemoveSubscriberResponseDtoRemoveMatch {
  subscriber_id: string
}

export interface Step {
  controlValues?: Record<string, any>
  controls: any
  id: string
  issues?: any
  name: string
  origin: string
  providerOverrides?: Record<string, any>
  slug: string
  stepId: string
  stepResolverHash?: string
  type: string
  variables: Record<string, any>
  workflowDatabaseId: string
  workflowId: string
}

export interface StepLoadMatch {
  id: string
  workflow_id: string
}

export interface Subscriber {
  avatar?: string
  channels?: any[]
  createdAt: string
  data?: Record<string, any>
  deleted: boolean
  email?: string
  environmentId: string
  firstName?: string
  id?: string
  isOnline?: boolean
  lastName?: string
  lastOnlineAt?: string
  locale?: string
  organizationId: string
  phone?: string
  subscriberId: string
  timezone?: string
  topics?: any[]
  updatedAt: string
  v?: number
}

export interface SubscriberLoadMatch {
  id: string
}

export interface SubscriberListMatch {
  after?: string
  before?: string
  email?: string
  include_cursor?: boolean
  limit?: number
  name?: string
  order_by?: string
  order_direction?: string
  phone?: string
  subscriber_id?: string
}

export interface SubscriberCreateData {
  fail_if_exist?: boolean
  avatar?: string
  channels?: any[]
  createdAt: string
  data?: Record<string, any>
  deleted: boolean
  email?: string
  environmentId: string
  firstName?: string
  id?: string
  isOnline?: boolean
  lastName?: string
  lastOnlineAt?: string
  locale?: string
  organizationId: string
  phone?: string
  subscriberId: string
  timezone?: string
  topics?: any[]
  updatedAt: string
  v?: number

  // Selects a custom action instead of the plain create:
  //   'message_mark_all' | 'notification_archive' | 'notification_delete' | 'notification_read' | 'notification_read_archive' | 'notification_seen'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriberUpdateData {
  id: string
  avatar?: string
  channels?: any[]
  createdAt?: string
  data?: Record<string, any>
  deleted?: boolean
  email?: string
  environmentId?: string
  firstName?: string
  isOnline?: boolean
  lastName?: string
  lastOnlineAt?: string
  locale?: string
  organizationId?: string
  phone?: string
  subscriberId?: string
  timezone?: string
  topics?: any[]
  updatedAt?: string
  v?: number
}

export interface SubscriberRemoveMatch {
  id: string
  notification_id?: string
  context_key?: any[]
  provider_id?: string
}

export interface SubscriberNotificationsCountResponseDto {
  count: number
  filter: Record<string, any>
}

export interface SubscriberNotificationsCountResponseDtoListMatch {
  subscriber_id: string
  filter: string
}

export interface SubscriberNotificationsResponseDto {
  id?: string
}

export interface SubscriberNotificationsResponseDtoListMatch {
  id: string
  after?: string
  archived?: boolean
  context_key?: any[]
  created_gte?: number
  created_lte?: number
  data?: string
  limit?: number
  offset?: number
  read?: boolean
  seen?: boolean
  severity?: any[]
  snoozed?: boolean

  // Selects a custom action instead of the plain list:
  //   'notifications'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriberPreferencesDto {
  id?: string
}

export interface SubscriberPreferencesDtoListMatch {
  id: string
  context_key?: any[]
  criticality?: string

  // Selects a custom action instead of the plain list:
  //   'preferences'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriberPreferencesDtoUpdateData {
  id: string

  // Selects a custom action instead of the plain update:
  //   'preferences'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriberResponseDto {
  avatar?: string
  channels?: any[]
  createdAt: string
  data?: Record<string, any>
  deleted: boolean
  email?: string
  environmentId: string
  firstName?: string
  id?: string
  isOnline?: boolean
  lastName?: string
  lastOnlineAt?: string
  locale?: string
  organizationId: string
  phone?: string
  subscriberId: string
  timezone?: string
  topics?: any[]
  updatedAt: string
  v?: number
}

export interface SubscriberResponseDtoUpdateData {
  id: string
  avatar?: string
  channels?: any[]
  createdAt?: string
  data?: Record<string, any>
  deleted?: boolean
  email?: string
  environmentId?: string
  firstName?: string
  isOnline?: boolean
  lastName?: string
  lastOnlineAt?: string
  locale?: string
  organizationId?: string
  phone?: string
  subscriberId?: string
  timezone?: string
  topics?: any[]
  updatedAt?: string
  v?: number

  // Selects a custom action instead of the plain update:
  //   'credentials' | 'credentials' | 'online-status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Subscription {
  contextKeys?: any[]
  createdAt: string
  id: string
  identifier?: string
  name?: string
  preferences?: any[]
  subscriber: any
  topic: any
  updatedAt: string
}

export interface SubscriptionLoadMatch {
  id: string
  topic_id: string
}

export interface SubscriptionUpdateData {
  id: string
  topic_id: string
  contextKeys?: any[]
  createdAt?: string
  identifier?: string
  name?: string
  preferences?: any[]
  subscriber?: any
  topic?: any
  updatedAt?: string
}

export interface Topic {
  createdAt?: string
  data?: Record<string, any>
  id: string
  key: string
  name?: string
  updatedAt?: string
}

export interface TopicLoadMatch {
  id: string
}

export interface TopicListMatch {
  after?: string
  before?: string
  include_cursor?: boolean
  key?: string
  limit?: number
  name?: string
  order_by?: string
  order_direction?: string
}

export interface TopicCreateData {
  fail_if_exist?: boolean
  createdAt?: string
  data?: Record<string, any>
  id: string
  key: string
  name?: string
  updatedAt?: string
}

export interface TopicUpdateData {
  id: string
  createdAt?: string
  data?: Record<string, any>
  key?: string
  name?: string
  updatedAt?: string
}

export interface TopicRemoveMatch {
  id: string
}

export interface TopicSubscriberDto {
  environmentId: string
  externalSubscriberId: string
  organizationId: string
  subscriberId: string
  topicId: string
  topicKey: string
}

export interface TopicSubscriberDtoLoadMatch {
  external_subscriber_id: string
  topic_id: string
}

export interface TopicSubscriptionsResponseDto {
}

export interface TopicSubscriptionsResponseDtoRemoveMatch {
  topic_key: string
}

export interface Translation {
  content: Record<string, any>
  createdAt: string
  id?: string
  locale: string
  resourceId: string
  resourceType: string
  updatedAt: string
}

export interface TranslationLoadMatch {
  locale: string
  resource_id: string
  resource_type: string
}

export interface TranslationCreateData {
  content: Record<string, any>
  createdAt: string
  id?: string
  locale: string
  resourceId: string
  resourceType: string
  updatedAt: string
}

export interface TranslationRemoveMatch {
  locale?: string
  resource_id: string
  resource_type: string
}

export interface TranslationGroupDto {
  createdAt: string
  id?: string
  locales: any[]
  outdatedLocales?: any[]
  resourceId: string
  resourceName: string
  resourceType: string
  updatedAt: string
}

export interface TranslationGroupDtoLoadMatch {
  resource_id: string
  resource_type: string
}

export interface TriggerEventResponseDto {
  acknowledged: boolean
  activityFeedLink?: string
  actor?: any
  agentId?: string
  context?: Record<string, any>
  error?: any[]
  events: any[]
  jobData?: Record<string, any>
  name: string
  overrides?: any
  payload: Record<string, any>
  status: string
  tenant?: any
  transactionId?: string
}

export interface TriggerEventResponseDtoCreateData {
  acknowledged: boolean
  activityFeedLink?: string
  actor?: any
  agentId?: string
  context?: Record<string, any>
  error?: any[]
  events: any[]
  jobData?: Record<string, any>
  name: string
  overrides?: any
  payload: Record<string, any>
  status: string
  tenant?: any
  transactionId?: string
}

export interface Unseen {
  count: number
}

export interface UnseenLoadMatch {
  subscriber_id: string
  limit?: number
  seen?: boolean
}

export interface Upload {
  errors: any[]
  failedUploads: number
  successfulUploads: number
  totalFiles: number
}

export interface UploadCreateData {
  errors: any[]
  failedUploads: number
  successfulUploads: number
  totalFiles: number
}

export interface WebhookResultDto {
}

export interface WebhookResultDtoCreateData {
  environment_id: string
  integration_id: string
}

export interface Workflow {
  active?: boolean
  agent?: any
  createdAt: string
  description?: string
  id: string
  isTranslationEnabled?: boolean
  issues?: Record<string, any>
  lastPublishedAt?: string
  lastPublishedBy?: any
  lastTriggeredAt?: string
  name: string
  origin: string
  payloadExample?: Record<string, any>
  payloadSchema?: Record<string, any>
  preferences: any
  severity: string
  slug: string
  source?: string
  status: string
  stepTypeOverviews: any[]
  steps: any[]
  tags?: any[]
  updatedAt: string
  updatedBy?: any
  validatePayload?: boolean
  workflowId: string
}

export interface WorkflowLoadMatch {
  id: string
  environment_id?: string
}

export interface WorkflowListMatch {
  limit?: number
  offset?: number
  order_by?: string
  order_direction?: string
  query?: string
  status?: any[]
  tag?: any[]
}

export interface WorkflowCreateData {
  active?: boolean
  agent?: any
  createdAt: string
  description?: string
  id: string
  isTranslationEnabled?: boolean
  issues?: Record<string, any>
  lastPublishedAt?: string
  lastPublishedBy?: any
  lastTriggeredAt?: string
  name: string
  origin: string
  payloadExample?: Record<string, any>
  payloadSchema?: Record<string, any>
  preferences: any
  severity: string
  slug: string
  source?: string
  status: string
  stepTypeOverviews: any[]
  steps: any[]
  tags?: any[]
  updatedAt: string
  updatedBy?: any
  validatePayload?: boolean
  workflowId: string
}

export interface WorkflowUpdateData {
  id: string
  active?: boolean
  agent?: any
  createdAt?: string
  description?: string
  isTranslationEnabled?: boolean
  issues?: Record<string, any>
  lastPublishedAt?: string
  lastPublishedBy?: any
  lastTriggeredAt?: string
  name?: string
  origin?: string
  payloadExample?: Record<string, any>
  payloadSchema?: Record<string, any>
  preferences?: any
  severity?: string
  slug?: string
  source?: string
  status?: string
  stepTypeOverviews?: any[]
  steps?: any[]
  tags?: any[]
  updatedAt?: string
  updatedBy?: any
  validatePayload?: boolean
  workflowId?: string
}

export interface WorkflowRemoveMatch {
  id: string
}

export interface WorkflowInfoDto {
  name: string
  workflowId: string
}

export interface WorkflowInfoDtoListMatch {
  layout_id: string
}

export interface WorkflowResponseDto {
  active?: boolean
  agent?: any
  createdAt: string
  description?: string
  id: string
  isTranslationEnabled?: boolean
  issues?: Record<string, any>
  lastPublishedAt?: string
  lastPublishedBy?: any
  lastTriggeredAt?: string
  name: string
  origin: string
  payloadExample?: Record<string, any>
  payloadSchema?: Record<string, any>
  preferences: any
  severity: string
  slug: string
  status: string
  steps: any[]
  tags?: any[]
  updatedAt: string
  updatedBy?: any
  validatePayload?: boolean
  workflowId: string
}

export interface WorkflowResponseDtoUpdateData {
  id: string
  active?: boolean
  agent?: any
  createdAt?: string
  description?: string
  isTranslationEnabled?: boolean
  issues?: Record<string, any>
  lastPublishedAt?: string
  lastPublishedBy?: any
  lastTriggeredAt?: string
  name?: string
  origin?: string
  payloadExample?: Record<string, any>
  payloadSchema?: Record<string, any>
  preferences?: any
  severity?: string
  slug?: string
  status?: string
  steps?: any[]
  tags?: any[]
  updatedAt?: string
  updatedBy?: any
  validatePayload?: boolean
  workflowId?: string

  // Selects a custom action instead of the plain update:
  //   'sync'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

