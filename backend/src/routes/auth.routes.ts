import { Router } from "express";
import { validateLogin } from "../models/schema/userShema";
import { loginUsuario } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/', validateLogin, loginUsuario);

export { authRouter };