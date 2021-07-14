const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isMentor: { type: Boolean, default: false },
  isMentee: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skills",
    },
  ],
  mentees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  meets: [{ type: String }],
  salt: {
    type: String,
  },
  position: {
    typr: String,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  disLikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
