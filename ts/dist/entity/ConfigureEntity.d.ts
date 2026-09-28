import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Configure, ConfigureCreateData } from '../NovuTypes';
declare class ConfigureEntity extends NovuEntityBase<Configure> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ConfigureEntity): ConfigureEntity;
    create(this: any, reqdata?: ConfigureCreateData, ctrl?: Control): Promise<ConfigureEntity>;
}
export { ConfigureEntity };
