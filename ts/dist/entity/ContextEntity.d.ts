import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ContextType, ContextLoadMatch, ContextListMatch, ContextCreateData, ContextUpdateData, ContextRemoveMatch } from '../NovuTypes';
declare class ContextEntity extends NovuEntityBase<ContextType> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ContextEntity): ContextEntity;
    load(this: any, reqmatch?: ContextLoadMatch, ctrl?: Control): Promise<ContextEntity>;
    list(this: any, reqmatch?: ContextListMatch, ctrl?: Control): Promise<ContextEntity[]>;
    create(this: any, reqdata?: ContextCreateData, ctrl?: Control): Promise<ContextEntity>;
    update(this: any, reqdata?: ContextUpdateData, ctrl?: Control): Promise<ContextEntity>;
    remove(this: any, reqmatch?: ContextRemoveMatch, ctrl?: Control): Promise<ContextEntity>;
}
export { ContextEntity };
