import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { TopicSubscriberDto, TopicSubscriberDtoLoadMatch } from '../NovuTypes';
declare class TopicSubscriberDtoEntity extends NovuEntityBase<TopicSubscriberDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TopicSubscriberDtoEntity): TopicSubscriberDtoEntity;
    load(this: any, reqmatch?: TopicSubscriberDtoLoadMatch, ctrl?: Control): Promise<TopicSubscriberDtoEntity>;
}
export { TopicSubscriberDtoEntity };
