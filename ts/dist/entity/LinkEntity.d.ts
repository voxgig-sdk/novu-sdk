import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Link, LinkCreateData } from '../NovuTypes';
declare class LinkEntity extends NovuEntityBase<Link> {
    constructor(client: NovuSDK, entopts: any);
    make(this: LinkEntity): LinkEntity;
    create(this: any, reqdata?: LinkCreateData, ctrl?: Control): Promise<LinkEntity>;
}
export { LinkEntity };
