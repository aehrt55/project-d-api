import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import Post from './Post'
import PostRepository from '../repository/PostRepository'

const PostLikes = new GraphQLObjectType({
  name: 'Post_Likes',
  fields: {
    postId: {
      type: GraphQLString,
      description: 'post id',
    },
    post: {
      type: Post,
      description: 'Post',
      resolve: ({ postId }) => PostRepository.findById(postId),
    },
    count: {
      type: GraphQLInt,
      description: 'count',
    },
  },
})

export default PostLikes
