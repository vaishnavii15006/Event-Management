const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileType = file.originalname.split('.').pop();
    cb(null, Date.now() + '.' + fileType);
  }
});

// Create the multer instance
const upload = multer({ storage: storage }).single('file');

module.exports = upload;