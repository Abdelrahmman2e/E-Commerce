const Review = require("../models/reviewModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
} = require("./factoryHandler");

exports.setProductAndUserIdToBody = (req, res, nxt) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  nxt();
};

exports.createFilterObj = (req, res, nxt) => {
  let filterObj = {};
  if (req.params.productId) filterObj = { product: req.params.productId };
  req.filterObj = filterObj;
  nxt();
};

exports.createReview = createOne(Review);

exports.getAllReviews = getAll(Review);

exports.getReview = getOne(Review);

exports.updateReview = updateOne(Review);

exports.deleteReview = deleteOne(Review);
