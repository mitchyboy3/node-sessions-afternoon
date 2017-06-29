const users = require('./../models/users');
let id = 1;

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;

    },

    register: (req, res) => {
        users.push({
            id,
            username: req.body.username,
            password: req.body.password,
        });
        session.username = req.body.username;
        id++;
        res.status(200).send(session.username)
    },

    signout: (req, res) => {
        session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res) => {
        res.status(200).send(req.session.user);
    },
    
}