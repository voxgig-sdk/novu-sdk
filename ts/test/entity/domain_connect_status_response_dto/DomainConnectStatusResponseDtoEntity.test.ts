

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


describe('DomainConnectStatusResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.DomainConnectStatusResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_connect_status_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"domain_connect_status_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/domains/{domain}/auto-configure","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/domains/{domain}/auto-configure","q":{"$action":"auto-configure","exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"},{"lit":"auto-configure"}],"t":{"req":"`reqdata`","res":"`body.manualRecords`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"domain_connect_status_response_dto","name__orig":"domain_connect_status_response_dto","Name":"DomainConnectStatusResponseDto","name_":"domain_connect_status_response_dto","name-":"domain-connect-status-response-dto","NAME":"DOMAIN_CONNECT_STATUS_RESPONSE_DTO","index$":13}, {"active":true,"entity":"domain_connect_status_response_dto","key$":"BasicDomainConnectStatusResponseDtoFlow","kind":"basic","name":"BasicDomainConnectStatusResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"domain":"domain01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"domain_connect_status_response_dto_ref01"}}],"index$":0}]}, 'DomainConnectStatusResponseDto', {"GET /v1/domains/{domain}/auto-configure":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let domain_connect_status_response_dto_ref01_data = Object.values(setup.data.existing.domain_connect_status_response_dto)[0] as any

    // LIST
    const domain_connect_status_response_dto_ref01_ent = client.DomainConnectStatusResponseDto()
    const domain_connect_status_response_dto_ref01_match: any = {}
    domain_connect_status_response_dto_ref01_match['domain'] = setup.idmap['domain01']

    const domain_connect_status_response_dto_ref01_list = (await domain_connect_status_response_dto_ref01_ent.list(domain_connect_status_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain_connect_status_response_dto/DomainConnectStatusResponseDtoTestData.json')

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
    ['domain_connect_status_response_dto01','domain_connect_status_response_dto02','domain_connect_status_response_dto03','domain01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_DOMAIN_CONNECT_STATUS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_DOMAIN_CONNECT_STATUS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_DOMAIN_CONNECT_STATUS_RESPONSE_DTO_ENTID']
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
  
