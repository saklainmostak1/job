const db = require('../../Connection/connection')

const express = require('express'),
router = express.Router()


 function admin_page_list_all(req, res) {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}
 function admin_page_list_create(req, res) {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}
 function admin_page_list_edit(req, res) {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}
 function admin_page_list_delete(req, res) {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}

 function admin_page_list_single(req, res) {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}

module.exports = 
{
    admin_page_list_all,
    admin_page_list_single,
    admin_page_list_create,
    admin_page_list_edit,
    admin_page_list_delete,
    router
}

// export default
//     admin_page_list_all;
//      admin_page_list_create,
//     admin_page_list_edit,
//      admin_page_list_delete,
//      admin_page_list_single
