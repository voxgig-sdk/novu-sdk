import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { RemoveSubscriberResponseDto, RemoveSubscriberResponseDtoRemoveMatch } from '../NovuTypes';
declare class RemoveSubscriberResponseDtoEntity extends NovuEntityBase<RemoveSubscriberResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: RemoveSubscriberResponseDtoEntity): RemoveSubscriberResponseDtoEntity;
    remove(this: any, reqmatch?: RemoveSubscriberResponseDtoRemoveMatch, ctrl?: Control): Promise<RemoveSubscriberResponseDtoEntity>;
}
export { RemoveSubscriberResponseDtoEntity };
