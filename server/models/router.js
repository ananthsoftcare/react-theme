const express = require('express')

const Controller = require('./controller')

const router = express.Router()

router.get('/theme/:id', Controller.getThemeById)
router.get('/user/:id', Controller.getUserById)
router.get('/users', Controller.getUsers)

module.exports = router