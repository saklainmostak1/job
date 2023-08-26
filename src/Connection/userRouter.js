
const express = require('express')
const userRouter = express.Router()


const allUser = require('../Model/Admin_Model/user_role_permission_Modal')


userRouter.get('/all-users', allUser.getAllUser)
userRouter.get('/all-user/:id', allUser.getSingleUser)







module.exports = userRouter