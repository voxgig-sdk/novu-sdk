

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


describe('ListTopicsResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ListTopicsResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_topics_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":false,"sh":"The date the topic was created","t":"`$STRING`","key$":"createdAt","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Additional custom data associated with the topic","t":"`$OBJECT`","key$":"data","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The identifier of the topic","t":"`$STRING`","key$":"id","index$":2},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The unique key of the topic","t":"`$STRING`","key$":"key","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the topic","t":"`$STRING`","key$":"name","index$":4},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":false,"sh":"The date the topic was last updated","t":"`$STRING`","key$":"updatedAt","index$":5}},"id":{"field":"id","name":"id"},"name":"list_topics_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/topics","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"include_cursor","or":"include_cursor","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"key","or":"key","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v2/topics","q":{"exist":["after","before","idempotency_key","include_cursor","key","limit","name","order_by","order_direction"]},"r":{},"s":[{"lit":"v2"},{"lit":"topics"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_topics_response_dto","name__orig":"list_topics_response_dto","Name":"ListTopicsResponseDto","name_":"list_topics_response_dto","name-":"list-topics-response-dto","NAME":"LIST_TOPICS_RESPONSE_DTO","index$":39}, {"active":true,"entity":"list_topics_response_dto","key$":"BasicListTopicsResponseDtoFlow","kind":"basic","name":"BasicListTopicsResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_topics_response_dto_ref01"}}],"index$":0}]}, 'ListTopicsResponseDto', {"GET /v2/topics":{"protocol":"http","parameters":[{"name":"after","required":false,"in":"query","description":"Cursor for pagination indicating the starting point after which to fetch results.","schema":{"type":"string"},"index$":0},{"name":"before","required":false,"in":"query","description":"Cursor for pagination indicating the ending point before which to fetch results.","schema":{"type":"string"},"index$":1},{"name":"limit","required":false,"in":"query","description":"Limit the number of items to return (max 100)","example":10,"schema":{"maximum":100,"type":"number"},"index$":2},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":3},{"name":"orderBy","required":false,"in":"query","description":"Field to order by","schema":{"type":"string"},"index$":4},{"name":"includeCursor","required":false,"in":"query","description":"Include cursor item in response","schema":{"type":"boolean"},"index$":5},{"name":"key","required":false,"in":"query","description":"Key of the topic to filter results.","schema":{"type":"string"},"index$":6},{"name":"name","required":false,"in":"query","description":"Name of the topic to filter results.","schema":{"type":"string"},"index$":7},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_topics_response_dto_ref01_data = Object.values(setup.data.existing.list_topics_response_dto)[0] as any

    // LIST
    const list_topics_response_dto_ref01_ent = client.ListTopicsResponseDto()
    const list_topics_response_dto_ref01_match: any = {}

    const list_topics_response_dto_ref01_list = (await list_topics_response_dto_ref01_ent.list(list_topics_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_topics_response_dto/ListTopicsResponseDtoTestData.json')

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
    ['list_topics_response_dto01','list_topics_response_dto02','list_topics_response_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LIST_TOPICS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LIST_TOPICS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LIST_TOPICS_RESPONSE_DTO_ENTID']
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
  
