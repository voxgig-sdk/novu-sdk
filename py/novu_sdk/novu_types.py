# Typed models for the Novu SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActivityNotificationResponseDtoRequired(TypedDict):
    environmentId: str
    organizationId: str
    subscriberId: str
    transactionId: str


class ActivityNotificationResponseDto(ActivityNotificationResponseDtoRequired, total=False):
    channels: list
    contextKeys: list
    controls: dict
    createdAt: str
    critical: bool
    digestedNotificationId: str
    id: str
    jobs: list
    payload: dict
    severity: str
    subscriber: Any
    tags: list
    template: Any
    templateId: str
    to: dict
    topics: list
    updatedAt: str


class ActivityNotificationResponseDtoLoadMatch(TypedDict):
    notification_id: str


class ActivityNotificationResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    channel: list
    context_key: list
    email: list
    limit: float
    page: float
    search: str
    severity: list
    subscriber_id: list
    subscription_id: str
    template: list
    topic_key: str
    transaction_id: str


class AgentRequired(TypedDict):
    active: bool
    behavior: dict
    createdAt: str
    environmentId: str
    id: str
    identifier: str
    name: str
    organizationId: str
    updatedAt: str


class Agent(AgentRequired, total=False):
    bridgeUrl: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    exceedsPlanLimit: bool
    integrations: list
    managedRuntime: Any
    runtime: str
    visibility: str


class AgentLoadMatch(TypedDict):
    id: str


class AgentCreateDataRequired(TypedDict):
    active: bool
    behavior: dict
    createdAt: str
    environmentId: str
    id: str
    identifier: str
    name: str
    organizationId: str
    updatedAt: str


class AgentCreateData(AgentCreateDataRequired, total=False):
    bridgeUrl: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    exceedsPlanLimit: bool
    integrations: list
    managedRuntime: Any
    runtime: str
    visibility: str


class AgentUpdateDataRequired(TypedDict):
    id: str


class AgentUpdateData(AgentUpdateDataRequired, total=False):
    active: bool
    behavior: dict
    bridgeUrl: str
    createdAt: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    environmentId: str
    exceedsPlanLimit: bool
    identifier: str
    integrations: list
    managedRuntime: Any
    name: str
    organizationId: str
    runtime: str
    updatedAt: str
    visibility: str


class AgentRemoveMatch(TypedDict):
    id: str
    delete_from_provider: str


class AgentIntegrationResponseDtoRequired(TypedDict):
    agentId: str
    createdAt: str
    environmentId: str
    id: str
    integration: dict
    organizationId: str
    updatedAt: str


class AgentIntegrationResponseDto(AgentIntegrationResponseDtoRequired, total=False):
    connectedAt: dict
    exceedsPlanLimit: bool
    integrationIdentifier: str
    providerId: str


class AgentIntegrationResponseDtoCreateDataRequired(TypedDict):
    identifier: str
    agentId: str
    createdAt: str
    environmentId: str
    id: str
    integration: dict
    organizationId: str
    updatedAt: str


class AgentIntegrationResponseDtoCreateData(AgentIntegrationResponseDtoCreateDataRequired, total=False):
    connectedAt: dict
    exceedsPlanLimit: bool
    integrationIdentifier: str
    providerId: str


class AgentIntegrationResponseDtoUpdateDataRequired(TypedDict):
    agent_id: str
    agent_integration_id: str


class AgentIntegrationResponseDtoUpdateData(AgentIntegrationResponseDtoUpdateDataRequired, total=False):
    agentId: str
    connectedAt: dict
    createdAt: str
    environmentId: str
    exceedsPlanLimit: bool
    id: str
    integration: dict
    integrationIdentifier: str
    organizationId: str
    providerId: str
    updatedAt: str


class AgentResponseDtoRequired(TypedDict):
    active: bool
    behavior: dict
    createdAt: str
    environmentId: str
    id: str
    identifier: str
    name: str
    organizationId: str
    updatedAt: str


class AgentResponseDto(AgentResponseDtoRequired, total=False):
    bridgeUrl: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    exceedsPlanLimit: bool
    integrations: list
    managedRuntime: Any
    runtime: str
    visibility: str


class AgentResponseDtoUpdateDataRequired(TypedDict):
    identifier: str


class AgentResponseDtoUpdateData(AgentResponseDtoUpdateDataRequired, total=False):
    active: bool
    behavior: dict
    bridgeUrl: str
    createdAt: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    environmentId: str
    exceedsPlanLimit: bool
    id: str
    integrations: list
    managedRuntime: Any
    name: str
    organizationId: str
    runtime: str
    updatedAt: str
    visibility: str


class Bulk(TypedDict):
    subscribers: list


class BulkCreateData(TypedDict):
    subscribers: list


class ChannelConnectionRequired(TypedDict):
    auth: dict
    channel: str
    contextKeys: list
    createdAt: str
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    updatedAt: str
    workspace: dict


class ChannelConnection(ChannelConnectionRequired, total=False):
    connectionMode: str
    context: dict
    id: str


class ChannelConnectionLoadMatch(TypedDict):
    id: str


class ChannelConnectionCreateDataRequired(TypedDict):
    auth: dict
    channel: str
    contextKeys: list
    createdAt: str
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    updatedAt: str
    workspace: dict


class ChannelConnectionCreateData(ChannelConnectionCreateDataRequired, total=False):
    connectionMode: str
    context: dict
    id: str


class ChannelConnectionUpdateDataRequired(TypedDict):
    id: str


