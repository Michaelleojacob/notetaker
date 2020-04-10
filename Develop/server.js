const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./route/htmlroute")(app)
require("./route/apiroute")(app)

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });

