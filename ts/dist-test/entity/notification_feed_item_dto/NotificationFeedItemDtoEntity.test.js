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
(0, node_test_1.describe)('NotificationFeedItemDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.NotificationFeedItemDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'notification_feed_item_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actor": { "a": true, "h": "Actor", "n": "actor", "r": false, "sh": "Actor details related to the notification, if applicable.", "t": "`$ANY`", "key$": "actor", "index$": 0 }, "archived": { "a": true, "h": "Archived", "n": "archived", "r": true, "sh": "Indicates whether the notification has been archived by the subscriber.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 1 }, "channel": { "a": true, "h": "Channel", "n": "channel", "r": true, "sh": "Channel the message was sent on", "t": "`$STRING`", "key$": "channel", "index$": 2 }, "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "The main content of the notification.", "t": "`$STRING`", "key$": "content", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "Timestamp indicating when the notification was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "cta": { "a": true, "h": "Cta", "n": "cta", "r": true, "sh": "Call-to-action information associated with the notification.", "t": "`$ANY`", "key$": "cta", "index$": 5 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "The data sent with the notification.", "t": "`$OBJECT`", "key$": "data", "index$": 6 }, "deviceTokens": { "a": true, "h": "Device Tokens", "n": "deviceTokens", "r": false, "sh": "Device tokens for push notifications, if applicable.", "t": "`$ARRAY`", "key$": "deviceTokens", "index$": 7 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "sh": "Identifier for the environment where the notification is sent.", "t": "`$STRING`", "key$": "environmentId", "index$": 8 }, "feedId": { "a": true, "h": "Feed Id", "n": "feedId", "r": false, "sh": "Identifier for the feed associated with the notification.", "t": "`$STRING`", "key$": "feedId", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the notification.", "t": "`$STRING`", "key$": "id", "index$": 10 }, "jobId": { "a": true, "h": "Job Id", "n": "jobId", "r": true, "sh": "Identifier for the job that triggered the notification.", "t": "`$STRING`", "key$": "jobId", "index$": 11 }, "messageTemplateId": { "a": true, "h": "Message Template Id", "n": "messageTemplateId", "r": false, "sh": "Identifier for the message template used.", "t": "`$STRING`", "key$": "messageTemplateId", "index$": 12 }, "notificationId": { "a": true, "h": "Notification Id", "n": "notificationId", "r": true, "sh": "Unique identifier for the notification instance.", "t": "`$STRING`", "key$": "notificationId", "index$": 13 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "sh": "Identifier for the organization sending the notification.", "t": "`$STRING`", "key$": "organizationId", "index$": 14 }, "overrides": { "a": true, "h": "Overrides", "n": "overrides", "r": false, "sh": "Provider-specific overrides used when triggering the notification.", "t": "`$OBJECT`", "key$": "overrides", "index$": 15 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "The payload that was used to send the notification trigger.", "t": "`$OBJECT`", "key$": "payload", "index$": 16 }, "providerId": { "a": true, "h": "Provider Id", "n": "providerId", "r": false, "sh": "Identifier for the provider that sends the notification.", "t": "`$STRING`", "key$": "providerId", "index$": 17 }, "read": { "a": true, "h": "Read", "n": "read", "r": true, "sh": "Indicates whether the notification has been read by the subscriber.", "t": "`$BOOLEAN`", "key$": "read", "index$": 18 }, "seen": { "a": true, "h": "Seen", "n": "seen", "r": true, "sh": "Indicates whether the notification has been seen by the subscriber.", "t": "`$BOOLEAN`", "key$": "seen", "index$": 19 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current status of the notification.", "t": "`$STRING`", "key$": "status", "index$": 20 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "sh": "The subject line for email notifications, if applicable.", "t": "`$STRING`", "key$": "subject", "index$": 21 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": false, "sh": "Subscriber details associated with this notification.", "t": "`$ANY`", "key$": "subscriber", "index$": 22 }, "subscriberId": { "a": true, "h": "Subscriber Id", "n": "subscriberId", "r": true, "sh": "Unique identifier for the subscriber receiving the notification.", "t": "`$STRING`", "key$": "subscriberId", "index$": 23 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Tags associated with the workflow that triggered the notification.", "t": "`$ARRAY`", "key$": "tags", "index$": 24 }, "templateId": { "a": true, "h": "Template Id", "n": "templateId", "r": true, "sh": "Identifier for the template used to generate the notification.", "t": "`$STRING`", "key$": "templateId", "index$": 25 }, "templateIdentifier": { "a": true, "h": "Template Identifier", "n": "templateIdentifier", "r": false, "sh": "Identifier for the template used, if applicable.", "t": "`$STRING`", "key$": "templateIdentifier", "index$": 26 }, "transactionId": { "a": true, "h": "Transaction Id", "n": "transactionId", "r": true, "sh": "Unique identifier for the transaction associated with the notification.", "t": "`$STRING`", "key$": "transactionId", "index$": 27 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "Timestamp indicating when the notification was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 28 } }, "id": { "field": "id", "name": "id" }, "name": "notification_feed_item_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/subscribers/{subscriberId}/notifications/feed", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "subscriber_id", "or": "subscriberId", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=", "k": "query", "n": "payload", "or": "payload", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "read", "or": "read", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "query", "n": "seen", "or": "seen", "r": false, "t": "`$BOOLEAN`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/subscribers/{subscriberId}/notifications/feed", "q": { "exist": ["idempotency_key", "limit", "page", "payload", "read", "seen", "subscriber_id"] }, "r": { "param": { "subscriberId": "subscriber_id" } }, "s": [{ "lit": "v1" }, { "lit": "subscribers" }, { "var": "subscriber_id" }, { "lit": "notifications" }, { "lit": "feed" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.subscriber"]] }, "key$": "notification_feed_item_dto", "name__orig": "notification_feed_item_dto", "Name": "NotificationFeedItemDto", "name_": "notification_feed_item_dto", "name-": "notification-feed-item-dto", "NAME": "NOTIFICATION_FEED_ITEM_DTO", "index$": 36 }, { "active": true, "entity": "notification_feed_item_dto", "key$": "BasicNotificationFeedItemDtoFlow", "kind": "basic", "name": "BasicNotificationFeedItemDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "subscriber_id": "subscriber01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "notification_feed_item_dto_ref01" } }], "index$": 0 }] }, 'NotificationFeedItemDto', { "GET /v1/subscribers/{subscriberId}/notifications/feed": { "protocol": "http", "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "required": false, "in": "query", "example": 0, "schema": { "minimum": 0, "type": "number" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "example": 10, "schema": { "maximum": 100, "default": 10, "type": "number" }, "index$": 2 }, { "name": "read", "required": false, "in": "query", "schema": { "type": "boolean" }, "index$": 3 }, { "name": "seen", "required": false, "in": "query", "schema": { "type": "boolean" }, "index$": 4 }, { "name": "payload", "required": false, "in": "query", "description": "Base64 encoded string of the partial payload JSON object", "example": "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=", "schema": { "type": "string" }, "index$": 5 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 6 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let notification_feed_item_dto_ref01_data = Object.values(setup.data.existing.notification_feed_item_dto)[0];
        // LIST
        const notification_feed_item_dto_ref01_ent = client.NotificationFeedItemDto();
        const notification_feed_item_dto_ref01_match = {};
        notification_feed_item_dto_ref01_match['subscriber_id'] = setup.idmap['subscriber01'];
        const notification_feed_item_dto_ref01_list = (await notification_feed_item_dto_ref01_ent.list(notification_feed_item_dto_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/notification_feed_item_dto/NotificationFeedItemDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['notification_feed_item_dto01', 'notification_feed_item_dto02', 'notification_feed_item_dto03', 'subscriber01', 'subscriber02', 'subscriber03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_NOTIFICATION_FEED_ITEM_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_NOTIFICATION_FEED_ITEM_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_NOTIFICATION_FEED_ITEM_DTO_ENTID'];
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
//# sourceMappingURL=NotificationFeedItemDtoEntity.test.js.map