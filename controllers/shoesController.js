const Shoes = require("../models/Shoes")

exports.getPageJordan = function(req, res) {
    shoesId = req.params.id
    res.render('page-chaussure', {shoesId: shoesId, shoesMarque: "Jordan"})
}

exports.getPageNike = function(req, res) {
    shoe = new Shoes({shoesId: req.params.id, shoesMarque: "Nike"});
    shoeName = shoe.getShoesName();
    res.render('page-chaussure', {shoesName: shoeName, shoesMarque: shoe.data.shoesMarque})
}