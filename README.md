# Agendista - back end

This is a proof-of-concept server for an online appointment manager. The server implements a
[federated Apollo graph](https://www.apollographql.com/docs/apollo-server/federation/introduction/),
with a GraphQL service for each domain entity, even though all of them access the underlying data source (a mock object).

This project is the complement of [agendista.web]().

Development mode runs with `npm run dev`.