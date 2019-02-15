import auth from './auth'

export default function setupRoute(app) {
  app.use('/api/auth', auth)
}
