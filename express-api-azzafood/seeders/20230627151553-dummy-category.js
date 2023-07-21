"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("category", [{}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("category", null, {});
  },
};
