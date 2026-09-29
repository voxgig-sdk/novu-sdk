package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/novu-sdk/go/utility/struct"
)

type NovuSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewNovuSDK(options map[string]any) *NovuSDK {
	sdk := &NovuSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *NovuSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *NovuSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *NovuSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *NovuSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *NovuSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *NovuSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *NovuSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("NovuSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *NovuSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *NovuSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("NovuSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// ActivityNotificationResponseDto returns a ActivityNotificationResponseDto entity bound to this client.
// Idiomatic usage: client.ActivityNotificationResponseDto(nil).List(nil, nil) or
// client.ActivityNotificationResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ActivityNotificationResponseDto(data map[string]any) NovuEntity {
	return NewActivityNotificationResponseDtoEntityFunc(sdk, data)
}


// Agent returns a Agent entity bound to this client.
// Idiomatic usage: client.Agent(nil).List(nil, nil) or
// client.Agent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Agent(data map[string]any) NovuEntity {
	return NewAgentEntityFunc(sdk, data)
}


// AgentIntegrationResponseDto returns a AgentIntegrationResponseDto entity bound to this client.
// Idiomatic usage: client.AgentIntegrationResponseDto(nil).List(nil, nil) or
// client.AgentIntegrationResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) AgentIntegrationResponseDto(data map[string]any) NovuEntity {
	return NewAgentIntegrationResponseDtoEntityFunc(sdk, data)
}


// AgentResponseDto returns a AgentResponseDto entity bound to this client.
// Idiomatic usage: client.AgentResponseDto(nil).List(nil, nil) or
// client.AgentResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) AgentResponseDto(data map[string]any) NovuEntity {
	return NewAgentResponseDtoEntityFunc(sdk, data)
}


// Bulk returns a Bulk entity bound to this client.
// Idiomatic usage: client.Bulk(nil).List(nil, nil) or
// client.Bulk(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Bulk(data map[string]any) NovuEntity {
	return NewBulkEntityFunc(sdk, data)
}


// ChannelConnection returns a ChannelConnection entity bound to this client.
// Idiomatic usage: client.ChannelConnection(nil).List(nil, nil) or
// client.ChannelConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ChannelConnection(data map[string]any) NovuEntity {
	return NewChannelConnectionEntityFunc(sdk, data)
}


// ChannelEndpoint returns a ChannelEndpoint entity bound to this client.
// Idiomatic usage: client.ChannelEndpoint(nil).List(nil, nil) or
// client.ChannelEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ChannelEndpoint(data map[string]any) NovuEntity {
	return NewChannelEndpointEntityFunc(sdk, data)
}


// Configure returns a Configure entity bound to this client.
// Idiomatic usage: client.Configure(nil).List(nil, nil) or
// client.Configure(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Configure(data map[string]any) NovuEntity {
	return NewConfigureEntityFunc(sdk, data)
}


// Context returns a Context entity bound to this client.
// Idiomatic usage: client.Context(nil).List(nil, nil) or
// client.Context(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Context(data map[string]any) NovuEntity {
	return NewContextEntityFunc(sdk, data)
}


// CreateSubscriptionsResponseDto returns a CreateSubscriptionsResponseDto entity bound to this client.
// Idiomatic usage: client.CreateSubscriptionsResponseDto(nil).List(nil, nil) or
// client.CreateSubscriptionsResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) CreateSubscriptionsResponseDto(data map[string]any) NovuEntity {
	return NewCreateSubscriptionsResponseDtoEntityFunc(sdk, data)
}


// Diff returns a Diff entity bound to this client.
// Idiomatic usage: client.Diff(nil).List(nil, nil) or
// client.Diff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Diff(data map[string]any) NovuEntity {
	return NewDiffEntityFunc(sdk, data)
}


// Domain returns a Domain entity bound to this client.
// Idiomatic usage: client.Domain(nil).List(nil, nil) or
// client.Domain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Domain(data map[string]any) NovuEntity {
	return NewDomainEntityFunc(sdk, data)
}


// DomainConnectApplyUrlResponseDto returns a DomainConnectApplyUrlResponseDto entity bound to this client.
// Idiomatic usage: client.DomainConnectApplyUrlResponseDto(nil).List(nil, nil) or
// client.DomainConnectApplyUrlResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) DomainConnectApplyUrlResponseDto(data map[string]any) NovuEntity {
	return NewDomainConnectApplyUrlResponseDtoEntityFunc(sdk, data)
}


// DomainConnectStatusResponseDto returns a DomainConnectStatusResponseDto entity bound to this client.
// Idiomatic usage: client.DomainConnectStatusResponseDto(nil).List(nil, nil) or
// client.DomainConnectStatusResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) DomainConnectStatusResponseDto(data map[string]any) NovuEntity {
	return NewDomainConnectStatusResponseDtoEntityFunc(sdk, data)
}


