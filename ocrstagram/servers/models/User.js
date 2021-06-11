const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
 
const UserSchema = new Schema({  
    userid: { // pass in config object. and put in validation rules 
      type: String,
      required: true,
      unique: true 
    },
    pw: {
      type: String,
    }
  });


// note: no lambda func! (not work!)
 UserSchema.pre('save', function(next){
     const user = this      
     bcrypt.hash(user.pw, 10,  (error, hash) => {        
       user.pw = hash 
       next() 
     }); 
 });

const User = mongoose.model('User',UserSchema);
module.exports = User