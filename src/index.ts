import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import { sequelize } from './config'
import cors from 'cors'
import { env } from './env'

const schema = {} as GraphQLSchema

;(async () => {
  const app = express()
  const port = env.PORT || 4000

  app.use(cors())
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      pretty: true,
    }),
  )

  await sequelize.sync()

  const okMessage = `Server is running on http://localhost:${port}/graphql`
  app.listen(port, () => console.log(okMessage))
})()
