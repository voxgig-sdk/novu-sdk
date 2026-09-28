import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { InboxNotificationDto, InboxNotificationDtoUpdateData } from '../NovuTypes';
declare class InboxNotificationDtoEntity extends NovuEntityBase<InboxNotificationDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: InboxNotificationDtoEntity): InboxNotificationDtoEntity;
    update(this: any, reqdata?: InboxNotificationDtoUpdateData, ctrl?: Control): Promise<InboxNotificationDtoEntity>;
}
export { InboxNotificationDtoEntity };
