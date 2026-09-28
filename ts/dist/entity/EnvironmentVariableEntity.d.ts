import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { EnvironmentVariable, EnvironmentVariableLoadMatch, EnvironmentVariableListMatch, EnvironmentVariableCreateData, EnvironmentVariableUpdateData, EnvironmentVariableRemoveMatch } from '../NovuTypes';
declare class EnvironmentVariableEntity extends NovuEntityBase<EnvironmentVariable> {
    constructor(client: NovuSDK, entopts: any);
    make(this: EnvironmentVariableEntity): EnvironmentVariableEntity;
    load(this: any, reqmatch?: EnvironmentVariableLoadMatch, ctrl?: Control): Promise<EnvironmentVariableEntity>;
    list(this: any, reqmatch?: EnvironmentVariableListMatch, ctrl?: Control): Promise<EnvironmentVariableEntity[]>;
    create(this: any, reqdata?: EnvironmentVariableCreateData, ctrl?: Control): Promise<EnvironmentVariableEntity>;
    update(this: any, reqdata?: EnvironmentVariableUpdateData, ctrl?: Control): Promise<EnvironmentVariableEntity>;
    remove(this: any, reqmatch?: EnvironmentVariableRemoveMatch, ctrl?: Control): Promise<EnvironmentVariableEntity>;
}
export { EnvironmentVariableEntity };
