import isMongoId from 'validator/lib/isMongoId'
import User from '../model/User'

export default class UserRepository {
  static async findById(id) {
    if (!isMongoId(id)) {
      return null
    }
    return await User.findById(id)
  }
}
