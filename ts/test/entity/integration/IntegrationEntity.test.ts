

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


describe('IntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Integration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","op":{"list":{"req":true,"type":"`$BOOLEAN`"},"update":{"req":true,"type":"`$BOOLEAN`"}},"r":false,"sh":"If the integration is active, the validation on the credentials field will run","t":"`$BOOLEAN`","key$":"active","index$":0},"channel":{"a":true,"h":"Channel","n":"channel","r":false,"sh":"The channel type for the integration.","t":"`$STRING`","key$":"channel","index$":1},"check":{"a":true,"h":"Check","n":"check","r":false,"sh":"Flag to check the integration status","t":"`$BOOLEAN`","key$":"check","index$":2},"conditions":{"a":true,"de":true,"h":"Conditions","n":"conditions","r":false,"sh":"Legacy StepFilter conditions.","t":"`$ARRAY`","key$":"conditions","index$":3},"configurations":{"a":true,"h":"Configurations","n":"configurations","r":false,"sh":"Configurations for the integration","t":"`$OBJECT`","key$":"configurations","index$":4},"credentials":{"a":true,"h":"Credentials","n":"credentials","r":false,"sh":"The credentials for the integration","t":"`$ANY`","key$":"credentials","index$":5},"deleted":{"a":true,"h":"Deleted","n":"deleted","r":true,"sh":"Indicates whether the integration has been marked as deleted (soft delete).","t":"`$BOOLEAN`","key$":"deleted","index$":6},"deletedAt":{"a":true,"h":"Deleted At","n":"deletedAt","r":false,"sh":"The timestamp indicating when the integration was deleted.","t":"`$STRING`","key$":"deletedAt","index$":7},"deletedBy":{"a":true,"h":"Deleted By","n":"deletedBy","r":false,"sh":"The identifier of the user who performed the deletion of this integration.","t":"`$STRING`","key$":"deletedBy","index$":8},"environmentId":{"a":true,"fo":"uuid","h":"Environment Id","n":"environmentId","op":{"list":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The ID of the associated environment","t":"`$STRING`","key$":"environmentId","index$":9},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier of the integration record in the database.","t":"`$STRING`","key$":"id","index$":10},"identifier":{"a":true,"h":"Identifier","n":"identifier","op":{"list":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The unique identifier for the integration","t":"`$STRING`","key$":"identifier","index$":11},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Distinguishes delivery integrations from agent-runtime integrations.","t":"`$STRING`","key$":"kind","index$":12},"name":{"a":true,"h":"Name","n":"name","op":{"list":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the integration","t":"`$STRING`","key$":"name","index$":13},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"sh":"The unique identifier for the organization that owns this integration.","t":"`$STRING`","key$":"organizationId","index$":14},"primary":{"a":true,"h":"Primary","n":"primary","r":true,"sh":"Indicates whether this integration is marked as primary.","t":"`$BOOLEAN`","key$":"primary","index$":15},"providerId":{"a":true,"h":"Provider Id","n":"providerId","op":{"list":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The provider ID for the integration","t":"`$STRING`","key$":"providerId","index$":16},"rules":{"a":true,"h":"Rules","n":"rules","r":false,"sh":"JSONLogic used at send time to select this integration.","t":"`$OBJECT`","key$":"rules","index$":17}},"id":{"field":"id","name":"id"},"name":"integration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/integrations/{integrationId}/auto-configure","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integrationId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/integrations/{integrationId}/auto-configure","q":{"$action":"auto_configure","exist":["id","idempotency_key"]},"r":{"param":{"integrationId":"id"}},"s":[{"lit":"v1"},{"lit":"integrations"},{"var":"id"},{"lit":"auto-configure"}],"t":{"req":"`reqdata`","res":"`body.integration`"},"index$":0},{"a":true,"co":{"id":"POST /v1/integrations/{integrationIdentifier}/mobile-link","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"integration_identifier","or":"integrationIdentifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/integrations/{integrationIdentifier}/mobile-link","q":{"$action":"mobile_link","exist":["idempotency_key","integration_identifier"]},"r":{"param":{"integrationIdentifier":"integration_identifier"}},"s":[{"lit":"v1"},{"lit":"integrations"},{"var":"integration_identifier"},{"lit":"mobile-link"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/integrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/integrations","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/integrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/integrations","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/integrations/{integrationId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integrationId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/integrations/{integrationId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"integrationId":"id"}},"s":[{"lit":"v1"},{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/integrations/{integrationId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integrationId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/integrations/{integrationId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"integrationId":"id"}},"s":[{"lit":"v1"},{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"integration","name__orig":"integration","Name":"Integration","name_":"integration","name-":"integration","NAME":"INTEGRATION","index$":25}, {"active":true,"entity":"integration","key$":"BasicIntegrationFlow","kind":"basic","name":"BasicIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"integration_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"integration_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"integration_ref01","srcdatavar":"integration_ref01_data","suffix":"_up0","textfield":"channel"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integration_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"integration_ref01","suffix":"_rm0"},"m":{"id":"integration01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"integration_ref01"}}],"index$":4}]}, 'Integration', {"POST /v1/integrations/{integrationId}/auto-configure":{"protocol":"http","parameters":[{"name":"integrationId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"POST /v1/integrations/{integrationIdentifier}/mobile-link":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"subscriberId":{"type":"string","description":"Optional subscriber to link via `/start` deep link after mobile setup completes. When provided, the consume response may include a ready-to-open Telegram deep link.","example":"subscriber-123"}},"x-ref":"#/components/schemas/IssueIntegrationMobileLinkRequestDto"}}}},"parameters":[{"name":"integrationIdentifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"POST /v1/integrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the integration","key$":"name"},"identifier":{"type":"string","description":"The unique identifier for the integration","key$":"identifier"},"_environmentId":{"type":"string","description":"The ID of the associated environment","format":"uuid","key$":"_environmentId"},"providerId":{"type":"string","description":"The provider ID for the integration","key$":"providerId"},"channel":{"enum":["in_app","email","sms","chat","push","tool"],"type":"string","description":"The channel type for the integration. Not required for agent-kind integrations.","key$":"channel"},"kind":{"enum":["delivery","agent"],"type":"string","description":"Distinguishes delivery integrations from agent-runtime integrations. Defaults to \"delivery\". Agent integrations do not require a channel.","key$":"kind"},"credentials":{"description":"The credentials for the integration","allOf":[{"type":"object","properties":{"apiKey":{},"user":{},"secretKey":{},"hmacSecretKeyEncoding":{},"domain":{},"password":{},"host":{},"port":{},"secure":{},"region":{},"accountSid":{},"messageProfileId":{},"token":{},"from":{},"senderName":{},"projectName":{},"applicationId":{},"clientId":{},"requireTls":{},"ignoreTls":{},"tlsOptions":{},"baseUrl":{},"webhookUrl":{},"redirectUrl":{},"hmac":{},"serviceAccount":{},"ipPoolName":{},"configurationSetName":{},"apiKeyRequestHeader":{},"secretKeyRequestHeader":{},"idPath":{},"datePath":{},"apiToken":{},"authenticateByToken":{},"authenticationTokenKey":{},"instanceId":{},"alertUid":{},"title":{},"imageUrl":{},"state":{},"externalLink":{},"channelId":{},"phoneNumberIdentification":{},"accessKey":{},"appSid":{},"senderId":{},"tenantId":{},"AppIOBaseUrl":{},"signingSecret":{},"outboundIntegrationId":{},"outboundConnectedAt":{},"whatsNextCompletedAt":{},"useFromAddressOverride":{},"fromAddressOverride":{},"emailSlugPrefix":{},"externalEnvironmentId":{},"externalVaultId":{},"externalWorkspaceId":{}},"x-ref":"#/components/schemas/CredentialsDto"}],"key$":"credentials"},"active":{"type":"boolean","description":"If the integration is active, the validation on the credentials field will run","key$":"active"},"check":{"type":"boolean","description":"Flag to check the integration status","key$":"check"},"conditions":{"deprecated":true,"description":"Legacy StepFilter conditions. Ignored when `rules` is also set.","type":"array","items":{"type":"object","properties":{"isNegated":{"type":"boolean"},"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/BuilderFieldTypeEnum"},"value":{"enum":[],"type":"string"},"children":{"items":{},"type":"array"}},"required":["isNegated","type","value","children"],"x-ref":"#/components/schemas/StepFilterDto"},"key$":"conditions"},"rules":{"type":"object","nullable":true,"additionalProperties":true,"description":"JSONLogic used at send time to select this integration. Takes precedence over `conditions`.","example":{"==":[{"var":"context.tenant.id"},"acme"]},"key$":"rules"},"configurations":{"type":"object","description":"Configurations for the integration","key$":"configurations"}},"x-ref":"#/components/schemas/CreateIntegrationRequestDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v1/integrations":{"protocol":"http","parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"DELETE /v1/integrations/{integrationId}":{"protocol":"http","parameters":[{"name":"integrationId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PUT /v1/integrations/{integrationId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","key$":"name"},"identifier":{"type":"string","key$":"identifier"},"_environmentId":{"type":"string","key$":"_environmentId"},"active":{"type":"boolean","description":"If the integration is active the validation on the credentials field will run","key$":"active"},"credentials":{"type":"object","properties":{"apiKey":{"type":"string"},"user":{"type":"string"},"secretKey":{"type":"string"},"hmacSecretKeyEncoding":{"type":"string","description":"Email webhook: how `secretKey` is interpreted when signing webhook calls. `text` signs with the raw UTF-8 bytes; `base64`/`hex` decode it to binary first (e.g. for AWS KMS).","enum":["text","base64","hex"]},"domain":{"type":"string"},"password":{"type":"string"},"host":{"type":"string"},"port":{"type":"string"},"secure":{"type":"boolean"},"region":{"type":"string"},"accountSid":{"type":"string"},"messageProfileId":{"type":"string"},"token":{"type":"string"},"from":{"type":"string"},"senderName":{"type":"string"},"projectName":{"type":"string"},"applicationId":{"type":"string"},"clientId":{"type":"string"},"requireTls":{"type":"boolean"},"ignoreTls":{"type":"boolean"},"tlsOptions":{"type":"object"},"baseUrl":{"type":"string"},"webhookUrl":{"type":"string"},"redirectUrl":{"type":"string"},"hmac":{"type":"boolean"},"serviceAccount":{"type":"string"},"ipPoolName":{"type":"string"},"configurationSetName":{"type":"string"},"apiKeyRequestHeader":{"type":"string"},"secretKeyRequestHeader":{"type":"string"},"idPath":{"type":"string"},"datePath":{"type":"string"},"apiToken":{"type":"string"},"authenticateByToken":{"type":"boolean"},"authenticationTokenKey":{"type":"string"},"instanceId":{"type":"string"},"alertUid":{"type":"string"},"title":{"type":"string"},"imageUrl":{"type":"string"},"state":{"type":"string"},"externalLink":{"type":"string"},"channelId":{"type":"string"},"phoneNumberIdentification":{"type":"string"},"accessKey":{"type":"string"},"appSid":{"type":"string"},"senderId":{"type":"string"},"tenantId":{"type":"string"},"AppIOBaseUrl":{"type":"string"},"signingSecret":{"type":"string"},"outboundIntegrationId":{"type":"string"},"outboundConnectedAt":{"type":"string"},"whatsNextCompletedAt":{"type":"string","description":"ISO timestamp marking Layer-2 What's next completion (Connected badge + guide hide). WhatsApp Business: stamped on post-connect Access Token rotation or manual confirm."},"useFromAddressOverride":{"type":"boolean"},"fromAddressOverride":{"type":"string"},"emailSlugPrefix":{"type":"string","description":"Agent default shared inbox slug prefix used in `{emailSlugPrefix}-{agentId}@<shared-domain>`. Only meaningful on the NovuAgent email integration."},"externalEnvironmentId":{"type":"string","description":"Claude Managed Agents: ID of the Anthropic environment tied to this integration. Hydrated by the API at integration provisioning time."},"externalVaultId":{"type":"string","description":"Claude Managed Agents: ID of the Anthropic vault (`vlt_…`) tied to this integration. Hydrated by the API at integration provisioning time and used to push OAuth-completed MCP credentials to the per-vault credentials API."},"externalWorkspaceId":{"type":"string","description":"Claude Managed Agents: id of the Anthropic workspace used in console deep links. Defaults to `'default'` (the Default Workspace). Set this when the API key is scoped to a custom workspace (e.g. `wrkspc_…`)."}},"x-ref":"#/components/schemas/CredentialsDto","key$":"credentials"},"check":{"type":"boolean","key$":"check"},"conditions":{"deprecated":true,"description":"Legacy StepFilter conditions. Ignored when `rules` is also set.","type":"array","items":{"type":"object","properties":{"isNegated":{"type":"boolean"},"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/BuilderFieldTypeEnum"},"value":{"enum":[],"type":"string"},"children":{"items":{},"type":"array"}},"required":["isNegated","type","value","children"],"x-ref":"#/components/schemas/StepFilterDto"},"key$":"conditions"},"rules":{"type":"object","nullable":true,"additionalProperties":true,"description":"JSONLogic used at send time to select this integration. Takes precedence over `conditions`.","example":{"==":[{"var":"context.tenant.id"},"acme"]},"key$":"rules"},"configurations":{"type":"object","description":"Configurations for the integration","key$":"configurations"}},"x-ref":"#/components/schemas/UpdateIntegrationRequestDto","index$":1}}}},"parameters":[{"name":"integrationId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integration_ref01_ent = client.Integration()
    let integration_ref01_data = setup.data.new.integration['integration_ref01']

    integration_ref01_data = (await integration_ref01_ent.create(integration_ref01_data)).data()
    assert(null != integration_ref01_data.id)


    // LIST
    const integration_ref01_match: any = {}

    const integration_ref01_list = (await integration_ref01_ent.list(integration_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(integration_ref01_list, { id: integration_ref01_data.id })))


    // UPDATE
    const integration_ref01_data_up0: any = {}
    integration_ref01_data_up0.id = integration_ref01_data.id

    const integration_ref01_markdef_up0 = { name: 'channel', value: 'Mark01-integration_ref01_' + setup.now }
    ;(integration_ref01_data_up0 as any)[integration_ref01_markdef_up0.name] = integration_ref01_markdef_up0.value

    const integration_ref01_resdata_up0 = (await integration_ref01_ent.update(integration_ref01_data_up0)).data()
    assert(integration_ref01_resdata_up0.id === integration_ref01_data_up0.id)

    assert((integration_ref01_resdata_up0 as any)[integration_ref01_markdef_up0.name] === integration_ref01_markdef_up0.value)


    // REMOVE
    const integration_ref01_match_rm0: any = { id: integration_ref01_data.id }
    await integration_ref01_ent.remove(integration_ref01_match_rm0)
  

    // LIST
    const integration_ref01_match_rt0: any = {}

    const integration_ref01_list_rt0 = (await integration_ref01_ent.list(integration_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(integration_ref01_list_rt0, { id: integration_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/integration/IntegrationTestData.json')

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
    ['integration01','integration02','integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_INTEGRATION_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_INTEGRATION_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_INTEGRATION_ENTID']
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
  
