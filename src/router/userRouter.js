const express = require('express')
const router = express.Router()
const userController = require('./../controller/userController')
const passport = require('passport')

router.get('/', passport.authenticate('jwt', { session: false }), userController.getUsersController)
router.post(
  '/save',
  userController.createUser
)

module.exports = router
