const express = require('express')
const router = express.Router()
const authController = require('./../controller/auth/auth')
const passport = require('passport')

router.post('/login', passport.authenticate('local', {session: false}), authController.login)

module.exports = router
