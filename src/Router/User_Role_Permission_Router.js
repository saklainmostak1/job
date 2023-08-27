
const express = require('express')
const userRouter = express.Router()


const userRolePermission = require('../Model/Admin_Model/user_role_permission_Modal')


userRouter.get('/all-users-role-permission', userRolePermission.getAllUserRolePermission)
userRouter.get('/all-users-role-permission/:id', userRolePermission.getSingleUserRolePermission)







module.exports = userRouter