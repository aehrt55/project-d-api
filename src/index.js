import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import schema from './schema'
import setupRoute from './route'
import { uri as mongodbUri } from './config/mongodb'
import redisConfig from './config/redis'
import port from './config/port'

const RedisStore = require('connect-redis')(session)

const app = express()
app.use(
  session({
    store: new RedisStore(redisConfig),
    secret: 'projectD',
  }),
)
app.use(passport.initialize())
app.use(passport.session())

setupRoute(app)

const apollo = new ApolloServer({
  schema,
  context: ({ req }) => ({
    user: req.user,
  }),
})
apollo.applyMiddleware({ app })

app.use((req, res) => res.send('hello, world!'))

mongoose.connect(mongodbUri, { useNewUrlParser: true }).then(
  () => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on ${port} port.`)
    })
  },
  err => {
    // eslint-disable-next-line no-console
    console.error(`connect to mongodb failed: ${err}`)
  },
)
