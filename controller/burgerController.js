var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        res.render("index", {data: data})
    })
})

router.put("/api/burger/id/:id", function(req, res){
    burger.devour(req.params.id, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
    })
})

router.post("/api/burger", function(req, res){
    console.log(req.body.name.toString())
    burger.newBurger(req.body.name.toString(), function(data){
        res.json(data)
    })
})

// Export routes for server.js to use.
module.exports = router;