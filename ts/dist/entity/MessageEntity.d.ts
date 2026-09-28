import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Message, MessageListMatch, MessageRemoveMatch } from '../NovuTypes';
declare class MessageEntity extends NovuEntityBase<Message> {
    constructor(client: NovuSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    list(this: any, reqmatch?: MessageListMatch, ctrl?: Control): Promise<MessageEntity[]>;
    remove(this: any, reqmatch?: MessageRemoveMatch, ctrl?: Control): Promise<MessageEntity>;
}
export { MessageEntity };
