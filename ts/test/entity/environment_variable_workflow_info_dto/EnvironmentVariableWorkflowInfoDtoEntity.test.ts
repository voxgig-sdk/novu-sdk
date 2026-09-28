

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


describe('EnvironmentVariableWorkflowInfoDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.EnvironmentVariableWorkflowInfoDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'environment_variable_workflow_info_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the workflow","t":"`$STRING`","key$":"name","index$":0},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","r":true,"sh":"The unique identifier of the workflow","t":"`$STRING`","key$":"workflowId","index$":1}},"name":"environment_variable_workflow_info_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/environment-variables/{variableKey}/usage","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"BASE_URL","k":"param","n":"variable_key","or":"variable_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/environment-variables/{variableKey}/usage","q":{"exist":["idempotency_key","variable_key"]},"r":{"param":{"variableKey":"variable_key"}},"s":[{"lit":"v1"},{"lit":"environment-variables"},{"var":"variable_key"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body.workflows`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.environment_variable"]]},"key$":"environment_variable_workflow_info_dto","name__orig":"environment_variable_workflow_info_dto","Name":"EnvironmentVariableWorkflowInfoDto","name_":"environment_variable_workflow_info_dto","name-":"environment-variable-workflow-info-dto","NAME":"ENVIRONMENT_VARIABLE_WORKFLOW_INFO_DTO","index$":19}, {"active":true,"entity":"environment_variable_workflow_info_dto","key$":"BasicEnvironmentVariableWorkflowInfoDtoFlow","kind":"basic","name":"BasicEnvironmentVariableWorkflowInfoDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"variable_key":"variable_key01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"environment_variable_workflow_info_dto_ref01"}}],"index$":0}]}, 'EnvironmentVariableWorkflowInfoDto', {"GET /v1/environment-variables/{variableKey}/usage":{"protocol":"http","parameters":[{"name":"variableKey","required":true,"in":"path","description":"The unique key of the environment variable (e.g. BASE_URL)","example":"BASE_URL","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let environment_variable_workflow_info_dto_ref01_data = Object.values(setup.data.existing.environment_variable_workflow_info_dto)[0] as any

    // LIST
    const environment_variable_workflow_info_dto_ref01_ent = client.EnvironmentVariableWorkflowInfoDto()
    const environment_variable_workflow_info_dto_ref01_match: any = {}
    environment_variable_workflow_info_dto_ref01_match['variable_key'] = setup.idmap['variable_key01']

    const environment_variable_workflow_info_dto_ref01_list = (await environment_variable_workflow_info_dto_ref01_ent.list(environment_variable_workflow_info_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/environment_variable_workflow_info_dto/EnvironmentVariableWorkflowInfoDtoTestData.json')

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
    ['environment_variable_workflow_info_dto01','environment_variable_workflow_info_dto02','environment_variable_workflow_info_dto03','environment_variable01','environment_variable02','environment_variable03','variable_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_ENVIRONMENT_VARIABLE_WORKFLOW_INFO_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_ENVIRONMENT_VARIABLE_WORKFLOW_INFO_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_ENVIRONMENT_VARIABLE_WORKFLOW_INFO_DTO_ENTID']
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
  
