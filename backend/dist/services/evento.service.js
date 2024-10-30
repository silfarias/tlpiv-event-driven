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
exports.EventoService = void 0;
const curso_1 = require("../models/curso");
const evento_1 = require("../models/evento");
class EventoService {
    crearEvento(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const curso = yield curso_1.Curso.findOne({ _id: data.cursoDestinado, profesor: data.profesor });
                if (!curso) {
                    throw new Error('El curso no pertenece a este profesor o no existe');
                }
                const newEvento = new evento_1.Evento(data);
                yield newEvento.save();
                this.emitirEventoCreacion(newEvento);
                return newEvento;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    emitirEventoCreacion(evento) {
        console.log(`Evento creado: ${evento.titulo}`);
    }
}
exports.EventoService = EventoService;
;
//# sourceMappingURL=evento.service.js.map