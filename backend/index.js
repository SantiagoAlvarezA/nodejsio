require('dotenv').config();

var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();
var jwt = require('jsonwebtoken');

const socketioJwt = require('socketio-jwt');
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {

    let secret = process.env.ACCESS_API_KEY;

    if (secret !== req.headers['x-api-key']) {
        return res.status(403).json({
            error: "Error api_key"
        });
    }

    let token = jwt.sign({ name: req.headers['name_user'], secret: secret }, process.env.ACCESS_TOKEN_KEY);
    return res.json({
        token: token
    });
});


var server = require('http').Server(app);
var io = require('socket.io')(server);

// io.sockets.on('connection', function (socket) {
//     console.log(123434);
// });

io.use(socketioJwt.authorize({
    secret: process.env.ACCESS_TOKEN_KEY,
    handshake: true,
    timeout: 35000,
    callback: 5000
}));


io.on('connection', (socket) => {
    console.log('hello!');
});

io.on('authenticated', (socket) => {
    console.log(9999); // new decoded token
});




server.listen(PORT, function () {
    console.log('listening on port -> ' + PORT);
});