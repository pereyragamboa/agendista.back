const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const services = require('./services');
const clients = require('./clients/index');

const clientsServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...clients }])
});
const servicesServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...services }])
});

let port = 4000;
const serviceList = [];
const start = async () =>
{
  serviceList.push(await startServer(servicesServer, "services"));
  serviceList.push(await startServer(clientsServer, "clients"));
  const gateway = new ApolloGateway({ serviceList });
  const server = new ApolloServer({gateway, subscriptions: false});
  const result = await server.listen();
  console.log(`GraphQL main server (${result.url}) started at ${new Date().toLocaleTimeString()}.`);
};
start();

async function startServer(server, serverTag) {
  try {
    const result = await server.listen(++port);
    console.log(`GraphQL server '${serverTag}' (${result.url}) started at ${new Date().toLocaleTimeString()}.`);
    return {
      name: serverTag,
      url: result.url
    };
  } catch (err) {
    console.log(` ERR > ${err}`);
  }
}