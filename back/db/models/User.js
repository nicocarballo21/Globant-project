const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    type: String,
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

userSchema.pre("save", function (next) {
  const users = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) return next(saltError);
      else {
        bcrypt.hash(users.password, salt, function (hashError, hash) {
          if (hashError) return next(hashError);
          users.password = hash;
          next();
        });
      }
    });
  } else return next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password).then((res) => {
    return res;
  });
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
