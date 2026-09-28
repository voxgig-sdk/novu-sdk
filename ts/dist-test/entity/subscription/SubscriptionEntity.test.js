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
(0, node_test_1.describe)('SubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Subscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contextKeys": { "a": true, "h": "Context Keys", "n": "contextKeys", "r": false, "sh": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)", "t": "`$ARRAY`", "key$": "contextKeys", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The creation date of the subscription", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the subscription", "t": "`$STRING`", "key$": "id", "index$": 2 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": false, "sh": "The identifier of the subscription", "t": "`$STRING`", "key$": "identifier", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the subscription", "t": "`$STRING`", "key$": "name", "index$": 4 }, "preferences": { "a": true, "h": "Preferences", "n": "preferences", "r": false, "sh": "The preferences/rules for the subscription", "t": "`$ARRAY`", "key$": "preferences", "index$": 5 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": true, "sh": "The subscriber information", "t": "`$ANY`", "key$": "subscriber", "index$": 6 }, "topic": { "a": true, "h": "Topic", "n": "topic", "r": true, "sh": "The topic information", "t": "`$ANY`", "key$": "topic", "index$": 7 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last update date of the subscription", "t": "`$STRING`", "key$": "updatedAt", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "subscription", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/topics/{topicKey}/subscriptions/{identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "topic_id", "or": "topic_key", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/topics/{topicKey}/subscriptions/{identifier}", "q": { "exist": ["id", "idempotency_key", "topic_id"] }, "r": { "param": { "identifier": "id", "topicKey": "topic_id" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "topic_id" }, { "lit": "subscriptions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v2/topics/{topicKey}/subscriptions/{identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "topic_id", "or": "topic_key", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/v2/topics/{topicKey}/subscriptions/{identifier}", "q": { "exist": ["id", "idempotency_key", "topic_id"] }, "r": { "param": { "identifier": "id", "topicKey": "topic_id" } }, "s": [{ "lit": "v2" }, { "lit": "topics" }, { "var": "topic_id" }, { "lit": "subscriptions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.topic"]] }, "key$": "subscription", "name__orig": "subscription", "Name": "Subscription", "name_": "subscription", "name-": "subscription", "NAME": "SUBSCRIPTION", "index$": 53 }, { "active": true, "entity": "subscription", "key$": "BasicSubscriptionFlow", "kind": "basic", "name": "BasicSubscriptionFlow", "param": {}, "step": [{ "a": true, "d": { "topic_id": "topic01" }, "i": { "ref": "subscription_ref01", "srcdatavar": "subscription_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "subscription_ref01", "srcdatavar": "subscription_ref01_data", "suffix": "_dt0" }, "m": { "id": "subscription01", "topic_id": "topic01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_ref01" } }], "index$": 1 }] }, 'Subscription', { "GET /v2/topics/{topicKey}/subscriptions/{identifier}": { "protocol": "http", "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "identifier", "required": true, "in": "path", "description": "The unique identifier of the subscription", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "PATCH /v2/topics/{topicKey}/subscriptions/{identifier}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the subscription", "example": "My Subscription", "key$": "name" }, "preferences": { "type": "array", "description": "The preferences of the topic. Can be a simple workflow ID string, workflow preference object, or group filter object", "items": { "oneOf": [{ "type": "string" }, { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/WorkflowPreferenceRequestDto" }, { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/GroupPreferenceFilterDto" }] }, "example": [{ "workflowId": "workflow-123", "condition": { "===": [] } }], "key$": "preferences" } }, "x-ref": "#/components/schemas/UpdateTopicSubscriptionRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "topicKey", "required": true, "in": "path", "description": "The key identifier of the topic", "schema": { "type": "string" }, "index$": 0 }, { "name": "identifier", "required": true, "in": "path", "description": "The unique identifier of the subscription", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subscription_ref01_data = Object.values(setup.data.existing.subscription)[0];
        // UPDATE
        const subscription_ref01_ent = client.Subscription();
        const subscription_ref01_data_up0 = {};
        subscription_ref01_data_up0.id = subscription_ref01_data.id;
        subscription_ref01_data_up0['topic_id'] = setup.idmap['topic_id'];
        const subscription_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-subscription_ref01_' + setup.now };
        subscription_ref01_data_up0[subscription_ref01_markdef_up0.name] = subscription_ref01_markdef_up0.value;
        const subscription_ref01_resdata_up0 = (await subscription_ref01_ent.update(subscription_ref01_data_up0)).data();
        (0, node_assert_1.default)(subscription_ref01_resdata_up0.id === subscription_ref01_data_up0.id);
        (0, node_assert_1.default)(subscription_ref01_resdata_up0[subscription_ref01_markdef_up0.name] === subscription_ref01_markdef_up0.value);
        // LOAD
        const subscription_ref01_match_dt0 = {};
        subscription_ref01_match_dt0.id = subscription_ref01_data.id;
        const subscription_ref01_data_dt0 = (await subscription_ref01_ent.load(subscription_ref01_match_dt0)).data();
        (0, node_assert_1.default)(subscription_ref01_data_dt0.id === subscription_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription/SubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription01', 'subscription02', 'subscription03', 'topic01', 'topic02', 'topic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_SUBSCRIPTION_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_SUBSCRIPTION_ENTID'];
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
//# sourceMappingURL=SubscriptionEntity.test.js.map