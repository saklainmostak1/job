// index.js
const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config()
const port = process.env.PORT || 5002
const cors = require('cors')
const bodyParsar = require("body-parser")
app.use(cors())
app.use(bodyParsar.json())
app.use(express.json())

const connections = require('./connection'),
alladminList = require('../Model/Admin_Model/Admin_page_list_Model'),
userRolePermission = require('../Model/Admin_Model/user_role_permission_Modal'),
usersRole = require('../Model/Admin_Model/User_Role')


app.use('/all-admin-list', alladminList.getAlladminList)
app.use('/all-user-permission', userRolePermission.userPermission)
app.use('/all-user-role', usersRole.userRole)

// app.use('/all-admin/all-admin-list/all', alladminList.getAllList)
// const database = require('../Model/Admin_Model/Admin_page_list_Model')
// console.log(database)


// router.get('/admin/admin-page-list/admin-page-list-all', async(req, res) =>{
//    const all_list = await database.admin_page_list_all()
//     res.send(all_list)
//     console.log(all_list, 'nayan')
// }  )

// app.get('/admin/admin-page-list/admin-page-list-single',  admin_page_list_single)

// connections.connect(function(error){
// 	if(!!error) {
// 		console.log(error);
// 	} else {
// 		console.log('Database Connected Successfully..!!');
// 	}
// });


app.get('/', (req, res) => {
    res.send(' server is running')
})
app.listen(port, (req, res) => {
    console.log('api is running on', port);
})

module.export = router








