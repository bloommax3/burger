var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.all("burgers", function(data){
            cb(data)
        })
    },
    devour: function(idIn, cb){
        orm.update("burgers", {devoured: true}, {id: idIn}, function(data){
            cb(data)
        })
    },
    newBurger: function(vals, cb){
        orm.create("burgers", "name", vals, function(data){
            cb(data)
        })
    }
}

module.exports = burger