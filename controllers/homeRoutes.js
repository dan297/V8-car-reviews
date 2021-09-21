const { Router } = require("express");
const { User } = require("../models")
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const router = Router();

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.render("home-logged-in")
  }
})

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "You provided an incorrect email and/or password.",
      });
    }

    // const validPassword = await user.checkPassword(req.body.password);
    const validPassword = req.body.password

    if (!validPassword) {
      res.status(400).json({
        message: "You provided an incorrect email and/or password.",
      });
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.id;

      res.json("Login Successful");
    });
  } catch (error) {
    res.status(400).json({
      message: "You provided an incorrect email and/or password.",
    });
  }
});

module.exports = router;