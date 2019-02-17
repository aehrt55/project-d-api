import auth from './auth'

export default function setupRoute(app) {
  app.use('/auth', auth)
}
