import Sequelize from 'sequelize'
import Post from '../model/Post'
import PostLike from '../sequelize-models/PostLike'

export default class PostRepository {
  static async findById(id) {
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
}
