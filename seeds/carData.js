const { Car } = require('../models');

const carData = [
    {
        make:"Ford",
        model:"Fiesta ST",
    },
    {
        make:"Jaguar",
        model:"XF",
    },
    {
        make:"Ferrari",
        model:"458",
    },
];

const seedCar = () => Car.bulkCreate(carData);

module.exports = seedCar;
