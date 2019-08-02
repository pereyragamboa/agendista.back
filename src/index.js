const { ApolloServer, gql } = require('apollo-server');
const { serviceRoot, serviceSchema } = require('./services');

const apolloServer = new ApolloServer({
  typeDefs: gql(serviceSchema),
  resolvers: {
    Query: {
      getService: serviceRoot.getService,
      getAllServices: serviceRoot.getAllServices,
    },
    Mutation: {
      addService: serviceRoot.addService,
      deleteService: serviceRoot.deleteService,
      updateService: serviceRoot.updateService
    }
  }
});

apolloServer.listen().then(({url}) => {
  console.log(`GraphQL server ${url} started at ${new Date().toLocaleTimeString()}.`);
});
