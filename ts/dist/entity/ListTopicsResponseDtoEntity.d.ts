import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListTopicsResponseDto, ListTopicsResponseDtoListMatch } from '../NovuTypes';
declare class ListTopicsResponseDtoEntity extends NovuEntityBase<ListTopicsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListTopicsResponseDtoEntity): ListTopicsResponseDtoEntity;
    list(this: any, reqmatch?: ListTopicsResponseDtoListMatch, ctrl?: Control): Promise<ListTopicsResponseDtoEntity[]>;
}
export { ListTopicsResponseDtoEntity };
