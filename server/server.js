const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


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

// Routes
app.get('/api/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({userList});
});

app.post('/api/addUser', (req, res) => {
    // handle the POST request
    const item = req.body.item;
    userList.push(item);
    // ...
    // return a response
    res.status(201).json({message: 'Item created successfully.'});
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


