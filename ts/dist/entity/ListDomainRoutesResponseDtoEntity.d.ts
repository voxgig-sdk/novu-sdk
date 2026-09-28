import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListDomainRoutesResponseDto, ListDomainRoutesResponseDtoListMatch } from '../NovuTypes';
declare class ListDomainRoutesResponseDtoEntity extends NovuEntityBase<ListDomainRoutesResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListDomainRoutesResponseDtoEntity): ListDomainRoutesResponseDtoEntity;
    list(this: any, reqmatch?: ListDomainRoutesResponseDtoListMatch, ctrl?: Control): Promise<ListDomainRoutesResponseDtoEntity[]>;
}
export { ListDomainRoutesResponseDtoEntity };
