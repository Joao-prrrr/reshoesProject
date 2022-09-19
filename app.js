/// Reshoes project
/// Author : Joao Araribá, Louis Saulnier and Bastien Schneider
/// Date : 05.09.2022 v1


const MongoStore = require('connect-mongo')
const router= require('./router')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(function(req, res , next) {
    let file = req.path
    file = file.slice(1)
    res.locals.marque = file
    next()
})

app.use('/', router)

app.listen(3000)