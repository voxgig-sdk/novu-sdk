import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListDomainsResponseDto, ListDomainsResponseDtoListMatch } from '../NovuTypes';
declare class ListDomainsResponseDtoEntity extends NovuEntityBase<ListDomainsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListDomainsResponseDtoEntity): ListDomainsResponseDtoEntity;
    list(this: any, reqmatch?: ListDomainsResponseDtoListMatch, ctrl?: Control): Promise<ListDomainsResponseDtoEntity[]>;
}
export { ListDomainsResponseDtoEntity };
