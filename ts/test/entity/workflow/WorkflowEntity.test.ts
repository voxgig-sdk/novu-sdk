

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


describe('WorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Workflow()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Whether the workflow is active","t":"`$BOOLEAN`","key$":"active","index$":0},"agent":{"a":true,"h":"Agent","n":"agent","r":false,"sh":"Optional agent assignment used to route this workflow through an agent's connected channels.","t":"`$ANY`","key$":"agent","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"Creation timestamp","t":"`$STRING`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the workflow","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Database identifier of the workflow","t":"`$STRING`","key$":"id","index$":4},"isTranslationEnabled":{"a":true,"h":"Is Translation Enabled","n":"isTranslationEnabled","r":false,"sh":"Enable or disable translations for this workflow","t":"`$BOOLEAN`","key$":"isTranslationEnabled","index$":5},"issues":{"a":true,"h":"Issues","n":"issues","r":false,"sh":"Runtime issues for workflow creation and update","t":"`$OBJECT`","key$":"issues","index$":6},"lastPublishedAt":{"a":true,"h":"Last Published At","n":"lastPublishedAt","r":false,"sh":"Timestamp of the last workflow publication","t":"`$STRING`","key$":"lastPublishedAt","index$":7},"lastPublishedBy":{"a":true,"h":"Last Published By","n":"lastPublishedBy","r":false,"sh":"User who last published the workflow","t":"`$ANY`","key$":"lastPublishedBy","index$":8},"lastTriggeredAt":{"a":true,"h":"Last Triggered At","n":"lastTriggeredAt","r":false,"sh":"Timestamp of the last workflow trigger","t":"`$STRING`","key$":"lastTriggeredAt","index$":9},"name":{"a":true,"h":"Name","n":"name","op":{"patch":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Name of the workflow","t":"`$STRING`","key$":"name","index$":10},"origin":{"a":true,"h":"Origin","n":"origin","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Workflow origin","t":"`$STRING`","key$":"origin","index$":11},"payloadExample":{"a":true,"h":"Payload Example","n":"payloadExample","r":false,"sh":"Generated payload example based on the payload schema","t":"`$OBJECT`","key$":"payloadExample","index$":12},"payloadSchema":{"a":true,"h":"Payload Schema","n":"payloadSchema","r":false,"sh":"The payload JSON Schema for the workflow","t":"`$OBJECT`","key$":"payloadSchema","index$":13},"preferences":{"a":true,"h":"Preferences","n":"preferences","op":{"create":{"req":false,"type":"`$ANY`"}},"r":true,"sh":"Preferences for the workflow","t":"`$ANY`","key$":"preferences","index$":14},"severity":{"a":true,"h":"Severity","n":"severity","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Workflow severity","t":"`$STRING`","key$":"severity","index$":15},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Slug of the workflow","t":"`$STRING`","key$":"slug","index$":16},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"Source of workflow creation","t":"`$STRING`","key$":"source","index$":17},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Workflow status","t":"`$STRING`","key$":"status","index$":18},"stepTypeOverviews":{"a":true,"h":"Step Type Overviews","n":"stepTypeOverviews","r":true,"sh":"Overview of step types in the workflow","t":"`$ARRAY`","key$":"stepTypeOverviews","index$":19},"steps":{"a":true,"h":"Steps","n":"steps","r":true,"sh":"Steps of the workflow","t":"`$ARRAY`","union":{"branches":5,"count":3,"depth":19},"key$":"steps","index$":20},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags associated with the workflow","t":"`$ARRAY`","key$":"tags","index$":21},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"Last updated timestamp","t":"`$STRING`","key$":"updatedAt","index$":22},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"sh":"User who last updated the workflow","t":"`$ANY`","key$":"updatedBy","index$":23},"validatePayload":{"a":true,"h":"Validate Payload","n":"validatePayload","r":false,"sh":"Enable or disable payload schema validation","t":"`$BOOLEAN`","key$":"validatePayload","index$":24},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Workflow identifier","t":"`$STRING`","key$":"workflowId","index$":25}},"id":{"field":"id","name":"id"},"name":"workflow","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/workflows","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/workflows","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"v2"},{"lit":"workflows"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/workflows","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"order_by","or":"orderBy","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"order_direction","or":"orderDirection","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"tag","or":"tags","r":false,"t":"`$ARRAY`","index$":6}]},"k":"http","m":"GET","o":"/v2/workflows","q":{"exist":["idempotency_key","limit","offset","order_by","order_direction","query","status","tag"]},"r":{},"s":[{"lit":"v2"},{"lit":"workflows"}],"t":{"req":"`reqdata`","res":"`body.workflows`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/workflows/{workflowId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflowId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"environment_id","or":"environmentId","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/workflows/{workflowId}","q":{"exist":["environment_id","id","idempotency_key"]},"r":{"param":{"workflowId":"id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /v2/workflows/{workflowId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflowId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/workflows/{workflowId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"workflowId":"id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/workflows/{workflowId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflowId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/workflows/{workflowId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"workflowId":"id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v2/workflows/{workflowId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency-key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflowId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/workflows/{workflowId}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"workflowId":"id"}},"s":[{"lit":"v2"},{"lit":"workflows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"workflow","name__orig":"workflow","Name":"Workflow","name_":"workflow","name-":"workflow","NAME":"WORKFLOW","index$":56}, {"active":true,"entity":"workflow","key$":"BasicWorkflowFlow","kind":"basic","name":"BasicWorkflowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workflow_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"workflow_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"workflow_ref01","srcdatavar":"workflow_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"workflow_ref01","srcdatavar":"workflow_ref01_data","suffix":"_dt0"},"m":{"id":"workflow01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"workflow_ref01","suffix":"_rm0"},"m":{"id":"workflow01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"workflow_ref01"}}],"index$":5}]}, 'Workflow', {"POST /v2/workflows":{"protocol":"http","requestBody":{"required":true,"description":"Workflow creation details","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of the workflow","key$":"name"},"description":{"type":"string","description":"Description of the workflow","key$":"description"},"tags":{"description":"Tags associated with the workflow","type":"array","items":{"type":"string"},"key$":"tags"},"active":{"type":"boolean","description":"Whether the workflow is active","default":false,"key$":"active"},"validatePayload":{"type":"boolean","description":"Enable or disable payload schema validation","key$":"validatePayload"},"payloadSchema":{"type":"object","description":"The payload JSON Schema for the workflow","nullable":true,"additionalProperties":true,"key$":"payloadSchema"},"isTranslationEnabled":{"type":"boolean","description":"Enable or disable translations for this workflow","default":false,"key$":"isTranslationEnabled"},"agent":{"description":"Optional agent assignment used to route this workflow through an agent's connected channels. Pass null to clear.","nullable":true,"allOf":[{"type":"object","properties":{"identifier":{},"providers":{}},"required":["identifier"],"x-ref":"#/components/schemas/WorkflowAgentConfigDto"}],"key$":"agent"},"workflowId":{"type":"string","pattern":"SLUG_IDENTIFIER_REGEX","description":"Unique identifier for the workflow","key$":"workflowId"},"steps":{"type":"array","description":"Steps of the workflow","items":{"oneOf":[{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/InAppStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/EmailStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/SmsStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PushStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChatStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/DelayStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/DigestStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ThrottleStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ToolStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/CustomStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/HttpRequestStepUpsertDto"}],"discriminator":{"propertyName":"type","mapping":{"in_app":"#/components/schemas/InAppStepUpsertDto","email":"#/components/schemas/EmailStepUpsertDto","sms":"#/components/schemas/SmsStepUpsertDto","push":"#/components/schemas/PushStepUpsertDto","chat":"#/components/schemas/ChatStepUpsertDto","delay":"#/components/schemas/DelayStepUpsertDto","digest":"#/components/schemas/DigestStepUpsertDto","throttle":"#/components/schemas/ThrottleStepUpsertDto","tool":"#/components/schemas/ToolStepUpsertDto","custom":"#/components/schemas/CustomStepUpsertDto","http_request":"#/components/schemas/HttpRequestStepUpsertDto"}}},"key$":"steps"},"__source":{"type":"string","description":"Source of workflow creation","default":"editor","enum":["template_store","editor","notification_directory","onboarding_digest_demo","onboarding_in_app","empty_state","dropdown","onboarding_get_started","bridge","dashboard","ai"],"x-ref":"#/components/schemas/WorkflowCreationSourceEnum","key$":"__source"},"preferences":{"description":"Workflow preferences","allOf":[{"type":"object","properties":{"user":{},"workflow":{}},"x-ref":"#/components/schemas/PreferencesRequestDto"}],"key$":"preferences"},"severity":{"type":"string","description":"Workflow severity","enum":["high","medium","low","none"],"x-ref":"#/components/schemas/SeverityLevelEnum","key$":"severity"}},"required":["name","workflowId","steps"],"x-ref":"#/components/schemas/CreateWorkflowDto","index$":1}}}},"parameters":[{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":0}]},"GET /v2/workflows":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of items to return per page","example":10,"schema":{"minimum":1,"maximum":100,"type":"number"},"index$":0},{"name":"offset","required":false,"in":"query","description":"Number of items to skip before starting to return results","example":0,"schema":{"minimum":0,"type":"number"},"index$":1},{"name":"orderDirection","required":false,"in":"query","description":"Direction of sorting","schema":{"type":"string","enum":["ASC","DESC"],"x-ref":"#/components/schemas/DirectionEnum"},"index$":2},{"name":"orderBy","required":false,"in":"query","description":"Field to sort the results by","schema":{"type":"string","enum":["createdAt","updatedAt","name","lastTriggeredAt"],"x-ref":"#/components/schemas/WorkflowResponseDtoSortField"},"index$":3},{"name":"query","required":false,"in":"query","description":"Search query to filter workflows","schema":{"type":"string"},"index$":4},{"name":"tags","required":false,"in":"query","description":"Filter workflows by tags","schema":{"type":"array","items":{"type":"string"}},"index$":5},{"name":"status","required":false,"in":"query","description":"Filter workflows by status","schema":{"type":"array","items":{"type":"string","description":"Workflow status","enum":["ACTIVE","INACTIVE","ERROR"],"x-ref":"#/components/schemas/WorkflowStatusEnum"}},"index$":6},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":7}]},"GET /v2/workflows/{workflowId}":{"protocol":"http","parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"environmentId","required":false,"in":"query","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"PATCH /v2/workflows/{workflowId}":{"protocol":"http","requestBody":{"required":true,"description":"Workflow patch details","content":{"application/json":{"schema":{"type":"object","properties":{"active":{"type":"boolean","description":"Activate or deactivate the workflow","key$":"active"},"name":{"type":"string","description":"New name for the workflow","key$":"name"},"description":{"type":"string","description":"Updated description of the workflow","key$":"description"},"tags":{"type":"array","description":"Tags associated with the workflow","items":{"type":"string"},"key$":"tags"},"payloadSchema":{"type":"object","description":"The payload JSON Schema for the workflow","additionalProperties":true,"nullable":true,"key$":"payloadSchema"},"validatePayload":{"type":"boolean","description":"Enable or disable payload schema validation","key$":"validatePayload"},"isTranslationEnabled":{"type":"boolean","description":"Enable or disable translations for this workflow","key$":"isTranslationEnabled"}},"x-ref":"#/components/schemas/PatchWorkflowDto","index$":1}}}},"parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v2/workflows/{workflowId}":{"protocol":"http","parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"PUT /v2/workflows/{workflowId}":{"protocol":"http","requestBody":{"required":true,"description":"Workflow update details","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of the workflow","key$":"name"},"description":{"type":"string","description":"Description of the workflow","key$":"description"},"tags":{"description":"Tags associated with the workflow","type":"array","items":{"type":"string"},"key$":"tags"},"active":{"type":"boolean","description":"Whether the workflow is active","default":false,"key$":"active"},"validatePayload":{"type":"boolean","description":"Enable or disable payload schema validation","key$":"validatePayload"},"payloadSchema":{"type":"object","description":"The payload JSON Schema for the workflow","nullable":true,"additionalProperties":true,"key$":"payloadSchema"},"isTranslationEnabled":{"type":"boolean","description":"Enable or disable translations for this workflow","default":false,"key$":"isTranslationEnabled"},"agent":{"description":"Optional agent assignment used to route this workflow through an agent's connected channels. Pass null to clear.","nullable":true,"allOf":[{"type":"object","properties":{"identifier":{},"providers":{}},"required":["identifier"],"x-ref":"#/components/schemas/WorkflowAgentConfigDto"}],"key$":"agent"},"workflowId":{"type":"string","description":"Workflow ID (allowed only for code-first workflows)","key$":"workflowId"},"steps":{"type":"array","description":"Steps of the workflow","items":{"oneOf":[{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/InAppStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/EmailStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/SmsStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PushStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChatStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/DelayStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/DigestStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ThrottleStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ToolStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/CustomStepUpsertDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/HttpRequestStepUpsertDto"}],"discriminator":{"propertyName":"type","mapping":{"in_app":"#/components/schemas/InAppStepUpsertDto","email":"#/components/schemas/EmailStepUpsertDto","sms":"#/components/schemas/SmsStepUpsertDto","push":"#/components/schemas/PushStepUpsertDto","chat":"#/components/schemas/ChatStepUpsertDto","delay":"#/components/schemas/DelayStepUpsertDto","digest":"#/components/schemas/DigestStepUpsertDto","throttle":"#/components/schemas/ThrottleStepUpsertDto","tool":"#/components/schemas/ToolStepUpsertDto","custom":"#/components/schemas/CustomStepUpsertDto","http_request":"#/components/schemas/HttpRequestStepUpsertDto"}}},"key$":"steps"},"preferences":{"description":"Workflow preferences","allOf":[{"type":"object","properties":{"user":{},"workflow":{}},"x-ref":"#/components/schemas/PreferencesRequestDto"}],"key$":"preferences"},"origin":{"type":"string","description":"Workflow origin","enum":["novu-cloud","novu-cloud-v1","external"],"x-ref":"#/components/schemas/ResourceOriginEnum","key$":"origin"},"severity":{"type":"string","description":"Workflow severity","enum":["high","medium","low","none"],"x-ref":"#/components/schemas/SeverityLevelEnum","key$":"severity"}},"required":["name","steps","preferences"],"x-ref":"#/components/schemas/UpdateWorkflowDto","index$":1}}}},"parameters":[{"name":"workflowId","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workflow_ref01_ent = client.Workflow()
    let workflow_ref01_data = setup.data.new.workflow['workflow_ref01']

    workflow_ref01_data = (await workflow_ref01_ent.create(workflow_ref01_data)).data()
    assert(null != workflow_ref01_data.id)


    // LIST
    const workflow_ref01_match: any = {}

    const workflow_ref01_list = (await workflow_ref01_ent.list(workflow_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(workflow_ref01_list, { id: workflow_ref01_data.id })))


    // UPDATE
    const workflow_ref01_data_up0: any = {}
    workflow_ref01_data_up0.id = workflow_ref01_data.id

    const workflow_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-workflow_ref01_' + setup.now }
    ;(workflow_ref01_data_up0 as any)[workflow_ref01_markdef_up0.name] = workflow_ref01_markdef_up0.value

    const workflow_ref01_resdata_up0 = (await workflow_ref01_ent.update(workflow_ref01_data_up0)).data()
    assert(workflow_ref01_resdata_up0.id === workflow_ref01_data_up0.id)

    assert((workflow_ref01_resdata_up0 as any)[workflow_ref01_markdef_up0.name] === workflow_ref01_markdef_up0.value)


    // LOAD
    const workflow_ref01_match_dt0: any = {}
    workflow_ref01_match_dt0.id = workflow_ref01_data.id
    const workflow_ref01_data_dt0 = (await workflow_ref01_ent.load(workflow_ref01_match_dt0)).data()
    assert(workflow_ref01_data_dt0.id === workflow_ref01_data.id)


    // REMOVE
    const workflow_ref01_match_rm0: any = { id: workflow_ref01_data.id }
    await workflow_ref01_ent.remove(workflow_ref01_match_rm0)
  

    // LIST
    const workflow_ref01_match_rt0: any = {}

    const workflow_ref01_list_rt0 = (await workflow_ref01_ent.list(workflow_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(workflow_ref01_list_rt0, { id: workflow_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workflow/WorkflowTestData.json')

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
    ['workflow01','workflow02','workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_WORKFLOW_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_WORKFLOW_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_WORKFLOW_ENTID']
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
  
