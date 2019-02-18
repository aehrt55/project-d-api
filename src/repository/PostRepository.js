import Sequelize from 'sequelize'
import isMongoId from 'validator/lib/isMongoId'
import Post from '../model/Post'
import PostLike from '../sequelize-models/PostLike'

export default class PostRepository {
  static async findById(id) {
    if (!isMongoId(id)) {
      return null
    }
    return await Post.findById(id)
  }
  static async findTop(limit, skip = 0) {
    return await PostLike.findAll({
      group: 'postId',
      attributes: ['postId', [Sequelize.fn('COUNT', 'postId'), 'count']],
      order: [[Sequelize.fn('COUNT', 'postId'), 'DESC'], ['postId', 'DESC']],
      offset: skip,
      limit,
      raw: true,
    })
  }
  static async findLatest(limit, skip = 0) {
    return await Post.find({})
      .sort([['createdAt', -1]])
      .limit(limit)
      .skip(skip)
  }
}
