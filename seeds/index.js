const sequelize = require('../config/connection');
const seedCar = require('./carData');
const seedReview = require('./reviewData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCar();

    await seedUser();

    await seedReview();

    process.exit(0);
};

seedAll();
