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
(0, node_test_1.describe)('EnvironmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Environment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'environment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apiKeys": { "a": true, "h": "Api Keys", "n": "apiKeys", "r": false, "sh": "List of API keys associated with the environment", "t": "`$ARRAY`", "key$": "apiKeys", "index$": 0 }, "bridge": { "a": true, "h": "Bridge", "n": "bridge", "r": false, "t": "`$OBJECT`", "key$": "bridge", "index$": 1 }, "color": { "a": true, "h": "Color", "n": "color", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Hex color code for the environment", "t": "`$STRING`", "key$": "color", "index$": 2 }, "dns": { "a": true, "h": "Dns", "n": "dns", "r": false, "t": "`$OBJECT`", "key$": "dns", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier of the environment", "t": "`$STRING`", "key$": "id", "index$": 4 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Unique identifier for the environment", "t": "`$STRING`", "key$": "identifier", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Name of the environment to be created", "t": "`$STRING`", "key$": "name", "index$": 6 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "sh": "Organization ID associated with the environment", "t": "`$STRING`", "key$": "organizationId", "index$": 7 }, "parentId": { "a": true, "h": "Parent Id", "n": "parentId", "r": false, "sh": "MongoDB ObjectId of the parent environment (optional)", "t": "`$STRING`", "key$": "parentId", "index$": 8 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": false, "sh": "URL-friendly slug for the environment", "t": "`$STRING`", "key$": "slug", "index$": 9 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of the environment", "t": "`$STRING`", "key$": "type", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "environment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/environments", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/environments", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "environments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/environments", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/environments", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "environments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/environments/{environmentId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "environmentId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/environments/{environmentId}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "environmentId": "id" } }, "s": [{ "lit": "v1" }, { "lit": "environments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /v1/environments/{environmentId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "environmentId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v1/environments/{environmentId}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "environmentId": "id" } }, "s": [{ "lit": "v1" }, { "lit": "environments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "environment", "name__orig": "environment", "Name": "Environment", "name_": "environment", "name-": "environment", "NAME": "ENVIRONMENT", "index$": 16 }, { "active": true, "entity": "environment", "key$": "BasicEnvironmentFlow", "kind": "basic", "name": "BasicEnvironmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "environment_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "environment_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "environment_ref01", "srcdatavar": "environment_ref01_data", "suffix": "_up0", "textfield": "color" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-environment_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "environment_ref01", "suffix": "_rm0" }, "m": { "id": "environment01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "environment_ref01" } }], "index$": 4 }] }, 'Environment', { "POST /v1/environments": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "Name of the environment to be created", "example": "Production Environment", "key$": "name" }, "parentId": { "type": "string", "description": "MongoDB ObjectId of the parent environment (optional)", "example": "60d5ecb8b3b3a30015f3e1a1", "key$": "parentId" }, "color": { "type": "string", "description": "Hex color code for the environment", "example": "#3498db", "key$": "color" } }, "required": ["name", "color"], "x-ref": "#/components/schemas/CreateEnvironmentRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "GET /v1/environments": { "protocol": "http", "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /v1/environments/{environmentId}": { "protocol": "http", "parameters": [{ "name": "environmentId", "required": true, "in": "path", "description": "The unique identifier of the environment", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "PUT /v1/environments/{environmentId}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "key$": "name" }, "identifier": { "type": "string", "key$": "identifier" }, "parentId": { "type": "string", "key$": "parentId" }, "color": { "type": "string", "key$": "color" }, "dns": { "type": "object", "properties": { "inboundParseDomain": { "type": "string" } }, "x-ref": "#/components/schemas/InBoundParseDomainDto", "key$": "dns" }, "bridge": { "type": "object", "properties": { "url": { "type": "string" } }, "x-ref": "#/components/schemas/BridgeConfigurationDto", "key$": "bridge" } }, "x-ref": "#/components/schemas/UpdateEnvironmentRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "environmentId", "required": true, "in": "path", "description": "The unique identifier of the environment", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const environment_ref01_ent = client.Environment();
        let environment_ref01_data = setup.data.new.environment['environment_ref01'];
        environment_ref01_data = (await environment_ref01_ent.create(environment_ref01_data)).data();
        (0, node_assert_1.default)(null != environment_ref01_data.id);
        // LIST
        const environment_ref01_match = {};
        const environment_ref01_list = (await environment_ref01_ent.list(environment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(environment_ref01_list, { id: environment_ref01_data.id })));
        // UPDATE
        const environment_ref01_data_up0 = {};
        environment_ref01_data_up0.id = environment_ref01_data.id;
        const environment_ref01_markdef_up0 = { name: 'color', value: 'Mark01-environment_ref01_' + setup.now };
        environment_ref01_data_up0[environment_ref01_markdef_up0.name] = environment_ref01_markdef_up0.value;
        const environment_ref01_resdata_up0 = (await environment_ref01_ent.update(environment_ref01_data_up0)).data();
        (0, node_assert_1.default)(environment_ref01_resdata_up0.id === environment_ref01_data_up0.id);
        (0, node_assert_1.default)(environment_ref01_resdata_up0[environment_ref01_markdef_up0.name] === environment_ref01_markdef_up0.value);
        // REMOVE
        const environment_ref01_match_rm0 = { id: environment_ref01_data.id };
        await environment_ref01_ent.remove(environment_ref01_match_rm0);
        // LIST
        const environment_ref01_match_rt0 = {};
        const environment_ref01_list_rt0 = (await environment_ref01_ent.list(environment_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(environment_ref01_list_rt0, { id: environment_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/environment/EnvironmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['environment01', 'environment02', 'environment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_ENVIRONMENT_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_ENVIRONMENT_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_ENVIRONMENT_ENTID'];
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
//# sourceMappingURL=EnvironmentEntity.test.js.map