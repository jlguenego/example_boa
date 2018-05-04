const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const ticket = require('./type/ticket');
const database = require('../database');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        tickets: {
            type: new GraphQLList(ticket),
            resolve: async (root) => {
                console.log('root', root);
                return database.retrieveAllTicket();
            },
        },
        ticket: {
            type: ticket,
            args: {
                id: {
                    description: 'id of the ticket',
                    type: GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (root, { id }) => {
                console.log('root', root);
                console.log('id', id);
                return { id: 45, name: 'fake' };
            },
        },
    }),
});