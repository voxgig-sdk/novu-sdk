import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Translation, TranslationLoadMatch, TranslationCreateData, TranslationRemoveMatch } from '../NovuTypes';
declare class TranslationEntity extends NovuEntityBase<Translation> {
    constructor(client: NovuSDK, entopts: any);
    make(this: TranslationEntity): TranslationEntity;
    load(this: any, reqmatch?: TranslationLoadMatch, ctrl?: Control): Promise<TranslationEntity>;
    create(this: any, reqdata?: TranslationCreateData, ctrl?: Control): Promise<TranslationEntity>;
    remove(this: any, reqmatch?: TranslationRemoveMatch, ctrl?: Control): Promise<TranslationEntity>;
}
export { TranslationEntity };
