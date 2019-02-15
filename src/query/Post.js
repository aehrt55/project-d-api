import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql'
import User from './User'
import UserRepository from '../repository/UserRepository'
import PostLikeRepository from '../repository/PostLikeRepository'

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLString,
      description: 'post id',
    },
    title: {
      type: GraphQLString,
      description: 'post title',
    },
    content: {
      type: GraphQLString,
      description: 'post content',
    },
    author: {
      type: User,
      resolve: ({ authorId }) => UserRepository.findById(authorId),
    },
    hasLiked: {
      type: GraphQLBoolean,
      description: 'has liked post',
      resolve: async ({ id }, _, { user }) => {
        if (!user || !user.id) {
          return false
        }
        const postLike = PostLikeRepository.findByPostIdAndUserId(id, user.id)
        return postLike !== null
      },
    },
  },
})

export default Post
