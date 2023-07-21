const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(bodyParser.json());

app.use(cors());
app.use(express.json()); // Menggunakan built-in middleware express.json()
app.use(express.urlencoded({ extended: true })); // Menggunakan built-in middleware express.urlencoded()

const categoryRouter = require("./routes/category");
app.use("/api", categoryRouter);

const foodsRouter = require("./routes/foods");
app.use("/api", foodsRouter);

const ordersRouter = require("./routes/orders");
app.use("/api", ordersRouter);

const foodorderRouter = require("./routes/foodorder");
app.use("/api", foodorderRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
