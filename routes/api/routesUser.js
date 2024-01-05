const router = require('express').Router();

////////// Import user controller methods //////////
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/controllerUser');

////////// Routes for handling users and friends //////////

// /api/users
// - GET: Get all users
// - POST: Create a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:userId
// - GET: Get a single user by ID
// - PUT: Update a user by ID
// - DELETE: Delete a user by ID
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
// - POST: Add a friend to a user's friends list
// - DELETE: Delete a friend from a user's friends list
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

////////// Export the router to be used in other parts of the application //////////
module.exports = router;