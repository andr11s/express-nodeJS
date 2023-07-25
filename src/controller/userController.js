
exports.getUsers = (request, response) => {
  const users =[{
    name: "a",
  },
  {
    name: "b"
  }
  ]

  response.json(users)
}
