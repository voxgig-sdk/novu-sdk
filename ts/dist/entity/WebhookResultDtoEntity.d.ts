import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { WebhookResultDto, WebhookResultDtoCreateData } from '../NovuTypes';
declare class WebhookResultDtoEntity extends NovuEntityBase<WebhookResultDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: WebhookResultDtoEntity): WebhookResultDtoEntity;
    create(this: any, reqdata?: WebhookResultDtoCreateData, ctrl?: Control): Promise<WebhookResultDtoEntity>;
}
export { WebhookResultDtoEntity };
