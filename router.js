const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

router.get('/', userController.home)
router.get('/page-jordan', userController.pageMarque)

module.exports = router