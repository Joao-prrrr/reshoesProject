const shoesDB = require('../db').db()
// .collection('users')

let Shoes = function(data) {
    this.data = data
    // this.name = shoesName
    // this.price = price
    // this.data = date
    this.GetShoesInDatabase(this.data)
}

// Shoes.prototype.getShoesName = async () => {
    // return new Promise((resolve, reject) => {
        // shoesCollection = shoesDB.collection(this.data.shoesMarque.toLowerCase())

        // let shoesName = ""
        // shoesCollection.findOne({_id: this.data.shoesId}, (err, result) => {
        //     if(err){
        //         throw err
        //     } else {
        //         shoesName = result;
        //     }
        // })
    // })
// }

Shoes.prototype.GetShoesInDatabase = data => {
    return new Promise(async (resolve, reject) => {
        let shoesTable = shoesDB.collection(data.brand)

        shoesTable.findOne({_id : data._id}).then((shoes) => {
            
            console.log(data)
            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = Shoes