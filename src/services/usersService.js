const { createHash } = require('./pass-hash')
const users = []

async function create (payload) {
  const newPassword = await createHash(payload.password)
  const newUser = {
    name: payload.name,
    email: payload.email,
    password: newPassword,
    roles: payload.roles
  }
  users.push(newUser)
  return newUser
}

function getUsers () {
  return users
}

function getUserByEmail (email) {
  const user = users.find((user) => user.email === email)

  if (!user) throw new Error('the user not found')

  return user
}

module.exports = {
  create,
  getUserByEmail,
  getUsers
}
