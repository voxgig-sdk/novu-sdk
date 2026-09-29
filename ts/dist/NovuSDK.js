"use strict";
// Novu Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.NovuSDK = exports.NovuEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActivityNotificationResponseDtoEntity_1 = require("./entity/ActivityNotificationResponseDtoEntity");
const AgentEntity_1 = require("./entity/AgentEntity");
const AgentIntegrationResponseDtoEntity_1 = require("./entity/AgentIntegrationResponseDtoEntity");
const AgentResponseDtoEntity_1 = require("./entity/AgentResponseDtoEntity");
const BulkEntity_1 = require("./entity/BulkEntity");
const ChannelConnectionEntity_1 = require("./entity/ChannelConnectionEntity");
const ChannelEndpointEntity_1 = require("./entity/ChannelEndpointEntity");
const ConfigureEntity_1 = require("./entity/ConfigureEntity");
const ContextEntity_1 = require("./entity/ContextEntity");
const CreateSubscriptionsResponseDtoEntity_1 = require("./entity/CreateSubscriptionsResponseDtoEntity");
const DiffEntity_1 = require("./entity/DiffEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const DomainConnectApplyUrlResponseDtoEntity_1 = require("./entity/DomainConnectApplyUrlResponseDtoEntity");
const DomainConnectStatusResponseDtoEntity_1 = require("./entity/DomainConnectStatusResponseDtoEntity");
const DomainResponseDtoEntity_1 = require("./entity/DomainResponseDtoEntity");
const DomainRouteResponseDtoEntity_1 = require("./entity/DomainRouteResponseDtoEntity");
const EnvironmentEntity_1 = require("./entity/EnvironmentEntity");
const EnvironmentTagsDtoEntity_1 = require("./entity/EnvironmentTagsDtoEntity");
const EnvironmentVariableEntity_1 = require("./entity/EnvironmentVariableEntity");
const EnvironmentVariableWorkflowInfoDtoEntity_1 = require("./entity/EnvironmentVariableWorkflowInfoDtoEntity");
const EventEntity_1 = require("./entity/EventEntity");
const GenerateChatOAuthUrlResponseDtoEntity_1 = require("./entity/GenerateChatOAuthUrlResponseDtoEntity");
const GeneratePreviewResponseDtoEntity_1 = require("./entity/GeneratePreviewResponseDtoEntity");
const ImportMasterJsonResponseDtoEntity_1 = require("./entity/ImportMasterJsonResponseDtoEntity");
const InboxNotificationDtoEntity_1 = require("./entity/InboxNotificationDtoEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const IntegrationResponseDtoEntity_1 = require("./entity/IntegrationResponseDtoEntity");
const LayoutEntity_1 = require("./entity/LayoutEntity");
const LayoutResponseDtoEntity_1 = require("./entity/LayoutResponseDtoEntity");
const LinkEntity_1 = require("./entity/LinkEntity");
const ListAgentIntegrationsResponseDtoEntity_1 = require("./entity/ListAgentIntegrationsResponseDtoEntity");
const ListDomainRoutesResponseDtoEntity_1 = require("./entity/ListDomainRoutesResponseDtoEntity");
const ListTopicSubscriptionsResponseDtoEntity_1 = require("./entity/ListTopicSubscriptionsResponseDtoEntity");
const MasterJsonEntity_1 = require("./entity/MasterJsonEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const MessageResponseDtoEntity_1 = require("./entity/MessageResponseDtoEntity");
const NotificationFeedItemDtoEntity_1 = require("./entity/NotificationFeedItemDtoEntity");
const PreferencesResponseDtoEntity_1 = require("./entity/PreferencesResponseDtoEntity");
const PublishEntity_1 = require("./entity/PublishEntity");
const RemoveSubscriberResponseDtoEntity_1 = require("./entity/RemoveSubscriberResponseDtoEntity");
const StepEntity_1 = require("./entity/StepEntity");
const SubscriberEntity_1 = require("./entity/SubscriberEntity");
const SubscriberNotificationsCountResponseDtoEntity_1 = require("./entity/SubscriberNotificationsCountResponseDtoEntity");
const SubscriberNotificationsResponseDtoEntity_1 = require("./entity/SubscriberNotificationsResponseDtoEntity");
const SubscriberPreferencesDtoEntity_1 = require("./entity/SubscriberPreferencesDtoEntity");
const SubscriberResponseDtoEntity_1 = require("./entity/SubscriberResponseDtoEntity");
const SubscriptionEntity_1 = require("./entity/SubscriptionEntity");
const TopicEntity_1 = require("./entity/TopicEntity");
const TopicSubscriberDtoEntity_1 = require("./entity/TopicSubscriberDtoEntity");
const TopicSubscriptionsResponseDtoEntity_1 = require("./entity/TopicSubscriptionsResponseDtoEntity");
const TranslationEntity_1 = require("./entity/TranslationEntity");
const TranslationGroupDtoEntity_1 = require("./entity/TranslationGroupDtoEntity");
const TriggerEventResponseDtoEntity_1 = require("./entity/TriggerEventResponseDtoEntity");
const UnseenEntity_1 = require("./entity/UnseenEntity");
const UploadEntity_1 = require("./entity/UploadEntity");
const WebhookResultDtoEntity_1 = require("./entity/WebhookResultDtoEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const WorkflowInfoDtoEntity_1 = require("./entity/WorkflowInfoDtoEntity");
const WorkflowResponseDtoEntity_1 = require("./entity/WorkflowResponseDtoEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const NovuEntityBase_1 = require("./NovuEntityBase");
Object.defineProperty(exports, "NovuEntityBase", { enumerable: true, get: function () { return NovuEntityBase_1.NovuEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class NovuSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('NovuSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('NovuSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('NovuSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.ActivityNotificationResponseDto().list()` / `client.ActivityNotificationResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityNotificationResponseDto(entopts) {
        const self = this;
        return new ActivityNotificationResponseDtoEntity_1.ActivityNotificationResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Agent(entopts) {
        const self = this;
        return new AgentEntity_1.AgentEntity(self, entopts);
    }
    // Entity access: `client.AgentIntegrationResponseDto().list()` / `client.AgentIntegrationResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentIntegrationResponseDto(entopts) {
        const self = this;
        return new AgentIntegrationResponseDtoEntity_1.AgentIntegrationResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.AgentResponseDto().list()` / `client.AgentResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentResponseDto(entopts) {
        const self = this;
        return new AgentResponseDtoEntity_1.AgentResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Bulk().list()` / `client.Bulk().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Bulk(entopts) {
        const self = this;
        return new BulkEntity_1.BulkEntity(self, entopts);
    }
    // Entity access: `client.ChannelConnection().list()` / `client.ChannelConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChannelConnection(entopts) {
        const self = this;
        return new ChannelConnectionEntity_1.ChannelConnectionEntity(self, entopts);
    }
    // Entity access: `client.ChannelEndpoint().list()` / `client.ChannelEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChannelEndpoint(entopts) {
        const self = this;
        return new ChannelEndpointEntity_1.ChannelEndpointEntity(self, entopts);
    }
    // Entity access: `client.Configure().list()` / `client.Configure().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Configure(entopts) {
        const self = this;
        return new ConfigureEntity_1.ConfigureEntity(self, entopts);
    }
    // Entity access: `client.Context().list()` / `client.Context().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Context(entopts) {
        const self = this;
        return new ContextEntity_1.ContextEntity(self, entopts);
    }
    // Entity access: `client.CreateSubscriptionsResponseDto().list()` / `client.CreateSubscriptionsResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateSubscriptionsResponseDto(entopts) {
        const self = this;
        return new CreateSubscriptionsResponseDtoEntity_1.CreateSubscriptionsResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Diff().list()` / `client.Diff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Diff(entopts) {
        const self = this;
        return new DiffEntity_1.DiffEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.DomainConnectApplyUrlResponseDto().list()` / `client.DomainConnectApplyUrlResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainConnectApplyUrlResponseDto(entopts) {
        const self = this;
        return new DomainConnectApplyUrlResponseDtoEntity_1.DomainConnectApplyUrlResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.DomainConnectStatusResponseDto().list()` / `client.DomainConnectStatusResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainConnectStatusResponseDto(entopts) {
        const self = this;
        return new DomainConnectStatusResponseDtoEntity_1.DomainConnectStatusResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.DomainResponseDto().list()` / `client.DomainResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainResponseDto(entopts) {
        const self = this;
        return new DomainResponseDtoEntity_1.DomainResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.DomainRouteResponseDto().list()` / `client.DomainRouteResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainRouteResponseDto(entopts) {
        const self = this;
        return new DomainRouteResponseDtoEntity_1.DomainRouteResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Environment(entopts) {
        const self = this;
        return new EnvironmentEntity_1.EnvironmentEntity(self, entopts);
    }
    // Entity access: `client.EnvironmentTagsDto().list()` / `client.EnvironmentTagsDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnvironmentTagsDto(entopts) {
        const self = this;
        return new EnvironmentTagsDtoEntity_1.EnvironmentTagsDtoEntity(self, entopts);
    }
    // Entity access: `client.EnvironmentVariable().list()` / `client.EnvironmentVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnvironmentVariable(entopts) {
        const self = this;
        return new EnvironmentVariableEntity_1.EnvironmentVariableEntity(self, entopts);
    }
    // Entity access: `client.EnvironmentVariableWorkflowInfoDto().list()` / `client.EnvironmentVariableWorkflowInfoDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnvironmentVariableWorkflowInfoDto(entopts) {
        const self = this;
        return new EnvironmentVariableWorkflowInfoDtoEntity_1.EnvironmentVariableWorkflowInfoDtoEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.GenerateChatOAuthUrlResponseDto().list()` / `client.GenerateChatOAuthUrlResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateChatOAuthUrlResponseDto(entopts) {
        const self = this;
        return new GenerateChatOAuthUrlResponseDtoEntity_1.GenerateChatOAuthUrlResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.GeneratePreviewResponseDto().list()` / `client.GeneratePreviewResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GeneratePreviewResponseDto(entopts) {
        const self = this;
        return new GeneratePreviewResponseDtoEntity_1.GeneratePreviewResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.ImportMasterJsonResponseDto().list()` / `client.ImportMasterJsonResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ImportMasterJsonResponseDto(entopts) {
        const self = this;
        return new ImportMasterJsonResponseDtoEntity_1.ImportMasterJsonResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.InboxNotificationDto().list()` / `client.InboxNotificationDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InboxNotificationDto(entopts) {
        const self = this;
        return new InboxNotificationDtoEntity_1.InboxNotificationDtoEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.IntegrationResponseDto().list()` / `client.IntegrationResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationResponseDto(entopts) {
        const self = this;
        return new IntegrationResponseDtoEntity_1.IntegrationResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Layout().list()` / `client.Layout().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Layout(entopts) {
        const self = this;
        return new LayoutEntity_1.LayoutEntity(self, entopts);
    }
    // Entity access: `client.LayoutResponseDto().list()` / `client.LayoutResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LayoutResponseDto(entopts) {
        const self = this;
        return new LayoutResponseDtoEntity_1.LayoutResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Link().list()` / `client.Link().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Link(entopts) {
        const self = this;
        return new LinkEntity_1.LinkEntity(self, entopts);
    }
    // Entity access: `client.ListAgentIntegrationsResponseDto().list()` / `client.ListAgentIntegrationsResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListAgentIntegrationsResponseDto(entopts) {
        const self = this;
        return new ListAgentIntegrationsResponseDtoEntity_1.ListAgentIntegrationsResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.ListDomainRoutesResponseDto().list()` / `client.ListDomainRoutesResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDomainRoutesResponseDto(entopts) {
        const self = this;
        return new ListDomainRoutesResponseDtoEntity_1.ListDomainRoutesResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.ListTopicSubscriptionsResponseDto().list()` / `client.ListTopicSubscriptionsResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListTopicSubscriptionsResponseDto(entopts) {
        const self = this;
        return new ListTopicSubscriptionsResponseDtoEntity_1.ListTopicSubscriptionsResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.MasterJson().list()` / `client.MasterJson().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MasterJson(entopts) {
        const self = this;
        return new MasterJsonEntity_1.MasterJsonEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.MessageResponseDto().list()` / `client.MessageResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MessageResponseDto(entopts) {
        const self = this;
        return new MessageResponseDtoEntity_1.MessageResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.NotificationFeedItemDto().list()` / `client.NotificationFeedItemDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NotificationFeedItemDto(entopts) {
        const self = this;
        return new NotificationFeedItemDtoEntity_1.NotificationFeedItemDtoEntity(self, entopts);
    }
    // Entity access: `client.PreferencesResponseDto().list()` / `client.PreferencesResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PreferencesResponseDto(entopts) {
        const self = this;
        return new PreferencesResponseDtoEntity_1.PreferencesResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Publish().list()` / `client.Publish().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Publish(entopts) {
        const self = this;
        return new PublishEntity_1.PublishEntity(self, entopts);
    }
    // Entity access: `client.RemoveSubscriberResponseDto().list()` / `client.RemoveSubscriberResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveSubscriberResponseDto(entopts) {
        const self = this;
        return new RemoveSubscriberResponseDtoEntity_1.RemoveSubscriberResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Step().list()` / `client.Step().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Step(entopts) {
        const self = this;
        return new StepEntity_1.StepEntity(self, entopts);
    }
    // Entity access: `client.Subscriber().list()` / `client.Subscriber().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscriber(entopts) {
        const self = this;
        return new SubscriberEntity_1.SubscriberEntity(self, entopts);
    }
    // Entity access: `client.SubscriberNotificationsCountResponseDto().list()` / `client.SubscriberNotificationsCountResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriberNotificationsCountResponseDto(entopts) {
        const self = this;
        return new SubscriberNotificationsCountResponseDtoEntity_1.SubscriberNotificationsCountResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.SubscriberNotificationsResponseDto().list()` / `client.SubscriberNotificationsResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriberNotificationsResponseDto(entopts) {
        const self = this;
        return new SubscriberNotificationsResponseDtoEntity_1.SubscriberNotificationsResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.SubscriberPreferencesDto().list()` / `client.SubscriberPreferencesDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriberPreferencesDto(entopts) {
        const self = this;
        return new SubscriberPreferencesDtoEntity_1.SubscriberPreferencesDtoEntity(self, entopts);
    }
    // Entity access: `client.SubscriberResponseDto().list()` / `client.SubscriberResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriberResponseDto(entopts) {
        const self = this;
        return new SubscriberResponseDtoEntity_1.SubscriberResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscription(entopts) {
        const self = this;
        return new SubscriptionEntity_1.SubscriptionEntity(self, entopts);
    }
    // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Topic(entopts) {
        const self = this;
        return new TopicEntity_1.TopicEntity(self, entopts);
    }
    // Entity access: `client.TopicSubscriberDto().list()` / `client.TopicSubscriberDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TopicSubscriberDto(entopts) {
        const self = this;
        return new TopicSubscriberDtoEntity_1.TopicSubscriberDtoEntity(self, entopts);
    }
    // Entity access: `client.TopicSubscriptionsResponseDto().list()` / `client.TopicSubscriptionsResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TopicSubscriptionsResponseDto(entopts) {
        const self = this;
        return new TopicSubscriptionsResponseDtoEntity_1.TopicSubscriptionsResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Translation().list()` / `client.Translation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Translation(entopts) {
        const self = this;
        return new TranslationEntity_1.TranslationEntity(self, entopts);
    }
    // Entity access: `client.TranslationGroupDto().list()` / `client.TranslationGroupDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TranslationGroupDto(entopts) {
        const self = this;
        return new TranslationGroupDtoEntity_1.TranslationGroupDtoEntity(self, entopts);
    }
    // Entity access: `client.TriggerEventResponseDto().list()` / `client.TriggerEventResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TriggerEventResponseDto(entopts) {
        const self = this;
        return new TriggerEventResponseDtoEntity_1.TriggerEventResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.Unseen().list()` / `client.Unseen().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Unseen(entopts) {
        const self = this;
        return new UnseenEntity_1.UnseenEntity(self, entopts);
    }
    // Entity access: `client.Upload().list()` / `client.Upload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Upload(entopts) {
        const self = this;
        return new UploadEntity_1.UploadEntity(self, entopts);
    }
    // Entity access: `client.WebhookResultDto().list()` / `client.WebhookResultDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookResultDto(entopts) {
        const self = this;
        return new WebhookResultDtoEntity_1.WebhookResultDtoEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    // Entity access: `client.WorkflowInfoDto().list()` / `client.WorkflowInfoDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowInfoDto(entopts) {
        const self = this;
        return new WorkflowInfoDtoEntity_1.WorkflowInfoDtoEntity(self, entopts);
    }
    // Entity access: `client.WorkflowResponseDto().list()` / `client.WorkflowResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowResponseDto(entopts) {
        const self = this;
        return new WorkflowResponseDtoEntity_1.WorkflowResponseDtoEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new NovuSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return NovuSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Novu' };
    }
    toString() {
        return 'Novu ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.NovuSDK = NovuSDK;
const SDK = NovuSDK;
exports.SDK = SDK;
//# sourceMappingURL=NovuSDK.js.map