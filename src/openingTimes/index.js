const fs = require('fs');
const { gql } = require('apollo-server');
const timesResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/openingTimes/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getOpeningTimes: (parent, args) => timesResolvers.getOpeningTimesByProfile(
          args.profileId, args.dayOfWeek)
    },
    Mutation: {
      addOpeningTimes: (parent, args) =>
          timesResolvers.addOpeningTimes(args.profileId, args.openingTimes),
      deleteOpeningTimes: (parent, args) =>
          timesResolvers.deleteOpeningTimes(args.timesId),
      updateOpeningTimes: (parent, args) =>
          timesResolvers.updateOpeningTimes(args.timesId, args.times)
    },
    OpeningTimes: {
      __resolveReference(reference) {
        console.log("Resolving OpeningTimes reference...");
        return timesResolvers.getOpeningTimes(reference.id);
      },
    }
  }
};