// DomainResponseDto returns a DomainResponseDto entity bound to this client.
// Idiomatic usage: client.DomainResponseDto(nil).List(nil, nil) or
// client.DomainResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) DomainResponseDto(data map[string]any) NovuEntity {
	return NewDomainResponseDtoEntityFunc(sdk, data)
}


// DomainRouteResponseDto returns a DomainRouteResponseDto entity bound to this client.
// Idiomatic usage: client.DomainRouteResponseDto(nil).List(nil, nil) or
// client.DomainRouteResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) DomainRouteResponseDto(data map[string]any) NovuEntity {
	return NewDomainRouteResponseDtoEntityFunc(sdk, data)
}


// Environment returns a Environment entity bound to this client.
// Idiomatic usage: client.Environment(nil).List(nil, nil) or
// client.Environment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Environment(data map[string]any) NovuEntity {
	return NewEnvironmentEntityFunc(sdk, data)
}


// EnvironmentTagsDto returns a EnvironmentTagsDto entity bound to this client.
// Idiomatic usage: client.EnvironmentTagsDto(nil).List(nil, nil) or
// client.EnvironmentTagsDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) EnvironmentTagsDto(data map[string]any) NovuEntity {
	return NewEnvironmentTagsDtoEntityFunc(sdk, data)
}


// EnvironmentVariable returns a EnvironmentVariable entity bound to this client.
// Idiomatic usage: client.EnvironmentVariable(nil).List(nil, nil) or
// client.EnvironmentVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) EnvironmentVariable(data map[string]any) NovuEntity {
	return NewEnvironmentVariableEntityFunc(sdk, data)
}


// EnvironmentVariableWorkflowInfoDto returns a EnvironmentVariableWorkflowInfoDto entity bound to this client.
// Idiomatic usage: client.EnvironmentVariableWorkflowInfoDto(nil).List(nil, nil) or
// client.EnvironmentVariableWorkflowInfoDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) EnvironmentVariableWorkflowInfoDto(data map[string]any) NovuEntity {
	return NewEnvironmentVariableWorkflowInfoDtoEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Event(data map[string]any) NovuEntity {
	return NewEventEntityFunc(sdk, data)
}


// GenerateChatOAuthUrlResponseDto returns a GenerateChatOAuthUrlResponseDto entity bound to this client.
// Idiomatic usage: client.GenerateChatOAuthUrlResponseDto(nil).List(nil, nil) or
// client.GenerateChatOAuthUrlResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) GenerateChatOAuthUrlResponseDto(data map[string]any) NovuEntity {
	return NewGenerateChatOAuthUrlResponseDtoEntityFunc(sdk, data)
}


// GeneratePreviewResponseDto returns a GeneratePreviewResponseDto entity bound to this client.
// Idiomatic usage: client.GeneratePreviewResponseDto(nil).List(nil, nil) or
// client.GeneratePreviewResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) GeneratePreviewResponseDto(data map[string]any) NovuEntity {
	return NewGeneratePreviewResponseDtoEntityFunc(sdk, data)
}


// ImportMasterJsonResponseDto returns a ImportMasterJsonResponseDto entity bound to this client.
// Idiomatic usage: client.ImportMasterJsonResponseDto(nil).List(nil, nil) or
// client.ImportMasterJsonResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ImportMasterJsonResponseDto(data map[string]any) NovuEntity {
	return NewImportMasterJsonResponseDtoEntityFunc(sdk, data)
}


// InboxNotificationDto returns a InboxNotificationDto entity bound to this client.
// Idiomatic usage: client.InboxNotificationDto(nil).List(nil, nil) or
// client.InboxNotificationDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) InboxNotificationDto(data map[string]any) NovuEntity {
	return NewInboxNotificationDtoEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Integration(data map[string]any) NovuEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// IntegrationResponseDto returns a IntegrationResponseDto entity bound to this client.
// Idiomatic usage: client.IntegrationResponseDto(nil).List(nil, nil) or
// client.IntegrationResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) IntegrationResponseDto(data map[string]any) NovuEntity {
	return NewIntegrationResponseDtoEntityFunc(sdk, data)
}


// Layout returns a Layout entity bound to this client.
// Idiomatic usage: client.Layout(nil).List(nil, nil) or
// client.Layout(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Layout(data map[string]any) NovuEntity {
	return NewLayoutEntityFunc(sdk, data)
}


// LayoutResponseDto returns a LayoutResponseDto entity bound to this client.
// Idiomatic usage: client.LayoutResponseDto(nil).List(nil, nil) or
// client.LayoutResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) LayoutResponseDto(data map[string]any) NovuEntity {
	return NewLayoutResponseDtoEntityFunc(sdk, data)
}


