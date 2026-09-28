import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Integration, IntegrationListMatch, IntegrationCreateData, IntegrationUpdateData, IntegrationRemoveMatch } from '../NovuTypes';
declare class IntegrationEntity extends NovuEntityBase<Integration> {
    constructor(client: NovuSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    list(this: any, reqmatch?: IntegrationListMatch, ctrl?: Control): Promise<IntegrationEntity[]>;
    create(this: any, reqdata?: IntegrationCreateData, ctrl?: Control): Promise<IntegrationEntity>;
    update(this: any, reqdata?: IntegrationUpdateData, ctrl?: Control): Promise<IntegrationEntity>;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
