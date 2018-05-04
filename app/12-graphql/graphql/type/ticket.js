const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Ticket',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLString),
            description: 'ticket id',
        },
        name: {
            type: GraphQLString,
            description: 'ticket name',
        }
    },
    description: 'the ticket description...'
});