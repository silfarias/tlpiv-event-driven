import { Request, Response } from "express";
import { AuthService } from "../services/auth.service"; 
import { handleError } from "../utils/handleError"; 

const authService = new AuthService();

export class AuthController {
    public async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const userData = await authService.login(email, password);
            res.json({
                ok: true,
                ...userData
            });
        } catch (error) {
            const errorResponse = handleError(error, 'Error en el login');
            res.status(400).json(errorResponse);
        }
    };
};