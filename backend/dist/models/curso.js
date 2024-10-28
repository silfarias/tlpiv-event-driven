"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const mongoose_1 = require("mongoose");
const CursoSchema = new mongoose_1.Schema({
    nombre: {
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
    alumnos: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Alumno'
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});
exports.Curso = (0, mongoose_1.model)('Curso', CursoSchema);
//# sourceMappingURL=curso.js.map