const User = require('../models/User')

// Render the home page
exports.home = function(req, res) {
    res.render('index') // req.flash.errors
}

// Called to render the ejs page
exports.goToPage = function(req, res) {
    // get the path to know which page render
    let file = req.path
    file = file.slice(1)
    res.render(file)
}

exports.login = function(req, res) {
    // let user = new User(req.body)
    // user.login().then(function(mess) {
    //     res.send(mess)
    // }).catch(function(err) {
    //     // req.flash('errors', err)
    //     // res.redirect('/')
    //     res.send(err)
    // })

    let userLogin = req.body
    let user = new User(userLogin)
    user.login().then((result) => {
        req.session.user = {
            username: user.data.username, _id: user.data._id}
        req.session.save(function() {
            res.redirect('/')
        })
    }).catch((err) => {
        req.flash('errors', err)
        req.session.save(() => {
            res.redirect('/')
        })
    })
}

exports.register = function(req, res) {
    // let user = new User(req.body)
    // user.register().then(function(mess) {
    //     res.send(mess)
    // }).catch(function(err) {
    //     // req.flash('errors', err)
    //     // res.redirect('/')
    //     res.send(err)
    // })

    let user =  new User(req.body)
    user.register().then((result) => {
        req.session.user = {username: user.data.username, _id: user.data._id}
        req.session.save(function() {
            res.redirect('/')
        })
    }).catch((regErrors) => {
        regErrors.forEach((err) => {
            req.flash('regErrors', err)
        })
        req.session.save(() => {
            res.redirect('/page-register')
        })
    })
}

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}