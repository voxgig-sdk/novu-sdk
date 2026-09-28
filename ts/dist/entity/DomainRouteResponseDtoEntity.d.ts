import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { DomainRouteResponseDto, DomainRouteResponseDtoLoadMatch, DomainRouteResponseDtoCreateData, DomainRouteResponseDtoUpdateData } from '../NovuTypes';
declare class DomainRouteResponseDtoEntity extends NovuEntityBase<DomainRouteResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DomainRouteResponseDtoEntity): DomainRouteResponseDtoEntity;
    load(this: any, reqmatch?: DomainRouteResponseDtoLoadMatch, ctrl?: Control): Promise<DomainRouteResponseDtoEntity>;
    create(this: any, reqdata?: DomainRouteResponseDtoCreateData, ctrl?: Control): Promise<DomainRouteResponseDtoEntity>;
    update(this: any, reqdata?: DomainRouteResponseDtoUpdateData, ctrl?: Control): Promise<DomainRouteResponseDtoEntity>;
}
export { DomainRouteResponseDtoEntity };
