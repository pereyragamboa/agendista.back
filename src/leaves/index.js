const fs = require('fs');
const { gql } = require('apollo-server');
const leaveResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/leaves/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getLeaves: (parent, args) => leaveResolvers.getLeaves(args.profileId),
    },
    Mutation: {
      addLeave: (parent, args) => leaveResolvers.addLeave(args.profileId, args.leave),
      deleteLeave: (parent, args) => leaveResolvers.deleteLeave(args.leaveId)
    },
    Leave: {
      __resolveReference(object) {
        return leaveResolvers.getLeave(object.id);
      }
    }
  }
};