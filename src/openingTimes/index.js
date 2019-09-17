const fs = require('fs');
const { gql } = require('apollo-server');
const timesResolvers = require('./resolvers');
const { daysOfWeek } = require('../mockData');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/openingTimes/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getProfileOpeningTimes: (parent, args) => timesResolvers.getProfileOpeningTimes(
          args.profileId, args.dayOfWeek)
    },
    Mutation: {
      addOpeningTimes: (parent, args) =>
          timesResolvers.addOpeningTimes(args.openingTimes),
      deleteOpeningTimes: (parent, args) =>
          timesResolvers.deleteOpeningTimes(args.timesId),
      updateOpeningTimes: (parent, args) =>
          timesResolvers.updateOpeningTimes(args.timesId, args.times)
    },
    OpeningTimes: {
      __resolveReference(reference) {
        return timesResolvers.getOpeningTimes(reference.id);
      },
    }
  }
};