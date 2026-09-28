import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListSubscribersResponseDto, ListSubscribersResponseDtoListMatch } from '../NovuTypes';
declare class ListSubscribersResponseDtoEntity extends NovuEntityBase<ListSubscribersResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListSubscribersResponseDtoEntity): ListSubscribersResponseDtoEntity;
    list(this: any, reqmatch?: ListSubscribersResponseDtoListMatch, ctrl?: Control): Promise<ListSubscribersResponseDtoEntity[]>;
}
export { ListSubscribersResponseDtoEntity };
