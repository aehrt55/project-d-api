import User from '../model/User'

export default class UserRepository {
  static async findById(id) {
    return await User.findById(id)
  }
}
