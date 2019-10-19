import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Guides = new Schema({
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
  avatar: {}
});
