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
exports.CursoController = void 0;
const curso_service_1 = require("../services/curso.service");
class CursoController {
    constructor() {
        this.cursoService = new curso_service_1.CursoService();
        this.publicarCurso = this.publicarCurso.bind(this);
        this.listarCursos = this.listarCursos.bind(this);
        this.obtenerCursosPorProfe = this.obtenerCursosPorProfe.bind(this);
        this.inscribirAlumno = this.inscribirAlumno.bind(this);
    }
    publicarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profesorId = req.uid;
            try {
                const { nombre, descripcion } = req.body;
                const curso = yield this.cursoService.publicarCurso({ nombre, descripcion }, profesorId);
                return res.status(201).json({
                    ok: true,
                    curso
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    message: 'Error al publicar el curso',
                    error
                });
            }
        });
    }
    listarCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield this.cursoService.listarCursos();
                return res.status(200).json(cursos);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    message: 'Error al obtener cursos',
                    error
                });
            }
        });
    }
    obtenerCursosPorProfe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const cursos = yield this.cursoService.obtenerCursosPorProfe(id);
                return res.status(200).json(cursos);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    message: 'Error al obtener cursos',
                    error
                });
            }
        });
    }
    inscribirAlumno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumnoId = req.body.alumnoId;
                const curso = yield this.cursoService.inscribirAlumno(id, alumnoId);
                return res.status(200).json({
                    ok: true,
                    curso
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    message: 'Error al inscribir alumno en el curso',
                    error
                });
            }
        });
    }
}
exports.CursoController = CursoController;
;
//# sourceMappingURL=curso.controller.js.map