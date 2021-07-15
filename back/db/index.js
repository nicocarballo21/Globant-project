// Mongoose connection
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/menteematch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
