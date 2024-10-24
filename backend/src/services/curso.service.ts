import { Curso } from "../models/curso";

interface ICurso {
    nombre: string
    descripcion: string
    profesores?: string[]
}

export class CursoService {
    public async publicarCurso(data: ICurso, creadorId: string) {
        try {
            const profesores = data.profesores ? [...data.profesores, creadorId] : [creadorId];
            const curso = new Curso({
                ...data, profesores
            });
            await curso.save();
            return curso
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}