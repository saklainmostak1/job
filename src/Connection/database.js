
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5002
const cors = require('cors')
const bodyParsar = require("body-parser")


app.use(cors())
app.use(bodyParsar.json())
app.use(express.json())

 const admin_page_list_all = require('../Model/Admin_Model/Admin_page_list_Model')
 const admin_page_list_single = require('../Model/Admin_Model/Admin_page_list_Model')


app.use('/admin/admin-page-list/admin-page-list-all',  admin_page_list_all)

app.use('/admin/admin-page-list/admin-page-list-single',  admin_page_list_single)


app.get('/', (req, res) => {
    res.send(' server is running')
})
app.listen(port, (req, res) => {
    console.log('api is running on', port);
})









