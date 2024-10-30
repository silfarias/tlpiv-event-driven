"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const profesor_routes_1 = require("./profesor.routes");
const alumno_routes_1 = require("./alumno.routes");
const auth_routes_1 = require("./auth.routes");
const curso_routes_1 = require("./curso.routes");
const evento_routes_1 = require("./evento.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/auth', auth_routes_1.authRouter);
routes.use('/profe', profesor_routes_1.profesorRouter);
routes.use('/alumno', alumno_routes_1.alumnoRouter);
routes.use('/curso', curso_routes_1.cursoRouter);
routes.use('/evento', evento_routes_1.eventRouter);
//# sourceMappingURL=index.routes.js.map