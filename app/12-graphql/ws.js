const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket',
    new mongoose.Schema({
        // number: { type: String, required: true, unique: true, index: true },
        // category: String,
        // movie: String
        name: String
    }, {
            strict: false, // allow other field to be saved in MongoDB.
        }));

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/boa');
        console.log('connected to MongoDB.');
    } catch (e) {
        console.log('error while connecting to MongoDB.', e.message);
        process.exit(1);
    }
}
connect();


const app = express.Router();
module.exports = app;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
