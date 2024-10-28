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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoController = void 0;
const alumno_service_1 = require("../services/alumno.service");
class AlumnoController {
    constructor() {
        this.alumnoService = new alumno_service_1.AlumnoService();
        this.registrarAlumno = this.registrarAlumno.bind(this);
    }
    registrarAlumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellido, email, password } = req.body;
            try {
                const { newAlumno, token } = yield this.alumnoService.registrarAlumno({ nombre, apellido, email, password });
                return res.status(201).json({
                    ok: true,
                    message: 'Alumno registrado exitosamente',
                    alumno: newAlumno,
                    token
                });
            }
            catch (error) {
                if (error.message === 'El email ya existe') {
                    return res.status(400).json({
                        ok: false,
                        message: 'El email ya existe',
                        error: error.message
                    });
                }
                return res.status(500).json({
                    ok: false,
                    message: 'Error al registrar el alumno',
                    error: error.message
                });
            }
        });
    }
}
exports.AlumnoController = AlumnoController;
;
//# sourceMappingURL=alumno.controller.js.map