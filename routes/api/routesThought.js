const router = require('express').Router();

////////// Import thought controller methods //////////
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/controllerThought');

////////// Routes for handling thoughts and reactions //////////

// /api/thoughts
// - GET: Get all thoughts
// - POST: Create a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
// - GET: Get a single thought by ID
// - PUT: Update a thought by ID
// - DELETE: Delete a thought by ID
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// - POST: Create a new reaction for a thought
router.route('/:thoughtId/reactions')
  .post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// - DELETE: Delete a reaction by ID for a specific thought
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

////////// Export the router to be used in other parts of the application //////////
module.exports = router;