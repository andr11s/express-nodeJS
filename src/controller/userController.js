const { create, getUsers } = require('../services/usersService')

function getUsersController (request, response) {
  const users = getUsers()

  response.json(users)
}

async function createUser (request, response) {
  const body = request.body

  const newUser = await create(body)

  response.status(200).send(newUser)
}

module.exports = {
  getUsersController,
  createUser
}
