// router connections that will manage the database arrays and identify the endpoints
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Router Index
router.get("/", function(req, res) {
  res.redirect('/burgers'); 
});
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
   ], function() {
      console.log("Please Enter Burger Name!");
      res.redirect('/burgers');
   });
  });
  
router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

    burger.update({
      devoured: req.body.devoured
    }, condition, function(data) {
      console.log(result);
      res.redirect('/burgers');
    });
  });


// Export routes for server.js to use.
module.exports = router;
