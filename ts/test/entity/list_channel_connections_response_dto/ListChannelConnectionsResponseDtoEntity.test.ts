

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


describe('ListChannelConnectionsResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.ListChannelConnectionsResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_channel_connections_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth":{"a":true,"h":"Auth","n":"auth","r":true,"t":"`$OBJECT`","key$":"auth","index$":0},"channel":{"a":true,"h":"Channel","n":"channel","r":true,"sh":"The channel type (email, sms, push, chat, etc.).","t":"`$STRING`","key$":"channel","index$":1},"contextKeys":{"a":true,"h":"Context Keys","n":"contextKeys","r":true,"sh":"The context of the channel connection","t":"`$ARRAY`","key$":"contextKeys","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The timestamp indicating when the channel endpoint was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":3},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":true,"sh":"The unique identifier of the channel endpoint.","t":"`$STRING`","key$":"identifier","index$":4},"integrationIdentifier":{"a":true,"h":"Integration Identifier","n":"integrationIdentifier","r":true,"sh":"The identifier of the integration to use for this channel endpoint.","t":"`$STRING`","key$":"integrationIdentifier","index$":5},"providerId":{"a":true,"h":"Provider Id","n":"providerId","r":true,"sh":"The provider identifier (e.g., sendgrid, twilio, slack, etc.).","t":"`$STRING`","key$":"providerId","index$":6},"subscriberId":{"a":true,"h":"Subscriber Id","n":"subscriberId","r":true,"sh":"The subscriber ID to which the channel connection is linked","t":"`$STRING`","key$":"subscriberId","index$":7},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":8},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"t":"`$OBJECT`","key$":"workspace","index$":9}},"name":"list_channel_connections_response_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/channel-connections","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"chat","k":"query","n":"channel","or":"channel","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"shared","k":"query","n":"connection_mode","or":"connection_mode","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":["tenant:org-123","region:us-east-1"],"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"include_cursor","or":"include_cursor","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":"slack-prod","k":"query","n":"integration_identifier","or":"integration_identifier","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"slack","k":"query","n":"provider_id","or":"provider_id","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"subscriber-123","k":"query","n":"subscriber_id","or":"subscriber_id","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/v1/channel-connections","q":{"exist":["after","before","channel","connection_mode","context_key","idempotency_key","include_cursor","integration_identifier","limit","order_by","order_direction","provider_id","subscriber_id"]},"r":{},"s":[{"lit":"v1"},{"lit":"channel-connections"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_channel_connections_response_dto","name__orig":"list_channel_connections_response_dto","Name":"ListChannelConnectionsResponseDto","name_":"list_channel_connections_response_dto","name-":"list-channel-connections-response-dto","NAME":"LIST_CHANNEL_CONNECTIONS_RESPONSE_DTO","index$":32}, {"active":true,"entity":"list_channel_connections_response_dto","key$":"BasicListChannelConnectionsResponseDtoFlow","kind":"basic","name":"BasicListChannelConnectionsResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_channel_connections_response_dto_ref01"}}],"index$":0}]}, 'ListChannelConnectionsResponseDto', {"GET /v1/channel-connections":{"protocol":"http","parameters":[{"name":"after","required":false,"in":"query","description":"Cursor for pagination indicating the starting point after which to fetch results.","schema":{"type":"string"},"index$":0},{"name":"before","required":false,"in":"query","description":"Cursor for pagination indicating the ending point before which to fetch results.","schema":{"type":"string"},"index$":1},{"name":"limit","required":false,"in":"query","description":"Limit the number of items to return (max 100)","example":10,"schema":{"maximum":100,"type":"number"},"index$":2},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":3},{"name":"orderBy","required":false,"in":"query","description":"Field to order by","schema":{"type":"string"},"index$":4},{"name":"includeCursor","required":false,"in":"query","description":"Include cursor item in response","schema":{"type":"boolean"},"index$":5},{"name":"subscriberId","required":false,"in":"query","description":"The subscriber ID to filter results by","example":"subscriber-123","schema":{"type":"string"},"index$":6},{"name":"connectionMode","required":false,"in":"query","description":"Scope results relative to the subscriber. `subscriber` returns only the subscriber-owned connections, `shared` returns only shared (workspace-level) connections. Omit to return both.","example":"shared","schema":{"enum":["subscriber","shared"],"type":"string"},"index$":7},{"name":"channel","required":false,"in":"query","description":"Filter by channel type (email, sms, push, chat, etc.).","example":"chat","schema":{"enum":["in_app","email","sms","chat","push","tool"],"type":"string"},"index$":8},{"name":"providerId","required":false,"in":"query","description":"Filter by provider identifier (e.g., sendgrid, twilio, slack, etc.).","example":"slack","schema":{"type":"string","description":"Provider ID of the job","enum":["anypost","emailjs","mailgun","mailjet","mandrill","nodemailer","postmark","sendgrid","sendinblue","ses","netcore","infobip-email","resend","plunk","mailersend","mailtrap","clickatell","outlook365","novu-email","sparkpost","email-webhook","braze","novu-email-agent","nexmo","plivo","sms77","sms-central","sns","telnyx","twilio","gupshup","firetext","infobip-sms","burst-sms","bulk-sms","isend-sms","forty-six-elks","kannel","maqsam","termii","africas-talking","novu-sms","sendchamp","generic-sms","clicksend","bandwidth","messagebird","simpletexting","azure-sms","ring-central","brevo-sms","eazy-sms","mobishastra","afro-message","unifonic","smsmode","imedia","sinch","isendpro-sms","cm-telecom","ruach-sms","fcm","apns","expo","one-signal","pushpad","push-webhook","pusher-beams","appio","novu","slack","discord","google-chat","msteams","webex-messaging","mattermost","ryver","zulip","grafana-on-call","getstream","rocket-chat","whatsapp-business","line","chat-webhook","novu-slack","telegram","sendblue","photon-imessage","novu-web-chat","anthropic","novu-anthropic","anthropic-aws","pagerduty","opsgenie","grafana","tool-webhook"],"x-ref":"#/components/schemas/ProvidersIdEnum"},"index$":9},{"name":"integrationIdentifier","required":false,"in":"query","description":"Filter by integration identifier.","example":"slack-prod","schema":{"type":"string"},"index$":10},{"name":"contextKeys","required":false,"in":"query","description":"Filter by exact context keys, order insensitive (format: \"type:id\")","example":["tenant:org-123","region:us-east-1"],"schema":{"type":"array","items":{"type":"string"}},"index$":11},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":12}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_channel_connections_response_dto_ref01_data = Object.values(setup.data.existing.list_channel_connections_response_dto)[0] as any

    // LIST
    const list_channel_connections_response_dto_ref01_ent = client.ListChannelConnectionsResponseDto()
    const list_channel_connections_response_dto_ref01_match: any = {}

    const list_channel_connections_response_dto_ref01_list = (await list_channel_connections_response_dto_ref01_ent.list(list_channel_connections_response_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_channel_connections_response_dto/ListChannelConnectionsResponseDtoTestData.json')

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
    ['list_channel_connections_response_dto01','list_channel_connections_response_dto02','list_channel_connections_response_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_LIST_CHANNEL_CONNECTIONS_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_LIST_CHANNEL_CONNECTIONS_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_LIST_CHANNEL_CONNECTIONS_RESPONSE_DTO_ENTID']
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
  
