import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { AgentResponseDto, AgentResponseDtoUpdateData } from '../NovuTypes';
declare class AgentResponseDtoEntity extends NovuEntityBase<AgentResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: AgentResponseDtoEntity): AgentResponseDtoEntity;
    update(this: any, reqdata?: AgentResponseDtoUpdateData, ctrl?: Control): Promise<AgentResponseDtoEntity>;
}
export { AgentResponseDtoEntity };
