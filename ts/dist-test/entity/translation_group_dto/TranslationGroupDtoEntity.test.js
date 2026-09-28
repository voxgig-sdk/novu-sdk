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
(0, node_test_1.describe)('TranslationGroupDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.TranslationGroupDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'translation_group_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "Creation timestamp", "t": "`$STRING`", "key$": "createdAt", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "locales": { "a": true, "h": "Locales", "n": "locales", "r": true, "sh": "Array of available locales for this resource", "t": "`$ARRAY`", "key$": "locales", "index$": 2 }, "outdatedLocales": { "a": true, "h": "Outdated Locales", "n": "outdatedLocales", "r": false, "sh": "Locales that are outdated compared to the default locale (only present when there are outdated locales)", "t": "`$ARRAY`", "key$": "outdatedLocales", "index$": 3 }, "resourceId": { "a": true, "h": "Resource Id", "n": "resourceId", "r": true, "sh": "Resource identifier (slugified ID)", "t": "`$STRING`", "key$": "resourceId", "index$": 4 }, "resourceName": { "a": true, "h": "Resource Name", "n": "resourceName", "r": true, "sh": "Resource name (e.g., workflow name)", "t": "`$STRING`", "key$": "resourceName", "index$": 5 }, "resourceType": { "a": true, "h": "Resource Type", "n": "resourceType", "r": true, "sh": "Resource type", "t": "`$STRING`", "key$": "resourceType", "index$": 6 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "updatedAt", "index$": 7 } }, "id": { "field": "id", "from": { "resource_id": "resourceId", "resource_type": "resourceType" }, "name": "id", "parts": ["resource_type", "resource_id"], "sep": "/" }, "name": "translation_group_dto", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/translations/group/{resourceType}/{resourceId}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "welcome-email", "k": "param", "n": "resource_id", "or": "resource_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "workflow", "k": "param", "n": "resource_type", "or": "resource_type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/translations/group/{resourceType}/{resourceId}", "q": { "exist": ["idempotency_key", "resource_id", "resource_type"] }, "r": { "param": { "resourceId": "resource_id", "resourceType": "resource_type" } }, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "lit": "group" }, { "var": "resource_type" }, { "var": "resource_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "translation_group_dto", "name__orig": "translation_group_dto", "Name": "TranslationGroupDto", "name_": "translation_group_dto", "name-": "translation-group-dto", "NAME": "TRANSLATION_GROUP_DTO", "index$": 58 }, { "active": true, "entity": "translation_group_dto", "key$": "BasicTranslationGroupDtoFlow", "kind": "basic", "name": "BasicTranslationGroupDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "translation_group_dto_ref01", "srcdatavar": "translation_group_dto_ref01_data", "suffix": "_dt0" }, "m": { "id": "translation_group_dto01", "resource_type": "resource_type01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-translation_group_dto_ref01" } }], "index$": 0 }] }, 'TranslationGroupDto', { "GET /v2/translations/group/{resourceType}/{resourceId}": { "protocol": "http", "parameters": [{ "name": "resourceType", "required": true, "in": "path", "description": "Resource type", "example": "workflow", "schema": { "enum": ["workflow", "layout"], "type": "string" }, "index$": 0 }, { "name": "resourceId", "required": true, "in": "path", "description": "Resource ID", "example": "welcome-email", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let translation_group_dto_ref01_data = Object.values(setup.data.existing.translation_group_dto)[0];
        // LOAD
        const translation_group_dto_ref01_ent = client.TranslationGroupDto();
        const translation_group_dto_ref01_match_dt0 = {};
        translation_group_dto_ref01_match_dt0.id = translation_group_dto_ref01_data.id;
        const translation_group_dto_ref01_data_dt0 = (await translation_group_dto_ref01_ent.load(translation_group_dto_ref01_match_dt0)).data();
        (0, node_assert_1.default)(translation_group_dto_ref01_data_dt0.id === translation_group_dto_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/translation_group_dto/TranslationGroupDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['translation_group_dto01', 'translation_group_dto02', 'translation_group_dto03', 'resource_type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID'];
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
//# sourceMappingURL=TranslationGroupDtoEntity.test.js.map