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
(0, node_test_1.describe)('ImportMasterJsonResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.ImportMasterJsonResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'import_master_json_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "failed": { "a": true, "h": "Failed", "n": "failed", "r": false, "sh": "List of resource IDs that failed to import", "t": "`$ARRAY`", "key$": "failed", "index$": 0 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": true, "sh": "The locale for which translations are being imported", "t": "`$STRING`", "key$": "locale", "index$": 1 }, "masterJson": { "a": true, "h": "Master Json", "n": "masterJson", "r": true, "sh": "Master JSON object containing all translations organized by workflow identifier", "t": "`$OBJECT`", "key$": "masterJson", "index$": 2 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "sh": "Human-readable message describing the import result", "t": "`$STRING`", "key$": "message", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Overall success status of the import operation", "t": "`$BOOLEAN`", "key$": "success", "index$": 4 }, "successful": { "a": true, "h": "Successful", "n": "successful", "r": false, "sh": "List of resource IDs that were successfully imported", "t": "`$ARRAY`", "key$": "successful", "index$": 5 } }, "name": "import_master_json_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/translations/master-json", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/translations/master-json", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "lit": "master-json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v2/translations/master-json/upload", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency-key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/translations/master-json/upload", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "translations" }, { "lit": "master-json" }, { "lit": "upload" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "import_master_json_response_dto", "name__orig": "import_master_json_response_dto", "Name": "ImportMasterJsonResponseDto", "name_": "import_master_json_response_dto", "name-": "import-master-json-response-dto", "NAME": "IMPORT_MASTER_JSON_RESPONSE_DTO", "index$": 23 }, { "active": true, "entity": "import_master_json_response_dto", "key$": "BasicImportMasterJsonResponseDtoFlow", "kind": "basic", "name": "BasicImportMasterJsonResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "import_master_json_response_dto_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ImportMasterJsonResponseDto', { "POST /v2/translations/master-json": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "locale": { "type": "string", "description": "The locale for which translations are being imported", "example": "en_US", "key$": "locale" }, "masterJson": { "type": "object", "description": "Master JSON object containing all translations organized by workflow identifier", "example": { "workflows": { "welcome-email": { "welcome.title": "Welcome to our platform", "welcome.message": "Hello there!" }, "password-reset": { "reset.title": "Reset your password", "reset.message": "Click the link to reset" } } }, "additionalProperties": true, "key$": "masterJson" } }, "required": ["locale", "masterJson"], "x-ref": "#/components/schemas/ImportMasterJsonRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] }, "POST /v2/translations/master-json/upload": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "file": { "type": "string", "format": "binary", "description": "Master JSON file with locale as filename (e.g., en_US.json)" } }, "required": ["file"] } } } }, "parameters": [{ "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const import_master_json_response_dto_ref01_ent = client.ImportMasterJsonResponseDto();
        let import_master_json_response_dto_ref01_data = setup.data.new.import_master_json_response_dto['import_master_json_response_dto_ref01'];
        import_master_json_response_dto_ref01_data = (await import_master_json_response_dto_ref01_ent.create(import_master_json_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != import_master_json_response_dto_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/import_master_json_response_dto/ImportMasterJsonResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['import_master_json_response_dto01', 'import_master_json_response_dto02', 'import_master_json_response_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=ImportMasterJsonResponseDtoEntity.test.js.map