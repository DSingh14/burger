var express = require("express");
var router = express.Router();
// import the model(burgers.js) to use its database function
var burger = require("../models/burger.js")

//  create logic for routes 
router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});
// redirecting to same homepage
router.get("/api/burgers/", function (req, res) {
    res.redirect("/");

});
router.post("/api/burgers/", function (req, res) {
    burger.create([
        "burger_name"
    ], [
            req.body.name
        ], function (result) {
            res.json({ id: result.insertedid });
        });

});
router.put("/api/burgers/:id", function (req, res) {
    var id = "id : " + req.params.id;
    var devor = { devored: req.body.devored }
    burger.update(devor, id, function (req, res) {
        res.rediresct("/");
    });
});


module.exports = router;