var mongoose = require('mongoose')

var registerSchema = mongoose.Schema({
  companyName:String,
  username:String,
  email:String,
  password:String,
  repassword:String
})

const Register=mongoose.model("Register",registerSchema);
module.exports=Register;