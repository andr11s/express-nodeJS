const express = require('express')
const router = express.Router()
const userController = require('./../controller/userController')

router.get('/', userController.getUsers)
router.post('/save', userController.createUser)

module.exports = router
