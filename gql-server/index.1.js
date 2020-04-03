const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');
const { importSchema } = require('graphql-import');

const schema1 = importSchema('./schema1.graphql');
// GraphQL Schema
const schema = buildSchema(schema1);

// Root resolver
const root = {
    message: () => 'Hello World',
};


// Create express server and a GraphQL endpoint
const app = express();

app.use('/graphql', expressGraphql({
    schema,
    rootValue: root,
    graphiql: true, // tool to see on browser? analyse
}));

app.listen(5009, () => {
    console.log('listening on http://localhost:5009/graphql');
});