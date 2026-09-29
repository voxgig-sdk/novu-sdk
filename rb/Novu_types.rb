# frozen_string_literal: true

# Typed models for the Novu SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ActivityNotificationResponseDto entity data model.
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] controls
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] critical
#   @return [Boolean, nil]
#
# @!attribute [rw] digestedNotificationId
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jobs
#   @return [Array, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] subscriber
#   @return [Object, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] template
#   @return [Object, nil]
#
# @!attribute [rw] templateId
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [Hash, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] transactionId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ActivityNotificationResponseDto = Struct.new(
  :channels,
  :contextKeys,
  :controls,
  :createdAt,
  :critical,
  :digestedNotificationId,
  :environmentId,
  :id,
  :jobs,
  :organizationId,
  :payload,
  :severity,
  :subscriber,
  :subscriberId,
  :tags,
  :template,
  :templateId,
  :to,
  :topics,
  :transactionId,
  :updatedAt,
  keyword_init: true
)

# Request payload for ActivityNotificationResponseDto#load.
#
# @!attribute [rw] notification_id
#   @return [String]
ActivityNotificationResponseDtoLoadMatch = Struct.new(
  :notification_id,
  keyword_init: true
)

# Request payload for ActivityNotificationResponseDto#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [Array, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] email
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [Array, nil]
#
# @!attribute [rw] subscriber_id
#   @return [Array, nil]
#
# @!attribute [rw] subscription_id
#   @return [String, nil]
#
# @!attribute [rw] template
#   @return [Array, nil]
#
# @!attribute [rw] topic_key
#   @return [String, nil]
#
# @!attribute [rw] transaction_id
#   @return [String, nil]
ActivityNotificationResponseDtoListMatch = Struct.new(
  :after,
  :before,
  :channel,
  :context_key,
  :email,
  :limit,
  :page,
  :search,
  :severity,
  :subscriber_id,
  :subscription_id,
  :template,
  :topic_key,
  :transaction_id,
  keyword_init: true
)

# Agent entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] behavior
#   @return [Hash]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] createdBy
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devBridgeActive
#   @return [Boolean, nil]
#
# @!attribute [rw] devBridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrations
#   @return [Array, nil]
#
# @!attribute [rw] managedRuntime
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String, nil]
Agent = Struct.new(
  :active,
  :behavior,
  :bridgeUrl,
  :createdAt,
  :createdBy,
  :description,
  :devBridgeActive,
  :devBridgeUrl,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :identifier,
  :integrations,
  :managedRuntime,
  :name,
  :organizationId,
  :runtime,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Agent#load.
#
# @!attribute [rw] id
#   @return [String]
AgentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Agent#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
AgentListMatch = Struct.new(
  :after,
  :before,
  :identifier,
  :include_cursor,
  :limit,
  :order_by,
  :order_direction,
  keyword_init: true
)

# Request payload for Agent#create.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] behavior
#   @return [Hash]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] createdBy
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devBridgeActive
#   @return [Boolean, nil]
#
# @!attribute [rw] devBridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrations
#   @return [Array, nil]
#
# @!attribute [rw] managedRuntime
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String, nil]
AgentCreateData = Struct.new(
  :active,
  :behavior,
  :bridgeUrl,
  :createdAt,
  :createdBy,
  :description,
  :devBridgeActive,
  :devBridgeUrl,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :identifier,
  :integrations,
  :managedRuntime,
  :name,
  :organizationId,
  :runtime,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Agent#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] behavior
#   @return [Hash, nil]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] createdBy
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devBridgeActive
#   @return [Boolean, nil]
#
# @!attribute [rw] devBridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrations
#   @return [Array, nil]
#
# @!attribute [rw] managedRuntime
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] runtime
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
AgentUpdateData = Struct.new(
  :id,
  :active,
  :behavior,
  :bridgeUrl,
  :createdAt,
  :createdBy,
  :description,
  :devBridgeActive,
  :devBridgeUrl,
  :environmentId,
  :exceedsPlanLimit,
  :identifier,
  :integrations,
  :managedRuntime,
  :name,
  :organizationId,
  :runtime,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Agent#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] delete_from_provider
#   @return [String]
AgentRemoveMatch = Struct.new(
  :id,
  :delete_from_provider,
  keyword_init: true
)

# AgentIntegrationResponseDto entity data model.
#
# @!attribute [rw] agentId
#   @return [String]
#
# @!attribute [rw] connectedAt
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash]
#
# @!attribute [rw] integrationIdentifier
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
AgentIntegrationResponseDto = Struct.new(
  :agentId,
  :connectedAt,
  :createdAt,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :integration,
  :integrationIdentifier,
  :organizationId,
  :providerId,
  :updatedAt,
  keyword_init: true
)

# Request payload for AgentIntegrationResponseDto#create.
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String]
#
# @!attribute [rw] connectedAt
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash]
#
# @!attribute [rw] integrationIdentifier
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
AgentIntegrationResponseDtoCreateData = Struct.new(
  :identifier,
  :agentId,
  :connectedAt,
  :createdAt,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :integration,
  :integrationIdentifier,
  :organizationId,
  :providerId,
  :updatedAt,
  keyword_init: true
)

# Request payload for AgentIntegrationResponseDto#update.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_integration_id
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] connectedAt
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
AgentIntegrationResponseDtoUpdateData = Struct.new(
  :agent_id,
  :agent_integration_id,
  :agentId,
  :connectedAt,
  :createdAt,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :integration,
  :integrationIdentifier,
  :organizationId,
  :providerId,
  :updatedAt,
  keyword_init: true
)

# AgentResponseDto entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] behavior
#   @return [Hash]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] createdBy
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devBridgeActive
#   @return [Boolean, nil]
#
# @!attribute [rw] devBridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrations
#   @return [Array, nil]
#
# @!attribute [rw] managedRuntime
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String, nil]
AgentResponseDto = Struct.new(
  :active,
  :behavior,
  :bridgeUrl,
  :createdAt,
  :createdBy,
  :description,
  :devBridgeActive,
  :devBridgeUrl,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :identifier,
  :integrations,
  :managedRuntime,
  :name,
  :organizationId,
  :runtime,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for AgentResponseDto#update.
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] behavior
#   @return [Hash, nil]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] createdBy
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devBridgeActive
#   @return [Boolean, nil]
#
# @!attribute [rw] devBridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integrations
#   @return [Array, nil]
#
# @!attribute [rw] managedRuntime
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] runtime
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
AgentResponseDtoUpdateData = Struct.new(
  :identifier,
  :active,
  :behavior,
  :bridgeUrl,
  :createdAt,
  :createdBy,
  :description,
  :devBridgeActive,
  :devBridgeUrl,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :integrations,
  :managedRuntime,
  :name,
  :organizationId,
  :runtime,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Bulk entity data model.
#
# @!attribute [rw] subscribers
#   @return [Array]
Bulk = Struct.new(
  :subscribers,
  keyword_init: true
)

# Request payload for Bulk#create.
#
# @!attribute [rw] subscribers
#   @return [Array]
BulkCreateData = Struct.new(
  :subscribers,
  keyword_init: true
)

# ChannelConnection entity data model.
#
# @!attribute [rw] auth
#   @return [Hash]
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] connectionMode
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workspace
#   @return [Hash]
ChannelConnection = Struct.new(
  :auth,
  :channel,
  :connectionMode,
  :context,
  :contextKeys,
  :createdAt,
  :id,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :updatedAt,
  :workspace,
  keyword_init: true
)

# Request payload for ChannelConnection#load.
#
# @!attribute [rw] id
#   @return [String]
ChannelConnectionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ChannelConnection#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] connection_mode
#   @return [String, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_identifier
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] subscriber_id
#   @return [String, nil]
ChannelConnectionListMatch = Struct.new(
  :after,
  :before,
  :channel,
  :connection_mode,
  :context_key,
  :include_cursor,
  :integration_identifier,
  :limit,
  :order_by,
  :order_direction,
  :provider_id,
  :subscriber_id,
  keyword_init: true
)

