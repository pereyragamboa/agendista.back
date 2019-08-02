const { ApolloServer, gql } = require('apollo-server');
const { serviceRoot, serviceSchema } = require('./services');

const apolloServer = new ApolloServer({
  typeDefs: gql(serviceSchema),
  resolvers: {
    Query: {
      getService: (parent, args) => serviceRoot.getService(args),
      getAllServices: serviceRoot.getAllServices,
    },
    Mutation: {
      addService: (parent, args) => serviceRoot.addService(args),
      deleteService: (parent, args) => serviceRoot.deleteService(args),
      updateService: (parent, args) => serviceRoot.updateService(args)
    }
  }
});

async function startServer() {
  const result = await apolloServer.listen();
  console.log(`GraphQL server ${result.url} started at ${new Date().toLocaleTimeString()}.`);
}

startServer();
