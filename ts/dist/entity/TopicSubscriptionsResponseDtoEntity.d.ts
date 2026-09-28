import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { TopicSubscriptionsResponseDto, TopicSubscriptionsResponseDtoRemoveMatch } from '../NovuTypes';
declare class TopicSubscriptionsResponseDtoEntity extends NovuEntityBase<TopicSubscriptionsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TopicSubscriptionsResponseDtoEntity): TopicSubscriptionsResponseDtoEntity;
    remove(this: any, reqmatch?: TopicSubscriptionsResponseDtoRemoveMatch, ctrl?: Control): Promise<TopicSubscriptionsResponseDtoEntity>;
}
export { TopicSubscriptionsResponseDtoEntity };
