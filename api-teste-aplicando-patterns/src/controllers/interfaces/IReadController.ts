import { RequestHandler } from 'express';

interface IReadController {
    getById: RequestHandler;
    list: RequestHandler;   
    getTotals: RequestHandler;
}

export default IReadController;
