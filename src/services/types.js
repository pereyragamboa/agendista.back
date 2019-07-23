//const graphql = import('graphql');

//This equals to:
//
//module.exports = new graphql.GraphQLObjectType({
//  name: 'Service',
//  fields: {
//    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
//    name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
//    description: { type: graphql.GraphQLString },
//    duration: { type: graphql.GraphQLInt },
//    price: { type: graphql.GraphQLFloat }
//  }
//});

const serviceTypes = `type Service {
  id: ID!
  name: String!
  description: String
  duration: Int
  price: Float
}

input ServiceInput {
  name: String!
  description: String
  duration: Int
  price: Float
}`;

class Service {
  constructor(id, { name, description, duration, price }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.price = price;
  }
}

module.exports = { types: serviceTypes, Service };