class ChannelConnectionUpdateData(ChannelConnectionUpdateDataRequired, total=False):
    auth: dict
    channel: str
    connectionMode: str
    context: dict
    contextKeys: list
    createdAt: str
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    updatedAt: str
    workspace: dict


class ChannelConnectionRemoveMatch(TypedDict):
    id: str


class ChannelEndpointRequired(TypedDict):
    channel: str
    connectionIdentifier: str
    contextKeys: list
    createdAt: str
    endpoint: Any
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    type: str
    updatedAt: str


class ChannelEndpoint(ChannelEndpointRequired, total=False):
    id: str


class ChannelEndpointLoadMatch(TypedDict):
    id: str


class ChannelEndpointCreateDataRequired(TypedDict):
    channel: str
    connectionIdentifier: str
    contextKeys: list
    createdAt: str
    endpoint: Any
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    type: str
    updatedAt: str


class ChannelEndpointCreateData(ChannelEndpointCreateDataRequired, total=False):
    id: str


class ChannelEndpointUpdateDataRequired(TypedDict):
    id: str


class ChannelEndpointUpdateData(ChannelEndpointUpdateDataRequired, total=False):
    channel: str
    connectionIdentifier: str
    contextKeys: list
    createdAt: str
    endpoint: Any
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    type: str
    updatedAt: str


class ChannelEndpointRemoveMatch(TypedDict):
    id: str


class Configure(TypedDict):
    botUsername: str
    configuredAt: str
    webhookUrl: str


class ConfigureCreateData(TypedDict):
    integration_id: str
    botUsername: str
    configuredAt: str
    webhookUrl: str


class ContextRequired(TypedDict):
    id: str
    type: str


class Context(ContextRequired, total=False):
    bridgeUrl: str
    data: dict


class ContextLoadMatch(TypedDict):
    id: str
    type: str


class ContextCreateDataRequired(TypedDict):
    id: str
    type: str


class ContextCreateData(ContextCreateDataRequired, total=False):
    bridgeUrl: str
    data: dict


class ContextUpdateDataRequired(TypedDict):
    id: str
    type: str


class ContextUpdateData(ContextUpdateDataRequired, total=False):
    bridgeUrl: str
    data: dict


class ContextRemoveMatch(TypedDict):
    id: str
    type: str


class CreateSubscriptionsResponseDto(TypedDict, total=False):
    context: dict
    name: str
    preferences: list
    subscriberIds: list
    subscriptions: list


class CreateSubscriptionsResponseDtoCreateDataRequired(TypedDict):
    topic_key: str


class CreateSubscriptionsResponseDtoCreateData(CreateSubscriptionsResponseDtoCreateDataRequired, total=False):
    context: dict
    name: str
    preferences: list
    subscriberIds: list
    subscriptions: list


class Diff(TypedDict):
    resources: list
    sourceEnvironmentId: str
    summary: Any
    targetEnvironmentId: str


class DiffCreateData(TypedDict):
    environment_id: str
    resources: list
    sourceEnvironmentId: str
    summary: Any
    targetEnvironmentId: str


class DomainRequired(TypedDict):
    createdAt: str
    environmentId: str
    id: str
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class Domain(DomainRequired, total=False):
    data: dict
    dnsProvider: str
    expectedDnsRecords: list


class DomainLoadMatch(TypedDict):
    id: str


class DomainCreateDataRequired(TypedDict):
    createdAt: str
    environmentId: str
    id: str
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class DomainCreateData(DomainCreateDataRequired, total=False):
    data: dict
    dnsProvider: str
    expectedDnsRecords: list


class DomainUpdateDataRequired(TypedDict):
    id: str


class DomainUpdateData(DomainUpdateDataRequired, total=False):
    createdAt: str
    data: dict
    dnsProvider: str
    environmentId: str
    expectedDnsRecords: list
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class DomainRemoveMatchRequired(TypedDict):
    id: str


class DomainRemoveMatch(DomainRemoveMatchRequired, total=False):
    address: str


class DomainConnectApplyUrlResponseDto(TypedDict, total=False):
    redirectUri: str


class DomainConnectApplyUrlResponseDtoCreateDataRequired(TypedDict):
    domain_id: str


class DomainConnectApplyUrlResponseDtoCreateData(DomainConnectApplyUrlResponseDtoCreateDataRequired, total=False):
    redirectUri: str


class DomainConnectStatusResponseDto(TypedDict, total=False):
    id: str


class DomainConnectStatusResponseDtoListMatch(TypedDict):
    id: str


class DomainResponseDtoRequired(TypedDict):
    createdAt: str
    environmentId: str
    id: str
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class DomainResponseDto(DomainResponseDtoRequired, total=False):
    data: dict
    dnsProvider: str
    expectedDnsRecords: list


class DomainResponseDtoCreateDataRequired(TypedDict):
    id: str
    createdAt: str
    environmentId: str
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class DomainResponseDtoCreateData(DomainResponseDtoCreateDataRequired, total=False):
    data: dict
    dnsProvider: str
    expectedDnsRecords: list


class DomainRouteResponseDto(TypedDict, total=False):
    agentId: str
    data: dict
    id: str
    type: str


class DomainRouteResponseDtoLoadMatch(TypedDict):
    address: str
    domain_id: str


class DomainRouteResponseDtoCreateDataRequired(TypedDict):
    id: str


class DomainRouteResponseDtoCreateData(DomainRouteResponseDtoCreateDataRequired, total=False):
    agentId: str
    data: dict
    type: str


