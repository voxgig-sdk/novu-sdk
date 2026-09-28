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
(0, node_test_1.describe)('SubscriberNotificationsResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.SubscriberNotificationsResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscriber_notifications_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "subscriber_notifications_response_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/subscribers/{subscriberId}/notifications", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "subscriber_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "context_key", "or": "context_key", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "ex": 1704067200000, "k": "query", "n": "created_gte", "or": "created_gte", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": 1735689599999, "k": "query", "n": "created_lte", "or": "created_lte", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 7 }, { "a": true, "k": "query", "n": "read", "or": "read", "r": false, "t": "`$BOOLEAN`", "index$": 8 }, { "a": true, "k": "query", "n": "seen", "or": "seen", "r": false, "t": "`$BOOLEAN`", "index$": 9 }, { "a": true, "k": "query", "n": "severity", "or": "severity", "r": false, "t": "`$ARRAY`", "index$": 10 }, { "a": true, "k": "query", "n": "snoozed", "or": "snoozed", "r": false, "t": "`$BOOLEAN`", "index$": 11 }] }, "k": "http", "m": "GET", "o": "/v2/subscribers/{subscriberId}/notifications", "q": { "$action": "notifications", "exist": ["after", "archived", "context_key", "created_gte", "created_lte", "data", "id", "idempotency_key", "limit", "offset", "read", "seen", "severity", "snoozed"] }, "r": { "param": { "subscriberId": "id" } }, "s": [{ "lit": "v2" }, { "lit": "subscribers" }, { "var": "id" }, { "lit": "notifications" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "subscriber_notifications_response_dto", "name__orig": "subscriber_notifications_response_dto", "Name": "SubscriberNotificationsResponseDto", "name_": "subscriber_notifications_response_dto", "name-": "subscriber-notifications-response-dto", "NAME": "SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO", "index$": 50 }, { "active": true, "entity": "subscriber_notifications_response_dto", "key$": "BasicSubscriberNotificationsResponseDtoFlow", "kind": "basic", "name": "BasicSubscriberNotificationsResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "subscriber_id": "subscriber01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscriber_notifications_response_dto_ref01" } }], "index$": 0 }] }, 'SubscriberNotificationsResponseDto', { "GET /v2/subscribers/{subscriberId}/notifications": { "protocol": "http", "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "description": "The identifier of the subscriber", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "required": false, "in": "query", "example": 10, "schema": { "maximum": 100, "default": 10, "type": "number" }, "index$": 1 }, { "name": "after", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "offset", "required": false, "in": "query", "example": 0, "schema": { "type": "number" }, "index$": 3 }, { "name": "read", "required": false, "in": "query", "description": "Filter by read/unread state", "schema": { "type": "boolean" }, "index$": 4 }, { "name": "archived", "required": false, "in": "query", "description": "Filter by archived state", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "snoozed", "required": false, "in": "query", "description": "Filter by snoozed state", "schema": { "type": "boolean" }, "index$": 6 }, { "name": "seen", "required": false, "in": "query", "description": "Filter by seen state", "schema": { "type": "boolean" }, "index$": 7 }, { "name": "data", "required": false, "in": "query", "description": "Filter by data attributes (JSON string)", "schema": { "type": "string" }, "index$": 8 }, { "name": "severity", "required": false, "in": "query", "description": "Filter by severity levels", "schema": { "type": "array", "items": { "type": "string", "enum": ["high", "medium", "low", "none"] } }, "index$": 9 }, { "name": "createdGte", "required": false, "in": "query", "description": "Filter notifications created on or after this timestamp (Unix timestamp in milliseconds)", "example": 1704067200000, "schema": { "type": "number" }, "index$": 10 }, { "name": "createdLte", "required": false, "in": "query", "description": "Filter notifications created on or before this timestamp (Unix timestamp in milliseconds)", "example": 1735689599999, "schema": { "type": "number" }, "index$": 11 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Context keys for filtering notifications in multi-context scenarios", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 12 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 13 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subscriber_notifications_response_dto_ref01_data = Object.values(setup.data.existing.subscriber_notifications_response_dto)[0];
        // LIST
        const subscriber_notifications_response_dto_ref01_ent = client.SubscriberNotificationsResponseDto();
        const subscriber_notifications_response_dto_ref01_match = {};
        subscriber_notifications_response_dto_ref01_match['subscriber_id'] = setup.idmap['subscriber01'];
        const subscriber_notifications_response_dto_ref01_list = (await subscriber_notifications_response_dto_ref01_ent.list(subscriber_notifications_response_dto_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscriber_notifications_response_dto/SubscriberNotificationsResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscriber_notifications_response_dto01', 'subscriber_notifications_response_dto02', 'subscriber_notifications_response_dto03', 'subscriber01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=SubscriberNotificationsResponseDtoEntity.test.js.map