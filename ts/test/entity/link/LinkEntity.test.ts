

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


describe('LinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Link()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'link.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":1},"key$":"context","index$":0},"contextHash":{"a":true,"h":"Context Hash","n":"contextHash","r":false,"sh":"HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme).","t":"`$STRING`","key$":"contextHash","index$":1},"integrationIdentifier":{"a":true,"h":"Integration Identifier","n":"integrationIdentifier","r":true,"sh":"Integration identifier for the chat provider integration","t":"`$STRING`","key$":"integrationIdentifier","index$":2},"subscriberId":{"a":true,"h":"Subscriber Id","n":"subscriberId","r":true,"sh":"External subscriber identifier to link to their chat identity","t":"`$STRING`","key$":"subscriberId","index$":3}},"name":"link","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/integrations/channel-endpoints/link","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/integrations/channel-endpoints/link","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"integrations"},{"lit":"channel-endpoints"},{"lit":"link"}],"t":{"req":"`reqdata`","res":"`body.providerMetadata`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"link","name__orig":"link","Name":"Link","name_":"link","name-":"link","NAME":"LINK","index$":29}, {"active":true,"entity":"link","key$":"BasicLinkFlow","kind":"basic","name":"BasicLinkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"link_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Link', {"POST /v1/integrations/channel-endpoints/link":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"integrationIdentifier":{"type":"string","description":"Integration identifier for the chat provider integration","example":"telegram-bot","key$":"integrationIdentifier"},"subscriberId":{"type":"string","description":"External subscriber identifier to link to their chat identity","example":"subscriber-123","key$":"subscriberId"},"context":{"type":"object","additionalProperties":{"oneOf":[{"type":"string","description":"Simple context id","example":"org-acme"},{"type":"object","description":"Rich context object with id and optional data","properties":{},"required":[]}]},"key$":"context"},"contextHash":{"type":"string","description":"HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme). Required when the integration has HMAC validation enabled.","example":"a1b2c3d4e5f6...","key$":"contextHash"}},"required":["integrationIdentifier","subscriberId"],"x-ref":"#/components/schemas/LinkChannelEndpointRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const link_ref01_ent = client.Link()
    let link_ref01_data = setup.data.new.link['link_ref01']

    link_ref01_data = (await link_ref01_ent.create(link_ref01_data)).data()
    assert(null != link_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/link/LinkTestData.json')

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
    ['link01','link02','link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LINK_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LINK_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LINK_ENTID']
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
  
