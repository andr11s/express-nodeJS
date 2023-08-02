const { Strategy } = require('passport-local')
const { getUserByEmail } = require('../../../services/usersService')
const { verifyHash } = require('../../../services/pass-hash')

async function run (username, password, done) {
  try {
    const user = getUserByEmail(String(username))

    if (!user) done(new Error('Not unauthorized'), false)

    const isMath = await verifyHash(password, user.password)

    if (!isMath) done(new Error('Not unauthorized'), false)

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
}, run)

module.exports = localStrategy
