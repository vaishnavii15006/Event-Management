// var express = require('express');
// var bcrypt = require('bcrypt');
// var cors = require('cors');
// var path = require('path');
// require('dotenv').config();
// var db = require('./config/dbConnnection');
// const authRouter = require('./route/authRouter');
// const eventRouter = require('./route/eventRouter');
// const galleryRouter = require('./route/galleryRouter');
// const forgetRouter = require('./route/forgetRouter');
// // const emailRRouter = require('./route/emailRouter');

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/auth', authRouter);
// app.use('/event', eventRouter);
// app.use('/gallery', galleryRouter);
// app.use('/forget', forgetRouter);
// // app.use('/email', emailRRouter);
// app.listen(4000, () => {
//     console.log("Port Listened Successfully");
// });



// correct one >


// var express = require('express')
// var bcrypt = require('bcrypt')
// var cors = require('cors')
// var path = require('path')
// require('dotenv').config()
// var db = require('./config/dbConnnection')
// const authRouter = require('./route/authRouter')
// const eventRouter = require('./route/eventRouter')
// const galleryRouter = require('./route/galleryRouter')
// const forgetRouter = require('./route/forgetRouter')
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/auth',authRouter)
// app.use('/event',eventRouter)
// app.use('/gallery', galleryRouter)
// app.use('/forget', forgetRouter)
// app.listen(4000,()=>{console.log("Port Listened Successfully ");})    








// Import required modules
var express = require('express');
var bcrypt = require('bcrypt');
var cors = require('cors');
var path = require('path');
require('dotenv').config();
var db = require('./config/dbConnnection');
const authRouter = require('./route/authRouter')

const eventRouter = require('./route/eventRouter');
const galleryRouter = require('./route/galleryRouter');
const forgetRouter = require('./route/forgetRouter');
const bookingRoutes = require('./route/bookingRoutes'); // Ensure this path is correct

// Create Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
app.use('/auth', authRouter);
app.use('/event', eventRouter);
app.use('/gallery', galleryRouter);
app.use('/forget', forgetRouter);
app.use('/api', bookingRoutes); // Add booking routes

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});




