

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


describe('UnseenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Unseen()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'unseen.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":true,"t":"`$NUMBER`","key$":"count","index$":0}},"name":"unseen","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/subscribers/{subscriberId}/notifications/unseen","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":false,"k":"query","n":"seen","or":"seen","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/v1/subscribers/{subscriberId}/notifications/unseen","q":{"exist":["idempotency_key","limit","seen","subscriber_id"]},"r":{"param":{"subscriberId":"subscriber_id"}},"s":[{"lit":"v1"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"lit":"unseen"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.subscriber"]]},"key$":"unseen","name__orig":"unseen","Name":"Unseen","name_":"unseen","name-":"unseen","NAME":"UNSEEN","index$":61}, {"active":true,"entity":"unseen","key$":"BasicUnseenFlow","kind":"basic","name":"BasicUnseenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"unseen_ref01","srcdatavar":"unseen_ref01_data","suffix":"_dt0"},"m":{"id":"unseen01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-unseen_ref01"}}],"index$":0}]}, 'Unseen', {"GET /v1/subscribers/{subscriberId}/notifications/unseen":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"seen","required":false,"in":"query","description":"Indicates whether to count seen notifications.","schema":{"default":false,"type":"boolean"},"index$":1},{"name":"limit","required":false,"in":"query","description":"The maximum number of notifications to return.","schema":{"default":100,"type":"number"},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unseen_ref01_data = Object.values(setup.data.existing.unseen)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const unseen_ref01_ent = client.Unseen()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/unseen/UnseenTestData.json')

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
    ['unseen01','unseen02','unseen03','subscriber01','subscriber02','subscriber03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_UNSEEN_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_UNSEEN_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_UNSEEN_ENTID']
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
  
