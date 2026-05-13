var mongoose = require('mongoose')

var gallerySchema = new mongoose.Schema({
    title : {type:String},
    description:{type:String},
    image: { type: String }
})

const galleryModal = mongoose.model('Gallery',gallerySchema,'Gallery')
module.exports = galleryModal