//const graphql = import('graphql');

const serviceQueries = `type Query{
  getAllServices: [Service]
  getService (serviceId: ID): Service
}`;

module.exports = serviceQueries;