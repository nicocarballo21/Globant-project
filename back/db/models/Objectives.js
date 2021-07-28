const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const objectivesSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
});

const Objectives = model("Objectives", objectivesSchema);

module.exports = Objectives;
