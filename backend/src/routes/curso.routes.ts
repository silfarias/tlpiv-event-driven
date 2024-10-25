import { Router } from "express";
import { validarJwt } from "../jwt/validarJwt";
import { CursoController } from "../controllers/curso.controller";

const cursoRouter = Router();
const cursoCtrl = new CursoController();

cursoRouter.post('/', validarJwt, cursoCtrl.publicarCurso);

export { cursoRouter }