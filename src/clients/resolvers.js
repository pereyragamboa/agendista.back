const { clients, getClientId } = require('../mockData');

function getAllClients() { return clients; }

function getClient({ clientId }) {
  return clients.find(client => compareIndex(client, clientId));
}

function addClient({ client }) {
  const newClient = {id: getClientId(), ...client };
  clients.push(newClient);
  return newClient;
}

function deleteClient({ clientId }) {
  const indexFound = clients.findIndex(client => compareIndex(client, clientId));
  if (indexFound >= 0) {
    clients.splice(indexFound, 1);
    return true;
  }
  return false;
}

function updateClient({ clientId, client }) {
  const indexFound = client.findIndex(client => compareIndex(client, clientId));
  if (indexFound >= 0) {
    const update = { ...clients[indexFound], ...client };
    clients[indexFound] = update;
    return update;
  }
  return null;
}

const compareIndex = (client, idString) => client.id === Number.parseInt(idString);

module.exports = { addClient, deleteClient, getAllClients, getClient, updateClient };