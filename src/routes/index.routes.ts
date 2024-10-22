import { Router } from 'express';
import { eventCtrl } from '../modules/controllers/event.controller';

const routes = Router();

routes.get('/start', eventCtrl);

export { routes };