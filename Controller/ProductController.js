const Product = require("./../models/Product");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    });
    res.status(201).json({
      status: "successs",
      data: product
    });
    console.log(JSON.stringify(product, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(201).json({
      status: "successs",
      data: products
    });
    console.log(JSON.stringify(products, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};
module.exports = { createProduct, getAllProduct };
