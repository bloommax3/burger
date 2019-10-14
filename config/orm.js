var connection = require("./connection.js")

var orm = {
    searchWhere: function(tableName, searchCol, searchVal, cb){
        var searchQuery = "SELECT * FROM ?? WHERE ??=?"
        connection.query(searchQuery, [tableName, searchCol, searchVal], function(data){
            cb(data)
        })
    },
    all: function(tableName, cb){
        var searchQuery = "SELECT * FROM ??"
        connection.query(searchQuery, tableName, function(data){
            cb(data)
        })
    }
}

module.exports = orm