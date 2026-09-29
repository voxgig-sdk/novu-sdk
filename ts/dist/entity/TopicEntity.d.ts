import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Topic, TopicLoadMatch, TopicListMatch, TopicCreateData, TopicUpdateData, TopicRemoveMatch } from '../NovuTypes';
declare class TopicEntity extends NovuEntityBase<Topic> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    load(this: any, reqmatch?: TopicLoadMatch, ctrl?: Control): Promise<TopicEntity>;
    list(this: any, reqmatch?: TopicListMatch, ctrl?: Control): Promise<TopicEntity[]>;
    create(this: any, reqdata?: TopicCreateData, ctrl?: Control): Promise<TopicEntity>;
    update(this: any, reqdata?: TopicUpdateData, ctrl?: Control): Promise<TopicEntity>;
    remove(this: any, reqmatch?: TopicRemoveMatch, ctrl?: Control): Promise<TopicEntity>;
}
export { TopicEntity };
