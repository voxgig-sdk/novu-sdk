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
(0, node_test_1.describe)('DomainRouteResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.DomainRouteResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'domain_route_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": true, "t": "`$STRING`", "key$": "address", "index$": 0 }, "agentId": { "a": true, "h": "Agent Id", "n": "agentId", "r": false, "sh": "Internal id of the destination agent.", "t": "`$STRING`", "key$": "agentId", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 2 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "String key-value metadata (max 10 keys, 500 characters total when set via API).", "t": "`$OBJECT`", "key$": "data", "index$": 3 }, "domainId": { "a": true, "h": "Domain Id", "n": "domainId", "r": true, "t": "`$STRING`", "key$": "domainId", "index$": 4 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "t": "`$STRING`", "key$": "environmentId", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 6 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "t": "`$STRING`", "key$": "organizationId", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "type", "index$": 8 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "domain_route_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/domains/{domain}/routes/{address}/test", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "address", "or": "address", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "domain_id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v1/domains/{domain}/routes/{address}/test", "q": { "$action": "test", "exist": ["address", "domain_id", "idempotency_key"] }, "r": { "param": { "domain": "domain_id" } }, "s": [{ "lit": "v1" }, { "lit": "domains" }, { "var": "domain_id" }, { "lit": "routes" }, { "var": "address" }, { "lit": "test" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/domains/{domain}/routes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/domains/{domain}/routes", "q": { "$action": "routes", "exist": ["id", "idempotency_key"] }, "r": { "param": { "domain": "id" } }, "s": [{ "lit": "v1" }, { "lit": "domains" }, { "var": "id" }, { "lit": "routes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/domains/{domain}/routes/{address}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "address", "or": "address", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "domain_id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/domains/{domain}/routes/{address}", "q": { "exist": ["address", "domain_id", "idempotency_key"] }, "r": { "param": { "domain": "domain_id" } }, "s": [{ "lit": "v1" }, { "lit": "domains" }, { "var": "domain_id" }, { "lit": "routes" }, { "var": "address" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/domains/{domain}/routes/{address}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "address", "or": "address", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "domain_id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/v1/domains/{domain}/routes/{address}", "q": { "exist": ["address", "domain_id", "idempotency_key"] }, "r": { "param": { "domain": "domain_id" } }, "s": [{ "lit": "v1" }, { "lit": "domains" }, { "var": "domain_id" }, { "lit": "routes" }, { "var": "address" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.domain"]] }, "key$": "domain_route_response_dto", "name__orig": "domain_route_response_dto", "Name": "DomainRouteResponseDto", "name_": "domain_route_response_dto", "name-": "domain-route-response-dto", "NAME": "DOMAIN_ROUTE_RESPONSE_DTO", "index$": 15 }, { "active": true, "entity": "domain_route_response_dto", "key$": "BasicDomainRouteResponseDtoFlow", "kind": "basic", "name": "BasicDomainRouteResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "domain_route_response_dto_ref01" }, "m": { "domain": "domain01", "domain_id": "domain01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "domain_id": "domain01" }, "i": { "ref": "domain_route_response_dto_ref01", "srcdatavar": "domain_route_response_dto_ref01_data", "suffix": "_up0", "textfield": "agentId" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-domain_route_response_dto_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "domain_route_response_dto_ref01", "srcdatavar": "domain_route_response_dto_ref01_data", "suffix": "_dt0" }, "m": { "domain_id": "domain01", "id": "domain_route_response_dto01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-domain_route_response_dto_ref01" } }], "index$": 2 }] }, 'DomainRouteResponseDto', { "POST /v1/domains/{domain}/routes/{address}/test": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "from": { "type": "object", "properties": { "address": { "type": "string" }, "name": { "type": "string" } }, "required": ["address"], "x-ref": "#/components/schemas/TestDomainRouteFromDto" }, "subject": { "type": "string" }, "text": { "type": "string" }, "html": { "type": "string" }, "dryRun": { "type": "boolean", "description": "When true, returns the payload that would be delivered without invoking outbound webhooks or the agent HTTP endpoint." } }, "required": ["from", "subject"], "x-ref": "#/components/schemas/TestDomainRouteDto" } } } }, "parameters": [{ "name": "domain", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "address", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "POST /v1/domains/{domain}/routes": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "address": { "type": "string", "description": "Inbox address local part (e.g. \"support\", \"*\")" }, "agentId": { "type": "string", "description": "Agent identifier; required when type is agent, unused for webhook" }, "type": { "enum": ["agent", "webhook"], "type": "string" }, "data": { "type": "object", "description": "Optional string key-value metadata (max 10 keys, 500 characters total for keys+values).", "additionalProperties": { "type": "string" } } }, "required": ["address", "type"], "x-ref": "#/components/schemas/DomainRouteDto" } } } }, "parameters": [{ "name": "domain", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "GET /v1/domains/{domain}/routes/{address}": { "protocol": "http", "parameters": [{ "name": "domain", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "address", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "PATCH /v1/domains/{domain}/routes/{address}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "agentId": { "type": "string", "description": "Agent identifier; required when type is agent, ignored when type is webhook.", "key$": "agentId" }, "type": { "enum": ["agent", "webhook"], "type": "string", "key$": "type" }, "data": { "type": "object", "description": "Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values).", "additionalProperties": { "type": "string" }, "key$": "data" } }, "x-ref": "#/components/schemas/UpdateDomainRouteDto", "index$": 1 } } } }, "parameters": [{ "name": "domain", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "address", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const domain_route_response_dto_ref01_ent = client.DomainRouteResponseDto();
        let domain_route_response_dto_ref01_data = setup.data.new.domain_route_response_dto['domain_route_response_dto_ref01'];
        domain_route_response_dto_ref01_data['domain'] = setup.idmap['domain01'];
        domain_route_response_dto_ref01_data['domain_id'] = setup.idmap['domain01'];
        domain_route_response_dto_ref01_data = (await domain_route_response_dto_ref01_ent.create(domain_route_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != domain_route_response_dto_ref01_data.id);
        // UPDATE
        const domain_route_response_dto_ref01_data_up0 = {};
        domain_route_response_dto_ref01_data_up0.id = domain_route_response_dto_ref01_data.id;
        domain_route_response_dto_ref01_data_up0['domain_id'] = setup.idmap['domain_id'];
        const domain_route_response_dto_ref01_markdef_up0 = { name: 'agentId', value: 'Mark01-domain_route_response_dto_ref01_' + setup.now };
        domain_route_response_dto_ref01_data_up0[domain_route_response_dto_ref01_markdef_up0.name] = domain_route_response_dto_ref01_markdef_up0.value;
        const domain_route_response_dto_ref01_resdata_up0 = (await domain_route_response_dto_ref01_ent.update(domain_route_response_dto_ref01_data_up0)).data();
        (0, node_assert_1.default)(domain_route_response_dto_ref01_resdata_up0.id === domain_route_response_dto_ref01_data_up0.id);
        (0, node_assert_1.default)(domain_route_response_dto_ref01_resdata_up0[domain_route_response_dto_ref01_markdef_up0.name] === domain_route_response_dto_ref01_markdef_up0.value);
        // LOAD
        const domain_route_response_dto_ref01_match_dt0 = {};
        domain_route_response_dto_ref01_match_dt0.id = domain_route_response_dto_ref01_data.id;
        const domain_route_response_dto_ref01_data_dt0 = (await domain_route_response_dto_ref01_ent.load(domain_route_response_dto_ref01_match_dt0)).data();
        (0, node_assert_1.default)(domain_route_response_dto_ref01_data_dt0.id === domain_route_response_dto_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/domain_route_response_dto/DomainRouteResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['domain_route_response_dto01', 'domain_route_response_dto02', 'domain_route_response_dto03', 'domain01', 'domain02', 'domain03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=DomainRouteResponseDtoEntity.test.js.map