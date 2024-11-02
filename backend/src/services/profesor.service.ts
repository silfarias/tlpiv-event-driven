import { generateJWT } from "../jwt/jwt";
import { Profesor } from "../models/profesor";
import { hashPassword } from "../utils/hash";

export interface IProfesor {
    nombre: string;
    apellido: string;
    email: string;
    password: string
}

export class ProfesorService {
    public async registrarProfesor(data: IProfesor) {
        try {
            const profesorExiste = await Profesor.findOne({ email: data.email });
            if (profesorExiste) {
                return {
                    ok: false,
                    message: 'El email ya existe',
                    error: 'El email ya existe'
                }
            }
            const hashedPassword = await hashPassword(data.password);
            data.password = hashedPassword;
            const newProfesor = new Profesor(data);
            await newProfesor.save();
            const token = await generateJWT(newProfesor.id, newProfesor.nombre);
            return { newProfesor, token };
        } catch (error: unknown) {
            console.log(error);
            throw error
        }
    }

    public async obtenerProfesores() {
        try {
            const profesores = await Profesor.find();
            return profesores
        } catch (error: unknown) {
            console.log(error);
            throw error
        }
    }
};