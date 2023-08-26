const connection = require('../../Connection/connection')
const userRolePermission = {
    getAllUser: async (req, res) => {
        try {
            const data = "select * from 	user_role_permission";
            connection.query(data, function (error, result) {
                console.log(result)
                if (!error) {
                  return  res.send(result)
                }
                
                else {
                    console.log({message: error})
                }

            })
        }
        catch (error) {
            console.log(error)
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const query = 'SELECT * FROM user_role_permission WHERE id = ?';
            connection.query(query, [req.params.id], (error, result) => {
                if (!error && result.length > 0) {
                    console.log(result);
                    return res.send(result);
                } else {
                    console.log(error || 'Product not found');
                    return res.status(404).json({ message: 'Product not found.' });
                }
            });
        }
        catch (error) {
            console.log(error)
        }
    },

    UpdateSingleUser: async (req, res) => {
        try {
            const { name, description, price } = req.body;
            const query = 'UPDATE user_role_permission SET name = ?, description = ?, price = ? WHERE id = ?';
            connection.query(query, [name, description, price, req.params.id], (error, result) => {
              if (!error && result.affectedRows > 0) {
                console.log(result);
                return res.send(result);
              } else {
                console.log(error || 'Product not found');
                return res.status(404).json({ message: 'Product not found.' });
              }
            });
        }
        catch (error) {
            console.log(error)
        }
    }

}


module.exports = userRolePermission