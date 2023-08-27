const connection = require('../../Connection/connection')
const userRolePermission = {
    getAllUserRole: async (req, res) => {
        try {
            const data = "select * from 	user_role";
            connection.query(data, function (error, result) {
                console.log(result)
                if (!error) {
                    return res.send(result)
                }

                else {
                    console.log({ message: error })
                }

            })
        }
        catch (error) {
            console.log(error)
        }
    },

    getSingleUseRole: async (req, res) => {
        try {
            const query = 'SELECT * FROM user_role WHERE id = ?';
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


    deleteSingleUserRole: async (req, res) => {
        try {
            const query = 'DELETE FROM user_role WHERE id = ?';
            connection.query(query, [req.params.id], (error, result) => {
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
    },

    updateSingleUserRole: async (req, res) => {
        try {
            const { role_name, status, modified_date } = req.body;
            const query = 'UPDATE user_role SET role_name = ?, status = ?, modified_date = ? WHERE id = ?';
            connection.query(query, [role_name, status, modified_date, req.params.id], (error, result) => {
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
    },






}


module.exports = userRolePermission