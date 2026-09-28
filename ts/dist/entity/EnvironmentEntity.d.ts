import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentListMatch, EnvironmentCreateData, EnvironmentUpdateData, EnvironmentRemoveMatch } from '../NovuTypes';
declare class EnvironmentEntity extends NovuEntityBase<Environment> {
    constructor(client: NovuSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    list(this: any, reqmatch?: EnvironmentListMatch, ctrl?: Control): Promise<EnvironmentEntity[]>;
    create(this: any, reqdata?: EnvironmentCreateData, ctrl?: Control): Promise<EnvironmentEntity>;
    update(this: any, reqdata?: EnvironmentUpdateData, ctrl?: Control): Promise<EnvironmentEntity>;
    remove(this: any, reqmatch?: EnvironmentRemoveMatch, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
