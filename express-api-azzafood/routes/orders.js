const express = require("express");
const { Sequelize, Op } = require("sequelize");
const router = express.Router();
const response = require("../response");
const models = require("../models/index");
const orders = models.orders;

const { where } = require("sequelize");

// Menginisialisasi asosiasi antara model
// category.associate(order);
// order.associate(category);
// order.associate(category);

router.use(express.json()); // Menggunakan built-in middleware express.json()
router.use(express.urlencoded({ extended: true })); // Menggunakan built-in middleware express.urlencoded()

router.get("/", (req, res) => {
  response(200, "Api v1 ready to go", "SUCCESS", res);
});

// Get All Data
router.get("/orders", (req, res) => {
  orders
    .findAll()
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.json({
        message: "not found",
      });
    });
});

// Get by id
router.get("/orders/:id", (req, res) => {
  const id = req.params.id;

  orders
    .findByPk(id)
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Post
router.post("/orders", (req, res) => {
  // const items = req.body.items;

  // const nameFoods = [];
  // const price = [];
  // items.forEach((item) => {
  //   nameFoods.push(item.nameFood);
  //   price.push(item.price);
  // });

  let data = {
    // nameFood: nameFoods.join(", "),
    nameFood: req.body.nameFood,
    price: req.body.price,
    tableNumber: req.body.tableNumber,
    notes: req.body.notes,
    totalPayment: req.body.totalPayment,
    typePayment: req.body.typePayment,
  };

  orders
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
router.put("/orders", (req, res) => {
  let param = { id: req.body.id };
  let data = {
    id: req.body.id,
    nameFood: req.body.nameFood,
    price: req.body.price,
    tableNumber: req.body.tableNumber,
    notes: req.body.notes,
    totalPayment: req.body.totalPayment,
    typePayment: req.body.typePayment,
  };

  orders
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
router.delete("/orders/:id", (req, res) => {
  let param = { id: req.params.id };

  orders
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
