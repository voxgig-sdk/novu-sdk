

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NovuSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImportMasterJsonResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ImportMasterJsonResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'import_master_json_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"failed":{"a":true,"h":"Failed","n":"failed","r":false,"sh":"List of resource IDs that failed to import","t":"`$ARRAY`","key$":"failed","index$":0},"locale":{"a":true,"h":"Locale","n":"locale","r":true,"sh":"The locale for which translations are being imported","t":"`$STRING`","key$":"locale","index$":1},"masterJson":{"a":true,"h":"Master Json","n":"masterJson","r":true,"sh":"Master JSON object containing all translations organized by workflow identifier","t":"`$OBJECT`","key$":"masterJson","index$":2},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"Human-readable message describing the import result","t":"`$STRING`","key$":"message","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Overall success status of the import operation","t":"`$BOOLEAN`","key$":"success","index$":4},"successful":{"a":true,"h":"Successful","n":"successful","r":false,"sh":"List of resource IDs that were successfully imported","t":"`$ARRAY`","key$":"successful","index$":5}},"name":"import_master_json_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/translations/master-json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/translations/master-json","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"translations"},{"lit":"master-json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v2/translations/master-json/upload","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/translations/master-json/upload","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"translations"},{"lit":"master-json"},{"lit":"upload"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"import_master_json_response_dto","name__orig":"import_master_json_response_dto","Name":"ImportMasterJsonResponseDto","name_":"import_master_json_response_dto","name-":"import-master-json-response-dto","NAME":"IMPORT_MASTER_JSON_RESPONSE_DTO","index$":23}, {"active":true,"entity":"import_master_json_response_dto","key$":"BasicImportMasterJsonResponseDtoFlow","kind":"basic","name":"BasicImportMasterJsonResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"import_master_json_response_dto_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ImportMasterJsonResponseDto', {"POST /v2/translations/master-json":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"locale":{"type":"string","description":"The locale for which translations are being imported","example":"en_US","key$":"locale"},"masterJson":{"type":"object","description":"Master JSON object containing all translations organized by workflow identifier","example":{"workflows":{"welcome-email":{"welcome.title":"Welcome to our platform","welcome.message":"Hello there!"},"password-reset":{"reset.title":"Reset your password","reset.message":"Click the link to reset"}}},"additionalProperties":true,"key$":"masterJson"}},"required":["locale","masterJson"],"x-ref":"#/components/schemas/ImportMasterJsonRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"POST /v2/translations/master-json/upload":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary","description":"Master JSON file with locale as filename (e.g., en_US.json)"}},"required":["file"]}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const import_master_json_response_dto_ref01_ent = client.ImportMasterJsonResponseDto()
    let import_master_json_response_dto_ref01_data = setup.data.new.import_master_json_response_dto['import_master_json_response_dto_ref01']

    import_master_json_response_dto_ref01_data = (await import_master_json_response_dto_ref01_ent.create(import_master_json_response_dto_ref01_data)).data()
    assert(null != import_master_json_response_dto_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/import_master_json_response_dto/ImportMasterJsonResponseDtoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NovuSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['import_master_json_response_dto01','import_master_json_response_dto02','import_master_json_response_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_IMPORT_MASTER_JSON_RESPONSE_DTO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NovuSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
