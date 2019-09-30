const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const clients = require('./clients');
const holidays = require('./holidays');
const businessHours = require('./businessHours');
const profiles = require('./profiles');
const services = require('./services');

const clientsServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...clients }])
});
const holidayServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...holidays }])
});
const businessHoursServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...businessHours }])
});
const profilesServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...profiles}])
});
const servicesServer = new ApolloServer({
  schema: buildFederatedSchema([{ ...services }])
});

let port = 4000;
const serviceList = [];
const start = async () =>
{
  serviceList.push(await startServer(clientsServer, "clients"));
  serviceList.push(await startServer(holidayServer, "holidays"));
  serviceList.push(await startServer(businessHoursServer, "businessHours"));
  serviceList.push(await startServer(profilesServer, "profiles"));
  serviceList.push(await startServer(servicesServer, "services"));
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