import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListChannelEndpointsResponseDto, ListChannelEndpointsResponseDtoListMatch } from '../NovuTypes';
declare class ListChannelEndpointsResponseDtoEntity extends NovuEntityBase<ListChannelEndpointsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListChannelEndpointsResponseDtoEntity): ListChannelEndpointsResponseDtoEntity;
    list(this: any, reqmatch?: ListChannelEndpointsResponseDtoListMatch, ctrl?: Control): Promise<ListChannelEndpointsResponseDtoEntity[]>;
}
export { ListChannelEndpointsResponseDtoEntity };
