
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Novu',
        slug: "novu",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.novu.co",

    auth: {
      prefix: 'ApiKey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        activity_notification_response_dto: {
        },
  
        agent: {
        },
  
        agent_integration_response_dto: {
        },
  
        agent_response_dto: {
        },
  
        bulk: {
        },
  
        channel_connection: {
        },
  
        channel_endpoint: {
        },
  
        configure: {
        },
  
        context: {
        },
  
        create_subscriptions_response_dto: {
        },
  
        diff: {
        },
  
        domain: {
        },
  
        domain_connect_apply_url_response_dto: {
        },
  
        domain_connect_status_response_dto: {
        },
  
        domain_response_dto: {
        },
  
        domain_route_response_dto: {
        },
  
        environment: {
        },
  
        environment_tags_dto: {
        },
  
        environment_variable: {
        },
  
        environment_variable_workflow_info_dto: {
        },
  
        event: {
        },
  
        generate_chat_o_auth_url_response_dto: {
        },
  
        generate_preview_response_dto: {
        },
  
        import_master_json_response_dto: {
        },
  
        inbox_notification_dto: {
        },
  
        integration: {
        },
  
        integration_response_dto: {
        },
  
        layout: {
        },
  
        layout_response_dto: {
        },
  
        link: {
        },
  
        list_agent_integrations_response_dto: {
        },
  
        list_domain_routes_response_dto: {
        },
  
        list_topic_subscriptions_response_dto: {
        },
  
        master_json: {
        },
  
        message: {
        },
  
        message_response_dto: {
        },
  
        notification_feed_item_dto: {
        },
  
        preferences_response_dto: {
        },
  
        publish: {
        },
  
        remove_subscriber_response_dto: {
        },
  
        step: {
        },
  
        subscriber: {
        },
  
        subscriber_notifications_count_response_dto: {
        },
  
        subscriber_notifications_response_dto: {
        },
  
        subscriber_preferences_dto: {
        },
  
        subscriber_response_dto: {
        },
  
        subscription: {
        },
  
        topic: {
        },
  
        topic_subscriber_dto: {
        },
  
        topic_subscriptions_response_dto: {
        },
  
        translation: {
        },
  
        translation_group_dto: {
        },
  
        trigger_event_response_dto: {
        },
  
        unseen: {
        },
  
        upload: {
        },
  
        webhook_result_dto: {
        },
  
        workflow: {
        },
  
        workflow_info_dto: {
        },
  
        workflow_response_dto: {
        },
  
    }
  }


  entity = {
    "activity_notification_response_dto": {
      "fields": [
        {
          "name": "channels",
          "title": "Channels",
          "type": "`$ARRAY`"
        },
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "short": "Context (single or multi) in which the notification was sent"
        },
        {
          "name": "controls",
          "title": "Controls",
          "type": "`$OBJECT`",
          "short": "Controls associated with the notification"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Creation time of the notification"
        },
        {
          "name": "critical",
          "title": "Critical",
          "type": "`$BOOLEAN`",
          "short": "Criticality of the notification"
        },
        {
          "name": "digestedNotificationId",
          "title": "Digested Notification Id",
          "type": "`$STRING`",
          "short": "Digested Notification ID"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Environment ID of the notification"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the notification"
        },
        {
          "name": "jobs",
          "title": "Jobs",
          "type": "`$ARRAY`",
          "short": "Jobs of the notification"
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization ID of the notification"
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "Payload of the notification"
        },
        {
          "name": "severity",
          "title": "Severity",
          "type": "`$STRING`",
          "short": "Workflow severity"
        },
        {
          "name": "subscriber",
          "title": "Subscriber",
          "type": "`$ANY`",
          "short": "Subscriber of the notification"
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Subscriber ID of the notification"
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`",
          "short": "Tags associated with the notification"
        },
        {
          "name": "template",
          "title": "Template",
          "type": "`$ANY`",
          "short": "Template of the notification"
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": "`$STRING`",
          "short": "Template ID of the notification"
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$OBJECT`",
          "short": "To field for subscriber definition"
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "short": "Topics of the notification"
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Transaction ID of the notification"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Last updated time of the notification"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "activity_notification_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/notifications",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "notifications"
                }
              ],
              "parts": [
                "v1",
                "notifications"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "channel",
                    "orig": "channels",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "email",
                    "orig": "emails",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "severity",
                    "orig": "severity",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberIds",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "subscription_id",
                    "orig": "subscriptionId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "template",
                    "orig": "templates",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "topic_key",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "transaction_id",
                    "orig": "transactionId",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "channel",
                  "context_key",
                  "email",
                  "idempotency_key",
                  "limit",
                  "page",
                  "search",
                  "severity",
                  "subscriber_id",
                  "subscription_id",
                  "template",
                  "topic_key",
                  "transaction_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/notifications/{notificationId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                }
              ],
              "parts": [
                "v1",
                "notifications",
                "{notification_id}"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "notification_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "agent": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "behavior",
          "title": "Behavior",
          "type": "`$OBJECT`",
          "req": true,
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "bridgeUrl",
          "title": "Bridge Url",
          "type": "`$STRING`",
          "short": "Production bridge URL"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "createdBy",
          "title": "Created By",
          "type": "`$STRING`",
          "short": "Mongo user id of the user who created the agent"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "devBridgeActive",
          "title": "Dev Bridge Active",
          "type": "`$BOOLEAN`",
          "short": "Whether the dev bridge override is active"
        },
        {
          "name": "devBridgeUrl",
          "title": "Dev Bridge Url",
          "type": "`$STRING`",
          "short": "Development bridge URL (set by npx novu dev)"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "exceedsPlanLimit",
          "title": "Exceeds Plan Limit",
          "type": "`$BOOLEAN`",
          "short": "Cloud only."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "Required when not adopting an existing managed agent."
        },
        {
          "name": "integrations",
          "title": "Integrations",
          "type": "`$ARRAY`"
        },
        {
          "name": "managedRuntime",
          "title": "Managed Runtime",
          "type": "`$ANY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "Present when runtime is \"managed\"."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Required when not adopting an existing managed agent (i.e."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "runtime",
          "title": "Runtime",
          "type": "`$STRING`",
          "short": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "Discovery scope of the agent."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "agent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/agents/{agentId}/reply",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "reply"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{id}",
                "reply"
              ],
              "rename": {
                "param": {
                  "agentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "agentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "support-agent"
                  }
                ]
              },
              "select": {
                "$action": "reply",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/agents",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                }
              ],
              "parts": [
                "v1",
                "agents"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  },
                  {
                    "name": "novu_analytics_source",
                    "orig": "Novu-Analytics-Source",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "novu_analytics_source"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/agents",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                }
              ],
              "parts": [
                "v1",
                "agents"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "identifier",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "idempotency_key",
                  "identifier",
                  "include_cursor",
                  "limit",
                  "order_by",
                  "order_direction"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/agents/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "agent_id"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "agent_integration_id"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{agent_id}",
                "integrations",
                "{agent_integration_id}"
              ],
              "rename": {
                "param": {
                  "agentIntegrationId": "agent_integration_id",
                  "identifier": "agent_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "agent_id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "agent_integration_id",
                    "orig": "agentIntegrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "agent_id",
                  "agent_integration_id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/agents/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "delete_from_provider",
                    "orig": "deleteFromProvider",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "delete_from_provider",
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/agents/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.integration"
          ]
        ]
      }
    },
    "agent_integration_response_dto": {
      "fields": [
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "connectedAt",
          "title": "Connected At",
          "type": "`$OBJECT`",
          "short": "Set when the agent–integration link received its first inbound webhook delivery."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "exceedsPlanLimit",
          "title": "Exceeds Plan Limit",
          "type": "`$BOOLEAN`",
          "short": "Cloud only."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Agent–integration link document id."
        },
        {
          "name": "integration",
          "title": "Integration",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "integrationIdentifier",
          "title": "Integration Identifier",
          "type": "`$STRING`",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The integration identifier (same as in the integration store), not the internal document _id."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "short": "Provider ID to auto-create a dedicated integration (e.g."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "agent_integration_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/agents/{identifier}/integrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "identifier"
                },
                {
                  "lit": "integrations"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{identifier}",
                "integrations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "identifier",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "identifier"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "agent_id"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "agent_integration_id"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{agent_id}",
                "integrations",
                "{agent_integration_id}"
              ],
              "rename": {
                "param": {
                  "agentIntegrationId": "agent_integration_id",
                  "identifier": "agent_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "agent_id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "agent_integration_id",
                    "orig": "agentIntegrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "agent_id",
                  "agent_integration_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.agent"
          ],
          [
            "$.main.kit.entity.agent",
            "$.main.kit.entity.integration"
          ]
        ]
      }
    },
    "agent_response_dto": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "behavior",
          "title": "Behavior",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "bridgeUrl",
          "title": "Bridge Url",
          "type": "`$STRING`",
          "short": "Production bridge URL"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "createdBy",
          "title": "Created By",
          "type": "`$STRING`",
          "short": "Mongo user id of the user who created the agent"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "devBridgeActive",
          "title": "Dev Bridge Active",
          "type": "`$BOOLEAN`",
          "short": "Whether the dev bridge override is active"
        },
        {
          "name": "devBridgeUrl",
          "title": "Dev Bridge Url",
          "type": "`$STRING`",
          "short": "Development bridge URL (set by npx novu dev)"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "exceedsPlanLimit",
          "title": "Exceeds Plan Limit",
          "type": "`$BOOLEAN`",
          "short": "Cloud only."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "integrations",
          "title": "Integrations",
          "type": "`$ARRAY`"
        },
        {
          "name": "managedRuntime",
          "title": "Managed Runtime",
          "type": "`$ANY`",
          "short": "Present when runtime is \"managed\"."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "runtime",
          "title": "Runtime",
          "type": "`$STRING`",
          "short": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "Discovery scope of the agent."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "agent_response_dto",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/agents/{identifier}/bridge",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "identifier"
                },
                {
                  "lit": "bridge"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{identifier}",
                "bridge"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "identifier",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "identifier"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.agent"
          ]
        ]
      }
    },
    "bulk": {
      "fields": [
        {
          "name": "subscribers",
          "title": "Subscribers",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of subscribers to be created in bulk."
        }
      ],
      "name": "bulk",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/subscribers/bulk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "lit": "bulk"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "bulk"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "channel_connection": {
      "fields": [
        {
          "name": "auth",
          "title": "Auth",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "req": true,
          "short": "The channel type (email, sms, push, chat, etc.)."
        },
        {
          "name": "connectionMode",
          "title": "Connection Mode",
          "type": "`$STRING`",
          "short": "Connection mode that determines how the channel connection is scoped."
        },
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "req": true,
          "short": "The context of the channel connection"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "The unique identifier of the channel endpoint."
        },
        {
          "name": "integrationIdentifier",
          "title": "Integration Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the integration to use for this channel endpoint."
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.)."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "The subscriber ID to which the channel connection is linked"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format."
        },
        {
          "name": "workspace",
          "title": "Workspace",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "channel_connection",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/channel-connections",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-connections"
                }
              ],
              "parts": [
                "v1",
                "channel-connections"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/channel-connections",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-connections"
                }
              ],
              "parts": [
                "v1",
                "channel-connections"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "channel",
                    "orig": "channel",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "chat"
                  },
                  {
                    "name": "connection_mode",
                    "orig": "connectionMode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "shared"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:org-123",
                      "region:us-east-1"
                    ]
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "integration_identifier",
                    "orig": "integrationIdentifier",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "slack-prod"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "provider_id",
                    "orig": "providerId",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "slack"
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "subscriber-123"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "channel",
                  "connection_mode",
                  "context_key",
                  "idempotency_key",
                  "include_cursor",
                  "integration_identifier",
                  "limit",
                  "order_by",
                  "order_direction",
                  "provider_id",
                  "subscriber_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/channel-connections/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-connections"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-connections",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/channel-connections/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-connections"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-connections",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/channel-connections/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-connections"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-connections",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "channel_endpoint": {
      "fields": [
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "req": true,
          "short": "The channel type (email, sms, push, chat, etc.)."
        },
        {
          "name": "connectionIdentifier",
          "title": "Connection Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the channel connection used for this endpoint."
        },
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "req": true,
          "short": "The context of the channel connection"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format."
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$ANY`",
          "req": true,
          "short": "Endpoint data specific to the channel type"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the channel endpoint."
        },
        {
          "name": "integrationIdentifier",
          "title": "Integration Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the integration to use for this channel endpoint."
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.)."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The subscriber ID to which the channel endpoint is linked"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Type of channel endpoint"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "channel_endpoint",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/channel-endpoints",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-endpoints"
                }
              ],
              "parts": [
                "v1",
                "channel-endpoints"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/channel-endpoints",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-endpoints"
                }
              ],
              "parts": [
                "v1",
                "channel-endpoints"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "channel",
                    "orig": "channel",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "connection_identifier",
                    "orig": "connectionIdentifier",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "slack-connection-abc123"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:org-123",
                      "region:us-east-1"
                    ]
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "integration_identifier",
                    "orig": "integrationIdentifier",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "slack-prod"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "provider_id",
                    "orig": "providerId",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "slack"
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "subscriber-123"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "channel",
                  "connection_identifier",
                  "context_key",
                  "idempotency_key",
                  "include_cursor",
                  "integration_identifier",
                  "limit",
                  "order_by",
                  "order_direction",
                  "provider_id",
                  "subscriber_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/channel-endpoints/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/channel-endpoints/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/channel-endpoints/{identifier}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "channel-endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "channel-endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "configure": {
      "fields": [
        {
          "name": "botUsername",
          "title": "Bot Username",
          "type": "`$STRING`",
          "req": true,
          "short": "Resolved bot username from getMe"
        },
        {
          "name": "configuredAt",
          "title": "Configured At",
          "type": "`$STRING`",
          "req": true,
          "short": "ISO-8601 timestamp the webhook was configured at"
        },
        {
          "name": "webhookUrl",
          "title": "Webhook Url",
          "type": "`$STRING`",
          "req": true,
          "short": "URL Novu registered with Telegram for incoming updates"
        }
      ],
      "name": "configure",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/{integrationIdentifier}/webhook/configure",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "integration_id"
                },
                {
                  "lit": "webhook"
                },
                {
                  "lit": "configure"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{integration_id}",
                "webhook",
                "configure"
              ],
              "rename": {
                "param": {
                  "integrationIdentifier": "integration_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "integration_id",
                    "orig": "integrationIdentifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "integration_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.integration"
          ]
        ]
      }
    },
    "context": {
      "fields": [
        {
          "name": "bridgeUrl",
          "title": "Bridge Url",
          "type": "`$STRING`",
          "short": "Bridge URL override for agent connect, if configured on this context"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "req": true,
          "op": {
            "create": {
              "type": "`$OBJECT`"
            }
          },
          "short": "Custom data associated with this context"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for this context"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Context type (e.g., tenant, app, workspace)"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last update timestamp"
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "id": "id",
          "type": "type"
        },
        "name": "id",
        "parts": [
          "type",
          "id"
        ],
        "sep": "/"
      },
      "name": "context",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/contexts",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "contexts"
                }
              ],
              "parts": [
                "v2",
                "contexts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/contexts",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "contexts"
                }
              ],
              "parts": [
                "v2",
                "contexts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "tenant-prod-123"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "tenant"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "id",
                  "idempotency_key",
                  "include_cursor",
                  "limit",
                  "order_by",
                  "order_direction",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/contexts/{type}/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "contexts"
                },
                {
                  "var": "type"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "contexts",
                "{type}",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "type"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/contexts/{type}/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "contexts"
                },
                {
                  "var": "type"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "contexts",
                "{type}",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "type"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/contexts/{type}/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "contexts"
                },
                {
                  "var": "type"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "contexts",
                "{type}",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_subscriptions_response_dto": {
      "fields": [
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ARRAY`",
          "short": "The preferences of the topic."
        },
        {
          "name": "subscriberIds",
          "title": "Subscriber Ids",
          "type": "`$ARRAY`",
          "short": "List of subscriber IDs to subscribe to the topic (max: 100).",
          "deprecated": true
        },
        {
          "name": "subscriptions",
          "title": "Subscriptions",
          "type": "`$ARRAY`",
          "short": "List of subscriptions to subscribe to the topic (max: 100)."
        }
      ],
      "name": "create_subscriptions_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/topics/{topicKey}/subscriptions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_key"
                },
                {
                  "lit": "subscriptions"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{topic_key}",
                "subscriptions"
              ],
              "rename": {
                "param": {
                  "topicKey": "topic_key"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "topic_key",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "topic_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.topic"
          ]
        ]
      }
    },
    "diff": {
      "fields": [
        {
          "name": "resources",
          "title": "Resources",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Diff resources by resource type"
        },
        {
          "name": "sourceEnvironmentId",
          "title": "Source Environment Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "Source environment ID"
        },
        {
          "name": "summary",
          "title": "Summary",
          "type": "`$ANY`",
          "req": true,
          "short": "Overall summary"
        },
        {
          "name": "targetEnvironmentId",
          "title": "Target Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Target environment ID"
        }
      ],
      "name": "diff",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/environments/{targetEnvironmentId}/diff",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "environments"
                },
                {
                  "var": "environment_id"
                },
                {
                  "lit": "diff"
                }
              ],
              "parts": [
                "v2",
                "environments",
                "{environment_id}",
                "diff"
              ],
              "rename": {
                "param": {
                  "targetEnvironmentId": "environment_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "environment_id",
                    "orig": "targetEnvironmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "6615943e7ace93b0540ae377"
                  }
                ]
              },
              "select": {
                "exist": [
                  "environment_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.environment"
          ]
        ]
      }
    },
    "domain": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "String key-value metadata (max 10 keys, 500 characters total when set via API)."
        },
        {
          "name": "dnsProvider",
          "title": "Dns Provider",
          "type": "`$STRING`"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expectedDnsRecords",
          "title": "Expected Dns Records",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "mxRecordConfigured",
          "title": "Mx Record Configured",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The domain name (e.g."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains/{domain}/diagnose",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "diagnose"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}",
                "diagnose"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "diagnose",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "v1",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/domains",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "v1",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "idempotency_key",
                  "include_cursor",
                  "limit",
                  "name",
                  "order_by",
                  "order_direction"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/domains/{domain}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/domains/{domain}/routes/{address}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "address"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}",
                "routes",
                "{address}"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "address",
                    "orig": "address",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "address",
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/domains/{domain}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/domains/{domain}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain_connect_apply_url_response_dto": {
      "fields": [
        {
          "name": "redirectUri",
          "title": "Redirect Uri",
          "type": "`$STRING`",
          "short": "Dashboard URL to return to after the DNS provider consent flow completes."
        }
      ],
      "name": "domain_connect_apply_url_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains/{domain}/auto-configure/start",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "auto-configure"
                },
                {
                  "lit": "start"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{domain_id}",
                "auto-configure",
                "start"
              ],
              "rename": {
                "param": {
                  "domain": "domain_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "domain_id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "domain_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "domain_connect_status_response_dto": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain_connect_status_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/domains/{domain}/auto-configure",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "auto-configure"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}",
                "auto-configure"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.manualRecords`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "auto-configure",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain_response_dto": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "String key-value metadata (max 10 keys, 500 characters total when set via API)."
        },
        {
          "name": "dnsProvider",
          "title": "Dns Provider",
          "type": "`$STRING`"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expectedDnsRecords",
          "title": "Expected Dns Records",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "mxRecordConfigured",
          "title": "Mx Record Configured",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains/{domain}/verify",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "verify"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}",
                "verify"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "verify",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain_route_response_dto": {
      "fields": [
        {
          "name": "address",
          "title": "Address",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "short": "Internal id of the destination agent."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "String key-value metadata (max 10 keys, 500 characters total when set via API)."
        },
        {
          "name": "domainId",
          "title": "Domain Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain_route_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains/{domain}/routes/{address}/test",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "address"
                },
                {
                  "lit": "test"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{domain_id}",
                "routes",
                "{address}",
                "test"
              ],
              "rename": {
                "param": {
                  "domain": "domain_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "address",
                    "orig": "address",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "domain_id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "test",
                "exist": [
                  "address",
                  "domain_id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/domains/{domain}/routes",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "routes"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{id}",
                "routes"
              ],
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "routes",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/domains/{domain}/routes/{address}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "address"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{domain_id}",
                "routes",
                "{address}"
              ],
              "rename": {
                "param": {
                  "domain": "domain_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "address",
                    "orig": "address",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "domain_id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "address",
                  "domain_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/domains/{domain}/routes/{address}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "address"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{domain_id}",
                "routes",
                "{address}"
              ],
              "rename": {
                "param": {
                  "domain": "domain_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "address",
                    "orig": "address",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "domain_id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "address",
                  "domain_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "environment": {
      "fields": [
        {
          "name": "apiKeys",
          "title": "Api Keys",
          "type": "`$ARRAY`",
          "short": "List of API keys associated with the environment"
        },
        {
          "name": "bridge",
          "title": "Bridge",
          "type": "`$OBJECT`"
        },
        {
          "name": "color",
          "title": "Color",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Hex color code for the environment"
        },
        {
          "name": "dns",
          "title": "Dns",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the environment"
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Unique identifier for the environment"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Name of the environment to be created"
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization ID associated with the environment"
        },
        {
          "name": "parentId",
          "title": "Parent Id",
          "type": "`$STRING`",
          "short": "MongoDB ObjectId of the parent environment (optional)"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "short": "URL-friendly slug for the environment"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Type of the environment"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "environment",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/environments",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environments"
                }
              ],
              "parts": [
                "v1",
                "environments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/environments",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environments"
                }
              ],
              "parts": [
                "v1",
                "environments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/environments/{environmentId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "environments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "environmentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "environmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/environments/{environmentId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "environments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "environmentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "environmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "environment_tags_dto": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "environment_tags_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/environments/{environmentId}/tags",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "environments"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "tags"
                }
              ],
              "parts": [
                "v2",
                "environments",
                "{id}",
                "tags"
              ],
              "rename": {
                "param": {
                  "environmentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "environmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "6615943e7ace93b0540ae377"
                  }
                ]
              },
              "select": {
                "$action": "tags",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "environment_variable": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "isSecret",
          "title": "Is Secret",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether this variable is a secret (encrypted at rest, masked in responses)"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Unique key for the variable."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "The type of the variable"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "values",
          "title": "Values",
          "type": "`$ARRAY`",
          "req": true,
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          }
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "environment_variable",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/environment-variables",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                }
              ],
              "parts": [
                "v1",
                "environment-variables"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/environment-variables",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                }
              ],
              "parts": [
                "v1",
                "environment-variables"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/environment-variables/{variableKey}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "environment-variables",
                "{id}"
              ],
              "rename": {
                "param": {
                  "variableKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "variableKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "BASE_URL"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/environment-variables/{variableKey}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "environment-variables",
                "{id}"
              ],
              "rename": {
                "param": {
                  "variableKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "variableKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "BASE_URL"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/environment-variables/{variableKey}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "environment-variables",
                "{id}"
              ],
              "rename": {
                "param": {
                  "variableKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "variableKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "BASE_URL"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "environment_variable_workflow_info_dto": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the workflow"
        },
        {
          "name": "workflowId",
          "title": "Workflow Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the workflow"
        }
      ],
      "name": "environment_variable_workflow_info_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/environment-variables/{variableKey}/usage",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "environment-variables"
                },
                {
                  "var": "variable_key"
                },
                {
                  "lit": "usage"
                }
              ],
              "parts": [
                "v1",
                "environment-variables",
                "{variable_key}",
                "usage"
              ],
              "rename": {
                "param": {
                  "variableKey": "variable_key"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.workflows`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "variable_key",
                    "orig": "variableKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "BASE_URL"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "variable_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.environment_variable"
          ]
        ]
      }
    },
    "event": {
      "fields": [
        {
          "name": "actor",
          "title": "Actor",
          "type": "`$ANY`",
          "short": "It is used to display the Avatar of the provided actor's subscriber id or actor object."
        },
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "short": "Override the workflow-assigned agent for this trigger using the public agent identifier."
        },
        {
          "name": "bridgeUrl",
          "title": "Bridge Url",
          "type": "`$STRING`",
          "short": "Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application."
        },
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The trigger identifier of the workflow you wish to send."
        },
        {
          "name": "overrides",
          "title": "Overrides",
          "type": "`$ANY`",
          "short": "This could be used to override provider specific configurations"
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it."
        },
        {
          "name": "tenant",
          "title": "Tenant",
          "type": "`$ANY`",
          "short": "It is used to specify a tenant context during trigger event."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ANY`",
          "req": true,
          "short": "The recipients list of people who will receive the notification."
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "short": "A unique identifier for deduplication."
        }
      ],
      "name": "event",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/events/trigger",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "events"
                },
                {
                  "lit": "trigger"
                }
              ],
              "parts": [
                "v1",
                "events",
                "trigger"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/events/trigger/{transactionId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "events"
                },
                {
                  "lit": "trigger"
                },
                {
                  "var": "transaction_id"
                }
              ],
              "parts": [
                "v1",
                "events",
                "trigger",
                "{transaction_id}"
              ],
              "rename": {
                "param": {
                  "transactionId": "transaction_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "transaction_id",
                    "orig": "transactionId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "transaction_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generate_chat_o_auth_url_response_dto": {
      "fields": [
        {
          "name": "autoLinkUser",
          "title": "Auto Link User",
          "type": "`$BOOLEAN`",
          "short": "When true (default when connectionMode is \"subscriber\"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked \"Connect\" as a personal endpoint."
        },
        {
          "name": "connectionIdentifier",
          "title": "Connection Identifier",
          "type": "`$STRING`",
          "short": "Identifier of the channel connection that will be created."
        },
        {
          "name": "connectionMode",
          "title": "Connection Mode",
          "type": "`$STRING`",
          "short": "Connection mode that determines how the channel connection is scoped."
        },
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "contextHash",
          "title": "Context Hash",
          "type": "`$STRING`",
          "short": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme)."
        },
        {
          "name": "integrationIdentifier",
          "title": "Integration Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "Integration identifier"
        },
        {
          "name": "mode",
          "title": "Mode",
          "type": "`$STRING`",
          "short": "OAuth flow mode."
        },
        {
          "name": "scope",
          "title": "Scope",
          "type": "`$ARRAY`",
          "short": "**Slack only**: OAuth scopes to request during authorization."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The subscriber ID to associate with the channel connection."
        },
        {
          "name": "userScope",
          "title": "User Scope",
          "type": "`$ARRAY`",
          "short": "**Slack only**: User-level OAuth scopes for \"Sign in with Slack\"."
        }
      ],
      "name": "generate_chat_o_auth_url_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/channel-connections/oauth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "channel-connections"
                },
                {
                  "lit": "oauth"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "channel-connections",
                "oauth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/channel-endpoints/oauth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "channel-endpoints"
                },
                {
                  "lit": "oauth"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "channel-endpoints",
                "oauth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/chat/oauth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "chat"
                },
                {
                  "lit": "oauth"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "chat",
                "oauth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generate_preview_response_dto": {
      "fields": [
        {
          "name": "controlValues",
          "title": "Control Values",
          "type": "`$OBJECT`",
          "short": "Optional control values"
        },
        {
          "name": "previewPayload",
          "title": "Preview Payload",
          "type": "`$ANY`",
          "short": "Optional payload for preview generation"
        }
      ],
      "name": "generate_preview_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/workflows/{workflowId}/step/{stepId}/preview",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "workflow_id"
                },
                {
                  "lit": "step"
                },
                {
                  "var": "step_id"
                },
                {
                  "lit": "preview"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{workflow_id}",
                "step",
                "{step_id}",
                "preview"
              ],
              "rename": {
                "param": {
                  "stepId": "step_id",
                  "workflowId": "workflow_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "step_id",
                    "orig": "stepId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "workflow_id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "step_id",
                  "workflow_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.workflow",
            "$.main.kit.entity.step"
          ]
        ]
      }
    },
    "import_master_json_response_dto": {
      "fields": [
        {
          "name": "failed",
          "title": "Failed",
          "type": "`$ARRAY`",
          "short": "List of resource IDs that failed to import"
        },
        {
          "name": "locale",
          "title": "Locale",
          "type": "`$STRING`",
          "req": true,
          "short": "The locale for which translations are being imported"
        },
        {
          "name": "masterJson",
          "title": "Master Json",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Master JSON object containing all translations organized by workflow identifier"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable message describing the import result"
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Overall success status of the import operation"
        },
        {
          "name": "successful",
          "title": "Successful",
          "type": "`$ARRAY`",
          "short": "List of resource IDs that were successfully imported"
        }
      ],
      "name": "import_master_json_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/translations/master-json",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "lit": "master-json"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "master-json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/translations/master-json/upload",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "lit": "master-json"
                },
                {
                  "lit": "upload"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "master-json",
                "upload"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "inbox_notification_dto": {
      "fields": [
        {
          "name": "archivedAt",
          "title": "Archived At",
          "type": "`$STRING`",
          "short": "ISO timestamp when the notification was archived"
        },
        {
          "name": "avatar",
          "title": "Avatar",
          "type": "`$STRING`",
          "short": "Avatar URL for the notification"
        },
        {
          "name": "body",
          "title": "Body",
          "type": "`$STRING`",
          "req": true,
          "short": "Body content of the notification"
        },
        {
          "name": "channelType",
          "title": "Channel Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Channel the message was sent on"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "ISO timestamp when the notification was created"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "Custom data payload of the notification"
        },
        {
          "name": "deliveredAt",
          "title": "Delivered At",
          "type": "`$ARRAY`",
          "short": "Timestamps when the notification was delivered"
        },
        {
          "name": "firstSeenAt",
          "title": "First Seen At",
          "type": "`$STRING`",
          "short": "ISO timestamp when the notification was first seen"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the notification"
        },
        {
          "name": "isArchived",
          "title": "Is Archived",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the notification has been archived"
        },
        {
          "name": "isRead",
          "title": "Is Read",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the notification has been read"
        },
        {
          "name": "isSeen",
          "title": "Is Seen",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the notification has been seen"
        },
        {
          "name": "isSnoozed",
          "title": "Is Snoozed",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the notification is snoozed"
        },
        {
          "name": "primaryAction",
          "title": "Primary Action",
          "type": "`$ANY`",
          "short": "Primary action button for the notification"
        },
        {
          "name": "readAt",
          "title": "Read At",
          "type": "`$STRING`",
          "short": "ISO timestamp when the notification was read"
        },
        {
          "name": "redirect",
          "title": "Redirect",
          "type": "`$ANY`",
          "short": "Redirect configuration for the notification"
        },
        {
          "name": "secondaryAction",
          "title": "Secondary Action",
          "type": "`$ANY`",
          "short": "Secondary action button for the notification"
        },
        {
          "name": "severity",
          "title": "Severity",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow severity"
        },
        {
          "name": "snoozeUntil",
          "title": "Snooze Until",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time until which the notification should be snoozed",
          "format": "date-time"
        },
        {
          "name": "snoozedUntil",
          "title": "Snoozed Until",
          "type": "`$STRING`",
          "short": "ISO timestamp when the notification will be unsnoozed"
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Subject of the notification"
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`",
          "short": "Tags associated with the notification"
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ANY`",
          "req": true,
          "short": "Subscriber this notification was sent to"
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Transaction identifier of the notification"
        },
        {
          "name": "workflow",
          "title": "Workflow",
          "type": "`$ANY`",
          "short": "Workflow associated with the notification"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "inbox_notification_dto",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "action_type"
                },
                {
                  "lit": "complete"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "actions",
                "{action_type}",
                "complete"
              ],
              "rename": {
                "param": {
                  "actionType": "action_type",
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "action_type",
                    "orig": "actionType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "action_type",
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "action_type"
                },
                {
                  "lit": "revert"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "actions",
                "{action_type}",
                "revert"
              ],
              "rename": {
                "param": {
                  "actionType": "action_type",
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "action_type",
                    "orig": "actionType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "action_type",
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/archive",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "archive"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "archive"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/read",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "read"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "read"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "snooze"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "snooze"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "unarchive"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "unarchive"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unread",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "unread"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "unread"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "unsnooze"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "{notification_id}",
                "unsnooze"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "idempotency_key",
                  "notification_id",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ],
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "integration": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            },
            "update": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "If the integration is active, the validation on the credentials field will run"
        },
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "short": "The channel type for the integration."
        },
        {
          "name": "check",
          "title": "Check",
          "type": "`$BOOLEAN`",
          "short": "Flag to check the integration status"
        },
        {
          "name": "conditions",
          "title": "Conditions",
          "type": "`$ARRAY`",
          "short": "Legacy StepFilter conditions.",
          "deprecated": true
        },
        {
          "name": "configurations",
          "title": "Configurations",
          "type": "`$OBJECT`",
          "short": "Configurations for the integration"
        },
        {
          "name": "credentials",
          "title": "Credentials",
          "type": "`$ANY`",
          "short": "The credentials for the integration"
        },
        {
          "name": "deleted",
          "title": "Deleted",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the integration has been marked as deleted (soft delete)."
        },
        {
          "name": "deletedAt",
          "title": "Deleted At",
          "type": "`$STRING`",
          "short": "The timestamp indicating when the integration was deleted."
        },
        {
          "name": "deletedBy",
          "title": "Deleted By",
          "type": "`$STRING`",
          "short": "The identifier of the user who performed the deletion of this integration."
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The ID of the associated environment",
          "format": "uuid"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The unique identifier of the integration record in the database."
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The unique identifier for the integration"
        },
        {
          "name": "kind",
          "title": "Kind",
          "type": "`$STRING`",
          "short": "Distinguishes delivery integrations from agent-runtime integrations."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the integration"
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the organization that owns this integration."
        },
        {
          "name": "primary",
          "title": "Primary",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether this integration is marked as primary."
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The provider ID for the integration"
        },
        {
          "name": "rules",
          "title": "Rules",
          "type": "`$OBJECT`",
          "short": "JSONLogic used at send time to select this integration."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "integration",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/{integrationId}/auto-configure",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "auto-configure"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{id}",
                "auto-configure"
              ],
              "rename": {
                "param": {
                  "integrationId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.integration`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "integrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "auto_configure",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/{integrationIdentifier}/mobile-link",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "integration_identifier"
                },
                {
                  "lit": "mobile-link"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{integration_identifier}",
                "mobile-link"
              ],
              "rename": {
                "param": {
                  "integrationIdentifier": "integration_identifier"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "integration_identifier",
                    "orig": "integrationIdentifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "mobile_link",
                "exist": [
                  "idempotency_key",
                  "integration_identifier"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                }
              ],
              "parts": [
                "v1",
                "integrations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/integrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                }
              ],
              "parts": [
                "v1",
                "integrations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/integrations/{integrationId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "integrationId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "integrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/integrations/{integrationId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "integrationId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "integrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "integration_response_dto": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the integration is currently active."
        },
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "short": "The channel type for the integration, which defines how it communicates (e.g., email, SMS)."
        },
        {
          "name": "conditions",
          "title": "Conditions",
          "type": "`$ARRAY`",
          "short": "Legacy StepFilter conditions.",
          "deprecated": true
        },
        {
          "name": "configurations",
          "title": "Configurations",
          "type": "`$ANY`",
          "short": "The configurations required for enabling the additional configurations of the integration."
        },
        {
          "name": "credentials",
          "title": "Credentials",
          "type": "`$ANY`",
          "short": "The decrypted credentials required for the integration to function (e.g."
        },
        {
          "name": "deleted",
          "title": "Deleted",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the integration has been marked as deleted (soft delete)."
        },
        {
          "name": "deletedAt",
          "title": "Deleted At",
          "type": "`$STRING`",
          "short": "The timestamp indicating when the integration was deleted."
        },
        {
          "name": "deletedBy",
          "title": "Deleted By",
          "type": "`$STRING`",
          "short": "The identifier of the user who performed the deletion of this integration."
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the environment associated with this integration."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The unique identifier of the integration record in the database."
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "A unique string identifier for the integration, often used for API calls or internal references."
        },
        {
          "name": "kind",
          "title": "Kind",
          "type": "`$STRING`",
          "short": "Distinguishes delivery integrations from agent-runtime integrations."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the integration, which is used to identify it in the user interface."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the organization that owns this integration."
        },
        {
          "name": "primary",
          "title": "Primary",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether this integration is marked as primary."
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier for the provider of the integration (e.g., \"mailgun\", \"twilio\")."
        },
        {
          "name": "rules",
          "title": "Rules",
          "type": "`$OBJECT`",
          "short": "JSONLogic used at send time to select this integration."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "integration_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/{integrationId}/set-primary",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "set-primary"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "{id}",
                "set-primary"
              ],
              "rename": {
                "param": {
                  "integrationId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "integrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "set-primary",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/integrations/active",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "active"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "active"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "layout": {
      "fields": [
        {
          "name": "controlValues",
          "title": "Control Values",
          "type": "`$ANY`",
          "short": "Control values for the layout."
        },
        {
          "name": "controls",
          "title": "Controls",
          "type": "`$ANY`",
          "req": true,
          "short": "Controls metadata for the layout"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique internal identifier of the layout"
        },
        {
          "name": "isDefault",
          "title": "Is Default",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the layout is the default layout"
        },
        {
          "name": "isTranslationEnabled",
          "title": "Is Translation Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether the layout translations are enabled"
        },
        {
          "name": "layoutId",
          "title": "Layout Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the layout"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the layout"
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow origin"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Slug of the layout"
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "short": "Source of layout creation"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource type"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last updated timestamp"
        },
        {
          "name": "updatedBy",
          "title": "Updated By",
          "type": "`$ANY`",
          "short": "User who last updated the layout"
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$OBJECT`",
          "short": "The variables JSON Schema for the layout"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "layout",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/layouts/{layoutId}/preview",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "preview"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{id}",
                "preview"
              ],
              "rename": {
                "param": {
                  "layoutId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "preview",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/layouts",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                }
              ],
              "parts": [
                "v2",
                "layouts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/layouts",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                }
              ],
              "parts": [
                "v2",
                "layouts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.layouts`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "limit",
                  "offset",
                  "order_by",
                  "order_direction",
                  "query"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/layouts/{layoutId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{id}"
              ],
              "rename": {
                "param": {
                  "layoutId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/layouts/{layoutId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{id}"
              ],
              "rename": {
                "param": {
                  "layoutId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/layouts/{layoutId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{id}"
              ],
              "rename": {
                "param": {
                  "layoutId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "layout_response_dto": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "layout_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/layouts/{layoutId}/duplicate",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{id}",
                "duplicate"
              ],
              "rename": {
                "param": {
                  "layoutId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "link": {
      "fields": [
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "contextHash",
          "title": "Context Hash",
          "type": "`$STRING`",
          "short": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme)."
        },
        {
          "name": "integrationIdentifier",
          "title": "Integration Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "Integration identifier for the chat provider integration"
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "External subscriber identifier to link to their chat identity"
        }
      ],
      "name": "link",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/integrations/channel-endpoints/link",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "channel-endpoints"
                },
                {
                  "lit": "link"
                }
              ],
              "parts": [
                "v1",
                "integrations",
                "channel-endpoints",
                "link"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.providerMetadata`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_agent_integrations_response_dto": {
      "fields": [
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "connectedAt",
          "title": "Connected At",
          "type": "`$OBJECT`",
          "short": "Set when the agent–integration link received its first inbound webhook delivery."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "exceedsPlanLimit",
          "title": "Exceeds Plan Limit",
          "type": "`$BOOLEAN`",
          "short": "Cloud only."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Agent–integration link document id."
        },
        {
          "name": "integration",
          "title": "Integration",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_agent_integrations_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/agents/{identifier}/integrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "agents"
                },
                {
                  "var": "identifier"
                },
                {
                  "lit": "integrations"
                }
              ],
              "parts": [
                "v1",
                "agents",
                "{identifier}",
                "integrations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "identifier",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "integration_identifier",
                    "orig": "integrationIdentifier",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "idempotency_key",
                  "identifier",
                  "include_cursor",
                  "integration_identifier",
                  "limit",
                  "order_by",
                  "order_direction"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.agent"
          ]
        ]
      }
    },
    "list_domain_routes_response_dto": {
      "fields": [
        {
          "name": "address",
          "title": "Address",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "short": "Internal id of the destination agent."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "String key-value metadata (max 10 keys, 500 characters total when set via API)."
        },
        {
          "name": "domainId",
          "title": "Domain Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_domain_routes_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/domains/{domain}/routes",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "routes"
                }
              ],
              "parts": [
                "v1",
                "domains",
                "{domain_id}",
                "routes"
              ],
              "rename": {
                "param": {
                  "domain": "domain_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "domain_id",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "agent_id",
                    "orig": "agentId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "agent_id",
                  "before",
                  "domain_id",
                  "idempotency_key",
                  "include_cursor",
                  "limit",
                  "order_by",
                  "order_direction"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "list_topic_subscriptions_response_dto": {
      "fields": [
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "short": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time the subscription was created"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the subscription"
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the subscription"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ARRAY`",
          "short": "The preferences for workflows in this subscription"
        },
        {
          "name": "subscriber",
          "title": "Subscriber",
          "type": "`$ANY`",
          "req": true,
          "short": "Subscriber information"
        },
        {
          "name": "topic",
          "title": "Topic",
          "type": "`$ANY`",
          "req": true,
          "short": "Topic information"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_topic_subscriptions_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers/{subscriberId}/subscriptions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "subscriptions"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "subscriptions"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:org-123",
                      "region:us-east-1"
                    ]
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "context_key",
                  "idempotency_key",
                  "include_cursor",
                  "key",
                  "limit",
                  "order_by",
                  "order_direction",
                  "subscriber_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/topics/{topicKey}/subscriptions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_key"
                },
                {
                  "lit": "subscriptions"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{topic_key}",
                "subscriptions"
              ],
              "rename": {
                "param": {
                  "topicKey": "topic_key"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "topic_key",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:org-123",
                      "region:us-east-1"
                    ]
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "context_key",
                  "idempotency_key",
                  "include_cursor",
                  "limit",
                  "order_by",
                  "order_direction",
                  "subscriber_id",
                  "topic_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ],
          [
            "$.main.kit.entity.topic"
          ]
        ]
      }
    },
    "master_json": {
      "fields": [
        {
          "name": "layouts",
          "title": "Layouts",
          "type": "`$OBJECT`",
          "req": true,
          "short": "All translations for given locale organized by layout identifier"
        },
        {
          "name": "workflows",
          "title": "Workflows",
          "type": "`$OBJECT`",
          "req": true,
          "short": "All translations for given locale organized by workflow identifier"
        }
      ],
      "name": "master_json",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/translations/master-json",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "lit": "master-json"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "master-json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "locale",
                    "orig": "locale",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en_US"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "locale"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "message": {
      "fields": [
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "req": true,
          "short": "Channel the message was sent on"
        },
        {
          "name": "content",
          "title": "Content",
          "type": "`$ANY`",
          "short": "Content of the message, can be an email block or a string"
        },
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "short": "Context (single or multi) in which the message was sent"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation date of the message"
        },
        {
          "name": "cta",
          "title": "Cta",
          "type": "`$ANY`",
          "req": true,
          "short": "Call to action associated with the message"
        },
        {
          "name": "deliveredAt",
          "title": "Delivered At",
          "type": "`$ARRAY`",
          "short": "Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed"
        },
        {
          "name": "deviceTokens",
          "title": "Device Tokens",
          "type": "`$ARRAY`",
          "short": "Device tokens associated with the message, if applicable"
        },
        {
          "name": "directWebhookUrl",
          "title": "Direct Webhook Url",
          "type": "`$STRING`",
          "short": "Direct webhook URL for the message, if applicable"
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address associated with the message, if applicable"
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Environment ID where the message is sent"
        },
        {
          "name": "errorId",
          "title": "Error Id",
          "type": "`$STRING`",
          "short": "Error ID if the message has an error"
        },
        {
          "name": "errorText",
          "title": "Error Text",
          "type": "`$STRING`",
          "short": "Error text if the message has an error"
        },
        {
          "name": "feedId",
          "title": "Feed Id",
          "type": "`$STRING`",
          "short": "Feed ID associated with the message, if applicable"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the message"
        },
        {
          "name": "lastReadDate",
          "title": "Last Read Date",
          "type": "`$STRING`",
          "short": "Last read date of the message, if available"
        },
        {
          "name": "lastSeenDate",
          "title": "Last Seen Date",
          "type": "`$STRING`",
          "short": "Last seen date of the message, if available"
        },
        {
          "name": "messageTemplateId",
          "title": "Message Template Id",
          "type": "`$STRING`",
          "short": "Message template ID"
        },
        {
          "name": "notificationId",
          "title": "Notification Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Notification ID associated with the message"
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization ID associated with the message"
        },
        {
          "name": "overrides",
          "title": "Overrides",
          "type": "`$OBJECT`",
          "short": "Provider specific overrides used when triggering the notification"
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "The payload that was used to send the notification trigger"
        },
        {
          "name": "phone",
          "title": "Phone",
          "type": "`$STRING`",
          "short": "Phone number associated with the message, if applicable"
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "short": "Provider ID associated with the message, if applicable"
        },
        {
          "name": "read",
          "title": "Read",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates if the message has been read"
        },
        {
          "name": "seen",
          "title": "Seen",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates if the message has been seen"
        },
        {
          "name": "snoozedUntil",
          "title": "Snoozed Until",
          "type": "`$STRING`",
          "short": "Date when the message will be unsnoozed"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Status of the message"
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Subject of the message, if applicable"
        },
        {
          "name": "subscriber",
          "title": "Subscriber",
          "type": "`$ANY`",
          "short": "Subscriber details, if available"
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Subscriber ID associated with the message"
        },
        {
          "name": "template",
          "title": "Template",
          "type": "`$ANY`",
          "short": "Workflow template associated with the message"
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": "`$STRING`",
          "short": "Template ID associated with the message"
        },
        {
          "name": "templateIdentifier",
          "title": "Template Identifier",
          "type": "`$STRING`",
          "short": "Identifier for the message template"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Title of the message, if applicable"
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Transaction ID associated with the message"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "message",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/messages",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "messages"
                }
              ],
              "parts": [
                "v1",
                "messages"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "channel",
                    "orig": "channel",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:org-123",
                      "region:us-east-1"
                    ]
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "transaction_id",
                    "orig": "transactionId",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "channel",
                  "context_key",
                  "idempotency_key",
                  "limit",
                  "page",
                  "subscriber_id",
                  "transaction_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/messages/transaction/{transactionId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "messages"
                },
                {
                  "lit": "transaction"
                },
                {
                  "var": "transaction_id"
                }
              ],
              "parts": [
                "v1",
                "messages",
                "transaction",
                "{transaction_id}"
              ],
              "rename": {
                "param": {
                  "transactionId": "transaction_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "transaction_id",
                    "orig": "transactionId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "507f1f77bcf86cd799439011"
                  }
                ],
                "query": [
                  {
                    "name": "channel",
                    "orig": "channel",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "channel",
                  "idempotency_key",
                  "transaction_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/messages/{messageId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "messages"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "messages",
                "{id}"
              ],
              "rename": {
                "param": {
                  "messageId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "messageId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "507f1f77bcf86cd799439011"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "message_response_dto": {
      "fields": [
        {
          "name": "markAs",
          "title": "Mark As",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "messageId",
          "title": "Message Id",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "Message action payload"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Message action status"
        }
      ],
      "name": "message_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "messages"
                },
                {
                  "var": "message_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "type"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{subscriber_id}",
                "messages",
                "{message_id}",
                "actions",
                "{type}"
              ],
              "rename": {
                "param": {
                  "messageId": "message_id",
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "message_id",
                    "orig": "messageId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "message_id",
                  "subscriber_id",
                  "type"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/subscribers/{subscriberId}/messages/mark-as",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "messages"
                },
                {
                  "lit": "mark-as"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{subscriber_id}",
                "messages",
                "mark-as"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ],
          [
            "$.main.kit.entity.subscriber",
            "$.main.kit.entity.message"
          ]
        ]
      }
    },
    "notification_feed_item_dto": {
      "fields": [
        {
          "name": "actor",
          "title": "Actor",
          "type": "`$ANY`",
          "short": "Actor details related to the notification, if applicable."
        },
        {
          "name": "archived",
          "title": "Archived",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the notification has been archived by the subscriber."
        },
        {
          "name": "channel",
          "title": "Channel",
          "type": "`$STRING`",
          "req": true,
          "short": "Channel the message was sent on"
        },
        {
          "name": "content",
          "title": "Content",
          "type": "`$STRING`",
          "req": true,
          "short": "The main content of the notification."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the notification was created.",
          "format": "date-time"
        },
        {
          "name": "cta",
          "title": "Cta",
          "type": "`$ANY`",
          "req": true,
          "short": "Call-to-action information associated with the notification."
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "The data sent with the notification."
        },
        {
          "name": "deviceTokens",
          "title": "Device Tokens",
          "type": "`$ARRAY`",
          "short": "Device tokens for push notifications, if applicable."
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifier for the environment where the notification is sent."
        },
        {
          "name": "feedId",
          "title": "Feed Id",
          "type": "`$STRING`",
          "short": "Identifier for the feed associated with the notification."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the notification."
        },
        {
          "name": "jobId",
          "title": "Job Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifier for the job that triggered the notification."
        },
        {
          "name": "messageTemplateId",
          "title": "Message Template Id",
          "type": "`$STRING`",
          "short": "Identifier for the message template used."
        },
        {
          "name": "notificationId",
          "title": "Notification Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the notification instance."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifier for the organization sending the notification."
        },
        {
          "name": "overrides",
          "title": "Overrides",
          "type": "`$OBJECT`",
          "short": "Provider-specific overrides used when triggering the notification."
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "The payload that was used to send the notification trigger."
        },
        {
          "name": "providerId",
          "title": "Provider Id",
          "type": "`$STRING`",
          "short": "Identifier for the provider that sends the notification."
        },
        {
          "name": "read",
          "title": "Read",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the notification has been read by the subscriber."
        },
        {
          "name": "seen",
          "title": "Seen",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the notification has been seen by the subscriber."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Current status of the notification."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The subject line for email notifications, if applicable."
        },
        {
          "name": "subscriber",
          "title": "Subscriber",
          "type": "`$ANY`",
          "short": "Subscriber details associated with this notification."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the subscriber receiving the notification."
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`",
          "short": "Tags associated with the workflow that triggered the notification."
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifier for the template used to generate the notification."
        },
        {
          "name": "templateIdentifier",
          "title": "Template Identifier",
          "type": "`$STRING`",
          "short": "Identifier for the template used, if applicable."
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the transaction associated with the notification."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the notification was last updated.",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "notification_feed_item_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/subscribers/{subscriberId}/notifications/feed",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "feed"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "feed"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "payload",
                    "orig": "payload",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30="
                  },
                  {
                    "name": "read",
                    "orig": "read",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "seen",
                    "orig": "seen",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "limit",
                  "page",
                  "payload",
                  "read",
                  "seen",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "preferences_response_dto": {
      "fields": [
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Array of workflow preferences to update (maximum 100 items)"
        }
      ],
      "name": "preferences_response_dto",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/preferences/bulk",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "preferences"
                },
                {
                  "lit": "bulk"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "preferences",
                "bulk"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "publish": {
      "fields": [
        {
          "name": "dryRun",
          "title": "Dry Run",
          "type": "`$BOOLEAN`",
          "short": "Perform a dry run without making actual changes"
        },
        {
          "name": "resources",
          "title": "Resources",
          "type": "`$ARRAY`",
          "short": "Array of specific resources to publish."
        },
        {
          "name": "results",
          "title": "Results",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Sync results by resource type"
        },
        {
          "name": "sourceEnvironmentId",
          "title": "Source Environment Id",
          "type": "`$STRING`",
          "short": "Source environment ID to sync from."
        },
        {
          "name": "summary",
          "title": "Summary",
          "type": "`$ANY`",
          "req": true,
          "short": "Summary of the sync operation"
        }
      ],
      "name": "publish",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/environments/{targetEnvironmentId}/publish",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "environments"
                },
                {
                  "var": "environment_id"
                },
                {
                  "lit": "publish"
                }
              ],
              "parts": [
                "v2",
                "environments",
                "{environment_id}",
                "publish"
              ],
              "rename": {
                "param": {
                  "targetEnvironmentId": "environment_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "environment_id",
                    "orig": "targetEnvironmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "6615943e7ace93b0540ae377"
                  }
                ]
              },
              "select": {
                "exist": [
                  "environment_id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.environment"
          ]
        ]
      }
    },
    "remove_subscriber_response_dto": {
      "fields": [],
      "name": "remove_subscriber_response_dto",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/subscribers/{subscriberId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "step": {
      "fields": [
        {
          "name": "controlValues",
          "title": "Control Values",
          "type": "`$OBJECT`",
          "short": "Control values for the step (alias for controls.values)"
        },
        {
          "name": "controls",
          "title": "Controls",
          "type": "`$ANY`",
          "req": true,
          "short": "Controls metadata for the step"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Database identifier of the step"
        },
        {
          "name": "issues",
          "title": "Issues",
          "type": "`$ANY`",
          "short": "Issues associated with the step"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the step"
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow origin"
        },
        {
          "name": "providerOverrides",
          "title": "Provider Overrides",
          "type": "`$OBJECT`",
          "short": "Per-provider content overrides keyed by providerId."
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Slug of the step"
        },
        {
          "name": "stepId",
          "title": "Step Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the step"
        },
        {
          "name": "stepResolverHash",
          "title": "Step Resolver Hash",
          "type": "`$STRING`",
          "short": "Hash identifying the deployed Cloudflare Worker for this step"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Type of the step"
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$OBJECT`",
          "req": true,
          "short": "JSON Schema for variables, follows the JSON Schema standard"
        },
        {
          "name": "workflowDatabaseId",
          "title": "Workflow Database Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow database identifier"
        },
        {
          "name": "workflowId",
          "title": "Workflow Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow identifier"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "step",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/workflows/{workflowId}/steps/{stepId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "workflow_id"
                },
                {
                  "lit": "steps"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{workflow_id}",
                "steps",
                "{id}"
              ],
              "rename": {
                "param": {
                  "stepId": "id",
                  "workflowId": "workflow_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "stepId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "workflow_id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "workflow_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.workflow"
          ]
        ]
      }
    },
    "subscriber": {
      "fields": [
        {
          "name": "avatar",
          "title": "Avatar",
          "type": "`$STRING`",
          "short": "The URL of the subscriber's avatar image."
        },
        {
          "name": "channels",
          "title": "Channels",
          "type": "`$ARRAY`",
          "short": "An array of channel settings associated with the subscriber."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the subscriber was created, in ISO 8601 format."
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "Additional custom data for the subscriber"
        },
        {
          "name": "deleted",
          "title": "Deleted",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the subscriber has been deleted."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "The email address of the subscriber."
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the environment associated with this subscriber."
        },
        {
          "name": "firstName",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "The first name of the subscriber."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The internal ID generated by Novu for your subscriber."
        },
        {
          "name": "isOnline",
          "title": "Is Online",
          "type": "`$BOOLEAN`",
          "short": "Indicates whether the subscriber is currently online."
        },
        {
          "name": "lastName",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "The last name of the subscriber."
        },
        {
          "name": "lastOnlineAt",
          "title": "Last Online At",
          "type": "`$STRING`",
          "short": "The timestamp indicating when the subscriber was last online, in ISO 8601 format."
        },
        {
          "name": "locale",
          "title": "Locale",
          "type": "`$STRING`",
          "short": "The locale setting of the subscriber, indicating their preferred language or region."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the organization to which the subscriber belongs."
        },
        {
          "name": "phone",
          "title": "Phone",
          "type": "`$STRING`",
          "short": "The phone number of the subscriber."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier used to create this subscriber, which typically corresponds to the user ID in your system."
        },
        {
          "name": "timezone",
          "title": "Timezone",
          "type": "`$STRING`",
          "short": "Timezone of the subscriber"
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "short": "An array of topics that the subscriber is subscribed to.",
          "deprecated": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the subscriber was last updated, in ISO 8601 format."
        },
        {
          "name": "v",
          "title": "V",
          "type": "`$NUMBER`",
          "short": "The version of the subscriber document."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscriber",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                }
              ],
              "parts": [
                "v2",
                "subscribers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "fail_if_exist",
                    "orig": "failIfExists",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "fail_if_exist",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/subscribers/{subscriberId}/messages/mark-all",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "messages"
                },
                {
                  "lit": "mark-all"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{id}",
                "messages",
                "mark-all"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "message_mark_all",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers/{subscriberId}/notifications/archive",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "archive"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "archive"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "notification_archive",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers/{subscriberId}/notifications/delete",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "delete"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "notification_delete",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers/{subscriberId}/notifications/read",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "read"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "read"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "notification_read",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers/{subscriberId}/notifications/read-archive",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "read-archive"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "read-archive"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "notification_read_archive",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/subscribers/{subscriberId}/notifications/seen",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "seen"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "seen"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "notification_seen",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                }
              ],
              "parts": [
                "v2",
                "subscribers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "email",
                    "orig": "email",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "phone",
                    "orig": "phone",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "email",
                  "idempotency_key",
                  "include_cursor",
                  "limit",
                  "name",
                  "order_by",
                  "order_direction",
                  "phone",
                  "subscriber_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers/{subscriberId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications",
                "{notification_id}"
              ],
              "rename": {
                "param": {
                  "notificationId": "notification_id",
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "notification_id",
                    "orig": "notificationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "context_key",
                  "id",
                  "idempotency_key",
                  "notification_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/subscribers/{subscriberId}/credentials/{providerId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "credentials"
                },
                {
                  "var": "provider_id"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{id}",
                "credentials",
                "{provider_id}"
              ],
              "rename": {
                "param": {
                  "providerId": "provider_id",
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "provider_id",
                    "orig": "providerId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "provider_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subscriber_notifications_count_response_dto": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The count of notifications matching the filter"
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$OBJECT`",
          "req": true,
          "short": "The filter applied"
        }
      ],
      "name": "subscriber_notifications_count_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers/{subscriberId}/notifications/count",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "count"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "filter",
                    "orig": "filters",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "[{\"read\":false,\"archived\":false},{\"tags\":[\"important\"]},{\"tags\":{\"and\":[{\"or\":[\"a\",\"b\"]},{\"or\":[\"c\"]}]}}]"
                  }
                ]
              },
              "select": {
                "exist": [
                  "filter",
                  "idempotency_key",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "subscriber_notifications_response_dto": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscriber_notifications_response_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers/{subscriberId}/notifications",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notifications"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "notifications"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "created_gte",
                    "orig": "createdGte",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 1704067200000
                  },
                  {
                    "name": "created_lte",
                    "orig": "createdLte",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 1735689599999
                  },
                  {
                    "name": "data",
                    "orig": "data",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "read",
                    "orig": "read",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "seen",
                    "orig": "seen",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "severity",
                    "orig": "severity",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "snoozed",
                    "orig": "snoozed",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "notifications",
                "exist": [
                  "after",
                  "archived",
                  "context_key",
                  "created_gte",
                  "created_lte",
                  "data",
                  "id",
                  "idempotency_key",
                  "limit",
                  "offset",
                  "read",
                  "seen",
                  "severity",
                  "snoozed"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subscriber_preferences_dto": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscriber_preferences_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscribers/{subscriberId}/preferences",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "preferences"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "preferences"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.workflows`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "context_key",
                    "orig": "contextKeys",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      "tenant:acme"
                    ]
                  },
                  {
                    "name": "criticality",
                    "orig": "criticality",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "nonCritical"
                  }
                ]
              },
              "select": {
                "$action": "preferences",
                "exist": [
                  "context_key",
                  "criticality",
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/subscribers/{subscriberId}/preferences",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "preferences"
                }
              ],
              "parts": [
                "v2",
                "subscribers",
                "{id}",
                "preferences"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "preferences",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subscriber_response_dto": {
      "fields": [
        {
          "name": "avatar",
          "title": "Avatar",
          "type": "`$STRING`",
          "short": "The URL of the subscriber's avatar image."
        },
        {
          "name": "channels",
          "title": "Channels",
          "type": "`$ARRAY`",
          "short": "An array of channel settings associated with the subscriber."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the subscriber was created, in ISO 8601 format."
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "Additional custom data for the subscriber"
        },
        {
          "name": "deleted",
          "title": "Deleted",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the subscriber has been deleted."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "The email address of the subscriber."
        },
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the environment associated with this subscriber."
        },
        {
          "name": "firstName",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "The first name of the subscriber."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The internal ID generated by Novu for your subscriber."
        },
        {
          "name": "isOnline",
          "title": "Is Online",
          "type": "`$BOOLEAN`",
          "short": "Indicates whether the subscriber is currently online."
        },
        {
          "name": "lastName",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "The last name of the subscriber."
        },
        {
          "name": "lastOnlineAt",
          "title": "Last Online At",
          "type": "`$STRING`",
          "short": "The timestamp indicating when the subscriber was last online, in ISO 8601 format."
        },
        {
          "name": "locale",
          "title": "Locale",
          "type": "`$STRING`",
          "short": "The locale setting of the subscriber, indicating their preferred language or region."
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the organization to which the subscriber belongs."
        },
        {
          "name": "phone",
          "title": "Phone",
          "type": "`$STRING`",
          "short": "The phone number of the subscriber."
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier used to create this subscriber, which typically corresponds to the user ID in your system."
        },
        {
          "name": "timezone",
          "title": "Timezone",
          "type": "`$STRING`",
          "short": "Timezone of the subscriber"
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "short": "An array of topics that the subscriber is subscribed to.",
          "deprecated": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The timestamp indicating when the subscriber was last updated, in ISO 8601 format."
        },
        {
          "name": "v",
          "title": "V",
          "type": "`$NUMBER`",
          "short": "The version of the subscriber document."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscriber_response_dto",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/subscribers/{subscriberId}/credentials",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "credentials"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{id}",
                "credentials"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "credentials",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/subscribers/{subscriberId}/credentials",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "credentials"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{id}",
                "credentials"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "credentials",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/subscribers/{subscriberId}/online-status",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "online-status"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{id}",
                "online-status"
              ],
              "rename": {
                "param": {
                  "subscriberId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "online-status",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subscription": {
      "fields": [
        {
          "name": "contextKeys",
          "title": "Context Keys",
          "type": "`$ARRAY`",
          "short": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The creation date of the subscription"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the subscription"
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "short": "The identifier of the subscription"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the subscription"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ARRAY`",
          "short": "The preferences/rules for the subscription"
        },
        {
          "name": "subscriber",
          "title": "Subscriber",
          "type": "`$ANY`",
          "req": true,
          "short": "The subscriber information"
        },
        {
          "name": "topic",
          "title": "Topic",
          "type": "`$ANY`",
          "req": true,
          "short": "The topic information"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The last update date of the subscription"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscription",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/topics/{topicKey}/subscriptions/{identifier}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_id"
                },
                {
                  "lit": "subscriptions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{topic_id}",
                "subscriptions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id",
                  "topicKey": "topic_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "topic_id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "topic_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/topics/{topicKey}/subscriptions/{identifier}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_id"
                },
                {
                  "lit": "subscriptions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{topic_id}",
                "subscriptions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id",
                  "topicKey": "topic_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "topic_id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "topic_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.topic"
          ]
        ]
      }
    },
    "topic": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date the topic was created"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "short": "Additional custom data associated with the topic"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The identifier of the topic"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique key of the topic"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "The date the topic was last updated"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "topic",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/topics",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "v2",
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "fail_if_exist",
                    "orig": "failIfExists",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "fail_if_exist",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/topics",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "v2",
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_cursor",
                    "orig": "includeCursor",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "idempotency_key",
                  "include_cursor",
                  "key",
                  "limit",
                  "name",
                  "order_by",
                  "order_direction"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/topics/{topicKey}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{id}"
              ],
              "rename": {
                "param": {
                  "topicKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/topics/{topicKey}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{id}"
              ],
              "rename": {
                "param": {
                  "topicKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/topics/{topicKey}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{id}"
              ],
              "rename": {
                "param": {
                  "topicKey": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "topic_subscriber_dto": {
      "fields": [
        {
          "name": "environmentId",
          "title": "Environment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the environment"
        },
        {
          "name": "externalSubscriberId",
          "title": "External Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "External identifier for the subscriber"
        },
        {
          "name": "organizationId",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the organization"
        },
        {
          "name": "subscriberId",
          "title": "Subscriber Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the subscriber"
        },
        {
          "name": "topicId",
          "title": "Topic Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the topic"
        },
        {
          "name": "topicKey",
          "title": "Topic Key",
          "type": "`$STRING`",
          "req": true,
          "short": "Key associated with the topic"
        }
      ],
      "name": "topic_subscriber_dto",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/topics/{topicKey}/subscribers/{externalSubscriberId}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_id"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "external_subscriber_id"
                }
              ],
              "parts": [
                "v1",
                "topics",
                "{topic_id}",
                "subscribers",
                "{external_subscriber_id}"
              ],
              "rename": {
                "param": {
                  "externalSubscriberId": "external_subscriber_id",
                  "topicKey": "topic_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "external_subscriber_id",
                    "orig": "externalSubscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "topic_id",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "external_subscriber_id",
                  "idempotency_key",
                  "topic_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.topic",
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "topic_subscriptions_response_dto": {
      "fields": [],
      "name": "topic_subscriptions_response_dto",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/topics/{topicKey}/subscriptions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "topics"
                },
                {
                  "var": "topic_key"
                },
                {
                  "lit": "subscriptions"
                }
              ],
              "parts": [
                "v2",
                "topics",
                "{topic_key}",
                "subscriptions"
              ],
              "rename": {
                "param": {
                  "topicKey": "topic_key"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "topic_key",
                    "orig": "topicKey",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "topic_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.topic"
          ]
        ]
      }
    },
    "translation": {
      "fields": [
        {
          "name": "content",
          "title": "Content",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Translation content as JSON object"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "locale",
          "title": "Locale",
          "type": "`$STRING`",
          "req": true,
          "short": "Locale code"
        },
        {
          "name": "resourceId",
          "title": "Resource Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource identifier"
        },
        {
          "name": "resourceType",
          "title": "Resource Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource type"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last update timestamp"
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "locale": "locale",
          "resource_id": "resourceId",
          "resource_type": "resourceType"
        },
        "name": "id",
        "parts": [
          "resource_type",
          "resource_id",
          "locale"
        ],
        "sep": "/"
      },
      "name": "translation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/translations",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                }
              ],
              "parts": [
                "v2",
                "translations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/translations/{resourceType}/{resourceId}/{locale}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "var": "resource_type"
                },
                {
                  "var": "resource_id"
                },
                {
                  "var": "locale"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "{resource_type}",
                "{resource_id}",
                "{locale}"
              ],
              "rename": {
                "param": {
                  "resourceId": "resource_id",
                  "resourceType": "resource_type"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "locale",
                    "orig": "locale",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "en_US"
                  },
                  {
                    "name": "resource_id",
                    "orig": "resourceId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "welcome-email"
                  },
                  {
                    "name": "resource_type",
                    "orig": "resourceType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "locale",
                  "resource_id",
                  "resource_type"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/translations/{resourceType}/{resourceId}/{locale}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "var": "resource_type"
                },
                {
                  "var": "resource_id"
                },
                {
                  "var": "locale"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "{resource_type}",
                "{resource_id}",
                "{locale}"
              ],
              "rename": {
                "param": {
                  "resourceId": "resource_id",
                  "resourceType": "resource_type"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "locale",
                    "orig": "locale",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "resource_id",
                    "orig": "resourceId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "resource_type",
                    "orig": "resourceType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "locale",
                  "resource_id",
                  "resource_type"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/translations/{resourceType}/{resourceId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "var": "resource_type"
                },
                {
                  "var": "resource_id"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "{resource_type}",
                "{resource_id}"
              ],
              "rename": {
                "param": {
                  "resourceId": "resource_id",
                  "resourceType": "resource_type"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "resource_id",
                    "orig": "resourceId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "welcome-email"
                  },
                  {
                    "name": "resource_type",
                    "orig": "resourceType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "workflow"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "resource_id",
                  "resource_type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "translation_group_dto": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "locales",
          "title": "Locales",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Array of available locales for this resource"
        },
        {
          "name": "outdatedLocales",
          "title": "Outdated Locales",
          "type": "`$ARRAY`",
          "short": "Locales that are outdated compared to the default locale (only present when there are outdated locales)"
        },
        {
          "name": "resourceId",
          "title": "Resource Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource identifier (slugified ID)"
        },
        {
          "name": "resourceName",
          "title": "Resource Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource name (e.g., workflow name)"
        },
        {
          "name": "resourceType",
          "title": "Resource Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Resource type"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last update timestamp"
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "resource_id": "resourceId",
          "resource_type": "resourceType"
        },
        "name": "id",
        "parts": [
          "resource_type",
          "resource_id"
        ],
        "sep": "/"
      },
      "name": "translation_group_dto",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/translations/group/{resourceType}/{resourceId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "lit": "group"
                },
                {
                  "var": "resource_type"
                },
                {
                  "var": "resource_id"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "group",
                "{resource_type}",
                "{resource_id}"
              ],
              "rename": {
                "param": {
                  "resourceId": "resource_id",
                  "resourceType": "resource_type"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "resource_id",
                    "orig": "resourceId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "welcome-email"
                  },
                  {
                    "name": "resource_type",
                    "orig": "resourceType",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "workflow"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "resource_id",
                  "resource_type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "trigger_event_response_dto": {
      "fields": [
        {
          "name": "acknowledged",
          "title": "Acknowledged",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the trigger was acknowledged or not"
        },
        {
          "name": "activityFeedLink",
          "title": "Activity Feed Link",
          "type": "`$STRING`",
          "short": "Link to the activity feed for this trigger event"
        },
        {
          "name": "actor",
          "title": "Actor",
          "type": "`$ANY`",
          "short": "It is used to display the Avatar of the provided actor's subscriber id or actor object."
        },
        {
          "name": "agentId",
          "title": "Agent Id",
          "type": "`$STRING`",
          "short": "Override the workflow-assigned agent for this trigger using the public agent identifier."
        },
        {
          "name": "context",
          "title": "Context",
          "type": "`$OBJECT`"
        },
        {
          "name": "error",
          "title": "Error",
          "type": "`$ARRAY`",
          "short": "In case of an error, this field will contain the error message(s)"
        },
        {
          "name": "events",
          "title": "Events",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "jobData",
          "title": "Job Data",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The trigger identifier associated for the template you wish to send."
        },
        {
          "name": "overrides",
          "title": "Overrides",
          "type": "`$ANY`",
          "short": "This could be used to override provider specific configurations"
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "req": true,
          "short": "The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Status of the trigger"
        },
        {
          "name": "tenant",
          "title": "Tenant",
          "type": "`$ANY`",
          "short": "It is used to specify a tenant context during trigger event."
        },
        {
          "name": "transactionId",
          "title": "Transaction Id",
          "type": "`$STRING`",
          "short": "The returned transaction ID of the trigger"
        }
      ],
      "name": "trigger_event_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/events/trigger/broadcast",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "events"
                },
                {
                  "lit": "trigger"
                },
                {
                  "lit": "broadcast"
                }
              ],
              "parts": [
                "v1",
                "events",
                "trigger",
                "broadcast"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/events/trigger/bulk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "events"
                },
                {
                  "lit": "trigger"
                },
                {
                  "lit": "bulk"
                }
              ],
              "parts": [
                "v1",
                "events",
                "trigger",
                "bulk"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "unseen": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "name": "unseen",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/subscribers/{subscriberId}/notifications/unseen",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "subscribers"
                },
                {
                  "var": "subscriber_id"
                },
                {
                  "lit": "notifications"
                },
                {
                  "lit": "unseen"
                }
              ],
              "parts": [
                "v1",
                "subscribers",
                "{subscriber_id}",
                "notifications",
                "unseen"
              ],
              "rename": {
                "param": {
                  "subscriberId": "subscriber_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "subscriber_id",
                    "orig": "subscriberId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "seen",
                    "orig": "seen",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "limit",
                  "seen",
                  "subscriber_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.subscriber"
          ]
        ]
      }
    },
    "upload": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true,
          "short": "List of error messages for failed uploads"
        },
        {
          "name": "failedUploads",
          "title": "Failed Uploads",
          "type": "`$NUMBER`",
          "req": true,
          "short": "Number of files that failed to upload"
        },
        {
          "name": "successfulUploads",
          "title": "Successful Uploads",
          "type": "`$NUMBER`",
          "req": true,
          "short": "Number of files successfully uploaded"
        },
        {
          "name": "totalFiles",
          "title": "Total Files",
          "type": "`$NUMBER`",
          "req": true,
          "short": "Total number of files processed"
        }
      ],
      "name": "upload",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/translations/upload",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "translations"
                },
                {
                  "lit": "upload"
                }
              ],
              "parts": [
                "v2",
                "translations",
                "upload"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook_result_dto": {
      "fields": [],
      "name": "webhook_result_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "inbound-webhooks"
                },
                {
                  "lit": "delivery-providers"
                },
                {
                  "var": "environment_id"
                },
                {
                  "var": "integration_id"
                }
              ],
              "parts": [
                "v2",
                "inbound-webhooks",
                "delivery-providers",
                "{environment_id}",
                "{integration_id}"
              ],
              "rename": {
                "param": {
                  "environmentId": "environment_id",
                  "integrationId": "integration_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "environment_id",
                    "orig": "environmentId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "integration_id",
                    "orig": "integrationId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "environment_id",
                  "idempotency_key",
                  "integration_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "workflow": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "short": "Whether the workflow is active"
        },
        {
          "name": "agent",
          "title": "Agent",
          "type": "`$ANY`",
          "short": "Optional agent assignment used to route this workflow through an agent's connected channels."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Description of the workflow"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Database identifier of the workflow"
        },
        {
          "name": "isTranslationEnabled",
          "title": "Is Translation Enabled",
          "type": "`$BOOLEAN`",
          "short": "Enable or disable translations for this workflow"
        },
        {
          "name": "issues",
          "title": "Issues",
          "type": "`$OBJECT`",
          "short": "Runtime issues for workflow creation and update"
        },
        {
          "name": "lastPublishedAt",
          "title": "Last Published At",
          "type": "`$STRING`",
          "short": "Timestamp of the last workflow publication"
        },
        {
          "name": "lastPublishedBy",
          "title": "Last Published By",
          "type": "`$ANY`",
          "short": "User who last published the workflow"
        },
        {
          "name": "lastTriggeredAt",
          "title": "Last Triggered At",
          "type": "`$STRING`",
          "short": "Timestamp of the last workflow trigger"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "patch": {
              "type": "`$STRING`"
            }
          },
          "short": "Name of the workflow"
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Workflow origin"
        },
        {
          "name": "payloadExample",
          "title": "Payload Example",
          "type": "`$OBJECT`",
          "short": "Generated payload example based on the payload schema"
        },
        {
          "name": "payloadSchema",
          "title": "Payload Schema",
          "type": "`$OBJECT`",
          "short": "The payload JSON Schema for the workflow"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ANY`",
          "req": true,
          "op": {
            "create": {
              "type": "`$ANY`"
            }
          },
          "short": "Preferences for the workflow"
        },
        {
          "name": "severity",
          "title": "Severity",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Workflow severity"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Slug of the workflow"
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "short": "Source of workflow creation"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow status"
        },
        {
          "name": "stepTypeOverviews",
          "title": "Step Type Overviews",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Overview of step types in the workflow"
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Steps of the workflow"
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`",
          "short": "Tags associated with the workflow"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last updated timestamp"
        },
        {
          "name": "updatedBy",
          "title": "Updated By",
          "type": "`$ANY`",
          "short": "User who last updated the workflow"
        },
        {
          "name": "validatePayload",
          "title": "Validate Payload",
          "type": "`$BOOLEAN`",
          "short": "Enable or disable payload schema validation"
        },
        {
          "name": "workflowId",
          "title": "Workflow Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Workflow identifier"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workflow",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v2/workflows",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                }
              ],
              "parts": [
                "v2",
                "workflows"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/workflows",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                }
              ],
              "parts": [
                "v2",
                "workflows"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.workflows`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "order_by",
                    "orig": "orderBy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_direction",
                    "orig": "orderDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "tag",
                    "orig": "tags",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "limit",
                  "offset",
                  "order_by",
                  "order_direction",
                  "query",
                  "status",
                  "tag"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/workflows/{workflowId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{id}"
              ],
              "rename": {
                "param": {
                  "workflowId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "environment_id",
                    "orig": "environmentId",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "environment_id",
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "patch": {
          "input": "data",
          "name": "patch",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v2/workflows/{workflowId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{id}"
              ],
              "rename": {
                "param": {
                  "workflowId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/workflows/{workflowId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{id}"
              ],
              "rename": {
                "param": {
                  "workflowId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/workflows/{workflowId}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{id}"
              ],
              "rename": {
                "param": {
                  "workflowId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "workflow_info_dto": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the workflow"
        },
        {
          "name": "workflowId",
          "title": "Workflow Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier of the workflow"
        }
      ],
      "name": "workflow_info_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v2/layouts/{layoutId}/usage",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "layouts"
                },
                {
                  "var": "layout_id"
                },
                {
                  "lit": "usage"
                }
              ],
              "parts": [
                "v2",
                "layouts",
                "{layout_id}",
                "usage"
              ],
              "rename": {
                "param": {
                  "layoutId": "layout_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.workflows`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "layout_id",
                    "orig": "layoutId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key",
                  "layout_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.layout"
          ]
        ]
      }
    },
    "workflow_response_dto": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "short": "Whether the workflow is active"
        },
        {
          "name": "agent",
          "title": "Agent",
          "type": "`$ANY`",
          "short": "Optional agent assignment used to route this workflow through an agent's connected channels."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Description of the workflow"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Database identifier of the workflow"
        },
        {
          "name": "isTranslationEnabled",
          "title": "Is Translation Enabled",
          "type": "`$BOOLEAN`",
          "short": "Enable or disable translations for this workflow"
        },
        {
          "name": "issues",
          "title": "Issues",
          "type": "`$OBJECT`",
          "short": "Runtime issues for workflow creation and update"
        },
        {
          "name": "lastPublishedAt",
          "title": "Last Published At",
          "type": "`$STRING`",
          "short": "Timestamp of the last workflow publication"
        },
        {
          "name": "lastPublishedBy",
          "title": "Last Published By",
          "type": "`$ANY`",
          "short": "User who last published the workflow"
        },
        {
          "name": "lastTriggeredAt",
          "title": "Last Triggered At",
          "type": "`$STRING`",
          "short": "Timestamp of the last workflow trigger"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the workflow"
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow origin"
        },
        {
          "name": "payloadExample",
          "title": "Payload Example",
          "type": "`$OBJECT`",
          "short": "Generated payload example based on the payload schema"
        },
        {
          "name": "payloadSchema",
          "title": "Payload Schema",
          "type": "`$OBJECT`",
          "short": "The payload JSON Schema for the workflow"
        },
        {
          "name": "preferences",
          "title": "Preferences",
          "type": "`$ANY`",
          "req": true,
          "short": "Preferences for the workflow"
        },
        {
          "name": "severity",
          "title": "Severity",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow severity"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Slug of the workflow"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow status"
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Steps of the workflow"
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`",
          "short": "Tags associated with the workflow"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Last updated timestamp"
        },
        {
          "name": "updatedBy",
          "title": "Updated By",
          "type": "`$ANY`",
          "short": "User who last updated the workflow"
        },
        {
          "name": "validatePayload",
          "title": "Validate Payload",
          "type": "`$BOOLEAN`",
          "short": "Enable or disable payload schema validation"
        },
        {
          "name": "workflowId",
          "title": "Workflow Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Workflow identifier"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workflow_response_dto",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/workflows/{workflowId}/sync",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "sync"
                }
              ],
              "parts": [
                "v2",
                "workflows",
                "{id}",
                "sync"
              ],
              "rename": {
                "param": {
                  "workflowId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "idempotency-key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "id",
                    "orig": "workflowId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "sync",
                "exist": [
                  "id",
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

