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

async function startServer() {
  const result = await apolloServer.listen();
  console.log(`GraphQL server ${result.url} started at ${new Date().toLocaleTimeString()}.`);
}

startServer();
