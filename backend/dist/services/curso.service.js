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
exports.CursoService = void 0;
const curso_1 = require("../models/curso");
const mongoose_1 = require("mongoose");
class CursoService {
    publicarCurso(data, profesorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = new curso_1.Curso(Object.assign(Object.assign({}, data), { profesor: profesorId }));
                yield curso.save();
                console.log(curso);
                return curso;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    listarCursos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield curso_1.Curso.find().populate('profesor').populate('alumnos');
                return cursos;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    obtenerCursosPorProfe(profesorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield curso_1.Curso.find({ profesor: profesorId }).populate('alumnos');
                return cursos;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    inscribirAlumno(id, alumnoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = yield curso_1.Curso.findById(id);
                if (!curso) {
                    throw new Error('Curso no encontrado');
                }
                if (!curso.alumnos.includes(new mongoose_1.Types.ObjectId(alumnoId))) {
                    curso.alumnos.push(new mongoose_1.Types.ObjectId(alumnoId));
                    yield curso.save();
                }
                return curso;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.CursoService = CursoService;
;
//# sourceMappingURL=curso.service.js.map