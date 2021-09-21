const router = require('express').Router();
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { User } = require('../../models');


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

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      const newUser = await User.create(req.body);
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = newUser.id;
  
        res.status(200).json({
          message: "User created",
        });
      });
    } else {
      res.status(400).json({
        message: "Cannot create user",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
})

//route for signing out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;