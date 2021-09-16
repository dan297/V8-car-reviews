const User = require('./userModel');
const Car = require('./carModel');
const Review = require('./reviewModel');

User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Car.hasMany(Review, {
    foreignKey: 'car_id',
});

Review.belongsTo(Car, {
    foreignKey: 'car_id',
});

module.exports = { User, Car, Review };
