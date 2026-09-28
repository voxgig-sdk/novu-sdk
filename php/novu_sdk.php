<?php
declare(strict_types=1);

// Novu SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class NovuSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new NovuUtility();
        $this->_utility = $utility;

        $config = NovuConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = NovuHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = NovuHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!NovuFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, NovuFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return NovuUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = NovuHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = NovuHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = NovuHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new NovuSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new NovuError($op . "_allow",
                "NovuSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = NovuHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = NovuHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new NovuError("graphql_error",
                "NovuSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_activity_notification_response_dto = null;

    // Canonical facade: $client->ActivityNotificationResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_notification_response_dto()
    // resolves here too.
    public function ActivityNotificationResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/activity_notification_response_dto_entity.php';
        if ($data === null) {
            if ($this->_activity_notification_response_dto === null) {
                $this->_activity_notification_response_dto = new ActivityNotificationResponseDtoEntity($this, null);
            }
            return $this->_activity_notification_response_dto;
        }
        return new ActivityNotificationResponseDtoEntity($this, $data);
    }


    private $_agent = null;

    // Canonical facade: $client->Agent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent()
    // resolves here too.
    public function Agent($data = null)
    {
        require_once __DIR__ . '/entity/agent_entity.php';
        if ($data === null) {
            if ($this->_agent === null) {
                $this->_agent = new AgentEntity($this, null);
            }
            return $this->_agent;
        }
        return new AgentEntity($this, $data);
    }


    private $_agent_integration_response_dto = null;

    // Canonical facade: $client->AgentIntegrationResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_integration_response_dto()
    // resolves here too.
    public function AgentIntegrationResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/agent_integration_response_dto_entity.php';
        if ($data === null) {
            if ($this->_agent_integration_response_dto === null) {
                $this->_agent_integration_response_dto = new AgentIntegrationResponseDtoEntity($this, null);
            }
            return $this->_agent_integration_response_dto;
        }
        return new AgentIntegrationResponseDtoEntity($this, $data);
    }


    private $_agent_response_dto = null;

    // Canonical facade: $client->AgentResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_response_dto()
    // resolves here too.
    public function AgentResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/agent_response_dto_entity.php';
        if ($data === null) {
            if ($this->_agent_response_dto === null) {
                $this->_agent_response_dto = new AgentResponseDtoEntity($this, null);
            }
            return $this->_agent_response_dto;
        }
        return new AgentResponseDtoEntity($this, $data);
    }


    private $_bulk = null;

    // Canonical facade: $client->Bulk()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk()
    // resolves here too.
    public function Bulk($data = null)
    {
        require_once __DIR__ . '/entity/bulk_entity.php';
        if ($data === null) {
            if ($this->_bulk === null) {
                $this->_bulk = new BulkEntity($this, null);
            }
            return $this->_bulk;
        }
        return new BulkEntity($this, $data);
    }


    private $_channel_connection = null;

    // Canonical facade: $client->ChannelConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->channel_connection()
    // resolves here too.
    public function ChannelConnection($data = null)
    {
        require_once __DIR__ . '/entity/channel_connection_entity.php';
        if ($data === null) {
            if ($this->_channel_connection === null) {
                $this->_channel_connection = new ChannelConnectionEntity($this, null);
            }
            return $this->_channel_connection;
        }
        return new ChannelConnectionEntity($this, $data);
    }


    private $_channel_endpoint = null;

    // Canonical facade: $client->ChannelEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->channel_endpoint()
    // resolves here too.
    public function ChannelEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/channel_endpoint_entity.php';
        if ($data === null) {
            if ($this->_channel_endpoint === null) {
                $this->_channel_endpoint = new ChannelEndpointEntity($this, null);
            }
            return $this->_channel_endpoint;
        }
        return new ChannelEndpointEntity($this, $data);
    }


    private $_configure = null;

    // Canonical facade: $client->Configure()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->configure()
    // resolves here too.
    public function Configure($data = null)
    {
        require_once __DIR__ . '/entity/configure_entity.php';
        if ($data === null) {
            if ($this->_configure === null) {
                $this->_configure = new ConfigureEntity($this, null);
            }
            return $this->_configure;
        }
        return new ConfigureEntity($this, $data);
    }


    private $_context = null;

    // Canonical facade: $client->Context()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->context()
    // resolves here too.
    public function Context($data = null)
    {
        require_once __DIR__ . '/entity/context_entity.php';
        if ($data === null) {
            if ($this->_context === null) {
                $this->_context = new ContextEntity($this, null);
            }
            return $this->_context;
        }
        return new ContextEntity($this, $data);
    }


    private $_create_subscriptions_response_dto = null;

    // Canonical facade: $client->CreateSubscriptionsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_subscriptions_response_dto()
    // resolves here too.
    public function CreateSubscriptionsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/create_subscriptions_response_dto_entity.php';
        if ($data === null) {
            if ($this->_create_subscriptions_response_dto === null) {
                $this->_create_subscriptions_response_dto = new CreateSubscriptionsResponseDtoEntity($this, null);
            }
            return $this->_create_subscriptions_response_dto;
        }
        return new CreateSubscriptionsResponseDtoEntity($this, $data);
    }


    private $_diff = null;

    // Canonical facade: $client->Diff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->diff()
    // resolves here too.
    public function Diff($data = null)
    {
        require_once __DIR__ . '/entity/diff_entity.php';
        if ($data === null) {
            if ($this->_diff === null) {
                $this->_diff = new DiffEntity($this, null);
            }
            return $this->_diff;
        }
        return new DiffEntity($this, $data);
    }


    private $_domain = null;

    // Canonical facade: $client->Domain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain()
    // resolves here too.
    public function Domain($data = null)
    {
        require_once __DIR__ . '/entity/domain_entity.php';
        if ($data === null) {
            if ($this->_domain === null) {
                $this->_domain = new DomainEntity($this, null);
            }
            return $this->_domain;
        }
        return new DomainEntity($this, $data);
    }


    private $_domain_connect_apply_url_response_dto = null;

    // Canonical facade: $client->DomainConnectApplyUrlResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_connect_apply_url_response_dto()
    // resolves here too.
    public function DomainConnectApplyUrlResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/domain_connect_apply_url_response_dto_entity.php';
        if ($data === null) {
            if ($this->_domain_connect_apply_url_response_dto === null) {
                $this->_domain_connect_apply_url_response_dto = new DomainConnectApplyUrlResponseDtoEntity($this, null);
            }
            return $this->_domain_connect_apply_url_response_dto;
        }
        return new DomainConnectApplyUrlResponseDtoEntity($this, $data);
    }


    private $_domain_connect_status_response_dto = null;

    // Canonical facade: $client->DomainConnectStatusResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_connect_status_response_dto()
    // resolves here too.
    public function DomainConnectStatusResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/domain_connect_status_response_dto_entity.php';
        if ($data === null) {
            if ($this->_domain_connect_status_response_dto === null) {
                $this->_domain_connect_status_response_dto = new DomainConnectStatusResponseDtoEntity($this, null);
            }
            return $this->_domain_connect_status_response_dto;
        }
        return new DomainConnectStatusResponseDtoEntity($this, $data);
    }


    private $_domain_response_dto = null;

    // Canonical facade: $client->DomainResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_response_dto()
    // resolves here too.
    public function DomainResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/domain_response_dto_entity.php';
        if ($data === null) {
            if ($this->_domain_response_dto === null) {
                $this->_domain_response_dto = new DomainResponseDtoEntity($this, null);
            }
            return $this->_domain_response_dto;
        }
        return new DomainResponseDtoEntity($this, $data);
    }


    private $_domain_route_response_dto = null;

    // Canonical facade: $client->DomainRouteResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_route_response_dto()
    // resolves here too.
    public function DomainRouteResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/domain_route_response_dto_entity.php';
        if ($data === null) {
            if ($this->_domain_route_response_dto === null) {
                $this->_domain_route_response_dto = new DomainRouteResponseDtoEntity($this, null);
            }
            return $this->_domain_route_response_dto;
        }
        return new DomainRouteResponseDtoEntity($this, $data);
    }


    private $_environment = null;

    // Canonical facade: $client->Environment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment()
    // resolves here too.
    public function Environment($data = null)
    {
        require_once __DIR__ . '/entity/environment_entity.php';
        if ($data === null) {
            if ($this->_environment === null) {
                $this->_environment = new EnvironmentEntity($this, null);
            }
            return $this->_environment;
        }
        return new EnvironmentEntity($this, $data);
    }


    private $_environment_tags_dto = null;

    // Canonical facade: $client->EnvironmentTagsDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment_tags_dto()
    // resolves here too.
    public function EnvironmentTagsDto($data = null)
    {
        require_once __DIR__ . '/entity/environment_tags_dto_entity.php';
        if ($data === null) {
            if ($this->_environment_tags_dto === null) {
                $this->_environment_tags_dto = new EnvironmentTagsDtoEntity($this, null);
            }
            return $this->_environment_tags_dto;
        }
        return new EnvironmentTagsDtoEntity($this, $data);
    }


    private $_environment_variable = null;

    // Canonical facade: $client->EnvironmentVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment_variable()
    // resolves here too.
    public function EnvironmentVariable($data = null)
    {
        require_once __DIR__ . '/entity/environment_variable_entity.php';
        if ($data === null) {
            if ($this->_environment_variable === null) {
                $this->_environment_variable = new EnvironmentVariableEntity($this, null);
            }
            return $this->_environment_variable;
        }
        return new EnvironmentVariableEntity($this, $data);
    }


    private $_environment_variable_workflow_info_dto = null;

    // Canonical facade: $client->EnvironmentVariableWorkflowInfoDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment_variable_workflow_info_dto()
    // resolves here too.
    public function EnvironmentVariableWorkflowInfoDto($data = null)
    {
        require_once __DIR__ . '/entity/environment_variable_workflow_info_dto_entity.php';
        if ($data === null) {
            if ($this->_environment_variable_workflow_info_dto === null) {
                $this->_environment_variable_workflow_info_dto = new EnvironmentVariableWorkflowInfoDtoEntity($this, null);
            }
            return $this->_environment_variable_workflow_info_dto;
        }
        return new EnvironmentVariableWorkflowInfoDtoEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_generate_chat_o_auth_url_response_dto = null;

    // Canonical facade: $client->GenerateChatOAuthUrlResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_chat_o_auth_url_response_dto()
    // resolves here too.
    public function GenerateChatOAuthUrlResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/generate_chat_o_auth_url_response_dto_entity.php';
        if ($data === null) {
            if ($this->_generate_chat_o_auth_url_response_dto === null) {
                $this->_generate_chat_o_auth_url_response_dto = new GenerateChatOAuthUrlResponseDtoEntity($this, null);
            }
            return $this->_generate_chat_o_auth_url_response_dto;
        }
        return new GenerateChatOAuthUrlResponseDtoEntity($this, $data);
    }


    private $_generate_preview_response_dto = null;

    // Canonical facade: $client->GeneratePreviewResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_preview_response_dto()
    // resolves here too.
    public function GeneratePreviewResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/generate_preview_response_dto_entity.php';
        if ($data === null) {
            if ($this->_generate_preview_response_dto === null) {
                $this->_generate_preview_response_dto = new GeneratePreviewResponseDtoEntity($this, null);
            }
            return $this->_generate_preview_response_dto;
        }
        return new GeneratePreviewResponseDtoEntity($this, $data);
    }


    private $_import_master_json_response_dto = null;

    // Canonical facade: $client->ImportMasterJsonResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->import_master_json_response_dto()
    // resolves here too.
    public function ImportMasterJsonResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/import_master_json_response_dto_entity.php';
        if ($data === null) {
            if ($this->_import_master_json_response_dto === null) {
                $this->_import_master_json_response_dto = new ImportMasterJsonResponseDtoEntity($this, null);
            }
            return $this->_import_master_json_response_dto;
        }
        return new ImportMasterJsonResponseDtoEntity($this, $data);
    }


    private $_inbox_notification_dto = null;

    // Canonical facade: $client->InboxNotificationDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->inbox_notification_dto()
    // resolves here too.
    public function InboxNotificationDto($data = null)
    {
        require_once __DIR__ . '/entity/inbox_notification_dto_entity.php';
        if ($data === null) {
            if ($this->_inbox_notification_dto === null) {
                $this->_inbox_notification_dto = new InboxNotificationDtoEntity($this, null);
            }
            return $this->_inbox_notification_dto;
        }
        return new InboxNotificationDtoEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_integration_response_dto = null;

    // Canonical facade: $client->IntegrationResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration_response_dto()
    // resolves here too.
    public function IntegrationResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/integration_response_dto_entity.php';
        if ($data === null) {
            if ($this->_integration_response_dto === null) {
                $this->_integration_response_dto = new IntegrationResponseDtoEntity($this, null);
            }
            return $this->_integration_response_dto;
        }
        return new IntegrationResponseDtoEntity($this, $data);
    }


    private $_layout = null;

    // Canonical facade: $client->Layout()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->layout()
    // resolves here too.
    public function Layout($data = null)
    {
        require_once __DIR__ . '/entity/layout_entity.php';
        if ($data === null) {
            if ($this->_layout === null) {
                $this->_layout = new LayoutEntity($this, null);
            }
            return $this->_layout;
        }
        return new LayoutEntity($this, $data);
    }


    private $_layout_response_dto = null;

    // Canonical facade: $client->LayoutResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->layout_response_dto()
    // resolves here too.
    public function LayoutResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/layout_response_dto_entity.php';
        if ($data === null) {
            if ($this->_layout_response_dto === null) {
                $this->_layout_response_dto = new LayoutResponseDtoEntity($this, null);
            }
            return $this->_layout_response_dto;
        }
        return new LayoutResponseDtoEntity($this, $data);
    }


    private $_link = null;

    // Canonical facade: $client->Link()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link()
    // resolves here too.
    public function Link($data = null)
    {
        require_once __DIR__ . '/entity/link_entity.php';
        if ($data === null) {
            if ($this->_link === null) {
                $this->_link = new LinkEntity($this, null);
            }
            return $this->_link;
        }
        return new LinkEntity($this, $data);
    }


    private $_list_agent_integrations_response_dto = null;

    // Canonical facade: $client->ListAgentIntegrationsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_agent_integrations_response_dto()
    // resolves here too.
    public function ListAgentIntegrationsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_agent_integrations_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_agent_integrations_response_dto === null) {
                $this->_list_agent_integrations_response_dto = new ListAgentIntegrationsResponseDtoEntity($this, null);
            }
            return $this->_list_agent_integrations_response_dto;
        }
        return new ListAgentIntegrationsResponseDtoEntity($this, $data);
    }


    private $_list_agents_response_dto = null;

    // Canonical facade: $client->ListAgentsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_agents_response_dto()
    // resolves here too.
    public function ListAgentsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_agents_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_agents_response_dto === null) {
                $this->_list_agents_response_dto = new ListAgentsResponseDtoEntity($this, null);
            }
            return $this->_list_agents_response_dto;
        }
        return new ListAgentsResponseDtoEntity($this, $data);
    }


    private $_list_channel_connections_response_dto = null;

    // Canonical facade: $client->ListChannelConnectionsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_channel_connections_response_dto()
    // resolves here too.
    public function ListChannelConnectionsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_channel_connections_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_channel_connections_response_dto === null) {
                $this->_list_channel_connections_response_dto = new ListChannelConnectionsResponseDtoEntity($this, null);
            }
            return $this->_list_channel_connections_response_dto;
        }
        return new ListChannelConnectionsResponseDtoEntity($this, $data);
    }


    private $_list_channel_endpoints_response_dto = null;

    // Canonical facade: $client->ListChannelEndpointsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_channel_endpoints_response_dto()
    // resolves here too.
    public function ListChannelEndpointsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_channel_endpoints_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_channel_endpoints_response_dto === null) {
                $this->_list_channel_endpoints_response_dto = new ListChannelEndpointsResponseDtoEntity($this, null);
            }
            return $this->_list_channel_endpoints_response_dto;
        }
        return new ListChannelEndpointsResponseDtoEntity($this, $data);
    }


    private $_list_contexts_response_dto = null;

    // Canonical facade: $client->ListContextsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_contexts_response_dto()
    // resolves here too.
    public function ListContextsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_contexts_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_contexts_response_dto === null) {
                $this->_list_contexts_response_dto = new ListContextsResponseDtoEntity($this, null);
            }
            return $this->_list_contexts_response_dto;
        }
        return new ListContextsResponseDtoEntity($this, $data);
    }


    private $_list_domain_routes_response_dto = null;

    // Canonical facade: $client->ListDomainRoutesResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_domain_routes_response_dto()
    // resolves here too.
    public function ListDomainRoutesResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_domain_routes_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_domain_routes_response_dto === null) {
                $this->_list_domain_routes_response_dto = new ListDomainRoutesResponseDtoEntity($this, null);
            }
            return $this->_list_domain_routes_response_dto;
        }
        return new ListDomainRoutesResponseDtoEntity($this, $data);
    }


    private $_list_domains_response_dto = null;

    // Canonical facade: $client->ListDomainsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_domains_response_dto()
    // resolves here too.
    public function ListDomainsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_domains_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_domains_response_dto === null) {
                $this->_list_domains_response_dto = new ListDomainsResponseDtoEntity($this, null);
            }
            return $this->_list_domains_response_dto;
        }
        return new ListDomainsResponseDtoEntity($this, $data);
    }


    private $_list_subscribers_response_dto = null;

    // Canonical facade: $client->ListSubscribersResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_subscribers_response_dto()
    // resolves here too.
    public function ListSubscribersResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_subscribers_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_subscribers_response_dto === null) {
                $this->_list_subscribers_response_dto = new ListSubscribersResponseDtoEntity($this, null);
            }
            return $this->_list_subscribers_response_dto;
        }
        return new ListSubscribersResponseDtoEntity($this, $data);
    }


    private $_list_topic_subscriptions_response_dto = null;

    // Canonical facade: $client->ListTopicSubscriptionsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_topic_subscriptions_response_dto()
    // resolves here too.
    public function ListTopicSubscriptionsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_topic_subscriptions_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_topic_subscriptions_response_dto === null) {
                $this->_list_topic_subscriptions_response_dto = new ListTopicSubscriptionsResponseDtoEntity($this, null);
            }
            return $this->_list_topic_subscriptions_response_dto;
        }
        return new ListTopicSubscriptionsResponseDtoEntity($this, $data);
    }


    private $_list_topics_response_dto = null;

    // Canonical facade: $client->ListTopicsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_topics_response_dto()
    // resolves here too.
    public function ListTopicsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/list_topics_response_dto_entity.php';
        if ($data === null) {
            if ($this->_list_topics_response_dto === null) {
                $this->_list_topics_response_dto = new ListTopicsResponseDtoEntity($this, null);
            }
            return $this->_list_topics_response_dto;
        }
        return new ListTopicsResponseDtoEntity($this, $data);
    }


    private $_master_json = null;

    // Canonical facade: $client->MasterJson()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->master_json()
    // resolves here too.
    public function MasterJson($data = null)
    {
        require_once __DIR__ . '/entity/master_json_entity.php';
        if ($data === null) {
            if ($this->_master_json === null) {
                $this->_master_json = new MasterJsonEntity($this, null);
            }
            return $this->_master_json;
        }
        return new MasterJsonEntity($this, $data);
    }


    private $_message = null;

    // Canonical facade: $client->Message()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message()
    // resolves here too.
    public function Message($data = null)
    {
        require_once __DIR__ . '/entity/message_entity.php';
        if ($data === null) {
            if ($this->_message === null) {
                $this->_message = new MessageEntity($this, null);
            }
            return $this->_message;
        }
        return new MessageEntity($this, $data);
    }


    private $_message_response_dto = null;

    // Canonical facade: $client->MessageResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message_response_dto()
    // resolves here too.
    public function MessageResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/message_response_dto_entity.php';
        if ($data === null) {
            if ($this->_message_response_dto === null) {
                $this->_message_response_dto = new MessageResponseDtoEntity($this, null);
            }
            return $this->_message_response_dto;
        }
        return new MessageResponseDtoEntity($this, $data);
    }


    private $_notification_feed_item_dto = null;

    // Canonical facade: $client->NotificationFeedItemDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification_feed_item_dto()
    // resolves here too.
    public function NotificationFeedItemDto($data = null)
    {
        require_once __DIR__ . '/entity/notification_feed_item_dto_entity.php';
        if ($data === null) {
            if ($this->_notification_feed_item_dto === null) {
                $this->_notification_feed_item_dto = new NotificationFeedItemDtoEntity($this, null);
            }
            return $this->_notification_feed_item_dto;
        }
        return new NotificationFeedItemDtoEntity($this, $data);
    }


    private $_preferences_response_dto = null;

    // Canonical facade: $client->PreferencesResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->preferences_response_dto()
    // resolves here too.
    public function PreferencesResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/preferences_response_dto_entity.php';
        if ($data === null) {
            if ($this->_preferences_response_dto === null) {
                $this->_preferences_response_dto = new PreferencesResponseDtoEntity($this, null);
            }
            return $this->_preferences_response_dto;
        }
        return new PreferencesResponseDtoEntity($this, $data);
    }


    private $_publish = null;

    // Canonical facade: $client->Publish()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->publish()
    // resolves here too.
    public function Publish($data = null)
    {
        require_once __DIR__ . '/entity/publish_entity.php';
        if ($data === null) {
            if ($this->_publish === null) {
                $this->_publish = new PublishEntity($this, null);
            }
            return $this->_publish;
        }
        return new PublishEntity($this, $data);
    }


    private $_remove_subscriber_response_dto = null;

    // Canonical facade: $client->RemoveSubscriberResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->remove_subscriber_response_dto()
    // resolves here too.
    public function RemoveSubscriberResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/remove_subscriber_response_dto_entity.php';
        if ($data === null) {
            if ($this->_remove_subscriber_response_dto === null) {
                $this->_remove_subscriber_response_dto = new RemoveSubscriberResponseDtoEntity($this, null);
            }
            return $this->_remove_subscriber_response_dto;
        }
        return new RemoveSubscriberResponseDtoEntity($this, $data);
    }


    private $_step = null;

    // Canonical facade: $client->Step()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->step()
    // resolves here too.
    public function Step($data = null)
    {
        require_once __DIR__ . '/entity/step_entity.php';
        if ($data === null) {
            if ($this->_step === null) {
                $this->_step = new StepEntity($this, null);
            }
            return $this->_step;
        }
        return new StepEntity($this, $data);
    }


    private $_subscriber = null;

    // Canonical facade: $client->Subscriber()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber()
    // resolves here too.
    public function Subscriber($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_entity.php';
        if ($data === null) {
            if ($this->_subscriber === null) {
                $this->_subscriber = new SubscriberEntity($this, null);
            }
            return $this->_subscriber;
        }
        return new SubscriberEntity($this, $data);
    }


    private $_subscriber_notifications_count_response_dto = null;

    // Canonical facade: $client->SubscriberNotificationsCountResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber_notifications_count_response_dto()
    // resolves here too.
    public function SubscriberNotificationsCountResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_notifications_count_response_dto_entity.php';
        if ($data === null) {
            if ($this->_subscriber_notifications_count_response_dto === null) {
                $this->_subscriber_notifications_count_response_dto = new SubscriberNotificationsCountResponseDtoEntity($this, null);
            }
            return $this->_subscriber_notifications_count_response_dto;
        }
        return new SubscriberNotificationsCountResponseDtoEntity($this, $data);
    }


    private $_subscriber_notifications_response_dto = null;

    // Canonical facade: $client->SubscriberNotificationsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber_notifications_response_dto()
    // resolves here too.
    public function SubscriberNotificationsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_notifications_response_dto_entity.php';
        if ($data === null) {
            if ($this->_subscriber_notifications_response_dto === null) {
                $this->_subscriber_notifications_response_dto = new SubscriberNotificationsResponseDtoEntity($this, null);
            }
            return $this->_subscriber_notifications_response_dto;
        }
        return new SubscriberNotificationsResponseDtoEntity($this, $data);
    }


    private $_subscriber_preferences_dto = null;

    // Canonical facade: $client->SubscriberPreferencesDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber_preferences_dto()
    // resolves here too.
    public function SubscriberPreferencesDto($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_preferences_dto_entity.php';
        if ($data === null) {
            if ($this->_subscriber_preferences_dto === null) {
                $this->_subscriber_preferences_dto = new SubscriberPreferencesDtoEntity($this, null);
            }
            return $this->_subscriber_preferences_dto;
        }
        return new SubscriberPreferencesDtoEntity($this, $data);
    }


    private $_subscriber_response_dto = null;

    // Canonical facade: $client->SubscriberResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber_response_dto()
    // resolves here too.
    public function SubscriberResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_response_dto_entity.php';
        if ($data === null) {
            if ($this->_subscriber_response_dto === null) {
                $this->_subscriber_response_dto = new SubscriberResponseDtoEntity($this, null);
            }
            return $this->_subscriber_response_dto;
        }
        return new SubscriberResponseDtoEntity($this, $data);
    }


    private $_subscription = null;

    // Canonical facade: $client->Subscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription()
    // resolves here too.
    public function Subscription($data = null)
    {
        require_once __DIR__ . '/entity/subscription_entity.php';
        if ($data === null) {
            if ($this->_subscription === null) {
                $this->_subscription = new SubscriptionEntity($this, null);
            }
            return $this->_subscription;
        }
        return new SubscriptionEntity($this, $data);
    }


    private $_topic = null;

    // Canonical facade: $client->Topic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topic()
    // resolves here too.
    public function Topic($data = null)
    {
        require_once __DIR__ . '/entity/topic_entity.php';
        if ($data === null) {
            if ($this->_topic === null) {
                $this->_topic = new TopicEntity($this, null);
            }
            return $this->_topic;
        }
        return new TopicEntity($this, $data);
    }


    private $_topic_subscriber_dto = null;

    // Canonical facade: $client->TopicSubscriberDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topic_subscriber_dto()
    // resolves here too.
    public function TopicSubscriberDto($data = null)
    {
        require_once __DIR__ . '/entity/topic_subscriber_dto_entity.php';
        if ($data === null) {
            if ($this->_topic_subscriber_dto === null) {
                $this->_topic_subscriber_dto = new TopicSubscriberDtoEntity($this, null);
            }
            return $this->_topic_subscriber_dto;
        }
        return new TopicSubscriberDtoEntity($this, $data);
    }


    private $_topic_subscriptions_response_dto = null;

    // Canonical facade: $client->TopicSubscriptionsResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topic_subscriptions_response_dto()
    // resolves here too.
    public function TopicSubscriptionsResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/topic_subscriptions_response_dto_entity.php';
        if ($data === null) {
            if ($this->_topic_subscriptions_response_dto === null) {
                $this->_topic_subscriptions_response_dto = new TopicSubscriptionsResponseDtoEntity($this, null);
            }
            return $this->_topic_subscriptions_response_dto;
        }
        return new TopicSubscriptionsResponseDtoEntity($this, $data);
    }


    private $_translation = null;

    // Canonical facade: $client->Translation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->translation()
    // resolves here too.
    public function Translation($data = null)
    {
        require_once __DIR__ . '/entity/translation_entity.php';
        if ($data === null) {
            if ($this->_translation === null) {
                $this->_translation = new TranslationEntity($this, null);
            }
            return $this->_translation;
        }
        return new TranslationEntity($this, $data);
    }


    private $_translation_group_dto = null;

    // Canonical facade: $client->TranslationGroupDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->translation_group_dto()
    // resolves here too.
    public function TranslationGroupDto($data = null)
    {
        require_once __DIR__ . '/entity/translation_group_dto_entity.php';
        if ($data === null) {
            if ($this->_translation_group_dto === null) {
                $this->_translation_group_dto = new TranslationGroupDtoEntity($this, null);
            }
            return $this->_translation_group_dto;
        }
        return new TranslationGroupDtoEntity($this, $data);
    }


    private $_trigger = null;

    // Canonical facade: $client->Trigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trigger()
    // resolves here too.
    public function Trigger($data = null)
    {
        require_once __DIR__ . '/entity/trigger_entity.php';
        if ($data === null) {
            if ($this->_trigger === null) {
                $this->_trigger = new TriggerEntity($this, null);
            }
            return $this->_trigger;
        }
        return new TriggerEntity($this, $data);
    }


    private $_trigger_event_response_dto = null;

    // Canonical facade: $client->TriggerEventResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trigger_event_response_dto()
    // resolves here too.
    public function TriggerEventResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/trigger_event_response_dto_entity.php';
        if ($data === null) {
            if ($this->_trigger_event_response_dto === null) {
                $this->_trigger_event_response_dto = new TriggerEventResponseDtoEntity($this, null);
            }
            return $this->_trigger_event_response_dto;
        }
        return new TriggerEventResponseDtoEntity($this, $data);
    }


    private $_unseen = null;

    // Canonical facade: $client->Unseen()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->unseen()
    // resolves here too.
    public function Unseen($data = null)
    {
        require_once __DIR__ . '/entity/unseen_entity.php';
        if ($data === null) {
            if ($this->_unseen === null) {
                $this->_unseen = new UnseenEntity($this, null);
            }
            return $this->_unseen;
        }
        return new UnseenEntity($this, $data);
    }


    private $_upload = null;

    // Canonical facade: $client->Upload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upload()
    // resolves here too.
    public function Upload($data = null)
    {
        require_once __DIR__ . '/entity/upload_entity.php';
        if ($data === null) {
            if ($this->_upload === null) {
                $this->_upload = new UploadEntity($this, null);
            }
            return $this->_upload;
        }
        return new UploadEntity($this, $data);
    }


    private $_webhook_result_dto = null;

    // Canonical facade: $client->WebhookResultDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_result_dto()
    // resolves here too.
    public function WebhookResultDto($data = null)
    {
        require_once __DIR__ . '/entity/webhook_result_dto_entity.php';
        if ($data === null) {
            if ($this->_webhook_result_dto === null) {
                $this->_webhook_result_dto = new WebhookResultDtoEntity($this, null);
            }
            return $this->_webhook_result_dto;
        }
        return new WebhookResultDtoEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }


    private $_workflow_info_dto = null;

    // Canonical facade: $client->WorkflowInfoDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_info_dto()
    // resolves here too.
    public function WorkflowInfoDto($data = null)
    {
        require_once __DIR__ . '/entity/workflow_info_dto_entity.php';
        if ($data === null) {
            if ($this->_workflow_info_dto === null) {
                $this->_workflow_info_dto = new WorkflowInfoDtoEntity($this, null);
            }
            return $this->_workflow_info_dto;
        }
        return new WorkflowInfoDtoEntity($this, $data);
    }


    private $_workflow_response_dto = null;

    // Canonical facade: $client->WorkflowResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_response_dto()
    // resolves here too.
    public function WorkflowResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/workflow_response_dto_entity.php';
        if ($data === null) {
            if ($this->_workflow_response_dto === null) {
                $this->_workflow_response_dto = new WorkflowResponseDtoEntity($this, null);
            }
            return $this->_workflow_response_dto;
        }
        return new WorkflowResponseDtoEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new NovuSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
