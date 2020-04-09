import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import db from './database';
import routes from './routes';
import schemas from './graphql/schemas';
import resolvers from './graphql/resolvers';

console.log(schemas);
const server = new GraphQLServer({
    typeDefs: schemas,
    resolvers,
    context: {
        db
    }
});

server.start();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.route('/departamentos')


app.listen(9001, () => {
    console.log("Listening on 9001");
});
