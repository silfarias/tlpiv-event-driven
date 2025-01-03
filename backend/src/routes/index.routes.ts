import { Router } from 'express';
import { profesorRouter } from './profesor.routes';
import { alumnoRouter } from './alumno.routes';
import { authRouter } from './auth.routes';
import { cursoRouter } from './curso.routes';
import { eventRouter } from './evento.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/profesor', profesorRouter);
routes.use('/alumno', alumnoRouter);
routes.use('/curso', cursoRouter);
routes.use('/evento', eventRouter);

export { routes };