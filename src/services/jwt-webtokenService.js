const jwt = require('jsonwebtoken')
const config = require('../config/config')

function singJwt (payload) {
  return jwt.sign(payload, config.jwt_secret)
}

module.exports = {
  singJwt
}
