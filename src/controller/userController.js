const { create } = require('../services/usersService')

function getUsers (request, response) {
  const users = [
    {
      name: 'a'
    },
    {
      name: 'b'
    }
  ]

  response.json(users)
}

async function createUser (request, response) {
  const body = request.body

  const newUser = await create(body)

  response.status(200).send(newUser)
}

module.exports = {
  getUsers,
  createUser
}
