exports.getPageJordan = function(req, res) {
    shoesId = req.params.id
    res.render('page-chaussure', {shoesId: shoesId})
}