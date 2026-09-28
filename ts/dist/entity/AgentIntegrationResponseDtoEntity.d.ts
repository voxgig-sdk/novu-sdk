import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { AgentIntegrationResponseDto, AgentIntegrationResponseDtoCreateData, AgentIntegrationResponseDtoUpdateData } from '../NovuTypes';
declare class AgentIntegrationResponseDtoEntity extends NovuEntityBase<AgentIntegrationResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: AgentIntegrationResponseDtoEntity): AgentIntegrationResponseDtoEntity;
    create(this: any, reqdata?: AgentIntegrationResponseDtoCreateData, ctrl?: Control): Promise<AgentIntegrationResponseDtoEntity>;
    update(this: any, reqdata?: AgentIntegrationResponseDtoUpdateData, ctrl?: Control): Promise<AgentIntegrationResponseDtoEntity>;
}
export { AgentIntegrationResponseDtoEntity };
