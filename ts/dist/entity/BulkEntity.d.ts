import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Bulk, BulkCreateData } from '../NovuTypes';
declare class BulkEntity extends NovuEntityBase<Bulk> {
    constructor(client: NovuSDK, entopts: any);
    make(this: BulkEntity): BulkEntity;
    create(this: any, reqdata?: BulkCreateData, ctrl?: Control): Promise<BulkEntity>;
}
export { BulkEntity };
