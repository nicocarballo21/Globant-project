const mongoose = require("mongoose");

const meetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  link: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

meetSchema.virtual('isActive').get(() => {
  return (this.date - Date() > 0)
})

const Meets = mongoose.model("Meets", meetSchema);

module.exports = Meets;