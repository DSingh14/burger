var express = require("express");
var router = express.Router();
// import the model(burgers.js) to use its database function
var burger = require("../models/burger.js")

//  create logic for routes 
router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        res.render("index", { burgers: data });
    });
});
// redirecting to same homepage
router.get("/api/burgers/", function (req, res) {
    res.redirect("/");

});
router.post("/api/burgers/", function (req, res) {
    console.log(req.body)
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertedid });
        });

});
router.put("/api/burgers/:id", function (req, res) {
    var id = " id=" + req.params.id;
    var devor = { devoured: 1 };
    console.log(devor)
    console.log(id)
    burger.update(devor, id, function (data) {

        res.render("index", { burgers: data });
    });
});
// Delete burger from db
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;