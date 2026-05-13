const express = require('express')
const { fileUpload, createEvent, getAllEvents, getEventById, updateSingleEvent, deleteEventById } = require('../controller/eventController')

const eventRouter = express.Router()

eventRouter.post('/create-event',createEvent)
eventRouter.get('/get-all-events',getAllEvents)
eventRouter.get('/get-event/:event_id',getEventById)
eventRouter.post('/update-event/:event_id',updateSingleEvent)
eventRouter.delete('/remove-event/:event_id',deleteEventById)
eventRouter.post('/file-upload', fileUpload)

module.exports = eventRouter