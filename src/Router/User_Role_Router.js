
const express = require('express')
const userRoloRouter = express.Router()


const userRole = require('../Model/Admin_Model/User_Role')


userRoloRouter.get('/all-users-role', userRole.getAllUserRole)
userRoloRouter.get('/all-users-role/:id', userRole.getSingleUseRole)



module.exports = userRoloRouter