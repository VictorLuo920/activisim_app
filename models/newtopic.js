const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NewtopicSchema = new Schema(
  {
    name: String,
    description: {
        whatisit: String,
        whyisit: String,
    },
    commonResponses: [{type: String}],
    keyTalkingPoints: [{type: String}],
    resources: [{type: String, name: String, url: String}],
    comments: [{
        text: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        } 
    }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Newtopic', NewtopicSchema);