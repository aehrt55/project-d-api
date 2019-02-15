import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'
import User from './User'
import Post from './Post'
import PostLikes from './PostLikes'
import UserRepository from '../repository/UserRepository'
import PostRepository from '../repository/PostRepository'

const RootQuery = new GraphQLObjectType({
  name: 'Root_Query',
  fields: {
    post: {
      type: Post,
      description: 'Post',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (source, { id }) => PostRepository.findById(id),
    },
    user: {
      type: User,
      description: 'User',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (source, { id }) => UserRepository.findById(id),
    },
    topPosts: {
      type: new GraphQLList(PostLikes),
      description: 'top posts',
      args: {
        skip: { type: new GraphQLNonNull(GraphQLInt) },
        limit: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (source, { skip, limit }) => PostRepository.findTop(limit, skip),
    },
  },
})

export default RootQuery
