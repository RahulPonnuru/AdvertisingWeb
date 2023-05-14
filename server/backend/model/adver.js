var mongoose = require('mongoose')
var adverSchema = mongoose.Schema({
    name:String,
    email:String,
    requirements:String,
    budget:Number
})
      
const Adver=mongoose.model("Adver",adverSchema);
module.exports=Adver;