# Request payload for ChannelConnection#create.
#
# @!attribute [rw] auth
#   @return [Hash]
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] connectionMode
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workspace
#   @return [Hash]
ChannelConnectionCreateData = Struct.new(
  :auth,
  :channel,
  :connectionMode,
  :context,
  :contextKeys,
  :createdAt,
  :id,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :updatedAt,
  :workspace,
  keyword_init: true
)

# Request payload for ChannelConnection#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] auth
#   @return [Hash, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] connectionMode
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] workspace
#   @return [Hash, nil]
ChannelConnectionUpdateData = Struct.new(
  :id,
  :auth,
  :channel,
  :connectionMode,
  :context,
  :contextKeys,
  :createdAt,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :updatedAt,
  :workspace,
  keyword_init: true
)

# Request payload for ChannelConnection#remove.
#
# @!attribute [rw] id
#   @return [String]
ChannelConnectionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ChannelEndpoint entity data model.
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] connectionIdentifier
#   @return [String]
#
# @!attribute [rw] contextKeys
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] endpoint
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ChannelEndpoint = Struct.new(
  :channel,
  :connectionIdentifier,
  :contextKeys,
  :createdAt,
  :endpoint,
  :id,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ChannelEndpoint#load.
#
# @!attribute [rw] id
#   @return [String]
ChannelEndpointLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ChannelEndpoint#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] connection_identifier
#   @return [String, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_identifier
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] subscriber_id
#   @return [String, nil]
ChannelEndpointListMatch = Struct.new(
  :after,
  :before,
  :channel,
  :connection_identifier,
  :context_key,
  :include_cursor,
  :integration_identifier,
  :limit,
  :order_by,
  :order_direction,
  :provider_id,
  :subscriber_id,
  keyword_init: true
)

# Request payload for ChannelEndpoint#create.
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] connectionIdentifier
#   @return [String]
#
# @!attribute [rw] contextKeys
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] endpoint
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ChannelEndpointCreateData = Struct.new(
  :channel,
  :connectionIdentifier,
  :contextKeys,
  :createdAt,
  :endpoint,
  :id,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ChannelEndpoint#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] connectionIdentifier
#   @return [String, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Object, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ChannelEndpointUpdateData = Struct.new(
  :id,
  :channel,
  :connectionIdentifier,
  :contextKeys,
  :createdAt,
  :endpoint,
  :identifier,
  :integrationIdentifier,
  :providerId,
  :subscriberId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ChannelEndpoint#remove.
#
# @!attribute [rw] id
#   @return [String]
ChannelEndpointRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Configure entity data model.
#
# @!attribute [rw] botUsername
#   @return [String]
#
# @!attribute [rw] configuredAt
#   @return [String]
#
# @!attribute [rw] webhookUrl
#   @return [String]
Configure = Struct.new(
  :botUsername,
  :configuredAt,
  :webhookUrl,
  keyword_init: true
)

# Request payload for Configure#create.
#
# @!attribute [rw] integration_id
#   @return [String]
#
# @!attribute [rw] botUsername
#   @return [String]
#
# @!attribute [rw] configuredAt
#   @return [String]
#
# @!attribute [rw] webhookUrl
#   @return [String]
ConfigureCreateData = Struct.new(
  :integration_id,
  :botUsername,
  :configuredAt,
  :webhookUrl,
  keyword_init: true
)

# Context entity data model.
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Context = Struct.new(
  :bridgeUrl,
  :createdAt,
  :data,
  :id,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Context#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
ContextLoadMatch = Struct.new(
  :id,
  :type,
  keyword_init: true
)

# Request payload for Context#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
ContextListMatch = Struct.new(
  :after,
  :before,
  :id,
  :include_cursor,
  :limit,
  :order_by,
  :order_direction,
  :search,
  keyword_init: true
)

# Request payload for Context#create.
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ContextCreateData = Struct.new(
  :bridgeUrl,
  :createdAt,
  :data,
  :id,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Context#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ContextUpdateData = Struct.new(
  :id,
  :type,
  :bridgeUrl,
  :createdAt,
  :data,
  :updatedAt,
  keyword_init: true
)

# Request payload for Context#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
ContextRemoveMatch = Struct.new(
  :id,
  :type,
  keyword_init: true
)

# CreateSubscriptionsResponseDto entity data model.
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
#
# @!attribute [rw] subscriberIds
#   @return [Array, nil]
#
# @!attribute [rw] subscriptions
#   @return [Array, nil]
CreateSubscriptionsResponseDto = Struct.new(
  :context,
  :name,
  :preferences,
  :subscriberIds,
  :subscriptions,
  keyword_init: true
)

# Request payload for CreateSubscriptionsResponseDto#create.
#
# @!attribute [rw] topic_key
#   @return [String]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
#
# @!attribute [rw] subscriberIds
#   @return [Array, nil]
#
# @!attribute [rw] subscriptions
#   @return [Array, nil]
CreateSubscriptionsResponseDtoCreateData = Struct.new(
  :topic_key,
  :context,
  :name,
  :preferences,
  :subscriberIds,
  :subscriptions,
  keyword_init: true
)

# Diff entity data model.
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] sourceEnvironmentId
#   @return [String]
#
# @!attribute [rw] summary
#   @return [Object]
#
# @!attribute [rw] targetEnvironmentId
#   @return [String]
Diff = Struct.new(
  :resources,
  :sourceEnvironmentId,
  :summary,
  :targetEnvironmentId,
  keyword_init: true
)

# Request payload for Diff#create.
#
# @!attribute [rw] environment_id
#   @return [String]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] sourceEnvironmentId
#   @return [String]
#
# @!attribute [rw] summary
#   @return [Object]
#
# @!attribute [rw] targetEnvironmentId
#   @return [String]
DiffCreateData = Struct.new(
  :environment_id,
  :resources,
  :sourceEnvironmentId,
  :summary,
  :targetEnvironmentId,
  keyword_init: true
)

# Domain entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dnsProvider
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] expectedDnsRecords
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mxRecordConfigured
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Domain = Struct.new(
  :createdAt,
  :data,
  :dnsProvider,
  :environmentId,
  :expectedDnsRecords,
  :id,
  :mxRecordConfigured,
  :name,
  :organizationId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Domain#load.
#
# @!attribute [rw] id
#   @return [String]
DomainLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Domain#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
DomainListMatch = Struct.new(
  :after,
  :before,
  :include_cursor,
  :limit,
  :name,
  :order_by,
  :order_direction,
  keyword_init: true
)

# Request payload for Domain#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dnsProvider
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] expectedDnsRecords
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mxRecordConfigured
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
DomainCreateData = Struct.new(
  :createdAt,
  :data,
  :dnsProvider,
  :environmentId,
  :expectedDnsRecords,
  :id,
  :mxRecordConfigured,
  :name,
  :organizationId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Domain#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dnsProvider
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] expectedDnsRecords
#   @return [Array, nil]
#
# @!attribute [rw] mxRecordConfigured
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
DomainUpdateData = Struct.new(
  :id,
  :createdAt,
  :data,
  :dnsProvider,
  :environmentId,
  :expectedDnsRecords,
  :mxRecordConfigured,
  :name,
  :organizationId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Domain#remove.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
DomainRemoveMatch = Struct.new(
  :address,
  :id,
  keyword_init: true
)

# DomainConnectApplyUrlResponseDto entity data model.
#
# @!attribute [rw] redirectUri
#   @return [String, nil]
DomainConnectApplyUrlResponseDto = Struct.new(
  :redirectUri,
  keyword_init: true
)

# Request payload for DomainConnectApplyUrlResponseDto#create.
#
# @!attribute [rw] domain_id
#   @return [String]
#
# @!attribute [rw] redirectUri
#   @return [String, nil]
DomainConnectApplyUrlResponseDtoCreateData = Struct.new(
  :domain_id,
  :redirectUri,
  keyword_init: true
)

# DomainConnectStatusResponseDto entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
DomainConnectStatusResponseDto = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for DomainConnectStatusResponseDto#list.
#
# @!attribute [rw] id
#   @return [String]
DomainConnectStatusResponseDtoListMatch = Struct.new(
  :id,
  keyword_init: true
)

# DomainResponseDto entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dnsProvider
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] expectedDnsRecords
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mxRecordConfigured
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
DomainResponseDto = Struct.new(
  :createdAt,
  :data,
  :dnsProvider,
  :environmentId,
  :expectedDnsRecords,
  :id,
  :mxRecordConfigured,
  :name,
  :organizationId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for DomainResponseDto#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dnsProvider
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] expectedDnsRecords
#   @return [Array, nil]
#
# @!attribute [rw] mxRecordConfigured
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
DomainResponseDtoCreateData = Struct.new(
  :id,
  :createdAt,
  :data,
  :dnsProvider,
  :environmentId,
  :expectedDnsRecords,
  :mxRecordConfigured,
  :name,
  :organizationId,
  :status,
  :updatedAt,
  keyword_init: true
)

