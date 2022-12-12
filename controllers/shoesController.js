const Shoes = require("../models/Shoes")

exports.getPage = async function(req, res) {
    let shoesId = req.params.id
    let brandName = req.path
    // brandName = brandName.slice(1, 7)
    // let firstLetter = brandName.charAt(0).toUpperCase()
    // brandName = firstLetter + brandName.slice(1)

    brandName = brandName.slice(brandName.indexOf('/') + 1, brandName.indexOf('/', 1));
    let firstLetter = brandName.slice(0, 1).toUpperCase();
    let brandC = firstLetter + brandName.slice(1)
    // console.log(shoesId)
    let shoes = new Shoes({_id: shoesId, brand: brandName});
    // console.log(brandName)
    // req.session.currentShoes = shoes.GetShoesInDatabase(shoes.data)
    await shoes.GetShoesInDatabase(shoes.data).then((result) =>  {
        req.session.currentShoes = result
        req.session.currentShoes.brand = brandName
        console.log(result)
    })
    
    // Get the others shoes of the brand
    let shoesList = [];
    await shoes.GetShoesFamily(shoes.data.brand).then(async (results) => {
        await results.forEach(shoesResult => {
            shoesList.push(shoesResult)
        });

        req.session.shoesList = shoesList
    }).catch((err) => {
        console.log(err)
    })
    
    // console.log(shoes)
    req.session.save(() => {
        res.locals.currentShoes = req.session.currentShoes;
        res.locals.shoesList = req.session.shoesList;
        res.render('page-chaussure')
    })
}