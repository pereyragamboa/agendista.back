const { GraphQLScalarType } = require('graphql');

const TIME_REGEX = /([01]\d|2[0-3]):[0-5]\d/;

function validateTime(time) {
  return time.match(TIME_REGEX) ? time : "00:00";
}

module.exports = new GraphQLScalarType({
  name: "Type",
  description: "24-hour time string with leading zeroes (e. g. '00:00')",
  parseValue: value => validateTime(value),
  serialize: value => value,
});