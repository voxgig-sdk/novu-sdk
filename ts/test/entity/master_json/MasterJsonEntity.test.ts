

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


describe('MasterJsonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.MasterJson()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'master_json.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"layouts":{"a":true,"h":"Layouts","n":"layouts","r":true,"sh":"All translations for given locale organized by layout identifier","t":"`$OBJECT`","key$":"layouts","index$":0},"workflows":{"a":true,"h":"Workflows","n":"workflows","r":true,"sh":"All translations for given locale organized by workflow identifier","t":"`$OBJECT`","key$":"workflows","index$":1}},"name":"master_json","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/translations/master-json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en_US","k":"query","n":"locale","or":"locale","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/translations/master-json","q":{"exist":["idempotency_key","locale"]},"r":{},"s":[{"lit":"v2"},{"lit":"translations"},{"lit":"master-json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"master_json","name__orig":"master_json","Name":"MasterJson","name_":"master_json","name-":"master-json","NAME":"MASTER_JSON","index$":40}, {"active":true,"entity":"master_json","key$":"BasicMasterJsonFlow","kind":"basic","name":"BasicMasterJsonFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"master_json_ref01","srcdatavar":"master_json_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-master_json_ref01"}}],"index$":0}]}, 'MasterJson', {"GET /v2/translations/master-json":{"protocol":"http","parameters":[{"name":"locale","required":false,"in":"query","description":"Locale to export. If not provided, exports organization default locale","example":"en_US","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let master_json_ref01_data = Object.values(setup.data.existing.master_json)[0] as any

    // LOAD
    const master_json_ref01_ent = client.MasterJson()
    const master_json_ref01_match_dt0: any = {}
    const master_json_ref01_data_dt0 = (await master_json_ref01_ent.load(master_json_ref01_match_dt0)).data()
    assert(null != master_json_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/master_json/MasterJsonTestData.json')

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
    ['master_json01','master_json02','master_json03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_MASTER_JSON_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_MASTER_JSON_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_MASTER_JSON_ENTID']
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
  
