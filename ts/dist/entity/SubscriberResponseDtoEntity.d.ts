import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { SubscriberResponseDto, SubscriberResponseDtoUpdateData } from '../NovuTypes';
declare class SubscriberResponseDtoEntity extends NovuEntityBase<SubscriberResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriberResponseDtoEntity): SubscriberResponseDtoEntity;
    update(this: any, reqdata?: SubscriberResponseDtoUpdateData, ctrl?: Control): Promise<SubscriberResponseDtoEntity>;
}
export { SubscriberResponseDtoEntity };
