import IReadController from './IReadController';
import IWriteController from './IWriteController';

interface IBaseController extends IReadController, IWriteController {
    
} 

export default IBaseController;