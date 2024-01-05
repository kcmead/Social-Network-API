const router = require('express').Router();

// Import all API routes from the 'api' directory
const apiRoutes = require('./api');

// Add the prefix '/api' to all API routes imported from the 'api' directory
router.use('/api', apiRoutes);

// Middleware to handle incorrect routes and send a response
router.use((req, res) => res.send('Nope, that is an incorrect route.'));

// Export the router to be used in other parts of the application
module.exports = router;