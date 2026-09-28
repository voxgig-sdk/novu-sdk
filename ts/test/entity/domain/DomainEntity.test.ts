

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


describe('DomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Domain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"String key-value metadata (max 10 keys, 500 characters total when set via API).","t":"`$OBJECT`","key$":"data","index$":1},"dnsProvider":{"a":true,"h":"Dns Provider","n":"dnsProvider","r":false,"t":"`$STRING`","key$":"dnsProvider","index$":2},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":3},"expectedDnsRecords":{"a":true,"h":"Expected Dns Records","n":"expectedDnsRecords","r":false,"t":"`$ARRAY`","key$":"expectedDnsRecords","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"mxRecordConfigured":{"a":true,"h":"Mx Record Configured","n":"mxRecordConfigured","r":true,"t":"`$BOOLEAN`","key$":"mxRecordConfigured","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The domain name (e.g.","t":"`$STRING`","key$":"name","index$":7},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":9},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":10}},"id":{"field":"id","name":"id"},"name":"domain","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/domains/{domain}/diagnose","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/domains/{domain}/diagnose","q":{"$action":"diagnose","exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"},{"lit":"diagnose"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/domains","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/domains","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/domains/{domain}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/domains/{domain}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/domains/{domain}/routes/{address}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"address","or":"address","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/domains/{domain}/routes/{address}","q":{"exist":["address","id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"},{"lit":"routes"},{"var":"address"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/domains/{domain}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/domains/{domain}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/domains/{domain}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/domains/{domain}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":11}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"m":{"id":"domain01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"domain_ref01","suffix":"_rm0"},"m":{"id":"domain01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Domain', {"POST /v1/domains/{domain}/diagnose":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"POST /v1/domains":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The domain name (e.g. \"recent.dev\")","key$":"name"},"data":{"type":"object","description":"Optional string key-value metadata (max 10 keys, 500 characters total for keys+values).","additionalProperties":{"type":"string"},"key$":"data"}},"required":["name"],"x-ref":"#/components/schemas/CreateDomainDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v1/domains/{domain}":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v1/domains/{domain}/routes/{address}":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"address","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"DELETE /v1/domains/{domain}":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PATCH /v1/domains/{domain}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object","description":"Replaces domain metadata when provided (max 10 keys, 500 characters total for keys+values).","additionalProperties":{"type":"string"},"key$":"data"}},"x-ref":"#/components/schemas/UpdateDomainDto","index$":1}}}},"parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_ref01_ent = client.Domain()
    let domain_ref01_data = setup.data.new.domain['domain_ref01']

    domain_ref01_data = (await domain_ref01_ent.create(domain_ref01_data)).data()
    assert(null != domain_ref01_data.id)


    // UPDATE
    const domain_ref01_data_up0: any = {}
    domain_ref01_data_up0.id = domain_ref01_data.id

    const domain_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-domain_ref01_' + setup.now }
    ;(domain_ref01_data_up0 as any)[domain_ref01_markdef_up0.name] = domain_ref01_markdef_up0.value

    const domain_ref01_resdata_up0 = (await domain_ref01_ent.update(domain_ref01_data_up0)).data()
    assert(domain_ref01_resdata_up0.id === domain_ref01_data_up0.id)

    assert((domain_ref01_resdata_up0 as any)[domain_ref01_markdef_up0.name] === domain_ref01_markdef_up0.value)


    // LOAD
    const domain_ref01_match_dt0: any = {}
    domain_ref01_match_dt0.id = domain_ref01_data.id
    const domain_ref01_data_dt0 = (await domain_ref01_ent.load(domain_ref01_match_dt0)).data()
    assert(domain_ref01_data_dt0.id === domain_ref01_data.id)


    // REMOVE
    const domain_ref01_match_rm0: any = { id: domain_ref01_data.id }
    await domain_ref01_ent.remove(domain_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain/DomainTestData.json')

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
    ['domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_DOMAIN_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_DOMAIN_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_DOMAIN_ENTID']
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
  
