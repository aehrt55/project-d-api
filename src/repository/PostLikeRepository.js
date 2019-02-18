import PostLike from '../sequelize-models/PostLike'

export default class PostLikeRepository {
  static async findByPostIdAndUserId(postId, userId) {
    return await PostLike.findOne({
      where: {
        postId,
        userId,
      },
    })
  }
  static async countByPostId(postId) {
    return await PostLike.count({
      where: {
        postId,
      },
      col: 'postId',
    })
  }
}
