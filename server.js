var express = require("express");
var exprhbs = require("express-handlebars")
var bodyParser = require("body-parser");

// variable to run express
var app = express();

// set up port to deploy in Heroku
var PORT = process.env.PORT || 8080;


// Server as static content for the app from the "public" directory
app.use(express.static("public"));

// bodyParser elements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
// var exprhbs = require("express-handlebars");
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server so taht it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});