class DomainRouteResponseDtoUpdateDataRequired(TypedDict):
    address: str
    domain_id: str


class DomainRouteResponseDtoUpdateData(DomainRouteResponseDtoUpdateDataRequired, total=False):
    agentId: str
    data: dict
    id: str
    type: str


class EnvironmentRequired(TypedDict):
    color: str
    id: str
    identifier: str
    name: str
    organizationId: str


class Environment(EnvironmentRequired, total=False):
    apiKeys: list
    bridge: dict
    dns: dict
    parentId: str
    slug: str
    type: str


class EnvironmentListMatch(TypedDict, total=False):
    apiKeys: list
    bridge: dict
    color: str
    dns: dict
    id: str
    identifier: str
    name: str
    organizationId: str
    parentId: str
    slug: str
    type: str


class EnvironmentCreateDataRequired(TypedDict):
    color: str
    id: str
    identifier: str
    name: str
    organizationId: str


class EnvironmentCreateData(EnvironmentCreateDataRequired, total=False):
    apiKeys: list
    bridge: dict
    dns: dict
    parentId: str
    slug: str
    type: str


class EnvironmentUpdateDataRequired(TypedDict):
    id: str


class EnvironmentUpdateData(EnvironmentUpdateDataRequired, total=False):
    apiKeys: list
    bridge: dict
    color: str
    dns: dict
    identifier: str
    name: str
    organizationId: str
    parentId: str
    slug: str
    type: str


class EnvironmentRemoveMatch(TypedDict):
    id: str


class EnvironmentTagsDto(TypedDict, total=False):
    id: str


class EnvironmentTagsDtoListMatch(TypedDict):
    id: str


class EnvironmentVariable(TypedDict):
    createdAt: str
    id: str
    isSecret: bool
    key: str
    organizationId: str
    type: str
    updatedAt: str
    values: list


class EnvironmentVariableLoadMatch(TypedDict):
    id: str


class EnvironmentVariableListMatch(TypedDict, total=False):
    search: str


class EnvironmentVariableCreateData(TypedDict):
    createdAt: str
    id: str
    isSecret: bool
    key: str
    organizationId: str
    type: str
    updatedAt: str
    values: list


class EnvironmentVariableUpdateDataRequired(TypedDict):
    id: str


class EnvironmentVariableUpdateData(EnvironmentVariableUpdateDataRequired, total=False):
    createdAt: str
    isSecret: bool
    key: str
    organizationId: str
    type: str
    updatedAt: str
    values: list


class EnvironmentVariableRemoveMatch(TypedDict):
    id: str


class EnvironmentVariableWorkflowInfoDto(TypedDict):
    name: str
    workflowId: str


class EnvironmentVariableWorkflowInfoDtoListMatch(TypedDict):
    variable_key: str


class Event(TypedDict):
    pass


class EventRemoveMatch(TypedDict):
    transaction_id: str


class GenerateChatOAuthUrlResponseDtoRequired(TypedDict):
    integrationIdentifier: str


class GenerateChatOAuthUrlResponseDto(GenerateChatOAuthUrlResponseDtoRequired, total=False):
    autoLinkUser: bool
    connectionIdentifier: str
    connectionMode: str
    context: dict
    contextHash: str
    mode: str
    scope: list
    subscriberId: str
    userScope: list


class GenerateChatOAuthUrlResponseDtoCreateDataRequired(TypedDict):
    integrationIdentifier: str


class GenerateChatOAuthUrlResponseDtoCreateData(GenerateChatOAuthUrlResponseDtoCreateDataRequired, total=False):
    autoLinkUser: bool
    connectionIdentifier: str
    connectionMode: str
    context: dict
    contextHash: str
    mode: str
    scope: list
    subscriberId: str
    userScope: list


class GeneratePreviewResponseDto(TypedDict, total=False):
    controlValues: dict
    previewPayload: Any


class GeneratePreviewResponseDtoCreateDataRequired(TypedDict):
    step_id: str
    workflow_id: str


class GeneratePreviewResponseDtoCreateData(GeneratePreviewResponseDtoCreateDataRequired, total=False):
    controlValues: dict
    previewPayload: Any


class ImportMasterJsonResponseDtoRequired(TypedDict):
    locale: str
    masterJson: dict
    message: str
    success: bool


class ImportMasterJsonResponseDto(ImportMasterJsonResponseDtoRequired, total=False):
    failed: list
    successful: list


class ImportMasterJsonResponseDtoCreateDataRequired(TypedDict):
    locale: str
    masterJson: dict
    message: str
    success: bool


class ImportMasterJsonResponseDtoCreateData(ImportMasterJsonResponseDtoCreateDataRequired, total=False):
    failed: list
    successful: list


class InboxNotificationDtoRequired(TypedDict):
    body: str
    channelType: str
    createdAt: str
    id: str
    isArchived: bool
    isRead: bool
    isSeen: bool
    isSnoozed: bool
    severity: str
    snoozeUntil: str
    to: Any
    transactionId: str


class InboxNotificationDto(InboxNotificationDtoRequired, total=False):
    archivedAt: str
    avatar: str
    data: dict
    deliveredAt: list
    firstSeenAt: str
    primaryAction: Any
    readAt: str
    redirect: Any
    secondaryAction: Any
    snoozedUntil: str
    subject: str
    tags: list
    workflow: Any


class InboxNotificationDtoUpdateDataRequired(TypedDict):
    notification_id: str
    subscriber_id: str


