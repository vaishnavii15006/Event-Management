const express = require('express')
const { createGallery, getAllGallery, getGalleryById, updateSingleGallery, deleteGalleryById } = require('../controller/galleryController')

const galleryRouter = express.Router()

galleryRouter.post('/create', createGallery)
galleryRouter.get('/get-all', getAllGallery)
galleryRouter.get('/get-single/:gallery_id', getGalleryById)
galleryRouter.post('/update-gallery/:gallery_id', updateSingleGallery)
galleryRouter.delete('/delete', deleteGalleryById)

module.exports = galleryRouter