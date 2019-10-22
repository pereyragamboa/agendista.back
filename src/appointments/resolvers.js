const { appointments, getAppointmentId } = require("../mockData");
const { compareIndex } = require("../utils/compareIndex");

function addAppointment(appointment) {
  const newAppointment = getAppointmentFromInput(appointment);
  newAppointment.id = getAppointmentId();
  appointments.push(newAppointment);
  return setAppointmentObjects(newAppointment);
}

function cancelAppointment(appointmentId) {
  const index = appointments.findIndex(appointment => compareIndex(appointment, appointmentId));

  if (index >= 0) {
    appointments.splice(index, 1);
    return true;
  }
  return false;
}

function getAppointment(appointmentId) {
  const appointment = appointments.find(a => compareIndex(a, appointmentId));
  return appointment ? setAppointmentObjects(appointment) : null;
}

function getCustomerAppointments(customerId) {
  return appointments
    .filter(appointment => appointment.customerId === Number.parseInt(customerId))
    .map(appointment => setAppointmentObjects(appointment));
}

function getProfileAppointments(profileId) {
  return appointments
    .filter(appointment => appointment.profileId === Number.parseInt(profileId))
    .map(appointment => setAppointmentObjects(appointment));
}

function updateAppointment(appointmentId, appointment) {
  const index = appointments.findIndex(appointment => compareIndex(appointment, appointmentId));
  if (index >= 0) {
    const newAppointment = { ...appointments[index], ...getAppointmentFromInput(appointment) };
    appointments[index] = newAppointment;
    return setAppointmentObjects(newAppointment);
  }
  return null;
}

function setAppointmentObjects(appointment) {
  appointment.customer = { id: appointment.customerId };
  appointment.profile = { id: appointment.profileId };
  if (appointment.serviceIds)
    appointment.services = appointment.serviceIds.map(id => { return { id } });
  else
    appointment.services = [];
  return appointment;
}

function getAppointmentFromInput(appointmentInput) {
  return {
    date : appointmentInput.date,
    customerId : Number.parseInt(appointmentInput.customer),
    profileId: Number.parseInt(appointmentInput.profile),
    serviceIds : appointmentInput.services.map (s => Number.parseInt(s))
  };
}

module.exports = {
  addAppointment, cancelAppointment,
  getAppointment, getCustomerAppointments,
  getProfileAppointments, updateAppointment
};