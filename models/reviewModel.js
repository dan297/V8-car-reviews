const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        description: {
            car_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'cars',
                    key: 'id',
                    unique: false
                }
            }
        },
        description: {
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    unique: false
                },
            },
        },
    },
    {
        sequelize,
        tableName: "reviews",
    }
);

module.exports = Review;


