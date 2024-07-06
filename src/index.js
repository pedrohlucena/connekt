import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

const app = express();

const schema = {};

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