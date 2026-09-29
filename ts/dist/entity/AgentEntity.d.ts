import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Agent, AgentLoadMatch, AgentListMatch, AgentCreateData, AgentUpdateData, AgentRemoveMatch } from '../NovuTypes';
declare class AgentEntity extends NovuEntityBase<Agent> {
    constructor(client: NovuSDK, entopts: any);
    make(this: AgentEntity): AgentEntity;
    load(this: any, reqmatch?: AgentLoadMatch, ctrl?: Control): Promise<AgentEntity>;
    list(this: any, reqmatch?: AgentListMatch, ctrl?: Control): Promise<AgentEntity[]>;
    create(this: any, reqdata?: AgentCreateData, ctrl?: Control): Promise<AgentEntity>;
    update(this: any, reqdata?: AgentUpdateData, ctrl?: Control): Promise<AgentEntity>;
    remove(this: any, reqmatch?: AgentRemoveMatch, ctrl?: Control): Promise<AgentEntity>;
}
export { AgentEntity };
