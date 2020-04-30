var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    id_user : { type : Number },
    name : { type : String },
    content : { type : String },
    id_theme: { type : Number }
});

module.exports = mongoose.model('users', UsersSchema);
