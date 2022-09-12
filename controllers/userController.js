const User = require('../models/User')


exports.home = function(req, res) {
    res.render('index')
}

exports.pageMarque = function(req, res) {
    res.render('page-jordan')
}
