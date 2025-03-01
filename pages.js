// pages.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.session.name) {
        var name = req.session.name;
        res.render("home", { name: name });
    }
    return res.render("home", { name: null });
});
router.get("/login", (req, res) => {
    if (req.session.name) {
        res.redirect("/");
    }
    return res.render("login", { error: null });
});
router.get("/register", (req, res) => {
    if (req.session.name) {
        res.redirect("/");
    }
    return res.render("register", { error: null });
});
router.get("/dashboard", async function(req, res){
    if (req.session.name) {
    res.render("dashboard", {user: req.user});
    } else {
        res.redirect("/login")
    }
});
router.get("/dashboard/project", async function(req, res){
    if (req.session.name) {
    res.render("project", {user: req.user});
    } else {
        res.redirect("/login")
    }
});
module.exports = router;