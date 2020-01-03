import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  userName: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true,
    validate: [
      function(input) {
        return input.length >= 8 && input.length <= 20;
      },
      "Password is not long enough"
    ]
  },
  booking: { type: Array },
  tours: { type: Array }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
