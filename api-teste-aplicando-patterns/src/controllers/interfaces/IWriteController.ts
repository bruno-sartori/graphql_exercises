import { RequestHandler } from 'express';

interface IWriteController {
    create: RequestHandler;
    update: RequestHandler;
    delete: RequestHandler;
}

export default IWriteController;