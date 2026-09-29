

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


describe('StepEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Step()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'step.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"controlValues":{"a":true,"h":"Control Values","n":"controlValues","r":false,"sh":"Control values for the step (alias for controls.values)","t":"`$OBJECT`","key$":"controlValues","index$":0},"controls":{"a":true,"h":"Controls","n":"controls","r":true,"sh":"Controls metadata for the step","t":"`$ANY`","union":{"branches":5,"count":2,"depth":14},"key$":"controls","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Database identifier of the step","t":"`$STRING`","key$":"id","index$":2},"issues":{"a":true,"h":"Issues","n":"issues","r":false,"sh":"Issues associated with the step","t":"`$ANY`","key$":"issues","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the step","t":"`$STRING`","key$":"name","index$":4},"origin":{"a":true,"h":"Origin","n":"origin","r":true,"sh":"Workflow origin","t":"`$STRING`","key$":"origin","index$":5},"providerOverrides":{"a":true,"h":"Provider Overrides","n":"providerOverrides","r":false,"sh":"Per-provider content overrides keyed by providerId.","t":"`$OBJECT`","key$":"providerOverrides","index$":6},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Slug of the step","t":"`$STRING`","key$":"slug","index$":7},"stepId":{"a":true,"h":"Step Id","n":"stepId","r":true,"sh":"Unique identifier of the step","t":"`$STRING`","key$":"stepId","index$":8},"stepResolverHash":{"a":true,"h":"Step Resolver Hash","n":"stepResolverHash","r":false,"sh":"Hash identifying the deployed Cloudflare Worker for this step","t":"`$STRING`","key$":"stepResolverHash","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Type of the step","t":"`$STRING`","key$":"type","index$":10},"variables":{"a":true,"h":"Variables","n":"variables","r":true,"sh":"JSON Schema for variables, follows the JSON Schema standard","t":"`$OBJECT`","key$":"variables","index$":11},"workflowDatabaseId":{"a":true,"h":"Workflow Database Id","n":"workflowDatabaseId","r":true,"sh":"Workflow database identifier","t":"`$STRING`","key$":"workflowDatabaseId","index$":12},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","r":true,"sh":"Workflow identifier","t":"`$STRING`","key$":"workflowId","index$":13}},"id":{"field":"id","name":"id"},"name":"step","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/workflows/{workflowId}/steps/{stepId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"stepId","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workflow_id","or":"workflowId","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/workflows/{workflowId}/steps/{stepId}","q":{"exist":["id","idempotency_key","workflow_id"]},"r":{"param":{"stepId":"id","workflowId":"workflow_id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"workflow_id"},{"lit":"steps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.workflow"]]},"key$":"step","name__orig":"step","Name":"Step","name_":"step","name-":"step","NAME":"STEP","index$":40}, {"active":true,"entity":"step","key$":"BasicStepFlow","kind":"basic","name":"BasicStepFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"step_ref01","srcdatavar":"step_ref01_data","suffix":"_dt0"},"m":{"id":"step01","workflow_id":"workflow01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-step_ref01"}}],"index$":0}]}, 'Step', {"GET /v2/workflows/{workflowId}/steps/{stepId}":{"protocol":"http","parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"stepId","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let step_ref01_data = Object.values(setup.data.existing.step)[0] as any

    // LOAD
    const step_ref01_ent = client.Step()
    const step_ref01_match_dt0: any = {}
    step_ref01_match_dt0.id = step_ref01_data.id
    const step_ref01_data_dt0 = (await step_ref01_ent.load(step_ref01_match_dt0)).data()
    assert(step_ref01_data_dt0.id === step_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/step/StepTestData.json')

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
    ['step01','step02','step03','workflow01','workflow02','workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_STEP_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_STEP_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_STEP_ENTID']
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
  
