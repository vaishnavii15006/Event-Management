const upload = require("../config/upload");
const galleryModal = require("../model/galleryModal");

const createGallery = async(req,res)=>{
    try {
        const { title, description, image } = req.body;
        if (!title) {
          return res.status(417).json({
            success: false,
            error: "title is Required",
            error_description: "title Field Must not be empty ",
          });
        }
        if (!image) {
          return res.status(417).json({
            success: false,
            error: "image is Required",
            error_description: "image field Must not be empty ",
          });
        }
        const task = new galleryModal({
          title,
          description,
          image 
        });
        await task.save()
        .then((response) => {
          res.status(200).json({
            success: true,
            message: "gallery created Successfully",
            data: response,
          });
        });
      } catch (err) {
        res.status(500).json({ success: false, error: err });
      }
}

const getAllGallery = async(req,res)=>{
  try{
      const eventResult = await galleryModal.find({})
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

const updateSingleGallery = async(req,res)=> {
  try{
    const {gallery_id} = req.params
    const { title, description, image } = req.body;
    if(!event_id) {
      return res.status(417).json({
        success: false,
        message: "Gallery id is not must be empty"
      });
    }
    const taskResult = await galleryModal.findById(gallery_id)
    if(!taskResult) {
      return res.status(400).json({
        success: false,
        message: "Gallery id is invalid"
      });
    }
    if(title) taskResult.title = title;
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
        message: "Gallery results are updated"
      });
    
  } catch(err) {
    res.status(500).json({ success: false, error: err });
  }
}

const getGalleryById = async(req,res)=>{
    try{
        const {gallery_id} = req.params
        if(!gallery_id) {
          return res.status(417).json({
            success: false,
            message: "Gallery id is not must be empty"
          });
        }
        const taskResult = await galleryModal.findById(gallery_id)
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

const deleteGalleryById = async(req,res)=>{
    try{
        const {gallery_id} = req.params
        if(!gallery_id) {
          return res.status(417).json({
            success: false,
            message: "Gallery id is not must be empty"
          });
        }
        const deletedTask = await galleryModal.findByIdAndDelete(gallery_id)
        if(deletedTask){
            return res.status(200).json({
                success: true,
                message: "Gallery deleted Successfully",
                data: deletedTask,
              });
        }
        return res.status(404).json({
            success: false,
            error: "Something went wrong",
          });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err });
      }
}


module.exports = { createGallery, getAllGallery, getGalleryById, updateSingleGallery, deleteGalleryById }