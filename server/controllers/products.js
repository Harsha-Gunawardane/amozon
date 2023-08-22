const products = require("../models/data")

const getProducts = async (req, res) => {
    const data = products
    
    res.send(products)
}

module.exports = { getProducts }