function validateCheckApiKey (request, response, next) {
  const apiKey = request.headers['apikey']

  if (!apiKey) throw new Error('No estas autentificado')

  next()
}

function validateCheckAdminRoles (...rolesAllow) { // ["admin", "user"]
  return (request, response, next) => {
    if (!request.user) throw new Error('No tienes roles asignados')
    const payload = request.user.roles // ["admin"]
    console.log('entro')
    const userRole = rolesAllow.some((rolAllow) => { // ["admin", "user"]
      return payload.find((rol) => rol === rolAllow)
    })

    if (!userRole) throw new Error('No estas autorizado')

    next()
  }
}

module.exports = {
  validateCheckApiKey,
  validateCheckAdminRoles
}
