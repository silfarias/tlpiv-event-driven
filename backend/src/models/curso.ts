import { Schema, model } from 'mongoose';

const CursoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    profesores: [{
        type: Schema.Types.ObjectId,
        ref: 'Profesor',
        required: true
    }]
}, {
    timestamps: true,
    versionKey: false
});

export const Curso = model('Curso', CursoSchema);