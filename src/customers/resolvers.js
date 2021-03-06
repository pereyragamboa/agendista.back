const { clients, getClientId } = require('../mockData');

function getAllCustomers() { return clients; }

function getCustomer(customerId) {
  return clients.find(customer => compareIndex(customer, customerId));
}

function addCustomer(customer) {
  const newCustomer = {id: getClientId(), ...customer };
  clients.push(newCustomer);
  return newCustomer;
}

function deleteCustomer(customerId) {
  const indexFound = clients.findIndex(customer => compareIndex(customer, customerId));
  if (indexFound >= 0) {
    clients.splice(indexFound, 1);
    return customerId;
  }
  return null;
}

function findCustomersByName(names) {
  return clients.filter(client =>
    names.map(name => name.toLowerCase()).some(name =>
      client.firstName.toLowerCase().includes(name) || client.lastName.toLowerCase().includes(name)
    )
  );
}

function updateCustomer(customerId, customer) {
  const indexFound = clients.findIndex(customer => compareIndex(customer, customerId));
  if (indexFound >= 0) {
    const update = { ...clients[indexFound], ...customer };
    clients[indexFound] = update;
    return update;
  }
  return null;
}

const compareIndex = (customer, idString) => customer.id === Number.parseInt(idString);

module.exports = {
  addCustomer, deleteCustomer, findCustomersByName,
  getAllCustomers, getCustomer, updateCustomer };