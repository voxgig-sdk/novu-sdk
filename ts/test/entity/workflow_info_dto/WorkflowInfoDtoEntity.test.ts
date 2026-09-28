

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


describe('WorkflowInfoDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.WorkflowInfoDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow_info_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the workflow","t":"`$STRING`","key$":"name","index$":0},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","r":true,"sh":"The unique identifier of the workflow","t":"`$STRING`","key$":"workflowId","index$":1}},"name":"workflow_info_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/layouts/{layoutId}/usage","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"layout_id","or":"layout_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/layouts/{layoutId}/usage","q":{"exist":["idempotency_key","layout_id"]},"r":{"param":{"layoutId":"layout_id"}},"s":[{"lit":"v2"},{"lit":"layouts"},{"var":"layout_id"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body.workflows`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.layout"]]},"key$":"workflow_info_dto","name__orig":"workflow_info_dto","Name":"WorkflowInfoDto","name_":"workflow_info_dto","name-":"workflow-info-dto","NAME":"WORKFLOW_INFO_DTO","index$":65}, {"active":true,"entity":"workflow_info_dto","key$":"BasicWorkflowInfoDtoFlow","kind":"basic","name":"BasicWorkflowInfoDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"layout_id":"layout01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"workflow_info_dto_ref01"}}],"index$":0}]}, 'WorkflowInfoDto', {"GET /v2/layouts/{layoutId}/usage":{"protocol":"http","parameters":[{"name":"layoutId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workflow_info_dto_ref01_data = Object.values(setup.data.existing.workflow_info_dto)[0] as any

    // LIST
    const workflow_info_dto_ref01_ent = client.WorkflowInfoDto()
    const workflow_info_dto_ref01_match: any = {}
    workflow_info_dto_ref01_match['layout_id'] = setup.idmap['layout01']

    const workflow_info_dto_ref01_list = (await workflow_info_dto_ref01_ent.list(workflow_info_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workflow_info_dto/WorkflowInfoDtoTestData.json')

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
    ['workflow_info_dto01','workflow_info_dto02','workflow_info_dto03','layout01','layout02','layout03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_WORKFLOW_INFO_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_WORKFLOW_INFO_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_WORKFLOW_INFO_DTO_ENTID']
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
  
