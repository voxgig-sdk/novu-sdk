import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { GeneratePreviewResponseDto, GeneratePreviewResponseDtoCreateData } from '../NovuTypes';
declare class GeneratePreviewResponseDtoEntity extends NovuEntityBase<GeneratePreviewResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: GeneratePreviewResponseDtoEntity): GeneratePreviewResponseDtoEntity;
    create(this: any, reqdata?: GeneratePreviewResponseDtoCreateData, ctrl?: Control): Promise<GeneratePreviewResponseDtoEntity>;
}
export { GeneratePreviewResponseDtoEntity };
