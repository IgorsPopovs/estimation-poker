const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Routes
app.get('/api/hello', (req, res) => {
    const message = 'Hello from the server!';
    res.json({ message });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
