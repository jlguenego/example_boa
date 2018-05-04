const { GraphQLObjectType, GraphQLString } = require('graphql');
const ticket = require('./type/ticket');

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
            resolve: (root, { name }) => {
                // try {
                //     const m = new model(req.body);
                //     await m.save();
                //     res.status(201).json({ content: hateoas.addLink(req, m.toObject()) });
                // } catch (e) {
                //     res.status(e.status || 500).json({ error: e.message });
                // }

                return { id: 47, name: 'created fake' };
            },
        },
    },
});