import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { SubscriberNotificationsCountResponseDto, SubscriberNotificationsCountResponseDtoListMatch } from '../NovuTypes';
declare class SubscriberNotificationsCountResponseDtoEntity extends NovuEntityBase<SubscriberNotificationsCountResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriberNotificationsCountResponseDtoEntity): SubscriberNotificationsCountResponseDtoEntity;
    list(this: any, reqmatch?: SubscriberNotificationsCountResponseDtoListMatch, ctrl?: Control): Promise<SubscriberNotificationsCountResponseDtoEntity[]>;
}
export { SubscriberNotificationsCountResponseDtoEntity };
