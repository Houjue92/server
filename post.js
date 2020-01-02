var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: String,
    created_at: Date,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wuser'
    }
});

module.exports = mongoose.model('Post',PostSchema);