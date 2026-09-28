import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Upload, UploadCreateData } from '../NovuTypes';
declare class UploadEntity extends NovuEntityBase<Upload> {
    constructor(client: NovuSDK, entopts: any);
    make(this: UploadEntity): UploadEntity;
    create(this: any, reqdata?: UploadCreateData, ctrl?: Control): Promise<UploadEntity>;
}
export { UploadEntity };
