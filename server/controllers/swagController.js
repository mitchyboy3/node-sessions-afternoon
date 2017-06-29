const swag = require('./../models/swag.js')

module.exports = {
    read: (req,res) => {
        res.status(200).send(swag);
    }
}