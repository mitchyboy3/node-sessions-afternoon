const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config.js');
const checkForSession = require('./middlewares/checkForSession');
const swagController = require('./controllers/swagController');

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

app.use(checkForSession);

app.get('/api/swag', swagController.read)

const port = config.port || 3000
app.listen(port, ()=> console.log(`Server online and listening on port ${port}.`) )
