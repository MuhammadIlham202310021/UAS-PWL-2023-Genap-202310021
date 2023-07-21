"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class foodorder extends Model {
    static associate(models) {
      // define association here
    }
  }
  foodorder.init(
    {
      foodId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "foodorder",
      tableName: "foodorder",
    }
  );
  return foodorder;
};
