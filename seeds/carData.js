const { Car } = require('../models');

const carData = [
    {
        make:"Ford",
        model:"Fiesta ST",
        images: [],
    },
    {
        make:"Jaguar",
        model:"XF",
        images: [],

    },
    {
        make:"ferrari",
        model:"458",
        images: [],

    },
];

const seedCar = () => Car.bulkCreate(carData);

module.exports = seedCar;
