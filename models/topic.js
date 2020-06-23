const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const topicSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Topic', topicSchema);