class InboxNotificationDtoUpdateData(InboxNotificationDtoUpdateDataRequired, total=False):
    action_type: str
    context_key: list
    archivedAt: str
    avatar: str
    body: str
    channelType: str
    createdAt: str
    data: dict
    deliveredAt: list
    firstSeenAt: str
    id: str
    isArchived: bool
    isRead: bool
    isSeen: bool
    isSnoozed: bool
    primaryAction: Any
    readAt: str
    redirect: Any
    secondaryAction: Any
    severity: str
    snoozeUntil: str
    snoozedUntil: str
    subject: str
    tags: list
    to: Any
    transactionId: str
    workflow: Any


class IntegrationRequired(TypedDict):
    deleted: bool
    organizationId: str
    primary: bool


class Integration(IntegrationRequired, total=False):
    active: bool
    channel: str
    check: bool
    conditions: list
    configurations: dict
    credentials: Any
    deletedAt: str
    deletedBy: str
    environmentId: str
    id: str
    identifier: str
    kind: str
    name: str
    providerId: str
    rules: dict


class IntegrationListMatch(TypedDict, total=False):
    active: bool
    channel: str
    check: bool
    conditions: list
    configurations: dict
    credentials: Any
    deleted: bool
    deletedAt: str
    deletedBy: str
    environmentId: str
    id: str
    identifier: str
    kind: str
    name: str
    organizationId: str
    primary: bool
    providerId: str
    rules: dict


class IntegrationCreateDataRequired(TypedDict):
    deleted: bool
    organizationId: str
    primary: bool


class IntegrationCreateData(IntegrationCreateDataRequired, total=False):
    active: bool
    channel: str
    check: bool
    conditions: list
    configurations: dict
    credentials: Any
    deletedAt: str
    deletedBy: str
    environmentId: str
    id: str
    identifier: str
    kind: str
    name: str
    providerId: str
    rules: dict


class IntegrationUpdateDataRequired(TypedDict):
    id: str


class IntegrationUpdateData(IntegrationUpdateDataRequired, total=False):
    active: bool
    channel: str
    check: bool
    conditions: list
    configurations: dict
    credentials: Any
    deleted: bool
    deletedAt: str
    deletedBy: str
    environmentId: str
    identifier: str
    kind: str
    name: str
    organizationId: str
    primary: bool
    providerId: str
    rules: dict


class IntegrationRemoveMatch(TypedDict):
    id: str


class IntegrationResponseDtoRequired(TypedDict):
    active: bool
    deleted: bool
    environmentId: str
    identifier: str
    name: str
    organizationId: str
    primary: bool
    providerId: str


class IntegrationResponseDto(IntegrationResponseDtoRequired, total=False):
    channel: str
    conditions: list
    configurations: Any
    credentials: Any
    deletedAt: str
    deletedBy: str
    id: str
    kind: str
    rules: dict


class IntegrationResponseDtoListMatch(TypedDict, total=False):
    active: bool
    channel: str
    conditions: list
    configurations: Any
    credentials: Any
    deleted: bool
    deletedAt: str
    deletedBy: str
    environmentId: str
    id: str
    identifier: str
    kind: str
    name: str
    organizationId: str
    primary: bool
    providerId: str
    rules: dict


class IntegrationResponseDtoCreateDataRequired(TypedDict):
    id: str
    active: bool
    deleted: bool
    environmentId: str
    identifier: str
    name: str
    organizationId: str
    primary: bool
    providerId: str


class IntegrationResponseDtoCreateData(IntegrationResponseDtoCreateDataRequired, total=False):
    channel: str
    conditions: list
    configurations: Any
    credentials: Any
    deletedAt: str
    deletedBy: str
    kind: str
    rules: dict


class LayoutRequired(TypedDict):
    controls: Any
    createdAt: str
    id: str
    isDefault: bool
    isTranslationEnabled: bool
    layoutId: str
    name: str
    origin: str
    slug: str
    type: str
    updatedAt: str


class Layout(LayoutRequired, total=False):
    controlValues: Any
    source: str
    updatedBy: Any
    variables: dict


class LayoutLoadMatch(TypedDict):
    id: str


class LayoutListMatch(TypedDict, total=False):
    limit: float
    offset: float
    order_by: str
    order_direction: str
    query: str


class LayoutCreateDataRequired(TypedDict):
    controls: Any
    createdAt: str
    id: str
    isDefault: bool
    isTranslationEnabled: bool
    layoutId: str
    name: str
    origin: str
    slug: str
    type: str
    updatedAt: str


class LayoutCreateData(LayoutCreateDataRequired, total=False):
    controlValues: Any
    source: str
    updatedBy: Any
    variables: dict


class LayoutUpdateDataRequired(TypedDict):
    id: str


class LayoutUpdateData(LayoutUpdateDataRequired, total=False):
    controlValues: Any
    controls: Any
    createdAt: str
    isDefault: bool
    isTranslationEnabled: bool
    layoutId: str
    name: str
    origin: str
    slug: str
    source: str
    type: str
    updatedAt: str
    updatedBy: Any
    variables: dict


class LayoutRemoveMatch(TypedDict):
    id: str


class LayoutResponseDto(TypedDict, total=False):
    id: str


class LayoutResponseDtoCreateData(TypedDict):
    id: str


class LinkRequired(TypedDict):
    integrationIdentifier: str
    subscriberId: str


class Link(LinkRequired, total=False):
    context: dict
    contextHash: str


