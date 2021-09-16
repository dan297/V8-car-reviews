const { Review } = require('../models');

const reviewData = [
    {
        rating: 5,
        description: "Great car",
        car_id: 1,
        user_id: 1
    },
    {
        rating: 3,
        description: "OK car",
        car_id: 1,
        user_id: 1
    },
    {
        rating: 1,
        description: "Rubbish car",
        car_id: 1,
        user_id: 1
    },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
