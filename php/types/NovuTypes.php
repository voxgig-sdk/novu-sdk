<?php
declare(strict_types=1);

// Typed models for the Novu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ActivityNotificationResponseDto entity data model. */
class ActivityNotificationResponseDto
{
    public ?array $channels = null;
    public ?array $contextKeys = null;
    public ?array $controls = null;
    public ?string $createdAt = null;
    public ?bool $critical = null;
    public ?string $digestedNotificationId = null;
    public string $environmentId;
    public ?string $id = null;
    public ?array $jobs = null;
    public string $organizationId;
    public ?array $payload = null;
    public ?string $severity = null;
    public mixed $subscriber = null;
    public string $subscriberId;
    public ?array $tags = null;
    public mixed $template = null;
    public ?string $templateId = null;
    public ?array $to = null;
    public ?array $topics = null;
    public string $transactionId;
    public ?string $updatedAt = null;
}

/** Request payload for ActivityNotificationResponseDto#load. */
class ActivityNotificationResponseDtoLoadMatch
{
    public string $notification_id;
}

/** Request payload for ActivityNotificationResponseDto#list. */
class ActivityNotificationResponseDtoListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?array $channel = null;
    public ?array $context_key = null;
    public ?array $email = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $search = null;
    public ?array $severity = null;
    public ?array $subscriber_id = null;
    public ?string $subscription_id = null;
    public ?array $template = null;
    public ?string $topic_key = null;
    public ?string $transaction_id = null;
}

/** Agent entity data model. */
class Agent
{
    public bool $active;
    public array $behavior;
    public ?string $bridgeUrl = null;
    public string $createdAt;
    public ?string $createdBy = null;
    public ?string $description = null;
    public ?bool $devBridgeActive = null;
    public ?string $devBridgeUrl = null;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public string $identifier;
    public ?array $integrations = null;
    public mixed $managedRuntime = null;
    public string $name;
    public string $organizationId;
    public ?string $runtime = null;
    public string $updatedAt;
    public ?string $visibility = null;
}

/** Request payload for Agent#load. */
class AgentLoadMatch
{
    public string $id;
}

/** Request payload for Agent#list. */
class AgentListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $identifier = null;
    public ?bool $include_cursor = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** Request payload for Agent#create. */
class AgentCreateData
{
    public bool $active;
    public array $behavior;
    public ?string $bridgeUrl = null;
    public string $createdAt;
    public ?string $createdBy = null;
    public ?string $description = null;
    public ?bool $devBridgeActive = null;
    public ?string $devBridgeUrl = null;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public string $identifier;
    public ?array $integrations = null;
    public mixed $managedRuntime = null;
    public string $name;
    public string $organizationId;
    public ?string $runtime = null;
    public string $updatedAt;
    public ?string $visibility = null;
}

/** Request payload for Agent#update. */
class AgentUpdateData
{
    public string $id;
    public ?bool $active = null;
    public ?array $behavior = null;
    public ?string $bridgeUrl = null;
    public ?string $createdAt = null;
    public ?string $createdBy = null;
    public ?string $description = null;
    public ?bool $devBridgeActive = null;
    public ?string $devBridgeUrl = null;
    public ?string $environmentId = null;
    public ?bool $exceedsPlanLimit = null;
    public ?string $identifier = null;
    public ?array $integrations = null;
    public mixed $managedRuntime = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?string $runtime = null;
    public ?string $updatedAt = null;
    public ?string $visibility = null;
}

/** Request payload for Agent#remove. */
class AgentRemoveMatch
{
    public string $id;
    public string $delete_from_provider;
}

/** AgentIntegrationResponseDto entity data model. */
class AgentIntegrationResponseDto
{
    public string $agentId;
    public ?array $connectedAt = null;
    public string $createdAt;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public array $integration;
    public ?string $integrationIdentifier = null;
    public string $organizationId;
    public ?string $providerId = null;
    public string $updatedAt;
}

/** Request payload for AgentIntegrationResponseDto#create. */
class AgentIntegrationResponseDtoCreateData
{
    public string $identifier;
    public string $agentId;
    public ?array $connectedAt = null;
    public string $createdAt;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public array $integration;
    public ?string $integrationIdentifier = null;
    public string $organizationId;
    public ?string $providerId = null;
    public string $updatedAt;
}

/** Request payload for AgentIntegrationResponseDto#update. */
class AgentIntegrationResponseDtoUpdateData
{
    public string $agent_id;
    public string $agent_integration_id;
    public ?string $agentId = null;
    public ?array $connectedAt = null;
    public ?string $createdAt = null;
    public ?string $environmentId = null;
    public ?bool $exceedsPlanLimit = null;
    public ?string $id = null;
    public ?array $integration = null;
    public ?string $integrationIdentifier = null;
    public ?string $organizationId = null;
    public ?string $providerId = null;
    public ?string $updatedAt = null;
}

/** AgentResponseDto entity data model. */
class AgentResponseDto
{
    public bool $active;
    public array $behavior;
    public ?string $bridgeUrl = null;
    public string $createdAt;
    public ?string $createdBy = null;
    public ?string $description = null;
    public ?bool $devBridgeActive = null;
    public ?string $devBridgeUrl = null;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public string $identifier;
    public ?array $integrations = null;
    public mixed $managedRuntime = null;
    public string $name;
    public string $organizationId;
    public ?string $runtime = null;
    public string $updatedAt;
    public ?string $visibility = null;
}

/** Request payload for AgentResponseDto#update. */
class AgentResponseDtoUpdateData
{
    public string $identifier;
    public ?bool $active = null;
    public ?array $behavior = null;
    public ?string $bridgeUrl = null;
    public ?string $createdAt = null;
    public ?string $createdBy = null;
    public ?string $description = null;
    public ?bool $devBridgeActive = null;
    public ?string $devBridgeUrl = null;
    public ?string $environmentId = null;
    public ?bool $exceedsPlanLimit = null;
    public ?string $id = null;
    public ?array $integrations = null;
    public mixed $managedRuntime = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?string $runtime = null;
    public ?string $updatedAt = null;
    public ?string $visibility = null;
}

/** Bulk entity data model. */
class Bulk
{
    public array $subscribers;
}

/** Request payload for Bulk#create. */
class BulkCreateData
{
    public array $subscribers;
}

