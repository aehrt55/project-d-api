import mongoose, { Schema } from 'mongoose'

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  facebookId: {
    type: String,
    required: true,
  },
})

export default mongoose.model('User', UserSchema)
