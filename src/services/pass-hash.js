const bycrypt = require('bcrypt')

const myPassword = '12345'

async function createHash (params) {
  const newHast = await bycrypt.hash(myPassword, 10)
  return newHast
}

async function verifyHash (myPassword, hash) {
  const verifyHash = await bycrypt.compare(myPassword, hash)
  return verifyHash
}

module.exports = {
  createHash,
  verifyHash
}
