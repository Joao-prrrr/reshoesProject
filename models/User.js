const bcrypt = require('bcryptjs')
const validator = require('validator')
const usersCollection = require('../db').db().collection('users')
const md5 = require('md5')

let User = function(data) {
    this.data = data
    this.errors = []

    // username: "joaoA"
    // fname: "Joao"
    // lname: "Araribá"
    // email: "joaog.arariba"gmail.com"
    // password: "12341234"
}

User.prototype.cleanUp = function() {
    if(typeof(this.data.username) != 'string') {
        this.data.username = ''
    } else if(typeof(this.data.email) != 'string') {
        this.data.email = ''
    } else if(typeof(this.data.password) != 'string') {
        this.data.password = ''
    }
}

User.prototype.validate = function() {
    return new Promise(async (resolve, reject) => {
        if(this.data.username == "") {this.errors.push("Le username ne peut pas être vite")}
    if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push("Le username doit contenier seulement des lettres et des chiffres.")}
    if(!validator.isEmail(this.data.email) && this.data.email != "") {this.errors.push("L'email n'est pas valide")}
    if(this.data.password == "" || this.data.password.length < 12) {this.errors.push("Le password doit être long de 12 caracthères")}

    // Only if username and email are valids, check if they are taken
    if(!this.errors.length) {
        let usernameExists = await usersCollection.findOne({username: this.data.username})
        if(usernameExists) {this.errors.push('Ce username est déjà utilié.')}

        let emailExists = await usersCollection.findOne({email: this.data.email})
        if(emailExists) {this.errors.push('Cet email est déjà pris.')}
    }
    resolve()
    })
}

User.prototype.login = function() {
    return new Promise((resolve, reject) => {
        this.cleanUp()
        usersCollection.findOne({username: this.data.username}).then((attemptUser)=>{
            if(attemptUser && bcrypt.compareSync(this.data.password, attemptUser.password)){
                this.data = attemptUser
                resolve();
            } else {
               reject("Mauvais username ou mot de passe")
            }
        }).catch(()=>{
            reject("Erreur, essayez à nouveau plus tard.")
        })
    })
}

User.prototype.register = function() {
    return new Promise(async (resolve, reject) => {
        this.cleanUp()
        await this.validate()

        if(this.errors.length == 0){
            const salt = bcrypt.genSaltSync(10)
            this.data.password = bcrypt.hashSync(this.data.password, salt)
            await usersCollection.insertOne(this.data)
            resolve()
        } else {
            reject(this.errors)
        }
    })
}

module.exports = User