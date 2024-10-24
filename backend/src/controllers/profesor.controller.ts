import { Request, Response } from 'express';
import { Profesor } from '../models/profesor';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../jwt/jwt';

export const registrarProfesor = async (req: Request, res: Response): Promise<any> => {
    const { nombre, apellido, email, password } = req.body;
    try {
        let profe = await Profesor.findOne({ email });
        if (profe) {
            return res.status(400).json({
                ok: false,
                message: 'El email ya existe',
                error: 'El email ya existe'
            });
        }
        profe = new Profesor(req.body);

        const salt = bcrypt.genSaltSync();
        profe.password = bcrypt.hashSync(password, salt);

        await profe.save();

        const token = await generateJWT(profe.id, profe.nombre);

        return res.status(201).json({
            ok: true,
            uid: profe._id,
            nombre: profe.nombre,
            apellido: profe.apellido,
            email: profe.email,
            password: profe.password,
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al crear el profesor',
            error
        });
    }
};