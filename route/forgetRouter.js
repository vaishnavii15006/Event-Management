const express = require('express')
const { forgetController } = require('../controller/forgetController')

const forgetRouter = express.Router()


forgetRouter.post('/create',forgetController)

module.exports = forgetRouter