const data = require("../models/data");

const getProducts = async (req, res) => {
  res.send(data);
};

const getProductInfo = async (req, res) => {
  const product = data.find((x) => x.id === req.params.id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

module.exports = { getProducts, getProductInfo };
