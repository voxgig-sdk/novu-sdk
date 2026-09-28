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
(0, node_test_1.describe)('IntegrationResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.IntegrationResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'integration_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Indicates whether the integration is currently active.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "channel": { "a": true, "h": "Channel", "n": "channel", "r": false, "sh": "The channel type for the integration, which defines how it communicates (e.g., email, SMS).", "t": "`$STRING`", "key$": "channel", "index$": 1 }, "conditions": { "a": true, "de": true, "h": "Conditions", "n": "conditions", "r": false, "sh": "Legacy StepFilter conditions.", "t": "`$ARRAY`", "key$": "conditions", "index$": 2 }, "configurations": { "a": true, "h": "Configurations", "n": "configurations", "r": false, "sh": "The configurations required for enabling the additional configurations of the integration.", "t": "`$ANY`", "key$": "configurations", "index$": 3 }, "credentials": { "a": true, "h": "Credentials", "n": "credentials", "r": false, "sh": "The decrypted credentials required for the integration to function (e.g.", "t": "`$ANY`", "key$": "credentials", "index$": 4 }, "deleted": { "a": true, "h": "Deleted", "n": "deleted", "r": true, "sh": "Indicates whether the integration has been marked as deleted (soft delete).", "t": "`$BOOLEAN`", "key$": "deleted", "index$": 5 }, "deletedAt": { "a": true, "h": "Deleted At", "n": "deletedAt", "r": false, "sh": "The timestamp indicating when the integration was deleted.", "t": "`$STRING`", "key$": "deletedAt", "index$": 6 }, "deletedBy": { "a": true, "h": "Deleted By", "n": "deletedBy", "r": false, "sh": "The identifier of the user who performed the deletion of this integration.", "t": "`$STRING`", "key$": "deletedBy", "index$": 7 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "sh": "The unique identifier for the environment associated with this integration.", "t": "`$STRING`", "key$": "environmentId", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier of the integration record in the database.", "t": "`$STRING`", "key$": "id", "index$": 9 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": true, "sh": "A unique string identifier for the integration, often used for API calls or internal references.", "t": "`$STRING`", "key$": "identifier", "index$": 10 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": false, "sh": "Distinguishes delivery integrations from agent-runtime integrations.", "t": "`$STRING`", "key$": "kind", "index$": 11 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the integration, which is used to identify it in the user interface.", "t": "`$STRING`", "key$": "name", "index$": 12 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "sh": "The unique identifier for the organization that owns this integration.", "t": "`$STRING`", "key$": "organizationId", "index$": 13 }, "primary": { "a": true, "h": "Primary", "n": "primary", "r": true, "sh": "Indicates whether this integration is marked as primary.", "t": "`$BOOLEAN`", "key$": "primary", "index$": 14 }, "providerId": { "a": true, "h": "Provider Id", "n": "providerId", "r": true, "sh": "The identifier for the provider of the integration (e.g., \"mailgun\", \"twilio\").", "t": "`$STRING`", "key$": "providerId", "index$": 15 }, "rules": { "a": true, "h": "Rules", "n": "rules", "r": false, "sh": "JSONLogic used at send time to select this integration.", "t": "`$OBJECT`", "key$": "rules", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "integration_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/integrations/{integrationId}/set-primary", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "integration_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/integrations/{integrationId}/set-primary", "q": { "$action": "set-primary", "exist": ["id", "idempotency_key"] }, "r": { "param": { "integrationId": "id" } }, "s": [{ "lit": "v1" }, { "lit": "integrations" }, { "var": "id" }, { "lit": "set-primary" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/integrations/active", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/integrations/active", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "integrations" }, { "lit": "active" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "integration_response_dto", "name__orig": "integration_response_dto", "Name": "IntegrationResponseDto", "name_": "integration_response_dto", "name-": "integration-response-dto", "NAME": "INTEGRATION_RESPONSE_DTO", "index$": 26 }, { "active": true, "entity": "integration_response_dto", "key$": "BasicIntegrationResponseDtoFlow", "kind": "basic", "name": "BasicIntegrationResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "integration_response_dto_ref01" }, "m": { "integration_id": "integration01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "integration_response_dto_ref01" } }], "index$": 1 }] }, 'IntegrationResponseDto', { "POST /v1/integrations/{integrationId}/set-primary": { "protocol": "http", "parameters": [{ "name": "integrationId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "GET /v1/integrations/active": { "protocol": "http", "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const integration_response_dto_ref01_ent = client.IntegrationResponseDto();
        let integration_response_dto_ref01_data = setup.data.new.integration_response_dto['integration_response_dto_ref01'];
        integration_response_dto_ref01_data['integration_id'] = setup.idmap['integration01'];
        integration_response_dto_ref01_data = (await integration_response_dto_ref01_ent.create(integration_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != integration_response_dto_ref01_data.id);
        // LIST
        const integration_response_dto_ref01_match = {};
        const integration_response_dto_ref01_list = (await integration_response_dto_ref01_ent.list(integration_response_dto_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(integration_response_dto_ref01_list, { id: integration_response_dto_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/integration_response_dto/IntegrationResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['integration_response_dto01', 'integration_response_dto02', 'integration_response_dto03', 'integration01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_INTEGRATION_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_INTEGRATION_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_INTEGRATION_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=IntegrationResponseDtoEntity.test.js.map