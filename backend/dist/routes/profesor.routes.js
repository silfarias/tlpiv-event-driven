"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesorRouter = void 0;
const express_1 = require("express");
const profesor_controller_1 = require("../controllers/profesor.controller");
const userShema_1 = require("../models/schema/userShema");
const profesorRouter = (0, express_1.Router)();
exports.profesorRouter = profesorRouter;
profesorRouter.post('/', userShema_1.validateRegister, profesor_controller_1.registrarProfesor);
//# sourceMappingURL=profesor.routes.js.map