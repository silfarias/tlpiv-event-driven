import { Router } from "express";
import { validateLogin } from "../models/schema/userShema";
import { loginUsuario } from "../controllers/auth-copy-controller";
import { validarJwt } from "../jwt/validarJwt";
import { revalidarToken } from "../jwt/revalidarToken";
import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();
const ctrlAuth = new AuthController();

authRouter.post('/', validateLogin, ctrlAuth.login);
authRouter.get('/renew', validarJwt, revalidarToken);

export { authRouter };