
const express = require('express')
const userRouter = express.Router()


const userRolePermission = require('../Model/Admin_Model/user_role_permission_Modal')


userRouter.get('/all-users', userRolePermission.getAllUser)
userRouter.get('/all-user/:id', userRolePermission.getSingleUser)







module.exports = userRouter