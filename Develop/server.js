const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./route/apiroute")(app)
//this needs to be LAST
require("./route/htmlroute")(app)

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });

