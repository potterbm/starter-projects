const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = require("./schema.graphql");

module.exports = function () {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return async function graphqlApi(context, next) {
    if (context.path !== "/api/graphql") return next();

    const result = await graphql(
      schema,
      context.request.body.query,
      {},
      {},
      context.request.body.variables || {}
    );

    context.body = JSON.stringify(result);
  };
};
