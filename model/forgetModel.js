const mongoose = require('mongoose')
const forgetSchema = new mongoose.Schema({
   
    email : {type:String },
    password : {type:String },
 
},{timestamps:true})

const forgetModel = mongoose.model('Forget',forgetSchema,'Forget')
module.exports = forgetModel