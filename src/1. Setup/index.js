const { ApolloServer, gql } = require("apollo-server");


const typeDefs = gql`
    type Query {
        helloWorld: String!
    }
`;

const resolvers = {
    Query:  {
        helloWorld : () => "Hello World from Apollo GraphQL"

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(80).then(({ url }) => console.log(`server started at ${url}`));