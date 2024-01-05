const router = require('express').Router();

// Import user routes from 'routesUser' file
const routesUser = require('./routesUser');

// Import thought routes from 'routesThought' file
const routesThought = require('./routesThought');

// Use the '/users' prefix for all user routes
router.use('/users', routesUser);

// Use the '/thoughts' prefix for all thought routes
router.use('/thoughts', routesThought);

// Export the router to be used in other parts of the application
module.exports = router;