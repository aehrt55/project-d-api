import { GraphQLSchema } from 'graphql'
import RootQuery from './query'
import Mutation from './mutation'

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})

export default schema
