const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");
const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require("../utils/validators/productValidator");

const router = express.Router();

router.route("/").post(createProductValidator, createProduct).get(getProducts);

router
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(updateProductValidator, updateProduct)
  .delete(deleteProductValidator, deleteProduct);

module.exports = router;