# DomainRouteResponseDto entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domainId
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
DomainRouteResponseDto = Struct.new(
  :address,
  :agentId,
  :createdAt,
  :data,
  :domainId,
  :environmentId,
  :id,
  :organizationId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for DomainRouteResponseDto#load.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] domain_id
#   @return [String]
DomainRouteResponseDtoLoadMatch = Struct.new(
  :address,
  :domain_id,
  keyword_init: true
)

# Request payload for DomainRouteResponseDto#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domainId
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
DomainRouteResponseDtoCreateData = Struct.new(
  :id,
  :address,
  :agentId,
  :createdAt,
  :data,
  :domainId,
  :environmentId,
  :organizationId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for DomainRouteResponseDto#update.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] domain_id
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domainId
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
DomainRouteResponseDtoUpdateData = Struct.new(
  :address,
  :domain_id,
  :agentId,
  :createdAt,
  :data,
  :domainId,
  :environmentId,
  :id,
  :organizationId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Environment entity data model.
#
# @!attribute [rw] apiKeys
#   @return [Array, nil]
#
# @!attribute [rw] bridge
#   @return [Hash, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] dns
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Environment = Struct.new(
  :apiKeys,
  :bridge,
  :color,
  :dns,
  :id,
  :identifier,
  :name,
  :organizationId,
  :parentId,
  :slug,
  :type,
  keyword_init: true
)

# Request payload for Environment#list.
#
# @!attribute [rw] apiKeys
#   @return [Array, nil]
#
# @!attribute [rw] bridge
#   @return [Hash, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] dns
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
EnvironmentListMatch = Struct.new(
  :apiKeys,
  :bridge,
  :color,
  :dns,
  :id,
  :identifier,
  :name,
  :organizationId,
  :parentId,
  :slug,
  :type,
  keyword_init: true
)

# Request payload for Environment#create.
#
# @!attribute [rw] apiKeys
#   @return [Array, nil]
#
# @!attribute [rw] bridge
#   @return [Hash, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] dns
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
EnvironmentCreateData = Struct.new(
  :apiKeys,
  :bridge,
  :color,
  :dns,
  :id,
  :identifier,
  :name,
  :organizationId,
  :parentId,
  :slug,
  :type,
  keyword_init: true
)

# Request payload for Environment#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] apiKeys
#   @return [Array, nil]
#
# @!attribute [rw] bridge
#   @return [Hash, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] dns
#   @return [Hash, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
EnvironmentUpdateData = Struct.new(
  :id,
  :apiKeys,
  :bridge,
  :color,
  :dns,
  :identifier,
  :name,
  :organizationId,
  :parentId,
  :slug,
  :type,
  keyword_init: true
)

# Request payload for Environment#remove.
#
# @!attribute [rw] id
#   @return [String]
EnvironmentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EnvironmentTagsDto entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
EnvironmentTagsDto = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EnvironmentTagsDto#list.
#
# @!attribute [rw] id
#   @return [String]
EnvironmentTagsDtoListMatch = Struct.new(
  :id,
  keyword_init: true
)

# EnvironmentVariable entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isSecret
#   @return [Boolean]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array]
EnvironmentVariable = Struct.new(
  :createdAt,
  :id,
  :isSecret,
  :key,
  :organizationId,
  :type,
  :updatedAt,
  :values,
  keyword_init: true
)

# Request payload for EnvironmentVariable#load.
#
# @!attribute [rw] id
#   @return [String]
EnvironmentVariableLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EnvironmentVariable#list.
#
# @!attribute [rw] search
#   @return [String, nil]
EnvironmentVariableListMatch = Struct.new(
  :search,
  keyword_init: true
)

# Request payload for EnvironmentVariable#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isSecret
#   @return [Boolean]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array]
EnvironmentVariableCreateData = Struct.new(
  :createdAt,
  :id,
  :isSecret,
  :key,
  :organizationId,
  :type,
  :updatedAt,
  :values,
  keyword_init: true
)

# Request payload for EnvironmentVariable#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] isSecret
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] values
#   @return [Array, nil]
EnvironmentVariableUpdateData = Struct.new(
  :id,
  :createdAt,
  :isSecret,
  :key,
  :organizationId,
  :type,
  :updatedAt,
  :values,
  keyword_init: true
)

# Request payload for EnvironmentVariable#remove.
#
# @!attribute [rw] id
#   @return [String]
EnvironmentVariableRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EnvironmentVariableWorkflowInfoDto entity data model.
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] workflowId
#   @return [String]
EnvironmentVariableWorkflowInfoDto = Struct.new(
  :name,
  :workflowId,
  keyword_init: true
)

# Request payload for EnvironmentVariableWorkflowInfoDto#list.
#
# @!attribute [rw] variable_key
#   @return [String]
EnvironmentVariableWorkflowInfoDtoListMatch = Struct.new(
  :variable_key,
  keyword_init: true
)

# Event entity data model.
#
# @!attribute [rw] actor
#   @return [Object, nil]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Object, nil]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] tenant
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object]
#
# @!attribute [rw] transactionId
#   @return [String, nil]
Event = Struct.new(
  :actor,
  :agentId,
  :bridgeUrl,
  :context,
  :name,
  :overrides,
  :payload,
  :tenant,
  :to,
  :transactionId,
  keyword_init: true
)

# Request payload for Event#create.
#
# @!attribute [rw] actor
#   @return [Object, nil]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] bridgeUrl
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Object, nil]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] tenant
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object]
#
# @!attribute [rw] transactionId
#   @return [String, nil]
EventCreateData = Struct.new(
  :actor,
  :agentId,
  :bridgeUrl,
  :context,
  :name,
  :overrides,
  :payload,
  :tenant,
  :to,
  :transactionId,
  keyword_init: true
)

# Request payload for Event#remove.
#
# @!attribute [rw] transaction_id
#   @return [String]
EventRemoveMatch = Struct.new(
  :transaction_id,
  keyword_init: true
)

# GenerateChatOAuthUrlResponseDto entity data model.
#
# @!attribute [rw] autoLinkUser
#   @return [Boolean, nil]
#
# @!attribute [rw] connectionIdentifier
#   @return [String, nil]
#
# @!attribute [rw] connectionMode
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextHash
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] userScope
#   @return [Array, nil]
GenerateChatOAuthUrlResponseDto = Struct.new(
  :autoLinkUser,
  :connectionIdentifier,
  :connectionMode,
  :context,
  :contextHash,
  :integrationIdentifier,
  :mode,
  :scope,
  :subscriberId,
  :userScope,
  keyword_init: true
)

