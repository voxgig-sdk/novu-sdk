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
(0, node_test_1.describe)('TopicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Topic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'topic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": false, "sh": "The date the topic was created", "t": "`$STRING`", "key$": "createdAt", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "Additional custom data associated with the topic", "t": "`$OBJECT`", "key$": "data", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The identifier of the topic", "t": "`$STRING`", "key$": "id", "index$": 2 }, "key": { "a": true, "h": "Key", "n": "key", "r": true, "sh": "The unique key of the topic", "t": "`$STRING`", "key$": "key", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the topic", "t": "`$STRING`", "key$": "name", "index$": 4 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date the topic was last updated", "t": "`$STRING`", "key$": "updatedAt", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "topic", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/topics", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "fail_if_exist", "or": "failIfExists", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/topics", "q": { "exist": ["fail_if_exist", "idempotency_key"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "topics" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/topics", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "include_cursor", "or": "includeCursor", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "key", "or": "key", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "order_by", "or": "orderBy", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "order_direction", "or": "orderDirection", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v2/topics", "q": { "exist": ["after", "before", "idempotency_key", "include_cursor", "key", "limit", "name", "order_by", "order_direction"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "topics" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/topics/{topicKey}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "topicKey", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/topics/{topicKey}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "topicKey": "id" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/topics/{topicKey}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "topicKey", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/topics/{topicKey}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "topicKey": "id" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v2/topics/{topicKey}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "topicKey", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v2/topics/{topicKey}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "topicKey": "id" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "topic", "name__orig": "topic", "Name": "Topic", "name_": "topic", "name-": "topic", "NAME": "TOPIC", "index$": 47 }, { "active": true, "entity": "topic", "key$": "BasicTopicFlow", "kind": "basic", "name": "BasicTopicFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "topic_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "topic_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "topic_ref01", "srcdatavar": "topic_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-topic_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "topic_ref01", "srcdatavar": "topic_ref01_data", "suffix": "_dt0" }, "m": { "id": "topic01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-topic_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "topic_ref01", "suffix": "_rm0" }, "m": { "id": "topic01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "topic_ref01" } }], "index$": 5 }] }, 'Topic', { "POST /v2/topics": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "key": { "type": "string", "minLength": 1, "maxLength": 100, "description": "The unique key identifier for the topic. The key must contain only alphanumeric characters (a-z, A-Z, 0-9), hyphens (-), underscores (_), colons (:), or be a valid email address.", "example": "task:12345", "key$": "key" }, "name": { "type": "string", "minLength": 0, "maxLength": 100, "description": "The display name for the topic", "example": "Task Title", "key$": "name" }, "data": { "type": "object", "nullable": true, "description": "Additional custom data associated with the topic. Flat key-value pairs of scalars (string, number, boolean, string[]). Maximum size: 64KB.", "additionalProperties": true, "example": { "category": "product", "priority": 1 }, "key$": "data" } }, "required": ["key"], "x-ref": "#/components/schemas/CreateUpdateTopicRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "failIfExists", "required": false, "in": "query", "description": "If true, the request will fail if a topic with the same key already exists", "schema": { "type": "boolean" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "GET /v2/topics": { "protocol": "http", "parameters": [{ "name": "after", "required": false, "in": "query", "description": "Cursor for pagination indicating the starting point after which to fetch results.", "schema": { "type": "string" }, "index$": 0 }, { "name": "before", "required": false, "in": "query", "description": "Cursor for pagination indicating the ending point before which to fetch results.", "schema": { "type": "string" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "description": "Limit the number of items to return (max 100)", "example": 10, "schema": { "maximum": 100, "type": "number" }, "index$": 2 }, { "name": "orderDirection", "required": false, "in": "query", "description": "Direction of sorting", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 3 }, { "name": "orderBy", "required": false, "in": "query", "description": "Field to order by", "schema": { "type": "string" }, "index$": 4 }, { "name": "includeCursor", "required": false, "in": "query", "description": "Include cursor item in response", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "key", "required": false, "in": "query", "description": "Key of the topic to filter results.", "schema": { "type": "string" }, "index$": 6 }, { "name": "name", "required": false, "in": "query", "description": "Name of the topic to filter results.", "schema": { "type": "string" }, "index$": 7 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 8 }] }, "GET /v2/topics/{topicKey}": { "protocol": "http", "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "DELETE /v2/topics/{topicKey}": { "protocol": "http", "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] }, "PATCH /v2/topics/{topicKey}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "minLength": 0, "maxLength": 100, "description": "The display name for the topic", "example": "Updated Topic Name", "key$": "name" }, "data": { "type": "object", "nullable": true, "description": "Additional custom data associated with the topic. Flat key-value pairs of scalars (string, number, boolean, string[]). Maximum size: 64KB. Pass null to clear.", "additionalProperties": true, "example": { "category": "product", "priority": 1 }, "key$": "data" } }, "x-ref": "#/components/schemas/UpdateTopicRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const topic_ref01_ent = client.Topic();
        let topic_ref01_data = setup.data.new.topic['topic_ref01'];
        topic_ref01_data = (await topic_ref01_ent.create(topic_ref01_data)).data();
        (0, node_assert_1.default)(null != topic_ref01_data.id);
        // LIST
        const topic_ref01_match = {};
        const topic_ref01_list = (await topic_ref01_ent.list(topic_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(topic_ref01_list, { id: topic_ref01_data.id })));
        // UPDATE
        const topic_ref01_data_up0 = {};
        topic_ref01_data_up0.id = topic_ref01_data.id;
        const topic_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-topic_ref01_' + setup.now };
        topic_ref01_data_up0[topic_ref01_markdef_up0.name] = topic_ref01_markdef_up0.value;
        const topic_ref01_resdata_up0 = (await topic_ref01_ent.update(topic_ref01_data_up0)).data();
        (0, node_assert_1.default)(topic_ref01_resdata_up0.id === topic_ref01_data_up0.id);
        (0, node_assert_1.default)(topic_ref01_resdata_up0[topic_ref01_markdef_up0.name] === topic_ref01_markdef_up0.value);
        // LOAD
        const topic_ref01_match_dt0 = {};
        topic_ref01_match_dt0.id = topic_ref01_data.id;
        const topic_ref01_data_dt0 = (await topic_ref01_ent.load(topic_ref01_match_dt0)).data();
        (0, node_assert_1.default)(topic_ref01_data_dt0.id === topic_ref01_data.id);
        // REMOVE
        const topic_ref01_match_rm0 = { id: topic_ref01_data.id };
        await topic_ref01_ent.remove(topic_ref01_match_rm0);
        // LIST
        const topic_ref01_match_rt0 = {};
        const topic_ref01_list_rt0 = (await topic_ref01_ent.list(topic_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(topic_ref01_list_rt0, { id: topic_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/topic/TopicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['topic01', 'topic02', 'topic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_TOPIC_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_TOPIC_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_TOPIC_ENTID'];
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
//# sourceMappingURL=TopicEntity.test.js.map