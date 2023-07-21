const express = require("express");
const { Sequelize } = require("sequelize");
const router = express.Router();
const response = require("../response");
const models = require("../models/index");
const category = models.category;
const foods = models.foods;

const { where } = require("sequelize");

// Menginisialisasi asosiasi antara model
// category.associate(foods);
// foods.associate(category);

router.get("/", (req, res, next) => {
  response(200, "Api v1 ready to go", "SUCCESS", res);
});

// Get All Data
router.get("/category", (req, res) => {
  category
    .findAll()
    .then((category) => {
      res.json(category);
    })
    .catch((error) => {
      res.json({
        message: "not found",
      });
    });
});

// Get by id
router.get("/category/:id", (req, res) => {
  const id = req.params.id;

  category
    .findByPk(id)
    .then((category) => {
      res.json(category);
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Post
router.post("/category", (req, res) => {
  let data = {
    id: req.body.id,
    menu: req.body.menu,
  };

  category
    .create(data)
    .then((result) => {
      res.json({
        message: "data has been inserted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Put
router.put("/category", (req, res) => {
  let param = { id: req.body.id };
  let data = {
    menu: req.body.menu,
  };

  category
    .update(data, { where: param })
    .then((result) => {
      res.json({
        message: "data has been updated",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Delete
router.delete("/category/:id", (req, res) => {
  let param = { id: req.params.id };

  category
    .destroy({ where: param })
    .then((result) => {
      res.json({
        message: "data has been deleted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

module.exports = router;
