const express = require("express");

const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
  setProductAndUserIdToBody,
  createFilterObj,
} = require("../controller/ReviewController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(setProductAndUserIdToBody, createReview);
router
  .route("/:id")
  .get(createFilterObj, getReview)
  .put(updateReview)
  .delete(deleteReview);

module.exports = router;
