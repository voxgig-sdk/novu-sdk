import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { MasterJson, MasterJsonLoadMatch } from '../NovuTypes';
declare class MasterJsonEntity extends NovuEntityBase<MasterJson> {
    constructor(client: NovuSDK, entopts: any);
    make(this: MasterJsonEntity): MasterJsonEntity;
    load(this: any, reqmatch?: MasterJsonLoadMatch, ctrl?: Control): Promise<MasterJsonEntity>;
}
export { MasterJsonEntity };
