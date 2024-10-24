import { Request, Response } from 'express';
import { Alumno } from '../models/alumno';
import { generateJWT } from '../jwt/jwt';
import bcrypt from 'bcryptjs';


export const registrarAlumno = async (req: Request, res: Response): Promise<any> => {
    const { nombre, apellido, email, password } = req.body;
    try {
        let alumno = await Alumno.findOne({ email });
        if (alumno) {
            return res.status(400).json({
                ok: false,
                message: 'El email ya existe',
                error: 'El email ya existe'
            });
        }
        alumno = new Alumno(req.body);

        const salt = bcrypt.genSaltSync();
        alumno.password = bcrypt.hashSync(password, salt);

        await alumno.save();

        const token = await generateJWT(alumno.id, alumno.nombre);

        return res.status(201).json({
            ok: true,
            uid: alumno._id,
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            email: alumno.email,
            password: alumno.password,
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al crear el Alumno',
            error
        });
    }
};