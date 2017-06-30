const swag = require('./../models/swag');

module.exports = {
    add: (req, res) => {
        const {id} = req.query;
        let {cart} = req.session.user;
        const index = cart.findIndex( swag => swag.id === id)
        if (index === -1){
            const selectedSwag = swag.find( swag => swag.id === id );
            cart.push( selectedSwag );
            req.session.user.total += selectedSwag.price;
        }
         res.status(200).send( req.session.user )
    },

    remove: (req, res) => {

    },

    checkout: (req, res) => {

    },
}


