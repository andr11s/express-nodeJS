const { Strategy, ExtractJwt } = require('passport-jwt')
const config = require('../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt_secret
}

function run (payload, done) {
  return done(null, payload)
}

const jwtStrategy = new Strategy(options, run)

module.exports = jwtStrategy
