import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListTopicSubscriptionsResponseDto, ListTopicSubscriptionsResponseDtoListMatch } from '../NovuTypes';
declare class ListTopicSubscriptionsResponseDtoEntity extends NovuEntityBase<ListTopicSubscriptionsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListTopicSubscriptionsResponseDtoEntity): ListTopicSubscriptionsResponseDtoEntity;
    list(this: any, reqmatch?: ListTopicSubscriptionsResponseDtoListMatch, ctrl?: Control): Promise<ListTopicSubscriptionsResponseDtoEntity[]>;
}
export { ListTopicSubscriptionsResponseDtoEntity };
