
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5002
const cors = require('cors')
const bodyParsar = require("body-parser")
app.use(cors())
app.use(bodyParsar.json())
app.use(express.urlencoded({extended: false}))
app.use(express.json())




const adminPageListRouter = require('../Router/Admin_Page_LIst_Router')
const userRolePermission = require('../Router/User_Role_Permission_Router')
const userRoloRouter = require('../Router/User_Role_Router')
const allUsers = require('../Router/All_Users_Router')
app.use('/admin', adminPageListRouter)
app.use('/user-permission', userRolePermission)
app.use('/user-role', userRoloRouter)
app.use('/all-users', allUsers)



app.get('/', async(req, res) => {
    res.send('server run')
})

app.listen(port, (req, res) => {
    console.log('api is running on', port);
})

// module.export = router








