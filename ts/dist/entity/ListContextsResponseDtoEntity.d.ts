import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListContextsResponseDto, ListContextsResponseDtoListMatch } from '../NovuTypes';
declare class ListContextsResponseDtoEntity extends NovuEntityBase<ListContextsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListContextsResponseDtoEntity): ListContextsResponseDtoEntity;
    list(this: any, reqmatch?: ListContextsResponseDtoListMatch, ctrl?: Control): Promise<ListContextsResponseDtoEntity[]>;
}
export { ListContextsResponseDtoEntity };
