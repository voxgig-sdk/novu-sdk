import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Diff, DiffCreateData } from '../NovuTypes';
declare class DiffEntity extends NovuEntityBase<Diff> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DiffEntity): DiffEntity;
    create(this: any, reqdata?: DiffCreateData, ctrl?: Control): Promise<DiffEntity>;
}
export { DiffEntity };
