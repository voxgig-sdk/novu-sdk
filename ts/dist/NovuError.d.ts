import { Context } from './Context';
declare class NovuError extends Error {
    isNovuError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { NovuError };