class LinkCreateDataRequired(TypedDict):
    integrationIdentifier: str
    subscriberId: str


class LinkCreateData(LinkCreateDataRequired, total=False):
    context: dict
    contextHash: str


class ListAgentIntegrationsResponseDtoRequired(TypedDict):
    agentId: str
    createdAt: str
    environmentId: str
    id: str
    integration: dict
    organizationId: str
    updatedAt: str


class ListAgentIntegrationsResponseDto(ListAgentIntegrationsResponseDtoRequired, total=False):
    connectedAt: dict
    exceedsPlanLimit: bool


class ListAgentIntegrationsResponseDtoListMatchRequired(TypedDict):
    identifier: str


class ListAgentIntegrationsResponseDtoListMatch(ListAgentIntegrationsResponseDtoListMatchRequired, total=False):
    after: str
    before: str
    include_cursor: bool
    integration_identifier: str
    limit: float
    order_by: str
    order_direction: str


class ListAgentsResponseDtoRequired(TypedDict):
    active: bool
    behavior: dict
    createdAt: str
    environmentId: str
    id: str
    identifier: str
    name: str
    organizationId: str
    updatedAt: str


class ListAgentsResponseDto(ListAgentsResponseDtoRequired, total=False):
    bridgeUrl: str
    createdBy: str
    description: str
    devBridgeActive: bool
    devBridgeUrl: str
    exceedsPlanLimit: bool
    integrations: list
    managedRuntime: Any
    runtime: str
    visibility: str


class ListAgentsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    identifier: str
    include_cursor: bool
    limit: float
    order_by: str
    order_direction: str


class ListChannelConnectionsResponseDto(TypedDict):
    auth: dict
    channel: str
    contextKeys: list
    createdAt: str
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    updatedAt: str
    workspace: dict


class ListChannelConnectionsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    channel: str
    connection_mode: str
    context_key: list
    include_cursor: bool
    integration_identifier: str
    limit: float
    order_by: str
    order_direction: str
    provider_id: str
    subscriber_id: str


class ListChannelEndpointsResponseDto(TypedDict):
    channel: str
    connectionIdentifier: str
    contextKeys: list
    createdAt: str
    endpoint: Any
    identifier: str
    integrationIdentifier: str
    providerId: str
    subscriberId: str
    type: str
    updatedAt: str


class ListChannelEndpointsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    channel: str
    connection_identifier: str
    context_key: list
    include_cursor: bool
    integration_identifier: str
    limit: float
    order_by: str
    order_direction: str
    provider_id: str
    subscriber_id: str


class ListContextsResponseDtoRequired(TypedDict):
    createdAt: str
    data: dict
    id: str
    type: str
    updatedAt: str


class ListContextsResponseDto(ListContextsResponseDtoRequired, total=False):
    bridgeUrl: str


class ListContextsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    id: str
    include_cursor: bool
    limit: float
    order_by: str
    order_direction: str
    search: str


class ListDomainRoutesResponseDtoRequired(TypedDict):
    address: str
    createdAt: str
    domainId: str
    environmentId: str
    id: str
    organizationId: str
    type: str
    updatedAt: str


class ListDomainRoutesResponseDto(ListDomainRoutesResponseDtoRequired, total=False):
    agentId: str
    data: dict


class ListDomainRoutesResponseDtoListMatchRequired(TypedDict):
    domain_id: str


class ListDomainRoutesResponseDtoListMatch(ListDomainRoutesResponseDtoListMatchRequired, total=False):
    after: str
    agent_id: str
    before: str
    include_cursor: bool
    limit: float
    order_by: str
    order_direction: str


class ListDomainsResponseDtoRequired(TypedDict):
    createdAt: str
    environmentId: str
    id: str
    mxRecordConfigured: bool
    name: str
    organizationId: str
    status: str
    updatedAt: str


class ListDomainsResponseDto(ListDomainsResponseDtoRequired, total=False):
    data: dict
    dnsProvider: str
    expectedDnsRecords: list


class ListDomainsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    include_cursor: bool
    limit: float
    name: str
    order_by: str
    order_direction: str


class ListSubscribersResponseDtoRequired(TypedDict):
    createdAt: str
    deleted: bool
    environmentId: str
    organizationId: str
    subscriberId: str
    updatedAt: str


class ListSubscribersResponseDto(ListSubscribersResponseDtoRequired, total=False):
    avatar: str
    channels: list
    data: dict
    email: str
    firstName: str
    id: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    phone: str
    timezone: str
    topics: list
    v: float


class ListSubscribersResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    email: str
    include_cursor: bool
    limit: float
    name: str
    order_by: str
    order_direction: str
    phone: str
    subscriber_id: str


class ListTopicSubscriptionsResponseDtoRequired(TypedDict):
    createdAt: str
    id: str
    identifier: str
    subscriber: Any
    topic: Any


class ListTopicSubscriptionsResponseDto(ListTopicSubscriptionsResponseDtoRequired, total=False):
    contextKeys: list
    preferences: list


class ListTopicSubscriptionsResponseDtoListMatchRequired(TypedDict):
    subscriber_id: str


class ListTopicSubscriptionsResponseDtoListMatch(ListTopicSubscriptionsResponseDtoListMatchRequired, total=False):
    after: str
    before: str
    context_key: list
    include_cursor: bool
    key: str
    limit: float
    order_by: str
    order_direction: str


class ListTopicsResponseDtoRequired(TypedDict):
    id: str
    key: str


