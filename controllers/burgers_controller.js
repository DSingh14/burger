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


module.exports = router;