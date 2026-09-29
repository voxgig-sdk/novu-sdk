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
(0, node_test_1.describe)('SubscriberPreferencesDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.SubscriberPreferencesDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscriber_preferences_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "subscriber_preferences_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/subscribers/{subscriberId}/preferences", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "subscriberId", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": ["tenant:acme"], "k": "query", "n": "context_key", "or": "contextKeys", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": "nonCritical", "k": "query", "n": "criticality", "or": "criticality", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/subscribers/{subscriberId}/preferences", "q": { "$action": "preferences", "exist": ["context_key", "criticality", "id", "idempotency_key"] }, "r": { "param": { "subscriberId": "id" } }, "s": [{ "lit": "v2" }, { "lit": "subscribers" }, { "var": "id" }, { "lit": "preferences" }], "t": { "req": "`reqdata`", "res": "`body.workflows`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v2/subscribers/{subscriberId}/preferences", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "subscriberId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v2/subscribers/{subscriberId}/preferences", "q": { "$action": "preferences", "exist": ["id", "idempotency_key"] }, "r": { "param": { "subscriberId": "id" } }, "s": [{ "lit": "v2" }, { "lit": "subscribers" }, { "var": "id" }, { "lit": "preferences" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "subscriber_preferences_dto", "name__orig": "subscriber_preferences_dto", "Name": "SubscriberPreferencesDto", "name_": "subscriber_preferences_dto", "name-": "subscriber-preferences-dto", "NAME": "SUBSCRIBER_PREFERENCES_DTO", "index$": 44 }, { "active": true, "entity": "subscriber_preferences_dto", "key$": "BasicSubscriberPreferencesDtoFlow", "kind": "basic", "name": "BasicSubscriberPreferencesDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "subscriber_id": "subscriber01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscriber_preferences_dto_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "subscriber_preferences_dto_ref01", "srcdatavar": "subscriber_preferences_dto_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscriber_preferences_dto_ref01" } }], "v": [], "index$": 1 }] }, 'SubscriberPreferencesDto', { "GET /v2/subscribers/{subscriberId}/preferences": { "protocol": "http", "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "description": "The identifier of the subscriber", "schema": { "type": "string" }, "index$": 0 }, { "name": "criticality", "required": false, "in": "query", "schema": { "default": "nonCritical", "enum": ["critical", "nonCritical", "all"], "type": "string" }, "index$": 1 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Context keys for filtering preferences (e.g., [\"tenant:acme\"])", "example": ["tenant:acme"], "schema": { "type": "array", "items": { "type": "string" } }, "index$": 2 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 3 }] }, "PATCH /v2/subscribers/{subscriberId}/preferences": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "channels": { "description": "Channel-specific preference settings", "allOf": [{ "type": "object", "properties": { "email": {}, "sms": {}, "in_app": {}, "push": {}, "chat": {}, "tool": {} }, "x-ref": "#/components/schemas/PatchPreferenceChannelsDto" }] }, "workflowId": { "type": "string", "description": "Workflow internal _id, identifier or slug. If provided, update workflow specific preferences, otherwise update global preferences" }, "schedule": { "description": "Subscriber schedule", "allOf": [{ "type": "object", "properties": { "isEnabled": {}, "weeklySchedule": {} }, "required": ["isEnabled"], "x-ref": "#/components/schemas/ScheduleDto" }] }, "context": { "type": "object", "additionalProperties": { "oneOf": [{ "type": "string", "description": "Simple context id", "example": "org-acme" }, { "type": "object", "description": "Rich context object with id and optional data", "properties": {}, "required": [] }] } } }, "x-ref": "#/components/schemas/PatchSubscriberPreferencesDto" } } } }, "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "description": "The identifier of the subscriber", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subscriber_preferences_dto_ref01_data = Object.values(setup.data.existing.subscriber_preferences_dto)[0];
        // LIST
        const subscriber_preferences_dto_ref01_ent = client.SubscriberPreferencesDto();
        const subscriber_preferences_dto_ref01_match = {};
        subscriber_preferences_dto_ref01_match['subscriber_id'] = setup.idmap['subscriber01'];
        const subscriber_preferences_dto_ref01_list = (await subscriber_preferences_dto_ref01_ent.list(subscriber_preferences_dto_ref01_match)).map((e) => e.data());
        // UPDATE
        const subscriber_preferences_dto_ref01_data_up0 = {};
        subscriber_preferences_dto_ref01_data_up0.id = subscriber_preferences_dto_ref01_data.id;
        const subscriber_preferences_dto_ref01_resdata_up0 = (await subscriber_preferences_dto_ref01_ent.update(subscriber_preferences_dto_ref01_data_up0)).data();
        (0, node_assert_1.default)(subscriber_preferences_dto_ref01_resdata_up0.id === subscriber_preferences_dto_ref01_data_up0.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscriber_preferences_dto/SubscriberPreferencesDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscriber_preferences_dto01', 'subscriber_preferences_dto02', 'subscriber_preferences_dto03', 'subscriber01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_SUBSCRIBER_PREFERENCES_DTO_ENTID'];
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
//# sourceMappingURL=SubscriberPreferencesDtoEntity.test.js.map