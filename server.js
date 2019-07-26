var express = require("express");

var PORT = process.env.PORT || 3700;

var app = express();




// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.send("hellos")
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
