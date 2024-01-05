const { Schema, model, Types } = require('mongoose');
// Import the 'moment' module to format timestamps
const moment = require('moment');

// Reaction schema
const reactionSchema = new Schema(
  {
    // Unique identifier for each reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Body of the reaction
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Username of the user who created the reaction
    username: {
      type: String,
      required: true,
    },
    // Creation timestamp of the reaction
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    // Configure options for the schema
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false, // Exclude the default '_id' field
  }
);

// Thought schema
const thoughtSchema = new Schema(
  {
    // Text of the thought
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // Creation timestamp of the thought
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    // Username of the user who created the thought
    username: {
      type: String,
      required: true,
    },
    // Array to store reactions associated with the thought
    reactions: [reactionSchema],
  },
  {
    // Configure options for the schema
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false, // Exclude the default '_id' field
  }
);

// Virtual property to get the total count of reactions for a thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const thought = model('thought', thoughtSchema);

// Export the Thought model
module.exports = thought;