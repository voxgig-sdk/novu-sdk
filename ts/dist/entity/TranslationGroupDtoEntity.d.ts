import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { TranslationGroupDto, TranslationGroupDtoLoadMatch } from '../NovuTypes';
declare class TranslationGroupDtoEntity extends NovuEntityBase<TranslationGroupDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TranslationGroupDtoEntity): TranslationGroupDtoEntity;
    load(this: any, reqmatch?: TranslationGroupDtoLoadMatch, ctrl?: Control): Promise<TranslationGroupDtoEntity>;
}
export { TranslationGroupDtoEntity };
