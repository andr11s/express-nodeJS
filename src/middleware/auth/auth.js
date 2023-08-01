function validateCheckApiKey (request, response, next) {
  const apiKey = request.headers['apikey']
  console.log('entro validate', apiKey)
  if (!apiKey) throw new Error('No estas autentificado')

  next()
}

module.exports = {
  validateCheckApiKey
}
