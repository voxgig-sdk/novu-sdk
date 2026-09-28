

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


describe('ListDomainRoutesResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ListDomainRoutesResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_domain_routes_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"address":{"a":true,"h":"Address","n":"address","r":true,"t":"`$STRING`","key$":"address","index$":0},"agentId":{"a":true,"h":"Agent Id","n":"agentId","r":false,"sh":"Internal id of the destination agent.","t":"`$STRING`","key$":"agentId","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":2},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"String key-value metadata (max 10 keys, 500 characters total when set via API).","t":"`$OBJECT`","key$":"data","index$":3},"domainId":{"a":true,"h":"Domain Id","n":"domainId","r":true,"t":"`$STRING`","key$":"domainId","index$":4},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":6},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":7},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":8},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":9}},"id":{"field":"id","name":"id"},"name":"list_domain_routes_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/domains/{domain}/routes","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"domain_id","or":"domain","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"agent_id","or":"agent_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"include_cursor","or":"include_cursor","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/domains/{domain}/routes","q":{"exist":["after","agent_id","before","domain_id","idempotency_key","include_cursor","limit","order_by","order_direction"]},"r":{"param":{"domain":"domain_id"}},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"domain_id"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.domain"]]},"key$":"list_domain_routes_response_dto","name__orig":"list_domain_routes_response_dto","Name":"ListDomainRoutesResponseDto","name_":"list_domain_routes_response_dto","name-":"list-domain-routes-response-dto","NAME":"LIST_DOMAIN_ROUTES_RESPONSE_DTO","index$":35}, {"active":true,"entity":"list_domain_routes_response_dto","key$":"BasicListDomainRoutesResponseDtoFlow","kind":"basic","name":"BasicListDomainRoutesResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"domain_id":"domain01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_domain_routes_response_dto_ref01"}}],"index$":0}]}, 'ListDomainRoutesResponseDto', {"GET /v1/domains/{domain}/routes":{"protocol":"http","parameters":[{"name":"domain","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"after","required":false,"in":"query","description":"Cursor for pagination indicating the starting point after which to fetch results.","schema":{"type":"string"},"index$":1},{"name":"before","required":false,"in":"query","description":"Cursor for pagination indicating the ending point before which to fetch results.","schema":{"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"Limit the number of items to return","example":10,"schema":{"type":"number"},"index$":3},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":4},{"name":"orderBy","required":false,"in":"query","description":"Field to order by","schema":{"type":"string"},"index$":5},{"name":"includeCursor","required":false,"in":"query","description":"Include cursor item in response","schema":{"type":"boolean"},"index$":6},{"name":"agentId","required":false,"in":"query","description":"Agent identifier to filter routes by.","schema":{"type":"string"},"index$":7},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_domain_routes_response_dto_ref01_data = Object.values(setup.data.existing.list_domain_routes_response_dto)[0] as any

    // LIST
    const list_domain_routes_response_dto_ref01_ent = client.ListDomainRoutesResponseDto()
    const list_domain_routes_response_dto_ref01_match: any = {}
    list_domain_routes_response_dto_ref01_match['domain_id'] = setup.idmap['domain01']

    const list_domain_routes_response_dto_ref01_list = (await list_domain_routes_response_dto_ref01_ent.list(list_domain_routes_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_domain_routes_response_dto/ListDomainRoutesResponseDtoTestData.json')

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
    ['list_domain_routes_response_dto01','list_domain_routes_response_dto02','list_domain_routes_response_dto03','domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LIST_DOMAIN_ROUTES_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LIST_DOMAIN_ROUTES_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LIST_DOMAIN_ROUTES_RESPONSE_DTO_ENTID']
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
  
