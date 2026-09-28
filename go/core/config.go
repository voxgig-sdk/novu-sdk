package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Novu",
			"slug": "novu",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.novu.co",
			"auth": map[string]any{
				"prefix": "ApiKey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"activity_notification_response_dto": map[string]any{},
				"agent": map[string]any{},
				"agent_integration_response_dto": map[string]any{},
				"agent_response_dto": map[string]any{},
				"bulk": map[string]any{},
				"channel_connection": map[string]any{},
				"channel_endpoint": map[string]any{},
				"configure": map[string]any{},
				"context": map[string]any{},
				"create_subscriptions_response_dto": map[string]any{},
				"diff": map[string]any{},
				"domain": map[string]any{},
				"domain_connect_apply_url_response_dto": map[string]any{},
				"domain_connect_status_response_dto": map[string]any{},
				"domain_response_dto": map[string]any{},
				"domain_route_response_dto": map[string]any{},
				"environment": map[string]any{},
				"environment_tags_dto": map[string]any{},
				"environment_variable": map[string]any{},
				"environment_variable_workflow_info_dto": map[string]any{},
				"event": map[string]any{},
				"generate_chat_o_auth_url_response_dto": map[string]any{},
				"generate_preview_response_dto": map[string]any{},
				"import_master_json_response_dto": map[string]any{},
				"inbox_notification_dto": map[string]any{},
				"integration": map[string]any{},
				"integration_response_dto": map[string]any{},
				"layout": map[string]any{},
				"layout_response_dto": map[string]any{},
				"link": map[string]any{},
				"list_agent_integrations_response_dto": map[string]any{},
				"list_agents_response_dto": map[string]any{},
				"list_channel_connections_response_dto": map[string]any{},
				"list_channel_endpoints_response_dto": map[string]any{},
				"list_contexts_response_dto": map[string]any{},
				"list_domain_routes_response_dto": map[string]any{},
				"list_domains_response_dto": map[string]any{},
				"list_subscribers_response_dto": map[string]any{},
				"list_topic_subscriptions_response_dto": map[string]any{},
				"list_topics_response_dto": map[string]any{},
				"master_json": map[string]any{},
				"message": map[string]any{},
				"message_response_dto": map[string]any{},
				"notification_feed_item_dto": map[string]any{},
				"preferences_response_dto": map[string]any{},
				"publish": map[string]any{},
				"remove_subscriber_response_dto": map[string]any{},
				"step": map[string]any{},
				"subscriber": map[string]any{},
				"subscriber_notifications_count_response_dto": map[string]any{},
				"subscriber_notifications_response_dto": map[string]any{},
				"subscriber_preferences_dto": map[string]any{},
				"subscriber_response_dto": map[string]any{},
				"subscription": map[string]any{},
				"topic": map[string]any{},
				"topic_subscriber_dto": map[string]any{},
				"topic_subscriptions_response_dto": map[string]any{},
				"translation": map[string]any{},
				"translation_group_dto": map[string]any{},
				"trigger": map[string]any{},
				"trigger_event_response_dto": map[string]any{},
				"unseen": map[string]any{},
				"upload": map[string]any{},
				"webhook_result_dto": map[string]any{},
				"workflow": map[string]any{},
				"workflow_info_dto": map[string]any{},
				"workflow_response_dto": map[string]any{},
			},
		},
		"entity": map[string]any{
			"activity_notification_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channels",
						"title": "Channels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"short": "Context (single or multi) in which the notification was sent",
					},
					map[string]any{
						"name": "controls",
						"title": "Controls",
						"type": "`$OBJECT`",
						"short": "Controls associated with the notification",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "Creation time of the notification",
					},
					map[string]any{
						"name": "critical",
						"title": "Critical",
						"type": "`$BOOLEAN`",
						"short": "Criticality of the notification",
					},
					map[string]any{
						"name": "digestedNotificationId",
						"title": "Digested Notification Id",
						"type": "`$STRING`",
						"short": "Digested Notification ID",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Environment ID of the notification",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier of the notification",
					},
					map[string]any{
						"name": "jobs",
						"title": "Jobs",
						"type": "`$ARRAY`",
						"short": "Jobs of the notification",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization ID of the notification",
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"short": "Payload of the notification",
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"short": "Workflow severity",
					},
					map[string]any{
						"name": "subscriber",
						"title": "Subscriber",
						"type": "`$ANY`",
						"short": "Subscriber of the notification",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Subscriber ID of the notification",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the notification",
					},
					map[string]any{
						"name": "template",
						"title": "Template",
						"type": "`$ANY`",
						"short": "Template of the notification",
					},
					map[string]any{
						"name": "templateId",
						"title": "Template Id",
						"type": "`$STRING`",
						"short": "Template ID of the notification",
					},
					map[string]any{
						"name": "to",
						"title": "To",
						"type": "`$OBJECT`",
						"short": "To field for subscriber definition",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$ARRAY`",
						"short": "Topics of the notification",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Transaction ID of the notification",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "Last updated time of the notification",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "activity_notification_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/notifications",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "notifications",
									},
								},
								"parts": []any{
									"v1",
									"notifications",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "severity",
											"orig": "severity",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "template",
											"orig": "template",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "topic_key",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "transaction_id",
											"orig": "transaction_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"transaction_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/notifications/{notificationId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
								},
								"parts": []any{
									"v1",
									"notifications",
									"{notification_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"notification_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "behavior",
						"title": "Behavior",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Production bridge URL",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdBy",
						"title": "Created By",
						"type": "`$STRING`",
						"short": "Mongo user id of the user who created the agent",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "devBridgeActive",
						"title": "Dev Bridge Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the dev bridge override is active",
					},
					map[string]any{
						"name": "devBridgeUrl",
						"title": "Dev Bridge Url",
						"type": "`$STRING`",
						"short": "Development bridge URL (set by npx novu dev)",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exceedsPlanLimit",
						"title": "Exceeds Plan Limit",
						"type": "`$BOOLEAN`",
						"short": "Cloud only.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Required when not adopting an existing managed agent.",
					},
					map[string]any{
						"name": "integrations",
						"title": "Integrations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "managedRuntime",
						"title": "Managed Runtime",
						"type": "`$ANY`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Present when runtime is \"managed\".",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Required when not adopting an existing managed agent (i.e.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "runtime",
						"title": "Runtime",
						"type": "`$STRING`",
						"short": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
						"short": "Discovery scope of the agent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "agent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/agents/{agentId}/reply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{id}",
									"reply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
									},
								},
								"select": map[string]any{
									"$action": "reply",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/agents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"parts": []any{
									"v1",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "novu_analytics_source",
											"orig": "novu_analytics_source",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"novu_analytics_source",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "agent_integration_id",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{agent_id}",
									"integrations",
									"{agent_integration_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentIntegrationId": "agent_integration_id",
										"identifier": "agent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "agent_integration_id",
											"orig": "agent_integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
										"agent_integration_id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/agents/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "delete_from_provider",
											"orig": "delete_from_provider",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"delete_from_provider",
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/agents/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"agent_integration_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connectedAt",
						"title": "Connected At",
						"type": "`$OBJECT`",
						"short": "Set when the agent–integration link received its first inbound webhook delivery.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exceedsPlanLimit",
						"title": "Exceeds Plan Limit",
						"type": "`$BOOLEAN`",
						"short": "Cloud only.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Agent–integration link document id.",
					},
					map[string]any{
						"name": "integration",
						"title": "Integration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The integration identifier (same as in the integration store), not the internal document _id.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"short": "Provider ID to auto-create a dedicated integration (e.g.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "agent_integration_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/agents/{identifier}/integrations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "identifier",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{identifier}",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "identifier",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"identifier",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "agent_integration_id",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{agent_id}",
									"integrations",
									"{agent_integration_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentIntegrationId": "agent_integration_id",
										"identifier": "agent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "agent_integration_id",
											"orig": "agent_integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
										"agent_integration_id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.agent",
						},
						[]any{
							"$.main.kit.entity.agent",
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"agent_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "behavior",
						"title": "Behavior",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Production bridge URL",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdBy",
						"title": "Created By",
						"type": "`$STRING`",
						"short": "Mongo user id of the user who created the agent",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "devBridgeActive",
						"title": "Dev Bridge Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the dev bridge override is active",
					},
					map[string]any{
						"name": "devBridgeUrl",
						"title": "Dev Bridge Url",
						"type": "`$STRING`",
						"short": "Development bridge URL (set by npx novu dev)",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exceedsPlanLimit",
						"title": "Exceeds Plan Limit",
						"type": "`$BOOLEAN`",
						"short": "Cloud only.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "integrations",
						"title": "Integrations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "managedRuntime",
						"title": "Managed Runtime",
						"type": "`$ANY`",
						"short": "Present when runtime is \"managed\".",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "runtime",
						"title": "Runtime",
						"type": "`$STRING`",
						"short": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
						"short": "Discovery scope of the agent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "agent_response_dto",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/agents/{identifier}/bridge",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "identifier",
									},
									map[string]any{
										"lit": "bridge",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{identifier}",
									"bridge",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "identifier",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.agent",
						},
					},
				},
			},
			"bulk": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "subscribers",
						"title": "Subscribers",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of subscribers to be created in bulk.",
					},
				},
				"name": "bulk",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/subscribers/bulk",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"lit": "bulk",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"bulk",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"channel_connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth",
						"title": "Auth",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "The channel type (email, sms, push, chat, etc.).",
					},
					map[string]any{
						"name": "connectionMode",
						"title": "Connection Mode",
						"type": "`$STRING`",
						"short": "Connection mode that determines how the channel connection is scoped.",
					},
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The context of the channel connection",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The unique identifier of the channel endpoint.",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the integration to use for this channel endpoint.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.).",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The subscriber ID to which the channel connection is linked",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.",
					},
					map[string]any{
						"name": "workspace",
						"title": "Workspace",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "channel_connection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/channel-connections",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-connections",
									},
								},
								"parts": []any{
									"v1",
									"channel-connections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/channel-connections/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-connections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/channel-connections/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-connections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/channel-connections/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-connections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"channel_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "The channel type (email, sms, push, chat, etc.).",
					},
					map[string]any{
						"name": "connectionIdentifier",
						"title": "Connection Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the channel connection used for this endpoint.",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The context of the channel connection",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$ANY`",
						"req": true,
						"short": "Endpoint data specific to the channel type",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the channel endpoint.",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the integration to use for this channel endpoint.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.).",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The subscriber ID to which the channel endpoint is linked",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of channel endpoint",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "channel_endpoint",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/channel-endpoints",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
								},
								"parts": []any{
									"v1",
									"channel-endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/channel-endpoints/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/channel-endpoints/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/channel-endpoints/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"channel-endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"configure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "botUsername",
						"title": "Bot Username",
						"type": "`$STRING`",
						"req": true,
						"short": "Resolved bot username from getMe",
					},
					map[string]any{
						"name": "configuredAt",
						"title": "Configured At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO-8601 timestamp the webhook was configured at",
					},
					map[string]any{
						"name": "webhookUrl",
						"title": "Webhook Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL Novu registered with Telegram for incoming updates",
					},
				},
				"name": "configure",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/{integrationIdentifier}/webhook/configure",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "integration_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "configure",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{integration_id}",
									"webhook",
									"configure",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationIdentifier": "integration_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "integration_id",
											"orig": "integration_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"integration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"context": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Optional bridge URL override for agent connect.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Optional custom data to associate with this context.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for this context.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Context type (e.g., tenant, app, workspace).",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"id": "id",
						"type": "type",
					},
					"name": "id",
					"parts": []any{
						"type",
						"id",
					},
					"sep": "/",
				},
				"name": "context",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/contexts",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "contexts",
									},
								},
								"parts": []any{
									"v2",
									"contexts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/contexts/{type}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "contexts",
									},
									map[string]any{
										"var": "type",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"contexts",
									"{type}",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"type",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/contexts/{type}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "contexts",
									},
									map[string]any{
										"var": "type",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"contexts",
									"{type}",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"type",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/contexts/{type}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "contexts",
									},
									map[string]any{
										"var": "type",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"contexts",
									"{type}",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_subscriptions_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the topic",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ARRAY`",
						"short": "The preferences of the topic.",
					},
					map[string]any{
						"name": "subscriberIds",
						"title": "Subscriber Ids",
						"type": "`$ARRAY`",
						"short": "List of subscriber IDs to subscribe to the topic (max: 100).",
						"deprecated": true,
					},
					map[string]any{
						"name": "subscriptions",
						"title": "Subscriptions",
						"type": "`$ARRAY`",
						"short": "List of subscriptions to subscribe to the topic (max: 100).",
					},
				},
				"name": "create_subscriptions_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/topics/{topicKey}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_key",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{topic_key}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "topic_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "topic_key",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"topic_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.topic",
						},
					},
				},
			},
			"diff": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Diff resources by resource type",
					},
					map[string]any{
						"name": "sourceEnvironmentId",
						"title": "Source Environment Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Source environment ID",
					},
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$ANY`",
						"req": true,
						"short": "Overall summary",
					},
					map[string]any{
						"name": "targetEnvironmentId",
						"title": "Target Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Target environment ID",
					},
				},
				"name": "diff",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/environments/{targetEnvironmentId}/diff",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "environments",
									},
									map[string]any{
										"var": "environment_id",
									},
									map[string]any{
										"lit": "diff",
									},
								},
								"parts": []any{
									"v2",
									"environments",
									"{environment_id}",
									"diff",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"targetEnvironmentId": "environment_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "environment_id",
											"orig": "target_environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "6615943e7ace93b0540ae377",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"environment_id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.environment",
						},
					},
				},
			},
			"domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "String key-value metadata (max 10 keys, 500 characters total when set via API).",
					},
					map[string]any{
						"name": "dnsProvider",
						"title": "Dns Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expectedDnsRecords",
						"title": "Expected Dns Records",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mxRecordConfigured",
						"title": "Mx Record Configured",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The domain name (e.g.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "domain",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains/{domain}/diagnose",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "diagnose",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
									"diagnose",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "diagnose",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"v1",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/domains/{domain}/routes/{address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "address",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
									"routes",
									"{address}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"address",
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/domains/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/domains/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_connect_apply_url_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "redirectUri",
						"title": "Redirect Uri",
						"type": "`$STRING`",
						"short": "Dashboard URL to return to after the DNS provider consent flow completes.",
					},
				},
				"name": "domain_connect_apply_url_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains/{domain}/auto-configure/start",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "auto-configure",
									},
									map[string]any{
										"lit": "start",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_id}",
									"auto-configure",
									"start",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "domain_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "domain_id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain_id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.domain",
						},
					},
				},
			},
			"domain_connect_status_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "domain_connect_status_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains/{domain}/auto-configure",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "auto-configure",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
									"auto-configure",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.manualRecords`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "auto-configure",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "String key-value metadata (max 10 keys, 500 characters total when set via API).",
					},
					map[string]any{
						"name": "dnsProvider",
						"title": "Dns Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expectedDnsRecords",
						"title": "Expected Dns Records",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mxRecordConfigured",
						"title": "Mx Record Configured",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "domain_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains/{domain}/verify",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "verify",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
									"verify",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "verify",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_route_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"short": "Agent identifier; required when type is agent, ignored when type is webhook.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Replaces route metadata when provided (max 10 keys, 500 characters total for keys+values).",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "domain_route_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains/{domain}/routes/{address}/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "address",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_id}",
									"routes",
									"{address}",
									"test",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "domain_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "domain_id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "test",
									"exist": []any{
										"address",
										"domain_id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/domains/{domain}/routes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{id}",
									"routes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "routes",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains/{domain}/routes/{address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "address",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_id}",
									"routes",
									"{address}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "domain_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "domain_id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"address",
										"domain_id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/domains/{domain}/routes/{address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "address",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_id}",
									"routes",
									"{address}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "domain_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "domain_id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"address",
										"domain_id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.domain",
						},
					},
				},
			},
			"environment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKeys",
						"title": "Api Keys",
						"type": "`$ARRAY`",
						"short": "List of API keys associated with the environment",
					},
					map[string]any{
						"name": "bridge",
						"title": "Bridge",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "color",
						"title": "Color",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Hex color code for the environment",
					},
					map[string]any{
						"name": "dns",
						"title": "Dns",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the environment",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Unique identifier for the environment",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name of the environment to be created",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization ID associated with the environment",
					},
					map[string]any{
						"name": "parentId",
						"title": "Parent Id",
						"type": "`$STRING`",
						"short": "MongoDB ObjectId of the parent environment (optional)",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"short": "URL-friendly slug for the environment",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of the environment",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "environment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/environments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environments",
									},
								},
								"parts": []any{
									"v1",
									"environments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/environments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environments",
									},
								},
								"parts": []any{
									"v1",
									"environments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/environments/{environmentId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"environments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"environmentId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/environments/{environmentId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"environments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"environmentId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"environment_tags_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "environment_tags_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/environments/{environmentId}/tags",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "environments",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"parts": []any{
									"v2",
									"environments",
									"{id}",
									"tags",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"environmentId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "6615943e7ace93b0540ae377",
										},
									},
								},
								"select": map[string]any{
									"$action": "tags",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"environment_variable": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "isSecret",
						"title": "Is Secret",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether this variable is a secret (encrypted at rest, masked in responses)",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Unique key for the variable.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The type of the variable",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "values",
						"title": "Values",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "environment_variable",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/environment-variables",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/environment-variables",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/environment-variables/{variableKey}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"variableKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "variable_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "BASE_URL",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/environment-variables/{variableKey}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"variableKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "variable_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "BASE_URL",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/environment-variables/{variableKey}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"variableKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "variable_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "BASE_URL",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"environment_variable_workflow_info_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the workflow",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the workflow",
					},
				},
				"name": "environment_variable_workflow_info_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/environment-variables/{variableKey}/usage",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "environment-variables",
									},
									map[string]any{
										"var": "variable_key",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"v1",
									"environment-variables",
									"{variable_key}",
									"usage",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"variableKey": "variable_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.workflows`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "variable_key",
											"orig": "variable_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "BASE_URL",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"variable_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.environment_variable",
						},
					},
				},
			},
			"event": map[string]any{
				"fields": []any{},
				"name": "event",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/events/trigger/{transactionId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "trigger",
									},
									map[string]any{
										"var": "transaction_id",
									},
								},
								"parts": []any{
									"v1",
									"events",
									"trigger",
									"{transaction_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"transactionId": "transaction_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "transaction_id",
											"orig": "transaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"transaction_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.trigger",
						},
					},
				},
			},
			"generate_chat_o_auth_url_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "autoLinkUser",
						"title": "Auto Link User",
						"type": "`$BOOLEAN`",
						"short": "When true (default when connectionMode is \"subscriber\"), after the workspace/tenant connection is created the OAuth flow also links the subscriber who clicked \"Connect\" as a personal endpoint.",
					},
					map[string]any{
						"name": "connectionIdentifier",
						"title": "Connection Identifier",
						"type": "`$STRING`",
						"short": "Identifier of the channel connection that will be created.",
					},
					map[string]any{
						"name": "connectionMode",
						"title": "Connection Mode",
						"type": "`$STRING`",
						"short": "Connection mode that determines how the channel connection is scoped.",
					},
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contextHash",
						"title": "Context Hash",
						"type": "`$STRING`",
						"short": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme).",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Integration identifier",
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"short": "OAuth flow mode.",
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$ARRAY`",
						"short": "**Slack only**: OAuth scopes to request during authorization.",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The subscriber ID to associate with the channel connection.",
					},
					map[string]any{
						"name": "userScope",
						"title": "User Scope",
						"type": "`$ARRAY`",
						"short": "**Slack only**: User-level OAuth scopes for \"Sign in with Slack\".",
					},
				},
				"name": "generate_chat_o_auth_url_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/channel-connections/oauth",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "channel-connections",
									},
									map[string]any{
										"lit": "oauth",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"channel-connections",
									"oauth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/channel-endpoints/oauth",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
									map[string]any{
										"lit": "oauth",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"channel-endpoints",
									"oauth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/chat/oauth",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "oauth",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"chat",
									"oauth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_preview_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "controlValues",
						"title": "Control Values",
						"type": "`$OBJECT`",
						"short": "Optional control values",
					},
					map[string]any{
						"name": "previewPayload",
						"title": "Preview Payload",
						"type": "`$ANY`",
						"short": "Optional payload for preview generation",
					},
				},
				"name": "generate_preview_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/workflows/{workflowId}/step/{stepId}/preview",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "workflow_id",
									},
									map[string]any{
										"lit": "step",
									},
									map[string]any{
										"var": "step_id",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{workflow_id}",
									"step",
									"{step_id}",
									"preview",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"stepId": "step_id",
										"workflowId": "workflow_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "step_id",
											"orig": "step_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "workflow_id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"step_id",
										"workflow_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workflow",
							"$.main.kit.entity.step",
						},
					},
				},
			},
			"import_master_json_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "failed",
						"title": "Failed",
						"type": "`$ARRAY`",
						"short": "List of resource IDs that failed to import",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"req": true,
						"short": "The locale for which translations are being imported",
					},
					map[string]any{
						"name": "masterJson",
						"title": "Master Json",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Master JSON object containing all translations organized by workflow identifier",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable message describing the import result",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Overall success status of the import operation",
					},
					map[string]any{
						"name": "successful",
						"title": "Successful",
						"type": "`$ARRAY`",
						"short": "List of resource IDs that were successfully imported",
					},
				},
				"name": "import_master_json_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/translations/master-json",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"lit": "master-json",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"master-json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/translations/master-json/upload",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"lit": "master-json",
									},
									map[string]any{
										"lit": "upload",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"master-json",
									"upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"inbox_notification_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "ISO timestamp when the notification was archived",
					},
					map[string]any{
						"name": "avatar",
						"title": "Avatar",
						"type": "`$STRING`",
						"short": "Avatar URL for the notification",
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
						"short": "Body content of the notification",
					},
					map[string]any{
						"name": "channelType",
						"title": "Channel Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Channel the message was sent on",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO timestamp when the notification was created",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Custom data payload of the notification",
					},
					map[string]any{
						"name": "deliveredAt",
						"title": "Delivered At",
						"type": "`$ARRAY`",
						"short": "Timestamps when the notification was delivered",
					},
					map[string]any{
						"name": "firstSeenAt",
						"title": "First Seen At",
						"type": "`$STRING`",
						"short": "ISO timestamp when the notification was first seen",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the notification",
					},
					map[string]any{
						"name": "isArchived",
						"title": "Is Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the notification has been archived",
					},
					map[string]any{
						"name": "isRead",
						"title": "Is Read",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the notification has been read",
					},
					map[string]any{
						"name": "isSeen",
						"title": "Is Seen",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the notification has been seen",
					},
					map[string]any{
						"name": "isSnoozed",
						"title": "Is Snoozed",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the notification is snoozed",
					},
					map[string]any{
						"name": "primaryAction",
						"title": "Primary Action",
						"type": "`$ANY`",
						"short": "Primary action button for the notification",
					},
					map[string]any{
						"name": "readAt",
						"title": "Read At",
						"type": "`$STRING`",
						"short": "ISO timestamp when the notification was read",
					},
					map[string]any{
						"name": "redirect",
						"title": "Redirect",
						"type": "`$ANY`",
						"short": "Redirect configuration for the notification",
					},
					map[string]any{
						"name": "secondaryAction",
						"title": "Secondary Action",
						"type": "`$ANY`",
						"short": "Secondary action button for the notification",
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow severity",
					},
					map[string]any{
						"name": "snoozeUntil",
						"title": "Snooze Until",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time until which the notification should be snoozed",
						"format": "date-time",
					},
					map[string]any{
						"name": "snoozedUntil",
						"title": "Snoozed Until",
						"type": "`$STRING`",
						"short": "ISO timestamp when the notification will be unsnoozed",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"short": "Subject of the notification",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the notification",
					},
					map[string]any{
						"name": "to",
						"title": "To",
						"type": "`$ANY`",
						"req": true,
						"short": "Subscriber this notification was sent to",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Transaction identifier of the notification",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$ANY`",
						"short": "Workflow associated with the notification",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "inbox_notification_dto",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/complete",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_type",
									},
									map[string]any{
										"lit": "complete",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"actions",
									"{action_type}",
									"complete",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"actionType": "action_type",
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "action_type",
											"orig": "action_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_type",
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/actions/{actionType}/revert",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_type",
									},
									map[string]any{
										"lit": "revert",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"actions",
									"{action_type}",
									"revert",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"actionType": "action_type",
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "action_type",
											"orig": "action_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_type",
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/archive",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"archive",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/read",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"read",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/snooze",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "snooze",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"snooze",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unarchive",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "unarchive",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"unarchive",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unread",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "unread",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"unread",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}/unsnooze",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "unsnooze",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"{notification_id}",
									"unsnooze",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"idempotency_key",
										"notification_id",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "If the integration is active, the validation on the credentials field will run",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"short": "The channel type for the integration.",
					},
					map[string]any{
						"name": "check",
						"title": "Check",
						"type": "`$BOOLEAN`",
						"short": "Flag to check the integration status",
					},
					map[string]any{
						"name": "conditions",
						"title": "Conditions",
						"type": "`$ARRAY`",
						"short": "Legacy StepFilter conditions.",
						"deprecated": true,
					},
					map[string]any{
						"name": "configurations",
						"title": "Configurations",
						"type": "`$OBJECT`",
						"short": "Configurations for the integration",
					},
					map[string]any{
						"name": "credentials",
						"title": "Credentials",
						"type": "`$ANY`",
						"short": "The credentials for the integration",
					},
					map[string]any{
						"name": "deleted",
						"title": "Deleted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the integration has been marked as deleted (soft delete).",
					},
					map[string]any{
						"name": "deletedAt",
						"title": "Deleted At",
						"type": "`$STRING`",
						"short": "The timestamp indicating when the integration was deleted.",
					},
					map[string]any{
						"name": "deletedBy",
						"title": "Deleted By",
						"type": "`$STRING`",
						"short": "The identifier of the user who performed the deletion of this integration.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The ID of the associated environment",
						"format": "uuid",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the integration record in the database.",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The unique identifier for the integration",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"short": "Distinguishes delivery integrations from agent-runtime integrations.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the integration",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the organization that owns this integration.",
					},
					map[string]any{
						"name": "primary",
						"title": "Primary",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether this integration is marked as primary.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The provider ID for the integration",
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$OBJECT`",
						"short": "JSONLogic used at send time to select this integration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "integration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/{integrationId}/auto-configure",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "auto-configure",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{id}",
									"auto-configure",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.integration`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "auto_configure",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/{integrationIdentifier}/mobile-link",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "integration_identifier",
									},
									map[string]any{
										"lit": "mobile-link",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{integration_identifier}",
									"mobile-link",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationIdentifier": "integration_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "integration_identifier",
											"orig": "integration_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "mobile_link",
									"exist": []any{
										"idempotency_key",
										"integration_identifier",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/integrations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/integrations/{integrationId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/integrations/{integrationId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"integration_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the integration is currently active.",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"short": "The channel type for the integration, which defines how it communicates (e.g., email, SMS).",
					},
					map[string]any{
						"name": "conditions",
						"title": "Conditions",
						"type": "`$ARRAY`",
						"short": "Legacy StepFilter conditions.",
						"deprecated": true,
					},
					map[string]any{
						"name": "configurations",
						"title": "Configurations",
						"type": "`$ANY`",
						"short": "The configurations required for enabling the additional configurations of the integration.",
					},
					map[string]any{
						"name": "credentials",
						"title": "Credentials",
						"type": "`$ANY`",
						"short": "The decrypted credentials required for the integration to function (e.g.",
					},
					map[string]any{
						"name": "deleted",
						"title": "Deleted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the integration has been marked as deleted (soft delete).",
					},
					map[string]any{
						"name": "deletedAt",
						"title": "Deleted At",
						"type": "`$STRING`",
						"short": "The timestamp indicating when the integration was deleted.",
					},
					map[string]any{
						"name": "deletedBy",
						"title": "Deleted By",
						"type": "`$STRING`",
						"short": "The identifier of the user who performed the deletion of this integration.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the environment associated with this integration.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the integration record in the database.",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique string identifier for the integration, often used for API calls or internal references.",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"short": "Distinguishes delivery integrations from agent-runtime integrations.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the integration, which is used to identify it in the user interface.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the organization that owns this integration.",
					},
					map[string]any{
						"name": "primary",
						"title": "Primary",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether this integration is marked as primary.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier for the provider of the integration (e.g., \"mailgun\", \"twilio\").",
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$OBJECT`",
						"short": "JSONLogic used at send time to select this integration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "integration_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/{integrationId}/set-primary",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "set-primary",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"{id}",
									"set-primary",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integrationId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "set-primary",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/integrations/active",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "active",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"active",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"layout": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "controlValues",
						"title": "Control Values",
						"type": "`$ANY`",
						"short": "Control values for the layout.",
					},
					map[string]any{
						"name": "controls",
						"title": "Controls",
						"type": "`$ANY`",
						"req": true,
						"short": "Controls metadata for the layout",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation timestamp",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique internal identifier of the layout",
					},
					map[string]any{
						"name": "isDefault",
						"title": "Is Default",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the layout is the default layout",
					},
					map[string]any{
						"name": "isTranslationEnabled",
						"title": "Is Translation Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the layout translations are enabled",
					},
					map[string]any{
						"name": "layoutId",
						"title": "Layout Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the layout",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the layout",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow origin",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Slug of the layout",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"short": "Source of layout creation",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Resource type",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Last updated timestamp",
					},
					map[string]any{
						"name": "updatedBy",
						"title": "Updated By",
						"type": "`$ANY`",
						"short": "User who last updated the layout",
					},
					map[string]any{
						"name": "variables",
						"title": "Variables",
						"type": "`$OBJECT`",
						"short": "The variables JSON Schema for the layout",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "layout",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/layouts/{layoutId}/preview",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{id}",
									"preview",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "preview",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/layouts",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/layouts",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.layouts`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"limit",
										"offset",
										"order_by",
										"order_direction",
										"query",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/layouts/{layoutId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/layouts/{layoutId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v2/layouts/{layoutId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"layout_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "layout_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/layouts/{layoutId}/duplicate",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "duplicate",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{id}",
									"duplicate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "duplicate",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"link": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contextHash",
						"title": "Context Hash",
						"type": "`$STRING`",
						"short": "HMAC-SHA256 of the canonicalized `context`, signed with the tenant environment secret key (the same \"Inbox with context\" signing scheme).",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Integration identifier for the chat provider integration",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "External subscriber identifier to link to their chat identity",
					},
				},
				"name": "link",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/integrations/channel-endpoints/link",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
									map[string]any{
										"lit": "link",
									},
								},
								"parts": []any{
									"v1",
									"integrations",
									"channel-endpoints",
									"link",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.providerMetadata`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_agent_integrations_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connectedAt",
						"title": "Connected At",
						"type": "`$OBJECT`",
						"short": "Set when the agent–integration link received its first inbound webhook delivery.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exceedsPlanLimit",
						"title": "Exceeds Plan Limit",
						"type": "`$BOOLEAN`",
						"short": "Cloud only.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Agent–integration link document id.",
					},
					map[string]any{
						"name": "integration",
						"title": "Integration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_agent_integrations_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents/{identifier}/integrations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "identifier",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"v1",
									"agents",
									"{identifier}",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "identifier",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_identifier",
											"orig": "integration_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"idempotency_key",
										"identifier",
										"include_cursor",
										"integration_identifier",
										"limit",
										"order_by",
										"order_direction",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.agent",
						},
					},
				},
			},
			"list_agents_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "behavior",
						"title": "Behavior",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Production bridge URL",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdBy",
						"title": "Created By",
						"type": "`$STRING`",
						"short": "Mongo user id of the user who created the agent",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "devBridgeActive",
						"title": "Dev Bridge Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the dev bridge override is active",
					},
					map[string]any{
						"name": "devBridgeUrl",
						"title": "Dev Bridge Url",
						"type": "`$STRING`",
						"short": "Development bridge URL (set by npx novu dev)",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exceedsPlanLimit",
						"title": "Exceeds Plan Limit",
						"type": "`$BOOLEAN`",
						"short": "Cloud only.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "integrations",
						"title": "Integrations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "managedRuntime",
						"title": "Managed Runtime",
						"type": "`$ANY`",
						"short": "Present when runtime is \"managed\".",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "runtime",
						"title": "Runtime",
						"type": "`$STRING`",
						"short": "Whether the agent brain is self-hosted (bridge) or managed by a third-party provider",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
						"short": "Discovery scope of the agent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_agents_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"parts": []any{
									"v1",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "identifier",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"idempotency_key",
										"identifier",
										"include_cursor",
										"limit",
										"order_by",
										"order_direction",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_channel_connections_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth",
						"title": "Auth",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "The channel type (email, sms, push, chat, etc.).",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The context of the channel connection",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the channel endpoint.",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the integration to use for this channel endpoint.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.).",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The subscriber ID to which the channel connection is linked",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.",
					},
					map[string]any{
						"name": "workspace",
						"title": "Workspace",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "list_channel_connections_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/channel-connections",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-connections",
									},
								},
								"parts": []any{
									"v1",
									"channel-connections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "query",
											"example": "chat",
										},
										map[string]any{
											"name": "connection_mode",
											"orig": "connection_mode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "shared",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:org-123",
												"region:us-east-1",
											},
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_identifier",
											"orig": "integration_identifier",
											"type": "`$STRING`",
											"kind": "query",
											"example": "slack-prod",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "provider_id",
											"orig": "provider_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "slack",
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "subscriber-123",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_channel_endpoints_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "The channel type (email, sms, push, chat, etc.).",
					},
					map[string]any{
						"name": "connectionIdentifier",
						"title": "Connection Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the channel connection used for this endpoint.",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The context of the channel connection",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$ANY`",
						"req": true,
						"short": "Endpoint data specific to the channel type",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the channel endpoint.",
					},
					map[string]any{
						"name": "integrationIdentifier",
						"title": "Integration Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the integration to use for this channel endpoint.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider identifier (e.g., sendgrid, twilio, slack, etc.).",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The subscriber ID to which the channel endpoint is linked",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of channel endpoint",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the channel endpoint was last updated, in ISO 8601 format.",
					},
				},
				"name": "list_channel_endpoints_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/channel-endpoints",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "channel-endpoints",
									},
								},
								"parts": []any{
									"v1",
									"channel-endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "connection_identifier",
											"orig": "connection_identifier",
											"type": "`$STRING`",
											"kind": "query",
											"example": "slack-connection-abc123",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:org-123",
												"region:us-east-1",
											},
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "integration_identifier",
											"orig": "integration_identifier",
											"type": "`$STRING`",
											"kind": "query",
											"example": "slack-prod",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "provider_id",
											"orig": "provider_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "slack",
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "subscriber-123",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_contexts_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Bridge URL override for agent connect, if configured on this context",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation timestamp",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Custom data associated with this context",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for this context",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Context type (e.g., tenant, app, workspace)",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Last update timestamp",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_contexts_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/contexts",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "contexts",
									},
								},
								"parts": []any{
									"v2",
									"contexts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tenant-prod-123",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tenant",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"id",
										"idempotency_key",
										"include_cursor",
										"limit",
										"order_by",
										"order_direction",
										"search",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_domain_routes_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"short": "Internal id of the destination agent.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "String key-value metadata (max 10 keys, 500 characters total when set via API).",
					},
					map[string]any{
						"name": "domainId",
						"title": "Domain Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_domain_routes_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains/{domain}/routes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_id}",
									"routes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "domain_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "domain_id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"agent_id",
										"before",
										"domain_id",
										"idempotency_key",
										"include_cursor",
										"limit",
										"order_by",
										"order_direction",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.domain",
						},
					},
				},
			},
			"list_domains_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "String key-value metadata (max 10 keys, 500 characters total when set via API).",
					},
					map[string]any{
						"name": "dnsProvider",
						"title": "Dns Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expectedDnsRecords",
						"title": "Expected Dns Records",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mxRecordConfigured",
						"title": "Mx Record Configured",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_domains_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"v1",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"idempotency_key",
										"include_cursor",
										"limit",
										"name",
										"order_by",
										"order_direction",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_subscribers_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avatar",
						"title": "Avatar",
						"type": "`$STRING`",
						"short": "The URL of the subscriber's avatar image.",
					},
					map[string]any{
						"name": "channels",
						"title": "Channels",
						"type": "`$ARRAY`",
						"short": "An array of channel settings associated with the subscriber.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Additional custom data for the subscriber",
					},
					map[string]any{
						"name": "deleted",
						"title": "Deleted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the subscriber has been deleted.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "The email address of the subscriber.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the environment associated with this subscriber.",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the subscriber.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The internal ID generated by Novu for your subscriber.",
					},
					map[string]any{
						"name": "isOnline",
						"title": "Is Online",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the subscriber is currently online.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the subscriber.",
					},
					map[string]any{
						"name": "lastOnlineAt",
						"title": "Last Online At",
						"type": "`$STRING`",
						"short": "The timestamp indicating when the subscriber was last online, in ISO 8601 format.",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale setting of the subscriber, indicating their preferred language or region.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the organization to which the subscriber belongs.",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"short": "The phone number of the subscriber.",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier used to create this subscriber, which typically corresponds to the user ID in your system.",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone of the subscriber",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$ARRAY`",
						"short": "An array of topics that the subscriber is subscribed to.",
						"deprecated": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was last updated, in ISO 8601 format.",
					},
					map[string]any{
						"name": "v",
						"title": "V",
						"type": "`$NUMBER`",
						"short": "The version of the subscriber document.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_subscribers_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "phone",
											"orig": "phone",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_topic_subscriptions_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"short": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time the subscription was created",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the subscription",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the subscription",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ARRAY`",
						"short": "The preferences for workflows in this subscription",
					},
					map[string]any{
						"name": "subscriber",
						"title": "Subscriber",
						"type": "`$ANY`",
						"req": true,
						"short": "Subscriber information",
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$ANY`",
						"req": true,
						"short": "Topic information",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_topic_subscriptions_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers/{subscriberId}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:org-123",
												"region:us-east-1",
											},
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"context_key",
										"idempotency_key",
										"include_cursor",
										"key",
										"limit",
										"order_by",
										"order_direction",
										"subscriber_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/topics/{topicKey}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_key",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{topic_key}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "topic_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "topic_key",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:org-123",
												"region:us-east-1",
											},
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"context_key",
										"idempotency_key",
										"include_cursor",
										"limit",
										"order_by",
										"order_direction",
										"subscriber_id",
										"topic_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
						[]any{
							"$.main.kit.entity.topic",
						},
					},
				},
			},
			"list_topics_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date the topic was created",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Additional custom data associated with the topic",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the topic",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique key of the topic",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the topic",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date the topic was last updated",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_topics_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/topics",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
								},
								"parts": []any{
									"v2",
									"topics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_cursor",
											"orig": "include_cursor",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"idempotency_key",
										"include_cursor",
										"key",
										"limit",
										"name",
										"order_by",
										"order_direction",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"master_json": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "layouts",
						"title": "Layouts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "All translations for given locale organized by layout identifier",
					},
					map[string]any{
						"name": "workflows",
						"title": "Workflows",
						"type": "`$OBJECT`",
						"req": true,
						"short": "All translations for given locale organized by workflow identifier",
					},
				},
				"name": "master_json",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/translations/master-json",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"lit": "master-json",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"master-json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en_US",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"locale",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "Channel the message was sent on",
					},
					map[string]any{
						"name": "content",
						"title": "Content",
						"type": "`$ANY`",
						"short": "Content of the message, can be an email block or a string",
					},
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"short": "Context (single or multi) in which the message was sent",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation date of the message",
					},
					map[string]any{
						"name": "cta",
						"title": "Cta",
						"type": "`$ANY`",
						"req": true,
						"short": "Call to action associated with the message",
					},
					map[string]any{
						"name": "deliveredAt",
						"title": "Delivered At",
						"type": "`$ARRAY`",
						"short": "Array of delivery dates for the message, if the message has multiple delivery dates, for example after being snoozed",
					},
					map[string]any{
						"name": "deviceTokens",
						"title": "Device Tokens",
						"type": "`$ARRAY`",
						"short": "Device tokens associated with the message, if applicable",
					},
					map[string]any{
						"name": "directWebhookUrl",
						"title": "Direct Webhook Url",
						"type": "`$STRING`",
						"short": "Direct webhook URL for the message, if applicable",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "Email address associated with the message, if applicable",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Environment ID where the message is sent",
					},
					map[string]any{
						"name": "errorId",
						"title": "Error Id",
						"type": "`$STRING`",
						"short": "Error ID if the message has an error",
					},
					map[string]any{
						"name": "errorText",
						"title": "Error Text",
						"type": "`$STRING`",
						"short": "Error text if the message has an error",
					},
					map[string]any{
						"name": "feedId",
						"title": "Feed Id",
						"type": "`$STRING`",
						"short": "Feed ID associated with the message, if applicable",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the message",
					},
					map[string]any{
						"name": "lastReadDate",
						"title": "Last Read Date",
						"type": "`$STRING`",
						"short": "Last read date of the message, if available",
					},
					map[string]any{
						"name": "lastSeenDate",
						"title": "Last Seen Date",
						"type": "`$STRING`",
						"short": "Last seen date of the message, if available",
					},
					map[string]any{
						"name": "messageTemplateId",
						"title": "Message Template Id",
						"type": "`$STRING`",
						"short": "Message template ID",
					},
					map[string]any{
						"name": "notificationId",
						"title": "Notification Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Notification ID associated with the message",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization ID associated with the message",
					},
					map[string]any{
						"name": "overrides",
						"title": "Overrides",
						"type": "`$OBJECT`",
						"short": "Provider specific overrides used when triggering the notification",
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"short": "The payload that was used to send the notification trigger",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"short": "Phone number associated with the message, if applicable",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"short": "Provider ID associated with the message, if applicable",
					},
					map[string]any{
						"name": "read",
						"title": "Read",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates if the message has been read",
					},
					map[string]any{
						"name": "seen",
						"title": "Seen",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates if the message has been seen",
					},
					map[string]any{
						"name": "snoozedUntil",
						"title": "Snoozed Until",
						"type": "`$STRING`",
						"short": "Date when the message will be unsnoozed",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Status of the message",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"short": "Subject of the message, if applicable",
					},
					map[string]any{
						"name": "subscriber",
						"title": "Subscriber",
						"type": "`$ANY`",
						"short": "Subscriber details, if available",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Subscriber ID associated with the message",
					},
					map[string]any{
						"name": "template",
						"title": "Template",
						"type": "`$ANY`",
						"short": "Workflow template associated with the message",
					},
					map[string]any{
						"name": "templateId",
						"title": "Template Id",
						"type": "`$STRING`",
						"short": "Template ID associated with the message",
					},
					map[string]any{
						"name": "templateIdentifier",
						"title": "Template Identifier",
						"type": "`$STRING`",
						"short": "Identifier for the message template",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title of the message, if applicable",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Transaction ID associated with the message",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "message",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/messages",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"parts": []any{
									"v1",
									"messages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:org-123",
												"region:us-east-1",
											},
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "transaction_id",
											"orig": "transaction_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"context_key",
										"idempotency_key",
										"limit",
										"page",
										"subscriber_id",
										"transaction_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/messages/transaction/{transactionId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "transaction",
									},
									map[string]any{
										"var": "transaction_id",
									},
								},
								"parts": []any{
									"v1",
									"messages",
									"transaction",
									"{transaction_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"transactionId": "transaction_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "transaction_id",
											"orig": "transaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "507f1f77bcf86cd799439011",
										},
									},
									"query": []any{
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"idempotency_key",
										"transaction_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/messages/{messageId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"messages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "507f1f77bcf86cd799439011",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"message_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "markAs",
						"title": "Mark As",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "messageId",
						"title": "Message Id",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"short": "Message action payload",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Message action status",
					},
				},
				"name": "message_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "type",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{subscriber_id}",
									"messages",
									"{message_id}",
									"actions",
									"{type}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "message_id",
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"message_id",
										"subscriber_id",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/subscribers/{subscriberId}/messages/mark-as",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "mark-as",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{subscriber_id}",
									"messages",
									"mark-as",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
						[]any{
							"$.main.kit.entity.subscriber",
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"notification_feed_item_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"title": "Actor",
						"type": "`$ANY`",
						"short": "Actor details related to the notification, if applicable.",
					},
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the notification has been archived by the subscriber.",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"req": true,
						"short": "Channel the message was sent on",
					},
					map[string]any{
						"name": "content",
						"title": "Content",
						"type": "`$STRING`",
						"req": true,
						"short": "The main content of the notification.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "Timestamp indicating when the notification was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "cta",
						"title": "Cta",
						"type": "`$ANY`",
						"req": true,
						"short": "Call-to-action information associated with the notification.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "The data sent with the notification.",
					},
					map[string]any{
						"name": "deviceTokens",
						"title": "Device Tokens",
						"type": "`$ARRAY`",
						"short": "Device tokens for push notifications, if applicable.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the environment where the notification is sent.",
					},
					map[string]any{
						"name": "feedId",
						"title": "Feed Id",
						"type": "`$STRING`",
						"short": "Identifier for the feed associated with the notification.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the notification.",
					},
					map[string]any{
						"name": "jobId",
						"title": "Job Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the job that triggered the notification.",
					},
					map[string]any{
						"name": "messageTemplateId",
						"title": "Message Template Id",
						"type": "`$STRING`",
						"short": "Identifier for the message template used.",
					},
					map[string]any{
						"name": "notificationId",
						"title": "Notification Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the notification instance.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the organization sending the notification.",
					},
					map[string]any{
						"name": "overrides",
						"title": "Overrides",
						"type": "`$OBJECT`",
						"short": "Provider-specific overrides used when triggering the notification.",
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"short": "The payload that was used to send the notification trigger.",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
						"short": "Identifier for the provider that sends the notification.",
					},
					map[string]any{
						"name": "read",
						"title": "Read",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the notification has been read by the subscriber.",
					},
					map[string]any{
						"name": "seen",
						"title": "Seen",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the notification has been seen by the subscriber.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the notification.",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"short": "The subject line for email notifications, if applicable.",
					},
					map[string]any{
						"name": "subscriber",
						"title": "Subscriber",
						"type": "`$ANY`",
						"short": "Subscriber details associated with this notification.",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the subscriber receiving the notification.",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the workflow that triggered the notification.",
					},
					map[string]any{
						"name": "templateId",
						"title": "Template Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the template used to generate the notification.",
					},
					map[string]any{
						"name": "templateIdentifier",
						"title": "Template Identifier",
						"type": "`$STRING`",
						"short": "Identifier for the template used, if applicable.",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the transaction associated with the notification.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "Timestamp indicating when the notification was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "notification_feed_item_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/subscribers/{subscriberId}/notifications/feed",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "feed",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"feed",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "payload",
											"orig": "payload",
											"type": "`$STRING`",
											"kind": "query",
											"example": "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
										},
										map[string]any{
											"name": "read",
											"orig": "read",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen",
											"orig": "seen",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"limit",
										"page",
										"payload",
										"read",
										"seen",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"preferences_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of workflow preferences to update (maximum 100 items)",
					},
				},
				"name": "preferences_response_dto",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/preferences/bulk",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "preferences",
									},
									map[string]any{
										"lit": "bulk",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"preferences",
									"bulk",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"publish": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dryRun",
						"title": "Dry Run",
						"type": "`$BOOLEAN`",
						"short": "Perform a dry run without making actual changes",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
						"short": "Array of specific resources to publish.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Sync results by resource type",
					},
					map[string]any{
						"name": "sourceEnvironmentId",
						"title": "Source Environment Id",
						"type": "`$STRING`",
						"short": "Source environment ID to sync from.",
					},
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$ANY`",
						"req": true,
						"short": "Summary of the sync operation",
					},
				},
				"name": "publish",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/environments/{targetEnvironmentId}/publish",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "environments",
									},
									map[string]any{
										"var": "environment_id",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"parts": []any{
									"v2",
									"environments",
									"{environment_id}",
									"publish",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"targetEnvironmentId": "environment_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "environment_id",
											"orig": "target_environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "6615943e7ace93b0540ae377",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"environment_id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.environment",
						},
					},
				},
			},
			"remove_subscriber_response_dto": map[string]any{
				"fields": []any{},
				"name": "remove_subscriber_response_dto",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/subscribers/{subscriberId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"step": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "controlValues",
						"title": "Control Values",
						"type": "`$OBJECT`",
						"short": "Control values for the step (alias for controls.values)",
					},
					map[string]any{
						"name": "controls",
						"title": "Controls",
						"type": "`$ANY`",
						"req": true,
						"short": "Controls metadata for the step",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Database identifier of the step",
					},
					map[string]any{
						"name": "issues",
						"title": "Issues",
						"type": "`$ANY`",
						"short": "Issues associated with the step",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the step",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow origin",
					},
					map[string]any{
						"name": "providerOverrides",
						"title": "Provider Overrides",
						"type": "`$OBJECT`",
						"short": "Per-provider content overrides keyed by providerId.",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Slug of the step",
					},
					map[string]any{
						"name": "stepId",
						"title": "Step Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the step",
					},
					map[string]any{
						"name": "stepResolverHash",
						"title": "Step Resolver Hash",
						"type": "`$STRING`",
						"short": "Hash identifying the deployed Cloudflare Worker for this step",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of the step",
					},
					map[string]any{
						"name": "variables",
						"title": "Variables",
						"type": "`$OBJECT`",
						"req": true,
						"short": "JSON Schema for variables, follows the JSON Schema standard",
					},
					map[string]any{
						"name": "workflowDatabaseId",
						"title": "Workflow Database Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow database identifier",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow identifier",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "step",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/workflows/{workflowId}/steps/{stepId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "workflow_id",
									},
									map[string]any{
										"lit": "steps",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{workflow_id}",
									"steps",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"stepId": "id",
										"workflowId": "workflow_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "step_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "workflow_id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"workflow_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workflow",
						},
					},
				},
			},
			"subscriber": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avatar",
						"title": "Avatar",
						"type": "`$STRING`",
						"short": "The URL of the subscriber's avatar image.",
					},
					map[string]any{
						"name": "channels",
						"title": "Channels",
						"type": "`$ARRAY`",
						"short": "An array of channel settings associated with the subscriber.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Additional custom data for the subscriber",
					},
					map[string]any{
						"name": "deleted",
						"title": "Deleted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the subscriber has been deleted.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "The email address of the subscriber.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the environment associated with this subscriber.",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the subscriber.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The internal ID generated by Novu for your subscriber.",
					},
					map[string]any{
						"name": "isOnline",
						"title": "Is Online",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the subscriber is currently online.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the subscriber.",
					},
					map[string]any{
						"name": "lastOnlineAt",
						"title": "Last Online At",
						"type": "`$STRING`",
						"short": "The timestamp indicating when the subscriber was last online, in ISO 8601 format.",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale setting of the subscriber, indicating their preferred language or region.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the organization to which the subscriber belongs.",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"short": "The phone number of the subscriber.",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier used to create this subscriber, which typically corresponds to the user ID in your system.",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone of the subscriber",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$ARRAY`",
						"short": "An array of topics that the subscriber is subscribed to.",
						"deprecated": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was last updated, in ISO 8601 format.",
					},
					map[string]any{
						"name": "v",
						"title": "V",
						"type": "`$NUMBER`",
						"short": "The version of the subscriber document.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscriber",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "fail_if_exist",
											"orig": "fail_if_exist",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"fail_if_exist",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/subscribers/{subscriberId}/messages/mark-all",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "mark-all",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{id}",
									"messages",
									"mark-all",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "message_mark_all",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers/{subscriberId}/notifications/archive",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"archive",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "notification_archive",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers/{subscriberId}/notifications/delete",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"delete",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "notification_delete",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers/{subscriberId}/notifications/read",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"read",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "notification_read",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers/{subscriberId}/notifications/read-archive",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "read-archive",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"read-archive",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "notification_read_archive",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/subscribers/{subscriberId}/notifications/seen",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "seen",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"seen",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "notification_seen",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers/{subscriberId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/subscribers/{subscriberId}/notifications/{notificationId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
									"{notification_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"notificationId": "notification_id",
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"context_key",
										"id",
										"idempotency_key",
										"notification_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/subscribers/{subscriberId}/credentials/{providerId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "credentials",
									},
									map[string]any{
										"var": "provider_id",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{id}",
									"credentials",
									"{provider_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"providerId": "provider_id",
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "provider_id",
											"orig": "provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"provider_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriber_notifications_count_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The count of notifications matching the filter",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The filter applied",
					},
				},
				"name": "subscriber_notifications_count_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers/{subscriberId}/notifications/count",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "count",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"count",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "[{\"read\":false,\"archived\":false},{\"tags\":[\"important\"]},{\"tags\":{\"and\":[{\"or\":[\"a\",\"b\"]},{\"or\":[\"c\"]}]}}]",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"idempotency_key",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"subscriber_notifications_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscriber_notifications_response_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers/{subscriberId}/notifications",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notifications",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"notifications",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_gte",
											"orig": "created_gte",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1704067200000,
										},
										map[string]any{
											"name": "created_lte",
											"orig": "created_lte",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1735689599999,
										},
										map[string]any{
											"name": "data",
											"orig": "data",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "read",
											"orig": "read",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen",
											"orig": "seen",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "severity",
											"orig": "severity",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "snoozed",
											"orig": "snoozed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "notifications",
									"exist": []any{
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
										"snoozed",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriber_preferences_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscriber_preferences_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/subscribers/{subscriberId}/preferences",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "preferences",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"preferences",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "context_key",
											"orig": "context_key",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"tenant:acme",
											},
										},
										map[string]any{
											"name": "criticality",
											"orig": "criticality",
											"type": "`$STRING`",
											"kind": "query",
											"example": "nonCritical",
										},
									},
								},
								"select": map[string]any{
									"$action": "preferences",
									"exist": []any{
										"context_key",
										"criticality",
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/subscribers/{subscriberId}/preferences",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "preferences",
									},
								},
								"parts": []any{
									"v2",
									"subscribers",
									"{id}",
									"preferences",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "preferences",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscriber_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avatar",
						"title": "Avatar",
						"type": "`$STRING`",
						"short": "The URL of the subscriber's avatar image.",
					},
					map[string]any{
						"name": "channels",
						"title": "Channels",
						"type": "`$ARRAY`",
						"short": "An array of channel settings associated with the subscriber.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was created, in ISO 8601 format.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Additional custom data for the subscriber",
					},
					map[string]any{
						"name": "deleted",
						"title": "Deleted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the subscriber has been deleted.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "The email address of the subscriber.",
					},
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the environment associated with this subscriber.",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the subscriber.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The internal ID generated by Novu for your subscriber.",
					},
					map[string]any{
						"name": "isOnline",
						"title": "Is Online",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the subscriber is currently online.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the subscriber.",
					},
					map[string]any{
						"name": "lastOnlineAt",
						"title": "Last Online At",
						"type": "`$STRING`",
						"short": "The timestamp indicating when the subscriber was last online, in ISO 8601 format.",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale setting of the subscriber, indicating their preferred language or region.",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the organization to which the subscriber belongs.",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"short": "The phone number of the subscriber.",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier used to create this subscriber, which typically corresponds to the user ID in your system.",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone of the subscriber",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$ARRAY`",
						"short": "An array of topics that the subscriber is subscribed to.",
						"deprecated": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The timestamp indicating when the subscriber was last updated, in ISO 8601 format.",
					},
					map[string]any{
						"name": "v",
						"title": "V",
						"type": "`$NUMBER`",
						"short": "The version of the subscriber document.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscriber_response_dto",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/subscribers/{subscriberId}/credentials",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "credentials",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{id}",
									"credentials",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "credentials",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/subscribers/{subscriberId}/credentials",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "credentials",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{id}",
									"credentials",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "credentials",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/subscribers/{subscriberId}/online-status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "online-status",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{id}",
									"online-status",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "online-status",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contextKeys",
						"title": "Context Keys",
						"type": "`$ARRAY`",
						"short": "Context keys that scope this subscription (e.g., tenant:org-a, project:proj-123)",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The creation date of the subscription",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the subscription",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"short": "The identifier of the subscription",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the subscription",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ARRAY`",
						"short": "The preferences/rules for the subscription",
					},
					map[string]any{
						"name": "subscriber",
						"title": "Subscriber",
						"type": "`$ANY`",
						"req": true,
						"short": "The subscriber information",
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$ANY`",
						"req": true,
						"short": "The topic information",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The last update date of the subscription",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/topics/{topicKey}/subscriptions/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{topic_id}",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
										"topicKey": "topic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "topic_id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"topic_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/topics/{topicKey}/subscriptions/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{topic_id}",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
										"topicKey": "topic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "topic_id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"topic_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.topic",
						},
					},
				},
			},
			"topic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"short": "Additional custom data associated with the topic.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique key identifier for the topic.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The display name for the topic",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "topic",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/topics",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
								},
								"parts": []any{
									"v2",
									"topics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "fail_if_exist",
											"orig": "fail_if_exist",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"fail_if_exist",
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/topics/{topicKey}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/topics/{topicKey}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/topics/{topicKey}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"topic_subscriber_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "environmentId",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the environment",
					},
					map[string]any{
						"name": "externalSubscriberId",
						"title": "External Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "External identifier for the subscriber",
					},
					map[string]any{
						"name": "organizationId",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the organization",
					},
					map[string]any{
						"name": "subscriberId",
						"title": "Subscriber Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the subscriber",
					},
					map[string]any{
						"name": "topicId",
						"title": "Topic Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the topic",
					},
					map[string]any{
						"name": "topicKey",
						"title": "Topic Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Key associated with the topic",
					},
				},
				"name": "topic_subscriber_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/topics/{topicKey}/subscribers/{externalSubscriberId}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_id",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "external_subscriber_id",
									},
								},
								"parts": []any{
									"v1",
									"topics",
									"{topic_id}",
									"subscribers",
									"{external_subscriber_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"externalSubscriberId": "external_subscriber_id",
										"topicKey": "topic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "external_subscriber_id",
											"orig": "external_subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "topic_id",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_subscriber_id",
										"idempotency_key",
										"topic_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.topic",
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"topic_subscriptions_response_dto": map[string]any{
				"fields": []any{},
				"name": "topic_subscriptions_response_dto",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/topics/{topicKey}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "topics",
									},
									map[string]any{
										"var": "topic_key",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"v2",
									"topics",
									"{topic_key}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"topicKey": "topic_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "topic_key",
											"orig": "topic_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"topic_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.topic",
						},
					},
				},
			},
			"translation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content",
						"title": "Content",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Translation content as JSON object",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"req": true,
						"short": "Locale code (e.g., en_US, es_ES)",
					},
					map[string]any{
						"name": "resourceId",
						"title": "Resource Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The resource ID to associate translation with.",
					},
					map[string]any{
						"name": "resourceType",
						"title": "Resource Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The resource type to associate translation with",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"locale": "locale",
						"resource_id": "resourceId",
						"resource_type": "resourceType",
					},
					"name": "id",
					"parts": []any{
						"resource_type",
						"resource_id",
						"locale",
					},
					"sep": "/",
				},
				"name": "translation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/translations",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
								},
								"parts": []any{
									"v2",
									"translations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/translations/{resourceType}/{resourceId}/{locale}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"var": "locale",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"{resource_type}",
									"{resource_id}",
									"{locale}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceId": "resource_id",
										"resourceType": "resource_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "en_US",
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "welcome-email",
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"locale",
										"resource_id",
										"resource_type",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/translations/{resourceType}/{resourceId}/{locale}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"var": "locale",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"{resource_type}",
									"{resource_id}",
									"{locale}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceId": "resource_id",
										"resourceType": "resource_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"locale",
										"resource_id",
										"resource_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/translations/{resourceType}/{resourceId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"{resource_type}",
									"{resource_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceId": "resource_id",
										"resourceType": "resource_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "welcome-email",
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "workflow",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"resource_id",
										"resource_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"translation_group_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation timestamp",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locales",
						"title": "Locales",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of available locales for this resource",
					},
					map[string]any{
						"name": "outdatedLocales",
						"title": "Outdated Locales",
						"type": "`$ARRAY`",
						"short": "Locales that are outdated compared to the default locale (only present when there are outdated locales)",
					},
					map[string]any{
						"name": "resourceId",
						"title": "Resource Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Resource identifier (slugified ID)",
					},
					map[string]any{
						"name": "resourceName",
						"title": "Resource Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Resource name (e.g., workflow name)",
					},
					map[string]any{
						"name": "resourceType",
						"title": "Resource Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Resource type",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Last update timestamp",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"resource_id": "resourceId",
						"resource_type": "resourceType",
					},
					"name": "id",
					"parts": []any{
						"resource_type",
						"resource_id",
					},
					"sep": "/",
				},
				"name": "translation_group_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/translations/group/{resourceType}/{resourceId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"lit": "group",
									},
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"group",
									"{resource_type}",
									"{resource_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceId": "resource_id",
										"resourceType": "resource_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "welcome-email",
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "workflow",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"resource_id",
										"resource_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trigger": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"title": "Actor",
						"type": "`$ANY`",
						"short": "It is used to display the Avatar of the provided actor's subscriber id or actor object.",
					},
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"short": "Override the workflow-assigned agent for this trigger using the public agent identifier.",
					},
					map[string]any{
						"name": "bridgeUrl",
						"title": "Bridge Url",
						"type": "`$STRING`",
						"short": "Optional Bridge Endpoint URL used to route this trigger to a specific Bridge application.",
					},
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The trigger identifier of the workflow you wish to send.",
					},
					map[string]any{
						"name": "overrides",
						"title": "Overrides",
						"type": "`$ANY`",
						"short": "This could be used to override provider specific configurations",
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"short": "The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it.",
					},
					map[string]any{
						"name": "tenant",
						"title": "Tenant",
						"type": "`$ANY`",
						"short": "It is used to specify a tenant context during trigger event.",
					},
					map[string]any{
						"name": "to",
						"title": "To",
						"type": "`$ANY`",
						"req": true,
						"short": "The recipients list of people who will receive the notification.",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"short": "A unique identifier for deduplication.",
					},
				},
				"name": "trigger",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/events/trigger",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "trigger",
									},
								},
								"parts": []any{
									"v1",
									"events",
									"trigger",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trigger_event_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acknowledged",
						"title": "Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the trigger was acknowledged or not",
					},
					map[string]any{
						"name": "activityFeedLink",
						"title": "Activity Feed Link",
						"type": "`$STRING`",
						"short": "Link to the activity feed for this trigger event",
					},
					map[string]any{
						"name": "actor",
						"title": "Actor",
						"type": "`$ANY`",
						"short": "It is used to display the Avatar of the provided actor's subscriber id or actor object.",
					},
					map[string]any{
						"name": "agentId",
						"title": "Agent Id",
						"type": "`$STRING`",
						"short": "Override the workflow-assigned agent for this trigger using the public agent identifier.",
					},
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$ARRAY`",
						"short": "In case of an error, this field will contain the error message(s)",
					},
					map[string]any{
						"name": "events",
						"title": "Events",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "jobData",
						"title": "Job Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The trigger identifier associated for the template you wish to send.",
					},
					map[string]any{
						"name": "overrides",
						"title": "Overrides",
						"type": "`$ANY`",
						"short": "This could be used to override provider specific configurations",
					},
					map[string]any{
						"name": "payload",
						"title": "Payload",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The payload object is used to pass additional information that could be used to render the template, or perform routing rules based on it.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Status of the trigger",
					},
					map[string]any{
						"name": "tenant",
						"title": "Tenant",
						"type": "`$ANY`",
						"short": "It is used to specify a tenant context during trigger event.",
					},
					map[string]any{
						"name": "transactionId",
						"title": "Transaction Id",
						"type": "`$STRING`",
						"short": "The returned transaction ID of the trigger",
					},
				},
				"name": "trigger_event_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/events/trigger/broadcast",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "trigger",
									},
									map[string]any{
										"lit": "broadcast",
									},
								},
								"parts": []any{
									"v1",
									"events",
									"trigger",
									"broadcast",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/events/trigger/bulk",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "trigger",
									},
									map[string]any{
										"lit": "bulk",
									},
								},
								"parts": []any{
									"v1",
									"events",
									"trigger",
									"bulk",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"unseen": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "unseen",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/subscribers/{subscriberId}/notifications/unseen",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscribers",
									},
									map[string]any{
										"var": "subscriber_id",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "unseen",
									},
								},
								"parts": []any{
									"v1",
									"subscribers",
									"{subscriber_id}",
									"notifications",
									"unseen",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriberId": "subscriber_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscriber_id",
											"orig": "subscriber_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "seen",
											"orig": "seen",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"limit",
										"seen",
										"subscriber_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscriber",
						},
					},
				},
			},
			"upload": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of error messages for failed uploads",
					},
					map[string]any{
						"name": "failedUploads",
						"title": "Failed Uploads",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Number of files that failed to upload",
					},
					map[string]any{
						"name": "successfulUploads",
						"title": "Successful Uploads",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Number of files successfully uploaded",
					},
					map[string]any{
						"name": "totalFiles",
						"title": "Total Files",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total number of files processed",
					},
				},
				"name": "upload",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/translations/upload",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "translations",
									},
									map[string]any{
										"lit": "upload",
									},
								},
								"parts": []any{
									"v2",
									"translations",
									"upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook_result_dto": map[string]any{
				"fields": []any{},
				"name": "webhook_result_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "inbound-webhooks",
									},
									map[string]any{
										"lit": "delivery-providers",
									},
									map[string]any{
										"var": "environment_id",
									},
									map[string]any{
										"var": "integration_id",
									},
								},
								"parts": []any{
									"v2",
									"inbound-webhooks",
									"delivery-providers",
									"{environment_id}",
									"{integration_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"environmentId": "environment_id",
										"integrationId": "integration_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "environment_id",
											"orig": "environment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"environment_id",
										"idempotency_key",
										"integration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the workflow is active",
					},
					map[string]any{
						"name": "agent",
						"title": "Agent",
						"type": "`$ANY`",
						"short": "Optional agent assignment used to route this workflow through an agent's connected channels.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation timestamp",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the workflow",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Database identifier of the workflow",
					},
					map[string]any{
						"name": "isTranslationEnabled",
						"title": "Is Translation Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable translations for this workflow",
					},
					map[string]any{
						"name": "issues",
						"title": "Issues",
						"type": "`$OBJECT`",
						"short": "Runtime issues for workflow creation and update",
					},
					map[string]any{
						"name": "lastPublishedAt",
						"title": "Last Published At",
						"type": "`$STRING`",
						"short": "Timestamp of the last workflow publication",
					},
					map[string]any{
						"name": "lastPublishedBy",
						"title": "Last Published By",
						"type": "`$ANY`",
						"short": "User who last published the workflow",
					},
					map[string]any{
						"name": "lastTriggeredAt",
						"title": "Last Triggered At",
						"type": "`$STRING`",
						"short": "Timestamp of the last workflow trigger",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name of the workflow",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Workflow origin",
					},
					map[string]any{
						"name": "payloadExample",
						"title": "Payload Example",
						"type": "`$OBJECT`",
						"short": "Generated payload example based on the payload schema",
					},
					map[string]any{
						"name": "payloadSchema",
						"title": "Payload Schema",
						"type": "`$OBJECT`",
						"short": "The payload JSON Schema for the workflow",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "Preferences for the workflow",
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Workflow severity",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Slug of the workflow",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"short": "Source of workflow creation",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow status",
					},
					map[string]any{
						"name": "stepTypeOverviews",
						"title": "Step Type Overviews",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Overview of step types in the workflow",
					},
					map[string]any{
						"name": "steps",
						"title": "Steps",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Steps of the workflow",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the workflow",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Last updated timestamp",
					},
					map[string]any{
						"name": "updatedBy",
						"title": "Updated By",
						"type": "`$ANY`",
						"short": "User who last updated the workflow",
					},
					map[string]any{
						"name": "validatePayload",
						"title": "Validate Payload",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable payload schema validation",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Workflow identifier",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workflow",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/workflows",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/workflows",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.workflows`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"limit",
										"offset",
										"order_by",
										"order_direction",
										"query",
										"status",
										"tag",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/workflows/{workflowId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflowId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "environment_id",
											"orig": "environment_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"environment_id",
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/workflows/{workflowId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflowId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/workflows/{workflowId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflowId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v2/workflows/{workflowId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflowId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow_info_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the workflow",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the workflow",
					},
				},
				"name": "workflow_info_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/layouts/{layoutId}/usage",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "layouts",
									},
									map[string]any{
										"var": "layout_id",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"v2",
									"layouts",
									"{layout_id}",
									"usage",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"layoutId": "layout_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.workflows`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "layout_id",
											"orig": "layout_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"layout_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.layout",
						},
					},
				},
			},
			"workflow_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the workflow is active",
					},
					map[string]any{
						"name": "agent",
						"title": "Agent",
						"type": "`$ANY`",
						"short": "Optional agent assignment used to route this workflow through an agent's connected channels.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Creation timestamp",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the workflow",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Database identifier of the workflow",
					},
					map[string]any{
						"name": "isTranslationEnabled",
						"title": "Is Translation Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable translations for this workflow",
					},
					map[string]any{
						"name": "issues",
						"title": "Issues",
						"type": "`$OBJECT`",
						"short": "Runtime issues for workflow creation and update",
					},
					map[string]any{
						"name": "lastPublishedAt",
						"title": "Last Published At",
						"type": "`$STRING`",
						"short": "Timestamp of the last workflow publication",
					},
					map[string]any{
						"name": "lastPublishedBy",
						"title": "Last Published By",
						"type": "`$ANY`",
						"short": "User who last published the workflow",
					},
					map[string]any{
						"name": "lastTriggeredAt",
						"title": "Last Triggered At",
						"type": "`$STRING`",
						"short": "Timestamp of the last workflow trigger",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the workflow",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow origin",
					},
					map[string]any{
						"name": "payloadExample",
						"title": "Payload Example",
						"type": "`$OBJECT`",
						"short": "Generated payload example based on the payload schema",
					},
					map[string]any{
						"name": "payloadSchema",
						"title": "Payload Schema",
						"type": "`$OBJECT`",
						"short": "The payload JSON Schema for the workflow",
					},
					map[string]any{
						"name": "preferences",
						"title": "Preferences",
						"type": "`$ANY`",
						"req": true,
						"short": "Preferences for the workflow",
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow severity",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Slug of the workflow",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow status",
					},
					map[string]any{
						"name": "steps",
						"title": "Steps",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Steps of the workflow",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the workflow",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Last updated timestamp",
					},
					map[string]any{
						"name": "updatedBy",
						"title": "Updated By",
						"type": "`$ANY`",
						"short": "User who last updated the workflow",
					},
					map[string]any{
						"name": "validatePayload",
						"title": "Validate Payload",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable payload schema validation",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow identifier",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workflow_response_dto",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v2/workflows/{workflowId}/sync",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "sync",
									},
								},
								"parts": []any{
									"v2",
									"workflows",
									"{id}",
									"sync",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflowId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "sync",
									"exist": []any{
										"id",
										"idempotency_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
