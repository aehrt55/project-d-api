import { GraphQLObjectType, GraphQLString } from 'graphql'

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString,
      description: 'user id',
    },
    name: {
      type: GraphQLString,
      description: 'user name',
    },
  },
})

export default User
