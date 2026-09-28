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
(0, node_test_1.describe)('TranslationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.Translation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'translation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "Translation content as JSON object", "t": "`$OBJECT`", "key$": "content", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": true, "sh": "Locale code (e.g., en_US, es_ES)", "t": "`$STRING`", "key$": "locale", "index$": 2 }, "resourceId": { "a": true, "h": "Resource Id", "n": "resourceId", "r": true, "sh": "The resource ID to associate translation with.", "t": "`$STRING`", "key$": "resourceId", "index$": 3 }, "resourceType": { "a": true, "h": "Resource Type", "n": "resourceType", "r": true, "sh": "The resource type to associate translation with", "t": "`$STRING`", "key$": "resourceType", "index$": 4 } }, "id": { "field": "id", "from": { "locale": "locale", "resource_id": "resourceId", "resource_type": "resourceType" }, "name": "id", "parts": ["resource_type", "resource_id", "locale"], "sep": "/" }, "name": "translation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/translations", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/translations", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "translations" }], "t": { "req": "`reqdata`", "res": "`body.content`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/translations/{resourceType}/{resourceId}/{locale}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "en_US", "k": "param", "n": "locale", "or": "locale", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "welcome-email", "k": "param", "n": "resource_id", "or": "resource_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "resource_type", "or": "resource_type", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/translations/{resourceType}/{resourceId}/{locale}", "q": { "exist": ["idempotency_key", "locale", "resource_id", "resource_type"] }, "r": { "param": { "resourceId": "resource_id", "resourceType": "resource_type" } }, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "var": "resource_type" }, { "var": "resource_id" }, { "var": "locale" }], "t": { "req": "`reqdata`", "res": "`body.content`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/translations/{resourceType}/{resourceId}/{locale}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "locale", "or": "locale", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "resource_id", "or": "resource_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "resource_type", "or": "resource_type", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/v2/translations/{resourceType}/{resourceId}/{locale}", "q": { "exist": ["idempotency_key", "locale", "resource_id", "resource_type"] }, "r": { "param": { "resourceId": "resource_id", "resourceType": "resource_type" } }, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "var": "resource_type" }, { "var": "resource_id" }, { "var": "locale" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v2/translations/{resourceType}/{resourceId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "welcome-email", "k": "param", "n": "resource_id", "or": "resource_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "workflow", "k": "param", "n": "resource_type", "or": "resource_type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v2/translations/{resourceType}/{resourceId}", "q": { "exist": ["idempotency_key", "resource_id", "resource_type"] }, "r": { "param": { "resourceId": "resource_id", "resourceType": "resource_type" } }, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "var": "resource_type" }, { "var": "resource_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "translation", "name__orig": "translation", "Name": "Translation", "name_": "translation", "name-": "translation", "NAME": "TRANSLATION", "index$": 57 }, { "active": true, "entity": "translation", "key$": "BasicTranslationFlow", "kind": "basic", "name": "BasicTranslationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "translation_ref01" }, "m": { "resource_id": "resource01", "resource_type": "resource_type01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "translation_ref01", "srcdatavar": "translation_ref01_data", "suffix": "_dt0" }, "m": { "id": "translation01", "resource_id": "resource01", "resource_type": "resource_type01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-translation_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "translation_ref01", "suffix": "_rm0" }, "m": { "id": "translation01", "resource_type": "resource_type01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'Translation', { "POST /v2/translations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "resourceId": { "type": "string", "description": "The resource ID to associate translation with. Accepts identifier or slug format", "example": "welcome-email", "key$": "resourceId" }, "resourceType": { "type": "string", "description": "The resource type to associate translation with", "enum": ["workflow", "layout"], "key$": "resourceType" }, "locale": { "type": "string", "description": "Locale code (e.g., en_US, es_ES)", "example": "en_US", "key$": "locale" }, "content": { "type": "object", "description": "Translation content as JSON object", "example": { "welcome.title": "Welcome", "welcome.message": "Hello there!" }, "additionalProperties": true, "key$": "content" } }, "required": ["resourceId", "resourceType", "locale", "content"], "x-ref": "#/components/schemas/CreateTranslationRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "GET /v2/translations/{resourceType}/{resourceId}/{locale}": { "protocol": "http", "parameters": [{ "name": "resourceType", "required": true, "in": "path", "description": "Resource type", "schema": { "enum": ["workflow", "layout"], "type": "string" }, "index$": 0 }, { "name": "resourceId", "required": true, "in": "path", "description": "Resource ID", "example": "welcome-email", "schema": { "type": "string" }, "index$": 1 }, { "name": "locale", "required": true, "in": "path", "description": "Locale code", "example": "en_US", "schema": { "type": "string" }, "index$": 2 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 3 }] }, "DELETE /v2/translations/{resourceType}/{resourceId}/{locale}": { "protocol": "http", "parameters": [{ "name": "resourceType", "required": true, "in": "path", "description": "Resource type", "schema": { "enum": ["workflow", "layout"], "type": "string" }, "index$": 0 }, { "name": "resourceId", "required": true, "in": "path", "description": "Resource ID", "schema": { "type": "string" }, "index$": 1 }, { "name": "locale", "required": true, "in": "path", "description": "Locale code", "schema": { "type": "string" }, "index$": 2 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 3 }] }, "DELETE /v2/translations/{resourceType}/{resourceId}": { "protocol": "http", "parameters": [{ "name": "resourceType", "required": true, "in": "path", "description": "Resource type", "example": "workflow", "schema": { "enum": ["workflow", "layout"], "type": "string" }, "index$": 0 }, { "name": "resourceId", "required": true, "in": "path", "description": "Resource ID", "example": "welcome-email", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const translation_ref01_ent = client.Translation();
        let translation_ref01_data = setup.data.new.translation['translation_ref01'];
        translation_ref01_data['resource_id'] = setup.idmap['resource01'];
        translation_ref01_data['resource_type'] = setup.idmap['resource_type01'];
        translation_ref01_data = (await translation_ref01_ent.create(translation_ref01_data)).data();
        (0, node_assert_1.default)(null != translation_ref01_data.id);
        // LOAD
        const translation_ref01_match_dt0 = {};
        translation_ref01_match_dt0.id = translation_ref01_data.id;
        const translation_ref01_data_dt0 = (await translation_ref01_ent.load(translation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(translation_ref01_data_dt0.id === translation_ref01_data.id);
        // REMOVE
        const translation_ref01_match_rm0 = { id: translation_ref01_data.id };
        await translation_ref01_ent.remove(translation_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/translation/TranslationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['translation01', 'translation02', 'translation03', 'resource01', 'resource_type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_TRANSLATION_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_TRANSLATION_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_TRANSLATION_ENTID'];
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
//# sourceMappingURL=TranslationEntity.test.js.map