import ModelPost from '../model/Post'

export default async function createPost(source, args, { user }) {
  if (!user || !user.id) {
    return null
  }
  return await ModelPost.create({
    ...args,
    authorId: user.id,
  })
}
