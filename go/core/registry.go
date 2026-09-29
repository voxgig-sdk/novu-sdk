package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivityNotificationResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewAgentEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewAgentIntegrationResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewAgentResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewBulkEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewChannelConnectionEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewChannelEndpointEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewConfigureEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewContextEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewCreateSubscriptionsResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDiffEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDomainEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDomainConnectApplyUrlResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDomainConnectStatusResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDomainResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewDomainRouteResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewEnvironmentEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewEnvironmentTagsDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewEnvironmentVariableEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewEnvironmentVariableWorkflowInfoDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewEventEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewGenerateChatOAuthUrlResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewGeneratePreviewResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewImportMasterJsonResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewInboxNotificationDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewIntegrationEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewIntegrationResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewLayoutEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewLayoutResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewLinkEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewListAgentIntegrationsResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewListDomainRoutesResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewListTopicSubscriptionsResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewMasterJsonEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewMessageEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewMessageResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewNotificationFeedItemDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewPreferencesResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewPublishEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewRemoveSubscriberResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewStepEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriberEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriberNotificationsCountResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriberNotificationsResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriberPreferencesDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriberResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewSubscriptionEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTopicEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTopicSubscriberDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTopicSubscriptionsResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTranslationEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTranslationGroupDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewTriggerEventResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewUnseenEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewUploadEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewWebhookResultDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewWorkflowEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewWorkflowInfoDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

var NewWorkflowResponseDtoEntityFunc func(client *NovuSDK, entopts map[string]any) NovuEntity

