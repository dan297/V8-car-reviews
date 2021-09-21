const router = require('express').Router();
const { User } = require('../../models');

// create and Add a review - will use review and car table (put)

router.post('/api/reviewRoutes', (req, res) => {
    res.json(`${req.method} request received to get reviews`);
    console.info(`${req.method} request received to get reviews`);
});

//READ - find all reviews my  car ID  (GET)
router.get('/api/reviews/:review_id', async (req, res) => {
    if (req.params.review_id) {
        console.info(`${req.method} request received to get a single a review`);
        const reviewId = req.params.review_id;
        const userData = await User.findAll();
        res.status(200).json(userData);
    }
    });


    

//UPDATE - rate review (put / patch), edit a review
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// Delete (delete)

router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;