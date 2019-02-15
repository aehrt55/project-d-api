import Sequelize from 'sequelize'
import sequelize from '../sequelize'

const PostLike = sequelize.define('PostLike', {
  postId: {
    type: Sequelize.CHAR(24),
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.CHAR(24),
    allowNull: false,
    primaryKey: true,
  },
})

export default PostLike
