const router = require('express').Router();

const { User, Car, Review } = require('../../models');
const { findOne } = require('../../models/userModel');

// end point ...../api/review/


// create and Add a review - will use review and car table (put)

app.post('/', async (req, res) => {
  const { make, model, images } = req.body;

  // check to see if the car already exsits
  try {
    let car = await Car.findOne({
      where: {
        make: make,
        model: model
      }
    })
    // if it does find the car id
    // if not create a new car
    if (!car) {
      car = Car.create({
        make,
        model,
        images
      })
    }
    req.body.carID = car.id;

    // create a new review
    Review.create(req.body);
    res.status(200).json({ "message": "Created review" })

  }
  catch {
    res.status(500).json({ "message": "Can't create review" })
  }

});



//READ - find all reviews my  car ID  (GET)
app.get('/:review_id', (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
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
