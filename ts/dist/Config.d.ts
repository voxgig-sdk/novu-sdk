import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        debug: {
            options: {
                active: boolean;
                max: number;
                redact: string[];
            };
            optspec: {
                now: string;
                onEntry: string;
            };
            strict: boolean;
            transport: string;
        };
        idempotency: {
            options: {
                active: boolean;
                header: string;
                methods: string[];
                ops: string[];
            };
            optspec: {
                keygen: string;
            };
            strict: boolean;
            transport: string;
        };
        metrics: {
            options: {
                active: boolean;
            };
            optspec: {
                now: string;
            };
            strict: boolean;
            transport: string;
        };
        paging: {
            options: {
                active: boolean;
                afterVar: string;
                cursorParam: string;
                firstVar: string;
                limitParam: string;
                pageParam: string;
                startPage: number;
            };
            optspec: {
                limit: string;
                ops: string;
            };
            strict: boolean;
            transport: string;
        };
        ratelimit: {
            options: {
                active: boolean;
                burst: number;
                rate: number;
            };
            optspec: {
                now: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        retry: {
            options: {
                active: boolean;
                factor: number;
                maxDelay: number;
                minDelay: number;
                retries: number;
                statuses: number[];
            };
            optspec: {
                jitter: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
        timeout: {
            options: {
                active: boolean;
                ms: number;
            };
            optspec: {
                clearTimer: string;
                setTimer: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            activity_notification_response_dto: {};
            agent: {};
            agent_integration_response_dto: {};
            agent_response_dto: {};
            bulk: {};
            channel_connection: {};
            channel_endpoint: {};
            configure: {};
            context: {};
            create_subscriptions_response_dto: {};
            diff: {};
            domain: {};
            domain_connect_apply_url_response_dto: {};
            domain_connect_status_response_dto: {};
            domain_response_dto: {};
            domain_route_response_dto: {};
            environment: {};
            environment_tags_dto: {};
            environment_variable: {};
            environment_variable_workflow_info_dto: {};
            event: {};
            generate_chat_o_auth_url_response_dto: {};
            generate_preview_response_dto: {};
            import_master_json_response_dto: {};
            inbox_notification_dto: {};
            integration: {};
            integration_response_dto: {};
            layout: {};
            layout_response_dto: {};
            link: {};
            list_agent_integrations_response_dto: {};
            list_agents_response_dto: {};
            list_channel_connections_response_dto: {};
            list_channel_endpoints_response_dto: {};
            list_contexts_response_dto: {};
            list_domain_routes_response_dto: {};
            list_domains_response_dto: {};
            list_subscribers_response_dto: {};
            list_topic_subscriptions_response_dto: {};
            list_topics_response_dto: {};
            master_json: {};
            message: {};
            message_response_dto: {};
            notification_feed_item_dto: {};
            preferences_response_dto: {};
            publish: {};
            remove_subscriber_response_dto: {};
            step: {};
            subscriber: {};
            subscriber_notifications_count_response_dto: {};
            subscriber_notifications_response_dto: {};
            subscriber_preferences_dto: {};
            subscriber_response_dto: {};
            subscription: {};
            topic: {};
            topic_subscriber_dto: {};
            topic_subscriptions_response_dto: {};
            translation: {};
            translation_group_dto: {};
            trigger: {};
            trigger_event_response_dto: {};
            unseen: {};
            upload: {};
            webhook_result_dto: {};
            workflow: {};
            workflow_info_dto: {};
            workflow_response_dto: {};
        };
    };
    entity: {
        activity_notification_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                notificationId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    update: {
                        type: string;
                    };
                };
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                agentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            })[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                agentIntegrationId: string;
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                                agentIntegrationId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        agent_integration_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    update: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                agentIntegrationId: string;
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        agent_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        bulk: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        channel_connection: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        channel_endpoint: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        configure: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationIdentifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        context: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    update: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            })[];
            id: {
                field: string;
                from: {
                    id: string;
                    type: string;
                };
                name: string;
                parts: string[];
                sep: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        create_subscriptions_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        diff: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                targetEnvironmentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        domain: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        domain_connect_apply_url_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        domain_connect_status_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        domain_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        domain_route_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        environment: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                environmentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                environmentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        environment_tags_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                environmentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        environment_variable: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                variableKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                variableKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                variableKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        environment_variable_workflow_info_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                variableKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        event: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                transactionId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        generate_chat_o_auth_url_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        generate_preview_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                stepId: string;
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        import_master_json_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        inbox_notification_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                actionType: string;
                                notificationId: string;
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                notificationId: string;
                                subscriberId: string;
                                actionType?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        integration: {
            fields: ({
                name: string;
                title: string;
                type: string;
                op: {
                    list: {
                        req: boolean;
                        type: string;
                    };
                    update: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                deprecated?: undefined;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                op?: undefined;
                deprecated?: undefined;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                op?: undefined;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
                deprecated?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    list: {
                        req: boolean;
                        type: string;
                    };
                    update: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                format: string;
                deprecated?: undefined;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationId: string;
                                integrationIdentifier?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationIdentifier: string;
                                integrationId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        integration_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                integrationId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        layout: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        layout_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        link: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_agent_integrations_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        list_agents_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_channel_connections_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_channel_endpoints_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_contexts_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_domain_routes_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                domain: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        list_domains_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_subscribers_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        list_topic_subscriptions_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                                topicKey?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                                subscriberId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        list_topics_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        master_json: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        message: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                transactionId: string;
                                messageId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                messageId: string;
                                transactionId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        message_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                messageId: string;
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                                messageId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        notification_feed_item_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        preferences_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        publish: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                targetEnvironmentId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        remove_subscriber_response_dto: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        step: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                stepId: string;
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        subscriber: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query?: undefined;
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                notificationId: string;
                                subscriberId: string;
                                providerId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                providerId: string;
                                subscriberId: string;
                                notificationId?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        subscriber_notifications_count_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        subscriber_notifications_response_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        subscriber_preferences_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string[];
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            })[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        subscriber_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                req?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        subscription: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        topic: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        topic_subscriber_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                externalSubscriberId: string;
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        topic_subscriptions_response_dto: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                topicKey: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        translation: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            id: {
                field: string;
                from: {
                    locale: string;
                    resource_id: string;
                    resource_type: string;
                };
                name: string;
                parts: string[];
                sep: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                resourceId: string;
                                resourceType: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                resourceId: string;
                                resourceType: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                resourceId: string;
                                resourceType: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        translation_group_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            id: {
                field: string;
                from: {
                    resource_id: string;
                    resource_type: string;
                };
                name: string;
                parts: string[];
                sep: string;
            };
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                resourceId: string;
                                resourceType: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        trigger: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        trigger_event_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        unseen: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscriberId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: boolean;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        upload: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        webhook_result_dto: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                environmentId: string;
                                integrationId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        workflow: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    patch: {
                        type: string;
                    };
                    update?: undefined;
                    create?: undefined;
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    patch?: undefined;
                    create?: undefined;
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                    patch?: undefined;
                    update?: undefined;
                };
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                    patch?: undefined;
                };
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                patch: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        workflow_info_dto: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                layoutId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        workflow_response_dto: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                workflowId: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
