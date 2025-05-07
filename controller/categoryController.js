const Category = require("../models/categoryModel");

const {
  getOne,
  updateOne,
  createOne,
  deleteOne,
  getAll,
} = require("./factoryHandler");

exports.createCategory = createOne(Category);

exports.getCategories = getAll(Category);

exports.getCategory = getOne(Category);

exports.updateCategory = updateOne(Category);

exports.deleteCategory = deleteOne(Category);
