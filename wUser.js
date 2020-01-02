var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WuserSchema = new Schema({
    name: String,
    gender: String,
    location: String,
    bio: String
});

module.exports = mongoose.model('Wuser',WuserSchema);