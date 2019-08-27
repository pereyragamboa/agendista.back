const fs = require('fs');
const { gql } = require('apollo-server');
const profileResolvers = require('./resolvers');

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
      __resolveReference(profile, { fetchById }){
        return fetchById(profile.id);
      }
    }
  }
};