

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


describe('TopicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Topic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'topic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Additional custom data associated with the topic.","t":"`$OBJECT`","key$":"data","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The unique key identifier for the topic.","t":"`$STRING`","key$":"key","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The display name for the topic","t":"`$STRING`","key$":"name","index$":3}},"id":{"field":"id","name":"id"},"name":"topic","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/topics","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"fail_if_exist","or":"fail_if_exist","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"POST","o":"/v2/topics","q":{"exist":["fail_if_exist","idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"topics"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/topics/{topicKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"topic_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/topics/{topicKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"topicKey":"id"}},"s":[{"lit":"v2"},{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/topics/{topicKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"topic_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/topics/{topicKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"topicKey":"id"}},"s":[{"lit":"v2"},{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v2/topics/{topicKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"topic_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/topics/{topicKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"topicKey":"id"}},"s":[{"lit":"v2"},{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"topic","name__orig":"topic","Name":"Topic","name_":"topic","name-":"topic","NAME":"TOPIC","index$":54}, {"active":true,"entity":"topic","key$":"BasicTopicFlow","kind":"basic","name":"BasicTopicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"topic_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"topic_ref01","srcdatavar":"topic_ref01_data","suffix":"_up0","textfield":"key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-topic_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"topic_ref01","srcdatavar":"topic_ref01_data","suffix":"_dt0"},"m":{"id":"topic01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-topic_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"topic_ref01","suffix":"_rm0"},"m":{"id":"topic01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Topic', {"POST /v2/topics":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":100,"description":"The unique key identifier for the topic. The key must contain only alphanumeric characters (a-z, A-Z, 0-9), hyphens (-), underscores (_), colons (:), or be a valid email address.","example":"task:12345","key$":"key"},"name":{"type":"string","minLength":0,"maxLength":100,"description":"The display name for the topic","example":"Task Title","key$":"name"},"data":{"type":"object","nullable":true,"description":"Additional custom data associated with the topic. Flat key-value pairs of scalars (string, number, boolean, string[]). Maximum size: 64KB.","additionalProperties":true,"example":{"category":"product","priority":1},"key$":"data"}},"required":["key"],"x-ref":"#/components/schemas/CreateUpdateTopicRequestDto","index$":1}}}},"parameters":[{"name":"failIfExists","required":false,"in":"query","description":"If true, the request will fail if a topic with the same key already exists","schema":{"type":"boolean"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"GET /v2/topics/{topicKey}":{"protocol":"http","parameters":[{"name":"topicKey","required":true,"in":"path","description":"The key identifier of the topic","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v2/topics/{topicKey}":{"protocol":"http","parameters":[{"name":"topicKey","required":true,"in":"path","description":"The key identifier of the topic","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PATCH /v2/topics/{topicKey}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":0,"maxLength":100,"description":"The display name for the topic","example":"Updated Topic Name","key$":"name"},"data":{"type":"object","nullable":true,"description":"Additional custom data associated with the topic. Flat key-value pairs of scalars (string, number, boolean, string[]). Maximum size: 64KB. Pass null to clear.","additionalProperties":true,"example":{"category":"product","priority":1},"key$":"data"}},"x-ref":"#/components/schemas/UpdateTopicRequestDto","index$":1}}}},"parameters":[{"name":"topicKey","required":true,"in":"path","description":"The key identifier of the topic","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const topic_ref01_ent = client.Topic()
    let topic_ref01_data = setup.data.new.topic['topic_ref01']

    topic_ref01_data = (await topic_ref01_ent.create(topic_ref01_data)).data()
    assert(null != topic_ref01_data.id)


    // UPDATE
    const topic_ref01_data_up0: any = {}
    topic_ref01_data_up0.id = topic_ref01_data.id

    const topic_ref01_markdef_up0 = { name: 'key', value: 'Mark01-topic_ref01_' + setup.now }
    ;(topic_ref01_data_up0 as any)[topic_ref01_markdef_up0.name] = topic_ref01_markdef_up0.value

    const topic_ref01_resdata_up0 = (await topic_ref01_ent.update(topic_ref01_data_up0)).data()
    assert(topic_ref01_resdata_up0.id === topic_ref01_data_up0.id)

    assert((topic_ref01_resdata_up0 as any)[topic_ref01_markdef_up0.name] === topic_ref01_markdef_up0.value)


    // LOAD
    const topic_ref01_match_dt0: any = {}
    topic_ref01_match_dt0.id = topic_ref01_data.id
    const topic_ref01_data_dt0 = (await topic_ref01_ent.load(topic_ref01_match_dt0)).data()
    assert(topic_ref01_data_dt0.id === topic_ref01_data.id)


    // REMOVE
    const topic_ref01_match_rm0: any = { id: topic_ref01_data.id }
    await topic_ref01_ent.remove(topic_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/topic/TopicTestData.json')

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
    ['topic01','topic02','topic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_TOPIC_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_TOPIC_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_TOPIC_ENTID']
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
  
