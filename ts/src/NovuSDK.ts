// Novu Ts SDK

import { ActivityNotificationResponseDtoEntity } from './entity/ActivityNotificationResponseDtoEntity'
import { AgentEntity } from './entity/AgentEntity'
import { AgentIntegrationResponseDtoEntity } from './entity/AgentIntegrationResponseDtoEntity'
import { AgentResponseDtoEntity } from './entity/AgentResponseDtoEntity'
import { BulkEntity } from './entity/BulkEntity'
import { ChannelConnectionEntity } from './entity/ChannelConnectionEntity'
import { ChannelEndpointEntity } from './entity/ChannelEndpointEntity'
import { ConfigureEntity } from './entity/ConfigureEntity'
import { ContextEntity } from './entity/ContextEntity'
import { CreateSubscriptionsResponseDtoEntity } from './entity/CreateSubscriptionsResponseDtoEntity'
import { DiffEntity } from './entity/DiffEntity'
import { DomainEntity } from './entity/DomainEntity'
import { DomainConnectApplyUrlResponseDtoEntity } from './entity/DomainConnectApplyUrlResponseDtoEntity'
import { DomainConnectStatusResponseDtoEntity } from './entity/DomainConnectStatusResponseDtoEntity'
import { DomainResponseDtoEntity } from './entity/DomainResponseDtoEntity'
import { DomainRouteResponseDtoEntity } from './entity/DomainRouteResponseDtoEntity'
import { EnvironmentEntity } from './entity/EnvironmentEntity'
import { EnvironmentTagsDtoEntity } from './entity/EnvironmentTagsDtoEntity'
import { EnvironmentVariableEntity } from './entity/EnvironmentVariableEntity'
import { EnvironmentVariableWorkflowInfoDtoEntity } from './entity/EnvironmentVariableWorkflowInfoDtoEntity'
import { EventEntity } from './entity/EventEntity'
import { GenerateChatOAuthUrlResponseDtoEntity } from './entity/GenerateChatOAuthUrlResponseDtoEntity'
import { GeneratePreviewResponseDtoEntity } from './entity/GeneratePreviewResponseDtoEntity'
import { ImportMasterJsonResponseDtoEntity } from './entity/ImportMasterJsonResponseDtoEntity'
import { InboxNotificationDtoEntity } from './entity/InboxNotificationDtoEntity'
import { IntegrationEntity } from './entity/IntegrationEntity'
import { IntegrationResponseDtoEntity } from './entity/IntegrationResponseDtoEntity'
import { LayoutEntity } from './entity/LayoutEntity'
import { LayoutResponseDtoEntity } from './entity/LayoutResponseDtoEntity'
import { LinkEntity } from './entity/LinkEntity'
import { ListAgentIntegrationsResponseDtoEntity } from './entity/ListAgentIntegrationsResponseDtoEntity'
import { ListDomainRoutesResponseDtoEntity } from './entity/ListDomainRoutesResponseDtoEntity'
import { ListTopicSubscriptionsResponseDtoEntity } from './entity/ListTopicSubscriptionsResponseDtoEntity'
import { MasterJsonEntity } from './entity/MasterJsonEntity'
import { MessageEntity } from './entity/MessageEntity'
import { MessageResponseDtoEntity } from './entity/MessageResponseDtoEntity'
import { NotificationFeedItemDtoEntity } from './entity/NotificationFeedItemDtoEntity'
import { PreferencesResponseDtoEntity } from './entity/PreferencesResponseDtoEntity'
import { PublishEntity } from './entity/PublishEntity'
import { RemoveSubscriberResponseDtoEntity } from './entity/RemoveSubscriberResponseDtoEntity'
import { StepEntity } from './entity/StepEntity'
import { SubscriberEntity } from './entity/SubscriberEntity'
import { SubscriberNotificationsCountResponseDtoEntity } from './entity/SubscriberNotificationsCountResponseDtoEntity'
import { SubscriberNotificationsResponseDtoEntity } from './entity/SubscriberNotificationsResponseDtoEntity'
import { SubscriberPreferencesDtoEntity } from './entity/SubscriberPreferencesDtoEntity'
import { SubscriberResponseDtoEntity } from './entity/SubscriberResponseDtoEntity'
import { SubscriptionEntity } from './entity/SubscriptionEntity'
import { TopicEntity } from './entity/TopicEntity'
import { TopicSubscriberDtoEntity } from './entity/TopicSubscriberDtoEntity'
import { TopicSubscriptionsResponseDtoEntity } from './entity/TopicSubscriptionsResponseDtoEntity'
import { TranslationEntity } from './entity/TranslationEntity'
import { TranslationGroupDtoEntity } from './entity/TranslationGroupDtoEntity'
import { TriggerEventResponseDtoEntity } from './entity/TriggerEventResponseDtoEntity'
import { UnseenEntity } from './entity/UnseenEntity'
import { UploadEntity } from './entity/UploadEntity'
import { WebhookResultDtoEntity } from './entity/WebhookResultDtoEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'
import { WorkflowInfoDtoEntity } from './entity/WorkflowInfoDtoEntity'
import { WorkflowResponseDtoEntity } from './entity/WorkflowResponseDtoEntity'

