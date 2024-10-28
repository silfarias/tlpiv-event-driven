"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = void 0;
const jwt_1 = require("../jwt/jwt");
const alumno_1 = require("../models/alumno");
const profesor_1 = require("../models/profesor");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const [profesor, alumno] = yield Promise.all([
            profesor_1.Profesor.findOne({ email }),
            alumno_1.Alumno.findOne({ email })
        ]);
        const user = profesor || alumno;
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe',
                error: 'El usuario no existe'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'Contraseña incorrecta',
                error: 'Contraseña incorrecta'
            });
        }
        const token = yield (0, jwt_1.generateJWT)(user.id, user.nombre);
        res.json({
            ok: true,
            uid: user._id,
            name: user.nombre,
            role: profesor ? 'Profesor' : 'Alumno',
            token: token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error al intentar logearte',
            error
        });
    }
});
exports.loginUsuario = loginUsuario;
//# sourceMappingURL=auth.controller.js.map