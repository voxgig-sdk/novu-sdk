

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


describe('CreateSubscriptionsResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.CreateSubscriptionsResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_subscriptions_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":1},"key$":"context","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the topic","t":"`$STRING`","key$":"name","index$":1},"preferences":{"a":true,"h":"Preferences","n":"preferences","r":false,"sh":"The preferences of the topic.","t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":1},"key$":"preferences","index$":2},"subscriberIds":{"a":true,"de":true,"h":"Subscriber Ids","n":"subscriberIds","r":false,"sh":"List of subscriber IDs to subscribe to the topic (max: 100).","t":"`$ARRAY`","key$":"subscriberIds","index$":3},"subscriptions":{"a":true,"h":"Subscriptions","n":"subscriptions","r":false,"sh":"List of subscriptions to subscribe to the topic (max: 100).","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"subscriptions","index$":4}},"name":"create_subscriptions_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/topics/{topicKey}/subscriptions","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"topic_key","or":"topicKey","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/topics/{topicKey}/subscriptions","q":{"exist":["idempotency_key","topic_key"]},"r":{"param":{"topicKey":"topic_key"}},"s":[{"lit":"v2"},{"lit":"topics"},{"var":"topic_key"},{"lit":"subscriptions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.topic"]]},"key$":"create_subscriptions_response_dto","name__orig":"create_subscriptions_response_dto","Name":"CreateSubscriptionsResponseDto","name_":"create_subscriptions_response_dto","name-":"create-subscriptions-response-dto","NAME":"CREATE_SUBSCRIPTIONS_RESPONSE_DTO","index$":9}, {"active":true,"entity":"create_subscriptions_response_dto","key$":"BasicCreateSubscriptionsResponseDtoFlow","kind":"basic","name":"BasicCreateSubscriptionsResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_subscriptions_response_dto_ref01"},"m":{"topic_key":"topic_key01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateSubscriptionsResponseDto', {"POST /v2/topics/{topicKey}/subscriptions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"subscriberIds":{"description":"List of subscriber IDs to subscribe to the topic (max: 100). @deprecated Use the \"subscriptions\" property instead.","example":["subscriberId1","subscriberId2"],"deprecated":true,"type":"array","items":{"type":"string"},"key$":"subscriberIds"},"subscriptions":{"type":"array","description":"List of subscriptions to subscribe to the topic (max: 100). Can be either a string array of subscriber IDs or an array of objects with identifier and subscriberId","items":{"oneOf":[{"type":"string"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/TopicSubscriberIdentifierDto"}]},"example":[{"identifier":"subscriber-123-subscription-a","subscriberId":"subscriber-123"},{"identifier":"subscriber-456-subscription-b","subscriberId":"subscriber-456"}],"key$":"subscriptions"},"name":{"type":"string","description":"The name of the topic","example":"My Topic","key$":"name"},"context":{"type":"object","additionalProperties":{"oneOf":[{"type":"string","description":"Simple context id","example":"org-acme"},{"type":"object","description":"Rich context object with id and optional data","properties":{},"required":[]}]},"key$":"context"},"preferences":{"type":"array","description":"The preferences of the topic. Can be a simple workflow ID string, workflow preference object, or group filter object","items":{"oneOf":[{"type":"string"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/WorkflowPreferenceRequestDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/GroupPreferenceFilterDto"}]},"example":[{"workflowId":"workflow-123","condition":{"===":[]}}],"key$":"preferences"}},"x-ref":"#/components/schemas/CreateTopicSubscriptionsRequestDto","index$":1}}}},"parameters":[{"name":"topicKey","required":true,"in":"path","description":"The key identifier of the topic","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_subscriptions_response_dto_ref01_ent = client.CreateSubscriptionsResponseDto()
    let create_subscriptions_response_dto_ref01_data = setup.data.new.create_subscriptions_response_dto['create_subscriptions_response_dto_ref01']
    create_subscriptions_response_dto_ref01_data['topic_key'] = setup.idmap['topic_key01']

    create_subscriptions_response_dto_ref01_data = (await create_subscriptions_response_dto_ref01_ent.create(create_subscriptions_response_dto_ref01_data)).data()
    assert(null != create_subscriptions_response_dto_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_subscriptions_response_dto/CreateSubscriptionsResponseDtoTestData.json')

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
    ['create_subscriptions_response_dto01','create_subscriptions_response_dto02','create_subscriptions_response_dto03','topic01','topic02','topic03','topic_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_CREATE_SUBSCRIPTIONS_RESPONSE_DTO_ENTID']
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
  
