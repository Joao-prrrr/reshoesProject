const Shoes = require("../models/Shoes")

exports.getPageJordan = function(req, res) {
    let shoesId = req.params.id
    let brandName = req.path
    brandName = brandName.slice(1, 7)
    let firstLetter = brandName.charAt(0).toUpperCase()
    brandName = firstLetter + brandName.slice(1)

    currentShoes = new Shoes({_id: shoesId, brand: brandName});

    res.render('page-chaussure', {shoesId: currentShoes.data.id, shoesMarque: currentShoes.data.brand})
}