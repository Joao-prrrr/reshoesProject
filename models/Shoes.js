const shoesDB = require('../db').db()
// .collection('users')

let Shoes = function(data) {
    this.data = data
}

Shoes.prototype.getShoesName = () => {
    return new Promise((resolve, reject) => {
        shoesCollection = shoesDB.collection(this.data.shoesMarque.toLowerCase())

        let shoesName = ""
        shoesCollection.findOne({_id: this.data.shoesId}, (err, result) => {
            if(err){
                throw err
            } else {
                shoesName = result;
            }
        })
    })
}

module.exports = Shoes