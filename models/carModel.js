const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Car extends Model { }

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
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('images').split(';')
      },
      set(val) {
        this.setDataValue('images', val.join(';'));
      },
    },
  },
  {
    sequelize,
    tableName: "cars",
  }
);

module.exports = Car;


