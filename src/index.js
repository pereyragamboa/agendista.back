const { buildSchema } = require('graphql');
const express = require('express');
const graphqlHttp = require('express-graphql');
const { serviceRoot, serviceSchema } = require('./services');

const app = express();
app.use('/graphql', graphqlHttp({
  graphiql: true,
  rootValue: {...serviceRoot},
  schema: buildSchema(serviceSchema)
}));
app.listen(4000);
console.log(`GraphQL server started at ${new Date().toLocaleTimeString()}.`);
