
const express = require('express')
const router = express.Router()


const AdminPageListModel = require('../Model/Admin_Model/Admin_page_list_Model')


router.get('/all-admin', AdminPageListModel.getAllAdminPageList)
router.get('/all-admin/:id', AdminPageListModel.getSingleAdminPageList)



module.exports = router