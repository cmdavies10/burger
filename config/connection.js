var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    } else {
        console.log("connected as ID: " + connection.threadId);
    }
});

module.exports = connection;