import { Router } from "express";
import { registrarAlumno } from "../controllers/alumno.controller";

const alumnoRouter = Router();

alumnoRouter.post('/', registrarAlumno);

export { alumnoRouter };