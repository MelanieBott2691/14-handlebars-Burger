var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
// Server as static content for the app from the "public" directory
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exprhbs = require("express-handlebars");
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server so taht it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});

