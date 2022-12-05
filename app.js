/// Reshoes project
/// Author : Joao Araribá, Louis Saulnier and Bastien Schneider
/// Date : 05.09.2022 v1


const MongoStore = require('connect-mongo')
const router = require('./router')
const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')

const app = express()

const sessionOption = session({
    secret: 'reshoesApp',
    store: MongoStore.create({ client: require('./db') }),
    resave: false,
    saveUninitialized: false,
    // 1000*60*60*24 == days
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
})

app.use(sessionOption)
app.use(flash())
    // app.use(express.cookieParser('keyboard cat'));
    // app.use(express.session({ cookie: { maxAge: 60000 }}));
    // app.use(flash());
app.use(express.urlencoded({ extended: false })) // for form data
app.use(express.json()) // for json

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')


app.use(function(req, res, next) {
    //make all error and succes flash messages available
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.regErrors = req.flash('regErrors')
    res.locals.regSuccess = req.flash('regSuccess')
        // make current user id avilable on the req object
    if (req.session.user) { req.visitorId = req.session.user._id } else { req.visitorId = 0 }
    // make user sassion data available from within view templates
    res.locals.user = req.session.user
        // res.locals.currentShoes = req.session.currentShoes;

    if (req.path != "/") {
        let file = req.path
            // file = file.slice(6)
            // let firstLetter = file.charAt(0).toUpperCase()
            // file = firstLetter + file.slice(1)
        file = file.slice(file.indexOf('/') + 1, file.indexOf('/', 1));
        res.locals.marque = file
    } else {
        res.locals.marque = false
    }
    next()
})

app.use('/', router)

module.exports = app