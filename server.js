var express = require("express");
var bodyParser = require("body-parser");

// create an "express" server
var app = express();

// take the port from the environment, else use port 3000
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes handled in separate script files
require("app/routes/api_routes")(app);
require("app/routes/html_routes")(app);

// tell the server to start listening for connections
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
