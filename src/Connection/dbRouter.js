
const express = require('express')
const router = express.Router()


const controller = require('../Model/Admin_Model/Admin_page_list_Model')


router.get('/all-admin', controller.getAll)
router.get('/all-admin/:id', controller.getSingle)







module.exports = router