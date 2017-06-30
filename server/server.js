const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config.js');
const checkForSession = require('./middlewares/checkForSession');
const swagController = require('./controllers/swagController');
const authController = require('./controllers/authController');

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
}));

app.use(checkForSession);

app.get('/api/swag', swagController.read)

app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/signout', authController.signout)
app.get('/api/user', authController.getUser)
app.get('/api/allusers', authController.getAllUsers)

const port = config.port || 3000
app.listen(port, ()=> console.log(`Server online and listening on port ${port}.`) )
