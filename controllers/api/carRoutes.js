const router = require('express').Router();
const { carModel, reviewModel, userModel } = require('../../models');

// seaching for cars (get)

router.get('/', (req, res) => {
    carModel.findAll({
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

  module.exports = router;
