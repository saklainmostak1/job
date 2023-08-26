// index.js
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




const router = require('./dbRouter')
const userRouter = require('./userRouter')

app.use('/admin', router)
app.use('/user', userRouter)



app.get('/', async(req, res) => {
    res.send('server run')
})

app.listen(port, (req, res) => {
    console.log('api is running on', port);
})

module.export = router








