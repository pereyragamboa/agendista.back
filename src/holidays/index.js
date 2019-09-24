const fs = require('fs');
const { gql } = require('apollo-server');
const holidayResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync('./src/holidays/schema.graphqls').toString()),
  resolvers: {
    Query: {
      getHolidays: (parent, args) => holidayResolvers.getHolidays(args.profileId)
    },
    Mutation: {
      addFixedHoliday: (parent, args) => holidayResolvers.addHoliday(args.profileId, args.holiday),
      addVariableHoliday: (parent, args) => holidayResolvers.addHoliday(args.profileId, args.holiday),
      deleteHoliday: (parent, args) => holidayResolvers.deleteHoliday(args.holidayId)
    },
    Holiday: {
      __resolveType(obj) {
        if (obj.day) return 'FixedHoliday';
        else if (obj.week) return 'VariableHoliday';
        else return null;
      }
    },
    FixedHoliday: {
      __resolveReference(reference) {
        return holidayResolvers.getHoliday(reference.id);
      }
    },
    VariableHoliday: {
      __resolveReference(reference) {
        return holidayResolvers.getHoliday(reference.id);
      }
    }
  }
};
