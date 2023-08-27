const connection = require('../../Connection/connection')
const AdminPageListModel = {
    getAllUsers: async (req, res) => {
        try {
            const data = "select * from users";
            connection.query(data, function (error, result) {
                console.log(result)
                if (!error) {
                    res.send(result)
                }
                
                else {
                    console.log(error)
                }

            })
        }
        catch (error) {
            console.log(error)
        }
    },

    getSingleUsers: async (req, res) => {
        try {
            const query = 'SELECT * FROM users WHERE id = ?';
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
    deleteSingleUser: async (req, res) => {
        try {
            const query = 'DELETE FROM users WHERE id = ?';
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
    }


}


module.exports = AdminPageListModel