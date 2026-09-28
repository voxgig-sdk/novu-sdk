import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { ChannelConnection, ChannelConnectionLoadMatch, ChannelConnectionCreateData, ChannelConnectionUpdateData, ChannelConnectionRemoveMatch } from '../NovuTypes';
declare class ChannelConnectionEntity extends NovuEntityBase<ChannelConnection> {
    constructor(client: NovuSDK, entopts: any);
    make(this: ChannelConnectionEntity): ChannelConnectionEntity;
    load(this: any, reqmatch?: ChannelConnectionLoadMatch, ctrl?: Control): Promise<ChannelConnectionEntity>;
    create(this: any, reqdata?: ChannelConnectionCreateData, ctrl?: Control): Promise<ChannelConnectionEntity>;
    update(this: any, reqdata?: ChannelConnectionUpdateData, ctrl?: Control): Promise<ChannelConnectionEntity>;
    remove(this: any, reqmatch?: ChannelConnectionRemoveMatch, ctrl?: Control): Promise<ChannelConnectionEntity>;
}
export { ChannelConnectionEntity };
