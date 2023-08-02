function login (request, response) {
  const user = request.user
  response.status(200).send(user)
}

module.exports = {
  login
}
