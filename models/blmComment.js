const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blmCommentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    creator: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('BlmComment', blmCommentSchema);