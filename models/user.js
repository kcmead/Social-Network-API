const { Schema, model, Types } = require('mongoose');

////////// Define the schema for the User model ////////// 
const userSchema = new Schema(
  {
    // Define the username field with type, uniqueness, and required properties
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // Define the email field with type, uniqueness, required, and email format validation properties
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // Define the thoughts field as an array of ObjectIds referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    // Define the friends field as an array of ObjectIds referencing the User model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    // Define options for the schema
    toJSON: {
      virtuals: true, // Include virtual properties when converting to JSON
    },
    id: false, // Exclude the default '_id' field
  }
);

// Define a virtual property 'friendCount' to get the count of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the UserSchema
const user = model('user', userSchema);

// Export the User model
module.exports = user;