# Request payload for GenerateChatOAuthUrlResponseDto#create.
#
# @!attribute [rw] autoLinkUser
#   @return [Boolean, nil]
#
# @!attribute [rw] connectionIdentifier
#   @return [String, nil]
#
# @!attribute [rw] connectionMode
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextHash
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] userScope
#   @return [Array, nil]
GenerateChatOAuthUrlResponseDtoCreateData = Struct.new(
  :autoLinkUser,
  :connectionIdentifier,
  :connectionMode,
  :context,
  :contextHash,
  :integrationIdentifier,
  :mode,
  :scope,
  :subscriberId,
  :userScope,
  keyword_init: true
)

# GeneratePreviewResponseDto entity data model.
#
# @!attribute [rw] controlValues
#   @return [Hash, nil]
#
# @!attribute [rw] previewPayload
#   @return [Object, nil]
GeneratePreviewResponseDto = Struct.new(
  :controlValues,
  :previewPayload,
  keyword_init: true
)

# Request payload for GeneratePreviewResponseDto#create.
#
# @!attribute [rw] step_id
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [String]
#
# @!attribute [rw] controlValues
#   @return [Hash, nil]
#
# @!attribute [rw] previewPayload
#   @return [Object, nil]
GeneratePreviewResponseDtoCreateData = Struct.new(
  :step_id,
  :workflow_id,
  :controlValues,
  :previewPayload,
  keyword_init: true
)

# ImportMasterJsonResponseDto entity data model.
#
# @!attribute [rw] failed
#   @return [Array, nil]
#
# @!attribute [rw] locale
#   @return [String]
#
# @!attribute [rw] masterJson
#   @return [Hash]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] successful
#   @return [Array, nil]
ImportMasterJsonResponseDto = Struct.new(
  :failed,
  :locale,
  :masterJson,
  :message,
  :success,
  :successful,
  keyword_init: true
)

# Request payload for ImportMasterJsonResponseDto#create.
#
# @!attribute [rw] failed
#   @return [Array, nil]
#
# @!attribute [rw] locale
#   @return [String]
#
# @!attribute [rw] masterJson
#   @return [Hash]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] successful
#   @return [Array, nil]
ImportMasterJsonResponseDtoCreateData = Struct.new(
  :failed,
  :locale,
  :masterJson,
  :message,
  :success,
  :successful,
  keyword_init: true
)

# InboxNotificationDto entity data model.
#
# @!attribute [rw] archivedAt
#   @return [String, nil]
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] channelType
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deliveredAt
#   @return [Array, nil]
#
# @!attribute [rw] firstSeenAt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isArchived
#   @return [Boolean]
#
# @!attribute [rw] isRead
#   @return [Boolean]
#
# @!attribute [rw] isSeen
#   @return [Boolean]
#
# @!attribute [rw] isSnoozed
#   @return [Boolean]
#
# @!attribute [rw] primaryAction
#   @return [Object, nil]
#
# @!attribute [rw] readAt
#   @return [String, nil]
#
# @!attribute [rw] redirect
#   @return [Object, nil]
#
# @!attribute [rw] secondaryAction
#   @return [Object, nil]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] snoozeUntil
#   @return [String]
#
# @!attribute [rw] snoozedUntil
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [Object]
#
# @!attribute [rw] transactionId
#   @return [String]
#
# @!attribute [rw] workflow
#   @return [Object, nil]
InboxNotificationDto = Struct.new(
  :archivedAt,
  :avatar,
  :body,
  :channelType,
  :createdAt,
  :data,
  :deliveredAt,
  :firstSeenAt,
  :id,
  :isArchived,
  :isRead,
  :isSeen,
  :isSnoozed,
  :primaryAction,
  :readAt,
  :redirect,
  :secondaryAction,
  :severity,
  :snoozeUntil,
  :snoozedUntil,
  :subject,
  :tags,
  :to,
  :transactionId,
  :workflow,
  keyword_init: true
)

# Request payload for InboxNotificationDto#update.
#
# @!attribute [rw] action_type
#   @return [String, nil]
#
# @!attribute [rw] notification_id
#   @return [String]
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] archivedAt
#   @return [String, nil]
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] channelType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deliveredAt
#   @return [Array, nil]
#
# @!attribute [rw] firstSeenAt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isArchived
#   @return [Boolean, nil]
#
# @!attribute [rw] isRead
#   @return [Boolean, nil]
#
# @!attribute [rw] isSeen
#   @return [Boolean, nil]
#
# @!attribute [rw] isSnoozed
#   @return [Boolean, nil]
#
# @!attribute [rw] primaryAction
#   @return [Object, nil]
#
# @!attribute [rw] readAt
#   @return [String, nil]
#
# @!attribute [rw] redirect
#   @return [Object, nil]
#
# @!attribute [rw] secondaryAction
#   @return [Object, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] snoozeUntil
#   @return [String, nil]
#
# @!attribute [rw] snoozedUntil
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
#
# @!attribute [rw] transactionId
#   @return [String, nil]
#
# @!attribute [rw] workflow
#   @return [Object, nil]
InboxNotificationDtoUpdateData = Struct.new(
  :action_type,
  :notification_id,
  :subscriber_id,
  :context_key,
  :archivedAt,
  :avatar,
  :body,
  :channelType,
  :createdAt,
  :data,
  :deliveredAt,
  :firstSeenAt,
  :id,
  :isArchived,
  :isRead,
  :isSeen,
  :isSnoozed,
  :primaryAction,
  :readAt,
  :redirect,
  :secondaryAction,
  :severity,
  :snoozeUntil,
  :snoozedUntil,
  :subject,
  :tags,
  :to,
  :transactionId,
  :workflow,
  keyword_init: true
)

# Integration entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] check
#   @return [Boolean, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Hash, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] primary
#   @return [Boolean]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
Integration = Struct.new(
  :active,
  :channel,
  :check,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :id,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for Integration#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] check
#   @return [Boolean, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Hash, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] primary
#   @return [Boolean, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationListMatch = Struct.new(
  :active,
  :channel,
  :check,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :id,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for Integration#create.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] check
#   @return [Boolean, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Hash, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] primary
#   @return [Boolean]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationCreateData = Struct.new(
  :active,
  :channel,
  :check,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :id,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for Integration#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] check
#   @return [Boolean, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Hash, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] primary
#   @return [Boolean, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationUpdateData = Struct.new(
  :id,
  :active,
  :channel,
  :check,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for Integration#remove.
#
# @!attribute [rw] id
#   @return [String]
IntegrationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IntegrationResponseDto entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] primary
#   @return [Boolean]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationResponseDto = Struct.new(
  :active,
  :channel,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :id,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for IntegrationResponseDto#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] primary
#   @return [Boolean, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationResponseDtoListMatch = Struct.new(
  :active,
  :channel,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :id,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Request payload for IntegrationResponseDto#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] credentials
#   @return [Object, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] deletedBy
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] primary
#   @return [Boolean]
#
# @!attribute [rw] providerId
#   @return [String]
#
# @!attribute [rw] rules
#   @return [Hash, nil]
IntegrationResponseDtoCreateData = Struct.new(
  :id,
  :active,
  :channel,
  :conditions,
  :configurations,
  :credentials,
  :deleted,
  :deletedAt,
  :deletedBy,
  :environmentId,
  :identifier,
  :kind,
  :name,
  :organizationId,
  :primary,
  :providerId,
  :rules,
  keyword_init: true
)

# Layout entity data model.
#
# @!attribute [rw] controlValues
#   @return [Object, nil]
#
# @!attribute [rw] controls
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isDefault
#   @return [Boolean]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean]
#
# @!attribute [rw] layoutId
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] variables
#   @return [Hash, nil]
Layout = Struct.new(
  :controlValues,
  :controls,
  :createdAt,
  :id,
  :isDefault,
  :isTranslationEnabled,
  :layoutId,
  :name,
  :origin,
  :slug,
  :source,
  :type,
  :updatedAt,
  :updatedBy,
  :variables,
  keyword_init: true
)

# Request payload for Layout#load.
#
# @!attribute [rw] id
#   @return [String]
LayoutLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Layout#list.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
LayoutListMatch = Struct.new(
  :limit,
  :offset,
  :order_by,
  :order_direction,
  :query,
  keyword_init: true
)

