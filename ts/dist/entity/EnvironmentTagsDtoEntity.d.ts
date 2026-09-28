import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { EnvironmentTagsDto, EnvironmentTagsDtoListMatch } from '../NovuTypes';
declare class EnvironmentTagsDtoEntity extends NovuEntityBase<EnvironmentTagsDto> {
    constructor(client: NovuSDK, entopts: any);
    make(this: EnvironmentTagsDtoEntity): EnvironmentTagsDtoEntity;
    list(this: any, reqmatch?: EnvironmentTagsDtoListMatch, ctrl?: Control): Promise<EnvironmentTagsDtoEntity[]>;
}
export { EnvironmentTagsDtoEntity };
