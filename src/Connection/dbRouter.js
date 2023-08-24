// employcontroller
const express = require('express'),
    router = express.Router()

    const db = require('./connection')


const adminList = require('../Model/Admin_Model/Admin_page_list_Model')
const userRole = require('../Model/Admin_Model/user_role_permission_Modal')
const usersRole = require('../Model/Admin_Model/User_Role')

router.get('/',  async(req, res) => {

   const allAdmin = await adminList.getAlladminList()
   res.send(allAdmin)


})
router.get('/',  async(req, res) => {
    const alUserPer = await userRole.userPermission()
    res.send(alUserPer)
})

router.get('/',  async(req, res) => {
    const alUserPerRole = await usersRole.userRole()
    res.send(alUserPerRole)
})




module.exports = router