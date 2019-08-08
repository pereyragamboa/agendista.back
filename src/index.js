const { ApolloServer, gql } = require('apollo-server');
const { serviceRoot, serviceSchema } = require('./services');
const clients = require('./clients/index');

const servicesServer = new ApolloServer({
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

const clientsServer = new ApolloServer(clients);

let port = 4000;
try {
  [servicesServer, clientsServer].forEach(async server => {
    const result = await server.listen(++port);
    console.log(`GraphQL server ${result.url} started at ${new Date().toLocaleTimeString()}.`);
  });
} catch (err) {
  console.log(` ERR > ${err}`);
}