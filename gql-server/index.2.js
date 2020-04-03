const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');
const { importSchema } = require('graphql-import');

const schema1 = importSchema('./schema1.graphql');
// GraphQL Schema
const schema = buildSchema(schema1);

const coursesData = [
    {
        id: 1,
        title: 'Lorem Ipsum dolor sit amet.',
        author: 'Bruno Sartori',
        description: 'Teste',
        topic: 'Node.js',
        url: 'https://localhost:3000/teste'
    },
    {
        id: 2,
        title: 'Reactjs Topic',
        author: 'Bruno Sartori',
        description: 'Teste',
        topic: 'React.js',
        url: 'https://localhost:3000/teste'
    }
];

const getCourse = (args) => {
    const { id } = args;
    return coursesData.find(o => o.id = id);
};

const getCourses = (args) => {
    const { topic } = args;
    if (typeof topic !== 'undefined') {
        return coursesData.filter(o => o.topic = topic);
    } 

    return coursesData;
};

// Root resolver
const root = {
    course: getCourse,
    courses: getCourses,
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