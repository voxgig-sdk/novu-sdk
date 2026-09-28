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
(0, node_test_1.describe)('ListTopicSubscriptionsResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.ListTopicSubscriptionsResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_topic_subscriptions_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contextKeys": { "a": true, "h": "Context Keys", "n": "contextKeys", "r": false, "sh": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)", "t": "`$ARRAY`", "key$": "contextKeys", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The date and time the subscription was created", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The identifier of the subscription", "t": "`$STRING`", "key$": "id", "index$": 2 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": true, "sh": "The identifier of the subscription", "t": "`$STRING`", "key$": "identifier", "index$": 3 }, "preferences": { "a": true, "h": "Preferences", "n": "preferences", "r": false, "sh": "The preferences for workflows in this subscription", "t": "`$ARRAY`", "key$": "preferences", "index$": 4 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": true, "sh": "Subscriber information", "t": "`$ANY`", "key$": "subscriber", "index$": 5 }, "topic": { "a": true, "h": "Topic", "n": "topic", "r": true, "sh": "Topic information", "t": "`$ANY`", "key$": "topic", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "list_topic_subscriptions_response_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/subscribers/{subscriberId}/subscriptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "subscriber_id", "or": "subscriber_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": ["tenant:org-123", "region:us-east-1"], "k": "query", "n": "context_key", "or": "context_key", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "include_cursor", "or": "include_cursor", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "query", "n": "key", "or": "key", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v2/subscribers/{subscriberId}/subscriptions", "q": { "exist": ["after", "before", "context_key", "idempotency_key", "include_cursor", "key", "limit", "order_by", "order_direction", "subscriber_id"] }, "r": { "param": { "subscriberId": "subscriber_id" } }, "s": [{ "lit": "v2" }, { "lit": "subscribers" }, { "var": "subscriber_id" }, { "lit": "subscriptions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v2/topics/{topicKey}/subscriptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "topic_key", "or": "topic_key", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": ["tenant:org-123", "region:us-east-1"], "k": "query", "n": "context_key", "or": "context_key", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "include_cursor", "or": "include_cursor", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "subscriber_id", "or": "subscriber_id", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v2/topics/{topicKey}/subscriptions", "q": { "exist": ["after", "before", "context_key", "idempotency_key", "include_cursor", "limit", "order_by", "order_direction", "subscriber_id", "topic_key"] }, "r": { "param": { "topicKey": "topic_key" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "topic_key" }, { "lit": "subscriptions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.subscriber"], ["$.main.kit.entity.topic"]] }, "key$": "list_topic_subscriptions_response_dto", "name__orig": "list_topic_subscriptions_response_dto", "Name": "ListTopicSubscriptionsResponseDto", "name_": "list_topic_subscriptions_response_dto", "name-": "list-topic-subscriptions-response-dto", "NAME": "LIST_TOPIC_SUBSCRIPTIONS_RESPONSE_DTO", "index$": 38 }, { "active": true, "entity": "list_topic_subscriptions_response_dto", "key$": "BasicListTopicSubscriptionsResponseDtoFlow", "kind": "basic", "name": "BasicListTopicSubscriptionsResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "topic_key": "topic_key01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_topic_subscriptions_response_dto_ref01" } }], "index$": 0 }] }, 'ListTopicSubscriptionsResponseDto', { "GET /v2/subscribers/{subscriberId}/subscriptions": { "protocol": "http", "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "description": "The identifier of the subscriber", "schema": { "type": "string" }, "index$": 0 }, { "name": "after", "required": false, "in": "query", "description": "Cursor for pagination indicating the starting point after which to fetch results.", "schema": { "type": "string" }, "index$": 1 }, { "name": "before", "required": false, "in": "query", "description": "Cursor for pagination indicating the ending point before which to fetch results.", "schema": { "type": "string" }, "index$": 2 }, { "name": "limit", "required": false, "in": "query", "description": "Limit the number of items to return (max 100)", "example": 10, "schema": { "maximum": 100, "type": "number" }, "index$": 3 }, { "name": "orderDirection", "required": false, "in": "query", "description": "Direction of sorting", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 4 }, { "name": "orderBy", "required": false, "in": "query", "description": "Field to order by", "schema": { "type": "string" }, "index$": 5 }, { "name": "includeCursor", "required": false, "in": "query", "description": "Include cursor item in response", "schema": { "type": "boolean" }, "index$": 6 }, { "name": "key", "required": false, "in": "query", "description": "Filter by topic key", "schema": { "type": "string" }, "index$": 7 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Filter by exact context keys, order insensitive (format: \"type:id\")", "example": ["tenant:org-123", "region:us-east-1"], "schema": { "type": "array", "items": { "type": "string" } }, "index$": 8 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 9 }] }, "GET /v2/topics/{topicKey}/subscriptions": { "protocol": "http", "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "after", "required": false, "in": "query", "description": "Cursor for pagination indicating the starting point after which to fetch results.", "schema": { "type": "string" }, "index$": 1 }, { "name": "before", "required": false, "in": "query", "description": "Cursor for pagination indicating the ending point before which to fetch results.", "schema": { "type": "string" }, "index$": 2 }, { "name": "limit", "required": false, "in": "query", "description": "Limit the number of items to return (max 100)", "example": 10, "schema": { "maximum": 100, "type": "number" }, "index$": 3 }, { "name": "orderDirection", "required": false, "in": "query", "description": "Direction of sorting", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 4 }, { "name": "orderBy", "required": false, "in": "query", "description": "Field to order by", "schema": { "type": "string" }, "index$": 5 }, { "name": "includeCursor", "required": false, "in": "query", "description": "Include cursor item in response", "schema": { "type": "boolean" }, "index$": 6 }, { "name": "subscriberId", "required": false, "in": "query", "description": "Filter by subscriber ID", "schema": { "type": "string" }, "index$": 7 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Filter by exact context keys, order insensitive (format: \"type:id\")", "example": ["tenant:org-123", "region:us-east-1"], "schema": { "type": "array", "items": { "type": "string" } }, "index$": 8 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 9 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_topic_subscriptions_response_dto_ref01_data = Object.values(setup.data.existing.list_topic_subscriptions_response_dto)[0];
        // LIST
        const list_topic_subscriptions_response_dto_ref01_ent = client.ListTopicSubscriptionsResponseDto();
        const list_topic_subscriptions_response_dto_ref01_match = {};
        list_topic_subscriptions_response_dto_ref01_match['topic_key'] = setup.idmap['topic_key01'];
        const list_topic_subscriptions_response_dto_ref01_list = (await list_topic_subscriptions_response_dto_ref01_ent.list(list_topic_subscriptions_response_dto_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_topic_subscriptions_response_dto/ListTopicSubscriptionsResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_topic_subscriptions_response_dto01', 'list_topic_subscriptions_response_dto02', 'list_topic_subscriptions_response_dto03', 'subscriber01', 'subscriber02', 'subscriber03', 'topic01', 'topic02', 'topic03', 'topic_key01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_LIST_TOPIC_SUBSCRIPTIONS_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_LIST_TOPIC_SUBSCRIPTIONS_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_LIST_TOPIC_SUBSCRIPTIONS_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=ListTopicSubscriptionsResponseDtoEntity.test.js.map