const express = require('express')
const router = express.Router()
const userController = require('./../controller/userController')

router.get('/', userController.getUsersController)
router.post('/save', userController.createUser)

module.exports = router
