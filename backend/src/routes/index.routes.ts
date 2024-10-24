import { Router } from 'express';
import { profesorRouter } from './profesor.routes';
import { alumnoRouter } from './alumno.routes';
import { authRouter } from './auth.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/profe', profesorRouter);
routes.use('/alumno', alumnoRouter);

export { routes };