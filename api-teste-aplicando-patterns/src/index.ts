import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import path from 'path';
import resolvers from './resolvers';
import db from './database';
import routes from './routes';

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, './graphql/schema.graphql'),
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
