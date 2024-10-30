"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumnoRouter = void 0;
const express_1 = require("express");
const alumno_controller_1 = require("../controllers/alumno.controller");
const alumnoRouter = (0, express_1.Router)();
exports.alumnoRouter = alumnoRouter;
const ctrlAlumno = new alumno_controller_1.AlumnoController();
alumnoRouter.post('/', ctrlAlumno.registrarAlumno);
//# sourceMappingURL=alumno.routes.js.map