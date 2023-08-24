const db = require('../../Connection/connection')
const express = require('express')
const app = express()

app.use(express.json())

module.exports.userPermission = (req, res) => {
    const data = "select * from 	user_role_permission";
    db.query(data, function (error, result) {
        console.log(result)
        if (error) {
            console.log(error)
        }

        else {
            res.send(result)
        }

    })
}

module.exports.getSingleAdminList = (req, res) => {

    const id = req.params.id
    const data = db.query("select * from 	admin_page_list where id = " + id);

    db.query(data, function (error, result) {
        console.log(result)
        if (error) {
            console.log(error)
        }

        else {
            res.send(result)
        }

    })

}



// module.exports.getAlladminList = (req, res) => {
//     const data = "select * from 	student_details";
//     db.query(data, function (error, result) {
//         if (error) throw error;
//         console.log(result, 'nayan')
//         return res.json(result)
//     })
// }


// const admin_page_list_single = (req, res) => {
//     const datas = "select * from users";
//     db.query(datas, function (error, results) {
//         if (error) throw error;
//         console.log(results, 'nayan')
//         return res.json(results)
//     })
// }


// module.exports = {admin_page_list_all, admin_page_list_single}












