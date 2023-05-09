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
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


let interval;

let userList = [
    {
        name: "Igor",
        id: 0,
    },
    {
        name: "Kristaps",
        id: 1,
    },
];

io.on('connection', (socket) => {
    console.log('a user connected');

    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        socket.emit('userListUpdate', {userList});
    }, 1000);
    // Send initial userlist to connected client


    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        clearInterval(interval);
    });
});



// Routes
// app.get('/api/users', (req, res) => {
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json({userList});
// });

app.post('/api/users', (req, res) => {
    // handle the POST request
    const user = {
        name: req.body.userName,
        id: userList.length
    }
    userList.push(user);
    // send updated userlist to all connected clients
    io.emit('userListUpdate', { userList });
    // return a response
    res.status(201).json({message: 'Item created successfully.'});
});


// Start the server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


