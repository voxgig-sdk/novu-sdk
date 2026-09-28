import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { MessageResponseDto, MessageResponseDtoCreateData } from '../NovuTypes';
declare class MessageResponseDtoEntity extends NovuEntityBase<MessageResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: MessageResponseDtoEntity): MessageResponseDtoEntity;
    create(this: any, reqdata?: MessageResponseDtoCreateData, ctrl?: Control): Promise<MessageResponseDtoEntity>;
}
export { MessageResponseDtoEntity };
