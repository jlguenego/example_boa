const { GraphQLObjectType, GraphQLString } = require('graphql');
const ticket = require('./type/ticket');
const database = require('../database');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTicket: {
            type: ticket,
            args: {
                name: {
                    description: 'name of the ticket',
                    type: GraphQLString,
                },
            },
            resolve: async (root, { name }) => {
                const ticket = await database.createTicket({name});
                return ticket;
            },
        },
        updateTicket: {
            type: ticket,
            args: {
                id: {
                    description: 'id of the ticket',
                    type: GraphQLString, 
                },
                name: {
                    description: 'name of the ticket',
                    type: GraphQLString,
                },
            },
            resolve: async (root, { id, name }) => {
                const ticket = await database.updateTicket(id, {name});
                return ticket;
            },
        },
        deleteTicket: {
            type: ticket,
            args: {
                id: {
                    description: 'id of the ticket',
                    type: GraphQLString, 
                },
            },
            resolve: async (root, { id, name }) => {
                const ticket = await database.deleteTicket(id);
                return ticket;
            },
        },
    },
});