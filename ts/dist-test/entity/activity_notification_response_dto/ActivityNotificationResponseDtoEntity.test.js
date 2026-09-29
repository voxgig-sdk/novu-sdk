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
(0, node_test_1.describe)('ActivityNotificationResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.ActivityNotificationResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'activity_notification_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "channels": { "a": true, "h": "Channels", "n": "channels", "r": false, "t": "`$ARRAY`", "key$": "channels", "index$": 0 }, "contextKeys": { "a": true, "h": "Context Keys", "n": "contextKeys", "r": false, "sh": "Context (single or multi) in which the notification was sent", "t": "`$ARRAY`", "key$": "contextKeys", "index$": 1 }, "controls": { "a": true, "h": "Controls", "n": "controls", "r": false, "sh": "Controls associated with the notification", "t": "`$OBJECT`", "key$": "controls", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": false, "sh": "Creation time of the notification", "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "critical": { "a": true, "h": "Critical", "n": "critical", "r": false, "sh": "Criticality of the notification", "t": "`$BOOLEAN`", "key$": "critical", "index$": 4 }, "digestedNotificationId": { "a": true, "h": "Digested Notification Id", "n": "digestedNotificationId", "r": false, "sh": "Digested Notification ID", "t": "`$STRING`", "key$": "digestedNotificationId", "index$": 5 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "sh": "Environment ID of the notification", "t": "`$STRING`", "key$": "environmentId", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier of the notification", "t": "`$STRING`", "key$": "id", "index$": 7 }, "jobs": { "a": true, "h": "Jobs", "n": "jobs", "r": false, "sh": "Jobs of the notification", "t": "`$ARRAY`", "key$": "jobs", "index$": 8 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "sh": "Organization ID of the notification", "t": "`$STRING`", "key$": "organizationId", "index$": 9 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "Payload of the notification", "t": "`$OBJECT`", "key$": "payload", "index$": 10 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": false, "sh": "Workflow severity", "t": "`$STRING`", "key$": "severity", "index$": 11 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": false, "sh": "Subscriber of the notification", "t": "`$ANY`", "key$": "subscriber", "index$": 12 }, "subscriberId": { "a": true, "h": "Subscriber Id", "n": "subscriberId", "r": true, "sh": "Subscriber ID of the notification", "t": "`$STRING`", "key$": "subscriberId", "index$": 13 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Tags associated with the notification", "t": "`$ARRAY`", "key$": "tags", "index$": 14 }, "template": { "a": true, "h": "Template", "n": "template", "r": false, "sh": "Template of the notification", "t": "`$ANY`", "key$": "template", "index$": 15 }, "templateId": { "a": true, "h": "Template Id", "n": "templateId", "r": false, "sh": "Template ID of the notification", "t": "`$STRING`", "key$": "templateId", "index$": 16 }, "to": { "a": true, "h": "To", "n": "to", "r": false, "sh": "To field for subscriber definition", "t": "`$OBJECT`", "key$": "to", "index$": 17 }, "topics": { "a": true, "h": "Topics", "n": "topics", "r": false, "sh": "Topics of the notification", "t": "`$ARRAY`", "key$": "topics", "index$": 18 }, "transactionId": { "a": true, "h": "Transaction Id", "n": "transactionId", "r": true, "sh": "Transaction ID of the notification", "t": "`$STRING`", "key$": "transactionId", "index$": 19 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": false, "sh": "Last updated time of the notification", "t": "`$STRING`", "key$": "updatedAt", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "activity_notification_response_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/notifications", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "channel", "or": "channels", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "context_key", "or": "contextKeys", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "email", "or": "emails", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "severity", "or": "severity", "r": false, "t": "`$ARRAY`", "index$": 8 }, { "a": true, "k": "query", "n": "subscriber_id", "or": "subscriberIds", "r": false, "t": "`$ARRAY`", "index$": 9 }, { "a": true, "k": "query", "n": "subscription_id", "or": "subscriptionId", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "template", "or": "templates", "r": false, "t": "`$ARRAY`", "index$": 11 }, { "a": true, "k": "query", "n": "topic_key", "or": "topicKey", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "transaction_id", "or": "transactionId", "r": false, "t": "`$STRING`", "index$": 13 }] }, "k": "http", "m": "GET", "o": "/v1/notifications", "q": { "exist": ["after", "before", "channel", "context_key", "email", "idempotency_key", "limit", "page", "search", "severity", "subscriber_id", "subscription_id", "template", "topic_key", "transaction_id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "notifications" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/notifications/{notificationId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "notification_id", "or": "notificationId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/notifications/{notificationId}", "q": { "exist": ["idempotency_key", "notification_id"] }, "r": { "param": { "notificationId": "notification_id" } }, "s": [{ "lit": "v1" }, { "lit": "notifications" }, { "var": "notification_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "activity_notification_response_dto", "name__orig": "activity_notification_response_dto", "Name": "ActivityNotificationResponseDto", "name_": "activity_notification_response_dto", "name-": "activity-notification-response-dto", "NAME": "ACTIVITY_NOTIFICATION_RESPONSE_DTO", "index$": 0 }, { "active": true, "entity": "activity_notification_response_dto", "key$": "BasicActivityNotificationResponseDtoFlow", "kind": "basic", "name": "BasicActivityNotificationResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "activity_notification_response_dto_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "activity_notification_response_dto_ref01", "srcdatavar": "activity_notification_response_dto_ref01_data", "suffix": "_dt0" }, "m": { "id": "activity_notification_response_dto01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-activity_notification_response_dto_ref01" } }], "index$": 1 }] }, 'ActivityNotificationResponseDto', { "GET /v1/notifications": { "protocol": "http", "parameters": [{ "name": "channels", "required": false, "in": "query", "description": "Array of channel types", "schema": { "type": "array", "items": { "type": "string", "description": "Channel the message was sent on", "enum": ["in_app", "email", "sms", "chat", "push", "tool"], "x-ref": "#/components/schemas/ChannelTypeEnum" } }, "index$": 0 }, { "name": "templates", "required": false, "in": "query", "description": "Array of template IDs or a single template ID", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 1 }, { "name": "emails", "required": false, "in": "query", "description": "Array of email addresses or a single email address", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 2 }, { "name": "search", "required": false, "in": "query", "deprecated": true, "description": "Search term (deprecated)", "schema": { "type": "string" }, "index$": 3 }, { "name": "subscriberIds", "required": false, "in": "query", "description": "Array of subscriber IDs or a single subscriber ID", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 4 }, { "name": "severity", "required": false, "in": "query", "description": "Array of severity levels or a single severity level", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 5 }, { "name": "page", "required": false, "in": "query", "description": "Page number for pagination", "schema": { "minimum": 0, "default": 0, "type": "number" }, "index$": 6 }, { "name": "limit", "required": false, "in": "query", "description": "Limit for pagination", "schema": { "minimum": 1, "maximum": 50, "default": 10, "type": "number" }, "index$": 7 }, { "name": "transactionId", "required": false, "in": "query", "description": "The transaction ID to filter by", "schema": { "type": "string" }, "index$": 8 }, { "name": "topicKey", "required": false, "in": "query", "description": "Topic Key for filtering notifications by topic", "schema": { "type": "string" }, "index$": 9 }, { "name": "subscriptionId", "required": false, "in": "query", "description": "Subscription ID for filtering notifications by subscription", "schema": { "type": "string" }, "index$": 10 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Filter by exact context keys, order insensitive (format: \"type:id\")", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 11 }, { "name": "after", "required": false, "in": "query", "description": "Date filter for records after this timestamp. Defaults to earliest date allowed by subscription plan", "schema": { "type": "string" }, "index$": 12 }, { "name": "before", "required": false, "in": "query", "description": "Date filter for records before this timestamp. Defaults to current time of request (now)", "schema": { "type": "string" }, "index$": 13 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 14 }] }, "GET /v1/notifications/{notificationId}": { "protocol": "http", "parameters": [{ "name": "notificationId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let activity_notification_response_dto_ref01_data = Object.values(setup.data.existing.activity_notification_response_dto)[0];
        // LIST
        const activity_notification_response_dto_ref01_ent = client.ActivityNotificationResponseDto();
        const activity_notification_response_dto_ref01_match = {};
        const activity_notification_response_dto_ref01_list = (await activity_notification_response_dto_ref01_ent.list(activity_notification_response_dto_ref01_match)).map((e) => e.data());
        // LOAD
        const activity_notification_response_dto_ref01_match_dt0 = {};
        activity_notification_response_dto_ref01_match_dt0.id = activity_notification_response_dto_ref01_data.id;
        const activity_notification_response_dto_ref01_data_dt0 = (await activity_notification_response_dto_ref01_ent.load(activity_notification_response_dto_ref01_match_dt0)).data();
        (0, node_assert_1.default)(activity_notification_response_dto_ref01_data_dt0.id === activity_notification_response_dto_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/activity_notification_response_dto/ActivityNotificationResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['activity_notification_response_dto01', 'activity_notification_response_dto02', 'activity_notification_response_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_ACTIVITY_NOTIFICATION_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_ACTIVITY_NOTIFICATION_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_ACTIVITY_NOTIFICATION_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=ActivityNotificationResponseDtoEntity.test.js.map