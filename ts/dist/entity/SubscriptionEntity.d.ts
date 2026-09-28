import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Subscription, SubscriptionLoadMatch, SubscriptionUpdateData } from '../NovuTypes';
declare class SubscriptionEntity extends NovuEntityBase<Subscription> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriptionEntity): SubscriptionEntity;
    load(this: any, reqmatch?: SubscriptionLoadMatch, ctrl?: Control): Promise<SubscriptionEntity>;
    update(this: any, reqdata?: SubscriptionUpdateData, ctrl?: Control): Promise<SubscriptionEntity>;
}
export { SubscriptionEntity };
