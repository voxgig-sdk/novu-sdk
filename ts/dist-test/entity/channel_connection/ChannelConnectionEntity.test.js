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
(0, node_test_1.describe)('ChannelConnectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.ChannelConnection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'channel_connection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth": { "a": true, "h": "Auth", "n": "auth", "r": true, "t": "`$OBJECT`", "key$": "auth", "index$": 0 }, "channel": { "a": true, "h": "Channel", "n": "channel", "r": true, "sh": "The channel type (email, sms, push, chat, etc.).", "t": "`$STRING`", "key$": "channel", "index$": 1 }, "connectionMode": { "a": true, "h": "Connection Mode", "n": "connectionMode", "r": false, "sh": "Connection mode that determines how the channel connection is scoped.", "t": "`$STRING`", "key$": "connectionMode", "index$": 2 }, "context": { "a": true, "h": "Context", "n": "context", "r": false, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "context", "index$": 3 }, "contextKeys": { "a": true, "h": "Context Keys", "n": "contextKeys", "r": true, "sh": "The context of the channel connection", "t": "`$ARRAY`", "key$": "contextKeys", "index$": 4 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 6 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The unique identifier of the channel endpoint.", "t": "`$STRING`", "key$": "identifier", "index$": 7 }, "integrationIdentifier": { "a": true, "h": "Integration Identifier", "n": "integrationIdentifier", "r": true, "sh": "The identifier of the integration to use for this channel endpoint.", "t": "`$STRING`", "key$": "integrationIdentifier", "index$": 8 }, "providerId": { "a": true, "h": "Provider Id", "n": "providerId", "r": true, "sh": "The provider identifier (e.g., sendgrid, twilio, slack, etc.).", "t": "`$STRING`", "key$": "providerId", "index$": 9 }, "subscriberId": { "a": true, "h": "Subscriber Id", "n": "subscriberId", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The subscriber ID to which the channel connection is linked", "t": "`$STRING`", "key$": "subscriberId", "index$": 10 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 11 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": true, "t": "`$OBJECT`", "key$": "workspace", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "channel_connection", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/channel-connections", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/channel-connections", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "channel-connections" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/channel-connections/{identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "identifier", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/channel-connections/{identifier}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "identifier": "id" } }, "s": [{ "lit": "v1" }, { "lit": "channel-connections" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/channel-connections/{identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "identifier", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/channel-connections/{identifier}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "identifier": "id" } }, "s": [{ "lit": "v1" }, { "lit": "channel-connections" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/channel-connections/{identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "identifier", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v1/channel-connections/{identifier}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "identifier": "id" } }, "s": [{ "lit": "v1" }, { "lit": "channel-connections" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "channel_connection", "name__orig": "channel_connection", "Name": "ChannelConnection", "name_": "channel_connection", "name-": "channel-connection", "NAME": "CHANNEL_CONNECTION", "index$": 5 }, { "active": true, "entity": "channel_connection", "key$": "BasicChannelConnectionFlow", "kind": "basic", "name": "BasicChannelConnectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "channel_connection_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "channel_connection_ref01", "srcdatavar": "channel_connection_ref01_data", "suffix": "_up0", "textfield": "channel" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-channel_connection_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "channel_connection_ref01", "srcdatavar": "channel_connection_ref01_data", "suffix": "_dt0" }, "m": { "id": "channel_connection01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-channel_connection_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "channel_connection_ref01", "suffix": "_rm0" }, "m": { "id": "channel_connection01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'ChannelConnection', { "POST /v1/channel-connections": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "identifier": { "type": "string", "description": "The unique identifier for the channel connection. If not provided, one will be generated automatically.", "example": "slack-prod-user123-abc4", "key$": "identifier" }, "subscriberId": { "type": "string", "description": "The subscriber ID to link the channel connection to", "example": "subscriber-123", "key$": "subscriberId" }, "context": { "type": "object", "additionalProperties": { "oneOf": [{ "type": "string", "description": "Simple context id", "example": "org-acme" }, { "type": "object", "description": "Rich context object with id and optional data", "properties": {}, "required": [] }] }, "key$": "context" }, "connectionMode": { "type": "string", "description": "Connection mode that determines how the channel connection is scoped. Use \"subscriber\" (default) to associate the connection with a specific subscriber. Use \"shared\" to associate the connection with a context instead of a subscriber — subscriberId will not be stored on the connection.", "enum": ["subscriber", "shared"], "example": "shared", "key$": "connectionMode" }, "integrationIdentifier": { "type": "string", "description": "The identifier of the integration to use for this channel connection.", "example": "slack-prod", "key$": "integrationIdentifier" }, "workspace": { "type": "object", "properties": { "id": { "example": "T123456", "type": "string" }, "name": { "example": "Acme HQ", "type": "string" }, "botUserId": { "example": "U0123456789", "type": "string" } }, "required": ["id"], "x-ref": "#/components/schemas/WorkspaceDto", "key$": "workspace" }, "auth": { "type": "object", "properties": { "accessToken": { "example": "Workspace access token", "type": "string" }, "refreshToken": { "example": "Workspace refresh token", "type": "string" }, "expiresAt": { "example": "2026-06-15T12:00:00.000Z", "type": "string" }, "refreshTokenExpiresAt": { "example": "2026-09-15T12:00:00.000Z", "type": "string" } }, "required": ["accessToken"], "x-ref": "#/components/schemas/AuthDto", "key$": "auth" } }, "required": ["integrationIdentifier", "workspace", "auth"], "x-ref": "#/components/schemas/CreateChannelConnectionRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "GET /v1/channel-connections/{identifier}": { "protocol": "http", "parameters": [{ "name": "identifier", "required": true, "in": "path", "description": "The unique identifier of the channel connection", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "DELETE /v1/channel-connections/{identifier}": { "protocol": "http", "parameters": [{ "name": "identifier", "required": true, "in": "path", "description": "The unique identifier of the channel connection", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "PATCH /v1/channel-connections/{identifier}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "workspace": { "type": "object", "properties": { "id": { "example": "T123456", "type": "string" }, "name": { "example": "Acme HQ", "type": "string" }, "botUserId": { "example": "U0123456789", "type": "string" } }, "required": ["id"], "x-ref": "#/components/schemas/WorkspaceDto", "key$": "workspace" }, "auth": { "type": "object", "properties": { "accessToken": { "example": "Workspace access token", "type": "string" }, "refreshToken": { "example": "Workspace refresh token", "type": "string" }, "expiresAt": { "example": "2026-06-15T12:00:00.000Z", "type": "string" }, "refreshTokenExpiresAt": { "example": "2026-09-15T12:00:00.000Z", "type": "string" } }, "required": ["accessToken"], "x-ref": "#/components/schemas/AuthDto", "key$": "auth" } }, "required": ["workspace", "auth"], "x-ref": "#/components/schemas/UpdateChannelConnectionRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "identifier", "required": true, "in": "path", "description": "The unique identifier of the channel connection", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const channel_connection_ref01_ent = client.ChannelConnection();
        let channel_connection_ref01_data = setup.data.new.channel_connection['channel_connection_ref01'];
        channel_connection_ref01_data = (await channel_connection_ref01_ent.create(channel_connection_ref01_data)).data();
        (0, node_assert_1.default)(null != channel_connection_ref01_data.id);
        // UPDATE
        const channel_connection_ref01_data_up0 = {};
        channel_connection_ref01_data_up0.id = channel_connection_ref01_data.id;
        const channel_connection_ref01_markdef_up0 = { name: 'channel', value: 'Mark01-channel_connection_ref01_' + setup.now };
        channel_connection_ref01_data_up0[channel_connection_ref01_markdef_up0.name] = channel_connection_ref01_markdef_up0.value;
        const channel_connection_ref01_resdata_up0 = (await channel_connection_ref01_ent.update(channel_connection_ref01_data_up0)).data();
        (0, node_assert_1.default)(channel_connection_ref01_resdata_up0.id === channel_connection_ref01_data_up0.id);
        (0, node_assert_1.default)(channel_connection_ref01_resdata_up0[channel_connection_ref01_markdef_up0.name] === channel_connection_ref01_markdef_up0.value);
        // LOAD
        const channel_connection_ref01_match_dt0 = {};
        channel_connection_ref01_match_dt0.id = channel_connection_ref01_data.id;
        const channel_connection_ref01_data_dt0 = (await channel_connection_ref01_ent.load(channel_connection_ref01_match_dt0)).data();
        (0, node_assert_1.default)(channel_connection_ref01_data_dt0.id === channel_connection_ref01_data.id);
        // REMOVE
        const channel_connection_ref01_match_rm0 = { id: channel_connection_ref01_data.id };
        await channel_connection_ref01_ent.remove(channel_connection_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/channel_connection/ChannelConnectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['channel_connection01', 'channel_connection02', 'channel_connection03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_CHANNEL_CONNECTION_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_CHANNEL_CONNECTION_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_CHANNEL_CONNECTION_ENTID'];
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
//# sourceMappingURL=ChannelConnectionEntity.test.js.map