// const db = require('../../Connection/connection')
// const express = require('express'),
// router = express.Router()



// router.get('/', (req, res) => {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// })



// module.exports = router;
import React from 'react';

import Admin_Page_List from '../../View/Admin/Admin_Page_list/Admin_Page_List';

const admin_page_list = () => {
    return (
        <div>
           <Admin_Page_List></Admin_Page_List>
        </div>
    );
};

export default admin_page_list;

