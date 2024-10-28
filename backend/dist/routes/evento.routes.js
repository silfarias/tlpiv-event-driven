"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = require("express");
const validarJwt_1 = require("../jwt/validarJwt");
const evento_controller_1 = require("../controllers/evento.controller");
const eventRouter = (0, express_1.Router)();
exports.eventRouter = eventRouter;
const eventCtrl = new evento_controller_1.EventoController();
eventRouter.post('/', validarJwt_1.validarJwt, eventCtrl.crearEvento);
//# sourceMappingURL=evento.routes.js.map