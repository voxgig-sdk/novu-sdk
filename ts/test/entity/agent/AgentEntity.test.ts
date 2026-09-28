

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


describe('AgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOVU_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOVU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NovuSDK.test()
    const ent = testsdk.Agent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOVU_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"t":"`$BOOLEAN`","key$":"active","index$":0},"behavior":{"a":true,"h":"Behavior","n":"behavior","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":"`$OBJECT`","key$":"behavior","index$":1},"bridgeUrl":{"a":true,"h":"Bridge Url","n":"bridgeUrl","r":false,"sh":"Production bridge URL","t":"`$STRING`","key$":"bridgeUrl","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":3},"createdBy":{"a":true,"h":"Created By","n":"createdBy","r":false,"sh":"Mongo user id of the user who created the agent","t":"`$STRING`","key$":"createdBy","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":5},"devBridgeActive":{"a":true,"h":"Dev Bridge Active","n":"devBridgeActive","r":false,"sh":"Whether the dev bridge override is active","t":"`$BOOLEAN`","key$":"devBridgeActive","index$":6},"devBridgeUrl":{"a":true,"h":"Dev Bridge Url","n":"devBridgeUrl","r":false,"sh":"Development bridge URL (set by npx novu dev)","t":"`$STRING`","key$":"devBridgeUrl","index$":7},"environmentId":{"a":true,"h":"Environment Id","n":"environmentId","r":true,"t":"`$STRING`","key$":"environmentId","index$":8},"exceedsPlanLimit":{"a":true,"h":"Exceeds Plan Limit","n":"exceedsPlanLimit","r":false,"sh":"Cloud only.","t":"`$BOOLEAN`","key$":"exceedsPlanLimit","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":10},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":true,"sh":"Required when not adopting an existing managed agent.","t":"`$STRING`","key$":"identifier","index$":11},"integrations":{"a":true,"h":"Integrations","n":"integrations","r":false,"t":"`$ARRAY`","key$":"integrations","index$":12},"managedRuntime":{"a":true,"h":"Managed Runtime","n":"managedRuntime","op":{"create":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"Present when runtime is \"managed\".","t":"`$ANY`","key$":"managedRuntime","index$":13},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Required when not adopting an existing managed agent (i.e.","t":"`$STRING`","key$":"name","index$":14},"organizationId":{"a":true,"h":"Organization Id","n":"organizationId","r":true,"t":"`$STRING`","key$":"organizationId","index$":15},"runtime":{"a":true,"h":"Runtime","n":"runtime","r":false,"sh":"Whether the agent brain is self-hosted (bridge) or managed by a third-party provider","t":"`$STRING`","key$":"runtime","index$":16},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":17},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":false,"sh":"Discovery scope of the agent.","t":"`$STRING`","key$":"visibility","index$":18}},"id":{"field":"id","name":"id"},"name":"agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/agents/{agentId}/reply","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"support-agent","k":"param","n":"id","or":"agent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/agents/{agentId}/reply","q":{"$action":"reply","exist":["id","idempotency_key"]},"r":{"param":{"agentId":"id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"id"},{"lit":"reply"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/agents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"novu_analytics_source","or":"novu_analytics_source","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/agents","q":{"exist":["idempotency_key","novu_analytics_source"]},"r":{},"s":[{"lit":"v1"},{"lit":"agents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/agents/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/agents/{identifier}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/agents/{identifier}/integrations/{agentIntegrationId}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"agent_id","or":"identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"agent_integration_id","or":"agent_integration_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/agents/{identifier}/integrations/{agentIntegrationId}","q":{"exist":["agent_id","agent_integration_id","idempotency_key"]},"r":{"param":{"agentIntegrationId":"agent_integration_id","identifier":"agent_id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"agent_id"},{"lit":"integrations"},{"var":"agent_integration_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/agents/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"delete_from_provider","or":"delete_from_provider","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/agents/{identifier}","q":{"exist":["delete_from_provider","id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/agents/{identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/agents/{identifier}","q":{"exist":["id","idempotency_key"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.integration"]]},"key$":"agent","name__orig":"agent","Name":"Agent","name_":"agent","name-":"agent","NAME":"AGENT","index$":1}, {"active":true,"entity":"agent","key$":"BasicAgentFlow","kind":"basic","name":"BasicAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_ref01"},"m":{"agent_id":"agent01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_up0","textfield":"bridgeUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_dt0"},"m":{"id":"agent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"agent_ref01","suffix":"_rm0"},"m":{"id":"agent01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Agent', {"POST /v1/agents/{agentId}/reply":{"protocol":"http","requestBody":{"required":true,"description":"Reply payload. Provide at least one action: `reply`, `edit`, `resolve`, `signals`, `toolResults`, `toolApprovalRequest`, `addReactions`, `deleteMessages`, `typing`, or `error`. See named examples for common shapes used by server-side SDKs.","content":{"application/json":{"schema":{"type":"object","properties":{"conversationId":{"type":"string","description":"Conversation id to reply into. Obtained from the inbound agent event / bridge payload.","example":"64f5a1c2e8b7a3d9f0c1b2a3"},"integrationIdentifier":{"type":"string","description":"Channel integration identifier linked to the agent for this conversation (e.g. `slack-support`).","example":"slack-support"},"reply":{"description":"Outbound message content. Exactly one of `markdown`, `card`, or `toolApprovalCard`. Optional `files` attach to the message. Cannot be combined with `edit`.","oneOf":[{"type":"object","properties":{"markdown":{},"files":{}},"required":["markdown"],"x-ref":"#/components/schemas/MarkdownReplyContentDto"},{"type":"object","properties":{"card":{},"files":{}},"required":["card"],"x-ref":"#/components/schemas/CardReplyContentDto"},{"type":"object","properties":{"toolApprovalCard":{},"files":{}},"required":["toolApprovalCard"],"x-ref":"#/components/schemas/ToolApprovalCardReplyContentDto"}]},"toolApprovalRequest":{"description":"Tool-lifecycle ledger row for a gated tool call. Pair with `reply.toolApprovalCard` (or another reply shape) to deliver the approval UI.","allOf":[{"type":"object","properties":{"approvalId":{},"toolCallId":{},"name":{},"input":{},"approveActionId":{},"denyActionId":{},"mcpServerName":{},"to":{},"from":{},"ttlSeconds":{}},"required":["approvalId","toolCallId","name"],"x-ref":"#/components/schemas/ToolApprovalRequestPayloadDto"}]},"edit":{"description":"In-place edit of a previously posted agent message. Cannot be combined with reply, resolve, signals, toolResults, toolApprovalRequest, addReactions, or deleteMessages.","allOf":[{"type":"object","properties":{"messageId":{},"content":{}},"required":["messageId","content"],"x-ref":"#/components/schemas/EditPayloadDto"}]},"resolve":{"description":"Mark the conversation resolved. May be combined with a final `reply`.","allOf":[{"type":"object","properties":{"summary":{}},"x-ref":"#/components/schemas/ResolveDto"}]},"signals":{"type":"array","description":"Side-effect signals executed during this turn: conversation metadata mutations, Novu workflow triggers, or human-in-the-loop interactions.","items":{"oneOf":[{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/MetadataSetSignalDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/MetadataDeleteSignalDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/MetadataClearSignalDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/TriggerSignalDto"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/HumanSignalDto"}]}},"toolResults":{"description":"Tool-call outcomes to persist in conversation history (typically before the assistant reply).","type":"array","items":{"type":"object","properties":{"toolCallId":{"type":"string","description":"Id of the tool call this result resolves.","example":"call_abc123"},"toolName":{"type":"string","description":"Name of the tool that produced this result.","example":"lookup_order"},"output":{"type":"object","description":"JSON-serializable tool output (or the execution-denied marker)."},"preview":{"type":"string","description":"Human-readable preview for the display timeline.","example":"Order ORD-42 is shipped"}},"required":["toolCallId"],"x-ref":"#/components/schemas/ToolResultDto"}},"addReactions":{"description":"Emoji reactions to add to existing platform messages.","type":"array","items":{"type":"object","properties":{"messageId":{"type":"string","description":"Platform message id to react to.","example":"1712345678.123456"},"emojiName":{"type":"string","description":"Well-known cross-platform emoji name (e.g. `white_check_mark`, `thumbsup`).","example":"white_check_mark"}},"required":["messageId","emojiName"],"x-ref":"#/components/schemas/AddReactionPayloadDto"}},"deleteMessages":{"description":"Delete previously posted platform messages. Removes the rendered message only — history is preserved.","type":"array","items":{"type":"object","properties":{"messageId":{"type":"string","description":"Platform message id to delete. Removes the rendered message only — history is preserved.","example":"1712345678.123456"}},"required":["messageId"],"x-ref":"#/components/schemas/DeleteMessagePayloadDto"}},"typing":{"description":"Per-turn typing/status control. Pass `{ status?: string }` to set/update the status (omit `status` for \"Thinking…\"), or `\"stop\"` to clear it. Best-effort per platform.","oneOf":[{"type":"string","enum":["stop"],"description":"Clear the typing indicator."},{"type":"object","properties":{"status":{}},"x-ref":"#/components/schemas/TypingStatusDto"}],"example":{"status":"Looking up your order…"}},"error":{"type":"boolean","description":"Bridge reports that the customer runtime failed this turn. Cannot be combined with other actions. Novu delivers generic user-facing error copy.","example":true}},"required":["conversationId","integrationIdentifier"],"x-ref":"#/components/schemas/AgentReplyPayloadDto"},"examples":{"markdownReply":{"summary":"Markdown reply","description":"Send a markdown (or plain text) message into an existing conversation.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","reply":{"markdown":"**Report ready.** Your weekly summary is attached."}}},"replyWithFile":{"summary":"Reply with file attachment","description":"Attach files to a markdown reply. Provide exactly one of `url` or `data` per file. Prefer `url` for larger files.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","reply":{"markdown":"Here is your report.","files":[{"filename":"report.pdf","mimeType":"application/pdf","url":"https://example.com/files/report.pdf"}]}}},"cardReply":{"summary":"Interactive card reply","description":"Send a Chat SDK card (buttons, text, links). Build cards with `@novu/framework` helpers or an equivalent JSON tree.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","reply":{"card":{"type":"card","title":"Order #123","children":[{},{}]}}}},"editMessage":{"summary":"Edit a sent message","description":"Update a previously delivered agent message in place. Cannot be combined with resolve, signals, or reactions.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","edit":{"messageId":"1712345678.123456","content":{"markdown":"Updated: the report is now final."}}}},"typingStart":{"summary":"Start typing indicator","description":"Best-effort status text on platforms that support it. Omit `status` for the default \"Thinking…\".","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","typing":{"status":"Looking up your order…"}}},"typingStop":{"summary":"Stop typing indicator","description":"Clear the typing / status indicator for this turn.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","typing":"stop"}},"addReaction":{"summary":"Add emoji reaction","description":"React to a platform message with a well-known emoji name.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","addReactions":[{"messageId":"1712345678.123456","emojiName":"white_check_mark"}]}},"deleteMessage":{"summary":"Delete a sent message","description":"Remove a previously posted platform message. Conversation history is preserved.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","deleteMessages":[{"messageId":"1712345678.123456"}]}},"resolveConversation":{"summary":"Resolve conversation","description":"Mark the conversation resolved. Optionally include a summary and/or a final reply in the same request.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","reply":{"markdown":"Glad that helped — marking this as resolved."},"resolve":{"summary":"Answered billing question about invoice INV-42."}}},"metadataSignal":{"summary":"Set conversation metadata","description":"Persist key/value metadata on the conversation for later turns. Keys: 1–128 chars, letters/digits with `-`, `_`, `:` separators.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","signals":[{"type":"metadata","action":"set","key":"crm:ticketId","value":"TCK-1001"}]}},"humanApprove":{"summary":"Ask the conversation subscriber to approve","description":"Create an approve/deny card in the current conversation thread. The verdict arrives later on `onAction` with `ctx.humanResponse`.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","signals":[{"type":"human","kind":"approve","card":{"title":"Deploy v2.4.1 to production?"},"requestId":"hr_7c2e1a3b-4d5f-6789-abcd-ef0123456789"}]}},"triggerWorkflow":{"summary":"Trigger a Novu workflow","description":"Fire a workflow from the agent turn. When `to` is omitted, Novu uses the conversation subscriber if one is resolved.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","signals":[{"type":"trigger","workflowId":"order-shipped","to":"subscriber-123","payload":{"orderId":"ORD-42"}}]}},"toolResult":{"summary":"Report tool results","description":"Persist tool-call outcomes into conversation history (typically before the assistant reply).","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","toolResults":[{"toolCallId":"call_abc123","toolName":"lookup_order","output":{"status":"shipped","eta":"2026-07-16"},"preview":"Order ORD-42 is shipped"}],"reply":{"markdown":"Your order **ORD-42** has shipped and should arrive by July 16."}}},"toolApprovalRequest":{"summary":"Request tool approval","description":"Ledger a gated tool call and optionally deliver an approval card via `reply.toolApprovalCard` or a normal card/markdown reply.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","toolApprovalRequest":{"approvalId":"apr_01HZX","toolCallId":"call_refund_1","name":"issue_refund","input":{"orderId":"ORD-42","amountCents":2500}},"reply":{"toolApprovalCard":{"type":"tool-approval-card","title":"Approve refund?","subtitle":"issue_refund · ORD-42 · $25.00","approveLabel":"Approve","denyLabel":"Deny"}}}},"turnError":{"summary":"Report turn failure","description":"Bridge reports that the customer runtime failed. Cannot be combined with other actions. Novu delivers generic user-facing copy.","value":{"conversationId":"64f5a1c2e8b7a3d9f0c1b2a3","integrationIdentifier":"slack-support","error":true}}}}}},"parameters":[{"name":"agentId","required":true,"in":"path","description":"Agent identifier (slug) for the agent that owns the conversation.","example":"support-agent","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"POST /v1/agents":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Required when not adopting an existing managed agent (i.e. when managedRuntime.externalAgentId is absent). Optional in adopt mode where the name is resolved from the provider.","maxLength":60,"key$":"name"},"identifier":{"type":"string","pattern":"SLUG_IDENTIFIER_REGEX","description":"Required when not adopting an existing managed agent. Auto-generated from the provider agent name when omitted in adopt mode.","key$":"identifier"},"description":{"type":"string","key$":"description"},"active":{"type":"boolean","default":true,"key$":"active"},"runtime":{"type":"string","enum":["self-hosted","managed"],"key$":"runtime"},"managedRuntime":{"type":"object","properties":{"providerId":{"enum":["anthropic","novu-anthropic","anthropic-aws"],"type":"string"},"integrationId":{"type":"string","description":"ID of an existing Novu integration (kind: \"agent\") that holds the provider API key and provisioned environment. Create the integration first via POST /integrations."},"externalAgentId":{"type":"string","description":"ID of an existing agent on the provider platform. When set, Novu adopts the agent instead of creating a new one."},"externalEnvironmentId":{"type":"string","description":"ID of an existing environment on the provider platform. When set, Novu adopts the environment."},"model":{"type":"string"},"systemPrompt":{"type":"string"},"tools":{"type":"array","items":{"type":"string"}},"mcpServers":{"type":"array","items":{"type":"string"}},"skills":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/AgentSkillInputDto"}}},"required":["providerId","integrationId"],"x-ref":"#/components/schemas/ManagedRuntimeDto","key$":"managedRuntime"}},"required":["name","identifier"],"x-ref":"#/components/schemas/CreateAgentRequestDto","index$":1}}}},"parameters":[{"name":"Novu-Analytics-Source","required":true,"in":"header","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"GET /v1/agents/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /v1/agents/{identifier}/integrations/{agentIntegrationId}":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"agentIntegrationId","required":true,"in":"path","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"DELETE /v1/agents/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"deleteFromProvider","required":true,"in":"query","schema":{"type":"string"},"index$":1},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":2}]},"PATCH /v1/agents/{identifier}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":60,"key$":"name"},"description":{"type":"string","key$":"description"},"active":{"type":"boolean","key$":"active"},"behavior":{"type":"object","properties":{"acknowledgeOnReceived":{"default":true,"description":"Acknowledge incoming messages. On platforms that support a native typing indicator (e.g. Slack, WhatsApp, Microsoft Teams, Telegram), shows a \"Typing…\" indicator while the agent processes the message. On platforms that do not (e.g. Email), reacts with an \"eyes\" emoji to the first inbound message in a thread. Default: true","type":"boolean"},"reactionOnResolved":{"default":"check","description":"Cross-platform emoji name for resolved conversations (e.g. \"check\", \"star\"). Set to null to disable. Default: \"check\"","nullable":true,"type":"object"},"subscriberAccess":{"description":"Controls whether the agent accepts inbound messages from senders not yet linked to a subscriber, across all channels. \"open\" on managed agents auto-creates a lightweight subscriber so the agent can reply; on custom-code / self-hosted agents, the turn is forwarded to the bridge with a null subscriber. \"restricted\" rejects unknown senders with a managed denial reply (any runtime). Optional on update (partial PATCH). Persisted agents always have a value — managed create defaults to \"open\"; self-hosted create defaults to \"restricted\".","enum":["open","restricted"],"type":"string"},"replyPolicy":{"default":"auto_reply","description":"How the agent replies in shared rooms. \"mention_only\" requires an @mention in every shared room. \"auto_reply\" replies to unmentioned follow-ups in a nested Slack or Teams thread after the agent has joined. \"smart\" behaves like auto_reply while one person is talking to the agent in a thread, then requires an @mention there once someone else or another agent joins, or the incumbent @mentions another teammate. Create persists \"smart\". An omitted field on existing agents still means \"auto_reply\". DMs always reply without a mention. Optional on update (partial PATCH).","enum":["mention_only","auto_reply","smart"],"type":"string"}},"x-ref":"#/components/schemas/AgentBehaviorDto","key$":"behavior"},"bridgeUrl":{"type":"string","description":"Production bridge URL for this agent","key$":"bridgeUrl"},"devBridgeUrl":{"type":"string","description":"Development bridge URL (set by npx novu dev)","key$":"devBridgeUrl"},"devBridgeActive":{"type":"boolean","description":"Whether the dev bridge override is active","key$":"devBridgeActive"}},"x-ref":"#/components/schemas/UpdateAgentRequestDto","index$":1}}}},"parameters":[{"name":"identifier","required":true,"in":"path","schema":{"type":"string"},"index$":0},{"name":"idempotency-key","in":"header","description":"A header for idempotency purposes","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const agent_ref01_ent = client.Agent()
    let agent_ref01_data = setup.data.new.agent['agent_ref01']
    agent_ref01_data['agent_id'] = setup.idmap['agent01']

    agent_ref01_data = (await agent_ref01_ent.create(agent_ref01_data)).data()
    assert(null != agent_ref01_data.id)


    // UPDATE
    const agent_ref01_data_up0: any = {}
    agent_ref01_data_up0.id = agent_ref01_data.id

    const agent_ref01_markdef_up0 = { name: 'bridgeUrl', value: 'Mark01-agent_ref01_' + setup.now }
    ;(agent_ref01_data_up0 as any)[agent_ref01_markdef_up0.name] = agent_ref01_markdef_up0.value

    const agent_ref01_resdata_up0 = (await agent_ref01_ent.update(agent_ref01_data_up0)).data()
    assert(agent_ref01_resdata_up0.id === agent_ref01_data_up0.id)

    assert((agent_ref01_resdata_up0 as any)[agent_ref01_markdef_up0.name] === agent_ref01_markdef_up0.value)


    // LOAD
    const agent_ref01_match_dt0: any = {}
    agent_ref01_match_dt0.id = agent_ref01_data.id
    const agent_ref01_data_dt0 = (await agent_ref01_ent.load(agent_ref01_match_dt0)).data()
    assert(agent_ref01_data_dt0.id === agent_ref01_data.id)


    // REMOVE
    const agent_ref01_match_rm0: any = { id: agent_ref01_data.id }
    await agent_ref01_ent.remove(agent_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent/AgentTestData.json')

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
    ['agent01','agent02','agent03','integration01','integration02','integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOVU_TEST_AGENT_ENTID': idmap,
    'NOVU_TEST_LIVE': 'FALSE',
    'NOVU_TEST_EXPLAIN': 'FALSE',
    'NOVU_APIKEY': '',
  })

  idmap = env['NOVU_TEST_AGENT_ENTID']

  const live = 'TRUE' === env.NOVU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOVU_TEST_AGENT_ENTID']
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
  
