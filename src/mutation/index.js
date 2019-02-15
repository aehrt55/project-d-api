import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql'
import Post from '../query/Post'
import createPost from './createPost'
import likePost from './likePost'
import undoLikePost from './undoLikePost'

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'mutations',
  fields: {
    createPost: {
      type: Post,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: createPost,
    },
    likePost: {
      type: GraphQLBoolean,
      args: {
        postId: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: likePost,
    },
    undoLikePost: {
      type: GraphQLBoolean,
      args: {
        postId: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: undoLikePost,
    },
  },
})

export default Mutation
