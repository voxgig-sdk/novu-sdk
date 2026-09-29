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
(0, node_test_1.describe)('ContextEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Context();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'context.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "bridgeUrl": { "a": true, "h": "Bridge Url", "n": "bridgeUrl", "r": false, "sh": "Bridge URL override for agent connect, if configured on this context", "t": "`$STRING`", "key$": "bridgeUrl", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "Creation timestamp", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "data": { "a": true, "h": "Data", "n": "data", "op": { "create": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "Custom data associated with this context", "t": "`$OBJECT`", "key$": "data", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this context", "t": "`$STRING`", "key$": "id", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Context type (e.g., tenant, app, workspace)", "t": "`$STRING`", "key$": "type", "index$": 4 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "updatedAt", "index$": 5 } }, "id": { "field": "id", "from": { "id": "id", "type": "type" }, "name": "id", "parts": ["type", "id"], "sep": "/" }, "name": "context", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/contexts", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/contexts", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "contexts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/contexts", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "tenant-prod-123", "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "include_cursor", "or": "includeCursor", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "order_by", "or": "orderBy", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "order_direction", "or": "orderDirection", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "tenant", "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v2/contexts", "q": { "exist": ["after", "before", "id", "idempotency_key", "include_cursor", "limit", "order_by", "order_direction", "search"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "contexts" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/contexts/{type}/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/contexts/{type}/{id}", "q": { "exist": ["id", "idempotency_key", "type"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "contexts" }, { "var": "type" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/contexts/{type}/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v2/contexts/{type}/{id}", "q": { "exist": ["id", "idempotency_key", "type"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "contexts" }, { "var": "type" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v2/contexts/{type}/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/v2/contexts/{type}/{id}", "q": { "exist": ["id", "idempotency_key", "type"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "contexts" }, { "var": "type" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "context", "name__orig": "context", "Name": "Context", "name_": "context", "name-": "context", "NAME": "CONTEXT", "index$": 8 }, { "active": true, "entity": "context", "key$": "BasicContextFlow", "kind": "basic", "name": "BasicContextFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "context_ref01" }, "m": { "type": "type01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "context_ref01" } }], "index$": 1 }, { "a": true, "d": { "type": "type01" }, "i": { "ref": "context_ref01", "srcdatavar": "context_ref01_data", "suffix": "_up0", "textfield": "bridgeUrl" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-context_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "context_ref01", "srcdatavar": "context_ref01_data", "suffix": "_dt0" }, "m": { "id": "context01", "type": "type01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-context_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "context_ref01", "suffix": "_rm0" }, "m": { "id": "context01", "type": "type01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "context_ref01" } }], "index$": 5 }] }, 'Context', { "POST /v2/contexts": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "type": { "type": "string", "minLength": 1, "maxLength": 100, "pattern": "^[a-zA-Z0-9_-]+$", "description": "Context type (e.g., tenant, app, workspace). Must be lowercase alphanumeric with optional separators.", "example": "tenant", "key$": "type" }, "id": { "type": "string", "minLength": 1, "maxLength": 100, "pattern": "^[a-zA-Z0-9_-]+$", "description": "Unique identifier for this context. Must be lowercase alphanumeric with optional separators.", "example": "org-acme", "key$": "id" }, "data": { "type": "object", "description": "Optional custom data to associate with this context.", "example": { "tenantName": "Acme Corp", "region": "us-east-1", "settings": { "theme": "dark" } }, "additionalProperties": true, "key$": "data" }, "bridgeUrl": { "type": "string", "description": "Optional bridge URL override for agent connect. When an inbound agent turn resolves this context, its bridge call is routed here instead of the agent default bridge URL. Must be a publicly reachable URL.", "example": "https://tenant-acme.example.com/api/novu", "key$": "bridgeUrl" } }, "required": ["type", "id"], "x-ref": "#/components/schemas/CreateContextRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "GET /v2/contexts": { "protocol": "http", "parameters": [{ "name": "after", "required": false, "in": "query", "description": "Cursor for pagination indicating the starting point after which to fetch results.", "schema": { "type": "string" }, "index$": 0 }, { "name": "before", "required": false, "in": "query", "description": "Cursor for pagination indicating the ending point before which to fetch results.", "schema": { "type": "string" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "description": "Limit the number of items to return", "example": 10, "schema": { "type": "number" }, "index$": 2 }, { "name": "orderDirection", "required": false, "in": "query", "description": "Direction of sorting", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 3 }, { "name": "orderBy", "required": false, "in": "query", "description": "Field to order by", "schema": { "type": "string" }, "index$": 4 }, { "name": "includeCursor", "required": false, "in": "query", "description": "Include cursor item in response", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "id", "required": false, "in": "query", "description": "Filter contexts by id", "example": "tenant-prod-123", "schema": { "type": "string" }, "index$": 6 }, { "name": "search", "required": false, "in": "query", "description": "Search contexts by type or id (supports partial matching across both fields)", "example": "tenant", "schema": { "type": "string" }, "index$": 7 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 8 }] }, "GET /v2/contexts/{type}/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "Context ID", "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "required": true, "in": "path", "description": "Context type", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "DELETE /v2/contexts/{type}/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "Context ID", "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "required": true, "in": "path", "description": "Context type", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "PATCH /v2/contexts/{type}/{id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "type": "object", "description": "Custom data to associate with this context. Replaces existing data.", "example": { "tenantName": "Acme Corp", "region": "us-east-1", "settings": { "theme": "dark" } }, "additionalProperties": true, "key$": "data" }, "bridgeUrl": { "type": "string", "nullable": true, "description": "Optional bridge URL override for agent connect. When an inbound agent turn resolves this context, its bridge call is routed here instead of the agent default bridge URL. Must be a publicly reachable URL. Pass null to clear an existing override.", "example": "https://tenant-acme.example.com/api/novu", "key$": "bridgeUrl" } }, "required": ["data"], "x-ref": "#/components/schemas/UpdateContextRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "id", "required": true, "in": "path", "description": "Context ID", "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "required": true, "in": "path", "description": "Context type", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const context_ref01_ent = client.Context();
        let context_ref01_data = setup.data.new.context['context_ref01'];
        context_ref01_data['type'] = setup.idmap['type01'];
        context_ref01_data = (await context_ref01_ent.create(context_ref01_data)).data();
        (0, node_assert_1.default)(null != context_ref01_data.id);
        // LIST
        const context_ref01_match = {};
        const context_ref01_list = (await context_ref01_ent.list(context_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(context_ref01_list, { id: context_ref01_data.id })));
        // UPDATE
        const context_ref01_data_up0 = {};
        context_ref01_data_up0.id = context_ref01_data.id;
        context_ref01_data_up0['type'] = setup.idmap['type'];
        const context_ref01_markdef_up0 = { name: 'bridgeUrl', value: 'Mark01-context_ref01_' + setup.now };
        context_ref01_data_up0[context_ref01_markdef_up0.name] = context_ref01_markdef_up0.value;
        const context_ref01_resdata_up0 = (await context_ref01_ent.update(context_ref01_data_up0)).data();
        (0, node_assert_1.default)(context_ref01_resdata_up0.id === context_ref01_data_up0.id);
        (0, node_assert_1.default)(context_ref01_resdata_up0[context_ref01_markdef_up0.name] === context_ref01_markdef_up0.value);
        // LOAD
        const context_ref01_match_dt0 = {};
        context_ref01_match_dt0.id = context_ref01_data.id;
        const context_ref01_data_dt0 = (await context_ref01_ent.load(context_ref01_match_dt0)).data();
        (0, node_assert_1.default)(context_ref01_data_dt0.id === context_ref01_data.id);
        // REMOVE
        const context_ref01_match_rm0 = { id: context_ref01_data.id };
        await context_ref01_ent.remove(context_ref01_match_rm0);
        // LIST
        const context_ref01_match_rt0 = {};
        const context_ref01_list_rt0 = (await context_ref01_ent.list(context_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(context_ref01_list_rt0, { id: context_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/context/ContextTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['context01', 'context02', 'context03', 'type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_CONTEXT_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_CONTEXT_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_CONTEXT_ENTID'];
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
//# sourceMappingURL=ContextEntity.test.js.map