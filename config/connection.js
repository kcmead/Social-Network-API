const { connect, connection } = require('mongoose');

// MongoDB connection string
connect('mongodb://localhost:27017/SNAPI')

// Export the 'connection' object for external use
module.exports = connection;