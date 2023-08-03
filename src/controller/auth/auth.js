const webtokenService = require('../../services/jwt-webtokenService')

function login (request, response) {
  const user = request.user

  const payload = {
    id: user.id,
    roles: user.roles
  }

  const token = webtokenService.singJwt(payload)

  response.status(200).send({token})
}

module.exports = {
  login
}
