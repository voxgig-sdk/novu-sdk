import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListChannelConnectionsResponseDto, ListChannelConnectionsResponseDtoListMatch } from '../NovuTypes';
declare class ListChannelConnectionsResponseDtoEntity extends NovuEntityBase<ListChannelConnectionsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListChannelConnectionsResponseDtoEntity): ListChannelConnectionsResponseDtoEntity;
    list(this: any, reqmatch?: ListChannelConnectionsResponseDtoListMatch, ctrl?: Control): Promise<ListChannelConnectionsResponseDtoEntity[]>;
}
export { ListChannelConnectionsResponseDtoEntity };
