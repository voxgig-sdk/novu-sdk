import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "activity_notification_response_dto",
    "accessor": "ActivityNotificationResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/notifications",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "channel": "v1",
      "context_key": "v1",
      "email": "v1",
      "limit": "v1",
      "page": "v1",
      "search": "v1",
      "severity": "v1",
      "subscriber_id": "v1",
      "subscription_id": "v1",
      "template": "v1",
      "topic_key": "v1",
      "transaction_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "channels",
      "templates",
      "emails",
      "search",
      "subscriberIds",
      "severity",
      "page",
      "limit",
      "transactionId",
      "topicKey",
      "subscriptionId",
      "contextKeys",
      "after",
      "before"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "hasMore": true,
      "data": [
        {
          "_digestedNotificationId": "x",
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "_subscriberId": "x",
          "_templateId": "x",
          "channels": [
            "in_app"
          ],
          "contextKeys": [
            "x"
          ],
          "controls": {},
          "createdAt": "x",
          "critical": true,
          "jobs": [
            {
              "_id": "x",
              "digest": {},
              "executionDetails": [
                {}
              ],
              "overrides": {
                "stepId": "some_wf_id",
                "workflowId": "some_wf_id"
              },
              "payload": {},
              "providerId": "anypost",
              "scheduleExtensionsCount": 1,
              "status": "x",
              "step": {},
              "type": "in_app",
              "updatedAt": "x"
            }
          ],
          "payload": {},
          "severity": "high",
          "subscriber": {
            "_id": "x",
            "email": "x",
            "firstName": "x",
            "lastName": "x",
            "phone": "x",
            "subscriberId": "x"
          },
          "tags": [
            "x"
          ],
          "template": {
            "_id": "x",
            "name": "x",
            "origin": "novu-cloud",
            "triggers": [
              {}
            ]
          },
          "to": {},
          "topics": [
            {
              "_topicId": "x",
              "topicKey": "x"
            }
          ],
          "transactionId": "x",
          "updatedAt": "x"
        }
      ],
      "pageSize": 1,
      "page": 1
    },
    "idField": "id"
  },
  {
    "entity": "activity_notification_response_dto",
    "accessor": "ActivityNotificationResponseDto",
    "op": "load",
    "method": "GET",
    "path": "/v1/notifications/{notificationId}",
    "args": [
      {
        "name": "notification_id",
        "wire": "notificationId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "_subscriberId": "x",
      "transactionId": "x",
      "_templateId": "x",
      "_digestedNotificationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "channels": [
        "in_app"
      ],
      "subscriber": {
        "_id": "x",
        "email": "x",
        "firstName": "x",
        "lastName": "x",
        "phone": "x",
        "subscriberId": "x"
      },
      "template": {
        "_id": "x",
        "name": "x",
        "origin": "novu-cloud",
        "triggers": [
          {
            "identifier": "x",
            "subscriberVariables": [
              {}
            ],
            "type": "event",
            "variables": [
              {}
            ]
          }
        ]
      },
      "jobs": [
        {
          "_id": "x",
          "digest": {
            "amount": 1,
            "backoff": true,
            "backoffAmount": 1,
            "backoffUnit": "seconds",
            "digestKey": "x",
            "events": [
              {}
            ],
            "timed": {},
            "type": "regular",
            "unit": "seconds",
            "updateMode": true
          },
          "executionDetails": [
            {
              "_id": "x",
              "createdAt": "x",
              "detail": "x",
              "isRetry": true,
              "isTest": true,
              "providerId": "anypost",
              "raw": "x",
              "source": "Credentials",
              "status": "Success"
            }
          ],
          "overrides": {
            "stepId": "some_wf_id",
            "workflowId": "some_wf_id"
          },
          "payload": {},
          "providerId": "anypost",
          "scheduleExtensionsCount": 1,
          "status": "x",
          "step": {
            "_id": "x",
            "_parentId": "x",
            "_templateId": "x",
            "active": true,
            "controlVariables": {},
            "filters": [
              {}
            ],
            "issues": {},
            "metadata": {},
            "name": "x",
            "replyCallback": {},
            "template": {},
            "variants": [
              {}
            ]
          },
          "type": "in_app",
          "updatedAt": "x"
        }
      ],
      "payload": {},
      "tags": [
        "x"
      ],
      "controls": {},
      "to": {},
      "topics": [
        {
          "_topicId": "x",
          "topicKey": "x"
        }
      ],
      "severity": "high",
      "critical": true,
      "contextKeys": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "create",
    "method": "POST",
    "path": "/v1/agents/{agentId}/reply",
    "action": "reply",
    "args": [
      {
        "name": "id",
        "wire": "agentId",
        "value": "support-agent"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "messageId": "1712345678.123456",
      "platformThreadId": "C0123456789"
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "create",
    "method": "POST",
    "path": "/v1/agents",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      },
      {
        "name": "novu_analytics_source",
        "wire": "Novu-Analytics-Source",
        "value": "h2"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "name": "x",
      "identifier": "x",
      "description": "x",
      "behavior": {
        "acknowledgeOnReceived": true,
        "reactionOnResolved": {},
        "replyPolicy": "mention_only",
        "subscriberAccess": "open"
      },
      "active": true,
      "bridgeUrl": "x",
      "devBridgeUrl": "x",
      "devBridgeActive": true,
      "runtime": "self-hosted",
      "visibility": "public",
      "managedRuntime": {
        "consoleUrl": "x",
        "externalAgentId": "x",
        "externalEnvironmentId": "x",
        "externalWorkspaceId": "x",
        "integrationId": "x",
        "mcpServers": [
          {
            "externalId": "x",
            "name": "x",
            "url": "x"
          }
        ],
        "providerId": "x",
        "systemPrompt": "x",
        "tools": [
          {
            "description": "x",
            "externalId": "x",
            "name": "x",
            "type": "builtin"
          }
        ]
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "createdBy": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "integrations": [
        {
          "active": true,
          "channel": "in_app",
          "identifier": "x",
          "integrationId": "x",
          "name": "x",
          "providerId": "x"
        }
      ],
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "list",
    "method": "GET",
    "path": "/v1/agents",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "identifier": "v1",
      "include_cursor": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "identifier"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "active": true,
          "behavior": {
            "acknowledgeOnReceived": true,
            "reactionOnResolved": {},
            "replyPolicy": "mention_only",
            "subscriberAccess": "open"
          },
          "bridgeUrl": "x",
          "createdAt": "x",
          "createdBy": "x",
          "description": "x",
          "devBridgeActive": true,
          "devBridgeUrl": "x",
          "exceedsPlanLimit": true,
          "identifier": "x",
          "integrations": [
            {
              "active": true,
              "channel": "in_app",
              "identifier": "x",
              "integrationId": "x",
              "name": "x",
              "providerId": "x"
            }
          ],
          "managedRuntime": {
            "consoleUrl": "x",
            "externalAgentId": "x",
            "externalEnvironmentId": "x",
            "externalWorkspaceId": "x",
            "integrationId": "x",
            "mcpServers": [
              {}
            ],
            "providerId": "x",
            "systemPrompt": "x",
            "tools": [
              {}
            ]
          },
          "name": "x",
          "runtime": "self-hosted",
          "updatedAt": "x",
          "visibility": "public"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true,
      "planUsage": {
        "creationLimit": 1,
        "limit": 1,
        "limitSource": "plan",
        "totalCreated": 1,
        "used": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "load",
    "method": "GET",
    "path": "/v1/agents/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "identifier": "x",
      "description": "x",
      "behavior": {
        "acknowledgeOnReceived": true,
        "reactionOnResolved": {},
        "replyPolicy": "mention_only",
        "subscriberAccess": "open"
      },
      "active": true,
      "bridgeUrl": "x",
      "devBridgeUrl": "x",
      "devBridgeActive": true,
      "runtime": "self-hosted",
      "visibility": "public",
      "managedRuntime": {
        "consoleUrl": "x",
        "externalAgentId": "x",
        "externalEnvironmentId": "x",
        "externalWorkspaceId": "x",
        "integrationId": "x",
        "mcpServers": [
          {
            "externalId": "x",
            "name": "x",
            "url": "x"
          }
        ],
        "providerId": "x",
        "systemPrompt": "x",
        "tools": [
          {
            "description": "x",
            "externalId": "x",
            "name": "x",
            "type": "builtin"
          }
        ]
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "createdBy": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "integrations": [
        {
          "active": true,
          "channel": "in_app",
          "identifier": "x",
          "integrationId": "x",
          "name": "x",
          "providerId": "x"
        }
      ],
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
    "args": [
      {
        "name": "agent_id",
        "wire": "identifier",
        "value": "p1"
      },
      {
        "name": "agent_integration_id",
        "wire": "agentIntegrationId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/agents/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {
      "delete_from_provider": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "deleteFromProvider"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/agents/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "identifier": "x",
      "description": "x",
      "behavior": {
        "acknowledgeOnReceived": true,
        "reactionOnResolved": {},
        "replyPolicy": "mention_only",
        "subscriberAccess": "open"
      },
      "active": true,
      "bridgeUrl": "x",
      "devBridgeUrl": "x",
      "devBridgeActive": true,
      "runtime": "self-hosted",
      "visibility": "public",
      "managedRuntime": {
        "consoleUrl": "x",
        "externalAgentId": "x",
        "externalEnvironmentId": "x",
        "externalWorkspaceId": "x",
        "integrationId": "x",
        "mcpServers": [
          {
            "externalId": "x",
            "name": "x",
            "url": "x"
          }
        ],
        "providerId": "x",
        "systemPrompt": "x",
        "tools": [
          {
            "description": "x",
            "externalId": "x",
            "name": "x",
            "type": "builtin"
          }
        ]
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "createdBy": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "integrations": [
        {
          "active": true,
          "channel": "in_app",
          "identifier": "x",
          "integrationId": "x",
          "name": "x",
          "providerId": "x"
        }
      ],
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "agent_integration_response_dto",
    "accessor": "AgentIntegrationResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/agents/{identifier}/integrations",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "_agentId": "x",
      "integration": {
        "_id": "x",
        "active": true,
        "channel": "in_app",
        "defaultSenderName": "x",
        "identifier": "x",
        "name": "x",
        "providerId": "x",
        "sharedInboundAddress": "x",
        "sharedInboxDisabled": true
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "connectedAt": {},
      "createdAt": "x",
      "updatedAt": "x",
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "agent_integration_response_dto",
    "accessor": "AgentIntegrationResponseDto",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/agents/{identifier}/integrations/{agentIntegrationId}",
    "args": [
      {
        "name": "agent_id",
        "wire": "identifier",
        "value": "p1"
      },
      {
        "name": "agent_integration_id",
        "wire": "agentIntegrationId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_agentId": "x",
      "integration": {
        "_id": "x",
        "active": true,
        "channel": "in_app",
        "defaultSenderName": "x",
        "identifier": "x",
        "name": "x",
        "providerId": "x",
        "sharedInboundAddress": "x",
        "sharedInboxDisabled": true
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "connectedAt": {},
      "createdAt": "x",
      "updatedAt": "x",
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "agent_response_dto",
    "accessor": "AgentResponseDto",
    "op": "update",
    "method": "PUT",
    "path": "/v1/agents/{identifier}/bridge",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "identifier": "x",
      "description": "x",
      "behavior": {
        "acknowledgeOnReceived": true,
        "reactionOnResolved": {},
        "replyPolicy": "mention_only",
        "subscriberAccess": "open"
      },
      "active": true,
      "bridgeUrl": "x",
      "devBridgeUrl": "x",
      "devBridgeActive": true,
      "runtime": "self-hosted",
      "visibility": "public",
      "managedRuntime": {
        "consoleUrl": "x",
        "externalAgentId": "x",
        "externalEnvironmentId": "x",
        "externalWorkspaceId": "x",
        "integrationId": "x",
        "mcpServers": [
          {
            "externalId": "x",
            "name": "x",
            "url": "x"
          }
        ],
        "providerId": "x",
        "systemPrompt": "x",
        "tools": [
          {
            "description": "x",
            "externalId": "x",
            "name": "x",
            "type": "builtin"
          }
        ]
      },
      "_environmentId": "x",
      "_organizationId": "x",
      "createdBy": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "integrations": [
        {
          "active": true,
          "channel": "in_app",
          "identifier": "x",
          "integrationId": "x",
          "name": "x",
          "providerId": "x"
        }
      ],
      "exceedsPlanLimit": true
    },
    "idField": "id"
  },
  {
    "entity": "bulk",
    "accessor": "Bulk",
    "op": "create",
    "method": "POST",
    "path": "/v1/subscribers/bulk",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "updated": [
        {
          "subscriberId": "x"
        }
      ],
      "created": [
        {
          "subscriberId": "x"
        }
      ],
      "failed": [
        {
          "message": "x",
          "subscriberId": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "channel_connection",
    "accessor": "ChannelConnection",
    "op": "create",
    "method": "POST",
    "path": "/v1/channel-connections",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "workspace": {
        "botUserId": "U0123456789",
        "id": "T123456",
        "name": "Acme HQ"
      },
      "auth": {
        "accessToken": "Workspace access token",
        "expiresAt": "2026-06-15T12:00:00.000Z",
        "refreshToken": "Workspace refresh token",
        "refreshTokenExpiresAt": "2026-09-15T12:00:00.000Z"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "channel_connection",
    "accessor": "ChannelConnection",
    "op": "list",
    "method": "GET",
    "path": "/v1/channel-connections",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "channel": "chat",
      "connection_mode": "v1",
      "context_key": "v1",
      "include_cursor": "v1",
      "integration_identifier": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1",
      "provider_id": "v1",
      "subscriber_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "subscriberId",
      "connectionMode",
      "channel",
      "providerId",
      "integrationIdentifier",
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "auth": {
            "accessToken": "Workspace access token",
            "expiresAt": "2026-06-15T12:00:00.000Z",
            "refreshToken": "Workspace refresh token",
            "refreshTokenExpiresAt": "2026-09-15T12:00:00.000Z"
          },
          "channel": "in_app",
          "contextKeys": [
            "tenant:org-123",
            "region:us-east-1"
          ],
          "createdAt": "x",
          "identifier": "x",
          "integrationIdentifier": "slack-prod",
          "providerId": "slack",
          "subscriberId": "subscriber-123",
          "updatedAt": "x",
          "workspace": {
            "botUserId": "U0123456789",
            "id": "T123456",
            "name": "Acme HQ"
          }
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "channel_connection",
    "accessor": "ChannelConnection",
    "op": "load",
    "method": "GET",
    "path": "/v1/channel-connections/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "workspace": {
        "botUserId": "U0123456789",
        "id": "T123456",
        "name": "Acme HQ"
      },
      "auth": {
        "accessToken": "Workspace access token",
        "expiresAt": "2026-06-15T12:00:00.000Z",
        "refreshToken": "Workspace refresh token",
        "refreshTokenExpiresAt": "2026-09-15T12:00:00.000Z"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "channel_connection",
    "accessor": "ChannelConnection",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/channel-connections/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "channel_connection",
    "accessor": "ChannelConnection",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/channel-connections/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "workspace": {
        "botUserId": "U0123456789",
        "id": "T123456",
        "name": "Acme HQ"
      },
      "auth": {
        "accessToken": "Workspace access token",
        "expiresAt": "2026-06-15T12:00:00.000Z",
        "refreshToken": "Workspace refresh token",
        "refreshTokenExpiresAt": "2026-09-15T12:00:00.000Z"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "channel_endpoint",
    "accessor": "ChannelEndpoint",
    "op": "create",
    "method": "POST",
    "path": "/v1/channel-endpoints",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "connectionIdentifier": "slack-connection-abc123",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "type": "slack_channel",
      "endpoint": {
        "channelId": "C123456789"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "channel_endpoint",
    "accessor": "ChannelEndpoint",
    "op": "list",
    "method": "GET",
    "path": "/v1/channel-endpoints",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "channel": "v1",
      "connection_identifier": "v1",
      "context_key": "v1",
      "include_cursor": "v1",
      "integration_identifier": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1",
      "provider_id": "v1",
      "subscriber_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "subscriberId",
      "contextKeys",
      "channel",
      "providerId",
      "integrationIdentifier",
      "connectionIdentifier"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "channel": "in_app",
          "connectionIdentifier": "slack-connection-abc123",
          "contextKeys": [
            "tenant:org-123",
            "region:us-east-1"
          ],
          "createdAt": "x",
          "endpoint": {
            "channelId": "C123456789"
          },
          "identifier": "x",
          "integrationIdentifier": "slack-prod",
          "providerId": "slack",
          "subscriberId": "subscriber-123",
          "type": "slack_channel",
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "channel_endpoint",
    "accessor": "ChannelEndpoint",
    "op": "load",
    "method": "GET",
    "path": "/v1/channel-endpoints/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "connectionIdentifier": "slack-connection-abc123",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "type": "slack_channel",
      "endpoint": {
        "channelId": "C123456789"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "channel_endpoint",
    "accessor": "ChannelEndpoint",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/channel-endpoints/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "channel_endpoint",
    "accessor": "ChannelEndpoint",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/channel-endpoints/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "identifier": "x",
      "channel": "in_app",
      "providerId": "slack",
      "integrationIdentifier": "slack-prod",
      "connectionIdentifier": "slack-connection-abc123",
      "subscriberId": "subscriber-123",
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ],
      "type": "slack_channel",
      "endpoint": {
        "channelId": "C123456789"
      },
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "configure",
    "accessor": "Configure",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations/{integrationIdentifier}/webhook/configure",
    "args": [
      {
        "name": "integration_id",
        "wire": "integrationIdentifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "webhookUrl": "x",
      "configuredAt": "x",
      "botUsername": "x"
    },
    "idField": "id"
  },
  {
    "entity": "context",
    "accessor": "Context",
    "op": "create",
    "method": "POST",
    "path": "/v2/contexts",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "id": "x",
      "data": {},
      "bridgeUrl": "x",
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "context",
    "accessor": "Context",
    "op": "list",
    "method": "GET",
    "path": "/v2/contexts",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "id": "tenant-prod-123",
      "include_cursor": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1",
      "search": "tenant"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "id",
      "search"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "bridgeUrl": "x",
          "createdAt": "x",
          "data": {},
          "id": "x",
          "type": "x",
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "context",
    "accessor": "Context",
    "op": "load",
    "method": "GET",
    "path": "/v2/contexts/{type}/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "type",
        "wire": "type",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": "x",
      "data": {},
      "bridgeUrl": "x",
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "context",
    "accessor": "Context",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/contexts/{type}/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "type",
        "wire": "type",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "context",
    "accessor": "Context",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/contexts/{type}/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "type",
        "wire": "type",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": "x",
      "data": {},
      "bridgeUrl": "x",
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "create_subscriptions_response_dto",
    "accessor": "CreateSubscriptionsResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v2/topics/{topicKey}/subscriptions",
    "args": [
      {
        "name": "topic_key",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": [
        {
          "_id": "64f5e95d3d7946d80d0cb679",
          "identifier": "tk=product-updates:si=subscriber-123",
          "name": "My Subscription",
          "topic": {
            "_id": "64f5e95d3d7946d80d0cb677",
            "key": "product-updates",
            "name": "Product Updates",
            "data": {
              "category": "product",
              "priority": 1
            }
          },
          "subscriber": {
            "_id": "64da692e9a94fb2e6449ad07",
            "subscriberId": "user-123",
            "avatar": "https://example.com/avatar.png",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com"
          },
          "preferences": [
            {
              "subscriptionId": "64f5e95d3d7946d80d0cb679",
              "workflow": {},
              "enabled": true,
              "condition": {
                "and": [
                  {
                    "===": [
                      null,
                      "premium"
                    ]
                  }
                ]
              }
            }
          ],
          "contextKeys": [
            "tenant:org-a",
            "project:proj-123"
          ],
          "createdAt": "2025-04-24T05:40:21Z",
          "updatedAt": "2025-04-24T05:40:21Z"
        }
      ],
      "meta": {
        "totalCount": 3,
        "successful": 2,
        "failed": 1
      },
      "errors": [
        {
          "subscriberId": "invalid-subscriber-id",
          "code": "SUBSCRIBER_NOT_FOUND",
          "message": "Subscriber with ID invalid-subscriber-id could not be found"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "diff",
    "accessor": "Diff",
    "op": "create",
    "method": "POST",
    "path": "/v2/environments/{targetEnvironmentId}/diff",
    "args": [
      {
        "name": "environment_id",
        "wire": "targetEnvironmentId",
        "value": "6615943e7ace93b0540ae377"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "sourceEnvironmentId": "x",
      "targetEnvironmentId": "x",
      "resources": [
        {
          "resourceType": "REGULAR",
          "sourceResource": {
            "id": "x",
            "name": "x",
            "updatedBy": {},
            "updatedAt": "2024-01-15T10:30:00.000Z"
          },
          "targetResource": {
            "id": "x",
            "name": "x",
            "updatedBy": {},
            "updatedAt": "2024-01-15T10:30:00.000Z"
          },
          "changes": [
            {
              "sourceResource": {},
              "targetResource": {},
              "resourceType": "REGULAR",
              "action": "added",
              "diffs": {
                "previous": {},
                "new": {}
              },
              "stepType": "x",
              "previousIndex": 1,
              "newIndex": 1
            }
          ],
          "summary": {
            "added": 1,
            "modified": 1,
            "deleted": 1,
            "unchanged": 1
          },
          "dependencies": [
            {
              "resourceType": "REGULAR",
              "resourceId": "x",
              "resourceName": "x",
              "isBlocking": true,
              "reason": "LAYOUT_REQUIRED_FOR_WORKFLOW"
            }
          ]
        }
      ],
      "summary": {
        "totalEntities": 1,
        "totalChanges": 1,
        "hasChanges": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains/{domain}/diagnose",
    "action": "diagnose",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ok": true,
      "runAt": "x",
      "checks": [
        {
          "code": "mx_missing",
          "status": "pass",
          "latencyMs": 1
        }
      ],
      "issues": [
        {
          "code": "mx_missing",
          "severity": "warn",
          "message": "x",
          "fix": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "name": "x",
      "status": "pending",
      "mxRecordConfigured": true,
      "dnsProvider": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "expectedDnsRecords": [
        {
          "content": "inbound-smtp.us-east-1.amazonaws.com",
          "name": "inbound",
          "priority": 10,
          "ttl": "Auto",
          "type": "MX"
        }
      ],
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "list",
    "method": "GET",
    "path": "/v1/domains",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "include_cursor": "v1",
      "limit": 10,
      "name": "v1",
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "name"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "createdAt": "x",
          "data": {},
          "dnsProvider": "x",
          "expectedDnsRecords": [
            {
              "content": "inbound-smtp.us-east-1.amazonaws.com",
              "name": "inbound",
              "priority": 10,
              "ttl": "Auto",
              "type": "MX"
            }
          ],
          "mxRecordConfigured": true,
          "name": "x",
          "status": "pending",
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "load",
    "method": "GET",
    "path": "/v1/domains/{domain}",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "status": "pending",
      "mxRecordConfigured": true,
      "dnsProvider": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "expectedDnsRecords": [
        {
          "content": "inbound-smtp.us-east-1.amazonaws.com",
          "name": "inbound",
          "priority": 10,
          "ttl": "Auto",
          "type": "MX"
        }
      ],
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/domains/{domain}/routes/{address}",
    "args": [
      {
        "name": "address",
        "wire": "address",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "domain",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/domains/{domain}",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/domains/{domain}",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "status": "pending",
      "mxRecordConfigured": true,
      "dnsProvider": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "expectedDnsRecords": [
        {
          "content": "inbound-smtp.us-east-1.amazonaws.com",
          "name": "inbound",
          "priority": 10,
          "ttl": "Auto",
          "type": "MX"
        }
      ],
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain_connect_apply_url_response_dto",
    "accessor": "DomainConnectApplyUrlResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains/{domain}/auto-configure/start",
    "args": [
      {
        "name": "domain_id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "applyUrl": "x",
      "providerName": "x",
      "redirectUri": "x"
    },
    "idField": "id"
  },
  {
    "entity": "domain_connect_status_response_dto",
    "accessor": "DomainConnectStatusResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/domains/{domain}/auto-configure",
    "action": "auto-configure",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "available": true,
      "providerName": "x",
      "providerId": "x",
      "reason": "x",
      "reasonCode": "disabled",
      "manualRecords": [
        {
          "content": "inbound-smtp.us-east-1.amazonaws.com",
          "name": "inbound",
          "priority": 10,
          "ttl": "Auto",
          "type": "MX"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "domain_response_dto",
    "accessor": "DomainResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains/{domain}/verify",
    "action": "verify",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "name": "x",
      "status": "pending",
      "mxRecordConfigured": true,
      "dnsProvider": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "expectedDnsRecords": [
        {
          "content": "inbound-smtp.us-east-1.amazonaws.com",
          "name": "inbound",
          "priority": 10,
          "ttl": "Auto",
          "type": "MX"
        }
      ],
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain_route_response_dto",
    "accessor": "DomainRouteResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains/{domain}/routes/{address}/test",
    "action": "test",
    "args": [
      {
        "name": "address",
        "wire": "address",
        "value": "p1"
      },
      {
        "name": "domain_id",
        "wire": "domain",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "matched": true,
      "dryRun": true,
      "domainStatus": "pending",
      "mxRecordConfigured": true,
      "type": "agent",
      "wouldDeliverTo": "x",
      "payload": {},
      "webhook": {
        "skipped": true,
        "latencyMs": 1
      },
      "agent": {
        "agentId": "x",
        "httpStatus": 1,
        "agentReply": {},
        "latencyMs": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "domain_route_response_dto",
    "accessor": "DomainRouteResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/domains/{domain}/routes",
    "action": "routes",
    "args": [
      {
        "name": "id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "_domainId": "x",
      "address": "x",
      "agentId": "x",
      "type": "agent",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain_route_response_dto",
    "accessor": "DomainRouteResponseDto",
    "op": "load",
    "method": "GET",
    "path": "/v1/domains/{domain}/routes/{address}",
    "args": [
      {
        "name": "address",
        "wire": "address",
        "value": "p1"
      },
      {
        "name": "domain_id",
        "wire": "domain",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_domainId": "x",
      "address": "x",
      "agentId": "x",
      "type": "agent",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "domain_route_response_dto",
    "accessor": "DomainRouteResponseDto",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/domains/{domain}/routes/{address}",
    "args": [
      {
        "name": "address",
        "wire": "address",
        "value": "p1"
      },
      {
        "name": "domain_id",
        "wire": "domain",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_domainId": "x",
      "address": "x",
      "agentId": "x",
      "type": "agent",
      "_environmentId": "x",
      "_organizationId": "x",
      "createdAt": "x",
      "updatedAt": "x",
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "environment",
    "accessor": "Environment",
    "op": "create",
    "method": "POST",
    "path": "/v1/environments",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "60d5ecb8b3b3a30015f3e1a1",
      "name": "Production Environment",
      "_organizationId": "60d5ecb8b3b3a30015f3e1a2",
      "identifier": "prod-env-01",
      "type": "prod",
      "apiKeys": [
        {
          "key": "api-key-1234567890abcdef",
          "_userId": "60d5ecb8b3b3a30015f3e1a4",
          "hash": "hash_value_here"
        }
      ],
      "_parentId": "60d5ecb8b3b3a30015f3e1a3",
      "slug": "production"
    },
    "idField": "id"
  },
  {
    "entity": "environment",
    "accessor": "Environment",
    "op": "list",
    "method": "GET",
    "path": "/v1/environments",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "_id": "60d5ecb8b3b3a30015f3e1a1",
        "name": "Production Environment",
        "_organizationId": "60d5ecb8b3b3a30015f3e1a2",
        "identifier": "prod-env-01",
        "type": "prod",
        "apiKeys": [
          {
            "key": "api-key-1234567890abcdef",
            "_userId": "60d5ecb8b3b3a30015f3e1a4",
            "hash": "hash_value_here"
          }
        ],
        "_parentId": "60d5ecb8b3b3a30015f3e1a3",
        "slug": "production"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "environment",
    "accessor": "Environment",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/environments/{environmentId}",
    "args": [
      {
        "name": "id",
        "wire": "environmentId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "environment",
    "accessor": "Environment",
    "op": "update",
    "method": "PUT",
    "path": "/v1/environments/{environmentId}",
    "args": [
      {
        "name": "id",
        "wire": "environmentId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "60d5ecb8b3b3a30015f3e1a1",
      "name": "Production Environment",
      "_organizationId": "60d5ecb8b3b3a30015f3e1a2",
      "identifier": "prod-env-01",
      "type": "prod",
      "apiKeys": [
        {
          "key": "api-key-1234567890abcdef",
          "_userId": "60d5ecb8b3b3a30015f3e1a4",
          "hash": "hash_value_here"
        }
      ],
      "_parentId": "60d5ecb8b3b3a30015f3e1a3",
      "slug": "production"
    },
    "idField": "id"
  },
  {
    "entity": "environment_tags_dto",
    "accessor": "EnvironmentTagsDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/environments/{environmentId}/tags",
    "action": "tags",
    "args": [
      {
        "name": "id",
        "wire": "environmentId",
        "value": "6615943e7ace93b0540ae377"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "name": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "environment_variable",
    "accessor": "EnvironmentVariable",
    "op": "create",
    "method": "POST",
    "path": "/v1/environment-variables",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_organizationId": "x",
      "key": "x",
      "type": "string",
      "isSecret": true,
      "values": [
        {
          "_environmentId": "x",
          "value": "x"
        }
      ],
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "environment_variable",
    "accessor": "EnvironmentVariable",
    "op": "list",
    "method": "GET",
    "path": "/v1/environment-variables",
    "args": [],
    "select": {
      "search": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "search"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "_id": "x",
        "_organizationId": "x",
        "key": "x",
        "type": "string",
        "isSecret": true,
        "values": [
          {
            "_environmentId": "x",
            "value": "x"
          }
        ],
        "createdAt": "x",
        "updatedAt": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "environment_variable",
    "accessor": "EnvironmentVariable",
    "op": "load",
    "method": "GET",
    "path": "/v1/environment-variables/{variableKey}",
    "args": [
      {
        "name": "id",
        "wire": "variableKey",
        "value": "BASE_URL"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_organizationId": "x",
      "key": "x",
      "type": "string",
      "isSecret": true,
      "values": [
        {
          "_environmentId": "x",
          "value": "x"
        }
      ],
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "environment_variable",
    "accessor": "EnvironmentVariable",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/environment-variables/{variableKey}",
    "args": [
      {
        "name": "id",
        "wire": "variableKey",
        "value": "BASE_URL"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "environment_variable",
    "accessor": "EnvironmentVariable",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/environment-variables/{variableKey}",
    "args": [
      {
        "name": "id",
        "wire": "variableKey",
        "value": "BASE_URL"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_organizationId": "x",
      "key": "x",
      "type": "string",
      "isSecret": true,
      "values": [
        {
          "_environmentId": "x",
          "value": "x"
        }
      ],
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "environment_variable_workflow_info_dto",
    "accessor": "EnvironmentVariableWorkflowInfoDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/environment-variables/{variableKey}/usage",
    "args": [
      {
        "name": "variable_key",
        "wire": "variableKey",
        "value": "BASE_URL"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflows": [
        {
          "name": "Welcome Email",
          "workflowId": "welcome-email"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "create",
    "method": "POST",
    "path": "/v1/events/trigger",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "acknowledged": true,
      "status": "error",
      "error": [
        "x"
      ],
      "transactionId": "x",
      "activityFeedLink": "x",
      "jobData": {}
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/events/trigger/{transactionId}",
    "args": [
      {
        "name": "transaction_id",
        "wire": "transactionId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": true,
    "idField": "id"
  },
  {
    "entity": "generate_preview_response_dto",
    "accessor": "GeneratePreviewResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v2/workflows/{workflowId}/step/{stepId}/preview",
    "args": [
      {
        "name": "step_id",
        "wire": "stepId",
        "value": "p1"
      },
      {
        "name": "workflow_id",
        "wire": "workflowId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "previewPayloadExample": {
        "subscriber": {
          "_id": "x",
          "firstName": "x",
          "lastName": "x",
          "email": "x",
          "phone": "x",
          "avatar": "x",
          "locale": "x",
          "channels": [
            {}
          ],
          "topics": [
            "x"
          ],
          "isOnline": true,
          "lastOnlineAt": "x",
          "__v": 1,
          "data": {},
          "timezone": "x"
        },
        "actor": {
          "_id": "x",
          "firstName": "x",
          "lastName": "x",
          "email": "x",
          "phone": "x",
          "avatar": "x",
          "locale": "x",
          "channels": [
            {}
          ],
          "topics": [
            "x"
          ],
          "isOnline": true,
          "lastOnlineAt": "x",
          "__v": 1,
          "data": {},
          "timezone": "x"
        },
        "payload": {},
        "steps": {},
        "context": {},
        "env": {}
      },
      "schema": {},
      "novuSignature": "x",
      "result": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations/{integrationId}/auto-configure",
    "action": "auto_configure",
    "args": [
      {
        "name": "id",
        "wire": "integrationId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "integration": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations/{integrationIdentifier}/mobile-link",
    "action": "mobile_link",
    "args": [
      {
        "name": "integration_identifier",
        "wire": "integrationIdentifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "token": "x",
      "url": "x",
      "expiresAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "name": "x",
      "identifier": "x",
      "providerId": "x",
      "channel": "in_app",
      "kind": "delivery",
      "credentials": {
        "apiKey": "x",
        "user": "x",
        "secretKey": "x",
        "hmacSecretKeyEncoding": "text",
        "domain": "x",
        "password": "x",
        "host": "x",
        "port": "x",
        "secure": true,
        "region": "x",
        "accountSid": "x",
        "messageProfileId": "x",
        "token": "x",
        "from": "x",
        "senderName": "x",
        "projectName": "x",
        "applicationId": "x",
        "clientId": "x",
        "requireTls": true,
        "ignoreTls": true,
        "tlsOptions": {},
        "baseUrl": "x",
        "webhookUrl": "x",
        "redirectUrl": "x",
        "hmac": true,
        "serviceAccount": "x",
        "ipPoolName": "x",
        "configurationSetName": "x",
        "apiKeyRequestHeader": "x",
        "secretKeyRequestHeader": "x",
        "idPath": "x",
        "datePath": "x",
        "apiToken": "x",
        "authenticateByToken": true,
        "authenticationTokenKey": "x",
        "instanceId": "x",
        "alertUid": "x",
        "title": "x",
        "imageUrl": "x",
        "state": "x",
        "externalLink": "x",
        "channelId": "x",
        "phoneNumberIdentification": "x",
        "accessKey": "x",
        "appSid": "x",
        "senderId": "x",
        "tenantId": "x",
        "AppIOBaseUrl": "x",
        "signingSecret": "x",
        "outboundIntegrationId": "x",
        "outboundConnectedAt": "x",
        "whatsNextCompletedAt": "x",
        "useFromAddressOverride": true,
        "fromAddressOverride": "x",
        "emailSlugPrefix": "x",
        "externalEnvironmentId": "x",
        "externalVaultId": "x",
        "externalWorkspaceId": "x"
      },
      "configurations": {
        "inboundWebhookEnabled": true,
        "inboundWebhookSigningKey": "x",
        "payloadSchema": "x"
      },
      "active": true,
      "deleted": true,
      "deletedAt": "x",
      "deletedBy": "x",
      "primary": true,
      "conditions": [
        {
          "isNegated": true,
          "type": "BOOLEAN",
          "value": "AND",
          "children": [
            {
              "field": "x",
              "on": "subscriber",
              "operator": "LARGER",
              "value": "x"
            }
          ]
        }
      ],
      "rules": {
        "==": [
          {
            "var": "context.tenant.id"
          },
          "acme"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "list",
    "method": "GET",
    "path": "/v1/integrations",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "_id": "x",
        "_environmentId": "x",
        "_organizationId": "x",
        "name": "x",
        "identifier": "x",
        "providerId": "x",
        "channel": "in_app",
        "kind": "delivery",
        "credentials": {
          "apiKey": "x",
          "user": "x",
          "secretKey": "x",
          "hmacSecretKeyEncoding": "text",
          "domain": "x",
          "password": "x",
          "host": "x",
          "port": "x",
          "secure": true,
          "region": "x",
          "accountSid": "x",
          "messageProfileId": "x",
          "token": "x",
          "from": "x",
          "senderName": "x",
          "projectName": "x",
          "applicationId": "x",
          "clientId": "x",
          "requireTls": true,
          "ignoreTls": true,
          "tlsOptions": {},
          "baseUrl": "x",
          "webhookUrl": "x",
          "redirectUrl": "x",
          "hmac": true,
          "serviceAccount": "x",
          "ipPoolName": "x",
          "configurationSetName": "x",
          "apiKeyRequestHeader": "x",
          "secretKeyRequestHeader": "x",
          "idPath": "x",
          "datePath": "x",
          "apiToken": "x",
          "authenticateByToken": true,
          "authenticationTokenKey": "x",
          "instanceId": "x",
          "alertUid": "x",
          "title": "x",
          "imageUrl": "x",
          "state": "x",
          "externalLink": "x",
          "channelId": "x",
          "phoneNumberIdentification": "x",
          "accessKey": "x",
          "appSid": "x",
          "senderId": "x",
          "tenantId": "x",
          "AppIOBaseUrl": "x",
          "signingSecret": "x",
          "outboundIntegrationId": "x",
          "outboundConnectedAt": "x",
          "whatsNextCompletedAt": "x",
          "useFromAddressOverride": true,
          "fromAddressOverride": "x",
          "emailSlugPrefix": "x",
          "externalEnvironmentId": "x",
          "externalVaultId": "x",
          "externalWorkspaceId": "x"
        },
        "configurations": {
          "inboundWebhookEnabled": true,
          "inboundWebhookSigningKey": "x",
          "payloadSchema": "x"
        },
        "active": true,
        "deleted": true,
        "deletedAt": "x",
        "deletedBy": "x",
        "primary": true,
        "conditions": [
          {
            "isNegated": true,
            "type": "BOOLEAN",
            "value": "AND",
            "children": [
              {
                "field": "x",
                "on": "subscriber",
                "operator": "LARGER",
                "value": "x"
              }
            ]
          }
        ],
        "rules": {
          "==": [
            {
              "var": "context.tenant.id"
            },
            "acme"
          ]
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/integrations/{integrationId}",
    "args": [
      {
        "name": "id",
        "wire": "integrationId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "_id": "x",
        "_environmentId": "x",
        "_organizationId": "x",
        "name": "x",
        "identifier": "x",
        "providerId": "x",
        "channel": "in_app",
        "kind": "delivery",
        "credentials": {
          "apiKey": "x",
          "user": "x",
          "secretKey": "x",
          "hmacSecretKeyEncoding": "text",
          "domain": "x",
          "password": "x",
          "host": "x",
          "port": "x",
          "secure": true,
          "region": "x",
          "accountSid": "x",
          "messageProfileId": "x",
          "token": "x",
          "from": "x",
          "senderName": "x",
          "projectName": "x",
          "applicationId": "x",
          "clientId": "x",
          "requireTls": true,
          "ignoreTls": true,
          "tlsOptions": {},
          "baseUrl": "x",
          "webhookUrl": "x",
          "redirectUrl": "x",
          "hmac": true,
          "serviceAccount": "x",
          "ipPoolName": "x",
          "configurationSetName": "x",
          "apiKeyRequestHeader": "x",
          "secretKeyRequestHeader": "x",
          "idPath": "x",
          "datePath": "x",
          "apiToken": "x",
          "authenticateByToken": true,
          "authenticationTokenKey": "x",
          "instanceId": "x",
          "alertUid": "x",
          "title": "x",
          "imageUrl": "x",
          "state": "x",
          "externalLink": "x",
          "channelId": "x",
          "phoneNumberIdentification": "x",
          "accessKey": "x",
          "appSid": "x",
          "senderId": "x",
          "tenantId": "x",
          "AppIOBaseUrl": "x",
          "signingSecret": "x",
          "outboundIntegrationId": "x",
          "outboundConnectedAt": "x",
          "whatsNextCompletedAt": "x",
          "useFromAddressOverride": true,
          "fromAddressOverride": "x",
          "emailSlugPrefix": "x",
          "externalEnvironmentId": "x",
          "externalVaultId": "x",
          "externalWorkspaceId": "x"
        },
        "configurations": {
          "inboundWebhookEnabled": true,
          "inboundWebhookSigningKey": "x",
          "payloadSchema": "x"
        },
        "active": true,
        "deleted": true,
        "deletedAt": "x",
        "deletedBy": "x",
        "primary": true,
        "conditions": [
          {
            "isNegated": true,
            "type": "BOOLEAN",
            "value": "AND",
            "children": [
              {
                "field": "x",
                "on": "subscriber",
                "operator": "LARGER",
                "value": "x"
              }
            ]
          }
        ],
        "rules": {
          "==": [
            {
              "var": "context.tenant.id"
            },
            "acme"
          ]
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "update",
    "method": "PUT",
    "path": "/v1/integrations/{integrationId}",
    "args": [
      {
        "name": "id",
        "wire": "integrationId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "name": "x",
      "identifier": "x",
      "providerId": "x",
      "channel": "in_app",
      "kind": "delivery",
      "credentials": {
        "apiKey": "x",
        "user": "x",
        "secretKey": "x",
        "hmacSecretKeyEncoding": "text",
        "domain": "x",
        "password": "x",
        "host": "x",
        "port": "x",
        "secure": true,
        "region": "x",
        "accountSid": "x",
        "messageProfileId": "x",
        "token": "x",
        "from": "x",
        "senderName": "x",
        "projectName": "x",
        "applicationId": "x",
        "clientId": "x",
        "requireTls": true,
        "ignoreTls": true,
        "tlsOptions": {},
        "baseUrl": "x",
        "webhookUrl": "x",
        "redirectUrl": "x",
        "hmac": true,
        "serviceAccount": "x",
        "ipPoolName": "x",
        "configurationSetName": "x",
        "apiKeyRequestHeader": "x",
        "secretKeyRequestHeader": "x",
        "idPath": "x",
        "datePath": "x",
        "apiToken": "x",
        "authenticateByToken": true,
        "authenticationTokenKey": "x",
        "instanceId": "x",
        "alertUid": "x",
        "title": "x",
        "imageUrl": "x",
        "state": "x",
        "externalLink": "x",
        "channelId": "x",
        "phoneNumberIdentification": "x",
        "accessKey": "x",
        "appSid": "x",
        "senderId": "x",
        "tenantId": "x",
        "AppIOBaseUrl": "x",
        "signingSecret": "x",
        "outboundIntegrationId": "x",
        "outboundConnectedAt": "x",
        "whatsNextCompletedAt": "x",
        "useFromAddressOverride": true,
        "fromAddressOverride": "x",
        "emailSlugPrefix": "x",
        "externalEnvironmentId": "x",
        "externalVaultId": "x",
        "externalWorkspaceId": "x"
      },
      "configurations": {
        "inboundWebhookEnabled": true,
        "inboundWebhookSigningKey": "x",
        "payloadSchema": "x"
      },
      "active": true,
      "deleted": true,
      "deletedAt": "x",
      "deletedBy": "x",
      "primary": true,
      "conditions": [
        {
          "isNegated": true,
          "type": "BOOLEAN",
          "value": "AND",
          "children": [
            {
              "field": "x",
              "on": "subscriber",
              "operator": "LARGER",
              "value": "x"
            }
          ]
        }
      ],
      "rules": {
        "==": [
          {
            "var": "context.tenant.id"
          },
          "acme"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration_response_dto",
    "accessor": "IntegrationResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations/{integrationId}/set-primary",
    "action": "set-primary",
    "args": [
      {
        "name": "id",
        "wire": "integrationId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "_environmentId": "x",
      "_organizationId": "x",
      "name": "x",
      "identifier": "x",
      "providerId": "x",
      "channel": "in_app",
      "kind": "delivery",
      "credentials": {
        "apiKey": "x",
        "user": "x",
        "secretKey": "x",
        "hmacSecretKeyEncoding": "text",
        "domain": "x",
        "password": "x",
        "host": "x",
        "port": "x",
        "secure": true,
        "region": "x",
        "accountSid": "x",
        "messageProfileId": "x",
        "token": "x",
        "from": "x",
        "senderName": "x",
        "projectName": "x",
        "applicationId": "x",
        "clientId": "x",
        "requireTls": true,
        "ignoreTls": true,
        "tlsOptions": {},
        "baseUrl": "x",
        "webhookUrl": "x",
        "redirectUrl": "x",
        "hmac": true,
        "serviceAccount": "x",
        "ipPoolName": "x",
        "configurationSetName": "x",
        "apiKeyRequestHeader": "x",
        "secretKeyRequestHeader": "x",
        "idPath": "x",
        "datePath": "x",
        "apiToken": "x",
        "authenticateByToken": true,
        "authenticationTokenKey": "x",
        "instanceId": "x",
        "alertUid": "x",
        "title": "x",
        "imageUrl": "x",
        "state": "x",
        "externalLink": "x",
        "channelId": "x",
        "phoneNumberIdentification": "x",
        "accessKey": "x",
        "appSid": "x",
        "senderId": "x",
        "tenantId": "x",
        "AppIOBaseUrl": "x",
        "signingSecret": "x",
        "outboundIntegrationId": "x",
        "outboundConnectedAt": "x",
        "whatsNextCompletedAt": "x",
        "useFromAddressOverride": true,
        "fromAddressOverride": "x",
        "emailSlugPrefix": "x",
        "externalEnvironmentId": "x",
        "externalVaultId": "x",
        "externalWorkspaceId": "x"
      },
      "configurations": {
        "inboundWebhookEnabled": true,
        "inboundWebhookSigningKey": "x",
        "payloadSchema": "x"
      },
      "active": true,
      "deleted": true,
      "deletedAt": "x",
      "deletedBy": "x",
      "primary": true,
      "conditions": [
        {
          "isNegated": true,
          "type": "BOOLEAN",
          "value": "AND",
          "children": [
            {
              "field": "x",
              "on": "subscriber",
              "operator": "LARGER",
              "value": "x"
            }
          ]
        }
      ],
      "rules": {
        "==": [
          {
            "var": "context.tenant.id"
          },
          "acme"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration_response_dto",
    "accessor": "IntegrationResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/integrations/active",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "_id": "x",
        "_environmentId": "x",
        "_organizationId": "x",
        "name": "x",
        "identifier": "x",
        "providerId": "x",
        "channel": "in_app",
        "kind": "delivery",
        "credentials": {
          "apiKey": "x",
          "user": "x",
          "secretKey": "x",
          "hmacSecretKeyEncoding": "text",
          "domain": "x",
          "password": "x",
          "host": "x",
          "port": "x",
          "secure": true,
          "region": "x",
          "accountSid": "x",
          "messageProfileId": "x",
          "token": "x",
          "from": "x",
          "senderName": "x",
          "projectName": "x",
          "applicationId": "x",
          "clientId": "x",
          "requireTls": true,
          "ignoreTls": true,
          "tlsOptions": {},
          "baseUrl": "x",
          "webhookUrl": "x",
          "redirectUrl": "x",
          "hmac": true,
          "serviceAccount": "x",
          "ipPoolName": "x",
          "configurationSetName": "x",
          "apiKeyRequestHeader": "x",
          "secretKeyRequestHeader": "x",
          "idPath": "x",
          "datePath": "x",
          "apiToken": "x",
          "authenticateByToken": true,
          "authenticationTokenKey": "x",
          "instanceId": "x",
          "alertUid": "x",
          "title": "x",
          "imageUrl": "x",
          "state": "x",
          "externalLink": "x",
          "channelId": "x",
          "phoneNumberIdentification": "x",
          "accessKey": "x",
          "appSid": "x",
          "senderId": "x",
          "tenantId": "x",
          "AppIOBaseUrl": "x",
          "signingSecret": "x",
          "outboundIntegrationId": "x",
          "outboundConnectedAt": "x",
          "whatsNextCompletedAt": "x",
          "useFromAddressOverride": true,
          "fromAddressOverride": "x",
          "emailSlugPrefix": "x",
          "externalEnvironmentId": "x",
          "externalVaultId": "x",
          "externalWorkspaceId": "x"
        },
        "configurations": {
          "inboundWebhookEnabled": true,
          "inboundWebhookSigningKey": "x",
          "payloadSchema": "x"
        },
        "active": true,
        "deleted": true,
        "deletedAt": "x",
        "deletedBy": "x",
        "primary": true,
        "conditions": [
          {
            "isNegated": true,
            "type": "BOOLEAN",
            "value": "AND",
            "children": [
              {
                "field": "x",
                "on": "subscriber",
                "operator": "LARGER",
                "value": "x"
              }
            ]
          }
        ],
        "rules": {
          "==": [
            {
              "var": "context.tenant.id"
            },
            "acme"
          ]
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "create",
    "method": "POST",
    "path": "/v2/layouts/{layoutId}/preview",
    "action": "preview",
    "args": [
      {
        "name": "id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "previewPayloadExample": {
        "subscriber": {
          "_id": "x",
          "firstName": "x",
          "lastName": "x",
          "email": "x",
          "phone": "x",
          "avatar": "x",
          "locale": "x",
          "channels": [
            {}
          ],
          "topics": [
            "x"
          ],
          "isOnline": true,
          "lastOnlineAt": "x",
          "__v": 1,
          "data": {},
          "timezone": "x"
        }
      },
      "schema": {},
      "result": {
        "type": "email",
        "preview": {
          "body": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "create",
    "method": "POST",
    "path": "/v2/layouts",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "layoutId": "x",
      "slug": "x",
      "name": "x",
      "isDefault": true,
      "isTranslationEnabled": true,
      "updatedAt": "x",
      "updatedBy": {
        "_id": "x",
        "externalId": "x",
        "firstName": "x",
        "lastName": "x"
      },
      "createdAt": "x",
      "origin": "novu-cloud",
      "type": "REGULAR",
      "variables": {},
      "controls": {
        "dataSchema": {},
        "uiSchema": {
          "group": "IN_APP",
          "properties": {}
        },
        "values": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "list",
    "method": "GET",
    "path": "/v2/layouts",
    "args": [],
    "select": {
      "limit": 10,
      "offset": 0,
      "order_by": "v1",
      "order_direction": "v1",
      "query": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "limit",
      "offset",
      "orderDirection",
      "orderBy",
      "query"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "layouts": [
        {
          "_id": "x",
          "controls": {
            "dataSchema": {},
            "uiSchema": {},
            "values": {}
          },
          "createdAt": "x",
          "isDefault": true,
          "isTranslationEnabled": true,
          "layoutId": "x",
          "name": "x",
          "origin": "novu-cloud",
          "slug": "x",
          "type": "REGULAR",
          "updatedAt": "x",
          "updatedBy": {
            "_id": "x",
            "externalId": "x",
            "firstName": "x",
            "lastName": "x"
          },
          "variables": {}
        }
      ],
      "totalCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "load",
    "method": "GET",
    "path": "/v2/layouts/{layoutId}",
    "args": [
      {
        "name": "id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "layoutId": "x",
      "slug": "x",
      "name": "x",
      "isDefault": true,
      "isTranslationEnabled": true,
      "updatedAt": "x",
      "updatedBy": {
        "_id": "x",
        "externalId": "x",
        "firstName": "x",
        "lastName": "x"
      },
      "createdAt": "x",
      "origin": "novu-cloud",
      "type": "REGULAR",
      "variables": {},
      "controls": {
        "dataSchema": {},
        "uiSchema": {
          "group": "IN_APP",
          "properties": {}
        },
        "values": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/layouts/{layoutId}",
    "args": [
      {
        "name": "id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "layout",
    "accessor": "Layout",
    "op": "update",
    "method": "PUT",
    "path": "/v2/layouts/{layoutId}",
    "args": [
      {
        "name": "id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "layoutId": "x",
      "slug": "x",
      "name": "x",
      "isDefault": true,
      "isTranslationEnabled": true,
      "updatedAt": "x",
      "updatedBy": {
        "_id": "x",
        "externalId": "x",
        "firstName": "x",
        "lastName": "x"
      },
      "createdAt": "x",
      "origin": "novu-cloud",
      "type": "REGULAR",
      "variables": {},
      "controls": {
        "dataSchema": {},
        "uiSchema": {
          "group": "IN_APP",
          "properties": {}
        },
        "values": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "layout_response_dto",
    "accessor": "LayoutResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v2/layouts/{layoutId}/duplicate",
    "action": "duplicate",
    "args": [
      {
        "name": "id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "layoutId": "x",
      "slug": "x",
      "name": "x",
      "isDefault": true,
      "isTranslationEnabled": true,
      "updatedAt": "x",
      "updatedBy": {
        "_id": "x",
        "externalId": "x",
        "firstName": "x",
        "lastName": "x"
      },
      "createdAt": "x",
      "origin": "novu-cloud",
      "type": "REGULAR",
      "variables": {},
      "controls": {
        "dataSchema": {},
        "uiSchema": {
          "group": "IN_APP",
          "properties": {}
        },
        "values": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "link",
    "accessor": "Link",
    "op": "create",
    "method": "POST",
    "path": "/v1/integrations/channel-endpoints/link",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "https://t.me/MyBot?start=AbCdEfGhIjKlMnOpQrStUvWxYz012345",
      "providerMetadata": {
        "botUsername": "MyBot",
        "expiresAt": "2026-06-23T12:00:00.000Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "list_agent_integrations_response_dto",
    "accessor": "ListAgentIntegrationsResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/agents/{identifier}/integrations",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "include_cursor": "v1",
      "integration_identifier": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "integrationIdentifier"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_agentId": "x",
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "connectedAt": {},
          "createdAt": "x",
          "exceedsPlanLimit": true,
          "integration": {
            "_id": "x",
            "active": true,
            "channel": "in_app",
            "defaultSenderName": "x",
            "identifier": "x",
            "name": "x",
            "providerId": "x",
            "sharedInboundAddress": "x",
            "sharedInboxDisabled": true
          },
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true,
      "planUsage": {
        "limit": 1,
        "used": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "list_domain_routes_response_dto",
    "accessor": "ListDomainRoutesResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/domains/{domain}/routes",
    "args": [
      {
        "name": "domain_id",
        "wire": "domain",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "agent_id": "v1",
      "before": "v1",
      "include_cursor": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "agentId"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_domainId": "x",
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "address": "x",
          "agentId": "x",
          "createdAt": "x",
          "data": {},
          "type": "agent",
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "list_topic_subscriptions_response_dto",
    "accessor": "ListTopicSubscriptionsResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/subscribers/{subscriberId}/subscriptions",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "context_key": "v1",
      "include_cursor": "v1",
      "key": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "key",
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_id": "64da692e9a94fb2e6449ad08",
          "contextKeys": [
            "tenant:org-a",
            "project:proj-123"
          ],
          "createdAt": "2021-01-01T00:00:00.000Z",
          "identifier": "tk=product-updates:si=subscriber-123",
          "preferences": [
            {
              "condition": {
                "and": [
                  {
                    "===": [
                      null,
                      "premium"
                    ]
                  }
                ]
              },
              "enabled": true,
              "subscriptionId": "64f5e95d3d7946d80d0cb679",
              "workflow": {}
            }
          ],
          "subscriber": {
            "_id": "64da692e9a94fb2e6449ad07",
            "avatar": "https://example.com/avatar.png",
            "email": "john@example.com",
            "firstName": "John",
            "lastName": "Doe",
            "subscriberId": "user-123"
          },
          "topic": {
            "_id": "64da692e9a94fb2e6449ad06",
            "createdAt": "2023-08-15T00:00:00.000Z",
            "data": {
              "category": "product",
              "priority": 1
            },
            "key": "product-updates",
            "name": "Product Updates",
            "updatedAt": "2023-08-15T00:00:00.000Z"
          }
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "list_topic_subscriptions_response_dto",
    "accessor": "ListTopicSubscriptionsResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/topics/{topicKey}/subscriptions",
    "args": [
      {
        "name": "topic_key",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "context_key": "v1",
      "include_cursor": "v1",
      "limit": 10,
      "order_by": "v1",
      "order_direction": "v1",
      "subscriber_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "subscriberId",
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_id": "64da692e9a94fb2e6449ad08",
          "contextKeys": [
            "tenant:org-a",
            "project:proj-123"
          ],
          "createdAt": "2021-01-01T00:00:00.000Z",
          "identifier": "tk=product-updates:si=subscriber-123",
          "preferences": [
            {
              "condition": {
                "and": [
                  {
                    "===": [
                      null,
                      "premium"
                    ]
                  }
                ]
              },
              "enabled": true,
              "subscriptionId": "64f5e95d3d7946d80d0cb679",
              "workflow": {}
            }
          ],
          "subscriber": {
            "_id": "64da692e9a94fb2e6449ad07",
            "avatar": "https://example.com/avatar.png",
            "email": "john@example.com",
            "firstName": "John",
            "lastName": "Doe",
            "subscriberId": "user-123"
          },
          "topic": {
            "_id": "64da692e9a94fb2e6449ad06",
            "createdAt": "2023-08-15T00:00:00.000Z",
            "data": {
              "category": "product",
              "priority": 1
            },
            "key": "product-updates",
            "name": "Product Updates",
            "updatedAt": "2023-08-15T00:00:00.000Z"
          }
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "master_json",
    "accessor": "MasterJson",
    "op": "load",
    "method": "GET",
    "path": "/v2/translations/master-json",
    "args": [],
    "select": {
      "locale": "en_US"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "locale"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflows": {
        "password-reset": {
          "reset.message": "Click the link to reset",
          "reset.title": "Reset your password"
        },
        "welcome-email": {
          "welcome.message": "Hello there!",
          "welcome.title": "Welcome to our platform"
        }
      },
      "layouts": {
        "default-layout": {
          "layout.message": "Hello there!",
          "layout.title": "Default layout"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "message",
    "accessor": "Message",
    "op": "list",
    "method": "GET",
    "path": "/v1/messages",
    "args": [],
    "select": {
      "channel": "v1",
      "context_key": "v1",
      "limit": "v1",
      "page": "v1",
      "subscriber_id": "v1",
      "transaction_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "channel",
      "subscriberId",
      "transactionId",
      "contextKeys",
      "page",
      "limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "totalCount": 1,
      "hasMore": true,
      "data": [
        {
          "_environmentId": "x",
          "_feedId": "x",
          "_id": "x",
          "_messageTemplateId": "x",
          "_notificationId": "x",
          "_organizationId": "x",
          "_subscriberId": "x",
          "_templateId": "x",
          "channel": "in_app",
          "content": [
            {
              "content": "x",
              "styles": {},
              "type": "button",
              "url": "x"
            }
          ],
          "contextKeys": [
            "tenant:org-123",
            "region:us-east-1"
          ],
          "createdAt": "x",
          "cta": {
            "action": {},
            "data": {},
            "type": "redirect"
          },
          "deliveredAt": [
            "x"
          ],
          "deviceTokens": [
            "x"
          ],
          "directWebhookUrl": "x",
          "email": "x",
          "errorId": "x",
          "errorText": "x",
          "lastReadDate": "x",
          "lastSeenDate": "x",
          "overrides": {},
          "payload": {},
          "phone": "x",
          "providerId": "x",
          "read": true,
          "seen": true,
          "snoozedUntil": "x",
          "status": "sent",
          "subject": "x",
          "subscriber": {
            "__v": 1,
            "_environmentId": "x",
            "_id": "x",
            "_organizationId": "x",
            "avatar": "x",
            "channels": [
              {}
            ],
            "createdAt": "x",
            "data": {},
            "deleted": true,
            "email": "x",
            "firstName": "x",
            "isOnline": true,
            "lastName": "x",
            "lastOnlineAt": "x",
            "locale": "x",
            "phone": "x",
            "subscriberId": "x",
            "timezone": "x",
            "topics": [
              "x"
            ],
            "updatedAt": "x"
          },
          "template": {
            "_creatorId": "x",
            "_environmentId": "x",
            "_id": "x",
            "_notificationGroupId": "x",
            "_organizationId": "x",
            "_parentId": "x",
            "active": true,
            "critical": true,
            "data": {},
            "deleted": true,
            "deletedAt": "x",
            "deletedBy": "x",
            "description": "x",
            "draft": true,
            "name": "x",
            "notificationGroup": {
              "_environmentId": "x",
              "_id": "x",
              "_organizationId": "x",
              "_parentId": "x",
              "name": "x"
            },
            "preferenceSettings": {
              "chat": false,
              "email": true,
              "in_app": true,
              "push": true,
              "sms": false,
              "tool": true
            },
            "steps": [
              {}
            ],
            "tags": [
              "x"
            ],
            "triggers": [
              {}
            ],
            "workflowIntegrationStatus": {}
          },
          "templateIdentifier": "x",
          "title": "x",
          "transactionId": "x"
        }
      ],
      "pageSize": 1,
      "page": 1
    },
    "idField": "id"
  },
  {
    "entity": "message",
    "accessor": "Message",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/messages/transaction/{transactionId}",
    "args": [
      {
        "name": "transaction_id",
        "wire": "transactionId",
        "value": "507f1f77bcf86cd799439011"
      }
    ],
    "select": {
      "channel": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "channel"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "message",
    "accessor": "Message",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/messages/{messageId}",
    "args": [
      {
        "name": "id",
        "wire": "messageId",
        "value": "507f1f77bcf86cd799439011"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "acknowledged": true,
      "status": "deleted"
    },
    "idField": "id"
  },
  {
    "entity": "message_response_dto",
    "accessor": "MessageResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/subscribers/{subscriberId}/messages/{messageId}/actions/{type}",
    "args": [
      {
        "name": "message_id",
        "wire": "messageId",
        "value": "p1"
      },
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p2"
      },
      {
        "name": "type",
        "wire": "type",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "_templateId": "x",
      "_environmentId": "x",
      "_messageTemplateId": "x",
      "_organizationId": "x",
      "_notificationId": "x",
      "_subscriberId": "x",
      "subscriber": {
        "__v": 1,
        "_environmentId": "x",
        "_id": "x",
        "_organizationId": "x",
        "avatar": "x",
        "channels": [
          {
            "_integrationId": "x",
            "credentials": {},
            "integrationIdentifier": "x",
            "providerId": "slack"
          }
        ],
        "createdAt": "x",
        "data": {},
        "deleted": true,
        "email": "x",
        "firstName": "x",
        "isOnline": true,
        "lastName": "x",
        "lastOnlineAt": "x",
        "locale": "x",
        "phone": "x",
        "subscriberId": "x",
        "timezone": "x",
        "topics": [
          "x"
        ],
        "updatedAt": "x"
      },
      "template": {
        "_creatorId": "x",
        "_environmentId": "x",
        "_id": "x",
        "_notificationGroupId": "x",
        "_organizationId": "x",
        "_parentId": "x",
        "active": true,
        "critical": true,
        "data": {},
        "deleted": true,
        "deletedAt": "x",
        "deletedBy": "x",
        "description": "x",
        "draft": true,
        "name": "x",
        "notificationGroup": {
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "_parentId": "x",
          "name": "x"
        },
        "preferenceSettings": {
          "chat": false,
          "email": true,
          "in_app": true,
          "push": true,
          "sms": false,
          "tool": true
        },
        "steps": [
          {
            "_id": "x",
            "_parentId": "x",
            "_templateId": "x",
            "active": true,
            "filters": [
              {}
            ],
            "metadata": {},
            "name": "x",
            "replyCallback": {},
            "shouldStopOnFail": true,
            "template": {},
            "uuid": "x",
            "variants": [
              {}
            ]
          }
        ],
        "tags": [
          "x"
        ],
        "triggers": [
          {
            "identifier": "x",
            "subscriberVariables": [
              {}
            ],
            "type": "event",
            "variables": [
              {}
            ]
          }
        ],
        "workflowIntegrationStatus": {}
      },
      "templateIdentifier": "x",
      "createdAt": "x",
      "deliveredAt": [
        "x"
      ],
      "lastSeenDate": "x",
      "lastReadDate": "x",
      "content": [
        {
          "content": "x",
          "styles": {
            "textAlign": "center"
          },
          "type": "button",
          "url": "x"
        }
      ],
      "transactionId": "x",
      "subject": "x",
      "channel": "in_app",
      "read": true,
      "seen": true,
      "snoozedUntil": "x",
      "email": "x",
      "phone": "x",
      "directWebhookUrl": "x",
      "providerId": "x",
      "deviceTokens": [
        "x"
      ],
      "title": "x",
      "cta": {
        "action": {
          "buttons": [
            {}
          ],
          "result": {},
          "status": "pending"
        },
        "data": {
          "url": "x"
        },
        "type": "redirect"
      },
      "_feedId": "x",
      "status": "sent",
      "errorId": "x",
      "errorText": "x",
      "payload": {},
      "overrides": {},
      "contextKeys": [
        "tenant:org-123",
        "region:us-east-1"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "message_response_dto",
    "accessor": "MessageResponseDto",
    "op": "create",
    "method": "POST",
    "path": "/v1/subscribers/{subscriberId}/messages/mark-as",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": [
      {
        "_id": "x",
        "_templateId": "x",
        "_environmentId": "x",
        "_messageTemplateId": "x",
        "_organizationId": "x",
        "_notificationId": "x",
        "_subscriberId": "x",
        "subscriber": {
          "__v": 1,
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "avatar": "x",
          "channels": [
            {
              "_integrationId": "x",
              "credentials": {},
              "integrationIdentifier": "x",
              "providerId": "slack"
            }
          ],
          "createdAt": "x",
          "data": {},
          "deleted": true,
          "email": "x",
          "firstName": "x",
          "isOnline": true,
          "lastName": "x",
          "lastOnlineAt": "x",
          "locale": "x",
          "phone": "x",
          "subscriberId": "x",
          "timezone": "x",
          "topics": [
            "x"
          ],
          "updatedAt": "x"
        },
        "template": {
          "_creatorId": "x",
          "_environmentId": "x",
          "_id": "x",
          "_notificationGroupId": "x",
          "_organizationId": "x",
          "_parentId": "x",
          "active": true,
          "critical": true,
          "data": {},
          "deleted": true,
          "deletedAt": "x",
          "deletedBy": "x",
          "description": "x",
          "draft": true,
          "name": "x",
          "notificationGroup": {
            "_environmentId": "x",
            "_id": "x",
            "_organizationId": "x",
            "_parentId": "x",
            "name": "x"
          },
          "preferenceSettings": {
            "chat": false,
            "email": true,
            "in_app": true,
            "push": true,
            "sms": false,
            "tool": true
          },
          "steps": [
            {
              "_id": "x",
              "_parentId": "x",
              "_templateId": "x",
              "active": true,
              "filters": [],
              "name": "x",
              "replyCallback": {},
              "shouldStopOnFail": true,
              "template": {},
              "uuid": "x",
              "variants": []
            }
          ],
          "tags": [
            "x"
          ],
          "triggers": [
            {
              "identifier": "x",
              "subscriberVariables": [],
              "type": "event",
              "variables": []
            }
          ],
          "workflowIntegrationStatus": {}
        },
        "templateIdentifier": "x",
        "createdAt": "x",
        "deliveredAt": [
          "x"
        ],
        "lastSeenDate": "x",
        "lastReadDate": "x",
        "content": [
          {
            "content": "x",
            "styles": {},
            "type": "button",
            "url": "x"
          }
        ],
        "transactionId": "x",
        "subject": "x",
        "channel": "in_app",
        "read": true,
        "seen": true,
        "snoozedUntil": "x",
        "email": "x",
        "phone": "x",
        "directWebhookUrl": "x",
        "providerId": "x",
        "deviceTokens": [
          "x"
        ],
        "title": "x",
        "cta": {
          "action": {
            "buttons": [],
            "result": {},
            "status": "pending"
          },
          "data": {
            "url": "x"
          },
          "type": "redirect"
        },
        "_feedId": "x",
        "status": "sent",
        "errorId": "x",
        "errorText": "x",
        "payload": {},
        "overrides": {},
        "contextKeys": [
          "tenant:org-123",
          "region:us-east-1"
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "notification_feed_item_dto",
    "accessor": "NotificationFeedItemDto",
    "op": "list",
    "method": "GET",
    "path": "/v1/subscribers/{subscriberId}/notifications/feed",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "limit": 10,
      "page": 0,
      "payload": "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
      "read": "v1",
      "seen": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "page",
      "limit",
      "read",
      "seen",
      "payload"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "totalCount": 5,
      "hasMore": true,
      "data": [
        {
          "_environmentId": "env_67890",
          "_feedId": "feed_445566",
          "_id": "615c1f2f9b0c5b001f8e4e3b",
          "_jobId": "job_778899",
          "_messageTemplateId": "message_template_54321",
          "_notificationId": "notification_123456",
          "_organizationId": "org_98765",
          "_subscriberId": "subscriber_112233",
          "_templateId": "template_12345",
          "actor": {
            "data": null,
            "type": "none"
          },
          "archived": false,
          "channel": "in_app",
          "content": "This is a test notification content.",
          "createdAt": "2024-12-10T10:10:59.639Z",
          "cta": {
            "action": {},
            "data": {},
            "type": "redirect"
          },
          "data": {
            "key": "value"
          },
          "deviceTokens": [
            "token1",
            "token2"
          ],
          "overrides": {
            "overrideKey": "overrideValue"
          },
          "payload": {
            "key": "value"
          },
          "providerId": "provider_xyz",
          "read": false,
          "seen": true,
          "status": "sent",
          "subject": "Test Notification Subject",
          "subscriber": {
            "_id": "x",
            "avatar": "x",
            "firstName": "x",
            "lastName": "x",
            "subscriberId": "x"
          },
          "tags": [
            "tag1",
            "tag2"
          ],
          "templateIdentifier": "template_abcdef",
          "transactionId": "transaction_123456",
          "updatedAt": "2024-12-10T10:10:59.639Z"
        }
      ],
      "pageSize": 2,
      "page": 1
    },
    "idField": "id"
  },
  {
    "entity": "preferences_response_dto",
    "accessor": "PreferencesResponseDto",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/subscribers/{subscriberId}/preferences/bulk",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "level": "global",
        "workflow": {
          "id": "64a1b2c3d4e5f6g7h8i9j0k1",
          "identifier": "welcome-email",
          "name": "Welcome Email Workflow",
          "critical": false,
          "tags": [
            "user-onboarding",
            "email"
          ],
          "data": {
            "category": "onboarding",
            "priority": "high"
          },
          "severity": "high"
        },
        "enabled": true,
        "channels": {
          "email": true,
          "sms": false,
          "in_app": true,
          "chat": false,
          "push": true,
          "tool": true
        },
        "condition": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "publish",
    "accessor": "Publish",
    "op": "create",
    "method": "POST",
    "path": "/v2/environments/{targetEnvironmentId}/publish",
    "args": [
      {
        "name": "environment_id",
        "wire": "targetEnvironmentId",
        "value": "6615943e7ace93b0540ae377"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "results": [
        {
          "resourceType": "REGULAR",
          "successful": [
            {
              "resourceType": "REGULAR",
              "resourceId": "x",
              "resourceName": "x",
              "action": "created"
            }
          ],
          "failed": [
            {
              "resourceType": "REGULAR",
              "resourceId": "x",
              "resourceName": "x",
              "error": "x",
              "stack": "x"
            }
          ],
          "skipped": [
            {
              "resourceType": "REGULAR",
              "resourceId": "x",
              "resourceName": "x",
              "reason": "x"
            }
          ],
          "totalProcessed": 1
        }
      ],
      "summary": {
        "resources": 1,
        "successful": 1,
        "failed": 1,
        "skipped": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "remove_subscriber_response_dto",
    "accessor": "RemoveSubscriberResponseDto",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/subscribers/{subscriberId}",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "acknowledged": true,
      "status": "success"
    },
    "idField": "id"
  },
  {
    "entity": "step",
    "accessor": "Step",
    "op": "load",
    "method": "GET",
    "path": "/v2/workflows/{workflowId}/steps/{stepId}",
    "args": [
      {
        "name": "id",
        "wire": "stepId",
        "value": "p1"
      },
      {
        "name": "workflow_id",
        "wire": "workflowId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "controls": {
        "dataSchema": {},
        "uiSchema": {
          "group": "IN_APP",
          "properties": {}
        },
        "values": {}
      },
      "controlValues": {},
      "providerOverrides": {
        "slack": {
          "text": "{{payload.title}}",
          "blocks": [
            {
              "type": "divider"
            }
          ]
        },
        "whatsapp-business": {
          "type": "text",
          "text": {
            "body": "{{payload.title}}"
          }
        },
        "pagerduty": {
          "severity": "warning",
          "source": "novu",
          "summary": "{{payload.title}}"
        }
      },
      "variables": {},
      "stepId": "x",
      "_id": "x",
      "name": "x",
      "slug": "x",
      "type": "in_app",
      "origin": "novu-cloud",
      "workflowId": "x",
      "workflowDatabaseId": "x",
      "issues": {
        "controls": {},
        "integration": {}
      },
      "stepResolverHash": "x"
    },
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers",
    "args": [],
    "select": {
      "fail_if_exist": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "failIfExists"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "_id": "x",
      "firstName": "x",
      "lastName": "x",
      "email": "x",
      "phone": "x",
      "avatar": "x",
      "locale": "x",
      "channels": [
        {
          "_integrationId": "x",
          "credentials": {
            "alertUid": "12345-abcde",
            "channel": "general",
            "deviceTokens": [
              "token1",
              "token2",
              "token3"
            ],
            "externalUrl": "https://example.com/details",
            "imageUrl": "https://example.com/image.png",
            "state": "resolved",
            "title": "Critical Alert",
            "webhookUrl": "https://example.com/webhook"
          },
          "integrationIdentifier": "x",
          "providerId": "slack"
        }
      ],
      "topics": [
        "x"
      ],
      "isOnline": true,
      "lastOnlineAt": "x",
      "__v": 1,
      "data": {},
      "timezone": "x",
      "subscriberId": "x",
      "_organizationId": "x",
      "_environmentId": "x",
      "deleted": true,
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v1/subscribers/{subscriberId}/messages/mark-all",
    "action": "message_mark_all",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": 1,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers/{subscriberId}/notifications/archive",
    "action": "notification_archive",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers/{subscriberId}/notifications/delete",
    "action": "notification_delete",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers/{subscriberId}/notifications/read",
    "action": "notification_read",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers/{subscriberId}/notifications/read-archive",
    "action": "notification_read_archive",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "create",
    "method": "POST",
    "path": "/v2/subscribers/{subscriberId}/notifications/seen",
    "action": "notification_seen",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "list",
    "method": "GET",
    "path": "/v2/subscribers",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "email": "v1",
      "include_cursor": "v1",
      "limit": 10,
      "name": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "phone": "v1",
      "subscriber_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "email",
      "name",
      "phone",
      "subscriberId"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "__v": 1,
          "_environmentId": "x",
          "_id": "x",
          "_organizationId": "x",
          "avatar": "x",
          "channels": [
            {
              "_integrationId": "x",
              "credentials": {},
              "integrationIdentifier": "x",
              "providerId": "slack"
            }
          ],
          "createdAt": "x",
          "data": {},
          "deleted": true,
          "email": "x",
          "firstName": "x",
          "isOnline": true,
          "lastName": "x",
          "lastOnlineAt": "x",
          "locale": "x",
          "phone": "x",
          "subscriberId": "x",
          "timezone": "x",
          "topics": [
            "x"
          ],
          "updatedAt": "x"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "load",
    "method": "GET",
    "path": "/v2/subscribers/{subscriberId}",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "firstName": "x",
      "lastName": "x",
      "email": "x",
      "phone": "x",
      "avatar": "x",
      "locale": "x",
      "channels": [
        {
          "_integrationId": "x",
          "credentials": {
            "alertUid": "12345-abcde",
            "channel": "general",
            "deviceTokens": [
              "token1",
              "token2",
              "token3"
            ],
            "externalUrl": "https://example.com/details",
            "imageUrl": "https://example.com/image.png",
            "state": "resolved",
            "title": "Critical Alert",
            "webhookUrl": "https://example.com/webhook"
          },
          "integrationIdentifier": "x",
          "providerId": "slack"
        }
      ],
      "topics": [
        "x"
      ],
      "isOnline": true,
      "lastOnlineAt": "x",
      "__v": 1,
      "data": {},
      "timezone": "x",
      "subscriberId": "x",
      "_organizationId": "x",
      "_environmentId": "x",
      "deleted": true,
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/subscribers/{subscriberId}/notifications/{notificationId}",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      },
      {
        "name": "notification_id",
        "wire": "notificationId",
        "value": "p2"
      }
    ],
    "select": {
      "context_key": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/subscribers/{subscriberId}/credentials/{providerId}",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      },
      {
        "name": "provider_id",
        "wire": "providerId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscriber",
    "accessor": "Subscriber",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/subscribers/{subscriberId}",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "firstName": "x",
      "lastName": "x",
      "email": "x",
      "phone": "x",
      "avatar": "x",
      "locale": "x",
      "channels": [
        {
          "_integrationId": "x",
          "credentials": {
            "alertUid": "12345-abcde",
            "channel": "general",
            "deviceTokens": [
              "token1",
              "token2",
              "token3"
            ],
            "externalUrl": "https://example.com/details",
            "imageUrl": "https://example.com/image.png",
            "state": "resolved",
            "title": "Critical Alert",
            "webhookUrl": "https://example.com/webhook"
          },
          "integrationIdentifier": "x",
          "providerId": "slack"
        }
      ],
      "topics": [
        "x"
      ],
      "isOnline": true,
      "lastOnlineAt": "x",
      "__v": 1,
      "data": {},
      "timezone": "x",
      "subscriberId": "x",
      "_organizationId": "x",
      "_environmentId": "x",
      "deleted": true,
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "subscriber_notifications_count_response_dto",
    "accessor": "SubscriberNotificationsCountResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/subscribers/{subscriberId}/notifications/count",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "filter": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "filters"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "count": 1,
        "filter": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscriber_notifications_response_dto",
    "accessor": "SubscriberNotificationsResponseDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/subscribers/{subscriberId}/notifications",
    "action": "notifications",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "archived": "v1",
      "context_key": "v1",
      "created_gte": "v1",
      "created_lte": "v1",
      "data": "v1",
      "limit": 10,
      "offset": 0,
      "read": "v1",
      "seen": "v1",
      "severity": "v1",
      "snoozed": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "limit",
      "after",
      "offset",
      "read",
      "archived",
      "snoozed",
      "seen",
      "data",
      "severity",
      "createdGte",
      "createdLte",
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "archivedAt": "x",
          "avatar": "x",
          "body": "x",
          "channelType": "in_app",
          "createdAt": "x",
          "data": {},
          "deliveredAt": [
            "x"
          ],
          "firstSeenAt": "x",
          "id": "x",
          "isArchived": true,
          "isRead": true,
          "isSeen": true,
          "isSnoozed": true,
          "primaryAction": {
            "isCompleted": true,
            "label": "x",
            "redirect": {}
          },
          "readAt": "x",
          "redirect": {
            "target": "_self",
            "url": "x"
          },
          "secondaryAction": {
            "isCompleted": true,
            "label": "x",
            "redirect": {}
          },
          "severity": "high",
          "snoozedUntil": "x",
          "subject": "x",
          "tags": [
            "x"
          ],
          "to": {
            "avatar": "x",
            "firstName": "x",
            "id": "x",
            "lastName": "x",
            "subscriberId": "x"
          },
          "transactionId": "x",
          "workflow": {
            "critical": true,
            "data": {},
            "id": "x",
            "identifier": "x",
            "name": "x",
            "severity": "high",
            "tags": [
              "x"
            ]
          }
        }
      ],
      "hasMore": true,
      "filter": {}
    },
    "idField": "id"
  },
  {
    "entity": "subscriber_preferences_dto",
    "accessor": "SubscriberPreferencesDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/subscribers/{subscriberId}/preferences",
    "action": "preferences",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "context_key": "v1",
      "criticality": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "criticality",
      "contextKeys"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "global": {
        "channels": {
          "chat": false,
          "email": true,
          "in_app": true,
          "push": true,
          "sms": false,
          "tool": true
        },
        "enabled": true,
        "schedule": {
          "isEnabled": true,
          "weeklySchedule": {
            "friday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "monday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "saturday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "sunday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "thursday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "tuesday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "wednesday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            }
          }
        }
      },
      "workflows": [
        {
          "channels": {
            "chat": false,
            "email": true,
            "in_app": true,
            "push": true,
            "sms": false,
            "tool": true
          },
          "enabled": true,
          "overrides": [
            {
              "channel": "in_app",
              "source": "subscriber"
            }
          ],
          "updatedAt": "x",
          "workflow": {
            "identifier": "x",
            "name": "x",
            "slug": "x",
            "updatedAt": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscriber_preferences_dto",
    "accessor": "SubscriberPreferencesDto",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/subscribers/{subscriberId}/preferences",
    "action": "preferences",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "global": {
        "channels": {
          "chat": false,
          "email": true,
          "in_app": true,
          "push": true,
          "sms": false,
          "tool": true
        },
        "enabled": true,
        "schedule": {
          "isEnabled": true,
          "weeklySchedule": {
            "friday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "monday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "saturday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "sunday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "thursday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "tuesday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            },
            "wednesday": {
              "hours": [
                {
                  "end": "05:00 PM",
                  "start": "09:00 AM"
                }
              ],
              "isEnabled": true
            }
          }
        }
      },
      "workflows": [
        {
          "channels": {
            "chat": false,
            "email": true,
            "in_app": true,
            "push": true,
            "sms": false,
            "tool": true
          },
          "enabled": true,
          "overrides": [
            {
              "channel": "in_app",
              "source": "subscriber"
            }
          ],
          "updatedAt": "x",
          "workflow": {
            "identifier": "x",
            "name": "x",
            "slug": "x",
            "updatedAt": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscriber_response_dto",
    "accessor": "SubscriberResponseDto",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/subscribers/{subscriberId}/online-status",
    "action": "online-status",
    "args": [
      {
        "name": "id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "x",
      "firstName": "x",
      "lastName": "x",
      "email": "x",
      "phone": "x",
      "avatar": "x",
      "locale": "x",
      "channels": [
        {
          "_integrationId": "x",
          "credentials": {
            "alertUid": "12345-abcde",
            "channel": "general",
            "deviceTokens": [
              "token1",
              "token2",
              "token3"
            ],
            "externalUrl": "https://example.com/details",
            "imageUrl": "https://example.com/image.png",
            "state": "resolved",
            "title": "Critical Alert",
            "webhookUrl": "https://example.com/webhook"
          },
          "integrationIdentifier": "x",
          "providerId": "slack"
        }
      ],
      "topics": [
        "x"
      ],
      "isOnline": true,
      "lastOnlineAt": "x",
      "__v": 1,
      "data": {},
      "timezone": "x",
      "subscriberId": "x",
      "_organizationId": "x",
      "_environmentId": "x",
      "deleted": true,
      "createdAt": "x",
      "updatedAt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "load",
    "method": "GET",
    "path": "/v2/topics/{topicKey}/subscriptions/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      },
      {
        "name": "topic_id",
        "wire": "topicKey",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "64f5e95d3d7946d80d0cb679",
      "identifier": "subscription-identifier",
      "name": "My Subscription",
      "preferences": [
        {
          "subscriptionId": "64f5e95d3d7946d80d0cb679",
          "workflow": {
            "critical": false,
            "data": {
              "category": "onboarding",
              "priority": "high"
            },
            "id": "64a1b2c3d4e5f6g7h8i9j0k1",
            "identifier": "welcome-email",
            "name": "Welcome Email Workflow",
            "severity": "high",
            "tags": [
              "user-onboarding",
              "email"
            ]
          },
          "enabled": true,
          "condition": {
            "and": [
              {
                "===": [
                  {
                    "var": "payload.tier"
                  },
                  "premium"
                ]
              }
            ]
          }
        }
      ],
      "contextKeys": [
        "tenant:org-a",
        "project:proj-123"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/topics/{topicKey}/subscriptions/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      },
      {
        "name": "topic_id",
        "wire": "topicKey",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "64f5e95d3d7946d80d0cb679",
      "identifier": "tk=product-updates:si=subscriber-123",
      "name": "My Subscription",
      "topic": {
        "_id": "64f5e95d3d7946d80d0cb677",
        "key": "product-updates",
        "name": "Product Updates",
        "data": {
          "category": "product",
          "priority": 1
        }
      },
      "subscriber": {
        "_id": "64da692e9a94fb2e6449ad07",
        "subscriberId": "user-123",
        "avatar": "https://example.com/avatar.png",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com"
      },
      "preferences": [
        {
          "subscriptionId": "64f5e95d3d7946d80d0cb679",
          "workflow": {
            "critical": false,
            "data": {
              "category": "onboarding",
              "priority": "high"
            },
            "id": "64a1b2c3d4e5f6g7h8i9j0k1",
            "identifier": "welcome-email",
            "name": "Welcome Email Workflow",
            "severity": "high",
            "tags": [
              "user-onboarding",
              "email"
            ]
          },
          "enabled": true,
          "condition": {
            "and": [
              {
                "===": [
                  {
                    "var": "payload.tier"
                  },
                  "premium"
                ]
              }
            ]
          }
        }
      ],
      "contextKeys": [
        "tenant:org-a",
        "project:proj-123"
      ],
      "createdAt": "2025-04-24T05:40:21Z",
      "updatedAt": "2025-04-24T05:40:21Z"
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "create",
    "method": "POST",
    "path": "/v2/topics",
    "args": [],
    "select": {
      "fail_if_exist": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "failIfExists"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "64da692e9a94fb2e6449ad06",
      "key": "product-updates",
      "name": "Product Updates",
      "data": {
        "category": "product",
        "priority": 1
      },
      "createdAt": "2023-08-15T00:00:00.000Z",
      "updatedAt": "2023-08-15T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "list",
    "method": "GET",
    "path": "/v2/topics",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "include_cursor": "v1",
      "key": "v1",
      "limit": 10,
      "name": "v1",
      "order_by": "v1",
      "order_direction": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "after",
      "before",
      "limit",
      "orderDirection",
      "orderBy",
      "includeCursor",
      "key",
      "name"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_id": "64da692e9a94fb2e6449ad06",
          "createdAt": "2023-08-15T00:00:00.000Z",
          "data": {
            "category": "product",
            "priority": 1
          },
          "key": "product-updates",
          "name": "Product Updates",
          "updatedAt": "2023-08-15T00:00:00.000Z"
        }
      ],
      "next": "x",
      "previous": "x",
      "totalCount": 1,
      "totalCountCapped": true
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "load",
    "method": "GET",
    "path": "/v2/topics/{topicKey}",
    "args": [
      {
        "name": "id",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "64da692e9a94fb2e6449ad06",
      "key": "product-updates",
      "name": "Product Updates",
      "data": {
        "category": "product",
        "priority": 1
      },
      "createdAt": "2023-08-15T00:00:00.000Z",
      "updatedAt": "2023-08-15T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/topics/{topicKey}",
    "args": [
      {
        "name": "id",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "acknowledged": true
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/topics/{topicKey}",
    "args": [
      {
        "name": "id",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_id": "64da692e9a94fb2e6449ad06",
      "key": "product-updates",
      "name": "Product Updates",
      "data": {
        "category": "product",
        "priority": 1
      },
      "createdAt": "2023-08-15T00:00:00.000Z",
      "updatedAt": "2023-08-15T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "topic_subscriber_dto",
    "accessor": "TopicSubscriberDto",
    "op": "load",
    "method": "GET",
    "path": "/v1/topics/{topicKey}/subscribers/{externalSubscriberId}",
    "args": [
      {
        "name": "external_subscriber_id",
        "wire": "externalSubscriberId",
        "value": "p1"
      },
      {
        "name": "topic_id",
        "wire": "topicKey",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_organizationId": "org_123456789",
      "_environmentId": "env_123456789",
      "_subscriberId": "sub_123456789",
      "_topicId": "topic_123456789",
      "topicKey": "my_topic_key",
      "externalSubscriberId": "external_subscriber_123"
    },
    "idField": "id"
  },
  {
    "entity": "topic_subscriptions_response_dto",
    "accessor": "TopicSubscriptionsResponseDto",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/topics/{topicKey}/subscriptions",
    "args": [
      {
        "name": "topic_key",
        "wire": "topicKey",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_id": "64f5e95d3d7946d80d0cb679",
          "identifier": "tk=product-updates:si=subscriber-123",
          "topic": {
            "_id": "64f5e95d3d7946d80d0cb677",
            "key": "product-updates",
            "name": "Product Updates",
            "data": {
              "category": "product",
              "priority": 1
            }
          },
          "subscriber": {
            "_id": "64da692e9a94fb2e6449ad07",
            "subscriberId": "user-123",
            "avatar": "https://example.com/avatar.png",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com"
          },
          "contextKeys": [
            "tenant:org-a",
            "project:proj-123"
          ],
          "createdAt": "2025-04-24T05:40:21Z",
          "updatedAt": "2025-04-24T05:40:21Z"
        }
      ],
      "meta": {
        "totalCount": 3,
        "successful": 2,
        "failed": 1
      },
      "errors": [
        {
          "subscriberId": "invalid-subscriber-id",
          "code": "SUBSCRIBER_NOT_FOUND",
          "message": "Subscriber with ID invalid-subscriber-id could not be found"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "translation",
    "accessor": "Translation",
    "op": "create",
    "method": "POST",
    "path": "/v2/translations",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "resourceId": "welcome-email",
      "resourceType": "workflow",
      "locale": "en_US",
      "content": {
        "welcome.title": "Welcome",
        "welcome.message": "Hello there!"
      },
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "translation",
    "accessor": "Translation",
    "op": "load",
    "method": "GET",
    "path": "/v2/translations/{resourceType}/{resourceId}/{locale}",
    "args": [
      {
        "name": "locale",
        "wire": "locale",
        "value": "en_US"
      },
      {
        "name": "resource_id",
        "wire": "resourceId",
        "value": "welcome-email"
      },
      {
        "name": "resource_type",
        "wire": "resourceType",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "resourceId": "welcome-email",
      "resourceType": "workflow",
      "locale": "en_US",
      "content": {
        "welcome.title": "Welcome",
        "welcome.message": "Hello there!"
      },
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "translation",
    "accessor": "Translation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/translations/{resourceType}/{resourceId}/{locale}",
    "args": [
      {
        "name": "locale",
        "wire": "locale",
        "value": "p1"
      },
      {
        "name": "resource_id",
        "wire": "resourceId",
        "value": "p2"
      },
      {
        "name": "resource_type",
        "wire": "resourceType",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "translation",
    "accessor": "Translation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/translations/{resourceType}/{resourceId}",
    "args": [
      {
        "name": "resource_id",
        "wire": "resourceId",
        "value": "welcome-email"
      },
      {
        "name": "resource_type",
        "wire": "resourceType",
        "value": "workflow"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "translation_group_dto",
    "accessor": "TranslationGroupDto",
    "op": "load",
    "method": "GET",
    "path": "/v2/translations/group/{resourceType}/{resourceId}",
    "args": [
      {
        "name": "resource_id",
        "wire": "resourceId",
        "value": "welcome-email"
      },
      {
        "name": "resource_type",
        "wire": "resourceType",
        "value": "workflow"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "resourceId": "welcome-email",
      "resourceType": "workflow",
      "resourceName": "Welcome Email Workflow",
      "locales": [
        "en_US",
        "es_ES",
        "fr_FR"
      ],
      "outdatedLocales": [
        "es_ES",
        "fr_FR"
      ],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "idField": "id"
  },
  {
    "entity": "unseen",
    "accessor": "Unseen",
    "op": "load",
    "method": "GET",
    "path": "/v1/subscribers/{subscriberId}/notifications/unseen",
    "args": [
      {
        "name": "subscriber_id",
        "wire": "subscriberId",
        "value": "p1"
      }
    ],
    "select": {
      "limit": "v1",
      "seen": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "seen",
      "limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "count": 1
    },
    "idField": "id"
  },
  {
    "entity": "upload",
    "accessor": "Upload",
    "op": "create",
    "method": "POST",
    "path": "/v2/translations/upload",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ],
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "totalFiles": 3,
      "successfulUploads": 2,
      "failedUploads": 1,
      "errors": [
        "Invalid JSON in file: es-ES.json"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "webhook_result_dto",
    "accessor": "WebhookResultDto",
    "op": "create",
    "method": "POST",
    "path": "/v2/inbound-webhooks/delivery-providers/{environmentId}/{integrationId}",
    "args": [
      {
        "name": "environment_id",
        "wire": "environmentId",
        "value": "p1"
      },
      {
        "name": "integration_id",
        "wire": "integrationId",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "event": {
          "status": "opened",
          "date": "x",
          "externalId": "x",
          "attempts": 1,
          "response": "x",
          "row": "x"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "create",
    "method": "POST",
    "path": "/v2/workflows",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "name": "x",
      "description": "x",
      "tags": [
        "x"
      ],
      "active": true,
      "validatePayload": true,
      "payloadSchema": {},
      "isTranslationEnabled": true,
      "agent": {
        "identifier": "x",
        "providers": {}
      },
      "_id": "x",
      "workflowId": "x",
      "slug": "x",
      "updatedAt": "x",
      "createdAt": "x",
      "updatedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "lastPublishedAt": "x",
      "lastPublishedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "steps": [
        {
          "controls": {
            "dataSchema": {},
            "uiSchema": {},
            "values": {}
          },
          "controlValues": {
            "skip": {
              "and": [
                {
                  "==": [
                    {
                      "var": "payload.tier"
                    },
                    "pro"
                  ]
                },
                {
                  "==": [
                    {
                      "var": "subscriber.data.role"
                    },
                    "admin"
                  ]
                },
                {
                  ">": [
                    {
                      "var": "payload.amount"
                    },
                    "4"
                  ]
                }
              ]
            },
            "body": "x",
            "subject": "x",
            "avatar": "x",
            "primaryAction": {},
            "secondaryAction": {},
            "redirect": {},
            "disableOutputSanitization": true,
            "data": {}
          },
          "providerOverrides": {
            "slack": {
              "text": "{{payload.title}}",
              "blocks": [
                {
                  "type": "divider"
                }
              ]
            },
            "whatsapp-business": {
              "type": "text",
              "text": {
                "body": "{{payload.title}}"
              }
            },
            "pagerduty": {
              "severity": "warning",
              "source": "novu",
              "summary": "{{payload.title}}"
            }
          },
          "variables": {},
          "stepId": "x",
          "_id": "x",
          "name": "x",
          "slug": "x",
          "type": "in_app",
          "origin": "novu-cloud",
          "workflowId": "x",
          "workflowDatabaseId": "x",
          "issues": {
            "controls": {},
            "integration": {}
          },
          "stepResolverHash": "x"
        }
      ],
      "origin": "novu-cloud",
      "preferences": {
        "user": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        },
        "default": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        }
      },
      "status": "ACTIVE",
      "issues": {},
      "lastTriggeredAt": "x",
      "payloadExample": {},
      "severity": "high"
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "list",
    "method": "GET",
    "path": "/v2/workflows",
    "args": [],
    "select": {
      "limit": 10,
      "offset": 0,
      "order_by": "v1",
      "order_direction": "v1",
      "query": "v1",
      "status": "v1",
      "tag": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "limit",
      "offset",
      "orderDirection",
      "orderBy",
      "query",
      "tags",
      "status"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflows": [
        {
          "_id": "x",
          "createdAt": "x",
          "isTranslationEnabled": true,
          "lastPublishedAt": "x",
          "lastPublishedBy": {
            "_id": "x",
            "externalId": "x",
            "firstName": "x",
            "lastName": "x"
          },
          "lastTriggeredAt": "x",
          "name": "x",
          "origin": "novu-cloud",
          "slug": "x",
          "status": "ACTIVE",
          "stepTypeOverviews": [
            "in_app"
          ],
          "steps": [
            {
              "issues": {},
              "slug": "x",
              "type": "in_app"
            }
          ],
          "tags": [
            "x"
          ],
          "updatedAt": "x",
          "updatedBy": {
            "_id": "x",
            "externalId": "x",
            "firstName": "x",
            "lastName": "x"
          },
          "workflowId": "x"
        }
      ],
      "totalCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "load",
    "method": "GET",
    "path": "/v2/workflows/{workflowId}",
    "args": [
      {
        "name": "id",
        "wire": "workflowId",
        "value": "p1"
      }
    ],
    "select": {
      "environment_id": "v1"
    },
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [
      "environmentId"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "tags": [
        "x"
      ],
      "active": true,
      "validatePayload": true,
      "payloadSchema": {},
      "isTranslationEnabled": true,
      "agent": {
        "identifier": "x",
        "providers": {}
      },
      "_id": "x",
      "workflowId": "x",
      "slug": "x",
      "updatedAt": "x",
      "createdAt": "x",
      "updatedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "lastPublishedAt": "x",
      "lastPublishedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "steps": [
        {
          "controls": {
            "dataSchema": {},
            "uiSchema": {},
            "values": {}
          },
          "controlValues": {
            "skip": {
              "and": [
                {
                  "==": [
                    {
                      "var": "payload.tier"
                    },
                    "pro"
                  ]
                },
                {
                  "==": [
                    {
                      "var": "subscriber.data.role"
                    },
                    "admin"
                  ]
                },
                {
                  ">": [
                    {
                      "var": "payload.amount"
                    },
                    "4"
                  ]
                }
              ]
            },
            "body": "x",
            "subject": "x",
            "avatar": "x",
            "primaryAction": {},
            "secondaryAction": {},
            "redirect": {},
            "disableOutputSanitization": true,
            "data": {}
          },
          "providerOverrides": {
            "slack": {
              "text": "{{payload.title}}",
              "blocks": [
                {
                  "type": "divider"
                }
              ]
            },
            "whatsapp-business": {
              "type": "text",
              "text": {
                "body": "{{payload.title}}"
              }
            },
            "pagerduty": {
              "severity": "warning",
              "source": "novu",
              "summary": "{{payload.title}}"
            }
          },
          "variables": {},
          "stepId": "x",
          "_id": "x",
          "name": "x",
          "slug": "x",
          "type": "in_app",
          "origin": "novu-cloud",
          "workflowId": "x",
          "workflowDatabaseId": "x",
          "issues": {
            "controls": {},
            "integration": {}
          },
          "stepResolverHash": "x"
        }
      ],
      "origin": "novu-cloud",
      "preferences": {
        "user": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        },
        "default": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        }
      },
      "status": "ACTIVE",
      "issues": {},
      "lastTriggeredAt": "x",
      "payloadExample": {},
      "severity": "high"
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/workflows/{workflowId}",
    "args": [
      {
        "name": "id",
        "wire": "workflowId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "update",
    "method": "PUT",
    "path": "/v2/workflows/{workflowId}",
    "args": [
      {
        "name": "id",
        "wire": "workflowId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "tags": [
        "x"
      ],
      "active": true,
      "validatePayload": true,
      "payloadSchema": {},
      "isTranslationEnabled": true,
      "agent": {
        "identifier": "x",
        "providers": {}
      },
      "_id": "x",
      "workflowId": "x",
      "slug": "x",
      "updatedAt": "x",
      "createdAt": "x",
      "updatedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "lastPublishedAt": "x",
      "lastPublishedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "steps": [
        {
          "controls": {
            "dataSchema": {},
            "uiSchema": {},
            "values": {}
          },
          "controlValues": {
            "skip": {
              "and": [
                {
                  "==": [
                    {
                      "var": "payload.tier"
                    },
                    "pro"
                  ]
                },
                {
                  "==": [
                    {
                      "var": "subscriber.data.role"
                    },
                    "admin"
                  ]
                },
                {
                  ">": [
                    {
                      "var": "payload.amount"
                    },
                    "4"
                  ]
                }
              ]
            },
            "body": "x",
            "subject": "x",
            "avatar": "x",
            "primaryAction": {},
            "secondaryAction": {},
            "redirect": {},
            "disableOutputSanitization": true,
            "data": {}
          },
          "providerOverrides": {
            "slack": {
              "text": "{{payload.title}}",
              "blocks": [
                {
                  "type": "divider"
                }
              ]
            },
            "whatsapp-business": {
              "type": "text",
              "text": {
                "body": "{{payload.title}}"
              }
            },
            "pagerduty": {
              "severity": "warning",
              "source": "novu",
              "summary": "{{payload.title}}"
            }
          },
          "variables": {},
          "stepId": "x",
          "_id": "x",
          "name": "x",
          "slug": "x",
          "type": "in_app",
          "origin": "novu-cloud",
          "workflowId": "x",
          "workflowDatabaseId": "x",
          "issues": {
            "controls": {},
            "integration": {}
          },
          "stepResolverHash": "x"
        }
      ],
      "origin": "novu-cloud",
      "preferences": {
        "user": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        },
        "default": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        }
      },
      "status": "ACTIVE",
      "issues": {},
      "lastTriggeredAt": "x",
      "payloadExample": {},
      "severity": "high"
    },
    "idField": "id"
  },
  {
    "entity": "workflow_info_dto",
    "accessor": "WorkflowInfoDto",
    "op": "list",
    "method": "GET",
    "path": "/v2/layouts/{layoutId}/usage",
    "args": [
      {
        "name": "layout_id",
        "wire": "layoutId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflows": [
        {
          "name": "Welcome Email",
          "workflowId": "welcome-email"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "workflow_response_dto",
    "accessor": "WorkflowResponseDto",
    "op": "update",
    "method": "PUT",
    "path": "/v2/workflows/{workflowId}/sync",
    "action": "sync",
    "args": [
      {
        "name": "id",
        "wire": "workflowId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "idempotency-key",
        "value": "h1"
      }
    ],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "tags": [
        "x"
      ],
      "active": true,
      "validatePayload": true,
      "payloadSchema": {},
      "isTranslationEnabled": true,
      "agent": {
        "identifier": "x",
        "providers": {}
      },
      "_id": "x",
      "workflowId": "x",
      "slug": "x",
      "updatedAt": "x",
      "createdAt": "x",
      "updatedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "lastPublishedAt": "x",
      "lastPublishedBy": {
        "_id": "x",
        "firstName": "x",
        "lastName": "x",
        "externalId": "x"
      },
      "steps": [
        {
          "controls": {
            "dataSchema": {},
            "uiSchema": {},
            "values": {}
          },
          "controlValues": {
            "skip": {
              "and": [
                {
                  "==": [
                    {
                      "var": "payload.tier"
                    },
                    "pro"
                  ]
                },
                {
                  "==": [
                    {
                      "var": "subscriber.data.role"
                    },
                    "admin"
                  ]
                },
                {
                  ">": [
                    {
                      "var": "payload.amount"
                    },
                    "4"
                  ]
                }
              ]
            },
            "body": "x",
            "subject": "x",
            "avatar": "x",
            "primaryAction": {},
            "secondaryAction": {},
            "redirect": {},
            "disableOutputSanitization": true,
            "data": {}
          },
          "providerOverrides": {
            "slack": {
              "text": "{{payload.title}}",
              "blocks": [
                {
                  "type": "divider"
                }
              ]
            },
            "whatsapp-business": {
              "type": "text",
              "text": {
                "body": "{{payload.title}}"
              }
            },
            "pagerduty": {
              "severity": "warning",
              "source": "novu",
              "summary": "{{payload.title}}"
            }
          },
          "variables": {},
          "stepId": "x",
          "_id": "x",
          "name": "x",
          "slug": "x",
          "type": "in_app",
          "origin": "novu-cloud",
          "workflowId": "x",
          "workflowDatabaseId": "x",
          "issues": {
            "controls": {},
            "integration": {}
          },
          "stepResolverHash": "x"
        }
      ],
      "origin": "novu-cloud",
      "preferences": {
        "user": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        },
        "default": {
          "all": {},
          "channels": {
            "email": {
              "enabled": true
            },
            "sms": {
              "enabled": false
            }
          }
        }
      },
      "status": "ACTIVE",
      "issues": {},
      "lastTriggeredAt": "x",
      "payloadExample": {},
      "severity": "high"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
