

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


describe('TranslationGroupDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.TranslationGroupDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'translation_group_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"Creation timestamp","t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"locales":{"a":true,"h":"Locales","n":"locales","r":true,"sh":"Array of available locales for this resource","t":"`$ARRAY`","key$":"locales","index$":2},"outdatedLocales":{"a":true,"h":"Outdated Locales","n":"outdatedLocales","r":false,"sh":"Locales that are outdated compared to the default locale (only present when there are outdated locales)","t":"`$ARRAY`","key$":"outdatedLocales","index$":3},"resourceId":{"a":true,"h":"Resource Id","n":"resourceId","r":true,"sh":"Resource identifier (slugified ID)","t":"`$STRING`","key$":"resourceId","index$":4},"resourceName":{"a":true,"h":"Resource Name","n":"resourceName","r":true,"sh":"Resource name (e.g., workflow name)","t":"`$STRING`","key$":"resourceName","index$":5},"resourceType":{"a":true,"h":"Resource Type","n":"resourceType","r":true,"sh":"Resource type","t":"`$STRING`","key$":"resourceType","index$":6},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"Last update timestamp","t":"`$STRING`","key$":"updatedAt","index$":7}},"id":{"field":"id","from":{"resource_id":"resourceId","resource_type":"resourceType"},"name":"id","parts":["resource_type","resource_id"],"sep":"/"},"name":"translation_group_dto","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/translations/group/{resourceType}/{resourceId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"welcome-email","k":"param","n":"resource_id","or":"resourceId","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"workflow","k":"param","n":"resource_type","or":"resourceType","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/translations/group/{resourceType}/{resourceId}","q":{"exist":["idempotency_key","resource_id","resource_type"]},"r":{"param":{"resourceId":"resource_id","resourceType":"resource_type"}},"s":[{"lit":"v2"},{"lit":"translations"},{"lit":"group"},{"var":"resource_type"},{"var":"resource_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"translation_group_dto","name__orig":"translation_group_dto","Name":"TranslationGroupDto","name_":"translation_group_dto","name-":"translation-group-dto","NAME":"TRANSLATION_GROUP_DTO","index$":51}, {"active":true,"entity":"translation_group_dto","key$":"BasicTranslationGroupDtoFlow","kind":"basic","name":"BasicTranslationGroupDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"translation_group_dto_ref01","srcdatavar":"translation_group_dto_ref01_data","suffix":"_dt0"},"m":{"id":"translation_group_dto01","resource_type":"resource_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-translation_group_dto_ref01"}}],"index$":0}]}, 'TranslationGroupDto', {"GET /v2/translations/group/{resourceType}/{resourceId}":{"protocol":"http","parameters":[{"name":"resourceType","required":true,"in":"path","description":"Resource type","example":"workflow","schema":{"enum":["workflow","layout"],"type":"string"},"index$":0},{"name":"resourceId","required":true,"in":"path","description":"Resource ID","example":"welcome-email","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let translation_group_dto_ref01_data = Object.values(setup.data.existing.translation_group_dto)[0] as any

    // LOAD
    const translation_group_dto_ref01_ent = client.TranslationGroupDto()
    const translation_group_dto_ref01_match_dt0: any = {}
    translation_group_dto_ref01_match_dt0.id = translation_group_dto_ref01_data.id
    const translation_group_dto_ref01_data_dt0 = (await translation_group_dto_ref01_ent.load(translation_group_dto_ref01_match_dt0)).data()
    assert(translation_group_dto_ref01_data_dt0.id === translation_group_dto_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/translation_group_dto/TranslationGroupDtoTestData.json')

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
    ['translation_group_dto01','translation_group_dto02','translation_group_dto03','resource_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_TRANSLATION_GROUP_DTO_ENTID']
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
  
