import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { TriggerEventResponseDto, TriggerEventResponseDtoCreateData } from '../NovuTypes';
declare class TriggerEventResponseDtoEntity extends NovuEntityBase<TriggerEventResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TriggerEventResponseDtoEntity): TriggerEventResponseDtoEntity;
    create(this: any, reqdata?: TriggerEventResponseDtoCreateData, ctrl?: Control): Promise<TriggerEventResponseDtoEntity>;
}
export { TriggerEventResponseDtoEntity };
