var mongoose = require('mongoose')

var contentSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  phone: { type: String, required: true },
  content: { type: String, required: true },
})

const Content=mongoose.model("Content",contentSchema);
module.exports=Content;