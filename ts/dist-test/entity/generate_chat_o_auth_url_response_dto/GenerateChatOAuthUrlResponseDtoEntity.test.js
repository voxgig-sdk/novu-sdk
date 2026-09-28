"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GenerateChatOAuthUrlResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.GenerateChatOAuthUrlResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generate_chat_o_auth_url_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "autoLinkUser": { "a": true, "h": "Auto Link User", "n": "autoLinkUser", "r": false, "sh": "When true (default when connectionMode is \"subscriber\"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked \"Connect\" as a personal endpoint.", "t": "`$BOOLEAN`", "key$": "autoLinkUser", "index$": 0 }, "connectionIdentifier": { "a": true, "h": "Connection Identifier", "n": "connectionIdentifier", "r": false, "sh": "Identifier of the channel connection that will be created.", "t": "`$STRING`", "key$": "connectionIdentifier", "index$": 1 }, "connectionMode": { "a": true, "h": "Connection Mode", "n": "connectionMode", "r": false, "sh": "Connection mode that determines how the channel connection is scoped.", "t": "`$STRING`", "key$": "connectionMode", "index$": 2 }, "context": { "a": true, "h": "Context", "n": "context", "r": false, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "context", "index$": 3 }, "contextHash": { "a": true, "h": "Context Hash", "n": "contextHash", "r": false, "sh": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme).", "t": "`$STRING`", "key$": "contextHash", "index$": 4 }, "integrationIdentifier": { "a": true, "h": "Integration Identifier", "n": "integrationIdentifier", "r": true, "sh": "Integration identifier", "t": "`$STRING`", "key$": "integrationIdentifier", "index$": 5 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": false, "sh": "OAuth flow mode.", "t": "`$STRING`", "key$": "mode", "index$": 6 }, "scope": { "a": true, "h": "Scope", "n": "scope", "r": false, "sh": "**Slack only**: OAuth scopes to request during authorization.", "t": "`$ARRAY`", "key$": "scope", "index$": 7 }, "subscriberId": { "a": true, "h": "Subscriber Id", "n": "subscriberId", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The subscriber ID to associate with the channel connection.", "t": "`$STRING`", "key$": "subscriberId", "index$": 8 }, "userScope": { "a": true, "h": "User Scope", "n": "userScope", "r": false, "sh": "**Slack only**: User-level OAuth scopes for \"Sign in with Slack\".", "t": "`$ARRAY`", "key$": "userScope", "index$": 9 } }, "name": "generate_chat_o_auth_url_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/integrations/channel-connections/oauth", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/integrations/channel-connections/oauth", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "integrations" }, { "lit": "channel-connections" }, { "lit": "oauth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/integrations/channel-endpoints/oauth", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/integrations/channel-endpoints/oauth", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "integrations" }, { "lit": "channel-endpoints" }, { "lit": "oauth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/integrations/chat/oauth", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/integrations/chat/oauth", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "integrations" }, { "lit": "chat" }, { "lit": "oauth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "generate_chat_o_auth_url_response_dto", "name__orig": "generate_chat_o_auth_url_response_dto", "Name": "GenerateChatOAuthUrlResponseDto", "name_": "generate_chat_o_auth_url_response_dto", "name-": "generate-chat-o-auth-url-response-dto", "NAME": "GENERATE_CHAT_O_AUTH_URL_RESPONSE_DTO", "index$": 21 }, { "active": true, "entity": "generate_chat_o_auth_url_response_dto", "key$": "BasicGenerateChatOAuthUrlResponseDtoFlow", "kind": "basic", "name": "BasicGenerateChatOAuthUrlResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generate_chat_o_auth_url_response_dto_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'GenerateChatOAuthUrlResponseDto', { "POST /v1/integrations/channel-connections/oauth": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "subscriberId": { "type": "string", "description": "The subscriber ID to associate with the channel connection. For Slack: optional for workspace connections (required only for incoming-webhook scope). For Webex: optional for workspace connections. For MS Teams: optional. Admin consent is tenant-wide.", "example": "subscriber-123", "key$": "subscriberId" }, "integrationIdentifier": { "type": "string", "description": "Integration identifier", "key$": "integrationIdentifier" }, "connectionIdentifier": { "type": "string", "description": "Identifier of the channel connection that will be created. Generated automatically if not provided.", "example": "slack-connection-abc123", "key$": "connectionIdentifier" }, "context": { "type": "object", "additionalProperties": { "oneOf": [{ "type": "string", "description": "Simple context id", "example": "org-acme" }, { "type": "object", "description": "Rich context object with id and optional data", "properties": {}, "required": [] }] }, "key$": "context" }, "contextHash": { "type": "string", "description": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme). Required when the integration has HMAC validation enabled and the session did not already HMAC-verify the context. Establishes that the context/tenant binding was minted by an authenticated backend rather than forged in the browser.", "example": "a1b2c3d4e5f6...", "key$": "contextHash" }, "scope": { "description": "**Slack only**: OAuth scopes to request during authorization. If not specified, default scopes will be used: chat:write, chat:write.public, channels:read, groups:read, users:read, users:read.email. **Webex**: OAuth scopes to request during authorization. Defaults to: spark:messages_write, spark:rooms_read, spark:people_read, spark:memberships_read, spark:kms. **MS Teams**: ignored — uses admin consent with pre-configured Azure AD permissions.", "example": ["chat:write", "chat:write.public", "channels:read"], "type": "array", "items": { "type": "string" }, "key$": "scope" }, "connectionMode": { "type": "string", "description": "Connection mode that determines how the channel connection is scoped. \"subscriber\" (default) associates the connection with a specific subscriber. \"shared\" associates the connection with a context instead of a subscriber.", "enum": ["subscriber", "shared"], "example": "shared", "key$": "connectionMode" }, "autoLinkUser": { "type": "boolean", "description": "When true (default when connectionMode is \"subscriber\"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked \"Connect\" as a personal endpoint. For Slack, uses the authed_user.id returned by oauth.v2.access — no extra redirect. For Webex, uses the authenticated Webex person returned by people/me — no extra redirect. For MS Teams, triggers a second OAuth redirect for delegated user-identity consent. Set to false to only create the workspace connection without linking the individual user.", "example": true, "key$": "autoLinkUser" } }, "required": ["integrationIdentifier"], "x-ref": "#/components/schemas/GenerateConnectOauthUrlRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/integrations/channel-endpoints/oauth": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "subscriberId": { "type": "string", "description": "The subscriber ID to link to their chat identity. Required — this operation always binds a specific subscriber to a user identity in the chat provider.", "example": "subscriber-123", "key$": "subscriberId" }, "integrationIdentifier": { "type": "string", "description": "Integration identifier", "key$": "integrationIdentifier" }, "connectionIdentifier": { "type": "string", "description": "Identifier of the existing channel connection to associate this user endpoint with. Generated automatically if not provided for providers that support standalone user linking. Required for Webex.", "example": "slack-connection-abc123", "key$": "connectionIdentifier" }, "context": { "type": "object", "additionalProperties": { "oneOf": [{ "type": "string", "description": "Simple context id", "example": "org-acme" }, { "type": "object", "description": "Rich context object with id and optional data", "properties": {}, "required": [] }] }, "key$": "context" }, "contextHash": { "type": "string", "description": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme). Required when the integration has HMAC validation enabled and the session did not already HMAC-verify the context, so the per-user link carries a trustworthy subscriber/tenant binding.", "example": "a1b2c3d4e5f6...", "key$": "contextHash" }, "userScope": { "description": "**Slack only**: User-level OAuth scopes for \"Sign in with Slack\". Defaults to: identity.basic. **Webex**: Optional Webex scopes for people/me; defaults to spark:people_read. **MS Teams**: ignored — uses delegated OpenID scopes (openid, profile, User.Read).", "example": ["identity.basic"], "type": "array", "items": { "type": "string" }, "key$": "userScope" } }, "required": ["subscriberId", "integrationIdentifier"], "x-ref": "#/components/schemas/GenerateLinkUserOauthUrlRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/integrations/chat/oauth": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "subscriberId": { "type": "string", "description": "The subscriber ID to link the channel connection to. For Slack: Required for incoming webhook endpoints, optional for workspace connections. For MS Teams: Optional. Admin consent is tenant-wide and can be associated with a subscriber for organizational purposes.", "example": "subscriber-123", "key$": "subscriberId" }, "integrationIdentifier": { "type": "string", "description": "Integration identifier", "key$": "integrationIdentifier" }, "connectionIdentifier": { "type": "string", "description": "Identifier of the channel connection that will be created. It is generated automatically if not provided.", "example": "slack-connection-abc123", "key$": "connectionIdentifier" }, "context": { "type": "object", "additionalProperties": { "oneOf": [{ "type": "string", "description": "Simple context id", "example": "org-acme" }, { "type": "object", "description": "Rich context object with id and optional data", "properties": {}, "required": [] }] }, "key$": "context" }, "scope": { "description": "**Slack only**: OAuth scopes to request during authorization. These define the permissions your Slack integration will have. If not specified, default scopes will be used: chat:write, chat:write.public, channels:read, groups:read, users:read, users:read.email. **Webex**: OAuth scopes to request during authorization. Defaults to: spark:messages_write, spark:rooms_read, spark:people_read, spark:memberships_read, spark:kms. **MS Teams**: This parameter is ignored. MS Teams uses admin consent with pre-configured permissions in Azure AD. Note: The generated OAuth URL expires after 5 minutes.", "example": ["chat:write", "chat:write.public", "channels:read", "groups:read", "users:read", "users:read.email", "incoming-webhook"], "type": "array", "items": { "type": "string" }, "key$": "scope" }, "userScope": { "description": "**Slack only, link_user mode**: User-level OAuth scopes to request during authorization. Used when mode is \"link_user\" to identify the Slack user via \"Sign in with Slack\". If not specified, defaults to: identity.basic.", "example": ["identity.basic"], "type": "array", "items": { "type": "string" }, "key$": "userScope" }, "mode": { "type": "string", "description": "OAuth flow mode. Use \"connect\" (default) to create a workspace channel connection, or \"link_user\" to identify the subscriber's Slack user ID without creating a connection.", "enum": ["connect", "link_user"], "example": "link_user", "key$": "mode" }, "connectionMode": { "type": "string", "description": "Connection mode that determines how the channel connection is scoped. Use \"subscriber\" (default) to associate the connection with a specific subscriber. Use \"shared\" to associate the connection with a context instead of a subscriber — subscriberId will not be stored on the connection.", "enum": ["subscriber", "shared"], "example": "shared", "key$": "connectionMode" }, "autoLinkUser": { "type": "boolean", "description": "When true, after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked \"Connect\" as a personal endpoint. For Slack, this uses the authed_user.id already returned by oauth.v2.access — no extra redirect. For Webex, this uses the authenticated Webex person returned by people/me — no extra redirect. For MS Teams, this triggers a second OAuth redirect for delegated user-identity consent. Defaults to false when omitted; the SlackConnectButton and MsTeamsConnectButton SDK components default this to true.", "example": true, "key$": "autoLinkUser" } }, "required": ["integrationIdentifier"], "x-ref": "#/components/schemas/GenerateChatOauthUrlRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const generate_chat_o_auth_url_response_dto_ref01_ent = client.GenerateChatOAuthUrlResponseDto();
        let generate_chat_o_auth_url_response_dto_ref01_data = setup.data.new.generate_chat_o_auth_url_response_dto['generate_chat_o_auth_url_response_dto_ref01'];
        generate_chat_o_auth_url_response_dto_ref01_data = (await generate_chat_o_auth_url_response_dto_ref01_ent.create(generate_chat_o_auth_url_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != generate_chat_o_auth_url_response_dto_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generate_chat_o_auth_url_response_dto/GenerateChatOAuthUrlResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generate_chat_o_auth_url_response_dto01', 'generate_chat_o_auth_url_response_dto02', 'generate_chat_o_auth_url_response_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_GENERATE_CHAT_O_AUTH_URL_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_GENERATE_CHAT_O_AUTH_URL_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_GENERATE_CHAT_O_AUTH_URL_RESPONSE_DTO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NovuSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.NOVU_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NOVU_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GenerateChatOAuthUrlResponseDtoEntity.test.js.map