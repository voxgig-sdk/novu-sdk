import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { EnvironmentVariableWorkflowInfoDto, EnvironmentVariableWorkflowInfoDtoListMatch } from '../NovuTypes';
declare class EnvironmentVariableWorkflowInfoDtoEntity extends NovuEntityBase<EnvironmentVariableWorkflowInfoDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: EnvironmentVariableWorkflowInfoDtoEntity): EnvironmentVariableWorkflowInfoDtoEntity;
    list(this: any, reqmatch?: EnvironmentVariableWorkflowInfoDtoListMatch, ctrl?: Control): Promise<EnvironmentVariableWorkflowInfoDtoEntity[]>;
}
export { EnvironmentVariableWorkflowInfoDtoEntity };
