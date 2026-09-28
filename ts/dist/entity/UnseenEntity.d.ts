import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Unseen, UnseenLoadMatch } from '../NovuTypes';
declare class UnseenEntity extends NovuEntityBase<Unseen> {
    constructor(client: NovuSDK, entopts: any);
    make(this: UnseenEntity): UnseenEntity;
    load(this: any, reqmatch?: UnseenLoadMatch, ctrl?: Control): Promise<UnseenEntity>;
}
export { UnseenEntity };
