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
(0, node_test_1.describe)('MessageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Message();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'message.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "channel": { "a": true, "h": "Channel", "n": "channel", "r": true, "sh": "Channel the message was sent on", "t": "`$STRING`", "key$": "channel", "index$": 0 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Content of the message, can be an email block or a string", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "content", "index$": 1 }, "contextKeys": { "a": true, "h": "Context Keys", "n": "contextKeys", "r": false, "sh": "Context (single or multi) in which the message was sent", "t": "`$ARRAY`", "key$": "contextKeys", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "Creation date of the message", "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "cta": { "a": true, "h": "Cta", "n": "cta", "r": true, "sh": "Call to action associated with the message", "t": "`$ANY`", "key$": "cta", "index$": 4 }, "deliveredAt": { "a": true, "h": "Delivered At", "n": "deliveredAt", "r": false, "sh": "Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed", "t": "`$ARRAY`", "key$": "deliveredAt", "index$": 5 }, "deviceTokens": { "a": true, "h": "Device Tokens", "n": "deviceTokens", "r": false, "sh": "Device tokens associated with the message, if applicable", "t": "`$ARRAY`", "key$": "deviceTokens", "index$": 6 }, "directWebhookUrl": { "a": true, "h": "Direct Webhook Url", "n": "directWebhookUrl", "r": false, "sh": "Direct webhook URL for the message, if applicable", "t": "`$STRING`", "key$": "directWebhookUrl", "index$": 7 }, "email": { "a": true, "h": "Email", "n": "email", "r": false, "sh": "Email address associated with the message, if applicable", "t": "`$STRING`", "key$": "email", "index$": 8 }, "environmentId": { "a": true, "h": "Environment Id", "n": "environmentId", "r": true, "sh": "Environment ID where the message is sent", "t": "`$STRING`", "key$": "environmentId", "index$": 9 }, "errorId": { "a": true, "h": "Error Id", "n": "errorId", "r": false, "sh": "Error ID if the message has an error", "t": "`$STRING`", "key$": "errorId", "index$": 10 }, "errorText": { "a": true, "h": "Error Text", "n": "errorText", "r": false, "sh": "Error text if the message has an error", "t": "`$STRING`", "key$": "errorText", "index$": 11 }, "feedId": { "a": true, "h": "Feed Id", "n": "feedId", "r": false, "sh": "Feed ID associated with the message, if applicable", "t": "`$STRING`", "key$": "feedId", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the message", "t": "`$STRING`", "key$": "id", "index$": 13 }, "lastReadDate": { "a": true, "h": "Last Read Date", "n": "lastReadDate", "r": false, "sh": "Last read date of the message, if available", "t": "`$STRING`", "key$": "lastReadDate", "index$": 14 }, "lastSeenDate": { "a": true, "h": "Last Seen Date", "n": "lastSeenDate", "r": false, "sh": "Last seen date of the message, if available", "t": "`$STRING`", "key$": "lastSeenDate", "index$": 15 }, "messageTemplateId": { "a": true, "h": "Message Template Id", "n": "messageTemplateId", "r": false, "sh": "Message template ID", "t": "`$STRING`", "key$": "messageTemplateId", "index$": 16 }, "notificationId": { "a": true, "h": "Notification Id", "n": "notificationId", "r": true, "sh": "Notification ID associated with the message", "t": "`$STRING`", "key$": "notificationId", "index$": 17 }, "organizationId": { "a": true, "h": "Organization Id", "n": "organizationId", "r": true, "sh": "Organization ID associated with the message", "t": "`$STRING`", "key$": "organizationId", "index$": 18 }, "overrides": { "a": true, "h": "Overrides", "n": "overrides", "r": false, "sh": "Provider specific overrides used when triggering the notification", "t": "`$OBJECT`", "key$": "overrides", "index$": 19 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "The payload that was used to send the notification trigger", "t": "`$OBJECT`", "key$": "payload", "index$": 20 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "Phone number associated with the message, if applicable", "t": "`$STRING`", "key$": "phone", "index$": 21 }, "providerId": { "a": true, "h": "Provider Id", "n": "providerId", "r": false, "sh": "Provider ID associated with the message, if applicable", "t": "`$STRING`", "key$": "providerId", "index$": 22 }, "read": { "a": true, "h": "Read", "n": "read", "r": true, "sh": "Indicates if the message has been read", "t": "`$BOOLEAN`", "key$": "read", "index$": 23 }, "seen": { "a": true, "h": "Seen", "n": "seen", "r": true, "sh": "Indicates if the message has been seen", "t": "`$BOOLEAN`", "key$": "seen", "index$": 24 }, "snoozedUntil": { "a": true, "h": "Snoozed Until", "n": "snoozedUntil", "r": false, "sh": "Date when the message will be unsnoozed", "t": "`$STRING`", "key$": "snoozedUntil", "index$": 25 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Status of the message", "t": "`$STRING`", "key$": "status", "index$": 26 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "sh": "Subject of the message, if applicable", "t": "`$STRING`", "key$": "subject", "index$": 27 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": false, "sh": "Subscriber details, if available", "t": "`$ANY`", "key$": "subscriber", "index$": 28 }, "subscriberId": { "a": true, "h": "Subscriber Id", "n": "subscriberId", "r": true, "sh": "Subscriber ID associated with the message", "t": "`$STRING`", "key$": "subscriberId", "index$": 29 }, "template": { "a": true, "h": "Template", "n": "template", "r": false, "sh": "Workflow template associated with the message", "t": "`$ANY`", "union": { "branches": 4, "count": 2, "depth": 10 }, "key$": "template", "index$": 30 }, "templateId": { "a": true, "h": "Template Id", "n": "templateId", "r": false, "sh": "Template ID associated with the message", "t": "`$STRING`", "key$": "templateId", "index$": 31 }, "templateIdentifier": { "a": true, "h": "Template Identifier", "n": "templateIdentifier", "r": false, "sh": "Identifier for the message template", "t": "`$STRING`", "key$": "templateIdentifier", "index$": 32 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the message, if applicable", "t": "`$STRING`", "key$": "title", "index$": 33 }, "transactionId": { "a": true, "h": "Transaction Id", "n": "transactionId", "r": true, "sh": "Transaction ID associated with the message", "t": "`$STRING`", "key$": "transactionId", "index$": 34 } }, "id": { "field": "id", "name": "id" }, "name": "message", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/messages", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "channel", "or": "channel", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": ["tenant:org-123", "region:us-east-1"], "k": "query", "n": "context_key", "or": "context_key", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "k": "query", "n": "subscriber_id", "or": "subscriber_id", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "transaction_id", "or": "transaction_id", "r": false, "t": "`$ARRAY`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/messages", "q": { "exist": ["channel", "context_key", "idempotency_key", "limit", "page", "subscriber_id", "transaction_id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "messages" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/messages/transaction/{transactionId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "507f1f77bcf86cd799439011", "k": "param", "n": "transaction_id", "or": "transaction_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "channel", "or": "channel", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/messages/transaction/{transactionId}", "q": { "exist": ["channel", "idempotency_key", "transaction_id"] }, "r": { "param": { "transactionId": "transaction_id" } }, "s": [{ "lit": "v1" }, { "lit": "messages" }, { "lit": "transaction" }, { "var": "transaction_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v1/messages/{messageId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "507f1f77bcf86cd799439011", "k": "param", "n": "id", "or": "message_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/messages/{messageId}", "q": { "exist": ["id", "idempotency_key"] }, "r": { "param": { "messageId": "id" } }, "s": [{ "lit": "v1" }, { "lit": "messages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "message", "name__orig": "message", "Name": "Message", "name_": "message", "name-": "message", "NAME": "MESSAGE", "index$": 41 }, { "active": true, "entity": "message", "key$": "BasicMessageFlow", "kind": "basic", "name": "BasicMessageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "message_ref01" } }], "index$": 0 }] }, 'Message', { "GET /v1/messages": { "protocol": "http", "parameters": [{ "name": "channel", "required": false, "in": "query", "schema": { "type": "string", "description": "Channel the message was sent on", "enum": ["in_app", "email", "sms", "chat", "push", "tool"], "x-ref": "#/components/schemas/ChannelTypeEnum" }, "index$": 0 }, { "name": "subscriberId", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "transactionId", "required": false, "in": "query", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 2 }, { "name": "contextKeys", "required": false, "in": "query", "description": "Filter by exact context keys, order insensitive (format: \"type:id\")", "example": ["tenant:org-123", "region:us-east-1"], "schema": { "type": "array", "items": { "type": "string" } }, "index$": 3 }, { "name": "page", "required": false, "in": "query", "schema": { "default": 0, "type": "number" }, "index$": 4 }, { "name": "limit", "required": false, "in": "query", "schema": { "default": 10, "type": "number" }, "index$": 5 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 6 }] }, "DELETE /v1/messages/transaction/{transactionId}": { "protocol": "http", "parameters": [{ "name": "channel", "required": false, "in": "query", "description": "The channel of the message to be deleted", "schema": { "enum": ["in_app", "email", "sms", "chat", "push", "tool"], "type": "string" }, "index$": 0 }, { "name": "transactionId", "required": true, "in": "path", "example": "507f1f77bcf86cd799439011", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "DELETE /v1/messages/{messageId}": { "protocol": "http", "parameters": [{ "name": "messageId", "required": true, "in": "path", "example": "507f1f77bcf86cd799439011", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let message_ref01_data = Object.values(setup.data.existing.message)[0];
        // LIST
        const message_ref01_ent = client.Message();
        const message_ref01_match = {};
        const message_ref01_list = (await message_ref01_ent.list(message_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/message/MessageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['message01', 'message02', 'message03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_MESSAGE_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_MESSAGE_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_MESSAGE_ENTID'];
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
//# sourceMappingURL=MessageEntity.test.js.map