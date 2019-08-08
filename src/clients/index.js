const { importSchema } = require('graphql-import');
const clientResolvers = require('./resolvers');

module.exports = {
  typeDefs: importSchema('src/clients/schema.graphql'),
  resolvers: {
    Query: {
      getAllClients: clientResolvers.getAllClients,
      getClient: (parent, args) => clientResolvers.getClient(args.clientId),
    },
    Mutation: {
      addClient: (parent, args) => clientResolvers.addClient(args.client),
      deleteClient: (parent, args) => clientResolvers.deleteClient(args.clientId),
      updateClient: (parent, args) => clientResolvers.updateClient(args.clientId, args.client),
    }
  }
};