import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

const app = express();

const schema = {} as GraphQLSchema;

app.use(cors());
app.use(
    '/graphql', 
    graphqlHTTP(
        {
            schema,
            graphiql: true,
            pretty: true
        }
    )
);

app.listen(4000)

console.log('SERVER OK!');