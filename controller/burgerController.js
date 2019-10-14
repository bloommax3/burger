var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        res.render("index", {data: data})
    })
})

// Export routes for server.js to use.
module.exports = router;