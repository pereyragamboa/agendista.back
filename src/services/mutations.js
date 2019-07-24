const serviceMutations = `type Mutation{
  addService (newService: ServiceInput!): Service
  updateService (serviceId: ID!, service: ServiceInput!): Service
  deleteService (serviceId: ID!): Boolean!
}`;

module.exports = serviceMutations;