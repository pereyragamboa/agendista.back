const { ApolloServer } = require('apollo-server');
const services = require('./services');
const clients = require('./clients/index');

const clientsServer = new ApolloServer(clients);
const servicesServer = new ApolloServer(services);

let port = 4000;
try {
  [servicesServer, clientsServer].forEach(async server => {
    const result = await server.listen(++port);
    console.log(`GraphQL server ${result.url} started at ${new Date().toLocaleTimeString()}.`);
  });
} catch (err) {
  console.log(` ERR > ${err}`);
}