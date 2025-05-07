const Product = require("../models/productModel");

const {
  getAll,
  getOne,
  deleteOne,
  createOne,
  updateOne,
} = require("./factoryHandler");

exports.getProducts = getAll(Product);

exports.createProduct = createOne(Product);

exports.getProduct = getOne(Product);

exports.updateProduct = updateOne(Product);

exports.deleteProduct = deleteOne(Product);
