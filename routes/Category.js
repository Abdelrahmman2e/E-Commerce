const express = require("express");
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const {
  createCategoryValidator,
  getCategoryValidator,
  deleteCategoryValidator,
  updateCategoryValidator,
} = require("../utils/validators/categoryValidator");

const router = express.Router();

router
  .route("/")
  .post(createCategoryValidator, createCategory)
  .get(getCategories);
router
  .route("/:id")
  .get(getCategoryValidator, getCategory)
  .delete(deleteCategoryValidator, deleteCategory)
  .put(updateCategoryValidator, updateCategory);

module.exports = router;
