const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const app = express.Router();
module.exports = app;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
