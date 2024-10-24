import { Router } from "express";
import { registrarProfesor } from "../controllers/profesor.controller";
import { validateRegister } from "../models/schema/userShema";

const profesorRouter = Router();

profesorRouter.post('/', validateRegister, registrarProfesor);

export { profesorRouter };