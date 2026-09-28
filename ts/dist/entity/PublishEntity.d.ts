import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Publish, PublishCreateData } from '../NovuTypes';
declare class PublishEntity extends NovuEntityBase<Publish> {
    constructor(client: NovuSDK, entopts: any);
    make(this: PublishEntity): PublishEntity;
    create(this: any, reqdata?: PublishCreateData, ctrl?: Control): Promise<PublishEntity>;
}
export { PublishEntity };
