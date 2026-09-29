

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


describe('AgentIntegrationResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.AgentIntegrationResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_integration_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agentId":{"a":true,"h":"Agent Id","n":"agentId","r":true,"t":"`$STRING`","key$":"agentId","index$":0},"connectedAt":{"a":true,"h":"Connected At","n":"connectedAt","r":false,"sh":"Set when the agent–integration link received its first inbound webhook delivery.","t":"`$OBJECT`","key$":"connectedAt","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":2},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":3},"exceedsPlanLimit":{"a":true,"h":"Exceeds Plan Limit","n":"exceedsPlanLimit","r":false,"sh":"Cloud only.","t":"`$BOOLEAN`","key$":"exceedsPlanLimit","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Agent–integration link document id.","t":"`$STRING`","key$":"id","index$":5},"integration":{"a":true,"h":"Integration","n":"integration","r":true,"t":"`$OBJECT`","key$":"integration","index$":6},"integrationIdentifier":{"a":true,"h":"Integration Identifier","n":"integrationIdentifier","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The integration identifier (same as in the integration store), not the internal document _id.","t":"`$STRING`","key$":"integrationIdentifier","index$":7},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":8},"providerId":{"a":true,"h":"Provider Id","n":"providerId","r":false,"sh":"Provider ID to auto-create a dedicated integration (e.g.","t":"`$STRING`","key$":"providerId","index$":9},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":10}},"id":{"field":"id","name":"id"},"name":"agent_integration_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/agents/{identifier}/integrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/agents/{identifier}/integrations","q":{"exist":["idempotency_key","identifier"]},"r":{},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"identifier"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/agents/{identifier}/integrations/{agentIntegrationId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"agent_id","or":"identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"agent_integration_id","or":"agentIntegrationId","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/v1/agents/{identifier}/integrations/{agentIntegrationId}","q":{"exist":["agent_id","agent_integration_id","idempotency_key"]},"r":{"param":{"agentIntegrationId":"agent_integration_id","identifier":"agent_id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"agent_id"},{"lit":"integrations"},{"var":"agent_integration_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.agent"],["$.main.kit.entity.agent","$.main.kit.entity.integration"]]},"key$":"agent_integration_response_dto","name__orig":"agent_integration_response_dto","Name":"AgentIntegrationResponseDto","name_":"agent_integration_response_dto","name-":"agent-integration-response-dto","NAME":"AGENT_INTEGRATION_RESPONSE_DTO","index$":2}, {"active":true,"entity":"agent_integration_response_dto","key$":"BasicAgentIntegrationResponseDtoFlow","kind":"basic","name":"BasicAgentIntegrationResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_integration_response_dto_ref01"},"m":{"agent_id":"agent01","identifier":"identifier01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"agent_id":"agent01"},"i":{"ref":"agent_integration_response_dto_ref01","srcdatavar":"agent_integration_response_dto_ref01_data","suffix":"_up0","textfield":"agentId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_integration_response_dto_ref01"}}],"v":[],"index$":1}]}, 'AgentIntegrationResponseDto', {"POST /v1/agents/{identifier}/integrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"integrationIdentifier":{"type":"string","description":"The integration identifier (same as in the integration store), not the internal document _id.","key$":"integrationIdentifier"},"providerId":{"type":"string","description":"Provider ID to auto-create a dedicated integration (e.g. novu-agent-email). When set, the server creates the integration if one does not already exist for this agent.","key$":"providerId"}},"x-ref":"#/components/schemas/AddAgentIntegrationRequestDto","index$":1}}}},"parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PATCH /v1/agents/{identifier}/integrations/{agentIntegrationId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"integrationIdentifier":{"type":"string","description":"The integration identifier this link should point to (not the internal document _id).","key$":"integrationIdentifier"}},"required":["integrationIdentifier"],"x-ref":"#/components/schemas/UpdateAgentIntegrationRequestDto","index$":1}}}},"parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"agentIntegrationId","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const agent_integration_response_dto_ref01_ent = client.AgentIntegrationResponseDto()
    let agent_integration_response_dto_ref01_data = setup.data.new.agent_integration_response_dto['agent_integration_response_dto_ref01']
    agent_integration_response_dto_ref01_data['agent_id'] = setup.idmap['agent01']
    agent_integration_response_dto_ref01_data['identifier'] = setup.idmap['identifier01']

    agent_integration_response_dto_ref01_data = (await agent_integration_response_dto_ref01_ent.create(agent_integration_response_dto_ref01_data)).data()
    assert(null != agent_integration_response_dto_ref01_data.id)


    // UPDATE
    const agent_integration_response_dto_ref01_data_up0: any = {}
    agent_integration_response_dto_ref01_data_up0.id = agent_integration_response_dto_ref01_data.id
    agent_integration_response_dto_ref01_data_up0 ['agent_id'] = setup.idmap['agent_id']

    const agent_integration_response_dto_ref01_markdef_up0 = { name: 'agentId', value: 'Mark01-agent_integration_response_dto_ref01_' + setup.now }
    ;(agent_integration_response_dto_ref01_data_up0 as any)[agent_integration_response_dto_ref01_markdef_up0.name] = agent_integration_response_dto_ref01_markdef_up0.value

    const agent_integration_response_dto_ref01_resdata_up0 = (await agent_integration_response_dto_ref01_ent.update(agent_integration_response_dto_ref01_data_up0)).data()
    assert(agent_integration_response_dto_ref01_resdata_up0.id === agent_integration_response_dto_ref01_data_up0.id)

    assert((agent_integration_response_dto_ref01_resdata_up0 as any)[agent_integration_response_dto_ref01_markdef_up0.name] === agent_integration_response_dto_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent_integration_response_dto/AgentIntegrationResponseDtoTestData.json')

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
    ['agent_integration_response_dto01','agent_integration_response_dto02','agent_integration_response_dto03','agent01','agent02','agent03','integration01','integration02','integration03','identifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_AGENT_INTEGRATION_RESPONSE_DTO_ENTID']
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
  
