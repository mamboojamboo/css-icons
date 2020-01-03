const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/css-icons", {
  useNewUrlParser: true
});

module.exports = mongoose.connection;
