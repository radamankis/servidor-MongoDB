

var model = require('./model');

var valLog = login => model.find({
    user: {$eq : login.user},  
    pass: {$eq : login.pass}
})



module.exports = {
    valLog
}