# Request payload for Layout#create.
#
# @!attribute [rw] controlValues
#   @return [Object, nil]
#
# @!attribute [rw] controls
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isDefault
#   @return [Boolean]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean]
#
# @!attribute [rw] layoutId
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] variables
#   @return [Hash, nil]
LayoutCreateData = Struct.new(
  :controlValues,
  :controls,
  :createdAt,
  :id,
  :isDefault,
  :isTranslationEnabled,
  :layoutId,
  :name,
  :origin,
  :slug,
  :source,
  :type,
  :updatedAt,
  :updatedBy,
  :variables,
  keyword_init: true
)

# Request payload for Layout#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] controlValues
#   @return [Object, nil]
#
# @!attribute [rw] controls
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] isDefault
#   @return [Boolean, nil]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] layoutId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] variables
#   @return [Hash, nil]
LayoutUpdateData = Struct.new(
  :id,
  :controlValues,
  :controls,
  :createdAt,
  :isDefault,
  :isTranslationEnabled,
  :layoutId,
  :name,
  :origin,
  :slug,
  :source,
  :type,
  :updatedAt,
  :updatedBy,
  :variables,
  keyword_init: true
)

# Request payload for Layout#remove.
#
# @!attribute [rw] id
#   @return [String]
LayoutRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# LayoutResponseDto entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
LayoutResponseDto = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for LayoutResponseDto#create.
#
# @!attribute [rw] id
#   @return [String]
LayoutResponseDtoCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Link entity data model.
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextHash
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
Link = Struct.new(
  :context,
  :contextHash,
  :integrationIdentifier,
  :subscriberId,
  keyword_init: true
)

# Request payload for Link#create.
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] contextHash
#   @return [String, nil]
#
# @!attribute [rw] integrationIdentifier
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
LinkCreateData = Struct.new(
  :context,
  :contextHash,
  :integrationIdentifier,
  :subscriberId,
  keyword_init: true
)

# ListAgentIntegrationsResponseDto entity data model.
#
# @!attribute [rw] agentId
#   @return [String]
#
# @!attribute [rw] connectedAt
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] exceedsPlanLimit
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ListAgentIntegrationsResponseDto = Struct.new(
  :agentId,
  :connectedAt,
  :createdAt,
  :environmentId,
  :exceedsPlanLimit,
  :id,
  :integration,
  :organizationId,
  :updatedAt,
  keyword_init: true
)

# Request payload for ListAgentIntegrationsResponseDto#list.
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_identifier
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
ListAgentIntegrationsResponseDtoListMatch = Struct.new(
  :identifier,
  :after,
  :before,
  :include_cursor,
  :integration_identifier,
  :limit,
  :order_by,
  :order_direction,
  keyword_init: true
)

# ListDomainRoutesResponseDto entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domainId
#   @return [String]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ListDomainRoutesResponseDto = Struct.new(
  :address,
  :agentId,
  :createdAt,
  :data,
  :domainId,
  :environmentId,
  :id,
  :organizationId,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ListDomainRoutesResponseDto#list.
#
# @!attribute [rw] domain_id
#   @return [String]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
ListDomainRoutesResponseDtoListMatch = Struct.new(
  :domain_id,
  :after,
  :agent_id,
  :before,
  :include_cursor,
  :limit,
  :order_by,
  :order_direction,
  keyword_init: true
)

# ListTopicSubscriptionsResponseDto entity data model.
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
#
# @!attribute [rw] subscriber
#   @return [Object]
#
# @!attribute [rw] topic
#   @return [Object]
ListTopicSubscriptionsResponseDto = Struct.new(
  :contextKeys,
  :createdAt,
  :id,
  :identifier,
  :preferences,
  :subscriber,
  :topic,
  keyword_init: true
)

# Request payload for ListTopicSubscriptionsResponseDto#list.
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
ListTopicSubscriptionsResponseDtoListMatch = Struct.new(
  :subscriber_id,
  :after,
  :before,
  :context_key,
  :include_cursor,
  :key,
  :limit,
  :order_by,
  :order_direction,
  keyword_init: true
)

# MasterJson entity data model.
#
# @!attribute [rw] layouts
#   @return [Hash]
#
# @!attribute [rw] workflows
#   @return [Hash]
MasterJson = Struct.new(
  :layouts,
  :workflows,
  keyword_init: true
)

# Request payload for MasterJson#load.
#
# @!attribute [rw] locale
#   @return [String, nil]
MasterJsonLoadMatch = Struct.new(
  :locale,
  keyword_init: true
)

# Message entity data model.
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] content
#   @return [Object, nil]
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] cta
#   @return [Object]
#
# @!attribute [rw] deliveredAt
#   @return [Array, nil]
#
# @!attribute [rw] deviceTokens
#   @return [Array, nil]
#
# @!attribute [rw] directWebhookUrl
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] errorId
#   @return [String, nil]
#
# @!attribute [rw] errorText
#   @return [String, nil]
#
# @!attribute [rw] feedId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lastReadDate
#   @return [String, nil]
#
# @!attribute [rw] lastSeenDate
#   @return [String, nil]
#
# @!attribute [rw] messageTemplateId
#   @return [String, nil]
#
# @!attribute [rw] notificationId
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Hash, nil]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean]
#
# @!attribute [rw] seen
#   @return [Boolean]
#
# @!attribute [rw] snoozedUntil
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] subscriber
#   @return [Object, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] template
#   @return [Object, nil]
#
# @!attribute [rw] templateId
#   @return [String, nil]
#
# @!attribute [rw] templateIdentifier
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] transactionId
#   @return [String]
Message = Struct.new(
  :channel,
  :content,
  :contextKeys,
  :createdAt,
  :cta,
  :deliveredAt,
  :deviceTokens,
  :directWebhookUrl,
  :email,
  :environmentId,
  :errorId,
  :errorText,
  :feedId,
  :id,
  :lastReadDate,
  :lastSeenDate,
  :messageTemplateId,
  :notificationId,
  :organizationId,
  :overrides,
  :payload,
  :phone,
  :providerId,
  :read,
  :seen,
  :snoozedUntil,
  :status,
  :subject,
  :subscriber,
  :subscriberId,
  :template,
  :templateId,
  :templateIdentifier,
  :title,
  :transactionId,
  keyword_init: true
)

# Request payload for Message#list.
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] subscriber_id
#   @return [String, nil]
#
# @!attribute [rw] transaction_id
#   @return [Array, nil]
MessageListMatch = Struct.new(
  :channel,
  :context_key,
  :limit,
  :page,
  :subscriber_id,
  :transaction_id,
  keyword_init: true
)

# Request payload for Message#remove.
#
# @!attribute [rw] id
#   @return [String]
MessageRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# MessageResponseDto entity data model.
#
# @!attribute [rw] markAs
#   @return [String]
#
# @!attribute [rw] messageId
#   @return [Object]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
MessageResponseDto = Struct.new(
  :markAs,
  :messageId,
  :payload,
  :status,
  keyword_init: true
)

# Request payload for MessageResponseDto#create.
#
# @!attribute [rw] message_id
#   @return [String, nil]
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] markAs
#   @return [String]
#
# @!attribute [rw] messageId
#   @return [Object]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
MessageResponseDtoCreateData = Struct.new(
  :message_id,
  :subscriber_id,
  :type,
  :markAs,
  :messageId,
  :payload,
  :status,
  keyword_init: true
)

