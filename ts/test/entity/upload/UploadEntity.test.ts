

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


describe('UploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Upload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"List of error messages for failed uploads","t":"`$ARRAY`","key$":"errors","index$":0},"failedUploads":{"a":true,"h":"Failed Uploads","n":"failedUploads","r":true,"sh":"Number of files that failed to upload","t":"`$NUMBER`","key$":"failedUploads","index$":1},"successfulUploads":{"a":true,"h":"Successful Uploads","n":"successfulUploads","r":true,"sh":"Number of files successfully uploaded","t":"`$NUMBER`","key$":"successfulUploads","index$":2},"totalFiles":{"a":true,"h":"Total Files","n":"totalFiles","r":true,"sh":"Total number of files processed","t":"`$NUMBER`","key$":"totalFiles","index$":3}},"name":"upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/translations/upload","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/translations/upload","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"translations"},{"lit":"upload"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"upload","name__orig":"upload","Name":"Upload","name_":"upload","name-":"upload","NAME":"UPLOAD","index$":54}, {"active":true,"entity":"upload","key$":"BasicUploadFlow","kind":"basic","name":"BasicUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"upload_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Upload', {"POST /v2/translations/upload":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"resourceId":{"type":"string","description":"The resource ID to associate localizations with. Accepts identifier or slug format","example":"welcome-email"},"resourceType":{"type":"string","enum":["workflow","layout"],"description":"The resource type to associate localizations with"},"files":{"type":"array","items":{"type":"string","format":"binary"},"description":"One or more JSON translation files. Filenames must match locale format (e.g., en_US.json, fr_FR.json). Field name can be \"files\" or \"files[]\"."}},"required":["resourceId","resourceType","files"]}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const upload_ref01_ent = client.Upload()
    let upload_ref01_data = setup.data.new.upload['upload_ref01']

    upload_ref01_data = (await upload_ref01_ent.create(upload_ref01_data)).data()
    assert(null != upload_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upload/UploadTestData.json')

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
    ['upload01','upload02','upload03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_UPLOAD_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_UPLOAD_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_UPLOAD_ENTID']
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
  
