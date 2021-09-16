const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Car extends Model {}

Car.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
      },
      make: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.ARRAY,
      },
    },
    {
      sequelize,
      tableName: "cars",
    }
  );
  
  module.exports = Car;


