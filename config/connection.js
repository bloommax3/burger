var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ie6gasw7kj6dof7p",
    password: "t28kql233sl9lxdd",
    database: "q5v2n05u2fefbss0"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

module.exports = connection