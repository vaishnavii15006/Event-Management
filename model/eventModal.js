var mongoose = require('mongoose')

var eventSchema = new mongoose.Schema({
    event_name : {type:String},
    start_date:{type:Date},
    end_date :{type:Date},
    description:{type:String},
    image: { type: String }
})

const eventModal = mongoose.model('Event',eventSchema,'Event')
module.exports = eventModal