const { User } = require("../models");

const carData = [
  {
    first_name: "Ben",
    last_name: "Roberts",
    accuracy_rating: 9,
    number_of_reviews: 10,
    email: "BenRoberts@gmail.com",
    password: "1234",
    username: "Ben123"
  },
  {
    first_name: "Mike",
    last_name: "James",
    accuracy_rating: 7,
    number_of_reviews: 2,
    email: "MikeJames@gmail.com",
    password: "5678",
    username: "Mike123"
  },
  {
    first_name: "Michelle",
    last_name: "Martin",
    accuracy_rating: 1,
    number_of_reviews: 3,
    email: "Michelle@gmail.com",
    password: "112211",
    username: "Michelle123"
  },
];

const seedData = () => User.bulkCreate(carData);

module.exports = seedData;
