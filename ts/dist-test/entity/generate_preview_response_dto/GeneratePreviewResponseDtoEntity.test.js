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
(0, node_test_1.describe)('GeneratePreviewResponseDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOVU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NovuSDK.test();
        const ent = testsdk.GeneratePreviewResponseDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOVU_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generate_preview_response_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "controlValues": { "a": true, "h": "Control Values", "n": "controlValues", "r": false, "sh": "Optional control values", "t": "`$OBJECT`", "key$": "controlValues", "index$": 0 }, "previewPayload": { "a": true, "h": "Preview Payload", "n": "previewPayload", "r": false, "sh": "Optional payload for preview generation", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "previewPayload", "index$": 1 } }, "name": "generate_preview_response_dto", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/workflows/{workflowId}/step/{stepId}/preview", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "step_id", "or": "step_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workflow_id", "or": "workflow_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v2/workflows/{workflowId}/step/{stepId}/preview", "q": { "exist": ["idempotency_key", "step_id", "workflow_id"] }, "r": { "param": { "stepId": "step_id", "workflowId": "workflow_id" } }, "s": [{ "lit": "v2" }, { "lit": "workflows" }, { "var": "workflow_id" }, { "lit": "step" }, { "var": "step_id" }, { "lit": "preview" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.workflow", "$.main.kit.entity.step"]] }, "key$": "generate_preview_response_dto", "name__orig": "generate_preview_response_dto", "Name": "GeneratePreviewResponseDto", "name_": "generate_preview_response_dto", "name-": "generate-preview-response-dto", "NAME": "GENERATE_PREVIEW_RESPONSE_DTO", "index$": 22 }, { "active": true, "entity": "generate_preview_response_dto", "key$": "BasicGeneratePreviewResponseDtoFlow", "kind": "basic", "name": "BasicGeneratePreviewResponseDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generate_preview_response_dto_ref01" }, "m": { "step_id": "step01", "workflow_id": "workflow01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'GeneratePreviewResponseDto', { "POST /v2/workflows/{workflowId}/step/{stepId}/preview": { "protocol": "http", "requestBody": { "required": true, "description": "Preview generation details", "content": { "application/json": { "schema": { "type": "object", "properties": { "controlValues": { "type": "object", "description": "Optional control values", "additionalProperties": true, "key$": "controlValues" }, "previewPayload": { "description": "Optional payload for preview generation", "allOf": [{ "type": "object", "properties": { "subscriber": {}, "actor": {}, "payload": {}, "steps": {}, "context": {}, "env": {} }, "x-ref": "#/components/schemas/PreviewPayloadDto" }], "key$": "previewPayload" } }, "x-ref": "#/components/schemas/GeneratePreviewRequestDto", "index$": 1 } } } }, "parameters": [{ "name": "workflowId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "stepId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }, { "name": "idempotency-key", "in": "header", "description": "A header for idempotency purposes", "required": false, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const generate_preview_response_dto_ref01_ent = client.GeneratePreviewResponseDto();
        let generate_preview_response_dto_ref01_data = setup.data.new.generate_preview_response_dto['generate_preview_response_dto_ref01'];
        generate_preview_response_dto_ref01_data['step_id'] = setup.idmap['step01'];
        generate_preview_response_dto_ref01_data['workflow_id'] = setup.idmap['workflow01'];
        generate_preview_response_dto_ref01_data = (await generate_preview_response_dto_ref01_ent.create(generate_preview_response_dto_ref01_data)).data();
        (0, node_assert_1.default)(null != generate_preview_response_dto_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generate_preview_response_dto/GeneratePreviewResponseDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NovuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generate_preview_response_dto01', 'generate_preview_response_dto02', 'generate_preview_response_dto03', 'workflow01', 'workflow02', 'workflow03', 'step01', 'step02', 'step03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOVU_TEST_GENERATE_PREVIEW_RESPONSE_DTO_ENTID': idmap,
        'NOVU_TEST_LIVE': 'FALSE',
        'NOVU_TEST_EXPLAIN': 'FALSE',
        'NOVU_APIKEY': '',
    });
    idmap = env['NOVU_TEST_GENERATE_PREVIEW_RESPONSE_DTO_ENTID'];
    const live = 'TRUE' === env.NOVU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOVU_TEST_GENERATE_PREVIEW_RESPONSE_DTO_ENTID'];
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
//# sourceMappingURL=GeneratePreviewResponseDtoEntity.test.js.map