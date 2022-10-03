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

    if(this.data.username < 3){
        this.errors.push('Username doit être plus grand que 3 caracthères.')
    }
    

}

User.prototype.login = function() {
    return new Promise((resolve, reject) => {

    })
}

module.exports = User