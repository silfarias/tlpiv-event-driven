"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const mongoose_1 = require("mongoose");
const AlumnoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Alumno = (0, mongoose_1.model)('Alumno', AlumnoSchema);
//# sourceMappingURL=alumno.js.map