const router = require('express').Router();

const { User } = require('../../models');

// endpoint ...../api/users 

// Post - login page
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "You provided an incorrect email",
      });
    }

    const validPassword = await user.checkPassword(req.body.password)

    console.log("Check password is valid" + validPassword)

    if (!validPassword) {
      res.status(400).json({
        message: "You provided an incorrect password.",
      });
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user.id;
      req.session.username = user.username;

      res.json("Login Successful");
    });
  } catch (error) {
    console.log("Error: " + error)
    res.status(400).json({
      message: "Something else went wrong",
    });
  }
});

// Create a new user

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      const newUser = await User.create(req.body);

      console.log("Request body: ", req.body)

      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = newUser.id;
        req.session.username = req.body.username;

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
    console.log("Error: " + error)
    res.status(400).json(error);
  }
})

// Route for signing out

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