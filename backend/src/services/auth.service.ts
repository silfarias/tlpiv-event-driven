import { Alumno } from "../models/alumno";
import { Profesor } from "../models/profesor";
import { generateJWT } from "../jwt/jwt";
import { comparePassword } from "../utils/hash";

export class AuthService {
    public async login(email: string, password: string) {
        const [profesor, alumno] = await Promise.all([
            Profesor.findOne({ email }),
            Alumno.findOne({ email })
        ]);

        const user = profesor || alumno;
        console.log(user);

        if (!user) {
            throw new Error('El usuario no existe');
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Contraseña incorrecta');
        }

        const token = await generateJWT(user.id, user.nombre);

        return {
            uid: user._id,
            name: user.nombre,
            role: profesor ? 'Profesor' : 'Alumno',
            token: token
        };
    }
};