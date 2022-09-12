// Router file who controls the get methods

const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

// go to home page
router.get('/', userController.home)
// go to jordan page
router.get('/page-jordan', userController.pageMarque)
// go to Yeezy page
router.get('/page-yeezy', userController.pageMarque)
// go to New Balance page
router.get('/page-newBalance', userController.pageMarque)
// go to Nike page
router.get('/page-nike', userController.pageMarque)
// go to Luxe page
router.get('/page-luxe', userController.pageMarque)

module.exports = router