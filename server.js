var express = require("express");
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// require("dotenv").config()

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening at localhost:" + PORT);
})

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }

//     console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;