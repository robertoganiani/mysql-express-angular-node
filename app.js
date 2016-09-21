'use strict';
//setting up server
let express = require('express'),
    bodyParser = require('body-parser'),
    expressJWT = require('express-jwt'),
    connection = require('./connection'),
    routes = require('./routes');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(expressJWT({ secret: 'needToBeSecure' }).unless({ path: ['/user/login', '/user/register'] }));

connection.init();
routes.configure(app);
let server = app.listen(8000, () => {
        console.log('Server running on port ' + server.address().port);
});
