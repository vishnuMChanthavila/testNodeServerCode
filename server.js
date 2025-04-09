const express = require('express');
const app = express();
const port = 8002;

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});