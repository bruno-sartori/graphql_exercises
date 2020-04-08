const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'oton',
        password: 'zeta@odin@145',
        database: 'isp_dev'
    },
});

const getUsers = async () => knex('fornecedores').select('nomeFantasia');

getUsers().then(res => console.log(res));

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers,
    context: {
        db: knex
    }
});

server.start();