const { Router } = require("express");
const { User } = require("../models")
const session = require('express-session');
const { route } = require(".");
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const router = Router();

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    console.log(req.session)
    res.render("home-logged-in", {logged_in: true, username: req.session.username})
  } else {
    res.render("home-guest", {logged_in: false})
  }
})

module.exports = router;