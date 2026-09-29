# Novu SDK

from novu_sdk.utility.voxgig_struct import voxgig_struct as vs
from novu_sdk.core.utility_type import NovuUtility
from novu_sdk.core.spec import NovuSpec
from novu_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from novu_sdk.utility import register

# Load features
from novu_sdk.feature.base_feature import NovuBaseFeature
from novu_sdk.features import _has_feature, _make_feature


class NovuSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = NovuUtility()
        self._utility = utility

        from novu_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return NovuUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = NovuSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "NovuSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("NovuSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ActivityNotificationResponseDto(self, data=None) -> "ActivityNotificationResponseDtoEntity":
        """Entity factory: client.ActivityNotificationResponseDto().list() / client.ActivityNotificationResponseDto().load({"id": ...})."""
        from novu_sdk.entity.activity_notification_response_dto_entity import ActivityNotificationResponseDtoEntity
        return ActivityNotificationResponseDtoEntity(self, data)


    def Agent(self, data=None) -> "AgentEntity":
        """Entity factory: client.Agent().list() / client.Agent().load({"id": ...})."""
        from novu_sdk.entity.agent_entity import AgentEntity
        return AgentEntity(self, data)


    def AgentIntegrationResponseDto(self, data=None) -> "AgentIntegrationResponseDtoEntity":
        """Entity factory: client.AgentIntegrationResponseDto().list() / client.AgentIntegrationResponseDto().load({"id": ...})."""
        from novu_sdk.entity.agent_integration_response_dto_entity import AgentIntegrationResponseDtoEntity
        return AgentIntegrationResponseDtoEntity(self, data)


    def AgentResponseDto(self, data=None) -> "AgentResponseDtoEntity":
        """Entity factory: client.AgentResponseDto().list() / client.AgentResponseDto().load({"id": ...})."""
        from novu_sdk.entity.agent_response_dto_entity import AgentResponseDtoEntity
        return AgentResponseDtoEntity(self, data)


    def Bulk(self, data=None) -> "BulkEntity":
        """Entity factory: client.Bulk().list() / client.Bulk().load({"id": ...})."""
        from novu_sdk.entity.bulk_entity import BulkEntity
        return BulkEntity(self, data)


    def ChannelConnection(self, data=None) -> "ChannelConnectionEntity":
        """Entity factory: client.ChannelConnection().list() / client.ChannelConnection().load({"id": ...})."""
        from novu_sdk.entity.channel_connection_entity import ChannelConnectionEntity
        return ChannelConnectionEntity(self, data)


    def ChannelEndpoint(self, data=None) -> "ChannelEndpointEntity":
        """Entity factory: client.ChannelEndpoint().list() / client.ChannelEndpoint().load({"id": ...})."""
        from novu_sdk.entity.channel_endpoint_entity import ChannelEndpointEntity
        return ChannelEndpointEntity(self, data)


    def Configure(self, data=None) -> "ConfigureEntity":
        """Entity factory: client.Configure().list() / client.Configure().load({"id": ...})."""
        from novu_sdk.entity.configure_entity import ConfigureEntity
        return ConfigureEntity(self, data)


    def Context(self, data=None) -> "ContextEntity":
        """Entity factory: client.Context().list() / client.Context().load({"id": ...})."""
        from novu_sdk.entity.context_entity import ContextEntity
        return ContextEntity(self, data)


    def CreateSubscriptionsResponseDto(self, data=None) -> "CreateSubscriptionsResponseDtoEntity":
        """Entity factory: client.CreateSubscriptionsResponseDto().list() / client.CreateSubscriptionsResponseDto().load({"id": ...})."""
        from novu_sdk.entity.create_subscriptions_response_dto_entity import CreateSubscriptionsResponseDtoEntity
        return CreateSubscriptionsResponseDtoEntity(self, data)


    def Diff(self, data=None) -> "DiffEntity":
        """Entity factory: client.Diff().list() / client.Diff().load({"id": ...})."""
        from novu_sdk.entity.diff_entity import DiffEntity
        return DiffEntity(self, data)


    def Domain(self, data=None) -> "DomainEntity":
        """Entity factory: client.Domain().list() / client.Domain().load({"id": ...})."""
        from novu_sdk.entity.domain_entity import DomainEntity
        return DomainEntity(self, data)


    def DomainConnectApplyUrlResponseDto(self, data=None) -> "DomainConnectApplyUrlResponseDtoEntity":
        """Entity factory: client.DomainConnectApplyUrlResponseDto().list() / client.DomainConnectApplyUrlResponseDto().load({"id": ...})."""
        from novu_sdk.entity.domain_connect_apply_url_response_dto_entity import DomainConnectApplyUrlResponseDtoEntity
        return DomainConnectApplyUrlResponseDtoEntity(self, data)


    def DomainConnectStatusResponseDto(self, data=None) -> "DomainConnectStatusResponseDtoEntity":
        """Entity factory: client.DomainConnectStatusResponseDto().list() / client.DomainConnectStatusResponseDto().load({"id": ...})."""
        from novu_sdk.entity.domain_connect_status_response_dto_entity import DomainConnectStatusResponseDtoEntity
        return DomainConnectStatusResponseDtoEntity(self, data)


    def DomainResponseDto(self, data=None) -> "DomainResponseDtoEntity":
        """Entity factory: client.DomainResponseDto().list() / client.DomainResponseDto().load({"id": ...})."""
        from novu_sdk.entity.domain_response_dto_entity import DomainResponseDtoEntity
        return DomainResponseDtoEntity(self, data)


    def DomainRouteResponseDto(self, data=None) -> "DomainRouteResponseDtoEntity":
        """Entity factory: client.DomainRouteResponseDto().list() / client.DomainRouteResponseDto().load({"id": ...})."""
        from novu_sdk.entity.domain_route_response_dto_entity import DomainRouteResponseDtoEntity
        return DomainRouteResponseDtoEntity(self, data)


    def Environment(self, data=None) -> "EnvironmentEntity":
        """Entity factory: client.Environment().list() / client.Environment().load({"id": ...})."""
        from novu_sdk.entity.environment_entity import EnvironmentEntity
        return EnvironmentEntity(self, data)


    def EnvironmentTagsDto(self, data=None) -> "EnvironmentTagsDtoEntity":
        """Entity factory: client.EnvironmentTagsDto().list() / client.EnvironmentTagsDto().load({"id": ...})."""
        from novu_sdk.entity.environment_tags_dto_entity import EnvironmentTagsDtoEntity
        return EnvironmentTagsDtoEntity(self, data)


    def EnvironmentVariable(self, data=None) -> "EnvironmentVariableEntity":
        """Entity factory: client.EnvironmentVariable().list() / client.EnvironmentVariable().load({"id": ...})."""
        from novu_sdk.entity.environment_variable_entity import EnvironmentVariableEntity
        return EnvironmentVariableEntity(self, data)


    def EnvironmentVariableWorkflowInfoDto(self, data=None) -> "EnvironmentVariableWorkflowInfoDtoEntity":
        """Entity factory: client.EnvironmentVariableWorkflowInfoDto().list() / client.EnvironmentVariableWorkflowInfoDto().load({"id": ...})."""
        from novu_sdk.entity.environment_variable_workflow_info_dto_entity import EnvironmentVariableWorkflowInfoDtoEntity
        return EnvironmentVariableWorkflowInfoDtoEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from novu_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def GenerateChatOAuthUrlResponseDto(self, data=None) -> "GenerateChatOAuthUrlResponseDtoEntity":
        """Entity factory: client.GenerateChatOAuthUrlResponseDto().list() / client.GenerateChatOAuthUrlResponseDto().load({"id": ...})."""
        from novu_sdk.entity.generate_chat_o_auth_url_response_dto_entity import GenerateChatOAuthUrlResponseDtoEntity
        return GenerateChatOAuthUrlResponseDtoEntity(self, data)


    def GeneratePreviewResponseDto(self, data=None) -> "GeneratePreviewResponseDtoEntity":
        """Entity factory: client.GeneratePreviewResponseDto().list() / client.GeneratePreviewResponseDto().load({"id": ...})."""
        from novu_sdk.entity.generate_preview_response_dto_entity import GeneratePreviewResponseDtoEntity
        return GeneratePreviewResponseDtoEntity(self, data)


    def ImportMasterJsonResponseDto(self, data=None) -> "ImportMasterJsonResponseDtoEntity":
        """Entity factory: client.ImportMasterJsonResponseDto().list() / client.ImportMasterJsonResponseDto().load({"id": ...})."""
        from novu_sdk.entity.import_master_json_response_dto_entity import ImportMasterJsonResponseDtoEntity
        return ImportMasterJsonResponseDtoEntity(self, data)


    def InboxNotificationDto(self, data=None) -> "InboxNotificationDtoEntity":
        """Entity factory: client.InboxNotificationDto().list() / client.InboxNotificationDto().load({"id": ...})."""
        from novu_sdk.entity.inbox_notification_dto_entity import InboxNotificationDtoEntity
        return InboxNotificationDtoEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from novu_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def IntegrationResponseDto(self, data=None) -> "IntegrationResponseDtoEntity":
        """Entity factory: client.IntegrationResponseDto().list() / client.IntegrationResponseDto().load({"id": ...})."""
        from novu_sdk.entity.integration_response_dto_entity import IntegrationResponseDtoEntity
        return IntegrationResponseDtoEntity(self, data)


    def Layout(self, data=None) -> "LayoutEntity":
        """Entity factory: client.Layout().list() / client.Layout().load({"id": ...})."""
        from novu_sdk.entity.layout_entity import LayoutEntity
        return LayoutEntity(self, data)


    def LayoutResponseDto(self, data=None) -> "LayoutResponseDtoEntity":
        """Entity factory: client.LayoutResponseDto().list() / client.LayoutResponseDto().load({"id": ...})."""
        from novu_sdk.entity.layout_response_dto_entity import LayoutResponseDtoEntity
        return LayoutResponseDtoEntity(self, data)


    def Link(self, data=None) -> "LinkEntity":
        """Entity factory: client.Link().list() / client.Link().load({"id": ...})."""
        from novu_sdk.entity.link_entity import LinkEntity
        return LinkEntity(self, data)


    def ListAgentIntegrationsResponseDto(self, data=None) -> "ListAgentIntegrationsResponseDtoEntity":
        """Entity factory: client.ListAgentIntegrationsResponseDto().list() / client.ListAgentIntegrationsResponseDto().load({"id": ...})."""
        from novu_sdk.entity.list_agent_integrations_response_dto_entity import ListAgentIntegrationsResponseDtoEntity
        return ListAgentIntegrationsResponseDtoEntity(self, data)


    def ListDomainRoutesResponseDto(self, data=None) -> "ListDomainRoutesResponseDtoEntity":
        """Entity factory: client.ListDomainRoutesResponseDto().list() / client.ListDomainRoutesResponseDto().load({"id": ...})."""
        from novu_sdk.entity.list_domain_routes_response_dto_entity import ListDomainRoutesResponseDtoEntity
        return ListDomainRoutesResponseDtoEntity(self, data)


    def ListTopicSubscriptionsResponseDto(self, data=None) -> "ListTopicSubscriptionsResponseDtoEntity":
        """Entity factory: client.ListTopicSubscriptionsResponseDto().list() / client.ListTopicSubscriptionsResponseDto().load({"id": ...})."""
        from novu_sdk.entity.list_topic_subscriptions_response_dto_entity import ListTopicSubscriptionsResponseDtoEntity
        return ListTopicSubscriptionsResponseDtoEntity(self, data)


    def MasterJson(self, data=None) -> "MasterJsonEntity":
        """Entity factory: client.MasterJson().list() / client.MasterJson().load({"id": ...})."""
        from novu_sdk.entity.master_json_entity import MasterJsonEntity
        return MasterJsonEntity(self, data)


    def Message(self, data=None) -> "MessageEntity":
        """Entity factory: client.Message().list() / client.Message().load({"id": ...})."""
        from novu_sdk.entity.message_entity import MessageEntity
        return MessageEntity(self, data)


    def MessageResponseDto(self, data=None) -> "MessageResponseDtoEntity":
        """Entity factory: client.MessageResponseDto().list() / client.MessageResponseDto().load({"id": ...})."""
        from novu_sdk.entity.message_response_dto_entity import MessageResponseDtoEntity
        return MessageResponseDtoEntity(self, data)


    def NotificationFeedItemDto(self, data=None) -> "NotificationFeedItemDtoEntity":
        """Entity factory: client.NotificationFeedItemDto().list() / client.NotificationFeedItemDto().load({"id": ...})."""
        from novu_sdk.entity.notification_feed_item_dto_entity import NotificationFeedItemDtoEntity
        return NotificationFeedItemDtoEntity(self, data)


    def PreferencesResponseDto(self, data=None) -> "PreferencesResponseDtoEntity":
        """Entity factory: client.PreferencesResponseDto().list() / client.PreferencesResponseDto().load({"id": ...})."""
        from novu_sdk.entity.preferences_response_dto_entity import PreferencesResponseDtoEntity
        return PreferencesResponseDtoEntity(self, data)


    def Publish(self, data=None) -> "PublishEntity":
        """Entity factory: client.Publish().list() / client.Publish().load({"id": ...})."""
        from novu_sdk.entity.publish_entity import PublishEntity
        return PublishEntity(self, data)


    def RemoveSubscriberResponseDto(self, data=None) -> "RemoveSubscriberResponseDtoEntity":
        """Entity factory: client.RemoveSubscriberResponseDto().list() / client.RemoveSubscriberResponseDto().load({"id": ...})."""
        from novu_sdk.entity.remove_subscriber_response_dto_entity import RemoveSubscriberResponseDtoEntity
        return RemoveSubscriberResponseDtoEntity(self, data)


    def Step(self, data=None) -> "StepEntity":
        """Entity factory: client.Step().list() / client.Step().load({"id": ...})."""
        from novu_sdk.entity.step_entity import StepEntity
        return StepEntity(self, data)


    def Subscriber(self, data=None) -> "SubscriberEntity":
        """Entity factory: client.Subscriber().list() / client.Subscriber().load({"id": ...})."""
        from novu_sdk.entity.subscriber_entity import SubscriberEntity
        return SubscriberEntity(self, data)


    def SubscriberNotificationsCountResponseDto(self, data=None) -> "SubscriberNotificationsCountResponseDtoEntity":
        """Entity factory: client.SubscriberNotificationsCountResponseDto().list() / client.SubscriberNotificationsCountResponseDto().load({"id": ...})."""
        from novu_sdk.entity.subscriber_notifications_count_response_dto_entity import SubscriberNotificationsCountResponseDtoEntity
        return SubscriberNotificationsCountResponseDtoEntity(self, data)


    def SubscriberNotificationsResponseDto(self, data=None) -> "SubscriberNotificationsResponseDtoEntity":
        """Entity factory: client.SubscriberNotificationsResponseDto().list() / client.SubscriberNotificationsResponseDto().load({"id": ...})."""
        from novu_sdk.entity.subscriber_notifications_response_dto_entity import SubscriberNotificationsResponseDtoEntity
        return SubscriberNotificationsResponseDtoEntity(self, data)


    def SubscriberPreferencesDto(self, data=None) -> "SubscriberPreferencesDtoEntity":
        """Entity factory: client.SubscriberPreferencesDto().list() / client.SubscriberPreferencesDto().load({"id": ...})."""
        from novu_sdk.entity.subscriber_preferences_dto_entity import SubscriberPreferencesDtoEntity
        return SubscriberPreferencesDtoEntity(self, data)


    def SubscriberResponseDto(self, data=None) -> "SubscriberResponseDtoEntity":
        """Entity factory: client.SubscriberResponseDto().list() / client.SubscriberResponseDto().load({"id": ...})."""
        from novu_sdk.entity.subscriber_response_dto_entity import SubscriberResponseDtoEntity
        return SubscriberResponseDtoEntity(self, data)


    def Subscription(self, data=None) -> "SubscriptionEntity":
        """Entity factory: client.Subscription().list() / client.Subscription().load({"id": ...})."""
        from novu_sdk.entity.subscription_entity import SubscriptionEntity
        return SubscriptionEntity(self, data)


    def Topic(self, data=None) -> "TopicEntity":
        """Entity factory: client.Topic().list() / client.Topic().load({"id": ...})."""
        from novu_sdk.entity.topic_entity import TopicEntity
        return TopicEntity(self, data)


    def TopicSubscriberDto(self, data=None) -> "TopicSubscriberDtoEntity":
        """Entity factory: client.TopicSubscriberDto().list() / client.TopicSubscriberDto().load({"id": ...})."""
        from novu_sdk.entity.topic_subscriber_dto_entity import TopicSubscriberDtoEntity
        return TopicSubscriberDtoEntity(self, data)


    def TopicSubscriptionsResponseDto(self, data=None) -> "TopicSubscriptionsResponseDtoEntity":
        """Entity factory: client.TopicSubscriptionsResponseDto().list() / client.TopicSubscriptionsResponseDto().load({"id": ...})."""
        from novu_sdk.entity.topic_subscriptions_response_dto_entity import TopicSubscriptionsResponseDtoEntity
        return TopicSubscriptionsResponseDtoEntity(self, data)


    def Translation(self, data=None) -> "TranslationEntity":
        """Entity factory: client.Translation().list() / client.Translation().load({"id": ...})."""
        from novu_sdk.entity.translation_entity import TranslationEntity
        return TranslationEntity(self, data)


    def TranslationGroupDto(self, data=None) -> "TranslationGroupDtoEntity":
        """Entity factory: client.TranslationGroupDto().list() / client.TranslationGroupDto().load({"id": ...})."""
        from novu_sdk.entity.translation_group_dto_entity import TranslationGroupDtoEntity
        return TranslationGroupDtoEntity(self, data)


    def TriggerEventResponseDto(self, data=None) -> "TriggerEventResponseDtoEntity":
        """Entity factory: client.TriggerEventResponseDto().list() / client.TriggerEventResponseDto().load({"id": ...})."""
        from novu_sdk.entity.trigger_event_response_dto_entity import TriggerEventResponseDtoEntity
        return TriggerEventResponseDtoEntity(self, data)


    def Unseen(self, data=None) -> "UnseenEntity":
        """Entity factory: client.Unseen().list() / client.Unseen().load({"id": ...})."""
        from novu_sdk.entity.unseen_entity import UnseenEntity
        return UnseenEntity(self, data)


    def Upload(self, data=None) -> "UploadEntity":
        """Entity factory: client.Upload().list() / client.Upload().load({"id": ...})."""
        from novu_sdk.entity.upload_entity import UploadEntity
        return UploadEntity(self, data)


    def WebhookResultDto(self, data=None) -> "WebhookResultDtoEntity":
        """Entity factory: client.WebhookResultDto().list() / client.WebhookResultDto().load({"id": ...})."""
        from novu_sdk.entity.webhook_result_dto_entity import WebhookResultDtoEntity
        return WebhookResultDtoEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from novu_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)


    def WorkflowInfoDto(self, data=None) -> "WorkflowInfoDtoEntity":
        """Entity factory: client.WorkflowInfoDto().list() / client.WorkflowInfoDto().load({"id": ...})."""
        from novu_sdk.entity.workflow_info_dto_entity import WorkflowInfoDtoEntity
        return WorkflowInfoDtoEntity(self, data)


    def WorkflowResponseDto(self, data=None) -> "WorkflowResponseDtoEntity":
        """Entity factory: client.WorkflowResponseDto().list() / client.WorkflowResponseDto().load({"id": ...})."""
        from novu_sdk.entity.workflow_response_dto_entity import WorkflowResponseDtoEntity
        return WorkflowResponseDtoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "NovuSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from novu_sdk.entity.activity_notification_response_dto_entity import ActivityNotificationResponseDtoEntity
    from novu_sdk.entity.agent_entity import AgentEntity
    from novu_sdk.entity.agent_integration_response_dto_entity import AgentIntegrationResponseDtoEntity
    from novu_sdk.entity.agent_response_dto_entity import AgentResponseDtoEntity
    from novu_sdk.entity.bulk_entity import BulkEntity
    from novu_sdk.entity.channel_connection_entity import ChannelConnectionEntity
    from novu_sdk.entity.channel_endpoint_entity import ChannelEndpointEntity
    from novu_sdk.entity.configure_entity import ConfigureEntity
    from novu_sdk.entity.context_entity import ContextEntity
    from novu_sdk.entity.create_subscriptions_response_dto_entity import CreateSubscriptionsResponseDtoEntity
    from novu_sdk.entity.diff_entity import DiffEntity
    from novu_sdk.entity.domain_entity import DomainEntity
    from novu_sdk.entity.domain_connect_apply_url_response_dto_entity import DomainConnectApplyUrlResponseDtoEntity
    from novu_sdk.entity.domain_connect_status_response_dto_entity import DomainConnectStatusResponseDtoEntity
    from novu_sdk.entity.domain_response_dto_entity import DomainResponseDtoEntity
    from novu_sdk.entity.domain_route_response_dto_entity import DomainRouteResponseDtoEntity
    from novu_sdk.entity.environment_entity import EnvironmentEntity
    from novu_sdk.entity.environment_tags_dto_entity import EnvironmentTagsDtoEntity
    from novu_sdk.entity.environment_variable_entity import EnvironmentVariableEntity
    from novu_sdk.entity.environment_variable_workflow_info_dto_entity import EnvironmentVariableWorkflowInfoDtoEntity
    from novu_sdk.entity.event_entity import EventEntity
    from novu_sdk.entity.generate_chat_o_auth_url_response_dto_entity import GenerateChatOAuthUrlResponseDtoEntity
    from novu_sdk.entity.generate_preview_response_dto_entity import GeneratePreviewResponseDtoEntity
    from novu_sdk.entity.import_master_json_response_dto_entity import ImportMasterJsonResponseDtoEntity
    from novu_sdk.entity.inbox_notification_dto_entity import InboxNotificationDtoEntity
    from novu_sdk.entity.integration_entity import IntegrationEntity
    from novu_sdk.entity.integration_response_dto_entity import IntegrationResponseDtoEntity
    from novu_sdk.entity.layout_entity import LayoutEntity
    from novu_sdk.entity.layout_response_dto_entity import LayoutResponseDtoEntity
    from novu_sdk.entity.link_entity import LinkEntity
    from novu_sdk.entity.list_agent_integrations_response_dto_entity import ListAgentIntegrationsResponseDtoEntity
    from novu_sdk.entity.list_domain_routes_response_dto_entity import ListDomainRoutesResponseDtoEntity
    from novu_sdk.entity.list_topic_subscriptions_response_dto_entity import ListTopicSubscriptionsResponseDtoEntity
    from novu_sdk.entity.master_json_entity import MasterJsonEntity
    from novu_sdk.entity.message_entity import MessageEntity
    from novu_sdk.entity.message_response_dto_entity import MessageResponseDtoEntity
    from novu_sdk.entity.notification_feed_item_dto_entity import NotificationFeedItemDtoEntity
    from novu_sdk.entity.preferences_response_dto_entity import PreferencesResponseDtoEntity
    from novu_sdk.entity.publish_entity import PublishEntity
    from novu_sdk.entity.remove_subscriber_response_dto_entity import RemoveSubscriberResponseDtoEntity
    from novu_sdk.entity.step_entity import StepEntity
    from novu_sdk.entity.subscriber_entity import SubscriberEntity
    from novu_sdk.entity.subscriber_notifications_count_response_dto_entity import SubscriberNotificationsCountResponseDtoEntity
    from novu_sdk.entity.subscriber_notifications_response_dto_entity import SubscriberNotificationsResponseDtoEntity
    from novu_sdk.entity.subscriber_preferences_dto_entity import SubscriberPreferencesDtoEntity
    from novu_sdk.entity.subscriber_response_dto_entity import SubscriberResponseDtoEntity
    from novu_sdk.entity.subscription_entity import SubscriptionEntity
    from novu_sdk.entity.topic_entity import TopicEntity
    from novu_sdk.entity.topic_subscriber_dto_entity import TopicSubscriberDtoEntity
    from novu_sdk.entity.topic_subscriptions_response_dto_entity import TopicSubscriptionsResponseDtoEntity
    from novu_sdk.entity.translation_entity import TranslationEntity
    from novu_sdk.entity.translation_group_dto_entity import TranslationGroupDtoEntity
    from novu_sdk.entity.trigger_event_response_dto_entity import TriggerEventResponseDtoEntity
    from novu_sdk.entity.unseen_entity import UnseenEntity
    from novu_sdk.entity.upload_entity import UploadEntity
    from novu_sdk.entity.webhook_result_dto_entity import WebhookResultDtoEntity
    from novu_sdk.entity.workflow_entity import WorkflowEntity
    from novu_sdk.entity.workflow_info_dto_entity import WorkflowInfoDtoEntity
    from novu_sdk.entity.workflow_response_dto_entity import WorkflowResponseDtoEntity
