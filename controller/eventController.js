const upload = require("../config/upload");
const eventModal = require("../model/eventModal");

const createEvent = async(req,res)=>{
    try {
        const { event_name, start_date, end_date, description, image } = req.body;
        if (!event_name) {
          return res.status(417).json({
            success: false,
            error: "event_name is Required",
            error_description: "event_name Field Must not be empty ",
          });
        }
        
        if (!image) {
          return res.status(417).json({
            success: false,
            error: "image is Required",
            error_description: "image field Must not be empty ",
          });
        }
        const task = new eventModal({
          event_name,
          start_date,
          end_date,
          description,
          image 
        });
        await task.save()
        .then((response) => {
          res.status(200).json({
            success: true,
            message: "event created Successfully",
            data: response,
          });
        });
      } catch (err) {
        res.status(500).json({ success: false, error: err });
      }
}

const getAllEvents = async(req,res)=>{
  try{
      const eventResult = await eventModal.find({})
      if(eventResult){
          return res.status(200).json({
              success: true,
              data: eventResult,
            });
      }
      return res.status(400).json({
          success: false,
          error: "something went wrong",
        });
  }
  catch (err) {
      res.status(500).json({ success: false, error: err });
    }
}

const updateSingleEvent = async(req,res)=> {
  try{
    const {event_id} = req.params
    const { event_name, start_date, end_date, description, image } = req.body;
    if(!event_id) {
      return res.status(417).json({
        success: false,
        message: "Event id is not must be empty"
      });
    }
    const taskResult = await eventModal.findById(event_id)
    if(!taskResult) {
      return res.status(400).json({
        success: false,
        message: "Event id is invalid"
      });
    }
    if(event_name) taskResult.event_name = event_name;
    if(start_date) taskResult.start_date = start_date;
    if(end_date) taskResult.end_date = end_date;
    if(description) taskResult.description = description;
    if(image) taskResult.image = image;
    const result = await taskResult.save();
    if(!result) {
      return res.status(400).json({
        success: false,
        message: "something went wrong"
      });
    }
      return res.status(200).json({
        success: true,
        message: "Event results are updated"
      });
    
  } catch(err) {
    res.status(500).json({ success: false, error: err });
  }
}

const getEventById = async(req,res)=>{
    try{
        const {event_id} = req.params
        if(!event_id) {
          return res.status(417).json({
            success: false,
            message: "Event id is not must be empty"
          });
        }
        const taskResult = await eventModal.findById(event_id)
        if(taskResult){
            return res.status(200).json({
                success: true,
                data: taskResult,
              });
        }
        return res.status(400).json({
            success: false,
            error: "something went wrong",
          });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err });
      }
}
const deleteEventById = async(req,res)=>{
    try{
        const {event_id} = req.params
        if(!event_id) {
          return res.status(417).json({
            success: false,
            message: "Event id is not must be empty"
          });
        }
        const deletedTask = await eventModal.findByIdAndDelete(event_id)
        if(deletedTask){
            return res.status(200).json({
                success: true,
                message: "Event deleted Successfully",
                data: deletedTask,
              });
        }
        return res.status(404).json({
            success: false,
            error: "Cant Find Event",
          });
    }
    catch (err) {`qqqqq`
        res.status(500).json({ success: false, error: err });
      }
}

const fileUpload = async(req, res) => {
  try {
    
    upload(req, res, (err) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: "Something went wrong",
          error_description: err
        });
      } else {
        if (req.file == undefined) {
          res.status(417).json({
            success: false,
            message: "No file selected"
          });
        } else {
          res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            fileurl: `http://localhost:4000/uploads/${req.file.filename}`
          });
        }
      }
    });
    
    

    
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

module.exports = { fileUpload, createEvent, getAllEvents, getEventById, updateSingleEvent, deleteEventById }