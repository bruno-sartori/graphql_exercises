import path from 'path';

const querySchema = path.resolve(__dirname, 'query.graphql');
const mutationSchema = path.resolve(__dirname, 'mutation.graphql');
const departamentoSchema = path.resolve(__dirname, 'departamento.graphql');
const clienteSchema = path.resolve(__dirname, 'cliente.graphql');

export default [querySchema, mutationSchema, departamentoSchema, clienteSchema];
