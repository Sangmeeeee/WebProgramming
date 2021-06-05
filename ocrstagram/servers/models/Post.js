const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const PostSchema = new Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: String,
  image: String
});

const BlogPost = mongoose.model('Post',PostSchema);
module.exports = BlogPost