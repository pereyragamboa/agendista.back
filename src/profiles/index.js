const fs = require('fs');
const { gql } = require('apollo-server');
const profileResolvers = require('./resolvers');
const { getServicesByProfile } = require('../services/resolvers');
const { getOpeningTimesByProfile } = require('../openingTimes/resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/profiles/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getProfile: (parent, args) => profileResolvers.getProfile(args.profileId),
    },
    Mutation: {
      deleteProfile: (parent, args) => profileResolvers.deleteProfile(args.profileId),
      updateProfile: (parent, args) => profileResolvers.updateProfile(args.profileId, args.profile),
    },
    Profile: {
      __resolveReference(reference){
        console.log("Resolving Profile reference...");
        return profileResolvers.getProfile(reference.id);
      },
      services(profile) {
        return getServicesByProfile(profile.id);
      },
      openingTimes(profile) {
        return getOpeningTimesByProfile(profile.id);
      }
    }
  }
};