// Link returns a Link entity bound to this client.
// Idiomatic usage: client.Link(nil).List(nil, nil) or
// client.Link(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Link(data map[string]any) NovuEntity {
	return NewLinkEntityFunc(sdk, data)
}


// ListAgentIntegrationsResponseDto returns a ListAgentIntegrationsResponseDto entity bound to this client.
// Idiomatic usage: client.ListAgentIntegrationsResponseDto(nil).List(nil, nil) or
// client.ListAgentIntegrationsResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ListAgentIntegrationsResponseDto(data map[string]any) NovuEntity {
	return NewListAgentIntegrationsResponseDtoEntityFunc(sdk, data)
}


// ListDomainRoutesResponseDto returns a ListDomainRoutesResponseDto entity bound to this client.
// Idiomatic usage: client.ListDomainRoutesResponseDto(nil).List(nil, nil) or
// client.ListDomainRoutesResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ListDomainRoutesResponseDto(data map[string]any) NovuEntity {
	return NewListDomainRoutesResponseDtoEntityFunc(sdk, data)
}


// ListTopicSubscriptionsResponseDto returns a ListTopicSubscriptionsResponseDto entity bound to this client.
// Idiomatic usage: client.ListTopicSubscriptionsResponseDto(nil).List(nil, nil) or
// client.ListTopicSubscriptionsResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) ListTopicSubscriptionsResponseDto(data map[string]any) NovuEntity {
	return NewListTopicSubscriptionsResponseDtoEntityFunc(sdk, data)
}


// MasterJson returns a MasterJson entity bound to this client.
// Idiomatic usage: client.MasterJson(nil).List(nil, nil) or
// client.MasterJson(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) MasterJson(data map[string]any) NovuEntity {
	return NewMasterJsonEntityFunc(sdk, data)
}


// Message returns a Message entity bound to this client.
// Idiomatic usage: client.Message(nil).List(nil, nil) or
// client.Message(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Message(data map[string]any) NovuEntity {
	return NewMessageEntityFunc(sdk, data)
}


// MessageResponseDto returns a MessageResponseDto entity bound to this client.
// Idiomatic usage: client.MessageResponseDto(nil).List(nil, nil) or
// client.MessageResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) MessageResponseDto(data map[string]any) NovuEntity {
	return NewMessageResponseDtoEntityFunc(sdk, data)
}


// NotificationFeedItemDto returns a NotificationFeedItemDto entity bound to this client.
// Idiomatic usage: client.NotificationFeedItemDto(nil).List(nil, nil) or
// client.NotificationFeedItemDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) NotificationFeedItemDto(data map[string]any) NovuEntity {
	return NewNotificationFeedItemDtoEntityFunc(sdk, data)
}


// PreferencesResponseDto returns a PreferencesResponseDto entity bound to this client.
// Idiomatic usage: client.PreferencesResponseDto(nil).List(nil, nil) or
// client.PreferencesResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) PreferencesResponseDto(data map[string]any) NovuEntity {
	return NewPreferencesResponseDtoEntityFunc(sdk, data)
}


// Publish returns a Publish entity bound to this client.
// Idiomatic usage: client.Publish(nil).List(nil, nil) or
// client.Publish(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Publish(data map[string]any) NovuEntity {
	return NewPublishEntityFunc(sdk, data)
}


// RemoveSubscriberResponseDto returns a RemoveSubscriberResponseDto entity bound to this client.
// Idiomatic usage: client.RemoveSubscriberResponseDto(nil).List(nil, nil) or
// client.RemoveSubscriberResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) RemoveSubscriberResponseDto(data map[string]any) NovuEntity {
	return NewRemoveSubscriberResponseDtoEntityFunc(sdk, data)
}


// Step returns a Step entity bound to this client.
// Idiomatic usage: client.Step(nil).List(nil, nil) or
// client.Step(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Step(data map[string]any) NovuEntity {
	return NewStepEntityFunc(sdk, data)
}


// Subscriber returns a Subscriber entity bound to this client.
// Idiomatic usage: client.Subscriber(nil).List(nil, nil) or
// client.Subscriber(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Subscriber(data map[string]any) NovuEntity {
	return NewSubscriberEntityFunc(sdk, data)
}


// SubscriberNotificationsCountResponseDto returns a SubscriberNotificationsCountResponseDto entity bound to this client.
// Idiomatic usage: client.SubscriberNotificationsCountResponseDto(nil).List(nil, nil) or
// client.SubscriberNotificationsCountResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) SubscriberNotificationsCountResponseDto(data map[string]any) NovuEntity {
	return NewSubscriberNotificationsCountResponseDtoEntityFunc(sdk, data)
}


