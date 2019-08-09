const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const typeDefs = importSchema('src/services/schema.graphql');

const clientResolvers = {
  Query:{
    getAllServices: resolvers.getAllServices,
    getService: (parent, args) => resolvers.getService(args.serviceId),
  },
  Mutation:{
    addService: (parent, args) => resolvers.addService(args.newService),
    deleteService: (parent, args) => resolvers.deleteService(args.serviceId),
    updateService: (parent, args) => resolvers.updateService(args.serviceId, args.service),
  }
};

module.exports = { typeDefs, resolvers: clientResolvers };