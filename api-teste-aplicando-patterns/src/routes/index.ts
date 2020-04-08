import { Application } from 'express';
import departamentoRoutes from './departamentoRoutes';

export default (app: Application) => {
    departamentoRoutes(app);
}
