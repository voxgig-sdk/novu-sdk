import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { SubscriberPreferencesDto, SubscriberPreferencesDtoListMatch, SubscriberPreferencesDtoUpdateData } from '../NovuTypes';
declare class SubscriberPreferencesDtoEntity extends NovuEntityBase<SubscriberPreferencesDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriberPreferencesDtoEntity): SubscriberPreferencesDtoEntity;
    list(this: any, reqmatch?: SubscriberPreferencesDtoListMatch, ctrl?: Control): Promise<SubscriberPreferencesDtoEntity[]>;
    update(this: any, reqdata?: SubscriberPreferencesDtoUpdateData, ctrl?: Control): Promise<SubscriberPreferencesDtoEntity>;
}
export { SubscriberPreferencesDtoEntity };
