import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { DomainConnectStatusResponseDto, DomainConnectStatusResponseDtoListMatch } from '../NovuTypes';
declare class DomainConnectStatusResponseDtoEntity extends NovuEntityBase<DomainConnectStatusResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DomainConnectStatusResponseDtoEntity): DomainConnectStatusResponseDtoEntity;
    list(this: any, reqmatch?: DomainConnectStatusResponseDtoListMatch, ctrl?: Control): Promise<DomainConnectStatusResponseDtoEntity[]>;
}
export { DomainConnectStatusResponseDtoEntity };
