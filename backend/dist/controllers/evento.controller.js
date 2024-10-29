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
exports.EventoController = void 0;
const evento_service_1 = require("../services/evento.service");
class EventoController {
    constructor() {
        this.cursoService = new evento_service_1.EventoService();
        this.crearEvento = this.crearEvento.bind(this);
    }
    crearEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profesorId = req.uid;
            try {
                const { titulo, descripcion, cursoDestinado } = req.body;
                const eventoData = {
                    titulo,
                    descripcion,
                    profesor: profesorId,
                    cursoDestinado
                };
                const newEvent = yield this.cursoService.crearEvento(eventoData);
                return res.status(201).json({
                    ok: true,
                    message: 'Evento creado exitosamente',
                    newEvent
                });
            }
            catch (error) {
                return res.status(400).json({
                    ok: false,
                    message: error.message || 'Error al crear el evento'
                });
            }
        });
    }
}
exports.EventoController = EventoController;
//# sourceMappingURL=evento.controller.js.map