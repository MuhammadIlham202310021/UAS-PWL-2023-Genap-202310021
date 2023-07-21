"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate = (models) => {
      category.hasMany(models.foods, { foreignKey: "categoryId" });
    };
  }
  category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      menu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
      tableName: "category",
    }
  );
  return category;
};
