import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { GenerateChatOAuthUrlResponseDto, GenerateChatOAuthUrlResponseDtoCreateData } from '../NovuTypes';
declare class GenerateChatOAuthUrlResponseDtoEntity extends NovuEntityBase<GenerateChatOAuthUrlResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: GenerateChatOAuthUrlResponseDtoEntity): GenerateChatOAuthUrlResponseDtoEntity;
    create(this: any, reqdata?: GenerateChatOAuthUrlResponseDtoCreateData, ctrl?: Control): Promise<GenerateChatOAuthUrlResponseDtoEntity>;
}
export { GenerateChatOAuthUrlResponseDtoEntity };
