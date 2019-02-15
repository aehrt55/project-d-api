import PostLike from '../sequelize-models/PostLike'

export default async function undoLikePost(source, args, { user }) {
  try {
    if (!user || args.userId !== user.id) {
      return false
    }
    const postLike = await PostLike.findOne({
      where: args,
    })
    if (postLike === null) {
      return false
    }
    await postLike.destroy()
  } catch (error) {
    return false
  }
  return true
}
