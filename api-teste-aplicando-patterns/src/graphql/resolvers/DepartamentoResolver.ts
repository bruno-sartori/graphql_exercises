import DepartamentoRepository from '../../repositories/DepartamentoRepository';
import IDepartamentoModel from '../../models/interfaces/IDepartamentoModel';

const departamentoRepository = new DepartamentoRepository();

const DepartamentoResolver = {
    Query: {
        departamentos: () => departamentoRepository.list({}),
        departamento: (_: any, { id }: { id: string}) => departamentoRepository.getById(parseInt(id, 10)),
    },
    Mutation: {
        createDepartamento: (_: any, params: IDepartamentoModel) => departamentoRepository.create(params),
    }
};

export default DepartamentoResolver;
