const fs = require('fs');
const { gql } = require('apollo-server');
const appointmentResolvers = require('./resolvers');

module.exports = {
  typeDefs: gql(fs.readFileSync("./src/appointments/schema.graphqls").toString()),
  resolvers: {
    Query: {
      getAppointment: (_, args) => appointmentResolvers.getAppointment(args.appointmentId),
      getCustomerAppointments: (_, args) => appointmentResolvers.getCustomerAppointments(args.customerId),
      getProfileAppointments: (_, args) => appointmentResolvers.getProfileAppointments(args.profileId),
    },
    Mutation: {
      addAppointment: (_, args) => appointmentResolvers.addAppointment(args.appointment),
      cancelAppointment: (_, args) => appointmentResolvers.cancelAppointment(args.appointmentId),
      updateAppointment: (_, args) => appointmentResolvers.updateAppointment(args.appointmentId, args.appointment)
    }
  }
};