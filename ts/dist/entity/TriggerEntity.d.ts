import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Trigger, TriggerCreateData } from '../NovuTypes';
declare class TriggerEntity extends NovuEntityBase<Trigger> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TriggerEntity): TriggerEntity;
    create(this: any, reqdata?: TriggerCreateData, ctrl?: Control): Promise<TriggerEntity>;
}
export { TriggerEntity };
