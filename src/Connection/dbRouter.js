// employcontroller
const express = require('express'),
    router = express.Router()

    const db = require('./connection')


const adminList = require('../Model/Admin_Model/Admin_page_list_Model')

router.get('/',  async(req, res) => {

   const allAdmin = await adminList.getAlladminList()
   res.send(allAdmin)


})
router.get('/:id',  async(req, res) => {

   const singleAdmin = await adminList.getSingleAdminList(req.params.id)
   res.send(singleAdmin)


})




module.exports = router