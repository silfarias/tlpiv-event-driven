"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRouter = void 0;
const express_1 = require("express");
const validarJwt_1 = require("../jwt/validarJwt");
const curso_controller_1 = require("../controllers/curso.controller");
const cursoRouter = (0, express_1.Router)();
exports.cursoRouter = cursoRouter;
const cursoCtrl = new curso_controller_1.CursoController();
cursoRouter.post('/', validarJwt_1.validarJwt, cursoCtrl.publicarCurso);
cursoRouter.get('/', validarJwt_1.validarJwt, cursoCtrl.listarCursos);
cursoRouter.get('/:id', validarJwt_1.validarJwt, cursoCtrl.obtenerCursosPorProfe);
cursoRouter.post('/inscribir/:id', validarJwt_1.validarJwt, cursoCtrl.inscribirAlumno);
//# sourceMappingURL=curso.routes.js.map