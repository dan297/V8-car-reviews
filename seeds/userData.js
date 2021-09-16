const { User } = require('../models');

const userData = [
    {
    },
];

const seedData = () => User.bulkCreate(userData);

module.exports = seedData;
