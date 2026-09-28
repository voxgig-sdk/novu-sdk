import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { DomainConnectApplyUrlResponseDto, DomainConnectApplyUrlResponseDtoCreateData } from '../NovuTypes';
declare class DomainConnectApplyUrlResponseDtoEntity extends NovuEntityBase<DomainConnectApplyUrlResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DomainConnectApplyUrlResponseDtoEntity): DomainConnectApplyUrlResponseDtoEntity;
    create(this: any, reqdata?: DomainConnectApplyUrlResponseDtoCreateData, ctrl?: Control): Promise<DomainConnectApplyUrlResponseDtoEntity>;
}
export { DomainConnectApplyUrlResponseDtoEntity };
