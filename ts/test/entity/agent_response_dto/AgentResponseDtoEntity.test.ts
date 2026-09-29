

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


describe('AgentResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.AgentResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"t":"`$BOOLEAN`","key$":"active","index$":0},"behavior":{"a":true,"h":"Behavior","n":"behavior","r":true,"t":"`$OBJECT`","key$":"behavior","index$":1},"bridgeUrl":{"a":true,"h":"Bridge Url","n":"bridgeUrl","r":false,"sh":"Production bridge URL","t":"`$STRING`","key$":"bridgeUrl","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":3},"createdBy":{"a":true,"h":"Created By","n":"createdBy","r":false,"sh":"Mongo user id of the user who created the agent","t":"`$STRING`","key$":"createdBy","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":5},"devBridgeActive":{"a":true,"h":"Dev Bridge Active","n":"devBridgeActive","r":false,"sh":"Whether the dev bridge override is active","t":"`$BOOLEAN`","key$":"devBridgeActive","index$":6},"devBridgeUrl":{"a":true,"h":"Dev Bridge Url","n":"devBridgeUrl","r":false,"sh":"Development bridge URL (set by npx novu dev)","t":"`$STRING`","key$":"devBridgeUrl","index$":7},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":8},"exceedsPlanLimit":{"a":true,"h":"Exceeds Plan Limit","n":"exceedsPlanLimit","r":false,"sh":"Cloud only.","t":"`$BOOLEAN`","key$":"exceedsPlanLimit","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":10},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":true,"t":"`$STRING`","key$":"identifier","index$":11},"integrations":{"a":true,"h":"Integrations","n":"integrations","r":false,"t":"`$ARRAY`","key$":"integrations","index$":12},"managedRuntime":{"a":true,"h":"Managed Runtime","n":"managedRuntime","r":false,"sh":"Present when runtime is \"managed\".","t":"`$ANY`","key$":"managedRuntime","index$":13},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":14},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":15},"runtime":{"a":true,"h":"Runtime","n":"runtime","r":false,"sh":"Whether the agent brain is self-hosted (bridge) or managed by a third-party provider","t":"`$STRING`","key$":"runtime","index$":16},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":17},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":false,"sh":"Discovery scope of the agent.","t":"`$STRING`","key$":"visibility","index$":18}},"id":{"field":"id","name":"id"},"name":"agent_response_dto","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/agents/{identifier}/bridge","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/agents/{identifier}/bridge","q":{"exist":["idempotency_key","identifier"]},"r":{},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"identifier"},{"lit":"bridge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.agent"]]},"key$":"agent_response_dto","name__orig":"agent_response_dto","Name":"AgentResponseDto","name_":"agent_response_dto","name-":"agent-response-dto","NAME":"AGENT_RESPONSE_DTO","index$":3}, {"active":true,"entity":"agent_response_dto","key$":"BasicAgentResponseDtoFlow","kind":"basic","name":"BasicAgentResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_response_dto_ref01","srcdatavar":"agent_response_dto_ref01_data","suffix":"_up0","textfield":"bridgeUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_response_dto_ref01"}}],"v":[],"index$":0}]}, 'AgentResponseDto', {"PUT /v1/agents/{identifier}/bridge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"bridgeUrl":{"type":"string","description":"Production bridge URL for this agent","key$":"bridgeUrl"},"devBridgeUrl":{"type":"string","description":"Development bridge URL (set by npx novu dev)","key$":"devBridgeUrl"},"devBridgeActive":{"type":"boolean","description":"Whether the dev bridge override is active","key$":"devBridgeActive"}},"x-ref":"#/components/schemas/UpdateAgentBridgeRequestDto","index$":1}}}},"parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_response_dto_ref01_data = Object.values(setup.data.existing.agent_response_dto)[0] as any

    // UPDATE
    const agent_response_dto_ref01_ent = client.AgentResponseDto()
    const agent_response_dto_ref01_data_up0: any = {}
    agent_response_dto_ref01_data_up0.id = agent_response_dto_ref01_data.id

    const agent_response_dto_ref01_markdef_up0 = { name: 'bridgeUrl', value: 'Mark01-agent_response_dto_ref01_' + setup.now }
    ;(agent_response_dto_ref01_data_up0 as any)[agent_response_dto_ref01_markdef_up0.name] = agent_response_dto_ref01_markdef_up0.value

    const agent_response_dto_ref01_resdata_up0 = (await agent_response_dto_ref01_ent.update(agent_response_dto_ref01_data_up0)).data()
    assert(agent_response_dto_ref01_resdata_up0.id === agent_response_dto_ref01_data_up0.id)

    assert((agent_response_dto_ref01_resdata_up0 as any)[agent_response_dto_ref01_markdef_up0.name] === agent_response_dto_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent_response_dto/AgentResponseDtoTestData.json')

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
    ['agent_response_dto01','agent_response_dto02','agent_response_dto03','agent01','agent02','agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_AGENT_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_AGENT_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_AGENT_RESPONSE_DTO_ENTID']
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
  