# NotificationFeedItemDto entity data model.
#
# @!attribute [rw] actor
#   @return [Object, nil]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] channel
#   @return [String]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] cta
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deviceTokens
#   @return [Array, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] feedId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] jobId
#   @return [String]
#
# @!attribute [rw] messageTemplateId
#   @return [String, nil]
#
# @!attribute [rw] notificationId
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Hash, nil]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean]
#
# @!attribute [rw] seen
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] subscriber
#   @return [Object, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] templateId
#   @return [String]
#
# @!attribute [rw] templateIdentifier
#   @return [String, nil]
#
# @!attribute [rw] transactionId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
NotificationFeedItemDto = Struct.new(
  :actor,
  :archived,
  :channel,
  :content,
  :createdAt,
  :cta,
  :data,
  :deviceTokens,
  :environmentId,
  :feedId,
  :id,
  :jobId,
  :messageTemplateId,
  :notificationId,
  :organizationId,
  :overrides,
  :payload,
  :providerId,
  :read,
  :seen,
  :status,
  :subject,
  :subscriber,
  :subscriberId,
  :tags,
  :templateId,
  :templateIdentifier,
  :transactionId,
  :updatedAt,
  keyword_init: true
)

# Request payload for NotificationFeedItemDto#list.
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] payload
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean, nil]
#
# @!attribute [rw] seen
#   @return [Boolean, nil]
NotificationFeedItemDtoListMatch = Struct.new(
  :subscriber_id,
  :limit,
  :page,
  :payload,
  :read,
  :seen,
  keyword_init: true
)

# PreferencesResponseDto entity data model.
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Array]
PreferencesResponseDto = Struct.new(
  :context,
  :preferences,
  keyword_init: true
)

# Request payload for PreferencesResponseDto#update.
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
PreferencesResponseDtoUpdateData = Struct.new(
  :subscriber_id,
  :context,
  :preferences,
  keyword_init: true
)

# Publish entity data model.
#
# @!attribute [rw] dryRun
#   @return [Boolean, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] sourceEnvironmentId
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [Object]
Publish = Struct.new(
  :dryRun,
  :resources,
  :results,
  :sourceEnvironmentId,
  :summary,
  keyword_init: true
)

# Request payload for Publish#create.
#
# @!attribute [rw] environment_id
#   @return [String]
#
# @!attribute [rw] dryRun
#   @return [Boolean, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] sourceEnvironmentId
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [Object]
PublishCreateData = Struct.new(
  :environment_id,
  :dryRun,
  :resources,
  :results,
  :sourceEnvironmentId,
  :summary,
  keyword_init: true
)

# RemoveSubscriberResponseDto entity data model.
class RemoveSubscriberResponseDto
end

# Request payload for RemoveSubscriberResponseDto#remove.
#
# @!attribute [rw] subscriber_id
#   @return [String]
RemoveSubscriberResponseDtoRemoveMatch = Struct.new(
  :subscriber_id,
  keyword_init: true
)

# Step entity data model.
#
# @!attribute [rw] controlValues
#   @return [Hash, nil]
#
# @!attribute [rw] controls
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issues
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] providerOverrides
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] stepId
#   @return [String]
#
# @!attribute [rw] stepResolverHash
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] variables
#   @return [Hash]
#
# @!attribute [rw] workflowDatabaseId
#   @return [String]
#
# @!attribute [rw] workflowId
#   @return [String]
Step = Struct.new(
  :controlValues,
  :controls,
  :id,
  :issues,
  :name,
  :origin,
  :providerOverrides,
  :slug,
  :stepId,
  :stepResolverHash,
  :type,
  :variables,
  :workflowDatabaseId,
  :workflowId,
  keyword_init: true
)

# Request payload for Step#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [String]
StepLoadMatch = Struct.new(
  :id,
  :workflow_id,
  keyword_init: true
)

# Subscriber entity data model.
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isOnline
#   @return [Boolean, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] lastOnlineAt
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] v
#   @return [Float, nil]
Subscriber = Struct.new(
  :avatar,
  :channels,
  :createdAt,
  :data,
  :deleted,
  :email,
  :environmentId,
  :firstName,
  :id,
  :isOnline,
  :lastName,
  :lastOnlineAt,
  :locale,
  :organizationId,
  :phone,
  :subscriberId,
  :timezone,
  :topics,
  :updatedAt,
  :v,
  keyword_init: true
)

# Request payload for Subscriber#load.
#
# @!attribute [rw] id
#   @return [String]
SubscriberLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Subscriber#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriber_id
#   @return [String, nil]
SubscriberListMatch = Struct.new(
  :after,
  :before,
  :email,
  :include_cursor,
  :limit,
  :name,
  :order_by,
  :order_direction,
  :phone,
  :subscriber_id,
  keyword_init: true
)

# Request payload for Subscriber#create.
#
# @!attribute [rw] fail_if_exist
#   @return [Boolean, nil]
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isOnline
#   @return [Boolean, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] lastOnlineAt
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] v
#   @return [Float, nil]
SubscriberCreateData = Struct.new(
  :fail_if_exist,
  :avatar,
  :channels,
  :createdAt,
  :data,
  :deleted,
  :email,
  :environmentId,
  :firstName,
  :id,
  :isOnline,
  :lastName,
  :lastOnlineAt,
  :locale,
  :organizationId,
  :phone,
  :subscriberId,
  :timezone,
  :topics,
  :updatedAt,
  :v,
  keyword_init: true
)

# Request payload for Subscriber#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] isOnline
#   @return [Boolean, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] lastOnlineAt
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] v
#   @return [Float, nil]
SubscriberUpdateData = Struct.new(
  :id,
  :avatar,
  :channels,
  :createdAt,
  :data,
  :deleted,
  :email,
  :environmentId,
  :firstName,
  :isOnline,
  :lastName,
  :lastOnlineAt,
  :locale,
  :organizationId,
  :phone,
  :subscriberId,
  :timezone,
  :topics,
  :updatedAt,
  :v,
  keyword_init: true
)

# Request payload for Subscriber#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] notification_id
#   @return [String, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
SubscriberRemoveMatch = Struct.new(
  :id,
  :notification_id,
  :context_key,
  :provider_id,
  keyword_init: true
)

# SubscriberNotificationsCountResponseDto entity data model.
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] filter
#   @return [Hash]
SubscriberNotificationsCountResponseDto = Struct.new(
  :count,
  :filter,
  keyword_init: true
)

# Request payload for SubscriberNotificationsCountResponseDto#list.
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [String]
SubscriberNotificationsCountResponseDtoListMatch = Struct.new(
  :subscriber_id,
  :filter,
  keyword_init: true
)

# SubscriberNotificationsResponseDto entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
SubscriberNotificationsResponseDto = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SubscriberNotificationsResponseDto#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] created_gte
#   @return [Float, nil]
#
# @!attribute [rw] created_lte
#   @return [Float, nil]
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] read
#   @return [Boolean, nil]
#
# @!attribute [rw] seen
#   @return [Boolean, nil]
#
# @!attribute [rw] severity
#   @return [Array, nil]
#
# @!attribute [rw] snoozed
#   @return [Boolean, nil]
SubscriberNotificationsResponseDtoListMatch = Struct.new(
  :id,
  :after,
  :archived,
  :context_key,
  :created_gte,
  :created_lte,
  :data,
  :limit,
  :offset,
  :read,
  :seen,
  :severity,
  :snoozed,
  keyword_init: true
)

# SubscriberPreferencesDto entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
SubscriberPreferencesDto = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SubscriberPreferencesDto#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] context_key
#   @return [Array, nil]
#
# @!attribute [rw] criticality
#   @return [String, nil]
SubscriberPreferencesDtoListMatch = Struct.new(
  :id,
  :context_key,
  :criticality,
  keyword_init: true
)

# Request payload for SubscriberPreferencesDto#update.
#
# @!attribute [rw] id
#   @return [String]
SubscriberPreferencesDtoUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# SubscriberResponseDto entity data model.
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isOnline
#   @return [Boolean, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] lastOnlineAt
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] v
#   @return [Float, nil]
SubscriberResponseDto = Struct.new(
  :avatar,
  :channels,
  :createdAt,
  :data,
  :deleted,
  :email,
  :environmentId,
  :firstName,
  :id,
  :isOnline,
  :lastName,
  :lastOnlineAt,
  :locale,
  :organizationId,
  :phone,
  :subscriberId,
  :timezone,
  :topics,
  :updatedAt,
  :v,
  keyword_init: true
)

