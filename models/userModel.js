const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(providedPassword) {
    return bcrypt.compare(providedPassword, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    accuracy_rating: {
      type: DataTypes.INTEGER,
    },
    number_of_reviews: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
      }
    },
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeCreate: async (newUser) => {
        console.log(newUser)

        newUser.password = await bcrypt.hash(newUser.password, 10)

        console.log("Updated new user: " + newUser)

        return newUser;
      },
      beforeUpdate: async updatedUser => {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);

        return updatedUser;
      }
    }
  }

);

module.exports = User;
