const fs = require('fs');
const { gql } = require('apollo-server');
const clientResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/clients/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getAllClients: clientResolvers.getAllClients,
      getClient: (parent, args) => clientResolvers.getClient(args.clientId),
    },
    Mutation: {
      addClient: (parent, args) => clientResolvers.addClient(args.client),
      deleteClient: (parent, args) => clientResolvers.deleteClient(args.clientId),
      updateClient: (parent, args) => clientResolvers.updateClient(args.clientId, args.client),
    },
    Client: {
      __resolveReference(client, { fetchById }){
        return fetchById(client.id);
      }
    }
  }
};