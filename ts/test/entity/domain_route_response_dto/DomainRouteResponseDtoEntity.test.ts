

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


describe('DomainRouteResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.DomainRouteResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_route_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agentId":{"a":true,"h":"Agent Id","n":"agentId","r":false,"sh":"Agent identifier; required when type is agent, ignored when type is webhook.","t":"`$STRING`","key$":"agentId","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values).","t":"`$OBJECT`","key$":"data","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"domain_route_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/domains/{domain}/routes/{address}/test","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"address","or":"address","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"domain_id","or":"domain","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/domains/{domain}/routes/{address}/test","q":{"$action":"test","exist":["address","domain_id","idempotency_key"]},"r":{"param":{"domain":"domain_id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"domain_id"},{"lit":"routes"},{"var":"address"},{"lit":"test"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/domains/{domain}/routes","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/domains/{domain}/routes","q":{"$action":"routes","exist":["id","idempotency_key"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"id"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/domains/{domain}/routes/{address}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"address","or":"address","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"domain_id","or":"domain","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/domains/{domain}/routes/{address}","q":{"exist":["address","domain_id","idempotency_key"]},"r":{"param":{"domain":"domain_id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"domain_id"},{"lit":"routes"},{"var":"address"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/domains/{domain}/routes/{address}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"address","or":"address","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"domain_id","or":"domain","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/v1/domains/{domain}/routes/{address}","q":{"exist":["address","domain_id","idempotency_key"]},"r":{"param":{"domain":"domain_id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"domain_id"},{"lit":"routes"},{"var":"address"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.domain"]]},"key$":"domain_route_response_dto","name__orig":"domain_route_response_dto","Name":"DomainRouteResponseDto","name_":"domain_route_response_dto","name-":"domain-route-response-dto","NAME":"DOMAIN_ROUTE_RESPONSE_DTO","index$":15}, {"active":true,"entity":"domain_route_response_dto","key$":"BasicDomainRouteResponseDtoFlow","kind":"basic","name":"BasicDomainRouteResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_route_response_dto_ref01"},"m":{"domain":"domain01","domain_id":"domain01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"domain_id":"domain01"},"i":{"ref":"domain_route_response_dto_ref01","srcdatavar":"domain_route_response_dto_ref01_data","suffix":"_up0","textfield":"agentId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_route_response_dto_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"domain_route_response_dto_ref01","srcdatavar":"domain_route_response_dto_ref01_data","suffix":"_dt0"},"m":{"domain_id":"domain01","id":"domain_route_response_dto01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_route_response_dto_ref01"}}],"index$":2}]}, 'DomainRouteResponseDto', {"POST /v1/domains/{domain}/routes/{address}/test":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"from":{"type":"object","properties":{"address":{"type":"string"},"name":{"type":"string"}},"required":["address"],"x-ref":"#/components/schemas/TestDomainRouteFromDto"},"subject":{"type":"string"},"text":{"type":"string"},"html":{"type":"string"},"dryRun":{"type":"boolean","description":"When true, returns the payload that would be delivered without invoking outbound webhooks or the agent HTTP endpoint."}},"required":["from","subject"],"x-ref":"#/components/schemas/TestDomainRouteDto"}}}},"parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"address","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"POST /v1/domains/{domain}/routes":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"address":{"type":"string","description":"Inbox address local part (e.g. \"support\", \"*\")"},"agentId":{"type":"string","description":"Agent identifier; required when type is agent, unused for webhook"},"type":{"enum":["agent","webhook"],"type":"string"},"data":{"type":"object","description":"Optional string key-value metadata (max 10 keys, 500 characters total for keys+values).","additionalProperties":{"type":"string"}}},"required":["address","type"],"x-ref":"#/components/schemas/DomainRouteDto"}}}},"parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"GET /v1/domains/{domain}/routes/{address}":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"address","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"PATCH /v1/domains/{domain}/routes/{address}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"agentId":{"type":"string","description":"Agent identifier; required when type is agent, ignored when type is webhook.","key$":"agentId"},"type":{"enum":["agent","webhook"],"type":"string","key$":"type"},"data":{"type":"object","description":"Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values).","additionalProperties":{"type":"string"},"key$":"data"}},"x-ref":"#/components/schemas/UpdateDomainRouteDto","index$":1}}}},"parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"address","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_route_response_dto_ref01_ent = client.DomainRouteResponseDto()
    let domain_route_response_dto_ref01_data = setup.data.new.domain_route_response_dto['domain_route_response_dto_ref01']
    domain_route_response_dto_ref01_data['domain'] = setup.idmap['domain01']
    domain_route_response_dto_ref01_data['domain_id'] = setup.idmap['domain01']

    domain_route_response_dto_ref01_data = (await domain_route_response_dto_ref01_ent.create(domain_route_response_dto_ref01_data)).data()
    assert(null != domain_route_response_dto_ref01_data.id)


    // UPDATE
    const domain_route_response_dto_ref01_data_up0: any = {}
    domain_route_response_dto_ref01_data_up0.id = domain_route_response_dto_ref01_data.id
    domain_route_response_dto_ref01_data_up0 ['domain_id'] = setup.idmap['domain_id']

    const domain_route_response_dto_ref01_markdef_up0 = { name: 'agentId', value: 'Mark01-domain_route_response_dto_ref01_' + setup.now }
    ;(domain_route_response_dto_ref01_data_up0 as any)[domain_route_response_dto_ref01_markdef_up0.name] = domain_route_response_dto_ref01_markdef_up0.value

    const domain_route_response_dto_ref01_resdata_up0 = (await domain_route_response_dto_ref01_ent.update(domain_route_response_dto_ref01_data_up0)).data()
    assert(domain_route_response_dto_ref01_resdata_up0.id === domain_route_response_dto_ref01_data_up0.id)

    assert((domain_route_response_dto_ref01_resdata_up0 as any)[domain_route_response_dto_ref01_markdef_up0.name] === domain_route_response_dto_ref01_markdef_up0.value)


    // LOAD
    const domain_route_response_dto_ref01_match_dt0: any = {}
    domain_route_response_dto_ref01_match_dt0.id = domain_route_response_dto_ref01_data.id
    const domain_route_response_dto_ref01_data_dt0 = (await domain_route_response_dto_ref01_ent.load(domain_route_response_dto_ref01_match_dt0)).data()
    assert(domain_route_response_dto_ref01_data_dt0.id === domain_route_response_dto_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain_route_response_dto/DomainRouteResponseDtoTestData.json')

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
    ['domain_route_response_dto01','domain_route_response_dto02','domain_route_response_dto03','domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_DOMAIN_ROUTE_RESPONSE_DTO_ENTID']
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
  
