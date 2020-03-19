var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
    email : String,
    user : String,
    pass : String
})


var model = mongoose.model('logins', mySchema)
module.exports = model