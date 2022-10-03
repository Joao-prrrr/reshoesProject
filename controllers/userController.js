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
    let user = new User(req.body)
    user.register().then(function(mess) {
        res.send(mess)
    }).catch(function(err) {
        // req.flash('errors', err)
        // res.redirect('/')
        res.send(err)
    })
}

exports.register = function(req, res) {
    let user = new User(req.body)
    user.register().then(function(mess) {
        res.send(mess)
    }).catch(function(err) {
        // req.flash('errors', err)
        // res.redirect('/')
        res.send(err)
    })
}