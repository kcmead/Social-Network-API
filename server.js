const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Set the port for the server
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Middleware to parse incoming request data as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the defined routes for the application
app.use(routes);

// Once the database connection is open, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});