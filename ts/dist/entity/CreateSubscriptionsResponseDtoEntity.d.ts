import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { CreateSubscriptionsResponseDto, CreateSubscriptionsResponseDtoCreateData } from '../NovuTypes';
declare class CreateSubscriptionsResponseDtoEntity extends NovuEntityBase<CreateSubscriptionsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: CreateSubscriptionsResponseDtoEntity): CreateSubscriptionsResponseDtoEntity;
    create(this: any, reqdata?: CreateSubscriptionsResponseDtoCreateData, ctrl?: Control): Promise<CreateSubscriptionsResponseDtoEntity>;
}
export { CreateSubscriptionsResponseDtoEntity };
