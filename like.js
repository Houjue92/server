var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wuser'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'    
    }
});

module.exports = mongoose.model('Like',LikeSchema);