class ListTopicsResponseDto(ListTopicsResponseDtoRequired, total=False):
    createdAt: str
    data: dict
    name: str
    updatedAt: str


class ListTopicsResponseDtoListMatch(TypedDict, total=False):
    after: str
    before: str
    include_cursor: bool
    key: str
    limit: float
    name: str
    order_by: str
    order_direction: str


class MasterJson(TypedDict):
    layouts: dict
    workflows: dict


class MasterJsonLoadMatch(TypedDict, total=False):
    locale: str


class MessageRequired(TypedDict):
    channel: str
    createdAt: str
    cta: Any
    environmentId: str
    notificationId: str
    organizationId: str
    read: bool
    seen: bool
    status: str
    subscriberId: str
    transactionId: str


class Message(MessageRequired, total=False):
    content: Any
    contextKeys: list
    deliveredAt: list
    deviceTokens: list
    directWebhookUrl: str
    email: str
    errorId: str
    errorText: str
    feedId: str
    id: str
    lastReadDate: str
    lastSeenDate: str
    messageTemplateId: str
    overrides: dict
    payload: dict
    phone: str
    providerId: str
    snoozedUntil: str
    subject: str
    subscriber: Any
    template: Any
    templateId: str
    templateIdentifier: str
    title: str


class MessageListMatch(TypedDict, total=False):
    channel: str
    context_key: list
    limit: float
    page: float
    subscriber_id: str
    transaction_id: list


class MessageRemoveMatch(TypedDict):
    id: str


class MessageResponseDtoRequired(TypedDict):
    markAs: str
    messageId: Any
    status: str


class MessageResponseDto(MessageResponseDtoRequired, total=False):
    payload: dict


class MessageResponseDtoCreateDataRequired(TypedDict):
    subscriber_id: str
    markAs: str
    messageId: Any
    status: str


class MessageResponseDtoCreateData(MessageResponseDtoCreateDataRequired, total=False):
    message_id: str
    type: Any
    payload: dict


class NotificationFeedItemDtoRequired(TypedDict):
    archived: bool
    channel: str
    content: str
    cta: Any
    environmentId: str
    id: str
    jobId: str
    notificationId: str
    organizationId: str
    read: bool
    seen: bool
    status: str
    subscriberId: str
    templateId: str
    transactionId: str


class NotificationFeedItemDto(NotificationFeedItemDtoRequired, total=False):
    actor: Any
    createdAt: str
    data: dict
    deviceTokens: list
    feedId: str
    messageTemplateId: str
    overrides: dict
    payload: dict
    providerId: str
    subject: str
    subscriber: Any
    tags: list
    templateIdentifier: str
    updatedAt: str


class NotificationFeedItemDtoListMatchRequired(TypedDict):
    subscriber_id: str


class NotificationFeedItemDtoListMatch(NotificationFeedItemDtoListMatchRequired, total=False):
    limit: float
    page: float
    payload: str
    read: bool
    seen: bool


class PreferencesResponseDtoRequired(TypedDict):
    preferences: list


class PreferencesResponseDto(PreferencesResponseDtoRequired, total=False):
    context: dict


class PreferencesResponseDtoUpdateDataRequired(TypedDict):
    subscriber_id: str


class PreferencesResponseDtoUpdateData(PreferencesResponseDtoUpdateDataRequired, total=False):
    context: dict
    preferences: list


class PublishRequired(TypedDict):
    results: list
    summary: Any


class Publish(PublishRequired, total=False):
    dryRun: bool
    resources: list
    sourceEnvironmentId: str


class PublishCreateDataRequired(TypedDict):
    environment_id: str
    results: list
    summary: Any


class PublishCreateData(PublishCreateDataRequired, total=False):
    dryRun: bool
    resources: list
    sourceEnvironmentId: str


class RemoveSubscriberResponseDto(TypedDict):
    pass


class RemoveSubscriberResponseDtoRemoveMatch(TypedDict):
    subscriber_id: str


class StepRequired(TypedDict):
    controls: Any
    id: str
    name: str
    origin: str
    slug: str
    stepId: str
    type: str
    variables: dict
    workflowDatabaseId: str
    workflowId: str


class Step(StepRequired, total=False):
    controlValues: dict
    issues: Any
    providerOverrides: dict
    stepResolverHash: str


class StepLoadMatch(TypedDict):
    id: str
    workflow_id: str


class SubscriberRequired(TypedDict):
    createdAt: str
    deleted: bool
    environmentId: str
    organizationId: str
    subscriberId: str
    updatedAt: str


class Subscriber(SubscriberRequired, total=False):
    avatar: str
    channels: list
    data: dict
    email: str
    firstName: str
    id: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    phone: str
    timezone: str
    topics: list
    v: float


class SubscriberLoadMatch(TypedDict):
    id: str


class SubscriberCreateDataRequired(TypedDict):
    createdAt: str
    deleted: bool
    environmentId: str
    organizationId: str
    subscriberId: str
    updatedAt: str


class SubscriberCreateData(SubscriberCreateDataRequired, total=False):
    fail_if_exist: bool
    avatar: str
    channels: list
    data: dict
    email: str
    firstName: str
    id: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    phone: str
    timezone: str
    topics: list
    v: float


class SubscriberUpdateDataRequired(TypedDict):
    id: str


