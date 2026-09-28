"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NovuError = void 0;
class NovuError extends Error {
    isNovuError = true;
    sdk = 'Novu';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NovuError = NovuError;
//# sourceMappingURL=NovuError.js.map