// const nodemailer = require('nodemailer');
// const Email = require('../models/Email');

// // Create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'your_email@gmail.com',  // Replace with your own Gmail address
//         pass: 'your_password'          // Replace with your Gmail password or App-Specific Password
//     }
// });

// // Function to send email
// const sendEmail = async (req, res) => {
//     const { name, email, number, subject, message } = req.body;

//     // Validate data (you can add your own validation logic here)

//     try {
//         // Send mail with defined transport object
//         let info = await transporter.sendMail({
//             from: `${name} <${email}>`,
//             to: 'nevethitha51@gmail.com',  // Replace with recipient email
//             subject: subject,
//             text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\n\n${message}`
//         });

//         console.log('Email sent: ' + info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Failed to send email' });
//     }
// };

// module.exports = { sendEmail };



// controllers/bookingController.js

const nodemailer = require('nodemailer');
const Booking = require('../model/bookingModel');

const sendBookingEmail = async (req, res) => {
    const { name, email, phone, address, eventName, interestedCity } = req.body;

    const booking = new Booking(name, email, phone, address, eventName, interestedCity);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arunkumar342000@gmail.com',
            pass: 'ckzb uwmr lkvx koju', // Use the app password generated in Step 1
          }
    });

    const mailOptions = {
        from: 'nevethitha51@gmail.com', // Replace with your email
        to: 'nevethitha51@gmail.com',
        subject: 'New Event Booking',
        text: `New booking details:
Name: ${booking.name}
Email: ${booking.email}
Phone: ${booking.phone}
Address: ${booking.address}
Event Name: ${booking.eventName}
Interested City: ${booking.interestedCity}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Booking email sent successfully.');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
};

module.exports = {
    sendBookingEmail
};

