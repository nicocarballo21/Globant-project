// Mongoose connection
const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:menteematch@cluster-db.sr3ho.mongodb.net/menteematch?retryWrites=true&w=majority" 
//mongodb://localhost:27017/menteematch
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
