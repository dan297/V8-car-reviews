const router = require('express').Router();
const { Car, Review, User } = require('../../models');
const Sequelize = require('sequelize');

// Seaching for cars (get)

router.get('/', (req, res) => {
  Car.findAll({
    include: [
      {
        model: reviewModel,
        attributes: ['rating', 'description']
      },
    ]
  })
    .then(carData => res.json(carData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Search by make or model
router.get('/:makeOrModel', async (req, res) => {
  try {
    let foundMake = await Car.findAll({

      where:
      {
        make: req.params.makeOrModel,
      }
    })
    const foundModel = await Car.findAll({

      where:
      {
        model: req.params.makeOrModel,
      }
    })
    const returnValue = [...foundMake, ...foundModel]
    res.status(200).json(returnValue)
  }
  catch (error) {
    res.status(400).json({ message: "Could not find car" })
  }

})


module.exports = router;
