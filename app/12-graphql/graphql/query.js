const { GraphQLObjectType, GraphQLString } = require('graphql');
const ticket = require('./type/ticket');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        ticket: {
            type: ticket,
            args: {
                id: {
                    description: 'id of the ticket',
                    type: GraphQLString,
                },
            },
            resolve: (root, { id }) => {
                console.log('root', root);
                console.log('id', id);
                return { id: 45, name: 'fake' };
            },
        },
    }),
});