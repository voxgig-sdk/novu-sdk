import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { IntegrationResponseDto, IntegrationResponseDtoListMatch, IntegrationResponseDtoCreateData } from '../NovuTypes';
declare class IntegrationResponseDtoEntity extends NovuEntityBase<IntegrationResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: IntegrationResponseDtoEntity): IntegrationResponseDtoEntity;
    list(this: any, reqmatch?: IntegrationResponseDtoListMatch, ctrl?: Control): Promise<IntegrationResponseDtoEntity[]>;
    create(this: any, reqdata?: IntegrationResponseDtoCreateData, ctrl?: Control): Promise<IntegrationResponseDtoEntity>;
}
export { IntegrationResponseDtoEntity };
