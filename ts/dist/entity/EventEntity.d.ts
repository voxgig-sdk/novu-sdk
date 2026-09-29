import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Event, EventCreateData, EventRemoveMatch } from '../NovuTypes';
declare class EventEntity extends NovuEntityBase<Event> {
    constructor(client: NovuSDK, entopts: any);
    make(this: EventEntity): EventEntity;
    create(this: any, reqdata?: EventCreateData, ctrl?: Control): Promise<EventEntity>;
    remove(this: any, reqmatch?: EventRemoveMatch, ctrl?: Control): Promise<EventEntity>;
}
export { EventEntity };
