// Mongoose connection
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/menteematch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
