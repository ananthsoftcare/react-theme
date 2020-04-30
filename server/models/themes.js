var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThemesSchema = new Schema({
    id_theme : { type : Number },
    background_color : { type : String },
    text_color : { type : String }
});

module.exports = mongoose.model('themes', ThemesSchema);
