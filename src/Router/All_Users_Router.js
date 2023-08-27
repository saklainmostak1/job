
const express = require('express')
const allUsersRouter = express.Router()


const allUsers = require('../Model/Admin_Model/All_Users_Model')


allUsersRouter.get('/all-users', allUsers.getAllUsers)
allUsersRouter.get('/all-users/:id',allUsers.getSingleUsers)
allUsersRouter.delete('/all-users/:id',allUsers.deleteSingleUser)



module.exports = allUsersRouter