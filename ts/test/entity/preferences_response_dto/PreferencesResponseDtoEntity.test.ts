

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


describe('PreferencesResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.PreferencesResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'preferences_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":1},"key$":"context","index$":0},"preferences":{"a":true,"h":"Preferences","n":"preferences","r":true,"sh":"Array of workflow preferences to update (maximum 100 items)","t":"`$ARRAY`","key$":"preferences","index$":1}},"name":"preferences_response_dto","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/preferences/bulk","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/preferences/bulk","q":{"exist":["idempotency_key","subscriber_id"]},"r":{"param":{"subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"preferences"},{"lit":"bulk"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.subscriber"]]},"key$":"preferences_response_dto","name__orig":"preferences_response_dto","Name":"PreferencesResponseDto","name_":"preferences_response_dto","name-":"preferences-response-dto","NAME":"PREFERENCES_RESPONSE_DTO","index$":44}, {"active":true,"entity":"preferences_response_dto","key$":"BasicPreferencesResponseDtoFlow","kind":"basic","name":"BasicPreferencesResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"preferences_response_dto_ref01","srcdatavar":"preferences_response_dto_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-preferences_response_dto_ref01"}}],"v":[],"index$":0}]}, 'PreferencesResponseDto', {"PATCH /v2/subscribers/{subscriberId}/preferences/bulk":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"preferences":{"description":"Array of workflow preferences to update (maximum 100 items)","maxItems":100,"type":"array","items":{"type":"object","properties":{"channels":{"description":"Channel-specific preference settings","allOf":[]},"workflowId":{"type":"string","description":"Workflow internal _id, identifier or slug"}},"required":["channels","workflowId"],"x-ref":"#/components/schemas/BulkUpdateSubscriberPreferenceItemDto"},"key$":"preferences"},"context":{"type":"object","additionalProperties":{"oneOf":[{"type":"string","description":"Simple context id","example":"org-acme"},{"type":"object","description":"Rich context object with id and optional data","properties":{},"required":[]}]},"key$":"context"}},"required":["preferences"],"x-ref":"#/components/schemas/BulkUpdateSubscriberPreferencesDto","index$":1}}}},"parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let preferences_response_dto_ref01_data = Object.values(setup.data.existing.preferences_response_dto)[0] as any

    // UPDATE
    const preferences_response_dto_ref01_ent = client.PreferencesResponseDto()
    const preferences_response_dto_ref01_data_up0: any = {}

    const preferences_response_dto_ref01_resdata_up0 = (await preferences_response_dto_ref01_ent.update(preferences_response_dto_ref01_data_up0)).data()
    assert(null != preferences_response_dto_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/preferences_response_dto/PreferencesResponseDtoTestData.json')

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
    ['preferences_response_dto01','preferences_response_dto02','preferences_response_dto03','subscriber01','subscriber02','subscriber03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_PREFERENCES_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_PREFERENCES_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_PREFERENCES_RESPONSE_DTO_ENTID']
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
  
