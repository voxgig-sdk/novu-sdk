import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { PreferencesResponseDto, PreferencesResponseDtoUpdateData } from '../NovuTypes';
declare class PreferencesResponseDtoEntity extends NovuEntityBase<PreferencesResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: PreferencesResponseDtoEntity): PreferencesResponseDtoEntity;
    update(this: any, reqdata?: PreferencesResponseDtoUpdateData, ctrl?: Control): Promise<PreferencesResponseDtoEntity>;
}
export { PreferencesResponseDtoEntity };
