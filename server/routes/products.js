const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products")

router.get("/seed", productsController.addDefaultProducts)

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProductInfo)

module.exports = router;
