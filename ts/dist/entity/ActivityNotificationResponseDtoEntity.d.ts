import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ActivityNotificationResponseDto, ActivityNotificationResponseDtoLoadMatch, ActivityNotificationResponseDtoListMatch } from '../NovuTypes';
declare class ActivityNotificationResponseDtoEntity extends NovuEntityBase<ActivityNotificationResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ActivityNotificationResponseDtoEntity): ActivityNotificationResponseDtoEntity;
    load(this: any, reqmatch?: ActivityNotificationResponseDtoLoadMatch, ctrl?: Control): Promise<ActivityNotificationResponseDtoEntity>;
    list(this: any, reqmatch?: ActivityNotificationResponseDtoListMatch, ctrl?: Control): Promise<ActivityNotificationResponseDtoEntity[]>;
}
export { ActivityNotificationResponseDtoEntity };
