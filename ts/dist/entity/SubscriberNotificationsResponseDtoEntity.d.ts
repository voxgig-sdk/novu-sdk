import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { SubscriberNotificationsResponseDto, SubscriberNotificationsResponseDtoListMatch } from '../NovuTypes';
declare class SubscriberNotificationsResponseDtoEntity extends NovuEntityBase<SubscriberNotificationsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: SubscriberNotificationsResponseDtoEntity): SubscriberNotificationsResponseDtoEntity;
    list(this: any, reqmatch?: SubscriberNotificationsResponseDtoListMatch, ctrl?: Control): Promise<SubscriberNotificationsResponseDtoEntity[]>;
}
export { SubscriberNotificationsResponseDtoEntity };