// SubscriberNotificationsResponseDto returns a SubscriberNotificationsResponseDto entity bound to this client.
// Idiomatic usage: client.SubscriberNotificationsResponseDto(nil).List(nil, nil) or
// client.SubscriberNotificationsResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) SubscriberNotificationsResponseDto(data map[string]any) NovuEntity {
	return NewSubscriberNotificationsResponseDtoEntityFunc(sdk, data)
}


// SubscriberPreferencesDto returns a SubscriberPreferencesDto entity bound to this client.
// Idiomatic usage: client.SubscriberPreferencesDto(nil).List(nil, nil) or
// client.SubscriberPreferencesDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) SubscriberPreferencesDto(data map[string]any) NovuEntity {
	return NewSubscriberPreferencesDtoEntityFunc(sdk, data)
}


// SubscriberResponseDto returns a SubscriberResponseDto entity bound to this client.
// Idiomatic usage: client.SubscriberResponseDto(nil).List(nil, nil) or
// client.SubscriberResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) SubscriberResponseDto(data map[string]any) NovuEntity {
	return NewSubscriberResponseDtoEntityFunc(sdk, data)
}


// Subscription returns a Subscription entity bound to this client.
// Idiomatic usage: client.Subscription(nil).List(nil, nil) or
// client.Subscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Subscription(data map[string]any) NovuEntity {
	return NewSubscriptionEntityFunc(sdk, data)
}


// Topic returns a Topic entity bound to this client.
// Idiomatic usage: client.Topic(nil).List(nil, nil) or
// client.Topic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Topic(data map[string]any) NovuEntity {
	return NewTopicEntityFunc(sdk, data)
}


// TopicSubscriberDto returns a TopicSubscriberDto entity bound to this client.
// Idiomatic usage: client.TopicSubscriberDto(nil).List(nil, nil) or
// client.TopicSubscriberDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) TopicSubscriberDto(data map[string]any) NovuEntity {
	return NewTopicSubscriberDtoEntityFunc(sdk, data)
}


// TopicSubscriptionsResponseDto returns a TopicSubscriptionsResponseDto entity bound to this client.
// Idiomatic usage: client.TopicSubscriptionsResponseDto(nil).List(nil, nil) or
// client.TopicSubscriptionsResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) TopicSubscriptionsResponseDto(data map[string]any) NovuEntity {
	return NewTopicSubscriptionsResponseDtoEntityFunc(sdk, data)
}


// Translation returns a Translation entity bound to this client.
// Idiomatic usage: client.Translation(nil).List(nil, nil) or
// client.Translation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Translation(data map[string]any) NovuEntity {
	return NewTranslationEntityFunc(sdk, data)
}


// TranslationGroupDto returns a TranslationGroupDto entity bound to this client.
// Idiomatic usage: client.TranslationGroupDto(nil).List(nil, nil) or
// client.TranslationGroupDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) TranslationGroupDto(data map[string]any) NovuEntity {
	return NewTranslationGroupDtoEntityFunc(sdk, data)
}


// TriggerEventResponseDto returns a TriggerEventResponseDto entity bound to this client.
// Idiomatic usage: client.TriggerEventResponseDto(nil).List(nil, nil) or
// client.TriggerEventResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) TriggerEventResponseDto(data map[string]any) NovuEntity {
	return NewTriggerEventResponseDtoEntityFunc(sdk, data)
}


// Unseen returns a Unseen entity bound to this client.
// Idiomatic usage: client.Unseen(nil).List(nil, nil) or
// client.Unseen(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Unseen(data map[string]any) NovuEntity {
	return NewUnseenEntityFunc(sdk, data)
}


// Upload returns a Upload entity bound to this client.
// Idiomatic usage: client.Upload(nil).List(nil, nil) or
// client.Upload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Upload(data map[string]any) NovuEntity {
	return NewUploadEntityFunc(sdk, data)
}


// WebhookResultDto returns a WebhookResultDto entity bound to this client.
// Idiomatic usage: client.WebhookResultDto(nil).List(nil, nil) or
// client.WebhookResultDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) WebhookResultDto(data map[string]any) NovuEntity {
	return NewWebhookResultDtoEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) Workflow(data map[string]any) NovuEntity {
	return NewWorkflowEntityFunc(sdk, data)
}


// WorkflowInfoDto returns a WorkflowInfoDto entity bound to this client.
// Idiomatic usage: client.WorkflowInfoDto(nil).List(nil, nil) or
// client.WorkflowInfoDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) WorkflowInfoDto(data map[string]any) NovuEntity {
	return NewWorkflowInfoDtoEntityFunc(sdk, data)
}


// WorkflowResponseDto returns a WorkflowResponseDto entity bound to this client.
// Idiomatic usage: client.WorkflowResponseDto(nil).List(nil, nil) or
// client.WorkflowResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NovuSDK) WorkflowResponseDto(data map[string]any) NovuEntity {
	return NewWorkflowResponseDtoEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *NovuSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewNovuSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
