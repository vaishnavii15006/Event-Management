// const express = require('express')
// const { sendEmail } = require('../controller/emailController');

// const emailRouter = express.Router()

// authRouter.post('/send', sendEmail)

// module.exports = emailRouter




// routes/bookingRoutes.js

const express = require('express');
const { sendBookingEmail } = require('../controller/bookingController');

const router = express.Router();

router.post('/book-event', sendBookingEmail);

module.exports = router;
