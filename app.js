/// Reshoes project
/// Author : Joao Araribá, Louis Saulnier and Bastien Schneider
/// Date : 05.09.2022 v1


const MongoStore = require('connect-mongo')
const router= require('./router')
const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')

const app = express()

// app.use(express.cookieParser('keyboard cat'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
// app.use(flash());

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.use(function(req, res , next) {
    if(req.path != "/") {
        let file = req.path
        file = file.slice(6)
        let firstLetter = file.charAt(0).toUpperCase()
        file = firstLetter + file.slice(1)
        res.locals.marque = file
    } else {
        res.locals.marque = false
    }
    next()
})

app.use('/', router)

app.listen(3000)