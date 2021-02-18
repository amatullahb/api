// index.js
// This is the main entry point of our application
const express = require('express');
const {ApolloServer, gql } = require('apollo-server-express');
const app = express();
const port = process.env.PORT || 4000; // allows us to dynamically set the port in the node environemnt but fall back to port 4000 when no port is specified

// construct a schema using graphql schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;
// provide resolver functions for schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};
// integrate apollo server to serve graphql api
    // apollo server setup
const server = new ApolloServer({ typeDefs, resolvers });
    // apply apollo graphql middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`)
});