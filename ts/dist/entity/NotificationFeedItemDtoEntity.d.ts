import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { NotificationFeedItemDto, NotificationFeedItemDtoListMatch } from '../NovuTypes';
declare class NotificationFeedItemDtoEntity extends NovuEntityBase<NotificationFeedItemDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: NotificationFeedItemDtoEntity): NotificationFeedItemDtoEntity;
    list(this: any, reqmatch?: NotificationFeedItemDtoListMatch, ctrl?: Control): Promise<NotificationFeedItemDtoEntity[]>;
}
export { NotificationFeedItemDtoEntity };
