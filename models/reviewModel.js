const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      //   required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Min ratings value is 1.0"],
      max: [5, "Max ratings value is 5.0"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to User"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Review must belong to Product"],
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (nxt) {
  this.populate({ path: "user", select: "name" });
  nxt();
});

module.exports = mongoose.model("Review", reviewSchema);
