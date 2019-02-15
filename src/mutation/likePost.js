import PostLike from '../sequelize-models/PostLike'

export default async function likePost(source, args, { user }) {
  try {
    if (!user || args.userId !== user.id) {
      return false
    }
    await PostLike.create(args)
  } catch (error) {
    return false
  }
  return true
}
