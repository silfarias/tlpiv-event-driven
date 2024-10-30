"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJwt = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'No hay token en la petición'
        });
    }
    const secret = process.env.SECRET_JWT_SEED;
    if (!secret) {
        throw new Error('SECRET_JWT_SEED is not defined');
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret);
        const { uid, nombre } = payload;
        req.uid = uid;
        req.nombre = nombre;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Token no valido'
        });
    }
    next();
};
exports.validarJwt = validarJwt;
//# sourceMappingURL=validarJwt.js.map