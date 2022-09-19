const User = require('../models/User')

// Render the home page
exports.home = function(req, res) {
    res.render('index')
}

// Called to render the ejs page
exports.pageMarque = function(req, res) {
    // get the path to know which page render
    let file = req.path
    file = file.slice(1)
    res.render(file, {"marque": file})
}