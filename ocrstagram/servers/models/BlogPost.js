const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const BlogPostSchema = new Schema({
  body: String,
  // username: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  datePosted:{ 
    type: Date,
    default: new Date()
  }, 
  text: String,
  image: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost