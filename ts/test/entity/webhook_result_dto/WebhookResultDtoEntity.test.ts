

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


describe('WebhookResultDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.WebhookResultDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_result_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"webhook_result_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"environment_id","or":"environmentId","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"integration_id","or":"integrationId","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}","q":{"exist":["environment_id","idempotency_key","integration_id"]},"r":{"param":{"environmentId":"environment_id","integrationId":"integration_id"}},"s":[{"lit":"v2"},{"lit":"inbound-webhooks"},{"lit":"delivery-providers"},{"var":"environment_id"},{"var":"integration_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"webhook_result_dto","name__orig":"webhook_result_dto","Name":"WebhookResultDto","name_":"webhook_result_dto","name-":"webhook-result-dto","NAME":"WEBHOOK_RESULT_DTO","index$":55}, {"active":true,"entity":"webhook_result_dto","key$":"BasicWebhookResultDtoFlow","kind":"basic","name":"BasicWebhookResultDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_result_dto_ref01"},"m":{"environment_id":"environment01","integration_id":"integration01"},"o":"create","s":[],"v":[],"index$":0}]}, 'WebhookResultDto', {"POST /v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}":{"protocol":"http","requestBody":{"required":true,"description":"Webhook event payload from the delivery provider","content":{"application/json":{"schema":{"type":"object","additionalProperties":true,"description":"Generic webhook payload from delivery providers","index$":1}}}},"parameters":[{"name":"environmentId","required":true,"in":"path","description":"The environment identifier","schema":{"type":"string"},"index$":0},{"name":"integrationId","required":true,"in":"path","description":"The integration identifier for the delivery provider","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_result_dto_ref01_ent = client.WebhookResultDto()
    let webhook_result_dto_ref01_data = setup.data.new.webhook_result_dto['webhook_result_dto_ref01']
    webhook_result_dto_ref01_data['environment_id'] = setup.idmap['environment01']
    webhook_result_dto_ref01_data['integration_id'] = setup.idmap['integration01']

    webhook_result_dto_ref01_data = (await webhook_result_dto_ref01_ent.create(webhook_result_dto_ref01_data)).data()
    assert(null != webhook_result_dto_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook_result_dto/WebhookResultDtoTestData.json')

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
    ['webhook_result_dto01','webhook_result_dto02','webhook_result_dto03','environment01','integration01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_WEBHOOK_RESULT_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_WEBHOOK_RESULT_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_WEBHOOK_RESULT_DTO_ENTID']
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
  
