const fs = require('fs');
const { gql } = require('apollo-server');
const customerResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/customers/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getAllCustomers: customerResolvers.getAllCustomers,
      getCustomer: (parent, args) => customerResolvers.getCustomer(args.clientId),
    },
    Mutation: {
      addCustomer: (parent, args) => customerResolvers.addCustomer(args.client),
      deleteCustomer: (parent, args) => customerResolvers.deleteCustomer(args.clientId),
      updateCustomer: (parent, args) => customerResolvers.updateCustomer(args.clientId, args.client),
    },
    Customer: {
      __resolveReference(client, { fetchById }){
        return fetchById(client.id);
      }
    }
  }
};