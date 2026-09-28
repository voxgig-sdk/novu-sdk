import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { DomainResponseDto, DomainResponseDtoCreateData } from '../NovuTypes';
declare class DomainResponseDtoEntity extends NovuEntityBase<DomainResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DomainResponseDtoEntity): DomainResponseDtoEntity;
    create(this: any, reqdata?: DomainResponseDtoCreateData, ctrl?: Control): Promise<DomainResponseDtoEntity>;
}
export { DomainResponseDtoEntity };
