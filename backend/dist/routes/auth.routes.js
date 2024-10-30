"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const userShema_1 = require("../models/schema/userShema");
const auth_controller_1 = require("../controllers/auth.controller");
const validarJwt_1 = require("../jwt/validarJwt");
const revalidarToken_1 = require("../jwt/revalidarToken");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/', userShema_1.validateLogin, auth_controller_1.loginUsuario);
authRouter.get('/renew', validarJwt_1.validarJwt, revalidarToken_1.revalidarToken);
//# sourceMappingURL=auth.routes.js.map