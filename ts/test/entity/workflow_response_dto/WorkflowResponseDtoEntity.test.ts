

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


describe('WorkflowResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.WorkflowResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Whether the workflow is active","t":"`$BOOLEAN`","key$":"active","index$":0},"agent":{"a":true,"h":"Agent","n":"agent","r":false,"sh":"Optional agent assignment used to route this workflow through an agent's connected channels.","t":"`$ANY`","key$":"agent","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"Creation timestamp","t":"`$STRING`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the workflow","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Database identifier of the workflow","t":"`$STRING`","key$":"id","index$":4},"isTranslationEnabled":{"a":true,"h":"Is Translation Enabled","n":"isTranslationEnabled","r":false,"sh":"Enable or disable translations for this workflow","t":"`$BOOLEAN`","key$":"isTranslationEnabled","index$":5},"issues":{"a":true,"h":"Issues","n":"issues","r":false,"sh":"Runtime issues for workflow creation and update","t":"`$OBJECT`","key$":"issues","index$":6},"lastPublishedAt":{"a":true,"h":"Last Published At","n":"lastPublishedAt","r":false,"sh":"Timestamp of the last workflow publication","t":"`$STRING`","key$":"lastPublishedAt","index$":7},"lastPublishedBy":{"a":true,"h":"Last Published By","n":"lastPublishedBy","r":false,"sh":"User who last published the workflow","t":"`$ANY`","key$":"lastPublishedBy","index$":8},"lastTriggeredAt":{"a":true,"h":"Last Triggered At","n":"lastTriggeredAt","r":false,"sh":"Timestamp of the last workflow trigger","t":"`$STRING`","key$":"lastTriggeredAt","index$":9},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the workflow","t":"`$STRING`","key$":"name","index$":10},"origin":{"a":true,"h":"Origin","n":"origin","r":true,"sh":"Workflow origin","t":"`$STRING`","key$":"origin","index$":11},"payloadExample":{"a":true,"h":"Payload Example","n":"payloadExample","r":false,"sh":"Generated payload example based on the payload schema","t":"`$OBJECT`","key$":"payloadExample","index$":12},"payloadSchema":{"a":true,"h":"Payload Schema","n":"payloadSchema","r":false,"sh":"The payload JSON Schema for the workflow","t":"`$OBJECT`","key$":"payloadSchema","index$":13},"preferences":{"a":true,"h":"Preferences","n":"preferences","r":true,"sh":"Preferences for the workflow","t":"`$ANY`","key$":"preferences","index$":14},"severity":{"a":true,"h":"Severity","n":"severity","r":true,"sh":"Workflow severity","t":"`$STRING`","key$":"severity","index$":15},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Slug of the workflow","t":"`$STRING`","key$":"slug","index$":16},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Workflow status","t":"`$STRING`","key$":"status","index$":17},"steps":{"a":true,"h":"Steps","n":"steps","r":true,"sh":"Steps of the workflow","t":"`$ARRAY`","union":{"branches":5,"count":3,"depth":19},"key$":"steps","index$":18},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags associated with the workflow","t":"`$ARRAY`","key$":"tags","index$":19},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"Last updated timestamp","t":"`$STRING`","key$":"updatedAt","index$":20},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"sh":"User who last updated the workflow","t":"`$ANY`","key$":"updatedBy","index$":21},"validatePayload":{"a":true,"h":"Validate Payload","n":"validatePayload","r":false,"sh":"Enable or disable payload schema validation","t":"`$BOOLEAN`","key$":"validatePayload","index$":22},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","r":true,"sh":"Workflow identifier","t":"`$STRING`","key$":"workflowId","index$":23}},"id":{"field":"id","name":"id"},"name":"workflow_response_dto","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v2/workflows/{workflowId}/sync","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflowId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/workflows/{workflowId}/sync","q":{"$action":"sync","exist":["id","idempotency_key"]},"r":{"param":{"workflowId":"id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"id"},{"lit":"sync"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"workflow_response_dto","name__orig":"workflow_response_dto","Name":"WorkflowResponseDto","name_":"workflow_response_dto","name-":"workflow-response-dto","NAME":"WORKFLOW_RESPONSE_DTO","index$":58}, {"active":true,"entity":"workflow_response_dto","key$":"BasicWorkflowResponseDtoFlow","kind":"basic","name":"BasicWorkflowResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workflow_response_dto_ref01","srcdatavar":"workflow_response_dto_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_response_dto_ref01"}}],"v":[],"index$":0}]}, 'WorkflowResponseDto', {"PUT /v2/workflows/{workflowId}/sync":{"protocol":"http","requestBody":{"required":true,"description":"Sync workflow details","content":{"application/json":{"schema":{"type":"object","properties":{"targetEnvironmentId":{"type":"string","description":"Target environment identifier to sync the workflow to"}},"required":["targetEnvironmentId"],"x-ref":"#/components/schemas/SyncWorkflowDto"}}}},"parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workflow_response_dto_ref01_data = Object.values(setup.data.existing.workflow_response_dto)[0] as any

    // UPDATE
    const workflow_response_dto_ref01_ent = client.WorkflowResponseDto()
    const workflow_response_dto_ref01_data_up0: any = {}
    workflow_response_dto_ref01_data_up0.id = workflow_response_dto_ref01_data.id

    const workflow_response_dto_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-workflow_response_dto_ref01_' + setup.now }
    ;(workflow_response_dto_ref01_data_up0 as any)[workflow_response_dto_ref01_markdef_up0.name] = workflow_response_dto_ref01_markdef_up0.value

    const workflow_response_dto_ref01_resdata_up0 = (await workflow_response_dto_ref01_ent.update(workflow_response_dto_ref01_data_up0)).data()
    assert(workflow_response_dto_ref01_resdata_up0.id === workflow_response_dto_ref01_data_up0.id)

    assert((workflow_response_dto_ref01_resdata_up0 as any)[workflow_response_dto_ref01_markdef_up0.name] === workflow_response_dto_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workflow_response_dto/WorkflowResponseDtoTestData.json')

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
    ['workflow_response_dto01','workflow_response_dto02','workflow_response_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_WORKFLOW_RESPONSE_DTO_ENTID']
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
  