class SubscriberUpdateData(SubscriberUpdateDataRequired, total=False):
    avatar: str
    channels: list
    createdAt: str
    data: dict
    deleted: bool
    email: str
    environmentId: str
    firstName: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    organizationId: str
    phone: str
    subscriberId: str
    timezone: str
    topics: list
    updatedAt: str
    v: float


class SubscriberRemoveMatchRequired(TypedDict):
    id: str


class SubscriberRemoveMatch(SubscriberRemoveMatchRequired, total=False):
    notification_id: str
    context_key: list
    provider_id: str


class SubscriberNotificationsCountResponseDto(TypedDict):
    count: float
    filter: dict


class SubscriberNotificationsCountResponseDtoListMatch(TypedDict):
    subscriber_id: str
    filter: str


class SubscriberNotificationsResponseDto(TypedDict, total=False):
    id: str


class SubscriberNotificationsResponseDtoListMatchRequired(TypedDict):
    id: str


class SubscriberNotificationsResponseDtoListMatch(SubscriberNotificationsResponseDtoListMatchRequired, total=False):
    after: str
    archived: bool
    context_key: list
    created_gte: float
    created_lte: float
    data: str
    limit: float
    offset: float
    read: bool
    seen: bool
    severity: list
    snoozed: bool


class SubscriberPreferencesDto(TypedDict, total=False):
    id: str


class SubscriberPreferencesDtoListMatchRequired(TypedDict):
    id: str


class SubscriberPreferencesDtoListMatch(SubscriberPreferencesDtoListMatchRequired, total=False):
    context_key: list
    criticality: str


class SubscriberPreferencesDtoUpdateData(TypedDict):
    id: str


class SubscriberResponseDtoRequired(TypedDict):
    createdAt: str
    deleted: bool
    environmentId: str
    organizationId: str
    subscriberId: str
    updatedAt: str


class SubscriberResponseDto(SubscriberResponseDtoRequired, total=False):
    avatar: str
    channels: list
    data: dict
    email: str
    firstName: str
    id: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    phone: str
    timezone: str
    topics: list
    v: float


class SubscriberResponseDtoUpdateDataRequired(TypedDict):
    id: str


class SubscriberResponseDtoUpdateData(SubscriberResponseDtoUpdateDataRequired, total=False):
    avatar: str
    channels: list
    createdAt: str
    data: dict
    deleted: bool
    email: str
    environmentId: str
    firstName: str
    isOnline: bool
    lastName: str
    lastOnlineAt: str
    locale: str
    organizationId: str
    phone: str
    subscriberId: str
    timezone: str
    topics: list
    updatedAt: str
    v: float


class SubscriptionRequired(TypedDict):
    createdAt: str
    id: str
    subscriber: Any
    topic: Any
    updatedAt: str


class Subscription(SubscriptionRequired, total=False):
    contextKeys: list
    identifier: str
    name: str
    preferences: list


class SubscriptionLoadMatch(TypedDict):
    id: str
    topic_id: str


class SubscriptionUpdateDataRequired(TypedDict):
    id: str
    topic_id: str


class SubscriptionUpdateData(SubscriptionUpdateDataRequired, total=False):
    contextKeys: list
    createdAt: str
    identifier: str
    name: str
    preferences: list
    subscriber: Any
    topic: Any
    updatedAt: str


class TopicRequired(TypedDict):
    key: str


class Topic(TopicRequired, total=False):
    data: dict
    id: str
    name: str


class TopicLoadMatch(TypedDict):
    id: str


class TopicCreateDataRequired(TypedDict):
    key: str


class TopicCreateData(TopicCreateDataRequired, total=False):
    fail_if_exist: bool
    data: dict
    id: str
    name: str


class TopicUpdateDataRequired(TypedDict):
    id: str


class TopicUpdateData(TopicUpdateDataRequired, total=False):
    data: dict
    key: str
    name: str


class TopicRemoveMatch(TypedDict):
    id: str


class TopicSubscriberDto(TypedDict):
    environmentId: str
    externalSubscriberId: str
    organizationId: str
    subscriberId: str
    topicId: str
    topicKey: str


class TopicSubscriberDtoLoadMatch(TypedDict):
    external_subscriber_id: str
    topic_id: str


class TopicSubscriptionsResponseDto(TypedDict):
    pass


class TopicSubscriptionsResponseDtoRemoveMatch(TypedDict):
    topic_key: str


class TranslationRequired(TypedDict):
    content: dict
    locale: str
    resourceId: str
    resourceType: str


class Translation(TranslationRequired, total=False):
    id: str


class TranslationLoadMatch(TypedDict):
    locale: str
    resource_id: str
    resource_type: str


class TranslationCreateDataRequired(TypedDict):
    content: dict
    locale: str
    resourceId: str
    resourceType: str


class TranslationCreateData(TranslationCreateDataRequired, total=False):
    id: str


class TranslationRemoveMatchRequired(TypedDict):
    resource_id: str
    resource_type: str


class TranslationRemoveMatch(TranslationRemoveMatchRequired, total=False):
    locale: str


class TranslationGroupDtoRequired(TypedDict):
    createdAt: str
    locales: list
    resourceId: str
    resourceName: str
    resourceType: str
    updatedAt: str


class TranslationGroupDto(TranslationGroupDtoRequired, total=False):
    id: str
    outdatedLocales: list


class TranslationGroupDtoLoadMatch(TypedDict):
    resource_id: str
    resource_type: str


class TriggerRequired(TypedDict):
    name: str
    to: Any


class Trigger(TriggerRequired, total=False):
    actor: Any
    agentId: str
    bridgeUrl: str
    context: dict
    overrides: Any
    payload: dict
    tenant: Any
    transactionId: str


