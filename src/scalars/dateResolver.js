const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'ISO 8601 / JSON date time',
    parseValue: value => new Date(value),
    serialize: value => value.toJSON(),
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) return parseInt(ast.value, 10);
      return null;
    }
  })
};
