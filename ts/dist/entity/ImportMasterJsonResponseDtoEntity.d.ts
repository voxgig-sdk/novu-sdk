import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ImportMasterJsonResponseDto, ImportMasterJsonResponseDtoCreateData } from '../NovuTypes';
declare class ImportMasterJsonResponseDtoEntity extends NovuEntityBase<ImportMasterJsonResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ImportMasterJsonResponseDtoEntity): ImportMasterJsonResponseDtoEntity;
    create(this: any, reqdata?: ImportMasterJsonResponseDtoCreateData, ctrl?: Control): Promise<ImportMasterJsonResponseDtoEntity>;
}
export { ImportMasterJsonResponseDtoEntity };
