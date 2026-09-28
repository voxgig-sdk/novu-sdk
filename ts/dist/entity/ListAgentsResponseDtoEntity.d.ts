import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListAgentsResponseDto, ListAgentsResponseDtoListMatch } from '../NovuTypes';
declare class ListAgentsResponseDtoEntity extends NovuEntityBase<ListAgentsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListAgentsResponseDtoEntity): ListAgentsResponseDtoEntity;
    list(this: any, reqmatch?: ListAgentsResponseDtoListMatch, ctrl?: Control): Promise<ListAgentsResponseDtoEntity[]>;
}
export { ListAgentsResponseDtoEntity };
