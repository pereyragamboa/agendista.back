const fs = require('fs');
const { gql } = require('apollo-server');
const resolvers = require('./resolvers');

const typeDefs = gql(fs.readFileSync('./src/services/schema.graphqls').toString());

const clientResolvers = {
  Query:{
    getAllServices: resolvers.getAllServices,
    getService: (parent, args) => resolvers.getService(args.serviceId),
  },
  Mutation:{
    addService: (parent, args) => resolvers.addService(args.newService),
    deleteService: (parent, args) => resolvers.deleteService(args.serviceId),
    updateService: (parent, args) => resolvers.updateService(args.serviceId, args.service),
  },
  Service: {
    __resolveReference(service, { fetchServiceById }){
      return fetchServiceById(service.id);
    }
  }
};

module.exports = { typeDefs, resolvers: clientResolvers };