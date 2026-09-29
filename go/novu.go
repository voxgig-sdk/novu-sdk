package voxgignovusdk

import (
	"github.com/voxgig-sdk/novu-sdk/go/core"
	"github.com/voxgig-sdk/novu-sdk/go/entity"
	"github.com/voxgig-sdk/novu-sdk/go/feature"
	_ "github.com/voxgig-sdk/novu-sdk/go/utility"
)

// Type aliases preserve external API.
type NovuSDK = core.NovuSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NovuEntity = core.NovuEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NovuError = core.NovuError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActivityNotificationResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewActivityNotificationResponseDtoEntity(client, entopts)
	}
	core.NewAgentEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewAgentEntity(client, entopts)
	}
	core.NewAgentIntegrationResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewAgentIntegrationResponseDtoEntity(client, entopts)
	}
	core.NewAgentResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewAgentResponseDtoEntity(client, entopts)
	}
	core.NewBulkEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewBulkEntity(client, entopts)
	}
	core.NewChannelConnectionEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewChannelConnectionEntity(client, entopts)
	}
	core.NewChannelEndpointEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewChannelEndpointEntity(client, entopts)
	}
	core.NewConfigureEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewConfigureEntity(client, entopts)
	}
	core.NewContextEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewContextEntity(client, entopts)
	}
	core.NewCreateSubscriptionsResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewCreateSubscriptionsResponseDtoEntity(client, entopts)
	}
	core.NewDiffEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDiffEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewDomainConnectApplyUrlResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDomainConnectApplyUrlResponseDtoEntity(client, entopts)
	}
	core.NewDomainConnectStatusResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDomainConnectStatusResponseDtoEntity(client, entopts)
	}
	core.NewDomainResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDomainResponseDtoEntity(client, entopts)
	}
	core.NewDomainRouteResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewDomainRouteResponseDtoEntity(client, entopts)
	}
	core.NewEnvironmentEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewEnvironmentEntity(client, entopts)
	}
	core.NewEnvironmentTagsDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewEnvironmentTagsDtoEntity(client, entopts)
	}
	core.NewEnvironmentVariableEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewEnvironmentVariableEntity(client, entopts)
	}
	core.NewEnvironmentVariableWorkflowInfoDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewEnvironmentVariableWorkflowInfoDtoEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewGenerateChatOAuthUrlResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewGenerateChatOAuthUrlResponseDtoEntity(client, entopts)
	}
	core.NewGeneratePreviewResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewGeneratePreviewResponseDtoEntity(client, entopts)
	}
	core.NewImportMasterJsonResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewImportMasterJsonResponseDtoEntity(client, entopts)
	}
	core.NewInboxNotificationDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewInboxNotificationDtoEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewIntegrationResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewIntegrationResponseDtoEntity(client, entopts)
	}
	core.NewLayoutEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewLayoutEntity(client, entopts)
	}
	core.NewLayoutResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewLayoutResponseDtoEntity(client, entopts)
	}
	core.NewLinkEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewLinkEntity(client, entopts)
	}
	core.NewListAgentIntegrationsResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewListAgentIntegrationsResponseDtoEntity(client, entopts)
	}
	core.NewListDomainRoutesResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewListDomainRoutesResponseDtoEntity(client, entopts)
	}
	core.NewListTopicSubscriptionsResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewListTopicSubscriptionsResponseDtoEntity(client, entopts)
	}
	core.NewMasterJsonEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewMasterJsonEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewMessageResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewMessageResponseDtoEntity(client, entopts)
	}
	core.NewNotificationFeedItemDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewNotificationFeedItemDtoEntity(client, entopts)
	}
	core.NewPreferencesResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewPreferencesResponseDtoEntity(client, entopts)
	}
	core.NewPublishEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewPublishEntity(client, entopts)
	}
	core.NewRemoveSubscriberResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewRemoveSubscriberResponseDtoEntity(client, entopts)
	}
	core.NewStepEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewStepEntity(client, entopts)
	}
	core.NewSubscriberEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriberEntity(client, entopts)
	}
	core.NewSubscriberNotificationsCountResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriberNotificationsCountResponseDtoEntity(client, entopts)
	}
	core.NewSubscriberNotificationsResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriberNotificationsResponseDtoEntity(client, entopts)
	}
	core.NewSubscriberPreferencesDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriberPreferencesDtoEntity(client, entopts)
	}
	core.NewSubscriberResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriberResponseDtoEntity(client, entopts)
	}
	core.NewSubscriptionEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewSubscriptionEntity(client, entopts)
	}
	core.NewTopicEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTopicEntity(client, entopts)
	}
	core.NewTopicSubscriberDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTopicSubscriberDtoEntity(client, entopts)
	}
	core.NewTopicSubscriptionsResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTopicSubscriptionsResponseDtoEntity(client, entopts)
	}
	core.NewTranslationEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTranslationEntity(client, entopts)
	}
	core.NewTranslationGroupDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTranslationGroupDtoEntity(client, entopts)
	}
	core.NewTriggerEventResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewTriggerEventResponseDtoEntity(client, entopts)
	}
	core.NewUnseenEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewUnseenEntity(client, entopts)
	}
	core.NewUploadEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewUploadEntity(client, entopts)
	}
	core.NewWebhookResultDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewWebhookResultDtoEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
	core.NewWorkflowInfoDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewWorkflowInfoDtoEntity(client, entopts)
	}
	core.NewWorkflowResponseDtoEntityFunc = func(client *core.NovuSDK, entopts map[string]any) core.NovuEntity {
		return entity.NewWorkflowResponseDtoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNovuSDK = core.NewNovuSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewNovuSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *NovuSDK  { return NewNovuSDK(nil) }
func Test() *NovuSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
