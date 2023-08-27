
const express = require('express')
const userRouter = express.Router()


const userRolePermission = require('../Model/Admin_Model/user_role_permission_Modal')


userRouter.get('/all-users', userRolePermission.getAllUserRolePermission)
userRouter.get('/all-users/:id', userRolePermission.getSingleUserRolePermission)







module.exports = userRouter