const mongoose = require("mongoose");

const meetSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Meets = mongoose.model("Meets", meetSchema);

module.exports = Meets;
