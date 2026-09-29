

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


describe('PublishEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Publish()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'publish.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dryRun":{"a":true,"h":"Dry Run","n":"dryRun","r":false,"sh":"Perform a dry run without making actual changes","t":"`$BOOLEAN`","key$":"dryRun","index$":0},"resources":{"a":true,"h":"Resources","n":"resources","r":false,"sh":"Array of specific resources to publish.","t":"`$ARRAY`","key$":"resources","index$":1},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"Sync results by resource type","t":"`$ARRAY`","key$":"results","index$":2},"sourceEnvironmentId":{"a":true,"h":"Source Environment Id","n":"sourceEnvironmentId","r":false,"sh":"Source environment ID to sync from.","t":"`$STRING`","key$":"sourceEnvironmentId","index$":3},"summary":{"a":true,"h":"Summary","n":"summary","r":true,"sh":"Summary of the sync operation","t":"`$ANY`","key$":"summary","index$":4}},"name":"publish","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/environments/{targetEnvironmentId}/publish","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"6615943e7ace93b0540ae377","k":"param","n":"environment_id","or":"targetEnvironmentId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/environments/{targetEnvironmentId}/publish","q":{"exist":["environment_id","idempotency_key"]},"r":{"param":{"targetEnvironmentId":"environment_id"}},"s":[{"lit":"v2"},{"lit":"environments"},{"var":"environment_id"},{"lit":"publish"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.environment"]]},"key$":"publish","name__orig":"publish","Name":"Publish","name_":"publish","name-":"publish","NAME":"PUBLISH","index$":38}, {"active":true,"entity":"publish","key$":"BasicPublishFlow","kind":"basic","name":"BasicPublishFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"publish_ref01"},"m":{"environment_id":"environment01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Publish', {"POST /v2/environments/{targetEnvironmentId}/publish":{"protocol":"http","requestBody":{"required":true,"description":"Publish request configuration","content":{"application/json":{"schema":{"type":"object","properties":{"sourceEnvironmentId":{"type":"string","description":"Source environment ID to sync from. Defaults to the Development environment if not provided.","example":"507f1f77bcf86cd799439011","key$":"sourceEnvironmentId"},"dryRun":{"type":"boolean","description":"Perform a dry run without making actual changes","default":false,"key$":"dryRun"},"resources":{"description":"Array of specific resources to publish. If not provided, all resources will be published.","type":"array","items":{"type":"object","properties":{"resourceType":{"type":"string","description":"Resource type","enum":[],"x-ref":"#/components/schemas/ResourceTypeEnum"},"resourceId":{"type":"string","description":"Unique identifier of the resource to publish","example":"workflow-id-1"}},"required":["resourceType","resourceId"],"x-ref":"#/components/schemas/ResourceToPublishDto"},"key$":"resources"}},"x-ref":"#/components/schemas/PublishEnvironmentRequestDto","index$":1}}}},"parameters":[{"name":"targetEnvironmentId","required":true,"in":"path","description":"Target environment ID (MongoDB ObjectId) to publish resources to","example":"6615943e7ace93b0540ae377","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const publish_ref01_ent = client.Publish()
    let publish_ref01_data = setup.data.new.publish['publish_ref01']
    publish_ref01_data['environment_id'] = setup.idmap['environment01']

    publish_ref01_data = (await publish_ref01_ent.create(publish_ref01_data)).data()
    assert(null != publish_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/publish/PublishTestData.json')

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
    ['publish01','publish02','publish03','environment01','environment02','environment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_PUBLISH_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_PUBLISH_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_PUBLISH_ENTID']
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
  
