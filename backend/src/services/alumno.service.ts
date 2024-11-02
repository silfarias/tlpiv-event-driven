import { generateJWT } from "../jwt/jwt";
import { Alumno } from "../models/alumno";
import { hashPassword } from "../utils/hash";

export interface IAlumno {
    nombre: string;
    apellido: string;
    email: string;
    password: string
}

export class AlumnoService {
    public async registrarAlumno(data: IAlumno) {
        try {
            const alumnoExiste = await Alumno.findOne({ email: data.email });
            if (alumnoExiste) {
                return {
                    ok: false,
                    message: 'El email ya existe',
                    error: 'El email ya existe'
                }
            }
            const hashedPassword = await hashPassword(data.password);
            data.password = hashedPassword;
            const newAlumno = new Alumno(data);
            await newAlumno.save();
            const token = await generateJWT(newAlumno.id, newAlumno.nombre);
            return { newAlumno, token };
        } catch (error: unknown) {
            console.log(error);
            throw error
        }
    }

    public async obtenerAlumnos() {
        try {
            const alumnos = await Alumno.find();
            return alumnos
        } catch (error: unknown) {
            console.log(error);
            throw error
        }
    }
};