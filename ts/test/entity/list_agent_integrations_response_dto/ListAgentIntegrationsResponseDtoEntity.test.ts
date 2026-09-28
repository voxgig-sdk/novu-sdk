

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


describe('ListAgentIntegrationsResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ListAgentIntegrationsResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_agent_integrations_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agentId":{"a":true,"h":"Agent Id","n":"agentId","r":true,"t":"`$STRING`","key$":"agentId","index$":0},"connectedAt":{"a":true,"h":"Connected At","n":"connectedAt","r":false,"sh":"Set when the agent–integration link received its first inbound webhook delivery.","t":"`$OBJECT`","key$":"connectedAt","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":2},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":3},"exceedsPlanLimit":{"a":true,"h":"Exceeds Plan Limit","n":"exceedsPlanLimit","r":false,"sh":"Cloud only.","t":"`$BOOLEAN`","key$":"exceedsPlanLimit","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Agent–integration link document id.","t":"`$STRING`","key$":"id","index$":5},"integration":{"a":true,"h":"Integration","n":"integration","r":true,"t":"`$OBJECT`","key$":"integration","index$":6},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":7},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"list_agent_integrations_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/agents/{identifier}/integrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"include_cursor","or":"include_cursor","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"integration_identifier","or":"integration_identifier","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/agents/{identifier}/integrations","q":{"exist":["after","before","idempotency_key","identifier","include_cursor","integration_identifier","limit","order_by","order_direction"]},"r":{},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"identifier"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.agent"]]},"key$":"list_agent_integrations_response_dto","name__orig":"list_agent_integrations_response_dto","Name":"ListAgentIntegrationsResponseDto","name_":"list_agent_integrations_response_dto","name-":"list-agent-integrations-response-dto","NAME":"LIST_AGENT_INTEGRATIONS_RESPONSE_DTO","index$":30}, {"active":true,"entity":"list_agent_integrations_response_dto","key$":"BasicListAgentIntegrationsResponseDtoFlow","kind":"basic","name":"BasicListAgentIntegrationsResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"identifier":"identifier01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_agent_integrations_response_dto_ref01"}}],"index$":0}]}, 'ListAgentIntegrationsResponseDto', {"GET /v1/agents/{identifier}/integrations":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"after","required":false,"in":"query","description":"Cursor for pagination indicating the starting point after which to fetch results.","schema":{"type":"string"},"index$":1},{"name":"before","required":false,"in":"query","description":"Cursor for pagination indicating the ending point before which to fetch results.","schema":{"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"Limit the number of items to return","example":10,"schema":{"type":"number"},"index$":3},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":4},{"name":"orderBy","required":false,"in":"query","description":"Field to order by","schema":{"type":"string"},"index$":5},{"name":"includeCursor","required":false,"in":"query","description":"Include cursor item in response","schema":{"type":"boolean"},"index$":6},{"name":"integrationIdentifier","required":false,"in":"query","description":"Return only links for this integration identifier (not the internal document _id).","schema":{"type":"string"},"index$":7},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_agent_integrations_response_dto_ref01_data = Object.values(setup.data.existing.list_agent_integrations_response_dto)[0] as any

    // LIST
    const list_agent_integrations_response_dto_ref01_ent = client.ListAgentIntegrationsResponseDto()
    const list_agent_integrations_response_dto_ref01_match: any = {}
    list_agent_integrations_response_dto_ref01_match['identifier'] = setup.idmap['identifier01']

    const list_agent_integrations_response_dto_ref01_list = (await list_agent_integrations_response_dto_ref01_ent.list(list_agent_integrations_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_agent_integrations_response_dto/ListAgentIntegrationsResponseDtoTestData.json')

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
    ['list_agent_integrations_response_dto01','list_agent_integrations_response_dto02','list_agent_integrations_response_dto03','agent01','agent02','agent03','identifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LIST_AGENT_INTEGRATIONS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LIST_AGENT_INTEGRATIONS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LIST_AGENT_INTEGRATIONS_RESPONSE_DTO_ENTID']
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
  
