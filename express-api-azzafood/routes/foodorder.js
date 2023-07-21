const express = require("express");
const { Sequelize, Op } = require("sequelize");
const router = express.Router();
const response = require("../response");
const models = require("../models/index");
const foodorder = models.foodorder;
const orders = models.orders;
const foods = models.foods;

const { where } = require("sequelize");

// Menginisialisasi asosiasi antara model
// category.associate(order);
// order.associate(category);
// order.associate(category);

router.get("/", (req, res) => {
  response(200, "Api v1 ready to go", "SUCCESS", res);
});

// Get All Data
router.get("/foodorder", (req, res) => {
  foodorder
    .findAll()
    .then((foodorder) => {
      res.json(foodorder);
    })
    .catch((error) => {
      res.json({
        message: "not found",
      });
    });
});

// Get by id
router.get("/foodorder/:id", (req, res) => {
  const id = req.params.id;

  foodorder
    .findByPk(id)
    .then((foodorder) => {
      res.json(foodorder);
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Post
router.post("/foodorder", (req, res) => {
  let data = {
    id: req.body.id,
    foodId: req.body.foodId,
    orderId: req.body.orderId,
  };

  foodorder
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
router.put("/foodorder", (req, res) => {
  let param = { id: req.body.id };
  let data = {
    id: req.body.id,
    foodId: req.body.foodId,
    orderId: req.body.orderId,
  };

  foodorder
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
router.delete("/foodorder/:id", (req, res) => {
  let param = { id: req.params.id };

  foodorder
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
