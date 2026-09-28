import { NovuEntityBase } from '../NovuEntityBase';
import type { NovuSDK } from '../NovuSDK';
import type { Control } from '../types';
import type { Step, StepLoadMatch } from '../NovuTypes';
declare class StepEntity extends NovuEntityBase<Step> {
    constructor(client: NovuSDK, entopts: any);
    make(this: StepEntity): StepEntity;
    load(this: any, reqmatch?: StepLoadMatch, ctrl?: Control): Promise<StepEntity>;
}
export { StepEntity };
