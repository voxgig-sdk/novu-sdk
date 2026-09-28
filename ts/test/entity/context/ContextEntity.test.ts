

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


describe('ContextEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Context()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'context.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bridgeUrl":{"a":true,"h":"Bridge Url","n":"bridgeUrl","r":false,"sh":"Optional bridge URL override for agent connect.","t":"`$STRING`","key$":"bridgeUrl","index$":0},"data":{"a":true,"h":"Data","n":"data","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"Optional custom data to associate with this context.","t":"`$OBJECT`","key$":"data","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this context.","t":"`$STRING`","key$":"id","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Context type (e.g., tenant, app, workspace).","t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","from":{"id":"id","type":"type"},"name":"id","parts":["type","id"],"sep":"/"},"name":"context","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/contexts","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/contexts","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"contexts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/contexts/{type}/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"type","or":"type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/contexts/{type}/{id}","q":{"exist":["id","idempotency_key","type"]},"r":{},"s":[{"lit":"v2"},{"lit":"contexts"},{"var":"type"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/contexts/{type}/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"type","or":"type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v2/contexts/{type}/{id}","q":{"exist":["id","idempotency_key","type"]},"r":{},"s":[{"lit":"v2"},{"lit":"contexts"},{"var":"type"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v2/contexts/{type}/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"type","or":"type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/v2/contexts/{type}/{id}","q":{"exist":["id","idempotency_key","type"]},"r":{},"s":[{"lit":"v2"},{"lit":"contexts"},{"var":"type"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"context","name__orig":"context","Name":"Context","name_":"context","name-":"context","NAME":"CONTEXT","index$":8}, {"active":true,"entity":"context","key$":"BasicContextFlow","kind":"basic","name":"BasicContextFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"context_ref01"},"m":{"type":"type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"type":"type01"},"i":{"ref":"context_ref01","srcdatavar":"context_ref01_data","suffix":"_up0","textfield":"bridgeUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-context_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"context_ref01","srcdatavar":"context_ref01_data","suffix":"_dt0"},"m":{"id":"context01","type":"type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-context_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"context_ref01","suffix":"_rm0"},"m":{"id":"context01","type":"type01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Context', {"POST /v2/contexts":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"type":{"type":"string","minLength":1,"maxLength":100,"pattern":"^[a-zA-Z0-9_-]+$","description":"Context type (e.g., tenant, app, workspace). Must be lowercase alphanumeric with optional separators.","example":"tenant","key$":"type"},"id":{"type":"string","minLength":1,"maxLength":100,"pattern":"^[a-zA-Z0-9_-]+$","description":"Unique identifier for this context. Must be lowercase alphanumeric with optional separators.","example":"org-acme","key$":"id"},"data":{"type":"object","description":"Optional custom data to associate with this context.","example":{"tenantName":"Acme Corp","region":"us-east-1","settings":{"theme":"dark"}},"additionalProperties":true,"key$":"data"},"bridgeUrl":{"type":"string","description":"Optional bridge URL override for agent connect. When an inbound agent turn resolves this context, its bridge call is routed here instead of the agent default bridge URL. Must be a publicly reachable URL.","example":"https://tenant-acme.example.com/api/novu","key$":"bridgeUrl"}},"required":["type","id"],"x-ref":"#/components/schemas/CreateContextRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v2/contexts/{type}/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Context ID","schema":{"type":"string"},"index$":0},{"name":"type","required":true,"in":"path","description":"Context type","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"DELETE /v2/contexts/{type}/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Context ID","schema":{"type":"string"},"index$":0},{"name":"type","required":true,"in":"path","description":"Context type","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"PATCH /v2/contexts/{type}/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object","description":"Custom data to associate with this context. Replaces existing data.","example":{"tenantName":"Acme Corp","region":"us-east-1","settings":{"theme":"dark"}},"additionalProperties":true,"key$":"data"},"bridgeUrl":{"type":"string","nullable":true,"description":"Optional bridge URL override for agent connect. When an inbound agent turn resolves this context, its bridge call is routed here instead of the agent default bridge URL. Must be a publicly reachable URL. Pass null to clear an existing override.","example":"https://tenant-acme.example.com/api/novu","key$":"bridgeUrl"}},"required":["data"],"x-ref":"#/components/schemas/UpdateContextRequestDto","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"Context ID","schema":{"type":"string"},"index$":0},{"name":"type","required":true,"in":"path","description":"Context type","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const context_ref01_ent = client.Context()
    let context_ref01_data = setup.data.new.context['context_ref01']
    context_ref01_data['type'] = setup.idmap['type01']

    context_ref01_data = (await context_ref01_ent.create(context_ref01_data)).data()
    assert(null != context_ref01_data.id)


    // UPDATE
    const context_ref01_data_up0: any = {}
    context_ref01_data_up0.id = context_ref01_data.id
    context_ref01_data_up0 ['type'] = setup.idmap['type']

    const context_ref01_markdef_up0 = { name: 'bridgeUrl', value: 'Mark01-context_ref01_' + setup.now }
    ;(context_ref01_data_up0 as any)[context_ref01_markdef_up0.name] = context_ref01_markdef_up0.value

    const context_ref01_resdata_up0 = (await context_ref01_ent.update(context_ref01_data_up0)).data()
    assert(context_ref01_resdata_up0.id === context_ref01_data_up0.id)

    assert((context_ref01_resdata_up0 as any)[context_ref01_markdef_up0.name] === context_ref01_markdef_up0.value)


    // LOAD
    const context_ref01_match_dt0: any = {}
    context_ref01_match_dt0.id = context_ref01_data.id
    const context_ref01_data_dt0 = (await context_ref01_ent.load(context_ref01_match_dt0)).data()
    assert(context_ref01_data_dt0.id === context_ref01_data.id)


    // REMOVE
    const context_ref01_match_rm0: any = { id: context_ref01_data.id }
    await context_ref01_ent.remove(context_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/context/ContextTestData.json')

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
    ['context01','context02','context03','type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_CONTEXT_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_CONTEXT_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_CONTEXT_ENTID']
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
  
