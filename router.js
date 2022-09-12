const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

router.get('/', userController.home)
router.get('/page-jordan', userController.pageJordan)
router.get('/page-yeezy', userController.pageYeezy)
router.get('/page-newBalance', userController.pageNewBalance)
router.get('/page-nike', userController.pageNike)
router.get('/page-luxe', userController.pageLuxe)

module.exports = router