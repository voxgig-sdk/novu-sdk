import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Subscriber, SubscriberLoadMatch, SubscriberListMatch, SubscriberCreateData, SubscriberUpdateData, SubscriberRemoveMatch } from '../NovuTypes';
declare class SubscriberEntity extends NovuEntityBase<Subscriber> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriberEntity): SubscriberEntity;
    load(this: any, reqmatch?: SubscriberLoadMatch, ctrl?: Control): Promise<SubscriberEntity>;
    list(this: any, reqmatch?: SubscriberListMatch, ctrl?: Control): Promise<SubscriberEntity[]>;
    create(this: any, reqdata?: SubscriberCreateData, ctrl?: Control): Promise<SubscriberEntity>;
    update(this: any, reqdata?: SubscriberUpdateData, ctrl?: Control): Promise<SubscriberEntity>;
    remove(this: any, reqmatch?: SubscriberRemoveMatch, ctrl?: Control): Promise<SubscriberEntity>;
}
export { SubscriberEntity };
