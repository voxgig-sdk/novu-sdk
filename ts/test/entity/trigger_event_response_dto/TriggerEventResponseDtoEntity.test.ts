

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


describe('TriggerEventResponseDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.TriggerEventResponseDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trigger_event_response_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acknowledged":{"a":true,"h":"Acknowledged","n":"acknowledged","r":true,"sh":"Indicates whether the trigger was acknowledged or not","t":"`$BOOLEAN`","key$":"acknowledged","index$":0},"activityFeedLink":{"a":true,"h":"Activity Feed Link","n":"activityFeedLink","r":false,"sh":"Link to the activity feed for this trigger event","t":"`$STRING`","key$":"activityFeedLink","index$":1},"actor":{"a":true,"h":"Actor","n":"actor","r":false,"sh":"It is used to display the Avatar of the provided actor's subscriber id or actor object.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"actor","index$":2},"agentId":{"a":true,"h":"Agent Id","n":"agentId","r":false,"sh":"Override the workflow-assigned agent for this trigger using the public agent identifier.","t":"`$STRING`","key$":"agentId","index$":3},"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":1},"key$":"context","index$":4},"error":{"a":true,"h":"Error","n":"error","r":false,"sh":"In case of an error, this field will contain the error message(s)","t":"`$ARRAY`","key$":"error","index$":5},"events":{"a":true,"h":"Events","n":"events","r":true,"t":"`$ARRAY`","union":{"branches":4,"count":5,"depth":6},"key$":"events","index$":6},"jobData":{"a":true,"h":"Job Data","n":"jobData","r":false,"t":"`$OBJECT`","key$":"jobData","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The trigger identifier associated for the template you wish to send.","t":"`$STRING`","key$":"name","index$":8},"overrides":{"a":true,"h":"Overrides","n":"overrides","r":false,"sh":"This could be used to override provider specific configurations","t":"`$ANY`","key$":"overrides","index$":9},"payload":{"a":true,"h":"Payload","n":"payload","r":true,"sh":"The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it.","t":"`$OBJECT`","key$":"payload","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the trigger","t":"`$STRING`","key$":"status","index$":11},"tenant":{"a":true,"h":"Tenant","n":"tenant","r":false,"sh":"It is used to specify a tenant context during trigger event.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"tenant","index$":12},"transactionId":{"a":true,"h":"Transaction Id","n":"transactionId","r":false,"sh":"The returned transaction ID of the trigger","t":"`$STRING`","key$":"transactionId","index$":13}},"name":"trigger_event_response_dto","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/events/trigger/broadcast","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/events/trigger/broadcast","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"events"},{"lit":"trigger"},{"lit":"broadcast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/events/trigger/bulk","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/events/trigger/bulk","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"events"},{"lit":"trigger"},{"lit":"bulk"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"trigger_event_response_dto","name__orig":"trigger_event_response_dto","Name":"TriggerEventResponseDto","name_":"trigger_event_response_dto","name-":"trigger-event-response-dto","NAME":"TRIGGER_EVENT_RESPONSE_DTO","index$":52}, {"active":true,"entity":"trigger_event_response_dto","key$":"BasicTriggerEventResponseDtoFlow","kind":"basic","name":"BasicTriggerEventResponseDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"trigger_event_response_dto_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'TriggerEventResponseDto', {"POST /v1/events/trigger/broadcast":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The trigger identifier associated for the template you wish to send. This identifier can be found on the template page.","key$":"name"},"payload":{"type":"object","example":{"comment_id":"string","post":{"text":"string"}},"description":"The payload object is used to pass additional information that \n    could be used to render the template, or perform routing rules based on it. \n      For In-App channel, payload data are also available in <Inbox />","additionalProperties":true,"key$":"payload"},"overrides":{"description":"This could be used to override provider specific configurations","example":{"fcm":{"data":{"key":"value"}}},"additionalProperties":{"type":"object","additionalProperties":true},"allOf":[{"type":"object","properties":{"steps":{},"channels":{},"providers":{},"email":{},"push":{},"sms":{},"chat":{},"layoutIdentifier":{},"severity":{}},"x-ref":"#/components/schemas/TriggerOverrides"}],"key$":"overrides"},"agentId":{"type":"string","nullable":true,"description":"Override the workflow-assigned agent for this trigger using the public agent identifier. Omit to use the workflow default; pass null to disable agent routing for this execution.","example":"support-agent","key$":"agentId"},"transactionId":{"type":"string","description":"A unique identifier for this transaction, we will generated a UUID if not provided.","key$":"transactionId"},"actor":{"description":"It is used to display the Avatar of the provided actor's subscriber id or actor object.\n    If a new actor object is provided, we will create a new subscriber in our system\n    ","oneOf":[{"type":"string","description":"Unique identifier of a subscriber in your systems"},{"type":"object","properties":{"firstName":{},"lastName":{},"email":{},"phone":{},"avatar":{},"locale":{},"timezone":{},"data":{},"subscriberId":{},"channels":{}},"required":["subscriberId"],"x-ref":"#/components/schemas/SubscriberPayloadDto"}],"key$":"actor"},"tenant":{"description":"It is used to specify a tenant context during trigger event.\n    If a new tenant object is provided, we will create a new tenant.\n    ","oneOf":[{"type":"string","description":"Unique identifier of a tenant in your system"},{"type":"object","properties":{"identifier":{},"name":{},"data":{}},"x-ref":"#/components/schemas/TenantPayloadDto"}],"key$":"tenant"},"context":{"type":"object","additionalProperties":{"oneOf":[{"type":"string","description":"Simple context id","example":"org-acme"},{"type":"object","description":"Rich context object with id and optional data","properties":{},"required":[]}]},"key$":"context"}},"required":["name","payload"],"x-ref":"#/components/schemas/TriggerEventToAllRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"POST /v1/events/trigger/bulk":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"events":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string","description":"The trigger identifier of the workflow you wish to send. This identifier can be found on the workflow page.","example":"workflow_identifier","x-speakeasy-name-override":"workflowId","key$":"name"},"payload":{"type":"object","description":"The payload object is used to pass additional custom information that could be \n    used to render the workflow, or perform routing rules based on it. \n      This data will also be available when fetching the notifications feed from the API to display certain parts of the UI.","additionalProperties":true,"example":{},"key$":"payload"},"bridgeUrl":{"type":"string","description":"Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application. Useful during local development when multiple engineers share an organization: set this to your personal tunnel URL from `npx novu@latest dev` (for example via NOVU_BRIDGE_URL) so app-fired triggers hit your machine instead of the environment's synced Bridge URL. Must be a publicly reachable https URL — private or localhost addresses are rejected.","example":"https://your-tunnel.novu.co/api/novu","key$":"bridgeUrl"},"overrides":{"description":"This could be used to override provider specific configurations","example":{},"allOf":[],"key$":"overrides"},"agentId":{"type":"string","nullable":true,"description":"Override the workflow-assigned agent for this trigger using the public agent identifier. Omit to use the workflow default; pass null to disable agent routing for this execution.","example":"support-agent","key$":"agentId"},"to":{"description":"The recipients list of people who will receive the notification. Maximum number of recipients can be 100.","oneOf":[],"key$":"to"},"transactionId":{"type":"string","description":"A unique identifier for deduplication. If the same **transactionId** is sent again, \n      the trigger is ignored. Useful to prevent duplicate notifications. The retention period depends on your billing tier.","key$":"transactionId"},"actor":{"description":"It is used to display the Avatar of the provided actor's subscriber id or actor object.\n    If a new actor object is provided, we will create a new subscriber in our system","oneOf":[],"key$":"actor"},"tenant":{"description":"It is used to specify a tenant context during trigger event.\n    Existing tenants will be updated with the provided details.","oneOf":[],"key$":"tenant"},"context":{"type":"object","additionalProperties":{},"key$":"context"}},"required":["name","to"],"x-ref":"#/components/schemas/TriggerEventRequestDto"},"key$":"events"}},"required":["events"],"x-ref":"#/components/schemas/BulkTriggerEventDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const trigger_event_response_dto_ref01_ent = client.TriggerEventResponseDto()
    let trigger_event_response_dto_ref01_data = setup.data.new.trigger_event_response_dto['trigger_event_response_dto_ref01']

    trigger_event_response_dto_ref01_data = (await trigger_event_response_dto_ref01_ent.create(trigger_event_response_dto_ref01_data)).data()
    assert(null != trigger_event_response_dto_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/trigger_event_response_dto/TriggerEventResponseDtoTestData.json')

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
    ['trigger_event_response_dto01','trigger_event_response_dto02','trigger_event_response_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_TRIGGER_EVENT_RESPONSE_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_TRIGGER_EVENT_RESPONSE_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_TRIGGER_EVENT_RESPONSE_DTO_ENTID']
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
  
