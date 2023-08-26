
const express = require('express')
   const router = express.Router()


    const controller = require('../Model/Admin_Model/Admin_page_list_Model')


    router.get('/', controller.getAll)
    router.get('/:id', controller.getSingle)

    // router.get('/',  async(req, res) => {

    //     const allAdmin = await controller.getAll
    //     res.json(allAdmin)
     
     
    //  })



module.exports = router