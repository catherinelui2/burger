const mysql = require("mysql");

const connection = mysql.createConnection({
    host: " localhost",
    port: 3306,
    user: "root",
    password: "rootpw",
    database: "burgers_db"
});

//Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connections for ORM
module.exports = connection;