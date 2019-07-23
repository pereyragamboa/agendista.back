const os = require('os');

const mutations = require('./mutations');
const queries = require('./queries');
const resolvers = require('./resolvers');
const { types } = require('./types');

const serviceSchema = [mutations, queries, types].join(os.EOL.toString());

const serviceRoot = {
  addService: (args) => resolvers.addService(args.newService),
  deleteService: (args) => resolvers.deleteService(args.serviceId),
  getAllServices: resolvers.getAllServices,
  getService: (args) => resolvers.getService(args.serviceId),
  updateService: (args) => resolvers.updateService(args.serviceId, args.service),
};

module.exports = { serviceRoot, serviceSchema };