const mongoose = require("mongoose")
const uri = "mongodb://localhost/menteematch"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose
