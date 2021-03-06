const router = require('express').Router();

const { User, Car, Review } = require('../../models');
const { findOne } = require('../../models/userModel');

// end point ...../api/review/


// create and Add a review - will use review and car table (put)

router.post('/', async (req, res) => {
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

router.get('/:carID', async (req, res) => {
  if (req.params.carID) {

    try {
      const { carID } = req.params;
      const reviewsByCarIDData = await Review.findAll({
        where: {
          car_id: carID
        }
      });

      const reviewsByCarID = reviewsByCarIDData.map((review) => review.get({ plain: true }));
      res.status(200).json(reviewsByCarID);


    } catch (error) {

    }

  }
});


router.get('/', async (req, res) => {
  try {
    const reviewsData = await Review.findAll();

    const allReviews = reviewsData.map((review) => review.get({ plain: true }));
    res.status(200).json(allReviews);
    console.log(allReviews)

  } catch (error) {
    res.status(500).json({ message: "could not find any reviews" });
  }


})

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

// Delete (delete) review

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

module.exports = router