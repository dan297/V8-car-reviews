const { Router } = require("express");
const { User } = require("../models")
const session = require('express-session');
const { route } = require(".");
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const router = Router();

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.render("home-logged-in")
  } else {
    res.render("home-guest")
  }
})

module.exports = router;