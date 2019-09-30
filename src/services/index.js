const fs = require('fs');
const { gql } = require('apollo-server');
const resolvers = require('./resolvers');

const typeDefs = gql(fs.readFileSync('./src/services/schema.graphqls').toString());

const serviceResolvers = {
  Query:{
    getServices: (parent, args) => resolvers.getServices(args.profileId),
    getService: (parent, args) => resolvers.getService(args.serviceId),
  },
  Mutation:{
    addService: (parent, args) => resolvers.addService(args.profileId, args.newService),
    deleteService: (parent, args) => resolvers.deleteService(args.serviceId),
    updateService: (parent, args) => resolvers.updateService(args.serviceId, args.service),
  },
  Service: {
    __resolveReference(reference) {
      return resolvers.getService(reference.id);
    }
  },
};

module.exports = { typeDefs, resolvers: serviceResolvers };