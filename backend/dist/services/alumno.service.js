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
exports.AlumnoService = void 0;
const jwt_1 = require("../jwt/jwt");
const alumno_1 = require("../models/alumno");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AlumnoService {
    registrarAlumno(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alumnoExiste = yield alumno_1.Alumno.findById({ email: data.email });
                if (alumnoExiste) {
                    return {
                        ok: false,
                        message: 'El email ya existe',
                        error: 'El email ya existe'
                    };
                }
                data.password = bcryptjs_1.default.hashSync(data.password, 10);
                const newAlumno = new alumno_1.Alumno(data);
                yield newAlumno.save();
                const token = yield (0, jwt_1.generateJWT)(newAlumno.id, newAlumno.nombre);
                return { newAlumno, token };
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.AlumnoService = AlumnoService;
;
//# sourceMappingURL=alumno.service.js.map