"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
const mongoose_1 = require("mongoose");
const EventoSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    profesor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Profesor',
        required: true
    },
    cursoDestinado: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Evento = (0, mongoose_1.model)('Evento', EventoSchema);
//# sourceMappingURL=evento.js.map