export type * from './NovuTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { NovuEntityBase } from './NovuEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class NovuSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('NovuSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('NovuSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('NovuSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.ActivityNotificationResponseDto().list()` / `client.ActivityNotificationResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActivityNotificationResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new ActivityNotificationResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Agent(entopts?: Record<string, any>) {
    const self = this
    return new AgentEntity(self, entopts)
  }


  // Entity access: `client.AgentIntegrationResponseDto().list()` / `client.AgentIntegrationResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentIntegrationResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new AgentIntegrationResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.AgentResponseDto().list()` / `client.AgentResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new AgentResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Bulk().list()` / `client.Bulk().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Bulk(entopts?: Record<string, any>) {
    const self = this
    return new BulkEntity(self, entopts)
  }


  // Entity access: `client.ChannelConnection().list()` / `client.ChannelConnection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChannelConnection(entopts?: Record<string, any>) {
    const self = this
    return new ChannelConnectionEntity(self, entopts)
  }


  // Entity access: `client.ChannelEndpoint().list()` / `client.ChannelEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChannelEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new ChannelEndpointEntity(self, entopts)
  }


  // Entity access: `client.Configure().list()` / `client.Configure().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Configure(entopts?: Record<string, any>) {
    const self = this
    return new ConfigureEntity(self, entopts)
  }


  // Entity access: `client.Context().list()` / `client.Context().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Context(entopts?: Record<string, any>) {
    const self = this
    return new ContextEntity(self, entopts)
  }


  // Entity access: `client.CreateSubscriptionsResponseDto().list()` / `client.CreateSubscriptionsResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateSubscriptionsResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new CreateSubscriptionsResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Diff().list()` / `client.Diff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Diff(entopts?: Record<string, any>) {
    const self = this
    return new DiffEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts?: Record<string, any>) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.DomainConnectApplyUrlResponseDto().list()` / `client.DomainConnectApplyUrlResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainConnectApplyUrlResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new DomainConnectApplyUrlResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.DomainConnectStatusResponseDto().list()` / `client.DomainConnectStatusResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainConnectStatusResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new DomainConnectStatusResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.DomainResponseDto().list()` / `client.DomainResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new DomainResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.DomainRouteResponseDto().list()` / `client.DomainRouteResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainRouteResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new DomainRouteResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Environment(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentTagsDto().list()` / `client.EnvironmentTagsDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentTagsDto(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentTagsDtoEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentVariable().list()` / `client.EnvironmentVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentVariable(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentVariableEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentVariableWorkflowInfoDto().list()` / `client.EnvironmentVariableWorkflowInfoDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentVariableWorkflowInfoDto(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentVariableWorkflowInfoDtoEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.GenerateChatOAuthUrlResponseDto().list()` / `client.GenerateChatOAuthUrlResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerateChatOAuthUrlResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new GenerateChatOAuthUrlResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.GeneratePreviewResponseDto().list()` / `client.GeneratePreviewResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GeneratePreviewResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new GeneratePreviewResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.ImportMasterJsonResponseDto().list()` / `client.ImportMasterJsonResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ImportMasterJsonResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new ImportMasterJsonResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.InboxNotificationDto().list()` / `client.InboxNotificationDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InboxNotificationDto(entopts?: Record<string, any>) {
    const self = this
    return new InboxNotificationDtoEntity(self, entopts)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Integration(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationEntity(self, entopts)
  }


  // Entity access: `client.IntegrationResponseDto().list()` / `client.IntegrationResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IntegrationResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Layout().list()` / `client.Layout().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Layout(entopts?: Record<string, any>) {
    const self = this
    return new LayoutEntity(self, entopts)
  }


  // Entity access: `client.LayoutResponseDto().list()` / `client.LayoutResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LayoutResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new LayoutResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Link().list()` / `client.Link().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Link(entopts?: Record<string, any>) {
    const self = this
    return new LinkEntity(self, entopts)
  }


  // Entity access: `client.ListAgentIntegrationsResponseDto().list()` / `client.ListAgentIntegrationsResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListAgentIntegrationsResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new ListAgentIntegrationsResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.ListDomainRoutesResponseDto().list()` / `client.ListDomainRoutesResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListDomainRoutesResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new ListDomainRoutesResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.ListTopicSubscriptionsResponseDto().list()` / `client.ListTopicSubscriptionsResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListTopicSubscriptionsResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new ListTopicSubscriptionsResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.MasterJson().list()` / `client.MasterJson().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MasterJson(entopts?: Record<string, any>) {
    const self = this
    return new MasterJsonEntity(self, entopts)
  }


  // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Message(entopts?: Record<string, any>) {
    const self = this
    return new MessageEntity(self, entopts)
  }


  // Entity access: `client.MessageResponseDto().list()` / `client.MessageResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MessageResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new MessageResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.NotificationFeedItemDto().list()` / `client.NotificationFeedItemDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationFeedItemDto(entopts?: Record<string, any>) {
    const self = this
    return new NotificationFeedItemDtoEntity(self, entopts)
  }


  // Entity access: `client.PreferencesResponseDto().list()` / `client.PreferencesResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PreferencesResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new PreferencesResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Publish().list()` / `client.Publish().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Publish(entopts?: Record<string, any>) {
    const self = this
    return new PublishEntity(self, entopts)
  }


  // Entity access: `client.RemoveSubscriberResponseDto().list()` / `client.RemoveSubscriberResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveSubscriberResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new RemoveSubscriberResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Step().list()` / `client.Step().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Step(entopts?: Record<string, any>) {
    const self = this
    return new StepEntity(self, entopts)
  }


  // Entity access: `client.Subscriber().list()` / `client.Subscriber().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscriber(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberEntity(self, entopts)
  }


  // Entity access: `client.SubscriberNotificationsCountResponseDto().list()` / `client.SubscriberNotificationsCountResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriberNotificationsCountResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberNotificationsCountResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.SubscriberNotificationsResponseDto().list()` / `client.SubscriberNotificationsResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriberNotificationsResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberNotificationsResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.SubscriberPreferencesDto().list()` / `client.SubscriberPreferencesDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriberPreferencesDto(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberPreferencesDtoEntity(self, entopts)
  }


  // Entity access: `client.SubscriberResponseDto().list()` / `client.SubscriberResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriberResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscription(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionEntity(self, entopts)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topic(entopts?: Record<string, any>) {
    const self = this
    return new TopicEntity(self, entopts)
  }


  // Entity access: `client.TopicSubscriberDto().list()` / `client.TopicSubscriberDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TopicSubscriberDto(entopts?: Record<string, any>) {
    const self = this
    return new TopicSubscriberDtoEntity(self, entopts)
  }


  // Entity access: `client.TopicSubscriptionsResponseDto().list()` / `client.TopicSubscriptionsResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TopicSubscriptionsResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new TopicSubscriptionsResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Translation().list()` / `client.Translation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Translation(entopts?: Record<string, any>) {
    const self = this
    return new TranslationEntity(self, entopts)
  }


  // Entity access: `client.TranslationGroupDto().list()` / `client.TranslationGroupDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TranslationGroupDto(entopts?: Record<string, any>) {
    const self = this
    return new TranslationGroupDtoEntity(self, entopts)
  }


  // Entity access: `client.TriggerEventResponseDto().list()` / `client.TriggerEventResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TriggerEventResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new TriggerEventResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.Unseen().list()` / `client.Unseen().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Unseen(entopts?: Record<string, any>) {
    const self = this
    return new UnseenEntity(self, entopts)
  }


  // Entity access: `client.Upload().list()` / `client.Upload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Upload(entopts?: Record<string, any>) {
    const self = this
    return new UploadEntity(self, entopts)
  }


  // Entity access: `client.WebhookResultDto().list()` / `client.WebhookResultDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookResultDto(entopts?: Record<string, any>) {
    const self = this
    return new WebhookResultDtoEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }


  // Entity access: `client.WorkflowInfoDto().list()` / `client.WorkflowInfoDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowInfoDto(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowInfoDtoEntity(self, entopts)
  }


  // Entity access: `client.WorkflowResponseDto().list()` / `client.WorkflowResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowResponseDtoEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new NovuSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return NovuSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Novu' }
  }

  toString() {
    return 'Novu ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = NovuSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  NovuEntityBase,

  NovuSDK,
  SDK,
}


