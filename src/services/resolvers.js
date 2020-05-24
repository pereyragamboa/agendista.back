const { services, profiles, getServiceId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function getService(serviceId) {
  return services.find(service => compareIndex(service, serviceId));
}

function getServicesByProfile(profileId) {
  return services.filter(service => service.profileId === Number.parseInt(profileId));
}

function addService(profileId, newService) {
  if (typeof newService === 'object' && profiles.find(p => compareIndex(p, profileId))) {
    const addedService = {
      id: getServiceId(),
      profileId: Number.parseInt(profileId),
      ...newService
    };
    services.push(addedService);
    return addedService;
  } else return null;
}

function updateService(serviceId, service) {
  if (typeof service === 'object') {
    const numericId = Number.parseInt(serviceId);
    const newService = { id: numericId, ...service };
    const replaceIndex = services.findIndex(service => numericId === service.id);
    if (replaceIndex >= 0) {
      const oldService = services[replaceIndex];
      const finalService = { ...oldService, ...newService };
      services.splice(replaceIndex, 1, finalService);
      return finalService;
    } else {
      services.push(newService);
      return newService;
    }
  }
}

function deleteService(serviceId) {
  const deleteIndex = services.findIndex(service => service.id === Number.parseInt(serviceId));
  if (deleteIndex >= 0) {
    services.splice(deleteIndex, 1);
    return true;
  }
  return false;
}

module.exports = {
  addService, deleteService, getService, getServices: getServicesByProfile, updateService
};