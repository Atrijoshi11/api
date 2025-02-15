const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
   const myData = await Product.find(req.query);
   console.log(
    " ~ file: product.js ~ line 10 ~ getAllProductsTesting ~ req.query",
    req.query
   );
    res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting};
