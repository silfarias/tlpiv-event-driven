import { Curso } from "../models/curso";
import { Profesor } from "../models/profesor";

interface ICurso {
    nombre: string
    descripcion: string
    profesores?: string[]
}

export class CursoService {
    public async publicarCurso(data: ICurso, profesorId: string) {
        try {

            // const profesores = data.profesores ? [...data.profesores, profesorId] : [profesorId];

            // const profesoresValidos = await Profesor.find({ '_id': { $in: profesores } });
            // if (profesoresValidos.length !== profesores.length) {
            //     throw new Error('Uno o más profesores no existen en la base de datos');
            // }

            const curso = new Curso({
                ...data, 
                profesores: [profesorId]
            });
            await curso.save();
            console.log(curso)
            return curso
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}