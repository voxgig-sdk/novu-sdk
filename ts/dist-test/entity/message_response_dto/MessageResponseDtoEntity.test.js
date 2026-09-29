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
(0, node_test_1.describe)('MessageResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.MessageResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'message_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "markAs": { "a": true, "h": "Mark As", "n": "markAs", "r": true, "t": "`$STRING`", "key$": "markAs", "index$": 0 }, "messageId": { "a": true, "h": "Message Id", "n": "messageId", "r": true, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "messageId", "index$": 1 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "Message action payload", "t": "`$OBJECT`", "key$": "payload", "index$": 2 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Message action status", "t": "`$STRING`", "key$": "status", "index$": 3 } }, "name": "message_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "message_id", "or": "messageId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "subscriber_id", "or": "subscriberId", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "type", "or": "type", "r": true, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}", "q": { "exist": ["idempotency_key", "message_id", "subscriber_id", "type"] }, "r": { "param": { "messageId": "message_id", "subscriberId": "subscriber_id" } }, "s": [{ "lit": "v1" }, { "lit": "subscribers" }, { "var": "subscriber_id" }, { "lit": "messages" }, { "var": "message_id" }, { "lit": "actions" }, { "var": "type" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/subscribers/{subscriberId}/messages/mark-as", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "subscriber_id", "or": "subscriberId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/subscribers/{subscriberId}/messages/mark-as", "q": { "exist": ["idempotency_key", "subscriber_id"] }, "r": { "param": { "subscriberId": "subscriber_id" } }, "s": [{ "lit": "v1" }, { "lit": "subscribers" }, { "var": "subscriber_id" }, { "lit": "messages" }, { "lit": "mark-as" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.subscriber"], ["$.main.kit.entity.subscriber", "$.main.kit.entity.message"]] }, "key$": "message_response_dto", "name__orig": "message_response_dto", "Name": "MessageResponseDto", "name_": "message_response_dto", "name-": "message-response-dto", "NAME": "MESSAGE_RESPONSE_DTO", "index$": 35 }, { "active": true, "entity": "message_response_dto", "key$": "BasicMessageResponseDtoFlow", "kind": "basic", "name": "BasicMessageResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "message_response_dto_ref01" }, "m": { "subscriber_id": "subscriber01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'MessageResponseDto', { "POST /v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "enum": ["pending", "done"], "type": "string", "description": "Message action status", "key$": "status" }, "payload": { "type": "object", "description": "Message action payload", "key$": "payload" } }, "required": ["status"], "x-ref": "#/components/schemas/MarkMessageActionAsSeenDto", "index$": 1 } } } }, "parameters": [{ "name": "messageId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "required": true, "in": "path", "schema": {}, "index$": 1 }, { "name": "subscriberId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 2 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 3 }] }, "POST /v1/subscribers/{subscriberId}/messages/mark-as": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "messageId": { "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" } }], "key$": "messageId" }, "markAs": { "enum": ["read", "seen", "unread", "unseen"], "type": "string", "key$": "markAs" } }, "required": ["messageId", "markAs"], "x-ref": "#/components/schemas/MessageMarkAsRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "subscriberId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const message_response_dto_ref01_ent = client.MessageResponseDto();
        let message_response_dto_ref01_data = setup.data.new.message_response_dto['message_response_dto_ref01'];
        message_response_dto_ref01_data['subscriber_id'] = setup.idmap['subscriber01'];
        message_response_dto_ref01_data = (await message_response_dto_ref01_ent.create(message_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != message_response_dto_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/message_response_dto/MessageResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['message_response_dto01', 'message_response_dto02', 'message_response_dto03', 'subscriber01', 'subscriber02', 'subscriber03', 'message01', 'message02', 'message03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_MESSAGE_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_MESSAGE_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_MESSAGE_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=MessageResponseDtoEntity.test.js.map