/** ChannelConnection entity data model. */
class ChannelConnection
{
    public array $auth;
    public string $channel;
    public ?string $connectionMode = null;
    public ?array $context = null;
    public array $contextKeys;
    public string $createdAt;
    public ?string $id = null;
    public string $identifier;
    public string $integrationIdentifier;
    public string $providerId;
    public string $subscriberId;
    public string $updatedAt;
    public array $workspace;
}

/** Request payload for ChannelConnection#load. */
class ChannelConnectionLoadMatch
{
    public string $id;
}

/** Request payload for ChannelConnection#list. */
class ChannelConnectionListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $channel = null;
    public ?string $connection_mode = null;
    public ?array $context_key = null;
    public ?bool $include_cursor = null;
    public ?string $integration_identifier = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $provider_id = null;
    public ?string $subscriber_id = null;
}

/** Request payload for ChannelConnection#create. */
class ChannelConnectionCreateData
{
    public array $auth;
    public string $channel;
    public ?string $connectionMode = null;
    public ?array $context = null;
    public array $contextKeys;
    public string $createdAt;
    public ?string $id = null;
    public string $identifier;
    public string $integrationIdentifier;
    public string $providerId;
    public string $subscriberId;
    public string $updatedAt;
    public array $workspace;
}

/** Request payload for ChannelConnection#update. */
class ChannelConnectionUpdateData
{
    public string $id;
    public ?array $auth = null;
    public ?string $channel = null;
    public ?string $connectionMode = null;
    public ?array $context = null;
    public ?array $contextKeys = null;
    public ?string $createdAt = null;
    public ?string $identifier = null;
    public ?string $integrationIdentifier = null;
    public ?string $providerId = null;
    public ?string $subscriberId = null;
    public ?string $updatedAt = null;
    public ?array $workspace = null;
}

/** Request payload for ChannelConnection#remove. */
class ChannelConnectionRemoveMatch
{
    public string $id;
}

/** ChannelEndpoint entity data model. */
class ChannelEndpoint
{
    public string $channel;
    public string $connectionIdentifier;
    public array $contextKeys;
    public string $createdAt;
    public mixed $endpoint;
    public ?string $id = null;
    public string $identifier;
    public string $integrationIdentifier;
    public string $providerId;
    public string $subscriberId;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ChannelEndpoint#load. */
class ChannelEndpointLoadMatch
{
    public string $id;
}

/** Request payload for ChannelEndpoint#list. */
class ChannelEndpointListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $channel = null;
    public ?string $connection_identifier = null;
    public ?array $context_key = null;
    public ?bool $include_cursor = null;
    public ?string $integration_identifier = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $provider_id = null;
    public ?string $subscriber_id = null;
}

