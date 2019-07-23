const { services, getServiceId } = require('../mockData');

function getAllServices() {
  return services;
}

function getService(serviceId) {
  return services.find(service => Number.parseInt(serviceId) === service.id);
}

function addService(newService) {
  console.log(newService);
  if (typeof newService === 'object'){
    const addedService = { id: getServiceId(), ...newService };
    services.push(addedService);
    return addedService;
  }
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
  console.log(" > " + serviceId);
  const deleteIndex = services.findIndex(service => service.id === Number.parseInt(serviceId));
  console.log(" > " + deleteIndex);
  if (deleteIndex >= 0) {
    services.splice(deleteIndex, 1);
    return true;
  }
  return false;
}

module.exports = {
  addService, deleteService, getAllServices, getService, updateService
};