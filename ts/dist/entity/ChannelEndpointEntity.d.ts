import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ChannelEndpoint, ChannelEndpointLoadMatch, ChannelEndpointListMatch, ChannelEndpointCreateData, ChannelEndpointUpdateData, ChannelEndpointRemoveMatch } from '../NovuTypes';
declare class ChannelEndpointEntity extends NovuEntityBase<ChannelEndpoint> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ChannelEndpointEntity): ChannelEndpointEntity;
    load(this: any, reqmatch?: ChannelEndpointLoadMatch, ctrl?: Control): Promise<ChannelEndpointEntity>;
    list(this: any, reqmatch?: ChannelEndpointListMatch, ctrl?: Control): Promise<ChannelEndpointEntity[]>;
    create(this: any, reqdata?: ChannelEndpointCreateData, ctrl?: Control): Promise<ChannelEndpointEntity>;
    update(this: any, reqdata?: ChannelEndpointUpdateData, ctrl?: Control): Promise<ChannelEndpointEntity>;
    remove(this: any, reqmatch?: ChannelEndpointRemoveMatch, ctrl?: Control): Promise<ChannelEndpointEntity>;
}
export { ChannelEndpointEntity };
