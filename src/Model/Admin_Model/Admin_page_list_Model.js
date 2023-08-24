const db = require('../../Connection/connection')


const admin_page_list_all = (req, res) => {
    const data = "select * from 	admin_page_list";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}

const admin_page_list_single = (req, res) => {
    const data = "select * from users";
    db.query(data, function (error, result) {
        if (error) throw error;
        return res.json(result)
    })
}






//  function admin_page_list_create(req, res) {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// }
//  function admin_page_list_create(req, res) {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// https://jenilgajjar.medium.com/crud-operation-using-node-js-and-express-js-a0d63a2216aa
// }
//  function admin_page_list_edit(req, res) {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// }
//  function admin_page_list_delete(req, res) {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// }

//  function admin_page_list_single(req, res) {
//     const data = "select * from 	admin_page_list";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         return res.json(result)
//     })
// }


module.exports = admin_page_list_all
module.exports = admin_page_list_single

// admin_page_list_all()


    // admin_page_list_single,
    // admin_page_list_create,
    // admin_page_list_edit,
    // admin_page_list_delete,




