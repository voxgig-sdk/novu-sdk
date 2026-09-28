import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ListAgentIntegrationsResponseDto, ListAgentIntegrationsResponseDtoListMatch } from '../NovuTypes';
declare class ListAgentIntegrationsResponseDtoEntity extends NovuEntityBase<ListAgentIntegrationsResponseDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ListAgentIntegrationsResponseDtoEntity): ListAgentIntegrationsResponseDtoEntity;
    list(this: any, reqmatch?: ListAgentIntegrationsResponseDtoListMatch, ctrl?: Control): Promise<ListAgentIntegrationsResponseDtoEntity[]>;
}
export { ListAgentIntegrationsResponseDtoEntity };
