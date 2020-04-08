import DepartamentoResolver from './Departamento';

const rootResolver = {
    Query: {
        ...DepartamentoResolver.Query,
    },
    Mutation: {
        ...DepartamentoResolver.Mutation,
    }
};

export default rootResolver;
