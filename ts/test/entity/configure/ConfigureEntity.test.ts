

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


describe('ConfigureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Configure()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'configure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"botUsername":{"a":true,"h":"Bot Username","n":"botUsername","r":true,"sh":"Resolved bot username from getMe","t":"`$STRING`","key$":"botUsername","index$":0},"configuredAt":{"a":true,"h":"Configured At","n":"configuredAt","r":true,"sh":"ISO-8601 timestamp the webhook was configured at","t":"`$STRING`","key$":"configuredAt","index$":1},"webhookUrl":{"a":true,"h":"Webhook Url","n":"webhookUrl","r":true,"sh":"URL Novu registered with Telegram for incoming updates","t":"`$STRING`","key$":"webhookUrl","index$":2}},"name":"configure","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/integrations/{integrationIdentifier}/webhook/configure","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"integration_id","or":"integrationIdentifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/integrations/{integrationIdentifier}/webhook/configure","q":{"exist":["idempotency_key","integration_id"]},"r":{"param":{"integrationIdentifier":"integration_id"}},"s":[{"lit":"v1"},{"lit":"integrations"},{"var":"integration_id"},{"lit":"webhook"},{"lit":"configure"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.integration"]]},"key$":"configure","name__orig":"configure","Name":"Configure","name_":"configure","name-":"configure","NAME":"CONFIGURE","index$":7}, {"active":true,"entity":"configure","key$":"BasicConfigureFlow","kind":"basic","name":"BasicConfigureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"configure_ref01"},"m":{"integration_id":"integration01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Configure', {"POST /v1/integrations/{integrationIdentifier}/webhook/configure":{"protocol":"http","parameters":[{"name":"integrationIdentifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const configure_ref01_ent = client.Configure()
    let configure_ref01_data = setup.data.new.configure['configure_ref01']
    configure_ref01_data['integration_id'] = setup.idmap['integration01']

    configure_ref01_data = (await configure_ref01_ent.create(configure_ref01_data)).data()
    assert(null != configure_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/configure/ConfigureTestData.json')

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
    ['configure01','configure02','configure03','integration01','integration02','integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_CONFIGURE_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_CONFIGURE_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_CONFIGURE_ENTID']
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
  
