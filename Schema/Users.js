const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   UserName:{
      type:String,
      require:true
   },
   Age:{
    type:Number,
    require:true
   },
   Cart:{
     type:Array,
     default:[]
   },
   Orders:{
    type:Array,
    default:[]
   }
})

module.exports = new mongoose.model('users',UserSchema);