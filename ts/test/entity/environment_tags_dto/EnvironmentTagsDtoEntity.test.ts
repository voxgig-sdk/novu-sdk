

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


describe('EnvironmentTagsDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.EnvironmentTagsDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'environment_tags_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"environment_tags_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/environments/{environmentId}/tags","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"6615943e7ace93b0540ae377","k":"param","n":"id","or":"environment_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/environments/{environmentId}/tags","q":{"$action":"tags","exist":["id","idempotency_key"]},"r":{"param":{"environmentId":"id"}},"s":[{"lit":"v2"},{"lit":"environments"},{"var":"id"},{"lit":"tags"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"environment_tags_dto","name__orig":"environment_tags_dto","Name":"EnvironmentTagsDto","name_":"environment_tags_dto","name-":"environment-tags-dto","NAME":"ENVIRONMENT_TAGS_DTO","index$":17}, {"active":true,"entity":"environment_tags_dto","key$":"BasicEnvironmentTagsDtoFlow","kind":"basic","name":"BasicEnvironmentTagsDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"environment_id":"environment01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"environment_tags_dto_ref01"}}],"index$":0}]}, 'EnvironmentTagsDto', {"GET /v2/environments/{environmentId}/tags":{"protocol":"http","parameters":[{"name":"environmentId","required":true,"in":"path","description":"Environment internal ID (MongoDB ObjectId) or identifier","example":"6615943e7ace93b0540ae377","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let environment_tags_dto_ref01_data = Object.values(setup.data.existing.environment_tags_dto)[0] as any

    // LIST
    const environment_tags_dto_ref01_ent = client.EnvironmentTagsDto()
    const environment_tags_dto_ref01_match: any = {}
    environment_tags_dto_ref01_match['environment_id'] = setup.idmap['environment01']

    const environment_tags_dto_ref01_list = (await environment_tags_dto_ref01_ent.list(environment_tags_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/environment_tags_dto/EnvironmentTagsDtoTestData.json')

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
    ['environment_tags_dto01','environment_tags_dto02','environment_tags_dto03','environment01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_ENVIRONMENT_TAGS_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_ENVIRONMENT_TAGS_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_ENVIRONMENT_TAGS_DTO_ENTID']
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
  
