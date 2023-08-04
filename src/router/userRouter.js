const express = require('express')
const router = express.Router()
const userController = require('./../controller/userController')
const { validateCheckAdminRoles } = require('../middleware/auth/auth')

const passport = require('passport')
const { ROLES_USER } = require('../models/users')

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  validateCheckAdminRoles(ROLES_USER.admin),
  userController.getUsersController
)

router.post(
  '/save',
  userController.createUser
)

module.exports = router
