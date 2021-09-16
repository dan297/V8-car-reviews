const { Car } = require('../models');

const carData = [
    {
    },
];

const seedCar = () => Car.bulkCreate(carData);

module.exports = seedCar;
