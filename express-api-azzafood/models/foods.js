"use strict";
const { Model, DataTypes } = require("sequelize");
// const sequelize = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    static associate = (models) => {
      foods.belongsTo(models.category, { foreignKey: "categoryId" });
      foods.belongsToMany(models.orders, { through: "foodorder" });
    };
  }
  foods.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "foods",
      tableName: "foods",
    }
  );
  return foods;
};
