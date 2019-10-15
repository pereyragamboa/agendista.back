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
  return setAppointmentObjects(
      appointments.find(appointment => compareIndex(appointment, appointmentId))
  );
}

function getCustomerAppointments(customerId) {
  return appointments
    .filter(appointment => appointment.customerId === Number.parseInt(customerId))
    .map(appointment => setAppointmentObjects(appointment));
}

function getProfileAppointments(profileId) {
  return appointments.filter(appointment => appointment.profileId === Number.parseInt(profileId));
}

function updateAppointment(appointmentId, appointment) {
  const index = appointments.findIndex(appointment => compareIndex(appointment, appointmentId));
  if (index >= 0) {
    const newAppointment = { ...appointments[index], appointment };
    appointment[index] = newAppointment;
    return newAppointment;
  }
  return null;
}

function setAppointmentObjects(appointment) {
  appointment.customer = { id: appointment.customerId };
  return appointment;
}

module.exports = {
  addAppointment, cancelAppointment,
  getAppointment, getCustomerAppointments,
  getProfileAppointments, updateAppointment
};