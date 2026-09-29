

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


describe('EnvironmentVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.EnvironmentVariable()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'environment_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":1},"isSecret":{"a":true,"h":"Is Secret","n":"isSecret","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether this variable is a secret (encrypted at rest, masked in responses)","t":"`$BOOLEAN`","key$":"isSecret","index$":2},"key":{"a":true,"h":"Key","n":"key","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Unique key for the variable.","t":"`$STRING`","key$":"key","index$":3},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":4},"type":{"a":true,"h":"Type","n":"type","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type of the variable","t":"`$STRING`","key$":"type","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":6},"values":{"a":true,"h":"Values","n":"values","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"values","index$":7}},"id":{"field":"id","name":"id"},"name":"environment_variable","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/environment-variables","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/environment-variables","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"environment-variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/environment-variables","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/environment-variables","q":{"exist":["idempotency_key","search"]},"r":{},"s":[{"lit":"v1"},{"lit":"environment-variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/environment-variables/{variableKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"BASE_URL","k":"param","n":"id","or":"variableKey","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/environment-variables/{variableKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"variableKey":"id"}},"s":[{"lit":"v1"},{"lit":"environment-variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/environment-variables/{variableKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"BASE_URL","k":"param","n":"id","or":"variableKey","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/environment-variables/{variableKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"variableKey":"id"}},"s":[{"lit":"v1"},{"lit":"environment-variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/environment-variables/{variableKey}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"BASE_URL","k":"param","n":"id","or":"variableKey","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/environment-variables/{variableKey}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"variableKey":"id"}},"s":[{"lit":"v1"},{"lit":"environment-variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"environment_variable","name__orig":"environment_variable","Name":"EnvironmentVariable","name_":"environment_variable","name-":"environment-variable","NAME":"ENVIRONMENT_VARIABLE","index$":18}, {"active":true,"entity":"environment_variable","key$":"BasicEnvironmentVariableFlow","kind":"basic","name":"BasicEnvironmentVariableFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"environment_variable_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"environment_variable_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"environment_variable_ref01","srcdatavar":"environment_variable_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-environment_variable_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"environment_variable_ref01","srcdatavar":"environment_variable_ref01_data","suffix":"_dt0"},"m":{"id":"environment_variable01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-environment_variable_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"environment_variable_ref01","suffix":"_rm0"},"m":{"id":"environment_variable01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"environment_variable_ref01"}}],"index$":5}]}, 'EnvironmentVariable', {"POST /v1/environment-variables":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"key":{"type":"string","maxLength":256,"pattern":"/^[A-Za-z][A-Za-z0-9_]*$/","description":"Unique key for the variable. Must start with a letter and contain only letters, digits, and underscores.","key$":"key"},"type":{"type":"string","enum":["string"],"description":"The type of the variable","key$":"type"},"isSecret":{"type":"boolean","description":"Whether this variable is a secret (encrypted at rest, masked in responses)","key$":"isSecret"},"values":{"type":"array","items":{"type":"object","properties":{"_environmentId":{"type":"string"},"value":{"type":"string","maxLength":256}},"required":["_environmentId","value"],"x-ref":"#/components/schemas/EnvironmentVariableValueDto"},"key$":"values"}},"required":["key"],"x-ref":"#/components/schemas/CreateEnvironmentVariableRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v1/environment-variables":{"protocol":"http","parameters":[{"name":"search","required":false,"in":"query","description":"Filter variables by key (case-insensitive partial match)","schema":{"maxLength":256,"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"GET /v1/environment-variables/{variableKey}":{"protocol":"http","parameters":[{"name":"variableKey","required":true,"in":"path","description":"The unique key of the environment variable (e.g. BASE_URL)","example":"BASE_URL","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v1/environment-variables/{variableKey}":{"protocol":"http","parameters":[{"name":"variableKey","required":true,"in":"path","description":"The unique key of the environment variable (e.g. BASE_URL)","example":"BASE_URL","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PATCH /v1/environment-variables/{variableKey}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"key":{"type":"string","maxLength":256,"pattern":"/^[A-Za-z][A-Za-z0-9_]*$/","description":"Unique key for the variable. Must start with a letter and contain only letters, digits, and underscores.","key$":"key"},"type":{"type":"string","enum":["string"],"description":"The type of the variable","key$":"type"},"isSecret":{"type":"boolean","key$":"isSecret"},"values":{"type":"array","items":{"type":"object","properties":{"_environmentId":{"type":"string"},"value":{"type":"string","maxLength":256}},"required":["_environmentId","value"],"x-ref":"#/components/schemas/EnvironmentVariableValueDto"},"key$":"values"}},"x-ref":"#/components/schemas/UpdateEnvironmentVariableRequestDto","index$":1}}}},"parameters":[{"name":"variableKey","required":true,"in":"path","description":"The unique key of the environment variable (e.g. BASE_URL)","example":"BASE_URL","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const environment_variable_ref01_ent = client.EnvironmentVariable()
    let environment_variable_ref01_data = setup.data.new.environment_variable['environment_variable_ref01']

    environment_variable_ref01_data = (await environment_variable_ref01_ent.create(environment_variable_ref01_data)).data()
    assert(null != environment_variable_ref01_data.id)


    // LIST
    const environment_variable_ref01_match: any = {}

    const environment_variable_ref01_list = (await environment_variable_ref01_ent.list(environment_variable_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(environment_variable_ref01_list, { id: environment_variable_ref01_data.id })))


    // UPDATE
    const environment_variable_ref01_data_up0: any = {}
    environment_variable_ref01_data_up0.id = environment_variable_ref01_data.id

    const environment_variable_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-environment_variable_ref01_' + setup.now }
    ;(environment_variable_ref01_data_up0 as any)[environment_variable_ref01_markdef_up0.name] = environment_variable_ref01_markdef_up0.value

    const environment_variable_ref01_resdata_up0 = (await environment_variable_ref01_ent.update(environment_variable_ref01_data_up0)).data()
    assert(environment_variable_ref01_resdata_up0.id === environment_variable_ref01_data_up0.id)

    assert((environment_variable_ref01_resdata_up0 as any)[environment_variable_ref01_markdef_up0.name] === environment_variable_ref01_markdef_up0.value)


    // LOAD
    const environment_variable_ref01_match_dt0: any = {}
    environment_variable_ref01_match_dt0.id = environment_variable_ref01_data.id
    const environment_variable_ref01_data_dt0 = (await environment_variable_ref01_ent.load(environment_variable_ref01_match_dt0)).data()
    assert(environment_variable_ref01_data_dt0.id === environment_variable_ref01_data.id)


    // REMOVE
    const environment_variable_ref01_match_rm0: any = { id: environment_variable_ref01_data.id }
    await environment_variable_ref01_ent.remove(environment_variable_ref01_match_rm0)
  

    // LIST
    const environment_variable_ref01_match_rt0: any = {}

    const environment_variable_ref01_list_rt0 = (await environment_variable_ref01_ent.list(environment_variable_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(environment_variable_ref01_list_rt0, { id: environment_variable_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/environment_variable/EnvironmentVariableTestData.json')

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
    ['environment_variable01','environment_variable02','environment_variable03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_ENVIRONMENT_VARIABLE_ENTID']
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
  
