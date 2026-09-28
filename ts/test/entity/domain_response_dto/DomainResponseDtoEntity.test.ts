

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


describe('DomainResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.DomainResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"String key-value metadata (max 10 keys, 500 characters total when set via API).","t":"`$OBJECT`","key$":"data","index$":1},"dnsProvider":{"a":true,"h":"Dns Provider","n":"dnsProvider","r":false,"t":"`$STRING`","key$":"dnsProvider","index$":2},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":3},"expectedDnsRecords":{"a":true,"h":"Expected Dns Records","n":"expectedDnsRecords","r":false,"t":"`$ARRAY`","key$":"expectedDnsRecords","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"mxRecordConfigured":{"a":true,"h":"Mx Record Configured","n":"mxRecordConfigured","r":true,"t":"`$BOOLEAN`","key$":"mxRecordConfigured","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":7},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":9},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":10}},"id":{"field":"id","name":"id"},"name":"domain_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/domains/{domain}/verify","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/domains/{domain}/verify","q":{"$action":"verify","exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"domain_response_dto","name__orig":"domain_response_dto","Name":"DomainResponseDto","name_":"domain_response_dto","name-":"domain-response-dto","NAME":"DOMAIN_RESPONSE_DTO","index$":14}, {"active":true,"entity":"domain_response_dto","key$":"BasicDomainResponseDtoFlow","kind":"basic","name":"BasicDomainResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_response_dto_ref01"},"m":{"domain":"domain01"},"o":"create","s":[],"v":[],"index$":0}]}, 'DomainResponseDto', {"POST /v1/domains/{domain}/verify":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_response_dto_ref01_ent = client.DomainResponseDto()
    let domain_response_dto_ref01_data = setup.data.new.domain_response_dto['domain_response_dto_ref01']
    domain_response_dto_ref01_data['domain'] = setup.idmap['domain01']

    domain_response_dto_ref01_data = (await domain_response_dto_ref01_ent.create(domain_response_dto_ref01_data)).data()
    assert(null != domain_response_dto_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain_response_dto/DomainResponseDtoTestData.json')

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
    ['domain_response_dto01','domain_response_dto02','domain_response_dto03','domain01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_DOMAIN_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_DOMAIN_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_DOMAIN_RESPONSE_DTO_ENTID']
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
  
