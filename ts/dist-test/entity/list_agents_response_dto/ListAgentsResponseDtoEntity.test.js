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
(0, node_test_1.describe)('ListAgentsResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.ListAgentsResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_agents_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "behavior": { "a": true, "h": "Behavior", "n": "behavior", "r": true, "t": "`$OBJECT`", "key$": "behavior", "index$": 1 }, "bridgeUrl": { "a": true, "h": "Bridge Url", "n": "bridgeUrl", "r": false, "sh": "Production bridge URL", "t": "`$STRING`", "key$": "bridgeUrl", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "createdBy": { "a": true, "h": "Created By", "n": "createdBy", "r": false, "sh": "Mongo user id of the user who created the agent", "t": "`$STRING`", "key$": "createdBy", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 5 }, "devBridgeActive": { "a": true, "h": "Dev Bridge Active", "n": "devBridgeActive", "r": false, "sh": "Whether the dev bridge override is active", "t": "`$BOOLEAN`", "key$": "devBridgeActive", "index$": 6 }, "devBridgeUrl": { "a": true, "h": "Dev Bridge Url", "n": "devBridgeUrl", "r": false, "sh": "Development bridge URL (set by npx novu dev)", "t": "`$STRING`", "key$": "devBridgeUrl", "index$": 7 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "t": "`$STRING`", "key$": "environmentId", "index$": 8 }, "exceedsPlanLimit": { "a": true, "h": "Exceeds Plan Limit", "n": "exceedsPlanLimit", "r": false, "sh": "Cloud only.", "t": "`$BOOLEAN`", "key$": "exceedsPlanLimit", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 10 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": true, "t": "`$STRING`", "key$": "identifier", "index$": 11 }, "integrations": { "a": true, "h": "Integrations", "n": "integrations", "r": false, "t": "`$ARRAY`", "key$": "integrations", "index$": 12 }, "managedRuntime": { "a": true, "h": "Managed Runtime", "n": "managedRuntime", "r": false, "sh": "Present when runtime is \"managed\".", "t": "`$ANY`", "key$": "managedRuntime", "index$": 13 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 14 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "t": "`$STRING`", "key$": "organizationId", "index$": 15 }, "runtime": { "a": true, "h": "Runtime", "n": "runtime", "r": false, "sh": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider", "t": "`$STRING`", "key$": "runtime", "index$": 16 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 17 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "sh": "Discovery scope of the agent.", "t": "`$STRING`", "key$": "visibility", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "list_agents_response_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/agents", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "identifier", "or": "identifier", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "include_cursor", "or": "include_cursor", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/v1/agents", "q": { "exist": ["after", "before", "idempotency_key", "identifier", "include_cursor", "limit", "order_by", "order_direction"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "agents" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list_agents_response_dto", "name__orig": "list_agents_response_dto", "Name": "ListAgentsResponseDto", "name_": "list_agents_response_dto", "name-": "list-agents-response-dto", "NAME": "LIST_AGENTS_RESPONSE_DTO", "index$": 31 }, { "active": true, "entity": "list_agents_response_dto", "key$": "BasicListAgentsResponseDtoFlow", "kind": "basic", "name": "BasicListAgentsResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_agents_response_dto_ref01" } }], "index$": 0 }] }, 'ListAgentsResponseDto', { "GET /v1/agents": { "protocol": "http", "parameters": [{ "name": "after", "required": false, "in": "query", "description": "Cursor for pagination indicating the starting point after which to fetch results.", "schema": { "type": "string" }, "index$": 0 }, { "name": "before", "required": false, "in": "query", "description": "Cursor for pagination indicating the ending point before which to fetch results.", "schema": { "type": "string" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "description": "Limit the number of items to return", "example": 10, "schema": { "type": "number" }, "index$": 2 }, { "name": "orderDirection", "required": false, "in": "query", "description": "Direction of sorting", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 3 }, { "name": "orderBy", "required": false, "in": "query", "description": "Field to order by", "schema": { "type": "string" }, "index$": 4 }, { "name": "includeCursor", "required": false, "in": "query", "description": "Include cursor item in response", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "identifier", "required": false, "in": "query", "description": "Filter agents by partial, case-insensitive match on identifier.", "schema": { "type": "string" }, "index$": 6 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_agents_response_dto_ref01_data = Object.values(setup.data.existing.list_agents_response_dto)[0];
        // LIST
        const list_agents_response_dto_ref01_ent = client.ListAgentsResponseDto();
        const list_agents_response_dto_ref01_match = {};
        const list_agents_response_dto_ref01_list = (await list_agents_response_dto_ref01_ent.list(list_agents_response_dto_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_agents_response_dto/ListAgentsResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_agents_response_dto01', 'list_agents_response_dto02', 'list_agents_response_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_LIST_AGENTS_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_LIST_AGENTS_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_LIST_AGENTS_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=ListAgentsResponseDtoEntity.test.js.map