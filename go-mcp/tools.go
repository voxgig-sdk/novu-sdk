package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/novu-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"activity_notification_response_dto | agent | agent_integration_response_dto | agent_response_dto | bulk | channel_connection | channel_endpoint | configure | context | create_subscriptions_response_dto | diff | domain | domain_connect_apply_url_response_dto | domain_connect_status_response_dto | domain_response_dto | domain_route_response_dto | environment | environment_tags_dto | environment_variable | environment_variable_workflow_info_dto | event | generate_chat_o_auth_url_response_dto | generate_preview_response_dto | import_master_json_response_dto | inbox_notification_dto | integration | integration_response_dto | layout | layout_response_dto | link | list_agent_integrations_response_dto | list_agents_response_dto | list_channel_connections_response_dto | list_channel_endpoints_response_dto | list_contexts_response_dto | list_domain_routes_response_dto | list_domains_response_dto | list_subscribers_response_dto | list_topic_subscriptions_response_dto | list_topics_response_dto | master_json | message | message_response_dto | notification_feed_item_dto | preferences_response_dto | publish | remove_subscriber_response_dto | step | subscriber | subscriber_notifications_count_response_dto | subscriber_notifications_response_dto | subscriber_preferences_dto | subscriber_response_dto | subscription | topic | topic_subscriber_dto | topic_subscriptions_response_dto | translation | translation_group_dto | trigger | trigger_event_response_dto | unseen | upload | webhook_result_dto | workflow | workflow_info_dto | workflow_response_dto"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.NovuSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "novu_list",
		Description: "List records from Novu. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "novu_load",
		Description: "Load a single record from Novu. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.NovuSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.NovuSDK, name string) (sdk.NovuEntity, error) {
	switch strings.ToLower(name) {
	case "activity_notification_response_dto":
		return client.ActivityNotificationResponseDto(nil), nil
	case "agent":
		return client.Agent(nil), nil
	case "agent_integration_response_dto":
		return client.AgentIntegrationResponseDto(nil), nil
	case "agent_response_dto":
		return client.AgentResponseDto(nil), nil
	case "bulk":
		return client.Bulk(nil), nil
	case "channel_connection":
		return client.ChannelConnection(nil), nil
	case "channel_endpoint":
		return client.ChannelEndpoint(nil), nil
	case "configure":
		return client.Configure(nil), nil
	case "context":
		return client.Context(nil), nil
	case "create_subscriptions_response_dto":
		return client.CreateSubscriptionsResponseDto(nil), nil
	case "diff":
		return client.Diff(nil), nil
	case "domain":
		return client.Domain(nil), nil
	case "domain_connect_apply_url_response_dto":
		return client.DomainConnectApplyUrlResponseDto(nil), nil
	case "domain_connect_status_response_dto":
		return client.DomainConnectStatusResponseDto(nil), nil
	case "domain_response_dto":
		return client.DomainResponseDto(nil), nil
	case "domain_route_response_dto":
		return client.DomainRouteResponseDto(nil), nil
	case "environment":
		return client.Environment(nil), nil
	case "environment_tags_dto":
		return client.EnvironmentTagsDto(nil), nil
	case "environment_variable":
		return client.EnvironmentVariable(nil), nil
	case "environment_variable_workflow_info_dto":
		return client.EnvironmentVariableWorkflowInfoDto(nil), nil
	case "event":
		return client.Event(nil), nil
	case "generate_chat_o_auth_url_response_dto":
		return client.GenerateChatOAuthUrlResponseDto(nil), nil
	case "generate_preview_response_dto":
		return client.GeneratePreviewResponseDto(nil), nil
	case "import_master_json_response_dto":
		return client.ImportMasterJsonResponseDto(nil), nil
	case "inbox_notification_dto":
		return client.InboxNotificationDto(nil), nil
	case "integration":
		return client.Integration(nil), nil
	case "integration_response_dto":
		return client.IntegrationResponseDto(nil), nil
	case "layout":
		return client.Layout(nil), nil
	case "layout_response_dto":
		return client.LayoutResponseDto(nil), nil
	case "link":
		return client.Link(nil), nil
	case "list_agent_integrations_response_dto":
		return client.ListAgentIntegrationsResponseDto(nil), nil
	case "list_agents_response_dto":
		return client.ListAgentsResponseDto(nil), nil
	case "list_channel_connections_response_dto":
		return client.ListChannelConnectionsResponseDto(nil), nil
	case "list_channel_endpoints_response_dto":
		return client.ListChannelEndpointsResponseDto(nil), nil
	case "list_contexts_response_dto":
		return client.ListContextsResponseDto(nil), nil
	case "list_domain_routes_response_dto":
		return client.ListDomainRoutesResponseDto(nil), nil
	case "list_domains_response_dto":
		return client.ListDomainsResponseDto(nil), nil
	case "list_subscribers_response_dto":
		return client.ListSubscribersResponseDto(nil), nil
	case "list_topic_subscriptions_response_dto":
		return client.ListTopicSubscriptionsResponseDto(nil), nil
	case "list_topics_response_dto":
		return client.ListTopicsResponseDto(nil), nil
	case "master_json":
		return client.MasterJson(nil), nil
	case "message":
		return client.Message(nil), nil
	case "message_response_dto":
		return client.MessageResponseDto(nil), nil
	case "notification_feed_item_dto":
		return client.NotificationFeedItemDto(nil), nil
	case "preferences_response_dto":
		return client.PreferencesResponseDto(nil), nil
	case "publish":
		return client.Publish(nil), nil
	case "remove_subscriber_response_dto":
		return client.RemoveSubscriberResponseDto(nil), nil
	case "step":
		return client.Step(nil), nil
	case "subscriber":
		return client.Subscriber(nil), nil
	case "subscriber_notifications_count_response_dto":
		return client.SubscriberNotificationsCountResponseDto(nil), nil
	case "subscriber_notifications_response_dto":
		return client.SubscriberNotificationsResponseDto(nil), nil
	case "subscriber_preferences_dto":
		return client.SubscriberPreferencesDto(nil), nil
	case "subscriber_response_dto":
		return client.SubscriberResponseDto(nil), nil
	case "subscription":
		return client.Subscription(nil), nil
	case "topic":
		return client.Topic(nil), nil
	case "topic_subscriber_dto":
		return client.TopicSubscriberDto(nil), nil
	case "topic_subscriptions_response_dto":
		return client.TopicSubscriptionsResponseDto(nil), nil
	case "translation":
		return client.Translation(nil), nil
	case "translation_group_dto":
		return client.TranslationGroupDto(nil), nil
	case "trigger":
		return client.Trigger(nil), nil
	case "trigger_event_response_dto":
		return client.TriggerEventResponseDto(nil), nil
	case "unseen":
		return client.Unseen(nil), nil
	case "upload":
		return client.Upload(nil), nil
	case "webhook_result_dto":
		return client.WebhookResultDto(nil), nil
	case "workflow":
		return client.Workflow(nil), nil
	case "workflow_info_dto":
		return client.WorkflowInfoDto(nil), nil
	case "workflow_response_dto":
		return client.WorkflowResponseDto(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