# Request payload for SubscriberResponseDto#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] environmentId
#   @return [String, nil]
#
# @!attribute [rw] firstName
#   @return [String, nil]
#
# @!attribute [rw] isOnline
#   @return [Boolean, nil]
#
# @!attribute [rw] lastName
#   @return [String, nil]
#
# @!attribute [rw] lastOnlineAt
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] organizationId
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] subscriberId
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] v
#   @return [Float, nil]
SubscriberResponseDtoUpdateData = Struct.new(
  :id,
  :avatar,
  :channels,
  :createdAt,
  :data,
  :deleted,
  :email,
  :environmentId,
  :firstName,
  :isOnline,
  :lastName,
  :lastOnlineAt,
  :locale,
  :organizationId,
  :phone,
  :subscriberId,
  :timezone,
  :topics,
  :updatedAt,
  :v,
  keyword_init: true
)

# Subscription entity data model.
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
#
# @!attribute [rw] subscriber
#   @return [Object]
#
# @!attribute [rw] topic
#   @return [Object]
#
# @!attribute [rw] updatedAt
#   @return [String]
Subscription = Struct.new(
  :contextKeys,
  :createdAt,
  :id,
  :identifier,
  :name,
  :preferences,
  :subscriber,
  :topic,
  :updatedAt,
  keyword_init: true
)

# Request payload for Subscription#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] topic_id
#   @return [String]
SubscriptionLoadMatch = Struct.new(
  :id,
  :topic_id,
  keyword_init: true
)

# Request payload for Subscription#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] topic_id
#   @return [String]
#
# @!attribute [rw] contextKeys
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferences
#   @return [Array, nil]
#
# @!attribute [rw] subscriber
#   @return [Object, nil]
#
# @!attribute [rw] topic
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SubscriptionUpdateData = Struct.new(
  :id,
  :topic_id,
  :contextKeys,
  :createdAt,
  :identifier,
  :name,
  :preferences,
  :subscriber,
  :topic,
  :updatedAt,
  keyword_init: true
)

# Topic entity data model.
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
Topic = Struct.new(
  :createdAt,
  :data,
  :id,
  :key,
  :name,
  :updatedAt,
  keyword_init: true
)

# Request payload for Topic#load.
#
# @!attribute [rw] id
#   @return [String]
TopicLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Topic#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_cursor
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
TopicListMatch = Struct.new(
  :after,
  :before,
  :include_cursor,
  :key,
  :limit,
  :name,
  :order_by,
  :order_direction,
  keyword_init: true
)

# Request payload for Topic#create.
#
# @!attribute [rw] fail_if_exist
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
TopicCreateData = Struct.new(
  :fail_if_exist,
  :createdAt,
  :data,
  :id,
  :key,
  :name,
  :updatedAt,
  keyword_init: true
)

# Request payload for Topic#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
TopicUpdateData = Struct.new(
  :id,
  :createdAt,
  :data,
  :key,
  :name,
  :updatedAt,
  keyword_init: true
)

# Request payload for Topic#remove.
#
# @!attribute [rw] id
#   @return [String]
TopicRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# TopicSubscriberDto entity data model.
#
# @!attribute [rw] environmentId
#   @return [String]
#
# @!attribute [rw] externalSubscriberId
#   @return [String]
#
# @!attribute [rw] organizationId
#   @return [String]
#
# @!attribute [rw] subscriberId
#   @return [String]
#
# @!attribute [rw] topicId
#   @return [String]
#
# @!attribute [rw] topicKey
#   @return [String]
TopicSubscriberDto = Struct.new(
  :environmentId,
  :externalSubscriberId,
  :organizationId,
  :subscriberId,
  :topicId,
  :topicKey,
  keyword_init: true
)

# Request payload for TopicSubscriberDto#load.
#
# @!attribute [rw] external_subscriber_id
#   @return [String]
#
# @!attribute [rw] topic_id
#   @return [String]
TopicSubscriberDtoLoadMatch = Struct.new(
  :external_subscriber_id,
  :topic_id,
  keyword_init: true
)

# TopicSubscriptionsResponseDto entity data model.
class TopicSubscriptionsResponseDto
end

# Request payload for TopicSubscriptionsResponseDto#remove.
#
# @!attribute [rw] topic_key
#   @return [String]
TopicSubscriptionsResponseDtoRemoveMatch = Struct.new(
  :topic_key,
  keyword_init: true
)

# Translation entity data model.
#
# @!attribute [rw] content
#   @return [Hash]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceType
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Translation = Struct.new(
  :content,
  :createdAt,
  :id,
  :locale,
  :resourceId,
  :resourceType,
  :updatedAt,
  keyword_init: true
)

# Request payload for Translation#load.
#
# @!attribute [rw] locale
#   @return [String]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
TranslationLoadMatch = Struct.new(
  :locale,
  :resource_id,
  :resource_type,
  keyword_init: true
)

# Request payload for Translation#create.
#
# @!attribute [rw] content
#   @return [Hash]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceType
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
TranslationCreateData = Struct.new(
  :content,
  :createdAt,
  :id,
  :locale,
  :resourceId,
  :resourceType,
  :updatedAt,
  keyword_init: true
)

# Request payload for Translation#remove.
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
TranslationRemoveMatch = Struct.new(
  :locale,
  :resource_id,
  :resource_type,
  keyword_init: true
)

# TranslationGroupDto entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] locales
#   @return [Array]
#
# @!attribute [rw] outdatedLocales
#   @return [Array, nil]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceName
#   @return [String]
#
# @!attribute [rw] resourceType
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
TranslationGroupDto = Struct.new(
  :createdAt,
  :id,
  :locales,
  :outdatedLocales,
  :resourceId,
  :resourceName,
  :resourceType,
  :updatedAt,
  keyword_init: true
)

# Request payload for TranslationGroupDto#load.
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
TranslationGroupDtoLoadMatch = Struct.new(
  :resource_id,
  :resource_type,
  keyword_init: true
)

# TriggerEventResponseDto entity data model.
#
# @!attribute [rw] acknowledged
#   @return [Boolean]
#
# @!attribute [rw] activityFeedLink
#   @return [String, nil]
#
# @!attribute [rw] actor
#   @return [Object, nil]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Array, nil]
#
# @!attribute [rw] events
#   @return [Array]
#
# @!attribute [rw] jobData
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Object, nil]
#
# @!attribute [rw] payload
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tenant
#   @return [Object, nil]
#
# @!attribute [rw] transactionId
#   @return [String, nil]
TriggerEventResponseDto = Struct.new(
  :acknowledged,
  :activityFeedLink,
  :actor,
  :agentId,
  :context,
  :error,
  :events,
  :jobData,
  :name,
  :overrides,
  :payload,
  :status,
  :tenant,
  :transactionId,
  keyword_init: true
)

# Request payload for TriggerEventResponseDto#create.
#
# @!attribute [rw] acknowledged
#   @return [Boolean]
#
# @!attribute [rw] activityFeedLink
#   @return [String, nil]
#
# @!attribute [rw] actor
#   @return [Object, nil]
#
# @!attribute [rw] agentId
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Array, nil]
#
# @!attribute [rw] events
#   @return [Array]
#
# @!attribute [rw] jobData
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overrides
#   @return [Object, nil]
#
# @!attribute [rw] payload
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tenant
#   @return [Object, nil]
#
# @!attribute [rw] transactionId
#   @return [String, nil]
TriggerEventResponseDtoCreateData = Struct.new(
  :acknowledged,
  :activityFeedLink,
  :actor,
  :agentId,
  :context,
  :error,
  :events,
  :jobData,
  :name,
  :overrides,
  :payload,
  :status,
  :tenant,
  :transactionId,
  keyword_init: true
)

