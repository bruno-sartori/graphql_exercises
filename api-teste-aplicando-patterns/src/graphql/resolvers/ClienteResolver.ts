import ClienteRepository from '../../repositories/ClienteRepository';
import IClienteModel from '../../models/interfaces/IClienteModel';

const clienteRepository = new ClienteRepository();

const ClienteResolver = {
    Query: {
        clientes: () => clienteRepository.list({}),
        cliente: (_: any, { id }: { id: string}) => clienteRepository.getById(parseInt(id, 10)),
    },
    Mutation: {
        createCliente: (_: any, params: IClienteModel) => clienteRepository.create(params),
    }
};

export default ClienteResolver;
