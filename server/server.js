const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
    autoConnect: false,
});
// const socket = io.listen(server);

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// let interval;

let userList = [
    {
        name: "Igor",
        id: 0,
        connected: true,
    },
    {
        name: "Kristaps",
        id: 1,
        connected: false,
    },
];

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
    // userList.push({name: 'connecting...', id: socket.id});
    socket.emit('socketId', {socketId: socket.id});
    socket.emit('userListUpdate', {userList});

    // socket.on('')

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        // clearInterval(interval);

        //Disconnect user
        let userIndex = userList.findIndex(user => user.id === socket.id);
        //console.log(userIndex);
        if (userIndex != -1) userList[userIndex].connected = false;
    });
});


// Routes
// app.get('/api/users', (req, res) => {
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json({userList});
// });

app.post('/api/users', (req, res) => {
    // handle the POST request
    // socket.on('data', function (data) {
    const user = {
        name: req.body.userName,
        id: req.body.userId,
        connected: true,
    }
    userList.push(user);
    // send updated userlist to all connected clients


    // return a response
    res.status(201).json({message: 'Item created successfully.'});
    io.emit('userListUpdate', {userList});
    // });
});


// Start the server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


