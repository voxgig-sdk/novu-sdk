import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { LayoutResponseDto, LayoutResponseDtoCreateData } from '../NovuTypes';
declare class LayoutResponseDtoEntity extends NovuEntityBase<LayoutResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: LayoutResponseDtoEntity): LayoutResponseDtoEntity;
    create(this: any, reqdata?: LayoutResponseDtoCreateData, ctrl?: Control): Promise<LayoutResponseDtoEntity>;
}
export { LayoutResponseDtoEntity };
