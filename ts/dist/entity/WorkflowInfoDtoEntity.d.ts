import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { WorkflowInfoDto, WorkflowInfoDtoListMatch } from '../NovuTypes';
declare class WorkflowInfoDtoEntity extends NovuEntityBase<WorkflowInfoDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: WorkflowInfoDtoEntity): WorkflowInfoDtoEntity;
    list(this: any, reqmatch?: WorkflowInfoDtoListMatch, ctrl?: Control): Promise<WorkflowInfoDtoEntity[]>;
}
export { WorkflowInfoDtoEntity };
