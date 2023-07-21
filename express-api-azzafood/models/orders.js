"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      orders.belongsToMany(models.foods, { through: "foodorder" });
    }
  }
  orders.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nameFood: DataTypes.STRING,
      price: DataTypes.INTEGER,
      tableNumber: DataTypes.INTEGER,
      notes: DataTypes.STRING,
      totalPayment: DataTypes.INTEGER,
      typePayment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "orders",
      tableName: "orders",
    }
  );
  return orders;
};