/** Request payload for ChannelEndpoint#create. */
class ChannelEndpointCreateData
{
    public string $channel;
    public string $connectionIdentifier;
    public array $contextKeys;
    public string $createdAt;
    public mixed $endpoint;
    public ?string $id = null;
    public string $identifier;
    public string $integrationIdentifier;
    public string $providerId;
    public string $subscriberId;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ChannelEndpoint#update. */
class ChannelEndpointUpdateData
{
    public string $id;
    public ?string $channel = null;
    public ?string $connectionIdentifier = null;
    public ?array $contextKeys = null;
    public ?string $createdAt = null;
    public mixed $endpoint = null;
    public ?string $identifier = null;
    public ?string $integrationIdentifier = null;
    public ?string $providerId = null;
    public ?string $subscriberId = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** Request payload for ChannelEndpoint#remove. */
class ChannelEndpointRemoveMatch
{
    public string $id;
}

/** Configure entity data model. */
class Configure
{
    public string $botUsername;
    public string $configuredAt;
    public string $webhookUrl;
}

/** Request payload for Configure#create. */
class ConfigureCreateData
{
    public string $integration_id;
    public string $botUsername;
    public string $configuredAt;
    public string $webhookUrl;
}

/** Context entity data model. */
class Context
{
    public ?string $bridgeUrl = null;
    public string $createdAt;
    public array $data;
    public string $id;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Context#load. */
class ContextLoadMatch
{
    public string $id;
    public string $type;
}

/** Request payload for Context#list. */
class ContextListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $id = null;
    public ?bool $include_cursor = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $search = null;
}

/** Request payload for Context#create. */
class ContextCreateData
{
    public ?string $bridgeUrl = null;
    public string $createdAt;
    public array $data;
    public string $id;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Context#update. */
class ContextUpdateData
{
    public string $id;
    public string $type;
    public ?string $bridgeUrl = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?string $updatedAt = null;
}

/** Request payload for Context#remove. */
class ContextRemoveMatch
{
    public string $id;
    public string $type;
}

/** CreateSubscriptionsResponseDto entity data model. */
class CreateSubscriptionsResponseDto
{
    public ?array $context = null;
    public ?string $name = null;
    public ?array $preferences = null;
    public ?array $subscriberIds = null;
    public ?array $subscriptions = null;
}

/** Request payload for CreateSubscriptionsResponseDto#create. */
class CreateSubscriptionsResponseDtoCreateData
{
    public string $topic_key;
    public ?array $context = null;
    public ?string $name = null;
    public ?array $preferences = null;
    public ?array $subscriberIds = null;
    public ?array $subscriptions = null;
}

/** Diff entity data model. */
class Diff
{
    public array $resources;
    public string $sourceEnvironmentId;
    public mixed $summary;
    public string $targetEnvironmentId;
}

/** Request payload for Diff#create. */
class DiffCreateData
{
    public string $environment_id;
    public array $resources;
    public string $sourceEnvironmentId;
    public mixed $summary;
    public string $targetEnvironmentId;
}

/** Domain entity data model. */
class Domain
{
    public string $createdAt;
    public ?array $data = null;
    public ?string $dnsProvider = null;
    public string $environmentId;
    public ?array $expectedDnsRecords = null;
    public string $id;
    public bool $mxRecordConfigured;
    public string $name;
    public string $organizationId;
    public string $status;
    public string $updatedAt;
}

/** Request payload for Domain#load. */
class DomainLoadMatch
{
    public string $id;
}

/** Request payload for Domain#list. */
class DomainListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?bool $include_cursor = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** Request payload for Domain#create. */
class DomainCreateData
{
    public string $createdAt;
    public ?array $data = null;
    public ?string $dnsProvider = null;
    public string $environmentId;
    public ?array $expectedDnsRecords = null;
    public string $id;
    public bool $mxRecordConfigured;
    public string $name;
    public string $organizationId;
    public string $status;
    public string $updatedAt;
}

/** Request payload for Domain#update. */
class DomainUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?string $dnsProvider = null;
    public ?string $environmentId = null;
    public ?array $expectedDnsRecords = null;
    public ?bool $mxRecordConfigured = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?string $status = null;
    public ?string $updatedAt = null;
}

/** Request payload for Domain#remove. */
class DomainRemoveMatch
{
    public ?string $address = null;
    public string $id;
}

/** DomainConnectApplyUrlResponseDto entity data model. */
class DomainConnectApplyUrlResponseDto
{
    public ?string $redirectUri = null;
}

/** Request payload for DomainConnectApplyUrlResponseDto#create. */
class DomainConnectApplyUrlResponseDtoCreateData
{
    public string $domain_id;
    public ?string $redirectUri = null;
}

/** DomainConnectStatusResponseDto entity data model. */
class DomainConnectStatusResponseDto
{
    public ?string $id = null;
}

/** Request payload for DomainConnectStatusResponseDto#list. */
class DomainConnectStatusResponseDtoListMatch
{
    public string $id;
}

/** DomainResponseDto entity data model. */
class DomainResponseDto
{
    public string $createdAt;
    public ?array $data = null;
    public ?string $dnsProvider = null;
    public string $environmentId;
    public ?array $expectedDnsRecords = null;
    public string $id;
    public bool $mxRecordConfigured;
    public string $name;
    public string $organizationId;
    public string $status;
    public string $updatedAt;
}

/** Request payload for DomainResponseDto#create. */
class DomainResponseDtoCreateData
{
    public string $id;
    public string $createdAt;
    public ?array $data = null;
    public ?string $dnsProvider = null;
    public string $environmentId;
    public ?array $expectedDnsRecords = null;
    public bool $mxRecordConfigured;
    public string $name;
    public string $organizationId;
    public string $status;
    public string $updatedAt;
}

/** DomainRouteResponseDto entity data model. */
class DomainRouteResponseDto
{
    public string $address;
    public ?string $agentId = null;
    public string $createdAt;
    public ?array $data = null;
    public string $domainId;
    public string $environmentId;
    public string $id;
    public string $organizationId;
    public string $type;
    public string $updatedAt;
}

/** Request payload for DomainRouteResponseDto#load. */
class DomainRouteResponseDtoLoadMatch
{
    public string $address;
    public string $domain_id;
}

/** Request payload for DomainRouteResponseDto#create. */
class DomainRouteResponseDtoCreateData
{
    public string $id;
    public string $address;
    public ?string $agentId = null;
    public string $createdAt;
    public ?array $data = null;
    public string $domainId;
    public string $environmentId;
    public string $organizationId;
    public string $type;
    public string $updatedAt;
}

/** Request payload for DomainRouteResponseDto#update. */
class DomainRouteResponseDtoUpdateData
{
    public string $address;
    public string $domain_id;
    public ?string $agentId = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?string $domainId = null;
    public ?string $environmentId = null;
    public ?string $id = null;
    public ?string $organizationId = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** Environment entity data model. */
class Environment
{
    public ?array $apiKeys = null;
    public ?array $bridge = null;
    public string $color;
    public ?array $dns = null;
    public string $id;
    public string $identifier;
    public string $name;
    public string $organizationId;
    public ?string $parentId = null;
    public ?string $slug = null;
    public ?string $type = null;
}

/** Request payload for Environment#list. */
class EnvironmentListMatch
{
    public ?array $apiKeys = null;
    public ?array $bridge = null;
    public ?string $color = null;
    public ?array $dns = null;
    public ?string $id = null;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?string $parentId = null;
    public ?string $slug = null;
    public ?string $type = null;
}

/** Request payload for Environment#create. */
class EnvironmentCreateData
{
    public ?array $apiKeys = null;
    public ?array $bridge = null;
    public string $color;
    public ?array $dns = null;
    public string $id;
    public string $identifier;
    public string $name;
    public string $organizationId;
    public ?string $parentId = null;
    public ?string $slug = null;
    public ?string $type = null;
}

/** Request payload for Environment#update. */
class EnvironmentUpdateData
{
    public string $id;
    public ?array $apiKeys = null;
    public ?array $bridge = null;
    public ?string $color = null;
    public ?array $dns = null;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?string $parentId = null;
    public ?string $slug = null;
    public ?string $type = null;
}

/** Request payload for Environment#remove. */
class EnvironmentRemoveMatch
{
    public string $id;
}

/** EnvironmentTagsDto entity data model. */
class EnvironmentTagsDto
{
    public ?string $id = null;
}

/** Request payload for EnvironmentTagsDto#list. */
class EnvironmentTagsDtoListMatch
{
    public string $id;
}

/** EnvironmentVariable entity data model. */
class EnvironmentVariable
{
    public string $createdAt;
    public string $id;
    public bool $isSecret;
    public string $key;
    public string $organizationId;
    public string $type;
    public string $updatedAt;
    public array $values;
}

/** Request payload for EnvironmentVariable#load. */
class EnvironmentVariableLoadMatch
{
    public string $id;
}

/** Request payload for EnvironmentVariable#list. */
class EnvironmentVariableListMatch
{
    public ?string $search = null;
}

/** Request payload for EnvironmentVariable#create. */
class EnvironmentVariableCreateData
{
    public string $createdAt;
    public string $id;
    public bool $isSecret;
    public string $key;
    public string $organizationId;
    public string $type;
    public string $updatedAt;
    public array $values;
}

/** Request payload for EnvironmentVariable#update. */
class EnvironmentVariableUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?bool $isSecret = null;
    public ?string $key = null;
    public ?string $organizationId = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?array $values = null;
}

/** Request payload for EnvironmentVariable#remove. */
class EnvironmentVariableRemoveMatch
{
    public string $id;
}

/** EnvironmentVariableWorkflowInfoDto entity data model. */
class EnvironmentVariableWorkflowInfoDto
{
    public string $name;
    public string $workflowId;
}

/** Request payload for EnvironmentVariableWorkflowInfoDto#list. */
class EnvironmentVariableWorkflowInfoDtoListMatch
{
    public string $variable_key;
}

/** Event entity data model. */
class Event
{
    public mixed $actor = null;
    public ?string $agentId = null;
    public ?string $bridgeUrl = null;
    public ?array $context = null;
    public string $name;
    public mixed $overrides = null;
    public ?array $payload = null;
    public mixed $tenant = null;
    public mixed $to;
    public ?string $transactionId = null;
}

/** Request payload for Event#create. */
class EventCreateData
{
    public mixed $actor = null;
    public ?string $agentId = null;
    public ?string $bridgeUrl = null;
    public ?array $context = null;
    public string $name;
    public mixed $overrides = null;
    public ?array $payload = null;
    public mixed $tenant = null;
    public mixed $to;
    public ?string $transactionId = null;
}

/** Request payload for Event#remove. */
class EventRemoveMatch
{
    public string $transaction_id;
}

/** GenerateChatOAuthUrlResponseDto entity data model. */
class GenerateChatOAuthUrlResponseDto
{
    public ?bool $autoLinkUser = null;
    public ?string $connectionIdentifier = null;
    public ?string $connectionMode = null;
    public ?array $context = null;
    public ?string $contextHash = null;
    public string $integrationIdentifier;
    public ?string $mode = null;
    public ?array $scope = null;
    public ?string $subscriberId = null;
    public ?array $userScope = null;
}

/** Request payload for GenerateChatOAuthUrlResponseDto#create. */
class GenerateChatOAuthUrlResponseDtoCreateData
{
    public ?bool $autoLinkUser = null;
    public ?string $connectionIdentifier = null;
    public ?string $connectionMode = null;
    public ?array $context = null;
    public ?string $contextHash = null;
    public string $integrationIdentifier;
    public ?string $mode = null;
    public ?array $scope = null;
    public ?string $subscriberId = null;
    public ?array $userScope = null;
}

/** GeneratePreviewResponseDto entity data model. */
class GeneratePreviewResponseDto
{
    public ?array $controlValues = null;
    public mixed $previewPayload = null;
}

/** Request payload for GeneratePreviewResponseDto#create. */
class GeneratePreviewResponseDtoCreateData
{
    public string $step_id;
    public string $workflow_id;
    public ?array $controlValues = null;
    public mixed $previewPayload = null;
}

/** ImportMasterJsonResponseDto entity data model. */
class ImportMasterJsonResponseDto
{
    public ?array $failed = null;
    public string $locale;
    public array $masterJson;
    public string $message;
    public bool $success;
    public ?array $successful = null;
}

/** Request payload for ImportMasterJsonResponseDto#create. */
class ImportMasterJsonResponseDtoCreateData
{
    public ?array $failed = null;
    public string $locale;
    public array $masterJson;
    public string $message;
    public bool $success;
    public ?array $successful = null;
}

/** InboxNotificationDto entity data model. */
class InboxNotificationDto
{
    public ?string $archivedAt = null;
    public ?string $avatar = null;
    public string $body;
    public string $channelType;
    public string $createdAt;
    public ?array $data = null;
    public ?array $deliveredAt = null;
    public ?string $firstSeenAt = null;
    public string $id;
    public bool $isArchived;
    public bool $isRead;
    public bool $isSeen;
    public bool $isSnoozed;
    public mixed $primaryAction = null;
    public ?string $readAt = null;
    public mixed $redirect = null;
    public mixed $secondaryAction = null;
    public string $severity;
    public string $snoozeUntil;
    public ?string $snoozedUntil = null;
    public ?string $subject = null;
    public ?array $tags = null;
    public mixed $to;
    public string $transactionId;
    public mixed $workflow = null;
}

/** Request payload for InboxNotificationDto#update. */
class InboxNotificationDtoUpdateData
{
    public ?string $action_type = null;
    public string $notification_id;
    public string $subscriber_id;
    public ?array $context_key = null;
    public ?string $archivedAt = null;
    public ?string $avatar = null;
    public ?string $body = null;
    public ?string $channelType = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?array $deliveredAt = null;
    public ?string $firstSeenAt = null;
    public ?string $id = null;
    public ?bool $isArchived = null;
    public ?bool $isRead = null;
    public ?bool $isSeen = null;
    public ?bool $isSnoozed = null;
    public mixed $primaryAction = null;
    public ?string $readAt = null;
    public mixed $redirect = null;
    public mixed $secondaryAction = null;
    public ?string $severity = null;
    public ?string $snoozeUntil = null;
    public ?string $snoozedUntil = null;
    public ?string $subject = null;
    public ?array $tags = null;
    public mixed $to = null;
    public ?string $transactionId = null;
    public mixed $workflow = null;
}

/** Integration entity data model. */
class Integration
{
    public ?bool $active = null;
    public ?string $channel = null;
    public ?bool $check = null;
    public ?array $conditions = null;
    public ?array $configurations = null;
    public mixed $credentials = null;
    public bool $deleted;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public ?string $environmentId = null;
    public ?string $id = null;
    public ?string $identifier = null;
    public ?string $kind = null;
    public ?string $name = null;
    public string $organizationId;
    public bool $primary;
    public ?string $providerId = null;
    public ?array $rules = null;
}

/** Request payload for Integration#list. */
class IntegrationListMatch
{
    public ?bool $active = null;
    public ?string $channel = null;
    public ?bool $check = null;
    public ?array $conditions = null;
    public ?array $configurations = null;
    public mixed $credentials = null;
    public ?bool $deleted = null;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public ?string $environmentId = null;
    public ?string $id = null;
    public ?string $identifier = null;
    public ?string $kind = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?bool $primary = null;
    public ?string $providerId = null;
    public ?array $rules = null;
}

/** Request payload for Integration#create. */
class IntegrationCreateData
{
    public ?bool $active = null;
    public ?string $channel = null;
    public ?bool $check = null;
    public ?array $conditions = null;
    public ?array $configurations = null;
    public mixed $credentials = null;
    public bool $deleted;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public ?string $environmentId = null;
    public ?string $id = null;
    public ?string $identifier = null;
    public ?string $kind = null;
    public ?string $name = null;
    public string $organizationId;
    public bool $primary;
    public ?string $providerId = null;
    public ?array $rules = null;
}

/** Request payload for Integration#update. */
class IntegrationUpdateData
{
    public string $id;
    public ?bool $active = null;
    public ?string $channel = null;
    public ?bool $check = null;
    public ?array $conditions = null;
    public ?array $configurations = null;
    public mixed $credentials = null;
    public ?bool $deleted = null;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public ?string $environmentId = null;
    public ?string $identifier = null;
    public ?string $kind = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?bool $primary = null;
    public ?string $providerId = null;
    public ?array $rules = null;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public string $id;
}

/** IntegrationResponseDto entity data model. */
class IntegrationResponseDto
{
    public bool $active;
    public ?string $channel = null;
    public ?array $conditions = null;
    public mixed $configurations = null;
    public mixed $credentials = null;
    public bool $deleted;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public string $environmentId;
    public ?string $id = null;
    public string $identifier;
    public ?string $kind = null;
    public string $name;
    public string $organizationId;
    public bool $primary;
    public string $providerId;
    public ?array $rules = null;
}

/** Request payload for IntegrationResponseDto#list. */
class IntegrationResponseDtoListMatch
{
    public ?bool $active = null;
    public ?string $channel = null;
    public ?array $conditions = null;
    public mixed $configurations = null;
    public mixed $credentials = null;
    public ?bool $deleted = null;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public ?string $environmentId = null;
    public ?string $id = null;
    public ?string $identifier = null;
    public ?string $kind = null;
    public ?string $name = null;
    public ?string $organizationId = null;
    public ?bool $primary = null;
    public ?string $providerId = null;
    public ?array $rules = null;
}

/** Request payload for IntegrationResponseDto#create. */
class IntegrationResponseDtoCreateData
{
    public string $id;
    public bool $active;
    public ?string $channel = null;
    public ?array $conditions = null;
    public mixed $configurations = null;
    public mixed $credentials = null;
    public bool $deleted;
    public ?string $deletedAt = null;
    public ?string $deletedBy = null;
    public string $environmentId;
    public string $identifier;
    public ?string $kind = null;
    public string $name;
    public string $organizationId;
    public bool $primary;
    public string $providerId;
    public ?array $rules = null;
}

/** Layout entity data model. */
class Layout
{
    public mixed $controlValues = null;
    public mixed $controls;
    public string $createdAt;
    public string $id;
    public bool $isDefault;
    public bool $isTranslationEnabled;
    public string $layoutId;
    public string $name;
    public string $origin;
    public string $slug;
    public ?string $source = null;
    public string $type;
    public string $updatedAt;
    public mixed $updatedBy = null;
    public ?array $variables = null;
}

/** Request payload for Layout#load. */
class LayoutLoadMatch
{
    public string $id;
}

/** Request payload for Layout#list. */
class LayoutListMatch
{
    public ?float $limit = null;
    public ?float $offset = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $query = null;
}

/** Request payload for Layout#create. */
class LayoutCreateData
{
    public mixed $controlValues = null;
    public mixed $controls;
    public string $createdAt;
    public string $id;
    public bool $isDefault;
    public bool $isTranslationEnabled;
    public string $layoutId;
    public string $name;
    public string $origin;
    public string $slug;
    public ?string $source = null;
    public string $type;
    public string $updatedAt;
    public mixed $updatedBy = null;
    public ?array $variables = null;
}

/** Request payload for Layout#update. */
class LayoutUpdateData
{
    public string $id;
    public mixed $controlValues = null;
    public mixed $controls = null;
    public ?string $createdAt = null;
    public ?bool $isDefault = null;
    public ?bool $isTranslationEnabled = null;
    public ?string $layoutId = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?string $slug = null;
    public ?string $source = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public mixed $updatedBy = null;
    public ?array $variables = null;
}

/** Request payload for Layout#remove. */
class LayoutRemoveMatch
{
    public string $id;
}

/** LayoutResponseDto entity data model. */
class LayoutResponseDto
{
    public ?string $id = null;
}

/** Request payload for LayoutResponseDto#create. */
class LayoutResponseDtoCreateData
{
    public string $id;
}

/** Link entity data model. */
class Link
{
    public ?array $context = null;
    public ?string $contextHash = null;
    public string $integrationIdentifier;
    public string $subscriberId;
}

/** Request payload for Link#create. */
class LinkCreateData
{
    public ?array $context = null;
    public ?string $contextHash = null;
    public string $integrationIdentifier;
    public string $subscriberId;
}

/** ListAgentIntegrationsResponseDto entity data model. */
class ListAgentIntegrationsResponseDto
{
    public string $agentId;
    public ?array $connectedAt = null;
    public string $createdAt;
    public string $environmentId;
    public ?bool $exceedsPlanLimit = null;
    public string $id;
    public array $integration;
    public string $organizationId;
    public string $updatedAt;
}

/** Request payload for ListAgentIntegrationsResponseDto#list. */
class ListAgentIntegrationsResponseDtoListMatch
{
    public string $identifier;
    public ?string $after = null;
    public ?string $before = null;
    public ?bool $include_cursor = null;
    public ?string $integration_identifier = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** ListDomainRoutesResponseDto entity data model. */
class ListDomainRoutesResponseDto
{
    public string $address;
    public ?string $agentId = null;
    public string $createdAt;
    public ?array $data = null;
    public string $domainId;
    public string $environmentId;
    public string $id;
    public string $organizationId;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ListDomainRoutesResponseDto#list. */
class ListDomainRoutesResponseDtoListMatch
{
    public string $domain_id;
    public ?string $after = null;
    public ?string $agent_id = null;
    public ?string $before = null;
    public ?bool $include_cursor = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** ListTopicSubscriptionsResponseDto entity data model. */
class ListTopicSubscriptionsResponseDto
{
    public ?array $contextKeys = null;
    public string $createdAt;
    public string $id;
    public string $identifier;
    public ?array $preferences = null;
    public mixed $subscriber;
    public mixed $topic;
}

/** Request payload for ListTopicSubscriptionsResponseDto#list. */
class ListTopicSubscriptionsResponseDtoListMatch
{
    public string $subscriber_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?array $context_key = null;
    public ?bool $include_cursor = null;
    public ?string $key = null;
    public ?float $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** MasterJson entity data model. */
class MasterJson
{
    public array $layouts;
    public array $workflows;
}

/** Request payload for MasterJson#load. */
class MasterJsonLoadMatch
{
    public ?string $locale = null;
}

/** Message entity data model. */
class Message
{
    public string $channel;
    public mixed $content = null;
    public ?array $contextKeys = null;
    public string $createdAt;
    public mixed $cta;
    public ?array $deliveredAt = null;
    public ?array $deviceTokens = null;
    public ?string $directWebhookUrl = null;
    public ?string $email = null;
    public string $environmentId;
    public ?string $errorId = null;
    public ?string $errorText = null;
    public ?string $feedId = null;
    public ?string $id = null;
    public ?string $lastReadDate = null;
    public ?string $lastSeenDate = null;
    public ?string $messageTemplateId = null;
    public string $notificationId;
    public string $organizationId;
    public ?array $overrides = null;
    public ?array $payload = null;
    public ?string $phone = null;
    public ?string $providerId = null;
    public bool $read;
    public bool $seen;
    public ?string $snoozedUntil = null;
    public string $status;
    public ?string $subject = null;
    public mixed $subscriber = null;
    public string $subscriberId;
    public mixed $template = null;
    public ?string $templateId = null;
    public ?string $templateIdentifier = null;
    public ?string $title = null;
    public string $transactionId;
}

/** Request payload for Message#list. */
class MessageListMatch
{
    public ?string $channel = null;
    public ?array $context_key = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $subscriber_id = null;
    public ?array $transaction_id = null;
}

/** Request payload for Message#remove. */
class MessageRemoveMatch
{
    public string $id;
}

/** MessageResponseDto entity data model. */
class MessageResponseDto
{
    public string $markAs;
    public mixed $messageId;
    public ?array $payload = null;
    public string $status;
}

/** Request payload for MessageResponseDto#create. */
class MessageResponseDtoCreateData
{
    public ?string $message_id = null;
    public string $subscriber_id;
    public mixed $type = null;
    public string $markAs;
    public mixed $messageId;
    public ?array $payload = null;
    public string $status;
}

/** NotificationFeedItemDto entity data model. */
class NotificationFeedItemDto
{
    public mixed $actor = null;
    public bool $archived;
    public string $channel;
    public string $content;
    public ?string $createdAt = null;
    public mixed $cta;
    public ?array $data = null;
    public ?array $deviceTokens = null;
    public string $environmentId;
    public ?string $feedId = null;
    public string $id;
    public string $jobId;
    public ?string $messageTemplateId = null;
    public string $notificationId;
    public string $organizationId;
    public ?array $overrides = null;
    public ?array $payload = null;
    public ?string $providerId = null;
    public bool $read;
    public bool $seen;
    public string $status;
    public ?string $subject = null;
    public mixed $subscriber = null;
    public string $subscriberId;
    public ?array $tags = null;
    public string $templateId;
    public ?string $templateIdentifier = null;
    public string $transactionId;
    public ?string $updatedAt = null;
}

/** Request payload for NotificationFeedItemDto#list. */
class NotificationFeedItemDtoListMatch
{
    public string $subscriber_id;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $payload = null;
    public ?bool $read = null;
    public ?bool $seen = null;
}

/** PreferencesResponseDto entity data model. */
class PreferencesResponseDto
{
    public ?array $context = null;
    public array $preferences;
}

/** Request payload for PreferencesResponseDto#update. */
class PreferencesResponseDtoUpdateData
{
    public string $subscriber_id;
    public ?array $context = null;
    public ?array $preferences = null;
}

/** Publish entity data model. */
class Publish
{
    public ?bool $dryRun = null;
    public ?array $resources = null;
    public array $results;
    public ?string $sourceEnvironmentId = null;
    public mixed $summary;
}

/** Request payload for Publish#create. */
class PublishCreateData
{
    public string $environment_id;
    public ?bool $dryRun = null;
    public ?array $resources = null;
    public array $results;
    public ?string $sourceEnvironmentId = null;
    public mixed $summary;
}

/** RemoveSubscriberResponseDto entity data model. */
class RemoveSubscriberResponseDto
{
}

/** Request payload for RemoveSubscriberResponseDto#remove. */
class RemoveSubscriberResponseDtoRemoveMatch
{
    public string $subscriber_id;
}

/** Step entity data model. */
class Step
{
    public ?array $controlValues = null;
    public mixed $controls;
    public string $id;
    public mixed $issues = null;
    public string $name;
    public string $origin;
    public ?array $providerOverrides = null;
    public string $slug;
    public string $stepId;
    public ?string $stepResolverHash = null;
    public string $type;
    public array $variables;
    public string $workflowDatabaseId;
    public string $workflowId;
}

/** Request payload for Step#load. */
class StepLoadMatch
{
    public string $id;
    public string $workflow_id;
}

/** Subscriber entity data model. */
class Subscriber
{
    public ?string $avatar = null;
    public ?array $channels = null;
    public string $createdAt;
    public ?array $data = null;
    public bool $deleted;
    public ?string $email = null;
    public string $environmentId;
    public ?string $firstName = null;
    public ?string $id = null;
    public ?bool $isOnline = null;
    public ?string $lastName = null;
    public ?string $lastOnlineAt = null;
    public ?string $locale = null;
    public string $organizationId;
    public ?string $phone = null;
    public string $subscriberId;
    public ?string $timezone = null;
    public ?array $topics = null;
    public string $updatedAt;
    public ?float $v = null;
}

/** Request payload for Subscriber#load. */
class SubscriberLoadMatch
{
    public string $id;
}

/** Request payload for Subscriber#list. */
class SubscriberListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $email = null;
    public ?bool $include_cursor = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $phone = null;
    public ?string $subscriber_id = null;
}

/** Request payload for Subscriber#create. */
class SubscriberCreateData
{
    public ?bool $fail_if_exist = null;
    public ?string $avatar = null;
    public ?array $channels = null;
    public string $createdAt;
    public ?array $data = null;
    public bool $deleted;
    public ?string $email = null;
    public string $environmentId;
    public ?string $firstName = null;
    public ?string $id = null;
    public ?bool $isOnline = null;
    public ?string $lastName = null;
    public ?string $lastOnlineAt = null;
    public ?string $locale = null;
    public string $organizationId;
    public ?string $phone = null;
    public string $subscriberId;
    public ?string $timezone = null;
    public ?array $topics = null;
    public string $updatedAt;
    public ?float $v = null;
}

/** Request payload for Subscriber#update. */
class SubscriberUpdateData
{
    public string $id;
    public ?string $avatar = null;
    public ?array $channels = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?bool $deleted = null;
    public ?string $email = null;
    public ?string $environmentId = null;
    public ?string $firstName = null;
    public ?bool $isOnline = null;
    public ?string $lastName = null;
    public ?string $lastOnlineAt = null;
    public ?string $locale = null;
    public ?string $organizationId = null;
    public ?string $phone = null;
    public ?string $subscriberId = null;
    public ?string $timezone = null;
    public ?array $topics = null;
    public ?string $updatedAt = null;
    public ?float $v = null;
}

/** Request payload for Subscriber#remove. */
class SubscriberRemoveMatch
{
    public string $id;
    public ?string $notification_id = null;
    public ?array $context_key = null;
    public ?string $provider_id = null;
}

/** SubscriberNotificationsCountResponseDto entity data model. */
class SubscriberNotificationsCountResponseDto
{
    public float $count;
    public array $filter;
}

/** Request payload for SubscriberNotificationsCountResponseDto#list. */
class SubscriberNotificationsCountResponseDtoListMatch
{
    public string $subscriber_id;
    public string $filter;
}

/** SubscriberNotificationsResponseDto entity data model. */
class SubscriberNotificationsResponseDto
{
    public ?string $id = null;
}

/** Request payload for SubscriberNotificationsResponseDto#list. */
class SubscriberNotificationsResponseDtoListMatch
{
    public string $id;
    public ?string $after = null;
    public ?bool $archived = null;
    public ?array $context_key = null;
    public ?float $created_gte = null;
    public ?float $created_lte = null;
    public ?string $data = null;
    public ?float $limit = null;
    public ?float $offset = null;
    public ?bool $read = null;
    public ?bool $seen = null;
    public ?array $severity = null;
    public ?bool $snoozed = null;
}

/** SubscriberPreferencesDto entity data model. */
class SubscriberPreferencesDto
{
    public ?string $id = null;
}

/** Request payload for SubscriberPreferencesDto#list. */
class SubscriberPreferencesDtoListMatch
{
    public string $id;
    public ?array $context_key = null;
    public ?string $criticality = null;
}

/** Request payload for SubscriberPreferencesDto#update. */
class SubscriberPreferencesDtoUpdateData
{
    public string $id;
}

/** SubscriberResponseDto entity data model. */
class SubscriberResponseDto
{
    public ?string $avatar = null;
    public ?array $channels = null;
    public string $createdAt;
    public ?array $data = null;
    public bool $deleted;
    public ?string $email = null;
    public string $environmentId;
    public ?string $firstName = null;
    public ?string $id = null;
    public ?bool $isOnline = null;
    public ?string $lastName = null;
    public ?string $lastOnlineAt = null;
    public ?string $locale = null;
    public string $organizationId;
    public ?string $phone = null;
    public string $subscriberId;
    public ?string $timezone = null;
    public ?array $topics = null;
    public string $updatedAt;
    public ?float $v = null;
}

/** Request payload for SubscriberResponseDto#update. */
class SubscriberResponseDtoUpdateData
{
    public string $id;
    public ?string $avatar = null;
    public ?array $channels = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?bool $deleted = null;
    public ?string $email = null;
    public ?string $environmentId = null;
    public ?string $firstName = null;
    public ?bool $isOnline = null;
    public ?string $lastName = null;
    public ?string $lastOnlineAt = null;
    public ?string $locale = null;
    public ?string $organizationId = null;
    public ?string $phone = null;
    public ?string $subscriberId = null;
    public ?string $timezone = null;
    public ?array $topics = null;
    public ?string $updatedAt = null;
    public ?float $v = null;
}

/** Subscription entity data model. */
class Subscription
{
    public ?array $contextKeys = null;
    public string $createdAt;
    public string $id;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?array $preferences = null;
    public mixed $subscriber;
    public mixed $topic;
    public string $updatedAt;
}

/** Request payload for Subscription#load. */
class SubscriptionLoadMatch
{
    public string $id;
    public string $topic_id;
}

/** Request payload for Subscription#update. */
class SubscriptionUpdateData
{
    public string $id;
    public string $topic_id;
    public ?array $contextKeys = null;
    public ?string $createdAt = null;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?array $preferences = null;
    public mixed $subscriber = null;
    public mixed $topic = null;
    public ?string $updatedAt = null;
}

/** Topic entity data model. */
class Topic
{
    public ?string $createdAt = null;
    public ?array $data = null;
    public string $id;
    public string $key;
    public ?string $name = null;
    public ?string $updatedAt = null;
}

/** Request payload for Topic#load. */
class TopicLoadMatch
{
    public string $id;
}

/** Request payload for Topic#list. */
class TopicListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?bool $include_cursor = null;
    public ?string $key = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
}

/** Request payload for Topic#create. */
class TopicCreateData
{
    public ?bool $fail_if_exist = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public string $id;
    public string $key;
    public ?string $name = null;
    public ?string $updatedAt = null;
}

/** Request payload for Topic#update. */
class TopicUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?string $key = null;
    public ?string $name = null;
    public ?string $updatedAt = null;
}

/** Request payload for Topic#remove. */
class TopicRemoveMatch
{
    public string $id;
}

/** TopicSubscriberDto entity data model. */
class TopicSubscriberDto
{
    public string $environmentId;
    public string $externalSubscriberId;
    public string $organizationId;
    public string $subscriberId;
    public string $topicId;
    public string $topicKey;
}

/** Request payload for TopicSubscriberDto#load. */
class TopicSubscriberDtoLoadMatch
{
    public string $external_subscriber_id;
    public string $topic_id;
}

/** TopicSubscriptionsResponseDto entity data model. */
class TopicSubscriptionsResponseDto
{
}

/** Request payload for TopicSubscriptionsResponseDto#remove. */
class TopicSubscriptionsResponseDtoRemoveMatch
{
    public string $topic_key;
}

/** Translation entity data model. */
class Translation
{
    public array $content;
    public string $createdAt;
    public ?string $id = null;
    public string $locale;
    public string $resourceId;
    public string $resourceType;
    public string $updatedAt;
}

/** Request payload for Translation#load. */
class TranslationLoadMatch
{
    public string $locale;
    public string $resource_id;
    public string $resource_type;
}

/** Request payload for Translation#create. */
class TranslationCreateData
{
    public array $content;
    public string $createdAt;
    public ?string $id = null;
    public string $locale;
    public string $resourceId;
    public string $resourceType;
    public string $updatedAt;
}

/** Request payload for Translation#remove. */
class TranslationRemoveMatch
{
    public ?string $locale = null;
    public string $resource_id;
    public string $resource_type;
}

/** TranslationGroupDto entity data model. */
class TranslationGroupDto
{
    public string $createdAt;
    public ?string $id = null;
    public array $locales;
    public ?array $outdatedLocales = null;
    public string $resourceId;
    public string $resourceName;
    public string $resourceType;
    public string $updatedAt;
}

/** Request payload for TranslationGroupDto#load. */
class TranslationGroupDtoLoadMatch
{
    public string $resource_id;
    public string $resource_type;
}

/** TriggerEventResponseDto entity data model. */
class TriggerEventResponseDto
{
    public bool $acknowledged;
    public ?string $activityFeedLink = null;
    public mixed $actor = null;
    public ?string $agentId = null;
    public ?array $context = null;
    public ?array $error = null;
    public array $events;
    public ?array $jobData = null;
    public string $name;
    public mixed $overrides = null;
    public array $payload;
    public string $status;
    public mixed $tenant = null;
    public ?string $transactionId = null;
}

/** Request payload for TriggerEventResponseDto#create. */
class TriggerEventResponseDtoCreateData
{
    public bool $acknowledged;
    public ?string $activityFeedLink = null;
    public mixed $actor = null;
    public ?string $agentId = null;
    public ?array $context = null;
    public ?array $error = null;
    public array $events;
    public ?array $jobData = null;
    public string $name;
    public mixed $overrides = null;
    public array $payload;
    public string $status;
    public mixed $tenant = null;
    public ?string $transactionId = null;
}

/** Unseen entity data model. */
class Unseen
{
    public float $count;
}

/** Request payload for Unseen#load. */
class UnseenLoadMatch
{
    public string $subscriber_id;
    public ?float $limit = null;
    public ?bool $seen = null;
}

/** Upload entity data model. */
class Upload
{
    public array $errors;
    public float $failedUploads;
    public float $successfulUploads;
    public float $totalFiles;
}

/** Request payload for Upload#create. */
class UploadCreateData
{
    public array $errors;
    public float $failedUploads;
    public float $successfulUploads;
    public float $totalFiles;
}

/** WebhookResultDto entity data model. */
class WebhookResultDto
{
}

/** Request payload for WebhookResultDto#create. */
class WebhookResultDtoCreateData
{
    public string $environment_id;
    public string $integration_id;
}

/** Workflow entity data model. */
class Workflow
{
    public ?bool $active = null;
    public mixed $agent = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public ?bool $isTranslationEnabled = null;
    public ?array $issues = null;
    public ?string $lastPublishedAt = null;
    public mixed $lastPublishedBy = null;
    public ?string $lastTriggeredAt = null;
    public string $name;
    public string $origin;
    public ?array $payloadExample = null;
    public ?array $payloadSchema = null;
    public mixed $preferences;
    public string $severity;
    public string $slug;
    public ?string $source = null;
    public string $status;
    public array $stepTypeOverviews;
    public array $steps;
    public ?array $tags = null;
    public string $updatedAt;
    public mixed $updatedBy = null;
    public ?bool $validatePayload = null;
    public string $workflowId;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $id;
    public ?string $environment_id = null;
}

/** Request payload for Workflow#list. */
class WorkflowListMatch
{
    public ?float $limit = null;
    public ?float $offset = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?string $query = null;
    public ?array $status = null;
    public ?array $tag = null;
}

/** Request payload for Workflow#create. */
class WorkflowCreateData
{
    public ?bool $active = null;
    public mixed $agent = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public ?bool $isTranslationEnabled = null;
    public ?array $issues = null;
    public ?string $lastPublishedAt = null;
    public mixed $lastPublishedBy = null;
    public ?string $lastTriggeredAt = null;
    public string $name;
    public string $origin;
    public ?array $payloadExample = null;
    public ?array $payloadSchema = null;
    public mixed $preferences;
    public string $severity;
    public string $slug;
    public ?string $source = null;
    public string $status;
    public array $stepTypeOverviews;
    public array $steps;
    public ?array $tags = null;
    public string $updatedAt;
    public mixed $updatedBy = null;
    public ?bool $validatePayload = null;
    public string $workflowId;
}

/** Request payload for Workflow#update. */
class WorkflowUpdateData
{
    public string $id;
    public ?bool $active = null;
    public mixed $agent = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?bool $isTranslationEnabled = null;
    public ?array $issues = null;
    public ?string $lastPublishedAt = null;
    public mixed $lastPublishedBy = null;
    public ?string $lastTriggeredAt = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?array $payloadExample = null;
    public ?array $payloadSchema = null;
    public mixed $preferences = null;
    public ?string $severity = null;
    public ?string $slug = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $stepTypeOverviews = null;
    public ?array $steps = null;
    public ?array $tags = null;
    public ?string $updatedAt = null;
    public mixed $updatedBy = null;
    public ?bool $validatePayload = null;
    public ?string $workflowId = null;
}

/** Request payload for Workflow#remove. */
class WorkflowRemoveMatch
{
    public string $id;
}

/** WorkflowInfoDto entity data model. */
class WorkflowInfoDto
{
    public string $name;
    public string $workflowId;
}

/** Request payload for WorkflowInfoDto#list. */
class WorkflowInfoDtoListMatch
{
    public string $layout_id;
}

/** WorkflowResponseDto entity data model. */
class WorkflowResponseDto
{
    public ?bool $active = null;
    public mixed $agent = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public ?bool $isTranslationEnabled = null;
    public ?array $issues = null;
    public ?string $lastPublishedAt = null;
    public mixed $lastPublishedBy = null;
    public ?string $lastTriggeredAt = null;
    public string $name;
    public string $origin;
    public ?array $payloadExample = null;
    public ?array $payloadSchema = null;
    public mixed $preferences;
    public string $severity;
    public string $slug;
    public string $status;
    public array $steps;
    public ?array $tags = null;
    public string $updatedAt;
    public mixed $updatedBy = null;
    public ?bool $validatePayload = null;
    public string $workflowId;
}

/** Request payload for WorkflowResponseDto#update. */
class WorkflowResponseDtoUpdateData
{
    public string $id;
    public ?bool $active = null;
    public mixed $agent = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?bool $isTranslationEnabled = null;
    public ?array $issues = null;
    public ?string $lastPublishedAt = null;
    public mixed $lastPublishedBy = null;
    public ?string $lastTriggeredAt = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?array $payloadExample = null;
    public ?array $payloadSchema = null;
    public mixed $preferences = null;
    public ?string $severity = null;
    public ?string $slug = null;
    public ?string $status = null;
    public ?array $steps = null;
    public ?array $tags = null;
    public ?string $updatedAt = null;
    public mixed $updatedBy = null;
    public ?bool $validatePayload = null;
    public ?string $workflowId = null;
}

