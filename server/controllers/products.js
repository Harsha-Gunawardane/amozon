const expressAsyncHandler = require("express-async-handler");

const data = require("../models/data");
const Product = require("../models/Product");

const addDefaultProducts = expressAsyncHandler(async (req, res) => {
  try {
    // await Product.deleteMany()
    const addedProducts = await Product.insertMany(data.products);
    res.send({ addedProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const getProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const getProductInfo = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = { getProducts, getProductInfo, addDefaultProducts };
