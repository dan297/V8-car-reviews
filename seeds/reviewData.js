const { Review } = require('../models');

const reviewData = [
    {
    },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
