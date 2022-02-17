const mongoose = require("mongoose");
const slugify = require('slugify')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password:{
      type:String,
      required:true
  },
  mobile:{
      type:String,
      length:11,
      required:false
  },
  role:{
    type:String,
    enum:["student","teacher","admin" ],
    default:"student"
  }
  
  

});

UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10,(error, hash) =>{
        user.password = hash
        next()
    })
})


const User = mongoose.model('User', UserSchema) //ilk parametre dökümanın ismi

module.exports = User;