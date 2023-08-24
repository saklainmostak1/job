
// var mysql = require("mysql")


// var mysqlPool = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password: "",
//     database: "college"
// })

// mysqlPool.connect(function (error) {
//     if (error) throw error;
//     console.log('connect')
//     mysqlPool.query("select * from student_details", function (error, result) {
//         if (error) throw error;
//         console.log(result.map(res => res.Name))
//         console.log(result)
//     })
// });
// db

var mysql = require('mysql');
var connections = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'college'
});
connections.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});
// connections.connect(function (error) {
//     if (error) throw error;
//     console.log('connect')
//     connections.query("select * from student_details", function (error, result) {
//         if (error) throw error;
//         console.log(result.map(res => res.Name))
//         console.log(result)
//     })
// });


module.exports = connections;