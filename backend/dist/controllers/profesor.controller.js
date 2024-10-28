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
exports.registrarProfesor = void 0;
const profesor_1 = require("../models/profesor");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../jwt/jwt");
const registrarProfesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, password } = req.body;
    try {
        let profe = yield profesor_1.Profesor.findOne({ email });
        if (profe) {
            return res.status(400).json({
                ok: false,
                message: 'El email ya existe',
                error: 'El email ya existe'
            });
        }
        profe = new profesor_1.Profesor(req.body);
        const salt = bcryptjs_1.default.genSaltSync();
        profe.password = bcryptjs_1.default.hashSync(password, salt);
        yield profe.save();
        const token = yield (0, jwt_1.generateJWT)(profe.id, profe.nombre);
        return res.status(201).json({
            ok: true,
            uid: profe._id,
            nombre: profe.nombre,
            apellido: profe.apellido,
            email: profe.email,
            password: profe.password,
            token: token
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al crear el profesor',
            error
        });
    }
});
exports.registrarProfesor = registrarProfesor;
//# sourceMappingURL=profesor.controller.js.map