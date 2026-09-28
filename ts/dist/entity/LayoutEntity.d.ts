import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Layout, LayoutLoadMatch, LayoutListMatch, LayoutCreateData, LayoutUpdateData, LayoutRemoveMatch } from '../NovuTypes';
declare class LayoutEntity extends NovuEntityBase<Layout> {
    constructor(client: NovuSDK, entopts: any);
    make(this: LayoutEntity): LayoutEntity;
    load(this: any, reqmatch?: LayoutLoadMatch, ctrl?: Control): Promise<LayoutEntity>;
    list(this: any, reqmatch?: LayoutListMatch, ctrl?: Control): Promise<LayoutEntity[]>;
    create(this: any, reqdata?: LayoutCreateData, ctrl?: Control): Promise<LayoutEntity>;
    update(this: any, reqdata?: LayoutUpdateData, ctrl?: Control): Promise<LayoutEntity>;
    remove(this: any, reqmatch?: LayoutRemoveMatch, ctrl?: Control): Promise<LayoutEntity>;
}
export { LayoutEntity };
