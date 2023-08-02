const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost:27017/MCS", {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => console.log("Database connected to localhost 27017..."))
    .catch((err) => console.log(`Connection failed...${err}`));
};
