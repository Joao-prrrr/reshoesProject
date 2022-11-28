const shoesDB = require('../db').db()
// .collection('users')

let Shoes = function(data) {
    // this.name = shoesName
    // this.price = price
    this.data = data
    
    // GetShoesInDatabase(data).then((newdata) => {
    //     this.data = newdata
    //     console.log(newdata)
    // }).catch()
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
        
        let query = {_id: parseInt(data._id)}
        await shoesTable.findOne(query).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        })

        
    })
}

module.exports = Shoes