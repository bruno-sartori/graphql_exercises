import { Request, Response } from 'express';
import IBaseController from './interfaces/IBaseController';
import DepartamentoRepository from '../repositories/DepartamentoRepository';
import { IDepartamentoListParameters, IDepartamentoTotalsParameters } from '../repositories/interfaces/IDepartamentoRepository';
import IDepartamentoModel from '../models/interfaces/IDepartamentoModel';

class DepartamentoController implements IBaseController {

    async list(req: Request, res: Response): Promise<void> {
        try {
            const departamentoRepository = new DepartamentoRepository();
            const listParams: IDepartamentoListParameters = <IDepartamentoListParameters>req.query;
            const response = await departamentoRepository.list(listParams);
            res.send(response);
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id, 10);
            const departamentoRepository = new DepartamentoRepository();
            const response = await departamentoRepository.getById(id);
            res.send(response);
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    async getTotals(req: Request, res: Response): Promise<void> {
        try {
            const totalsParams: IDepartamentoTotalsParameters = <IDepartamentoTotalsParameters>req.query;
            const departamentoRepository = new DepartamentoRepository();
            const response = await departamentoRepository.getTotals(totalsParams);
            res.send(response);
        } catch (e) {
            console.error(e);
            res.send({ "error": "error in your request "});
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const departamento: IDepartamentoModel = <IDepartamentoModel>req.body;
            const departamentoRepository = new DepartamentoRepository();

            const response = await departamentoRepository.create(departamento);
            res.send({ "success": "success", "inserted": response });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const departamento: IDepartamentoModel = <IDepartamentoModel>req.body;
            const id: number = parseInt(req.params.id, 10);
            const departamentoRepository = new DepartamentoRepository();
           
            await departamentoRepository.update(id, departamento);
            res.send({ "success": "success" });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id, 10);
            const departamentoRepository = new DepartamentoRepository();

            const response = await departamentoRepository.delete(id);

            console.log(response);
            res.send({ "success": "success" });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export default DepartamentoController;    
