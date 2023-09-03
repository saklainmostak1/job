var mysql = require('mysql');
var connections = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college'
});
connections.query(function (error) {
  if (!!error) {
    const data = "select * from 	users";
    connections.query(data, function (error, result) {
      console.log(result)
    })
  } else {
   console.log(error, 'Error')
  }
});
// connections.query(
//     'SELECT * FROM  admin_page_list',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
module.exports = connections;