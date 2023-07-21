const orders = require("./models/orders");

const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      payload: data,
      message,
      pagination: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
