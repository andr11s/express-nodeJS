const { createHash } = require('./pass-hash')

async function create (payload) {
  const newPassword = await createHash(payload.password)
  const newUser = {
    payload,
    password: newPassword
  }

  return newUser
}

module.exports = {
  create
}
