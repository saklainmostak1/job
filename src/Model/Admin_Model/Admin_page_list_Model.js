const connections = require('../../Connection/connection')
const post = {
    getAll: async (req, res) => {
        try {
            const data = "select * from 	admin_page_list";
            connections.query(data, function (error, result) {
                console.log(result)
                if (error) {
                    console.log(error)
                }

                else {
                    res.send(result)
                }

            })
        }
        catch (error) {
            console.log(error)
        }
    },

    getSingle: async (req, res) => {
        try {
            const query = 'SELECT * FROM admin_page_list WHERE id = ?';
            connections.query(query, [req.params.id], (error, result) => {
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
    }

}


module.exports = post