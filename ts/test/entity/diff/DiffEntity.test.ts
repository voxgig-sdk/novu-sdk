

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


describe('DiffEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Diff()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'diff.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"resources":{"a":true,"h":"Resources","n":"resources","r":true,"sh":"Diff resources by resource type","t":"`$ARRAY`","key$":"resources","index$":0},"sourceEnvironmentId":{"a":true,"h":"Source Environment Id","n":"sourceEnvironmentId","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Source environment ID","t":"`$STRING`","key$":"sourceEnvironmentId","index$":1},"summary":{"a":true,"h":"Summary","n":"summary","r":true,"sh":"Overall summary","t":"`$ANY`","key$":"summary","index$":2},"targetEnvironmentId":{"a":true,"h":"Target Environment Id","n":"targetEnvironmentId","r":true,"sh":"Target environment ID","t":"`$STRING`","key$":"targetEnvironmentId","index$":3}},"name":"diff","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/environments/{targetEnvironmentId}/diff","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"6615943e7ace93b0540ae377","k":"param","n":"environment_id","or":"targetEnvironmentId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/environments/{targetEnvironmentId}/diff","q":{"exist":["environment_id","idempotency_key"]},"r":{"param":{"targetEnvironmentId":"environment_id"}},"s":[{"lit":"v2"},{"lit":"environments"},{"var":"environment_id"},{"lit":"diff"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.environment"]]},"key$":"diff","name__orig":"diff","Name":"Diff","name_":"diff","name-":"diff","NAME":"DIFF","index$":10}, {"active":true,"entity":"diff","key$":"BasicDiffFlow","kind":"basic","name":"BasicDiffFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"diff_ref01"},"m":{"environment_id":"environment01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Diff', {"POST /v2/environments/{targetEnvironmentId}/diff":{"protocol":"http","requestBody":{"required":true,"description":"Diff request configuration","content":{"application/json":{"schema":{"type":"object","properties":{"sourceEnvironmentId":{"type":"string","description":"Source environment ID to compare from. Defaults to the Development environment if not provided.","example":"507f1f77bcf86cd799439011","key$":"sourceEnvironmentId"}},"x-ref":"#/components/schemas/DiffEnvironmentRequestDto","index$":1}}}},"parameters":[{"name":"targetEnvironmentId","required":true,"in":"path","description":"Target environment ID (MongoDB ObjectId) to compare against","example":"6615943e7ace93b0540ae377","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const diff_ref01_ent = client.Diff()
    let diff_ref01_data = setup.data.new.diff['diff_ref01']
    diff_ref01_data['environment_id'] = setup.idmap['environment01']

    diff_ref01_data = (await diff_ref01_ent.create(diff_ref01_data)).data()
    assert(null != diff_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/diff/DiffTestData.json')

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
    ['diff01','diff02','diff03','environment01','environment02','environment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_DIFF_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_DIFF_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_DIFF_ENTID']
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
  
