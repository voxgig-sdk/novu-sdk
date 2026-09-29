

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


describe('TopicSubscriberDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.TopicSubscriberDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'topic_subscriber_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"sh":"Unique identifier for the environment","t":"`$STRING`","key$":"environmentId","index$":0},"externalSubscriberId":{"a":true,"h":"External Subscriber Id","n":"externalSubscriberId","r":true,"sh":"External identifier for the subscriber","t":"`$STRING`","key$":"externalSubscriberId","index$":1},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"sh":"Unique identifier for the organization","t":"`$STRING`","key$":"organizationId","index$":2},"subscriberId":{"a":true,"h":"Subscriber Id","n":"subscriberId","r":true,"sh":"Unique identifier for the subscriber","t":"`$STRING`","key$":"subscriberId","index$":3},"topicId":{"a":true,"h":"Topic Id","n":"topicId","r":true,"sh":"Unique identifier for the topic","t":"`$STRING`","key$":"topicId","index$":4},"topicKey":{"a":true,"h":"Topic Key","n":"topicKey","r":true,"sh":"Key associated with the topic","t":"`$STRING`","key$":"topicKey","index$":5}},"name":"topic_subscriber_dto","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/topics/{topicKey}/subscribers/{externalSubscriberId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"external_subscriber_id","or":"externalSubscriberId","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"topic_id","or":"topicKey","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/topics/{topicKey}/subscribers/{externalSubscriberId}","q":{"exist":["external_subscriber_id","idempotency_key","topic_id"]},"r":{"param":{"externalSubscriberId":"external_subscriber_id","topicKey":"topic_id"}},"s":[{"lit":"v1"},{"lit":"topics"},{"var":"topic_id"},{"lit":"subscribers"},{"var":"external_subscriber_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.topic","$.main.kit.entity.subscriber"]]},"key$":"topic_subscriber_dto","name__orig":"topic_subscriber_dto","Name":"TopicSubscriberDto","name_":"topic_subscriber_dto","name-":"topic-subscriber-dto","NAME":"TOPIC_SUBSCRIBER_DTO","index$":48}, {"active":true,"entity":"topic_subscriber_dto","key$":"BasicTopicSubscriberDtoFlow","kind":"basic","name":"BasicTopicSubscriberDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"topic_subscriber_dto_ref01","srcdatavar":"topic_subscriber_dto_ref01_data","suffix":"_dt0"},"m":{"id":"topic_subscriber_dto01","topic_id":"topic01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-topic_subscriber_dto_ref01"}}],"index$":0}]}, 'TopicSubscriberDto', {"GET /v1/topics/{topicKey}/subscribers/{externalSubscriberId}":{"protocol":"http","parameters":[{"name":"externalSubscriberId","required":true,"in":"path","description":"The external subscriber id","schema":{"type":"string"},"index$":0},{"name":"topicKey","required":true,"in":"path","description":"The topic key","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let topic_subscriber_dto_ref01_data = Object.values(setup.data.existing.topic_subscriber_dto)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const topic_subscriber_dto_ref01_ent = client.TopicSubscriberDto()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/topic_subscriber_dto/TopicSubscriberDtoTestData.json')

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
    ['topic_subscriber_dto01','topic_subscriber_dto02','topic_subscriber_dto03','topic01','topic02','topic03','subscriber01','subscriber02','subscriber03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_TOPIC_SUBSCRIBER_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_TOPIC_SUBSCRIBER_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_TOPIC_SUBSCRIBER_DTO_ENTID']
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
  
