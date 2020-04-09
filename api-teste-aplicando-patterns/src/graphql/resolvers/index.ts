import DepartamentoResolver from './DepartamentoResolver';
import ClienteResolver from './ClienteResolver';

const rootResolver = {
    Query: {
        ...ClienteResolver.Query,
        ...DepartamentoResolver.Query,
    },
    Mutation: {
        ...ClienteResolver.Mutation,
        ...DepartamentoResolver.Mutation,
    }
};

export default rootResolver;