# Unseen entity data model.
#
# @!attribute [rw] count
#   @return [Float]
Unseen = Struct.new(
  :count,
  keyword_init: true
)

# Request payload for Unseen#load.
#
# @!attribute [rw] subscriber_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] seen
#   @return [Boolean, nil]
UnseenLoadMatch = Struct.new(
  :subscriber_id,
  :limit,
  :seen,
  keyword_init: true
)

# Upload entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] failedUploads
#   @return [Float]
#
# @!attribute [rw] successfulUploads
#   @return [Float]
#
# @!attribute [rw] totalFiles
#   @return [Float]
Upload = Struct.new(
  :errors,
  :failedUploads,
  :successfulUploads,
  :totalFiles,
  keyword_init: true
)

# Request payload for Upload#create.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] failedUploads
#   @return [Float]
#
# @!attribute [rw] successfulUploads
#   @return [Float]
#
# @!attribute [rw] totalFiles
#   @return [Float]
UploadCreateData = Struct.new(
  :errors,
  :failedUploads,
  :successfulUploads,
  :totalFiles,
  keyword_init: true
)

# WebhookResultDto entity data model.
class WebhookResultDto
end

# Request payload for WebhookResultDto#create.
#
# @!attribute [rw] environment_id
#   @return [String]
#
# @!attribute [rw] integration_id
#   @return [String]
WebhookResultDtoCreateData = Struct.new(
  :environment_id,
  :integration_id,
  keyword_init: true
)

# Workflow entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues
#   @return [Hash, nil]
#
# @!attribute [rw] lastPublishedAt
#   @return [String, nil]
#
# @!attribute [rw] lastPublishedBy
#   @return [Object, nil]
#
# @!attribute [rw] lastTriggeredAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] payloadExample
#   @return [Hash, nil]
#
# @!attribute [rw] payloadSchema
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Object]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stepTypeOverviews
#   @return [Array]
#
# @!attribute [rw] steps
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] validatePayload
#   @return [Boolean, nil]
#
# @!attribute [rw] workflowId
#   @return [String]
Workflow = Struct.new(
  :active,
  :agent,
  :createdAt,
  :description,
  :id,
  :isTranslationEnabled,
  :issues,
  :lastPublishedAt,
  :lastPublishedBy,
  :lastTriggeredAt,
  :name,
  :origin,
  :payloadExample,
  :payloadSchema,
  :preferences,
  :severity,
  :slug,
  :source,
  :status,
  :stepTypeOverviews,
  :steps,
  :tags,
  :updatedAt,
  :updatedBy,
  :validatePayload,
  :workflowId,
  keyword_init: true
)

# Request payload for Workflow#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] environment_id
#   @return [String, nil]
WorkflowLoadMatch = Struct.new(
  :id,
  :environment_id,
  keyword_init: true
)

# Request payload for Workflow#list.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Array, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
WorkflowListMatch = Struct.new(
  :limit,
  :offset,
  :order_by,
  :order_direction,
  :query,
  :status,
  :tag,
  keyword_init: true
)

# Request payload for Workflow#create.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues
#   @return [Hash, nil]
#
# @!attribute [rw] lastPublishedAt
#   @return [String, nil]
#
# @!attribute [rw] lastPublishedBy
#   @return [Object, nil]
#
# @!attribute [rw] lastTriggeredAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] payloadExample
#   @return [Hash, nil]
#
# @!attribute [rw] payloadSchema
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Object]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stepTypeOverviews
#   @return [Array]
#
# @!attribute [rw] steps
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] validatePayload
#   @return [Boolean, nil]
#
# @!attribute [rw] workflowId
#   @return [String]
WorkflowCreateData = Struct.new(
  :active,
  :agent,
  :createdAt,
  :description,
  :id,
  :isTranslationEnabled,
  :issues,
  :lastPublishedAt,
  :lastPublishedBy,
  :lastTriggeredAt,
  :name,
  :origin,
  :payloadExample,
  :payloadSchema,
  :preferences,
  :severity,
  :slug,
  :source,
  :status,
  :stepTypeOverviews,
  :steps,
  :tags,
  :updatedAt,
  :updatedBy,
  :validatePayload,
  :workflowId,
  keyword_init: true
)

# Request payload for Workflow#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues
#   @return [Hash, nil]
#
# @!attribute [rw] lastPublishedAt
#   @return [String, nil]
#
# @!attribute [rw] lastPublishedBy
#   @return [Object, nil]
#
# @!attribute [rw] lastTriggeredAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] payloadExample
#   @return [Hash, nil]
#
# @!attribute [rw] payloadSchema
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Object, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stepTypeOverviews
#   @return [Array, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] validatePayload
#   @return [Boolean, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
WorkflowUpdateData = Struct.new(
  :id,
  :active,
  :agent,
  :createdAt,
  :description,
  :isTranslationEnabled,
  :issues,
  :lastPublishedAt,
  :lastPublishedBy,
  :lastTriggeredAt,
  :name,
  :origin,
  :payloadExample,
  :payloadSchema,
  :preferences,
  :severity,
  :slug,
  :source,
  :status,
  :stepTypeOverviews,
  :steps,
  :tags,
  :updatedAt,
  :updatedBy,
  :validatePayload,
  :workflowId,
  keyword_init: true
)

# Request payload for Workflow#remove.
#
# @!attribute [rw] id
#   @return [String]
WorkflowRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WorkflowInfoDto entity data model.
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] workflowId
#   @return [String]
WorkflowInfoDto = Struct.new(
  :name,
  :workflowId,
  keyword_init: true
)

# Request payload for WorkflowInfoDto#list.
#
# @!attribute [rw] layout_id
#   @return [String]
WorkflowInfoDtoListMatch = Struct.new(
  :layout_id,
  keyword_init: true
)

# WorkflowResponseDto entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues
#   @return [Hash, nil]
#
# @!attribute [rw] lastPublishedAt
#   @return [String, nil]
#
# @!attribute [rw] lastPublishedBy
#   @return [Object, nil]
#
# @!attribute [rw] lastTriggeredAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] payloadExample
#   @return [Hash, nil]
#
# @!attribute [rw] payloadSchema
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Object]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] steps
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] validatePayload
#   @return [Boolean, nil]
#
# @!attribute [rw] workflowId
#   @return [String]
WorkflowResponseDto = Struct.new(
  :active,
  :agent,
  :createdAt,
  :description,
  :id,
  :isTranslationEnabled,
  :issues,
  :lastPublishedAt,
  :lastPublishedBy,
  :lastTriggeredAt,
  :name,
  :origin,
  :payloadExample,
  :payloadSchema,
  :preferences,
  :severity,
  :slug,
  :status,
  :steps,
  :tags,
  :updatedAt,
  :updatedBy,
  :validatePayload,
  :workflowId,
  keyword_init: true
)

# Request payload for WorkflowResponseDto#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] isTranslationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues
#   @return [Hash, nil]
#
# @!attribute [rw] lastPublishedAt
#   @return [String, nil]
#
# @!attribute [rw] lastPublishedBy
#   @return [Object, nil]
#
# @!attribute [rw] lastTriggeredAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] payloadExample
#   @return [Hash, nil]
#
# @!attribute [rw] payloadSchema
#   @return [Hash, nil]
#
# @!attribute [rw] preferences
#   @return [Object, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] updatedBy
#   @return [Object, nil]
#
# @!attribute [rw] validatePayload
#   @return [Boolean, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
WorkflowResponseDtoUpdateData = Struct.new(
  :id,
  :active,
  :agent,
  :createdAt,
  :description,
  :isTranslationEnabled,
  :issues,
  :lastPublishedAt,
  :lastPublishedBy,
  :lastTriggeredAt,
  :name,
  :origin,
  :payloadExample,
  :payloadSchema,
  :preferences,
  :severity,
  :slug,
  :status,
  :steps,
  :tags,
  :updatedAt,
  :updatedBy,
  :validatePayload,
  :workflowId,
  keyword_init: true
)

