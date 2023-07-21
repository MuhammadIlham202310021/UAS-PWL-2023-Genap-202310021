"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "foods",
      [
        {
          // name: "original ",
          // desc: "Original ",
          // price: "200",
          // image:
          //   "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          // categoryId: id,
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("foods", null, {});
  },
};
