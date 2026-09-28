

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


describe('InboxNotificationDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.InboxNotificationDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'inbox_notification_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"ISO timestamp when the notification was archived","t":"`$STRING`","key$":"archivedAt","index$":0},"avatar":{"a":true,"h":"Avatar","n":"avatar","r":false,"sh":"Avatar URL for the notification","t":"`$STRING`","key$":"avatar","index$":1},"body":{"a":true,"h":"Body","n":"body","r":true,"sh":"Body content of the notification","t":"`$STRING`","key$":"body","index$":2},"channelType":{"a":true,"h":"Channel Type","n":"channelType","r":true,"sh":"Channel the message was sent on","t":"`$STRING`","key$":"channelType","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"ISO timestamp when the notification was created","t":"`$STRING`","key$":"createdAt","index$":4},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Custom data payload of the notification","t":"`$OBJECT`","key$":"data","index$":5},"deliveredAt":{"a":true,"h":"Delivered At","n":"deliveredAt","r":false,"sh":"Timestamps when the notification was delivered","t":"`$ARRAY`","key$":"deliveredAt","index$":6},"firstSeenAt":{"a":true,"h":"First Seen At","n":"firstSeenAt","r":false,"sh":"ISO timestamp when the notification was first seen","t":"`$STRING`","key$":"firstSeenAt","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the notification","t":"`$STRING`","key$":"id","index$":8},"isArchived":{"a":true,"h":"Is Archived","n":"isArchived","r":true,"sh":"Whether the notification has been archived","t":"`$BOOLEAN`","key$":"isArchived","index$":9},"isRead":{"a":true,"h":"Is Read","n":"isRead","r":true,"sh":"Whether the notification has been read","t":"`$BOOLEAN`","key$":"isRead","index$":10},"isSeen":{"a":true,"h":"Is Seen","n":"isSeen","r":true,"sh":"Whether the notification has been seen","t":"`$BOOLEAN`","key$":"isSeen","index$":11},"isSnoozed":{"a":true,"h":"Is Snoozed","n":"isSnoozed","r":true,"sh":"Whether the notification is snoozed","t":"`$BOOLEAN`","key$":"isSnoozed","index$":12},"primaryAction":{"a":true,"h":"Primary Action","n":"primaryAction","r":false,"sh":"Primary action button for the notification","t":"`$ANY`","key$":"primaryAction","index$":13},"readAt":{"a":true,"h":"Read At","n":"readAt","r":false,"sh":"ISO timestamp when the notification was read","t":"`$STRING`","key$":"readAt","index$":14},"redirect":{"a":true,"h":"Redirect","n":"redirect","r":false,"sh":"Redirect configuration for the notification","t":"`$ANY`","key$":"redirect","index$":15},"secondaryAction":{"a":true,"h":"Secondary Action","n":"secondaryAction","r":false,"sh":"Secondary action button for the notification","t":"`$ANY`","key$":"secondaryAction","index$":16},"severity":{"a":true,"h":"Severity","n":"severity","r":true,"sh":"Workflow severity","t":"`$STRING`","key$":"severity","index$":17},"snoozeUntil":{"a":true,"fo":"date-time","h":"Snooze Until","n":"snoozeUntil","r":true,"sh":"The date and time until which the notification should be snoozed","t":"`$STRING`","key$":"snoozeUntil","index$":18},"snoozedUntil":{"a":true,"h":"Snoozed Until","n":"snoozedUntil","r":false,"sh":"ISO timestamp when the notification will be unsnoozed","t":"`$STRING`","key$":"snoozedUntil","index$":19},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"Subject of the notification","t":"`$STRING`","key$":"subject","index$":20},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags associated with the notification","t":"`$ARRAY`","key$":"tags","index$":21},"to":{"a":true,"h":"To","n":"to","r":true,"sh":"Subscriber this notification was sent to","t":"`$ANY`","key$":"to","index$":22},"transactionId":{"a":true,"h":"Transaction Id","n":"transactionId","r":true,"sh":"Transaction identifier of the notification","t":"`$STRING`","key$":"transactionId","index$":23},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":false,"sh":"Workflow associated with the notification","t":"`$ANY`","key$":"workflow","index$":24}},"id":{"field":"id","name":"id"},"name":"inbox_notification_dto","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"action_type","or":"action_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete","q":{"exist":["action_type","context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"actionType":"action_type","notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"actions"},{"var":"action_type"},{"lit":"complete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"action_type","or":"action_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert","q":{"exist":["action_type","context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"actionType":"action_type","notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"actions"},{"var":"action_type"},{"lit":"revert"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/archive","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/archive","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/read","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/read","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"snooze"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"unarchive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unread","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/unread","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"unread"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscriber_id","or":"subscriber_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"context_key","or":"context_key","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze","q":{"exist":["context_key","idempotency_key","notification_id","subscriber_id"]},"r":{"param":{"notificationId":"notification_id","subscriberId":"subscriber_id"}},"s":[{"lit":"v2"},{"lit":"subscribers"},{"var":"subscriber_id"},{"lit":"notifications"},{"var":"notification_id"},{"lit":"unsnooze"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.subscriber"],["$.main.kit.entity.subscriber"]]},"key$":"inbox_notification_dto","name__orig":"inbox_notification_dto","Name":"InboxNotificationDto","name_":"inbox_notification_dto","name-":"inbox-notification-dto","NAME":"INBOX_NOTIFICATION_DTO","index$":24}, {"active":true,"entity":"inbox_notification_dto","key$":"BasicInboxNotificationDtoFlow","kind":"basic","name":"BasicInboxNotificationDtoFlow","param":{},"step":[{"a":true,"d":{"subscriber_id":"subscriber01"},"i":{"ref":"inbox_notification_dto_ref01","srcdatavar":"inbox_notification_dto_ref01_data","suffix":"_up0","textfield":"archivedAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-inbox_notification_dto_ref01"}}],"v":[],"index$":0}]}, 'InboxNotificationDto', {"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"actionType","required":true,"in":"path","description":"The type of action (primary or secondary)","schema":{"enum":["primary","secondary"],"type":"string"},"index$":2},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":3},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":4}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"actionType","required":true,"in":"path","description":"The type of action (primary or secondary)","schema":{"enum":["primary","secondary"],"type":"string"},"index$":2},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":3},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":4}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/archive":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/read":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"snoozeUntil":{"format":"date-time","type":"string","description":"The date and time until which the notification should be snoozed","example":"2026-03-01T10:00:00Z","key$":"snoozeUntil"}},"required":["snoozeUntil"],"x-ref":"#/components/schemas/SnoozeSubscriberNotificationDto","index$":1}}}},"parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unread":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]},"PATCH /v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze":{"protocol":"http","parameters":[{"name":"subscriberId","required":true,"in":"path","description":"The identifier of the subscriber","schema":{"type":"string"},"index$":0},{"name":"notificationId","required":true,"in":"path","description":"The identifier of the notification","schema":{"type":"string"},"index$":1},{"name":"contextKeys","required":false,"in":"query","description":"Context keys for filtering","schema":{"type":"array","items":{"type":"string"}},"index$":2},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let inbox_notification_dto_ref01_data = Object.values(setup.data.existing.inbox_notification_dto)[0] as any

    // UPDATE
    const inbox_notification_dto_ref01_ent = client.InboxNotificationDto()
    const inbox_notification_dto_ref01_data_up0: any = {}
    inbox_notification_dto_ref01_data_up0.id = inbox_notification_dto_ref01_data.id
    inbox_notification_dto_ref01_data_up0 ['subscriber_id'] = setup.idmap['subscriber_id']

    const inbox_notification_dto_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-inbox_notification_dto_ref01_' + setup.now }
    ;(inbox_notification_dto_ref01_data_up0 as any)[inbox_notification_dto_ref01_markdef_up0.name] = inbox_notification_dto_ref01_markdef_up0.value

    const inbox_notification_dto_ref01_resdata_up0 = (await inbox_notification_dto_ref01_ent.update(inbox_notification_dto_ref01_data_up0)).data()
    assert(inbox_notification_dto_ref01_resdata_up0.id === inbox_notification_dto_ref01_data_up0.id)

    assert((inbox_notification_dto_ref01_resdata_up0 as any)[inbox_notification_dto_ref01_markdef_up0.name] === inbox_notification_dto_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/inbox_notification_dto/InboxNotificationDtoTestData.json')

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
    ['inbox_notification_dto01','inbox_notification_dto02','inbox_notification_dto03','subscriber01','subscriber02','subscriber03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_INBOX_NOTIFICATION_DTO_ENTID']
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
  
