const express = require("express");
const app = express();

// db connection
require("./startup/db")();

// routes
require("./startup/routes")(app);

app.listen(9000, () => {
  console.log(`Listening to port 9000`);
});
