

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


describe('ChannelConnectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ChannelConnection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'channel_connection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth":{"a":true,"h":"Auth","n":"auth","r":true,"t":"`$OBJECT`","key$":"auth","index$":0},"channel":{"a":true,"h":"Channel","n":"channel","r":true,"sh":"The channel type (email, sms, push, chat, etc.).","t":"`$STRING`","key$":"channel","index$":1},"connectionMode":{"a":true,"h":"Connection Mode","n":"connectionMode","r":false,"sh":"Connection mode that determines how the channel connection is scoped.","t":"`$STRING`","key$":"connectionMode","index$":2},"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":1},"key$":"context","index$":3},"contextKeys":{"a":true,"h":"Context Keys","n":"contextKeys","r":true,"sh":"The context of the channel connection","t":"`$ARRAY`","key$":"contextKeys","index$":4},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The timestamp indicating when the channel endpoint was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"identifier":{"a":true,"h":"Identifier","n":"identifier","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The unique identifier of the channel endpoint.","t":"`$STRING`","key$":"identifier","index$":7},"integrationIdentifier":{"a":true,"h":"Integration Identifier","n":"integrationIdentifier","r":true,"sh":"The identifier of the integration to use for this channel endpoint.","t":"`$STRING`","key$":"integrationIdentifier","index$":8},"providerId":{"a":true,"h":"Provider Id","n":"providerId","r":true,"sh":"The provider identifier (e.g., sendgrid, twilio, slack, etc.).","t":"`$STRING`","key$":"providerId","index$":9},"subscriberId":{"a":true,"h":"Subscriber Id","n":"subscriberId","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The subscriber ID to which the channel connection is linked","t":"`$STRING`","key$":"subscriberId","index$":10},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":11},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"t":"`$OBJECT`","key$":"workspace","index$":12}},"id":{"field":"id","name":"id"},"name":"channel_connection","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/channel-connections","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/channel-connections","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"channel-connections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/channel-connections","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"chat","k":"query","n":"channel","or":"channel","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"shared","k":"query","n":"connection_mode","or":"connectionMode","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":["tenant:org-123","region:us-east-1"],"k":"query","n":"context_key","or":"contextKeys","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"include_cursor","or":"includeCursor","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":"slack-prod","k":"query","n":"integration_identifier","or":"integrationIdentifier","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"order_by","or":"orderBy","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"order_direction","or":"orderDirection","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"slack","k":"query","n":"provider_id","or":"providerId","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"subscriber-123","k":"query","n":"subscriber_id","or":"subscriberId","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/v1/channel-connections","q":{"exist":["after","before","channel","connection_mode","context_key","idempotency_key","include_cursor","integration_identifier","limit","order_by","order_direction","provider_id","subscriber_id"]},"r":{},"s":[{"lit":"v1"},{"lit":"channel-connections"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/channel-connections/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/channel-connections/{identifier}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"channel-connections"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/channel-connections/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/channel-connections/{identifier}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"channel-connections"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/channel-connections/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/channel-connections/{identifier}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"channel-connections"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"channel_connection","name__orig":"channel_connection","Name":"ChannelConnection","name_":"channel_connection","name-":"channel-connection","NAME":"CHANNEL_CONNECTION","index$":5}, {"active":true,"entity":"channel_connection","key$":"BasicChannelConnectionFlow","kind":"basic","name":"BasicChannelConnectionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"channel_connection_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"channel_connection_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"channel_connection_ref01","srcdatavar":"channel_connection_ref01_data","suffix":"_up0","textfield":"channel"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-channel_connection_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"channel_connection_ref01","srcdatavar":"channel_connection_ref01_data","suffix":"_dt0"},"m":{"id":"channel_connection01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-channel_connection_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"channel_connection_ref01","suffix":"_rm0"},"m":{"id":"channel_connection01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"channel_connection_ref01"}}],"index$":5}]}, 'ChannelConnection', {"POST /v1/channel-connections":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"identifier":{"type":"string","description":"The unique identifier for the channel connection. If not provided, one will be generated automatically.","example":"slack-prod-user123-abc4","key$":"identifier"},"subscriberId":{"type":"string","description":"The subscriber ID to link the channel connection to","example":"subscriber-123","key$":"subscriberId"},"context":{"type":"object","additionalProperties":{"oneOf":[{"type":"string","description":"Simple context id","example":"org-acme"},{"type":"object","description":"Rich context object with id and optional data","properties":{},"required":[]}]},"key$":"context"},"connectionMode":{"type":"string","description":"Connection mode that determines how the channel connection is scoped. Use \"subscriber\" (default) to associate the connection with a specific subscriber. Use \"shared\" to associate the connection with a context instead of a subscriber — subscriberId will not be stored on the connection.","enum":["subscriber","shared"],"example":"shared","key$":"connectionMode"},"integrationIdentifier":{"type":"string","description":"The identifier of the integration to use for this channel connection.","example":"slack-prod","key$":"integrationIdentifier"},"workspace":{"type":"object","properties":{"id":{"example":"T123456","type":"string"},"name":{"example":"Acme HQ","type":"string"},"botUserId":{"example":"U0123456789","type":"string"}},"required":["id"],"x-ref":"#/components/schemas/WorkspaceDto","key$":"workspace"},"auth":{"type":"object","properties":{"accessToken":{"example":"Workspace access token","type":"string"},"refreshToken":{"example":"Workspace refresh token","type":"string"},"expiresAt":{"example":"2026-06-15T12:00:00.000Z","type":"string"},"refreshTokenExpiresAt":{"example":"2026-09-15T12:00:00.000Z","type":"string"}},"required":["accessToken"],"x-ref":"#/components/schemas/AuthDto","key$":"auth"}},"required":["integrationIdentifier","workspace","auth"],"x-ref":"#/components/schemas/CreateChannelConnectionRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v1/channel-connections":{"protocol":"http","parameters":[{"name":"after","required":false,"in":"query","description":"Cursor for pagination indicating the starting point after which to fetch results.","schema":{"type":"string"},"index$":0},{"name":"before","required":false,"in":"query","description":"Cursor for pagination indicating the ending point before which to fetch results.","schema":{"type":"string"},"index$":1},{"name":"limit","required":false,"in":"query","description":"Limit the number of items to return (max 100)","example":10,"schema":{"maximum":100,"type":"number"},"index$":2},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":3},{"name":"orderBy","required":false,"in":"query","description":"Field to order by","schema":{"type":"string"},"index$":4},{"name":"includeCursor","required":false,"in":"query","description":"Include cursor item in response","schema":{"type":"boolean"},"index$":5},{"name":"subscriberId","required":false,"in":"query","description":"The subscriber ID to filter results by","example":"subscriber-123","schema":{"type":"string"},"index$":6},{"name":"connectionMode","required":false,"in":"query","description":"Scope results relative to the subscriber. `subscriber` returns only the subscriber-owned connections, `shared` returns only shared (workspace-level) connections. Omit to return both.","example":"shared","schema":{"enum":["subscriber","shared"],"type":"string"},"index$":7},{"name":"channel","required":false,"in":"query","description":"Filter by channel type (email, sms, push, chat, etc.).","example":"chat","schema":{"enum":["in_app","email","sms","chat","push","tool"],"type":"string"},"index$":8},{"name":"providerId","required":false,"in":"query","description":"Filter by provider identifier (e.g., sendgrid, twilio, slack, etc.).","example":"slack","schema":{"type":"string","description":"Provider ID of the job","enum":["anypost","emailjs","mailgun","mailjet","mandrill","nodemailer","postmark","sendgrid","sendinblue","ses","netcore","infobip-email","resend","plunk","mailersend","mailtrap","clickatell","outlook365","novu-email","sparkpost","email-webhook","braze","novu-email-agent","nexmo","plivo","sms77","sms-central","sns","telnyx","twilio","gupshup","firetext","infobip-sms","burst-sms","bulk-sms","isend-sms","forty-six-elks","kannel","maqsam","termii","africas-talking","novu-sms","sendchamp","generic-sms","clicksend","bandwidth","messagebird","simpletexting","azure-sms","ring-central","brevo-sms","eazy-sms","mobishastra","afro-message","unifonic","smsmode","imedia","sinch","isendpro-sms","cm-telecom","ruach-sms","fcm","apns","expo","one-signal","pushpad","push-webhook","pusher-beams","appio","novu","slack","discord","google-chat","msteams","webex-messaging","mattermost","ryver","zulip","grafana-on-call","getstream","rocket-chat","whatsapp-business","line","chat-webhook","novu-slack","telegram","sendblue","photon-imessage","novu-web-chat","anthropic","novu-anthropic","anthropic-aws","pagerduty","opsgenie","grafana","tool-webhook"],"x-ref":"#/components/schemas/ProvidersIdEnum"},"index$":9},{"name":"integrationIdentifier","required":false,"in":"query","description":"Filter by integration identifier.","example":"slack-prod","schema":{"type":"string"},"index$":10},{"name":"contextKeys","required":false,"in":"query","description":"Filter by exact context keys, order insensitive (format: \"type:id\")","example":["tenant:org-123","region:us-east-1"],"schema":{"type":"array","items":{"type":"string"}},"index$":11},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":12}]},"GET /v1/channel-connections/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","description":"The unique identifier of the channel connection","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v1/channel-connections/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","description":"The unique identifier of the channel connection","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PATCH /v1/channel-connections/{identifier}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"workspace":{"type":"object","properties":{"id":{"example":"T123456","type":"string"},"name":{"example":"Acme HQ","type":"string"},"botUserId":{"example":"U0123456789","type":"string"}},"required":["id"],"x-ref":"#/components/schemas/WorkspaceDto","key$":"workspace"},"auth":{"type":"object","properties":{"accessToken":{"example":"Workspace access token","type":"string"},"refreshToken":{"example":"Workspace refresh token","type":"string"},"expiresAt":{"example":"2026-06-15T12:00:00.000Z","type":"string"},"refreshTokenExpiresAt":{"example":"2026-09-15T12:00:00.000Z","type":"string"}},"required":["accessToken"],"x-ref":"#/components/schemas/AuthDto","key$":"auth"}},"required":["workspace","auth"],"x-ref":"#/components/schemas/UpdateChannelConnectionRequestDto","index$":1}}}},"parameters":[{"name":"identifier","required":true,"in":"path","description":"The unique identifier of the channel connection","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const channel_connection_ref01_ent = client.ChannelConnection()
    let channel_connection_ref01_data = setup.data.new.channel_connection['channel_connection_ref01']

    channel_connection_ref01_data = (await channel_connection_ref01_ent.create(channel_connection_ref01_data)).data()
    assert(null != channel_connection_ref01_data.id)


    // LIST
    const channel_connection_ref01_match: any = {}

    const channel_connection_ref01_list = (await channel_connection_ref01_ent.list(channel_connection_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(channel_connection_ref01_list, { id: channel_connection_ref01_data.id })))


    // UPDATE
    const channel_connection_ref01_data_up0: any = {}
    channel_connection_ref01_data_up0.id = channel_connection_ref01_data.id

    const channel_connection_ref01_markdef_up0 = { name: 'channel', value: 'Mark01-channel_connection_ref01_' + setup.now }
    ;(channel_connection_ref01_data_up0 as any)[channel_connection_ref01_markdef_up0.name] = channel_connection_ref01_markdef_up0.value

    const channel_connection_ref01_resdata_up0 = (await channel_connection_ref01_ent.update(channel_connection_ref01_data_up0)).data()
    assert(channel_connection_ref01_resdata_up0.id === channel_connection_ref01_data_up0.id)

    assert((channel_connection_ref01_resdata_up0 as any)[channel_connection_ref01_markdef_up0.name] === channel_connection_ref01_markdef_up0.value)


    // LOAD
    const channel_connection_ref01_match_dt0: any = {}
    channel_connection_ref01_match_dt0.id = channel_connection_ref01_data.id
    const channel_connection_ref01_data_dt0 = (await channel_connection_ref01_ent.load(channel_connection_ref01_match_dt0)).data()
    assert(channel_connection_ref01_data_dt0.id === channel_connection_ref01_data.id)


    // REMOVE
    const channel_connection_ref01_match_rm0: any = { id: channel_connection_ref01_data.id }
    await channel_connection_ref01_ent.remove(channel_connection_ref01_match_rm0)
  

    // LIST
    const channel_connection_ref01_match_rt0: any = {}

    const channel_connection_ref01_list_rt0 = (await channel_connection_ref01_ent.list(channel_connection_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(channel_connection_ref01_list_rt0, { id: channel_connection_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/channel_connection/ChannelConnectionTestData.json')

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
    ['channel_connection01','channel_connection02','channel_connection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_CHANNEL_CONNECTION_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_CHANNEL_CONNECTION_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_CHANNEL_CONNECTION_ENTID']
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
  
