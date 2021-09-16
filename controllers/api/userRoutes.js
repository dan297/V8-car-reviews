const router = require('express').Router();

const { User } = require('../../models');


// route for login to be added (get)
// expect email and password to be on red.body
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const userData = await User.findOne({
        where: {
            email
        }
    })

    if (!userData) {
        res.status(400).json("Could not find username / password combination")
    } else if (userData.password === password) {
        console.log("Logged in")
        res.status(200).json("logged in");
        // this is where we write the code once logged in

    } else {
        res.status(400).json("Could not find username / password combination");
    }
});


module.exports = router;


// route for sign up (post)


router.post("/", async (req, res) => {
    try {
      const newUser = await User.create({ ...req.body});
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = newUser.id;

      }}
// get username from email (get)

