
var dotenv = require("dotenv")
dotenv.config();

var mysql = require("mysql");
var { user, password, database } = process.env;


// create connection
var config = {
    port: 3306,
    host: 'localhost',
    user: user,
    password: password,
    database: database
}
var connection;
var host;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWDB';
} else {
    connection = mysql.createConnection(
        config
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

