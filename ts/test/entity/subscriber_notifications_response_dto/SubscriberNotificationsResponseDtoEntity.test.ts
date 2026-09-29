

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


describe('SubscriberNotificationsResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.SubscriberNotificationsResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscriber_notifications_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"subscriber_notifications_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/subscribers/{subscriberId}/notifications","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"subscriberId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"context_key","or":"contextKeys","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":1704067200000,"k":"query","n":"created_gte","or":"createdGte","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":1735689599999,"k":"query","n":"created_lte","or":"createdLte","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"read","or":"read","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"k":"query","n":"seen","or":"seen","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"k":"query","n":"severity","or":"severity","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"k":"query","n":"snoozed","or":"snoozed","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/v2/subscribers/{subscriberId}/notifications","q":{"$action":"notifications","exist":["after","archived","context_key","created_gte","created_lte","data","id","idempotency_key","limit","offset","read","seen","severity","snoozed"]},"r":{"param":{"subscriberId":"id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"id"},{"lit":"notifications"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"subscriber_notifications_response_dto","name__orig":"subscriber_notifications_response_dto","Name":"SubscriberNotificationsResponseDto","name_":"subscriber_notifications_response_dto","name-":"subscriber-notifications-response-dto","NAME":"SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO","index$":43}, {"active":true,"entity":"subscriber_notifications_response_dto","key$":"BasicSubscriberNotificationsResponseDtoFlow","kind":"basic","name":"BasicSubscriberNotificationsResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"subscriber_id":"subscriber01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subscriber_notifications_response_dto_ref01"}}],"index$":0}]}, 'SubscriberNotificationsResponseDto', {"GET /v2/subscribers/{subscriberId}/notifications":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"limit","required":false,"in":"query","example":10,"schema":{"maximum":100,"default":10,"type":"number"},"index$":1},{"name":"after","required":false,"in":"query","schema":{"type":"string"},"index$":2},{"name":"offset","required":false,"in":"query","example":0,"schema":{"type":"number"},"index$":3},{"name":"read","required":false,"in":"query","description":"Filter by read/unread state","schema":{"type":"boolean"},"index$":4},{"name":"archived","required":false,"in":"query","description":"Filter by archived state","schema":{"type":"boolean"},"index$":5},{"name":"snoozed","required":false,"in":"query","description":"Filter by snoozed state","schema":{"type":"boolean"},"index$":6},{"name":"seen","required":false,"in":"query","description":"Filter by seen state","schema":{"type":"boolean"},"index$":7},{"name":"data","required":false,"in":"query","description":"Filter by data attributes (JSON string)","schema":{"type":"string"},"index$":8},{"name":"severity","required":false,"in":"query","description":"Filter by severity levels","schema":{"type":"array","items":{"type":"string","enum":["high","medium","low","none"]}},"index$":9},{"name":"createdGte","required":false,"in":"query","description":"Filter notifications created on or after this timestamp (Unix timestamp in milliseconds)","example":1704067200000,"schema":{"type":"number"},"index$":10},{"name":"createdLte","required":false,"in":"query","description":"Filter notifications created on or before this timestamp (Unix timestamp in milliseconds)","example":1735689599999,"schema":{"type":"number"},"index$":11},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering notifications in multi-context scenarios","schema":{"type":"array","items":{"type":"string"}},"index$":12},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":13}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscriber_notifications_response_dto_ref01_data = Object.values(setup.data.existing.subscriber_notifications_response_dto)[0] as any

    // LIST
    const subscriber_notifications_response_dto_ref01_ent = client.SubscriberNotificationsResponseDto()
    const subscriber_notifications_response_dto_ref01_match: any = {}
    subscriber_notifications_response_dto_ref01_match['subscriber_id'] = setup.idmap['subscriber01']

    const subscriber_notifications_response_dto_ref01_list = (await subscriber_notifications_response_dto_ref01_ent.list(subscriber_notifications_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscriber_notifications_response_dto/SubscriberNotificationsResponseDtoTestData.json')

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
    ['subscriber_notifications_response_dto01','subscriber_notifications_response_dto02','subscriber_notifications_response_dto03','subscriber01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_SUBSCRIBER_NOTIFICATIONS_RESPONSE_DTO_ENTID']
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
  