class TriggerCreateDataRequired(TypedDict):
    name: str
    to: Any


class TriggerCreateData(TriggerCreateDataRequired, total=False):
    actor: Any
    agentId: str
    bridgeUrl: str
    context: dict
    overrides: Any
    payload: dict
    tenant: Any
    transactionId: str


class TriggerEventResponseDtoRequired(TypedDict):
    acknowledged: bool
    events: list
    name: str
    payload: dict
    status: str


class TriggerEventResponseDto(TriggerEventResponseDtoRequired, total=False):
    activityFeedLink: str
    actor: Any
    agentId: str
    context: dict
    error: list
    jobData: dict
    overrides: Any
    tenant: Any
    transactionId: str


class TriggerEventResponseDtoCreateDataRequired(TypedDict):
    acknowledged: bool
    events: list
    name: str
    payload: dict
    status: str


class TriggerEventResponseDtoCreateData(TriggerEventResponseDtoCreateDataRequired, total=False):
    activityFeedLink: str
    actor: Any
    agentId: str
    context: dict
    error: list
    jobData: dict
    overrides: Any
    tenant: Any
    transactionId: str


class Unseen(TypedDict):
    count: float


class UnseenLoadMatchRequired(TypedDict):
    subscriber_id: str


class UnseenLoadMatch(UnseenLoadMatchRequired, total=False):
    limit: float
    seen: bool


class Upload(TypedDict):
    errors: list
    failedUploads: float
    successfulUploads: float
    totalFiles: float


class UploadCreateData(TypedDict):
    errors: list
    failedUploads: float
    successfulUploads: float
    totalFiles: float


class WebhookResultDto(TypedDict):
    pass


class WebhookResultDtoCreateData(TypedDict):
    environment_id: str
    integration_id: str


class WorkflowRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    origin: str
    preferences: Any
    severity: str
    slug: str
    status: str
    stepTypeOverviews: list
    steps: list
    updatedAt: str
    workflowId: str


class Workflow(WorkflowRequired, total=False):
    active: bool
    agent: Any
    description: str
    isTranslationEnabled: bool
    issues: dict
    lastPublishedAt: str
    lastPublishedBy: Any
    lastTriggeredAt: str
    payloadExample: dict
    payloadSchema: dict
    source: str
    tags: list
    updatedBy: Any
    validatePayload: bool


class WorkflowLoadMatchRequired(TypedDict):
    id: str


class WorkflowLoadMatch(WorkflowLoadMatchRequired, total=False):
    environment_id: str


class WorkflowListMatch(TypedDict, total=False):
    limit: float
    offset: float
    order_by: str
    order_direction: str
    query: str
    status: list
    tag: list


class WorkflowCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    origin: str
    preferences: Any
    severity: str
    slug: str
    status: str
    stepTypeOverviews: list
    steps: list
    updatedAt: str
    workflowId: str


class WorkflowCreateData(WorkflowCreateDataRequired, total=False):
    active: bool
    agent: Any
    description: str
    isTranslationEnabled: bool
    issues: dict
    lastPublishedAt: str
    lastPublishedBy: Any
    lastTriggeredAt: str
    payloadExample: dict
    payloadSchema: dict
    source: str
    tags: list
    updatedBy: Any
    validatePayload: bool


class WorkflowUpdateDataRequired(TypedDict):
    id: str


class WorkflowUpdateData(WorkflowUpdateDataRequired, total=False):
    active: bool
    agent: Any
    createdAt: str
    description: str
    isTranslationEnabled: bool
    issues: dict
    lastPublishedAt: str
    lastPublishedBy: Any
    lastTriggeredAt: str
    name: str
    origin: str
    payloadExample: dict
    payloadSchema: dict
    preferences: Any
    severity: str
    slug: str
    source: str
    status: str
    stepTypeOverviews: list
    steps: list
    tags: list
    updatedAt: str
    updatedBy: Any
    validatePayload: bool
    workflowId: str


class WorkflowRemoveMatch(TypedDict):
    id: str


class WorkflowInfoDto(TypedDict):
    name: str
    workflowId: str


class WorkflowInfoDtoListMatch(TypedDict):
    layout_id: str


class WorkflowResponseDtoRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    origin: str
    preferences: Any
    severity: str
    slug: str
    status: str
    steps: list
    updatedAt: str
    workflowId: str


class WorkflowResponseDto(WorkflowResponseDtoRequired, total=False):
    active: bool
    agent: Any
    description: str
    isTranslationEnabled: bool
    issues: dict
    lastPublishedAt: str
    lastPublishedBy: Any
    lastTriggeredAt: str
    payloadExample: dict
    payloadSchema: dict
    tags: list
    updatedBy: Any
    validatePayload: bool


class WorkflowResponseDtoUpdateDataRequired(TypedDict):
    id: str


class WorkflowResponseDtoUpdateData(WorkflowResponseDtoUpdateDataRequired, total=False):
    active: bool
    agent: Any
    createdAt: str
    description: str
    isTranslationEnabled: bool
    issues: dict
    lastPublishedAt: str
    lastPublishedBy: Any
    lastTriggeredAt: str
    name: str
    origin: str
    payloadExample: dict
    payloadSchema: dict
    preferences: Any
    severity: str
    slug: str
    status: str
    steps: list
    tags: list
    updatedAt: str
    updatedBy: Any
    validatePayload: bool
    workflowId: str
