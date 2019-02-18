import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Router } from 'express'
import User from '../model/User'
import { appId, appSecret } from '../config/facebook'

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    if (user) {
      done(null, user)
    } else {
      done(null)
    }
  } catch (error) {
    done(error)
  }
})

passport.use(
  new FacebookStrategy(
    {
      clientID: appId,
      clientSecret: appSecret,
    },
    async (accessToken, refreshToken, { id, displayName }, done) => {
      let user
      user = await User.findOne({ facebookId: id })
      if (!user) {
        user = await User.create({ facebookId: id, name: displayName })
      }
      done(null, user)
    },
  ),
)

const authRouter = Router()

const authenticateFacebook = (req, res, next) => {
  const xForwardedPrefix = req.headers['x-forwarded-prefix'] || '/'
  const currentUrl = `${xForwardedPrefix}${req.originalUrl.replace(/^\//, '')}`
  const authenticate = passport.authenticate('facebook', {
    scope: ['public_profile'],
    callbackURL: currentUrl,
    successRedirect: req.query.redirectUri || '/',
    failureRedirect: currentUrl,
  })
  return authenticate(req, res, next)
}
authRouter.get('/facebook', authenticateFacebook)
authRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export default authRouter
