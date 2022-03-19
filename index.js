const express = require('express');
const app = express();
//Needed if willing to use the chat
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
//

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

//HTML entry point for the application.
app.get('/', (req,res) => {
    res.render('chatTest.ejs');
})



app.get('/navigationTest', (req,res) => {
    res.render('navigationTest.ejs');
})

//io setup
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    })
})
//io print messages;
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg)
        console.log('message: ' + msg);
        //io.emit emits message to all users, including user who sent the message;
        //io.emit('chat message', msg)
    })
});





//listening for the APP. Use the app.listen for the regular version, server.listen for the chat version
/*
app.listen(3000, () => {
    console.log('Alive and running on localhost: 3000');
})
*/


server.listen(3000, () => {
    console.log('listening on *: 3000');
})
