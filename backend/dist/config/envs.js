"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
if (!process.env.MONGO_URL) {
    throw new Error('Missing critical environment variables: MONGO_URL');
}
;
exports.envs = {
    port: +process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED
};
//# sourceMappingURL=envs.js.map