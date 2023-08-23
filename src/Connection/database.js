// const db = require('./connection')

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5002
const cors = require('cors')
const bodyParsar = require("body-parser")
// const router = express.Router();

app.use(cors())
app.use(bodyParsar.json())
app.use(express.json())

const db = require('./connection')
//  const admin_page_list_all = require('../Model/Admin_Model/Admin_page_list_Model')



// const router = require('../Model/Admin_Model/Admin_page_list_Model')

// router.get("/", admin_page_list_all);

const admin_page_list_all = (req, res) => {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        res.json(result)
    })
}


app.get('/all-admin', admin_page_list_all)


// db.connect(function(error){
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









