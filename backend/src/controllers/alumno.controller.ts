import { Request, Response } from "express";
import { AlumnoService, IAlumno } from "../services/alumno.service";

const alumnoService = new AlumnoService();

export class AlumnoController {

    public async registrarAlumno(req: Request, res: Response) {
        const { nombre, apellido, email, password } = req.body as IAlumno;

        try {
            const { newAlumno, token } = await alumnoService.registrarAlumno({ nombre, apellido, email, password });
            res.status(201).json({
                ok: true,
                message: 'Alumno registrado exitosamente',
                alumno: newAlumno,
                token
            });
        } catch (error: unknown) {
            res.status(500).json({
                ok: false,
                message: 'Error al registrar el alumno',
                error: error
            });
        }
    };

    public async obtenerAlumnos(req: Request, res: Response) {
        try {
            const alumnos = await alumnoService.obtenerAlumnos();
            res.status(200).json({
                message: 'Alumnos obtenidos exitosamente',
                alumnos
            });
        } catch (error: unknown) {
            console.log(error);
            res.status(500).json({
                ok: false,
                message: 'Error al obtener alumnos',
                error: error
            });
        }
    };
}