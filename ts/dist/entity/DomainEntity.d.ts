import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Domain, DomainLoadMatch, DomainListMatch, DomainCreateData, DomainUpdateData, DomainRemoveMatch } from '../NovuTypes';
declare class DomainEntity extends NovuEntityBase<Domain> {
    constructor(client: NovuSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    load(this: any, reqmatch?: DomainLoadMatch, ctrl?: Control): Promise<DomainEntity>;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
    create(this: any, reqdata?: DomainCreateData, ctrl?: Control): Promise<DomainEntity>;
    update(this: any, reqdata?: DomainUpdateData, ctrl?: Control): Promise<DomainEntity>;
    remove(this: any, reqmatch?: DomainRemoveMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
