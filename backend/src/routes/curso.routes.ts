import { Router } from "express";
// import { publicarCurso } from "../controllers/pruebaCurso";
import { validarJwt } from "../jwt/validarJwt";

const cursoRouter = Router();

cursoRouter.get('/', validarJwt);

export { cursoRouter }