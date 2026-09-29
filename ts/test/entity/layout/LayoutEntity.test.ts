

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


describe('LayoutEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Layout()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'layout.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"controlValues":{"a":true,"h":"Control Values","n":"controlValues","r":false,"sh":"Control values for the layout.","t":"`$ANY`","key$":"controlValues","index$":0},"controls":{"a":true,"h":"Controls","n":"controls","r":true,"sh":"Controls metadata for the layout","t":"`$ANY`","union":{"branches":5,"count":2,"depth":14},"key$":"controls","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"Creation timestamp","t":"`$STRING`","key$":"createdAt","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique internal identifier of the layout","t":"`$STRING`","key$":"id","index$":3},"isDefault":{"a":true,"h":"Is Default","n":"isDefault","r":true,"sh":"Whether the layout is the default layout","t":"`$BOOLEAN`","key$":"isDefault","index$":4},"isTranslationEnabled":{"a":true,"h":"Is Translation Enabled","n":"isTranslationEnabled","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the layout translations are enabled","t":"`$BOOLEAN`","key$":"isTranslationEnabled","index$":5},"layoutId":{"a":true,"h":"Layout Id","n":"layoutId","r":true,"sh":"Unique identifier for the layout","t":"`$STRING`","key$":"layoutId","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the layout","t":"`$STRING`","key$":"name","index$":7},"origin":{"a":true,"h":"Origin","n":"origin","r":true,"sh":"Workflow origin","t":"`$STRING`","key$":"origin","index$":8},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Slug of the layout","t":"`$STRING`","key$":"slug","index$":9},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"Source of layout creation","t":"`$STRING`","key$":"source","index$":10},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Resource type","t":"`$STRING`","key$":"type","index$":11},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"Last updated timestamp","t":"`$STRING`","key$":"updatedAt","index$":12},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"sh":"User who last updated the layout","t":"`$ANY`","key$":"updatedBy","index$":13},"variables":{"a":true,"h":"Variables","n":"variables","r":false,"sh":"The variables JSON Schema for the layout","t":"`$OBJECT`","key$":"variables","index$":14}},"id":{"field":"id","name":"id"},"name":"layout","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/layouts/{layoutId}/preview","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"layoutId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/layouts/{layoutId}/preview","q":{"$action":"preview","exist":["id","idempotency_key"]},"r":{"param":{"layoutId":"id"}},"s":[{"lit":"v2"},{"lit":"layouts"},{"var":"id"},{"lit":"preview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v2/layouts","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/layouts","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"layouts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/layouts","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"order_by","or":"orderBy","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"order_direction","or":"orderDirection","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v2/layouts","q":{"exist":["idempotency_key","limit","offset","order_by","order_direction","query"]},"r":{},"s":[{"lit":"v2"},{"lit":"layouts"}],"t":{"req":"`reqdata`","res":"`body.layouts`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/layouts/{layoutId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"layoutId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/layouts/{layoutId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"layoutId":"id"}},"s":[{"lit":"v2"},{"lit":"layouts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/layouts/{layoutId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"layoutId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/layouts/{layoutId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"layoutId":"id"}},"s":[{"lit":"v2"},{"lit":"layouts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v2/layouts/{layoutId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"layoutId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/layouts/{layoutId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"layoutId":"id"}},"s":[{"lit":"v2"},{"lit":"layouts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"layout","name__orig":"layout","Name":"Layout","name_":"layout","name-":"layout","NAME":"LAYOUT","index$":27}, {"active":true,"entity":"layout","key$":"BasicLayoutFlow","kind":"basic","name":"BasicLayoutFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"layout_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"layout_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"layout_ref01","srcdatavar":"layout_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-layout_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"layout_ref01","srcdatavar":"layout_ref01_data","suffix":"_dt0"},"m":{"id":"layout01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-layout_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"layout_ref01","suffix":"_rm0"},"m":{"id":"layout01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"layout_ref01"}}],"index$":5}]}, 'Layout', {"POST /v2/layouts/{layoutId}/preview":{"protocol":"http","requestBody":{"required":true,"description":"Layout preview generation details","content":{"application/json":{"schema":{"type":"object","properties":{"controlValues":{"type":"object","description":"Optional control values for layout preview","additionalProperties":true},"previewPayload":{"description":"Optional payload for layout preview","allOf":[{"type":"object","properties":{"subscriber":{}},"x-ref":"#/components/schemas/LayoutPreviewPayloadDto"}]}},"x-ref":"#/components/schemas/LayoutPreviewRequestDto"}}}},"parameters":[{"name":"layoutId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"POST /v2/layouts":{"protocol":"http","requestBody":{"required":true,"description":"Layout creation details","content":{"application/json":{"schema":{"type":"object","properties":{"layoutId":{"type":"string","description":"Unique identifier for the layout","key$":"layoutId"},"name":{"type":"string","description":"Name of the layout","key$":"name"},"isTranslationEnabled":{"type":"boolean","description":"Enable or disable translations for this layout","default":false,"key$":"isTranslationEnabled"},"__source":{"type":"string","description":"Source of layout creation","default":"dashboard","enum":["dashboard"],"x-ref":"#/components/schemas/LayoutCreationSourceEnum","key$":"__source"}},"required":["layoutId","name"],"x-ref":"#/components/schemas/CreateLayoutDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v2/layouts":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of items to return per page","example":10,"schema":{"minimum":1,"maximum":100,"type":"number"},"index$":0},{"name":"offset","required":false,"in":"query","description":"Number of items to skip before starting to return results","example":0,"schema":{"minimum":0,"type":"number"},"index$":1},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"type":"string","enum":["ASC","DESC"],"x-ref":"#/components/schemas/DirectionEnum"},"index$":2},{"name":"orderBy","required":false,"in":"query","description":"Field to sort the results by","schema":{"type":"string","enum":["createdAt","updatedAt","name"],"x-ref":"#/components/schemas/LayoutResponseDtoSortField"},"index$":3},{"name":"query","required":false,"in":"query","description":"Search query to filter layouts","schema":{"type":"string"},"index$":4},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":5}]},"GET /v2/layouts/{layoutId}":{"protocol":"http","parameters":[{"name":"layoutId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v2/layouts/{layoutId}":{"protocol":"http","parameters":[{"name":"layoutId","required":true,"in":"path","description":"The unique identifier of the layout","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PUT /v2/layouts/{layoutId}":{"protocol":"http","requestBody":{"required":true,"description":"Layout update details","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of the layout","key$":"name"},"isTranslationEnabled":{"type":"boolean","description":"Enable or disable translations for this layout","default":false,"key$":"isTranslationEnabled"},"controlValues":{"nullable":true,"description":"Control values for the layout. Omit to leave unchanged, or set to null to clear stored control values.","allOf":[{"type":"object","properties":{"email":{}},"x-ref":"#/components/schemas/LayoutControlValuesDto"}],"key$":"controlValues"}},"required":["name"],"x-ref":"#/components/schemas/UpdateLayoutDto","index$":1}}}},"parameters":[{"name":"layoutId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const layout_ref01_ent = client.Layout()
    let layout_ref01_data = setup.data.new.layout['layout_ref01']

    layout_ref01_data = (await layout_ref01_ent.create(layout_ref01_data)).data()
    assert(null != layout_ref01_data.id)


    // LIST
    const layout_ref01_match: any = {}

    const layout_ref01_list = (await layout_ref01_ent.list(layout_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(layout_ref01_list, { id: layout_ref01_data.id })))


    // UPDATE
    const layout_ref01_data_up0: any = {}
    layout_ref01_data_up0.id = layout_ref01_data.id

    const layout_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-layout_ref01_' + setup.now }
    ;(layout_ref01_data_up0 as any)[layout_ref01_markdef_up0.name] = layout_ref01_markdef_up0.value

    const layout_ref01_resdata_up0 = (await layout_ref01_ent.update(layout_ref01_data_up0)).data()
    assert(layout_ref01_resdata_up0.id === layout_ref01_data_up0.id)

    assert((layout_ref01_resdata_up0 as any)[layout_ref01_markdef_up0.name] === layout_ref01_markdef_up0.value)


    // LOAD
    const layout_ref01_match_dt0: any = {}
    layout_ref01_match_dt0.id = layout_ref01_data.id
    const layout_ref01_data_dt0 = (await layout_ref01_ent.load(layout_ref01_match_dt0)).data()
    assert(layout_ref01_data_dt0.id === layout_ref01_data.id)


    // REMOVE
    const layout_ref01_match_rm0: any = { id: layout_ref01_data.id }
    await layout_ref01_ent.remove(layout_ref01_match_rm0)
  

    // LIST
    const layout_ref01_match_rt0: any = {}

    const layout_ref01_list_rt0 = (await layout_ref01_ent.list(layout_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(layout_ref01_list_rt0, { id: layout_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/layout/LayoutTestData.json')

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
    ['layout01','layout02','layout03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LAYOUT_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LAYOUT_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LAYOUT_ENTID']
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
  
