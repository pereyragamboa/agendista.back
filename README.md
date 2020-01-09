# Agendista - back end

This is a proof-of-concept server for an online appointment manager. The server implements a
[federated Apollo graph](https://www.apollographql.com/docs/apollo-server/federation/introduction/),
with a GraphQL service for each domain entity, even though all of them access the same data source (a mock object).

This project is the complement of [agendista.web](https://github.com/pereyragamboa/agendista.web).

## Getting started

For starting the proyect, use `npm run start`. For development, use `npm run dev`.

## Built with

* [Apollo Server](https://www.apollographql.com/docs/apollo-server) - GraphQL server
* [Nodemon](http://nodemon.io/) - File monitor, used for development