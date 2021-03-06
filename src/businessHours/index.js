const fs = require('fs');
const { gql } = require('apollo-server');
const hoursResolvers = require('./resolvers');
const Time = require('../scalars/timeResolver');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/businessHours/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getBusinessHours: (parent, args) => hoursResolvers.getBusinessHoursByProfile(
          args.profileId, args.businessDay)
    },
    Mutation: {
      addBusinessHours: (parent, args) =>
          hoursResolvers.addBusinessHours(args.profileId, args.businessHours),
      deleteBusinessHours: (parent, args) =>
          hoursResolvers.deleteBusinessHours(args.timesId),
      updateBusinessHours: (parent, args) =>
          hoursResolvers.updateBusinessHours(args.timesId, args.businessHours),
      setBusinessHours: (parent, args) =>
          hoursResolvers.setBusinessHours(args.profileId, args.businessHours),
      clearBusinessHours: (parent, args) =>
          hoursResolvers.clearBusinessHours(args.profileId)
    },
    BusinessHours: {
      __resolveReference(reference) {
        return hoursResolvers.getBusinessHours(reference.id);
      },
    },
    Time
  }
};