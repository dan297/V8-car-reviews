const { where } = require("sequelize/types");

router.post("/", async (req, res) => {
    try {
      const User = await User.create({ ...req.body});
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = User.id;
  
  
        res.json({ user: User.id });
      });
    } catch (error) {
      res.status(400).json(error);
    }
  });