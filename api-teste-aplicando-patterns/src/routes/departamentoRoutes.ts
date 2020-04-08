import { Application } from 'express';
import IBaseController from '../controllers/interfaces/IBaseController';
import DepartamentoController from '../controllers/DepartamentoController';

const departamentoController: IBaseController = new DepartamentoController();

export default (app: Application) => {
    app.get('/departamentos', departamentoController.list);
    app.get('/departamentos/totals', departamentoController.getTotals);
    app.get('/departamentos/:id', departamentoController.getById);
    app.post('/departamentos', departamentoController.create);
    app.put('/departamentos/:id', departamentoController.update);
    app.delete('/departamentos/:id', departamentoController.delete);
}
