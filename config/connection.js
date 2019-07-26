
// var dotenv = require(".dotenv")
// dotenv.config();

var mysql = require("mysql");
var { root, Jaimatadi1, burgers_db } = process.env;


// create connection
var config = {
    port: 3306,
    host: 'localhost',
    user: "root",
    password: "Jaimatadi1",
    database: "burgers_db"
}
var connection;
var host;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWDB';
} else {
    connection = mysql.createConnection(
        config
        // host: "localhost",
        // port: 3306,
        // user: "root",
        // password: "Jaimatadi1",
        // database: "burgers_db"
    );
    host = 'localhost';
};
connection.connect(function (err) {
    if (err) {
        console.log('error connecing: ' + err.stack);
        return;
    } else {
        console.log('connected with' + host);
    }
});






module.exports = connection;

