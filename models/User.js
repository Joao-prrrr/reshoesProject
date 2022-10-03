let User = function(data) {
    this.data = data
    this.errors = []

    // username: "joaoA"
    // fname: "Joao"
    // lname: "Araribá"
    // email: "joaog.arariba"gmail.com"
    // username: "12341234"
}

User.prototype.validate = function() {

    if(this.data.username.length < 3){
        this.errors.push('Le username doit être plus grand que 3 caracthères.')
    }
    if(typeof(this.data.username) != "string") {
        this.errors.push('Le username doit comporter seulement des caracthères.')
    }
    if(this.data.password.length < 12) {
        this.errors.push('Le mot de passe doit compoter au moins 12 caracthères')
    }

}

User.prototype.login = function() {
    return new Promise((resolve, reject) => {
        this.validate()

        if(this.errors.length == 0){
            resolve('congrats!!')
        } else {
            reject(this.errors)
        }
    })
}

User.prototype.register = function() {
    return new Promise((resolve, reject) => {
        this.validate()

        if(this.errors.length == 0){
            resolve('congrats!!')
        } else {
            reject(this.errors)
        }
    })
}

module.exports = User