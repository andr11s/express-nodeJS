function validateCheckApiKey (request, response, next) {
  const apiKey = request.headers['apikey']

  if (!apiKey) throw new Error('No estas autentificado')

  next()
}

module.exports = {
  validateCheckApiKey
}
