const express = require("express");
const { Sequelize, Op, initialize } = require("sequelize");
const router = express.Router();
const response = require("../response");
const models = require("../models/index");
const category = models.category;
const foods = models.foods;

// Menginisialisasi asosiasi antara model
// category.associate(foods);
// foods.associate(category);
// foods.associate(category);

router.get("/", (req, res) => {
  response(200, "Api v1 ready to go", "SUCCESS", res);
});

// Get All Data
// router.get("/food", (req, res) => {
//   const sql = "SELECT * FROM food";
//   db.query(sql, (err, fields) => {
//     if (err) throw err;
//     response(200, fields, "List food", res);
//   });
// });
router.get("/foods", (req, res) => {
  foods
    .findAll()
    .then((foods) => {
      res.json(foods);
    })
    .catch((error) => {
      res.json({
        message: "not found",
      });
    });
});

// Get by categoryId
router.get("/foods/categoryId/:categoryId", (req, res) => {
  const param = { categoryId: req.params.categoryId };

  foods
    .findAll({
      where: param,
    })
    .then((foods) => {
      res.json(foods);
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Get by id
router.get("/foods/:id", (req, res) => {
  const id = req.params.id;

  foods
    .findByPk(id)
    .then((foods) => {
      res.json(foods);
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// Post
router.post("/foods", (req, res) => {
  let data = {
    id: req.body.id,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
    categoryId: req.body.categoryId,
  };

  foods
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
router.put("/foods", (req, res) => {
  let param = { id: req.body.id };
  let data = {
    id: req.body.id,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
    categoryId: req.body.categoryId,
  };

  foods
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
router.delete("/foods/:id", (req, res) => {
  let param = { id: req.params.id };

  foods
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
