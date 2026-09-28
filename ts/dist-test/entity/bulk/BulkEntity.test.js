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
(0, node_test_1.describe)('BulkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Bulk();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bulk.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "subscribers": { "a": true, "h": "Subscribers", "n": "subscribers", "r": true, "sh": "An array of subscribers to be created in bulk.", "t": "`$ARRAY`", "key$": "subscribers", "index$": 0 } }, "name": "bulk", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/subscribers/bulk", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/subscribers/bulk", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "subscribers" }, { "lit": "bulk" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "bulk", "name__orig": "bulk", "Name": "Bulk", "name_": "bulk", "name-": "bulk", "NAME": "BULK", "index$": 4 }, { "active": true, "entity": "bulk", "key$": "BasicBulkFlow", "kind": "basic", "name": "BasicBulkFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "bulk_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Bulk', { "POST /v1/subscribers/bulk": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "subscribers": { "description": "An array of subscribers to be created in bulk.", "type": "array", "items": { "type": "object", "properties": { "firstName": { "type": "string", "nullable": true, "description": "First name of the subscriber", "example": "John", "key$": "firstName" }, "lastName": { "type": "string", "nullable": true, "description": "Last name of the subscriber", "example": "Doe", "key$": "lastName" }, "email": { "type": "string", "nullable": true, "description": "Email address of the subscriber", "example": "john.doe@example.com", "key$": "email" }, "phone": { "type": "string", "nullable": true, "description": "Phone number of the subscriber", "example": "+1234567890", "key$": "phone" }, "avatar": { "type": "string", "nullable": true, "description": "Avatar URL or identifier", "example": "https://example.com/avatar.jpg", "key$": "avatar" }, "locale": { "type": "string", "nullable": true, "description": "Locale of the subscriber", "example": "en-US", "key$": "locale" }, "timezone": { "type": "string", "nullable": true, "description": "Timezone of the subscriber", "example": "America/New_York", "key$": "timezone" }, "data": { "type": "object", "nullable": true, "description": "Additional custom data associated with the subscriber", "additionalProperties": true, "key$": "data" }, "subscriberId": { "type": "string", "description": "Unique identifier of the subscriber", "key$": "subscriberId" } }, "required": ["subscriberId"], "x-ref": "#/components/schemas/CreateSubscriberRequestDto" }, "key$": "subscribers" } }, "required": ["subscribers"], "x-ref": "#/components/schemas/BulkSubscriberCreateDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const bulk_ref01_ent = client.Bulk();
        let bulk_ref01_data = setup.data.new.bulk['bulk_ref01'];
        bulk_ref01_data = (await bulk_ref01_ent.create(bulk_ref01_data)).data();
        (0, node_assert_1.default)(null != bulk_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bulk/BulkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bulk01', 'bulk02', 'bulk03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_BULK_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_BULK_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_BULK_ENTID'];
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
//# sourceMappingURL=BulkEntity.test.js.map