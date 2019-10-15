const { appointments, getAppointmentId } = require("../mockData");
const { compareIndex } = require("../utils/compareIndex");

function addAppointment(appointment) {
  appointment.id = getAppointmentId();
  appointments.push(appointment);
  return appointment;
}

function cancelAppointment(appointmentId) {
  const index = appointments.findIndex(appointment => compareIndex(appointment, appointmentId));

  if (index >= 0) {
    appointments.splice(index, 0);
    return true;
  }
  return false;
}

function getAppointment(appointmentId) {
  return appointments.find(appointment => compareIndex(appointment, appointmentId));
}

function getCustomerAppointments(customerId) {
  return appointments.filter(appointment => appointment.customerId === Number.parseInt(customerId));
}

function getProfileAppointments(profileId) {
  return appointments.filter(appointment => appointment.profileId === Number.parseInt(profileId));
}

function updateProfile(appointmentId, appointment) {
  const index = appointments.findIndex(appointment => compareIndex(appointment, appointmentId));
  if (index >= 0) {
    const newAppointment = { ...appointments[index], appointment };
    appointment[index] = newAppointment;
    return newAppointment;
  }
  return null;
}

module.exports = {
  addAppointment, cancelAppointment,
  getAppointment, getCustomerAppointments,
  getProfileAppointments, updateProfile
};