// Router file who controls the get methods

const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
const shoesController = require('./controllers/shoesController')

// go to home page
router.get('/', userController.home)
// go to jordan page
router.get('/page-jordan', userController.goToPage)
// go to Yeezy page
router.get('/page-yeezy', userController.goToPage)
// go to New Balance page
router.get('/page-newBalance', userController.goToPage)
// go to Nike page
router.get('/page-nike', userController.goToPage)
// go to Luxe page
router.get('/page-luxe', userController.goToPage)
//go to login page
router.get('/page-login', userController.goToPage)
// go to register page
router.get('/page-register', userController.goToPage)

// router shoes
router.get('/jordan/:id', shoesController.getPage)
router.get('/yeezy/:id', shoesController.getPage)
router.get('/nike/:id', shoesController.getPage)
router.get('/yeezy/:id', shoesController.getPage)
router.get('/newBalance/:id', shoesController.getPage)
router.get('/luxe/:id', shoesController.getPage)

// router's posts
router.post('/register', userController.register)
// router.post('/register', (req, res) => {res.send(req.body)})
router.post('/login', userController.login)

// log out
router.get('/logout', userController.logout)
module.exports = router