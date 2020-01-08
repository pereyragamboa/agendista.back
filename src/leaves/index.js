const fs = require('fs');
const { gql } = require('apollo-server');
const leaveResolvers = require('./resolvers');
const { Date } = require('../scalars/dateResolver');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/leaves/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getLeaves: (parent, args) => leaveResolvers.getLeaves(args.profileId),
      getLeave: (parent, args) => leaveResolvers.getLeave(args.leaveId)
    },
    Mutation: {
      addLeave: (parent, args) => leaveResolvers.addLeave(args.profileId, args.leave),
      deleteLeave: (parent, args) => leaveResolvers.deleteLeave(args.leaveId),
      updateLeave: (parent, args) => leaveResolvers.updateLeave(args.leaveId, args.leave)
    },
    Leave: {
      __resolveReference(object) {
        return leaveResolvers.getLeave(object.id);
      }
    },
    Date
  }
};