import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { WorkflowResponseDto, WorkflowResponseDtoUpdateData } from '../NovuTypes';
declare class WorkflowResponseDtoEntity extends NovuEntityBase<WorkflowResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: WorkflowResponseDtoEntity): WorkflowResponseDtoEntity;
    update(this: any, reqdata?: WorkflowResponseDtoUpdateData, ctrl?: Control): Promise<WorkflowResponseDtoEntity>;
}
export { WorkflowResponseDtoEntity };
